export default {
    
	getHourGroup: (period) => {
        period = moment(period)
        if (period.isSame(reports.getDateA(), 'day')) return 1
        if (period.isSame(reports.getDateB(), 'day')) return 2
        if (period.isSame(reports.getDateC(), 'day')) return 3
        if (period.isSame(reports.getDateA().add(-1, 'day'), 'day')) return 4
        else return 0
    },
  
    getLabel:() => {
        var c = []
        for (var i = 0; i < 24; i++) {
            c.push({
                'sort': i,
                'label': i < 3 ? '' : reports.getDateA().startOf('day').add(i, 'hours').format('HH:00')
            })
        }
        return JSON.stringify(c.sort((a, b) => a.sort - b.sort))
    },
  
    data: null,

    init: () => {
        var data = {1:{}, 2:{}, 3:{}, 4:{}}

        for (var i = 0; i < 24; i++) {
            data[1][i] = {'sort': i, 'value': 0}
            data[2][i] = {'sort': i, 'value': 0}
            data[3][i] = {'sort': i, 'value': 0}
            data[4][i] = {'sort': i, 'value': 0}
        }

        data = cubeH.data.data.cube.reduce((c, v) => {
            v = v.allSales
            if (!switcher.checkStore(v.storeCode)) return c
					  var d = switch_datetype.isSwitchedOn ? v.created.hour : v.ordered.hour
            const g = this.getHourGroup(d)
            if (g != 1 && g != 2 && g != 3 && g != 4) return c
            const idx = moment(d).format('H')
            if (!(idx in c[g])) {
                c[g][idx] = {'sort': idx, 'value': 0}
            }
            c[g][idx]['value'] += switcher.getValue(v)
            return c
        }, data)

        this.data = {}
        for (var g = 1; g <= 4; g++) {
            var skip = true
            for (i = 23; i > 0; i--) {
                if (data[g][i]['value'] !== null) skip = false
                if (data[g][i]['value'] === null && skip) data[g][i]['value'] = null
                data[g][i]['original'] = data[g][i]['value']
              }

            this.data[g] = format.toArray(data[g]).sort((a, b) => a.sort - b.sort)
        }
    },
  
    getData:(grp, settings) => {
        if (!this.data[grp]) return
        settings = Object.assign({zeroToNull: false, nullToZero: false}, settings)
        var res = JSON.parse(JSON.stringify(this.data[grp]))
        for (var i = 23; i >= 0; i--) {
            if (settings.zeroToNull && res[i]['value'] === 0) {
                res[i]['value'] = null
            }
            if (settings.nullToZero && res[i]['value'] === null) {
                res[i]['value'] = 0
            }
        }

        if (switch_cumulative.isSwitchedOn) {
            var maxHour = 0
            for (i = 23; i > 0 && maxHour == 0; i--) {
                maxHour = res[i]['value'] ? i : 0
            }

            const lastHour = (grp == 1) ? maxHour : 23
            for (i = lastHour; i > 0; i--) {
                for (var j = 0; j < i; j++) {
                    res[i]['value'] += res[j] ? res[j]['value'] : 0
                }
            }
        }

        for ( i = 0; i < 23; i++) {
            if (grp == 1) {
                const hh = reports.getDateA().startOf('day').add(i, 'hours');
                const title = format.cap(switcher.getEntityTitle()) + ' ' + switcher.getTypeTitle();
                res[i]['toolText'] = 
                    `<b>${title}</b><br><small>${hh.format('HH')}:00-${hh.add(1, 'hours').format('HH')}:00</small><br>${hh.format(config.format.date)}: ` +
                    (res[i] && res[i]['value'] ? this.format(res[i]['value']) : 'N/A')
                continue
            }
            const hh = grp == 2
                ? reports.getDateA().add(-1, 'day').add(i, 'hours')
                : grp == 3 
                ? reports.getDateB().add(i, 'hours')
                : reports.getDateC().add(i, 'hours');
            res[i]['toolText'] = 
                `${hh.format(config.format.date)}: ` +
                (res[i] && res[i]['value'] ? this.format(res[i]['value']) : 'N/A')
        }

        if (settings.raw) return res
        return  JSON.stringify(res)
    },	

    format: (value) => {
        if (switcher.getSign()) return format.currency(value, 2)
        return format.format(' ', value)
    },

    getSum: (grp) => {
        const values = this.data[grp]
        if (values) {
            return values.reduce((x, v) => x  + v['value'], 0)
        }
        return 0
    },

    getChart: () => {
        this.init()
        const mainBarOptions = switch_cumulative.isSwitchedOn ? {nullToZero: true} : {zeroToNull: true}
        return `
        {
            "type": "mscombi2d",
            "dataSource": {
            "chart": {
                    "drawCustomLegendIcon": "1",
                    "showZeroPlaneValue":"0",
                    "typeNotSupportedMessageColor": "#ffffff",
                    "drawCustomLegendIcon": "1",
                    "theme": "fusion",
                    "typeNotSupportedMessage":"...",
                    "plotSpacePercent":30,
                    "alignCaptionWithCanvas": 1,
                    "anchorRadius": 2,
                    "lineThickness": 2,
                    "zeroPlaneColor": "#FF0000",
                    "captionAlignment": "center",
                    "captionPadding": "20",
                    "captionFontBold": "0",
                    "captionFontColor": "#231F20",
                    "numberprefix": "${switcher.getSign()}",
                    "legendIconBgAlpha": "100",
                    "legendIconAlpha": "100",
                    "canvasPadding": "0",
                    "chartLeftMargin": "20",
                    "areaOverColumns": "0",
                    "chartTopMargin": "10",
                    "chartRightMargin": "0",
                    "chartBottomMargin": "30",
                    "chartLeftMargin": 0,
                    "labelFontColor": "#716e6e",
                    "xAxisNameFontColor": "#716e6e",
                    "yAxisValueFontColor": "#716e6e",
                    "showsum": "1",
                    "yAxisNameFontColor": "#716e6e",
                    "renderAt": "chartContainer",
                    "width": "100%",
                    "decimals": "1",
                    "showValues": "0",
                    "valueFontColor" :"#808080",
                    "rotateValues": "1",
                    "placeValuesInside": "0",
                    "yAxisName": "",
                    "subcaption": "Hourly",
                    "labelDisplay": "NONE",
                    "labelStep": 3,
                    "showLegend": 1,
                    "legendPosition": "absolute",
                    "legendXPosition": 35,
                    "legendYPosition": 500,
                    "legendIconScale1": 0.7,
                    "legendCaptionFontSize1": 6,
                    "baseFont": "Inter",
                    "baseFontSize": "12",
                    "captionFontSize": "20",
                    "labelFontSize": "11",
                    "legendItemFontSize": 11,
                    "yAxisNameFontSize": "11",
                    "yAxisValueFontSize": "11",
                    "xAxisNameFontSize": "11"
                },
                "categories": [{
                    "category": ${chartHours.getLabel()}
                }],

                "dataset": [
                    {
                        "color": "${ui.colors.set[0]}",
                        "anchorBgColor": "${ui.colors[0]}",
                        "seriesname": "${reports.getDateA().format(config.format.date)}",
                        "data": ${chartHours.getData(1, mainBarOptions)}
                    },
                    {
                        "color": "${ui.colors.set[1]}",
                        "anchorBgColor": "${ui.colors.set[1]}",
                        "seriesname": "${reports.getDateA().add(-1, 'day').format(config.format.date)}",
                        "renderas": "line",
                        "data": ${chartHours.getData(4, {nullToZero: true})}
                    },
                    {
                        "color": "${ui.colors.set[4]}",
                        "anchorBgColor": "${ui.colors.set[4]}",
                        "seriesname": "${reports.getDateB().format(config.format.date)}",
                        "renderas": "line",
                        "visible": "0",
                        "data": ${chartHours.getData(2, {nullToZero: true})}
                    },
                    {
                        "color": "${ui.colors.set[3]}",
                        "anchorBgColor": "${ui.colors[3]}",
                        "seriesname": "${reports.getDateC().format(config.format.date)}",
                        "renderas": "line",
                        "visible": "0",
                        "data": ${chartHours.getData(3, {nullToZero: true})}

                    }
                    ${!switch_cumulative.isSwitchedOn ||1? `` : `
                    ,{
                        "color": "${ui.colors.set[0]}",
                        "seriesname": "",
                        "anchorRadius": "1",
                        "renderas": "line",
                        "dashed":1,
                        "lineThickness": 1,
                        "plottooltext": "Sum",
                        "data": ${chartHours.getData(1, {nullToZero: true})}
                    }`}
                ],
                "trendline1s": [{
                    "line": [
                        ${switch_cumulative.isSwitchedOn ?
                        `` :
                        `{
                            "startvalue": "${chartHours.getSum(2) / 24}",
                            "color": "${ui.colors.set[1]}",
                            "thickness": "1",
                            "showBelow": "1",
                            "displayValue": " ",
                            "dashed": "1",
                            "tooltext": "${reports.getDateB().format(config.format.date)} avg. value: $value"
                        },
                        {
                            "startvalue": "${chartHours.getSum(1) / (moment(Date()).hour() + 1) }",
                            "color": "${ui.colors.set[0]}",
                            "thickness": "1",
                            "dashed": "1",
                            "displayValue": " ",
                            "tooltext": "${reports.getDateA().format(config.format.date)}: avg. value: $value"
                        }`}
                    ]
                }]
            }
        }
        `
    }
  }
