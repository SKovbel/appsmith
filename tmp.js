export default {
    reportDayByStore: () => {
         var res = cube.data.data.cube.reduce((x, a) => {
             a = a.allSales
             if (a.storeCode == 'uk') return x
             if (!switcher.checkStore(a.storeCode)) return x
             var d = switch_datetype.isSwitchedOn ? a.created.day : a.ordered.day
             var group = reports.getWeekGroup(d)
             if (group != 1) return x
             if (!x.hasOwnProperty(a.storeCode)) {
                 x[a.storeCode] = {
                     'label': reports.stores[a.storeCode],
                     'value': 0,
                     'color': ui.colors.set[ Object.keys(x).length]
                 }
             }
             x[a.storeCode]['value'] += switcher.getValue(a)
             return x
         }, {})
         res = format.toArray(res)
         return res.length > 0 ? res : []
     },
  
     reportDayByOneStore: () => {
         return cube.data.data.cube.reduce((x, a) => {
             a = a.allSales
             if (a.storeCode != 'uk') return x
             var d = switch_datetype.isSwitchedOn ? a.created.day : a.ordered.day
             var group = reports.getWeekGroup(d)
             if (group != 1) return x
             x += switcher.getValue(a)
             return x
         }, 0)
     },
  
     getChart:() => {
         const data = this.reportDayByStore()
         const ukValue = this.reportDayByOneStore('uk')
         const caption = 'Weekly'
         return `
         {
             "type": "doughnut2d",
             "dataSource": {
               "chart": {
                 "theme": "fusion",
                 "labelSepChar":"<br>",
                 "doughnutRadius":"70",
                 "alignCaptionWithCanvas": 1,
                 "captionAlignment": "center",
                 "captionPadding": "0",
                 "captionFontBold": "0",
                 "captionFontColor": "#231F20",
                 "legendIconSides": "4",
                 "legendIconBgAlpha": "100",
                 "legendIconAlpha": "10",
                 "legendPosition": "top",
                 "canvasPadding": "0",
                 "chartLeftMargin": "0",
                 "chartTopMargin": "0",
                 "chartRightMargWeein": "0",
                 "chartBottomMargin": "0",
                 "labelFontColor": "#231F20",
                 "centerLabelColor":"#231F20", 
                 "renderAt": "chartContainer",
                 "decimals": "0",
                 "showlegend": "0",
                 "valueFontColor" :"#808080",
                 "formatNumberScale": 0,
                 "showValues": "1",
                 "showPercentValues": "0",
                 "numberPrefix": "${switcher.getSign()}",
                 "showPercentInToolTip": "1",
                 "subcaption": "${caption}",
                 "plottooltext": "<b>${format.cap(switcher.getEntityTitle())} ${switcher.getTypeTitle()}</b><br>$label: $percentValue",
                 "defaultcenterlabel": "UK<br><b>${format.format(switcher.getSign(), ukValue)}</b>",
                 "yAxisName": "",
                 "baseFont": "Inter",
                 "baseFontSize": "12",
                 "captionFontSize": "20",
                 "labelFontSize": "11",
                 "legendItemFontSize": 11,
                 "yAxisNameFontSize": "11",
                 "yAxisValueFontSize": "11",
                 "xAxisNameFontSize": "11"
               },
               "data": ${JSON.stringify(data)}
             }
           }
           `
     }
  }
  