export default {
    data: null,
    labels: null,

    init: () => {
        var data = {1:{}, 2:{}, 3:{}}
  
        for (var i = 0; i < 7; i++) {
            data[1][i] = {'sort': i, 'value': 0/*, 'toolText': 'dddd'*/}
            data[2][i] = {'sort': i, 'value': 0}
            data[3][i] = {'sort': i, 'value': 0}
        }
  
        data = cube.data.data.cube.reduce((c, v) => {
            v = v.allSales
            if (!switcher.checkStore(v.storeCode)) return c
					  var d = switch_datetype.isSwitchedOn ? v.created.day : v.ordered.day
            var g = reports.getWeekGroup(d)
            if (g != 1 && g != 2 && g != 3) return c
            const idx = moment(d).day()
            const val = switcher.getValue(v);
            c[g][idx]['value'] = val + (c[g][idx]['value'] ? c[g][idx]['value'] : 0)
            return c
        }, data)
  
        this.data = {}
        for (var g = 1; g <= 3; g++) {
            var skip = true
            for (i = 6; i >= 0; i--) {
                if (data[g][i]['value'] !== null) skip = false
                if (data[g][i]['value'] === null && skip) data[g][i]['value'] = null

            }
            this.data[g] = format.toArray(data[g]).sort((a, b) => a.sort - b.sort)
        }
    },
    
    getLabels:() => {
        var labels = reports.days.map((v) => {return {'label': v}})
        return JSON.stringify(labels)
    },
    
    getData: (grp, settings) => {
        if (!this.data[grp]) return
        settings = Object.assign({zeroToNull: false, nullToZero: false, ignoreValues: false}, settings)
        var res = JSON.parse(JSON.stringify(this.data[grp]))
        for (var i = 6; i >=0; i--) {
            if (settings.zeroToNull && res[i]['value'] === 0) {
                res[i]['value'] = null
            }
            if (settings.nullToZero && res[i]['value'] === null) {
                res[i]['value'] = 0
            }
        }
        if (switch_cumulative.isSwitchedOn) {
            for ( i = 6; i >0; i--) {
                const ignoreValues = res[i]['value'] && settings.ignoreValues
                for (var j = 0; j < i; j++) {
                    if (res[i]['value'] !== null) {
                        res[i]['value'] += res[j] ? res[j]['value'] : 0
                    }
                }
                if (ignoreValues) {
                    res[i]['value'] = null
                }
            }
        }
        for ( i = 0; i < 7; i++) {
            if (grp == 1) {
                const day = reports.getDateA().startOf('week').add(i, 'days');
                const title = format.cap(switcher.getEntityTitle()) + ' ' + switcher.getTypeTitle();
                res[i]['toolText'] = 
                    `<b>${title}</b><br><br>${day.format('dddd ' + config.format.date)}: ` +
                    (res[i] && res[i]['value'] ? this.format(res[i]['value']) : 'N/A')
                continue
            }
            const day = grp == 2
                ? reports.getDateB().startOf('week').add(i, 'days')
                : reports.getDateC().startOf('week').add(i, 'days');
            res[i]['toolText'] = 
                `${day.format('dddd ' + config.ui.date.date)}: ` +
                (res[i] && res[i]['value'] ? this.format(res[i]['value']) : 'N/A')
        }
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
  
    getDaysCount: (date) => {
        if (date < moment(Date()).startOf('week')) return 7
        return date.days()
    },
  
    getChart: () => {
        this.init()
        return `
        {
            "type": "mscombi2d",
            "dataSource": {
                "chart": {
                    "drawCustomLegendIcon": "1",
                    "showZeroPlaneValue":"0",
                    "theme": "fusion",
                    "anchorRadius": "2",
                    "lineThickness": 2,
                    "alignCaptionWithCanvas": 1,
                    "captionAlignment": "center",
                    "captionPadding": "20",
                    "captionFontBold": "0",
                    "captionFontColor": "#231F20",
                    "legendIconSides": "4",
                    "legendIconBgAlpha": "100",
                    "legendIconAlpha": "100",
                    "canvasPadding": "0",
                    "chartLeftMargin": "20",
                    "chartTopMargin": "10",
                    "chartRightMargin": "0",
                    "chartBottomMargin": "30",
                    "labelFontColor": "#716e6e",
                    "xAxisNameFontColor": "#716e6e",
                    "yAxisValueFontColor": "#716e6e",
                    "yAxisNameFontColor": "#716e6e",
                    "renderAt": "chartContainer",
                    "plotSpacePercent":60,
                    "decimals": "1",
                    "valueFontColor" :"#808080",
                    "rotateValues": "1",
                    "placeValuesInside": "1",
                    "subcaption": "Daily",
                    "showLegend": 1,
                    "legendPosition": "absolute",
                    "legendXPosition": 75,
                    "legendNumRows" : 1,
                    "axisLineAlpha": "10",
                    "base": "10",
                    "legendYPosition": 500,
                    "numberprefix": "${switcher.getSign()}",
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
                    "category": ${chartDays.getLabels()}
                }],
                "dataset": [
                    {
                        "color": "${config.ui.colors.set[0]}",
                        "renderas": "",
                        "anchorBgColor": "${config.ui.colors.set[0]}",
                        "seriesname": "${reports.getDateA().format(config.format.week)}",
                        "data": ${chartDays.getData(1, {zeroToNull: true})}
                    },
                    {
                        "renderas": "line",
                        "anchorBgColor": "${config.ui.colors.set[1]}",
                        "color": "${config.ui.colors.set[1]}",
                        "seriesname": "${reports.getDateB().format(config.format.week)}",
                        "data": ${chartDays.getData(2, {nullToZero: true})},
                        "legendIconBgColor": "${config.ui.colors.set[1]}"
                    },
                    {
                        "renderas": "line",
                        "visible": "0",
                        "anchorBgColor": "${config.ui.colors.set[4]}",
                        "color": "${config.ui.colors.set[4]}",
                        "seriesname": "${reports.getDateC().format(config.format.week)}",
                        "data": ${chartDays.getData(3, {nullToZero: true})},
                        "legendIconBgColor": "${config.ui.colors.set[4]}"
                    }
                    ${switch_cumulative.isSwitchedOn == false ||1? `` : `
                    ,{
                      "color": "${config.ui.color.set[0]}",
                      "anchorBgColor": "${config.ui.colors.set[0]}",
                      "seriesname": "",
                        "anchorRadius": "1",
                        "renderas": "line",
                        "dashed":1,
                        "lineThickness": 1,
                        "showToolTip": 0,
                        "plottooltext": " ",
                        "data": ${chartDays.getData(1, {nullToZero: true})}
                    }`}
                ]
                ${switch_cumulative.isSwitchedOn ? `` : `
                    , "trendline1s": [{
                      "line": [
                          {
                              "startvalue": ${chartDays.getSum(2) / 7 },
                              "displayValue":" ",
                              "color": "#ec4899",
                              "color": "${config.ui.colors.set[1]}",
                              "thickness": "1",
                              "dashed": "1",
                              "showBelow": "1",
                              "valueOnRight": "1",
                              "tooltext": "${"Previous year avg. value: "+Math.round(chartDays.getSum(2) / 7 / 10) / 100 }"
                          },
                          {
                              "startvalue": ${chartDays.getSum(1) / (1+chartDays.getDaysCount(reports.getDateA()))},
                              "displayValue":" ",
                              "color": "${config.ui.colors.set[0]}",
                              "thickness": "1",
                              "dashed": "1",
                              "valueOnRight": "1",
                              "tooltext": "${"Current week avg. value:. " + Math.round(chartDays.getSum(1) / (1+chartDays.getDaysCount(reports.getDateA())) / 10) / 100 }"
                          }
                      ]
                    }]`
                }                  
            }
        }`
    }
  }
  