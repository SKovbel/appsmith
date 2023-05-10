var config = require('./config');

exports.format = {
    round: (n, d) => Number(Math.round(n + 'e+' + d)  + 'e-' + d),

    percent: (a, b) => (a && b) 
        ? (Math.round(Number(10000 * (a - b) / b) / 100).toLocaleString(config.ui.locale)) + '%' 
        : null,

    format: (title, v, hideZero) => {
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
            options['currency'] = config.ui.currency
        }
        return v.toLocaleString(config.ui.locale, options)
    },

    toArray: (obj) => {
        var arr = []
        for(let k of Object.keys(obj).sort()) {
            arr.push(obj[k])
        }
        return arr
    },

    currency: (v, maxFraction, minFraction) => {
        if (v === '' || v === null || isNaN(v)) return v
        var settings = {
            style: 'currency',
            currency: config.ui.currency,
        }
        if (maxFraction > 0 || maxFraction === 0 || maxFraction === '0') {
            settings['maximumFractionDigits'] = maxFraction
        }
        if (minFraction > 0 || minFraction === 0 || minFraction === '0') {
            settings['minimumFractionDigits'] = minFraction
        }
        const intl = new Intl.NumberFormat(config.ui.locale, settings);
        var result = intl.format(v)
            .replace(/\s/i, '')
            .replace(/[^0-9\,\.\-]/i, '')
            .trim()
        return config.ui.currencySign + result
    },

    currency: (v, maxFraction, minFraction) => {
        if (v === '' || v === null || isNaN(v)) return ''
        if (v === 0 && hideZero) return ''
        var settings = {
            style: 'currency',
            currency: 'GBP'
        }
        if (maxFraction > 0 || maxFraction === 0 || maxFraction === '0') {
            settings['maximumFractionDigits'] = maxFraction
        }
        if (minFraction > 0 || minFraction === 0 || minFraction === '0') {
            settings['minimumFractionDigits'] = minFraction
        }
        const formater = new Intl.NumberFormat('en-GB', settings);
        var result = formater.format(v)
        result = result.replace(/[^0-9\,\.\-]/i, '').trim()
        return '$' + result
    },

    toInt: (val) => {
        return val && (typeof val === 'string' || val instanceof String) 
            ? parseInt(val.replace(/[^\d.-]/g, '')) 
            : val
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
    },

    cap: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}
