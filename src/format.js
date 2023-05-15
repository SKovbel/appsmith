exports.format = {
    round: (n, d) => Number(Math.round(n + 'e+' + d)  + 'e-' + d),

    percent: (a, b) => (a && b) 
        ? (Math.round(Number(10000 * (a - b) / b) / 100).toLocaleString(config.ui.locale)) + '%' 
        : null,

    // @depricated
    formatOld: (title, v, hideZero) => {
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
            options['currency'] = config.locale.currency
        }
        return v.toLocaleString(window.config.locale.name, options)
    },

    // currency(12345.67, {d: 0, c: 1})
    format: (v, params = {}) => {
        params = Object.assign({currency: false, decimal: 0}, params)

        if (v === '' || v === null || isNaN(v)) return ''
        if ( params.hideZero) return ''

        var settings = {}
        settings.style = 'currency',
        settings.currency = config.locale.currency

        if (params.decimal > 0) {
            settings.minimumFractionDigits = params.decimal
            settings.maximumFractionDigits = params.decimal
            v = Math.round(100 * v) / 100
        } else {
            v = Math.round(v)
        }

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
        params = Object.assign({decimal: 0}, params)
        params.currency = 2

        return format.format(v, params)
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
    },

    colorizeRow: (val, negativeOnly) => {
        const v = format.toInt(val)
        if (v == 0) return ''
        if (v > 0 && negativeOnly) return ''
        return v > 0 
            ? config.ui.table.colors.positive 
            : config.ui.table.colors.negative
    },

    colorizeCell: (val) => {
        if (!val) return '#F0F0F0'
        if (!(val.length > 0)) return '#F0F0F0'
        return '#FFFFFF'
    }
}
