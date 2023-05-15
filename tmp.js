export default {
    data: null,
  
    getLabels:() => {
        var c = []
        var q = ''
        for (var i = 0; i < 4; i++) {
            const d = reports.getDateA().startOf('year').add(i, 'quarter')
            c.push({'sort': i + 0.1, 'label': 'Q' + d.quarter()})
        }
        return JSON.stringify(c.sort((a, b) => a.sort - b.sort))
    },
  
    init: () => {
        var data = {1:{}, 2:{}, 3:{}}
  
        for (var i = 0; i < 4; i++) {
            data[1][i] = {'sort': i, 'value': 0}
            data[2][i] = {'sort': i, 'value': 0}
            data[3][i] = {'sort': i, 'value': 0}
        }
  
        data = cubeY.data.data.cube.reduce((c, v) => {
            v = v.allSales
            if (!switcher.checkStore(v.storeCode)) return c
            var d = switch_datetype.isSwitchedOn ? v.created.day : v.ordered.day
            var g = reports.getMonthGroup(d)
            if (g != 1 && g != 2 && g != 3) return c
            const idx = moment(d).quarter() - 1
            const val = switcher.getValue(v);
            c[g][idx]['value'] = val + (c[g][idx]['value'] ? c[g][idx]['value'] : 0)
            return c
        }, data)
  
        this.data = {}
        for (var g = 1; g <= 3; g++) {
            var skip = true
            for (i = 3; i > 0; i--) {
                if (data[g][i]['value'] !== null) skip = false
                if (data[g][i]['value'] === null && skip) data[g][i]['value'] = null
            }
            this.data[g] = format.toArray(data[g]).sort((a, b) => a.sort - b.sort)
        }
    },
  
    getData: (grp, settings) => {
        if (!this.data[grp]) return
        settings = Object.assign({zeroToNull: false, nullToZero: false, ignoreValues: false}, settings)
        var res = JSON.parse(JSON.stringify(this.data[grp]))
        for (var i = 3; i >= 0; i--) {
            if (settings.zeroToNull && res[i]['value'] === 0) {
                res[i]['value'] = null
            }
            if (settings.nullToZero && res[i]['value'] === null) {
                res[i]['value'] = 0
            }
        }

        if (switch_cumulative.isSwitchedOn) {
            for (i = 3; i >= 0; i--) {
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

        for (i = 0; i < res.length; i++) {
            if (grp == 1) {
                const mm = reports.getDateA().startOf('year').add(i, 'quarter');
                const title = format.cap(switcher.getEntityTitle()) + ' ' + switcher.getTypeTitle();
                res[i]['toolText'] = 
                    `<b>${title}</b><br><br>Q${mm.quarter()}: ` +
                    (res[i] && res[i]['value'] ? this.format(res[i]['value']) : 'N/A')
                continue
            }
            const mm = grp == 2
                ? reports.getDateY().startOf('year').add(i, 'quarter')
                : reports.getDateYY().startOf('year').add(i, 'quarter');
            res[i]['toolText'] = 
                `Q${mm.quarter()}: ` +
                (res[i] && res[i]['value'] ? this.format(res[i]['value']) : 'N/A')
        }

        return JSON.stringify(res)
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
          return `
          {
              "type": "mscombi2d",
              "dataSource": {
                "chart": {
                    "showZeroPlaneValue":"0",
                    "theme": "fusion",
                    "drawCustomLegendIcon": "1",
                    "plotSpacePercent":30,
                    "alignCaptionWithCanvas": 1,
                    "plotSpacePercent":65,
                    "anchorRadius": "2",
                    "lineThickness": 2,
                    "captionFontBold": "0",
                    "captionAlignment": "center",
                    "captionPadding": "20",
                    "captionFontColor": "#231F20",
                    "legendIconSides": "4",
                    "legendIconBgAlpha": "100",
                    "legendIconAlpha": "100",
                    "legendPosition": "bottom",
                    "canvasPadding": "0",
                    "chartLeftMargin": "20",
                    "showYAxisValues": 0,
                    "chartTopMargin": "0",
                    "chartRightMargin": "10",
                    "chartBottomMargin": "40",
                    "labelFontColor": "#716e6e",
                    "xAxisNameFontColor": "#716e6e",
                    "yAxisValueFontColor": "#716e6e",
                    "yAxisNameFontColor": "#716e6e",
                    "renderAt": "chartContainer",
                    "decimals": "1",
                    "valueFontColor" :"#808080",
                    "rotateValues": "1",
                    "placeValuesInside": "0",
                    "subcaption": "Quarterly",
                    "numberprefix": "${switcher.getSign()}",
                    "caption": "",
                    "showLegend": 1,
                    "legendPosition": "absolute",
                    "legendXPosition": 55,
                    "legendYPosition": 500,
                    "baseFont": "Inter",
                    "baseFontSize": "12",
                    "captionFontSize": "20",
                    "labelFontSize": "11",
                    "legendItemFontSize": 11,
                    "yAxisNameFontSize": "11",
                    "yAxisValueFontSize": "11",
                    "xAxisNameFontSize": "11",
                    "rotateValues": "0"
                },
            
                "categories": [{
                    "category": ${this.getLabels()}
                }],
                "dataset": [
                    {
										     "showValues": "1",
                        "color": "${ui.colors.set[0]}",
                        "anchorBgColor": "${ui.colors.set[0]}",
                        "seriesname": "${reports.getDateA().format('YYYY')}",
                        "data": ${this.getData(1, {zeroToNull: true})}
                    },
                    {
                        "color": "${ui.colors.set[1]}",
                        "anchorBgColor": "${ui.colors.set[1]}",
                        "renderas": "line",
                        "seriesname": "${reports.getDateY().format('YYYY')}",
                        "data": ${this.getData(2, {zeroToNull: true})}
                    },
                    {
                        "color": "${ui.colors.set[2]}",
                        "anchorBgColor": "${ui.colors.set[2]}",
                        "renderas": "line",
                        "visible": "0",
                        "seriesname": "${reports.getDateYY().format('YYYY')}",
                        "data": ${this.getData(3, {zeroToNull: true})}
                    }
                    ${switch_cumulative.isSwitchedOn == false ||1? `` : `
                    ,{
                        "color": "${ui.colors.set[0]}",
                        "seriesname": "",
                        "anchorRadius": "1",
                        "renderas": "line",
                        "dashed":1,
                        "plottooltext": " ",
                        "data": ${this.getData(1, {nullToZero: true})}
                    }`}
                ]
              }
          }`
      }
  }
  
  