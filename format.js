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

    exports.format = (title, v, hideZero) => {
        if (v === '' || v === null || isNaN(v)) return ''
        if (v === 0 && hideZero) return ''
        var options = {minimumFractionDigits: 0, maximumFractionDigits: 0}
        title = title.toLowerCase()
        if (title.includes('aov') || title.includes('atv') || title.includes('rate') 
            || title.includes('%') || title.includes('conversion')) {
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

    exports.currency = (v, hideZero, fractions) => {
        if (v === '' || v === null || isNaN(v)) return ''
        if (v === 0 && hideZero) return ''
        fractions = fractions ? fractions : 0
        const formater = new Intl.NumberFormat(kitroyale.config.ui.locale, {
            style: 'currency',
            currency: kitroyale.config.ui.currency,
            maximumFractionDigits: fractions
        });
        return formater.format(v).replace(/\s/g, '')
    }
   
    exports.toInt = (val) => {
        return val && (typeof val === 'string' || val instanceof String) 
            ? parseInt(val.replace(/[^\d.-]/g, '')) 
            : val
    }

    exports.colorizeRow = (val, negativeOnly) => {
        const v = format.toInt(val)
        if (v == 0) return ''
        if (v > 0 && negativeOnly) return ''
        return v > 0 
            ? kitroyale.config.ui.table.colors.positive 
            : kitroyale.config.ui.table.colors.negative
    }

    exports.cap = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
})
