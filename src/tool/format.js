exports.format = {
    round: (n, d) => Number(Math.round(n + 'e+' + d)  + 'e-' + d),

    format: (v, params = {}) => {
        params = Object.assign({currency: false, decimal: 0}, params)

        if (v === '' || v === null || isNaN(v)) return ''
        if (params.hideZero) return ''

        var settings = {}
        settings.style = 'currency',
        settings.currency = config.locale.currency
        settings.minimumFractionDigits = params.decimal > 0 ? params.decimal : 0
        settings.maximumFractionDigits = params.decimal > 0 ? params.decimal : 0

        const intl = new Intl.NumberFormat(window.config.locale.name, settings);
        var result = intl.format(v)
            .replace(/\s/i, '')
            .replace(/[^0-9\,\.\-]/i, '')
            .trim()

        if (params.currency) {
            result = config.locale.currencySign + result
        }

        if (params.percent) {
            result = result + '%'
        }

        return result
    },

    currency: (v, params = {}) => {
        params.currency = 2
        return format.format(v, params)
    },

    percent: (a, b, params = {}) => {
        params.percent = true
        params.decinal = 2
        return (a && b) ? format.format(100 * (a - b) / b, params) : null
    },

    toInt: (val) => {
        return val && (typeof val === 'string' || val instanceof String) 
            ? parseInt(val.replace(/[^\d.-]/g, '')) 
            : val
    },

    toArray: (obj) => {
        var arr = []
        for(let k of Object.keys(obj).sort()) {
            arr.push(obj[k])
        }
        return arr
    },

    cap: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}
