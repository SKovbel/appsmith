// File format.js
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory)
    } else if (typeof exports !== "undefined") {
        factory(exports)
    } else {
        var mod = {exports: {}}
        factory(mod.exports)
        global.format = mod.exports
    }
})(this, function (exports) {
    "use strict"

    exports.round =  (n, d) => Number(Math.round(n + 'e+' + d)  + 'e-' + d)

    exports.percent = (a, b) => (a && b) 
        ? (Math.round(Number(10000 * (a - b) / b) / 100).toLocaleString(kitroyale.config.ui.locale)) + '%' 
        : null

    exports.format = (title, v) => {
        if (v === '' || v === null || isNaN(v)) return ''
        var options = {minimumFractionDigits: 0, maximumFractionDigits: 0}
        if (title.includes('AOV') || title.includes('ATV') || title.includes('Rate') || title.includes('%')) {
            options['minimumFractionDigits'] = 2
            options['maximumFractionDigits'] = 2
            v = Math.round(100 * v) / 100
        } else {
            v = Math.round(v)
        }
        if (title.includes('£') || title.includes('$')) {
            options['style'] = "currency"
            options['currency'] = kitroyale.config.ui.currency
        }
        return v.toLocaleString(kitroyale.config.ui.locale, options)
    }

    exports.toArray = (obj) => {
        var arr = []
        for(let k of Object.keys(obj).sort()) {
            arr.push(obj[k])
        }
        return arr
    }

    exports.toInt = (val) => {
        return val && val.length > 0 ? val.replace(/[^\d.-]/g, '') : ''
    }

    exports.colorizeRow = (idx) => {
        if (idx in currentRow) {
            return this.toInt(currentRow[idx]) > 0 
                ? kitroyale.config.ui.table.colors.positive 
                : kitroyale.config.ui.table.colors.negative
        }
        return ''
    }
})
