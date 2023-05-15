export default {
    data: null,

    getlabel:() => {
        var res = cubeYY.data.data.cube.reduce((c, v) => {
            v = v.allSales
	          var d = switch_datetype.isSwitchedOn ? v.created.year : v.ordered.year
            const y = moment(d).format('YYYY')
            c[y] = {
                "sort": y,
                "label": moment(d).format('YYYY')
            }
            return c
        }, {})
        res = format.toArray(res)
        return JSON.stringify(res.sort((a, b) => a.sort - b.sort))
    },

    init: () => {
        var data = {"uk": {}, "us": {}, "eu": {}, "sq": {}}
        var keys = Object.keys(data)
        this.data = cubeYY.data.data.cube.reduce((c, v) => {
            v = v.allSales
            var d = switch_datetype.isSwitchedOn ? v.created.year : v.ordered.year
            if (!switcher.checkStore(v.storeCode)) return c
            const storeCode = v.storeCode
            const y = moment(d).format('YYYY')
            for (var sc of keys) {
                if (!(y in c[sc])) {
                    c[sc][y] = {
                        "sort": y,
                        "value": 0
                    }
                }
            }
            c[storeCode][y]["value"] += switcher.getValue(v)
            c[storeCode][y]["toolText"] = `<b>$seriesName</b>: ${this.format(c[storeCode][y]["value"])}`
            return c
        }, data)
    },

    format: (value) => {
        if (switcher.getSign()) return format.currency(value, 2)
        return format.format(' ', value)
    },

    getData:(what) => {
        var res = this.data[what]
        res = format.toArray(res).sort((a, b) => a.sort - b.sor)
        if (switch_cumulative.isSwitchedOn) {
            for (var i = res.length - 1; i > 0; i--) {
                for (var j = 0; j < i; j++) {
                    res[i]["value"] += res[j]["value"] ? res[j]["value"] : 0
                }
            }
        }
        return JSON.stringify(res)
    },

    getChart: () => {
        this.init()
        return `
        {
            "type": "stackedcolumn2d",
            "dataSource": {
                "chart": {
                    "theme": "fusion",
                    "drawCustomLegendIcon": "1",
                    "alignCaptionWithCanvas": 1,
                    "showZeroPlaneValue":"0",
                    "captionAlignment": "center",
                    "captionPadding": "20",
                    "captionFontBold": "0",
                    "captionFontColor": "#231F20",
                    "numberprefix": "${switcher.getSign()}",
                    "legendIconSides": "4",
                    "legendIconBgAlpha": "100",
                    "legendIconAlpha": "100",
                    "legendPosition": "bottom",
                    "drawcrossline": "1",
                    "plotSpacePercent":40,
                    "showLegend": 0,
                    "canvasPadding": "0",
                    "areaOverColumns": "0",
                    "chartTopMargin": "0",
                    "chartRightMargin": "0",
                    "chartBottomMargin": "40",
                    "chartLeftMargin": 0,
                    "labelFontColor": "#716e6e",
                    "xAxisNameFontColor": "#716e6e",
                    "yAxisValueFontColor": "#716e6e",
                    "valueFontColor": "#716e6e",
                    "showYAxisValues": 0,
                    "showsum": "1",
                    "yAxisNameFontColor": "#716e6e",
                    "renderAt": "chartContainer",
                    "width": "100%",
                    "decimals": "0",
                    "showValues": "0",
                    "rotateValues": "0",
                    "placeValuesInside": "0",
                    "subcaption": "Annualy",
                    "yAxisName": "",
                    "showLegend": 1,
                    "legendPosition": "absolute",
                    "legendXPosition": 25,
                    "legendYPosition": 500,
                    "legendNumRows": 1,
                    "legendWidth": "810",
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
                    "category": ${chartYears.getlabel()}
                }],
                "dataset": [
                    {
                        "color": "${ui.color.set[0]}",
                        "anchorBgColor": "${ui.color.set[0]}",
                        "visible": 1,
                        "seriesname": "UK",
                        "plottooltext": "$seriesName: $dataValue",
                        "data": ${chartYears.getData("uk")}
                    }, 
                    {
                        "color": "${ui.color.set[4]}",
                        "visible": 1,
                        "anchorBgColor": "${ui.color.set[4]}",
                        "seriesname": "US",
                        "plottooltext": "$seriesName: $dataValue",
                        "data": ${chartYears.getData("us")}
                    }, 
                    {
                        "color": "${ui.color.set[3]}",
                        "visible": 1,
                        "anchorBgColor": "${ui.color.set[3]}",
                        "seriesname": "EU",
                        "plottooltext": "$seriesName: $dataValue",
                        "data": ${chartYears.getData("eu")}
                    }, 
                    {
                        "color": "${ui.color.set[2]}",
                        "visible": 1,
                        "anchorBgColor": "${ui.color.set[2]}",
                        "seriesname": "Retail",
                        "plottooltext": "$seriesName: $dataValue",
                        "data": ${chartYears.getData("sq")}
                    }
                ]
            }
        }`
    }
}
