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

    exports.percent = (a, b) => (a && b) 
        ? (Math.round(Number(10000 * (a - b) / b) / 100).toLocaleString(kitroyale.kitroyale.ui.locale)) + '%' 
        : null

    exports.format = (title, v) => {
        if (v == 0 || isNaN(v)) return ''
        var options = {minimumFractionDigits: 0, maximumFractionDigits: 0}
        if (title.includes('AOV') || title.includes('ATV') || title.includes('Rate')) {
            options['minimumFractionDigits'] = 2
            options['maximumFractionDigits'] = 2
            v = Math.round(100 * v) / 100
        } else {
            v = Math.round(v)
        }
        if (title.includes('£')) {
            options['style'] = "currency"
            options['currency'] = kitroyale.kitroyale.ui.currency
        }
        return v.toLocaleString(kitroyale.kitroyale.ui.locale, options)
    }

    exports.toArray = (obj) => {
        var arr = []
        for(let k of Object.keys(obj).sort()) {
            arr.push(obj[k])
        }
        return arr
    }
})
