export default {
    blockEcommerceRevenueTitle: () => {
        if (switcher.getUnitTitle() == 'revenue' && switcher.getEntityTitle() == 'sales') {
            return 'sales'
        }
        return switcher.getEntityTitle() + " " + switcher.getUnitTitle()
    },

    getValue:(what, sign) => {
        var res = reports.reportWtd(1)
        if (!res[what])  return 'N/A'
        return format.format(res[what], {decimal: 0, currency: sign ? true : false})
    },

    getValueEcomm:(what, sign, currDecimal) => {
        if (!reports.isEcommerce()) return 'N/A'
        var res = reports.reportWtd(1, ['uk', 'us', 'eu'])
        if (!res[what]) return 'N/A'
        if (sign === '%') return format.format('%', res[what], 2) + '%'
        if (currDecimal === 0) return format.currency(res[what], 0)
        if (currDecimal > 0) return format.currency(res[what], currDecimal)
        return format.format(' ', res[what])
    },

    getValueRetail:(what, sign, currDecimal) => {
        if (!reports.isSquare()) return 'N/A'
        var res = reports.reportWtd(1, ['sq'])
        if (!res[what]) return 'N/A'
        if (currDecimal > 0) return format.currency(res[what], currDecimal)
        return format.format(sign, res[what])
    },

    blockGrossItemsVar:() => {
        var wtd = reports.reportWtd()
        if (!wtd[1]['q']) return
        var color1 = wtd[1]['q'] > wtd[2]['q'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['q'] > wtd[3]['q'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['q'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['q'], wtd[2]['q'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['q'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['q'], wtd[3]['q'])}</span> <small>vs</small> py` : '')
    },

    blockGrossRevenueVar:() => {
        var wtd = reports.reportWtd();
        if (!wtd[1]['t']) return
        var color1 = wtd[1]['t'] > wtd[2]['t'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['t'] > wtd[3]['t'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['t'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['t'], wtd[2]['t'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['t'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['t'], wtd[3]['t'])}</span> <small>vs</small> py` : '')
    },

    blockEcommSalesVar:() => {
        if (!reports.isEcommerce())  return
        var wtd = reports.reportWtd(null, ['uk', 'us', 'eu']);
        if (!wtd[1]['c']) return
        var color1 = wtd[1]['c'] > wtd[2]['c'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['c'] > wtd[3]['c'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['c'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['c'], wtd[2]['c'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['c'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['c'], wtd[3]['c'])}</span> <small>vs</small> py` : '')
    },

    blockEcommAvgVar:() => {
        if (!reports.isEcommerce()) return 
        var wtd = reports.reportWtd(null, ['uk', 'us', 'eu'])
        if (!wtd[1]['a']) return
        var color1 = wtd[1]['a'] > wtd[2]['a'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['a'] > wtd[3]['a'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['a'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['a'], wtd[2]['a'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['a'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['a'], wtd[3]['a'])}</span> <small>vs</small> py` : '')
    },

    blockEcommSessVar: () => {
        if (!reports.isEcommerce()) return
        var wtd = reports.reportWtd();
        if (wtd[1]['gs'] == 0) return 
        var color1 = wtd[1]['gs'] > wtd[2]['gs'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['gs'] > wtd[3]['gs'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['gs'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['gs'], wtd[2]['gs'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['gs'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['gs'], wtd[3]['gs'])}</span> <small>vs</small> py` : '') 
    },

    blockEcommConvVar: () => {
        if (!reports.isEcommerce()) return
        var wtd = reports.reportWtd()
        if (!wtd[1]['gr']) return 
        var color1 = wtd[1]['gr'] > wtd[2]['gr'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['gr'] > wtd[3]['gr'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['gr'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['gr'], wtd[2]['gr'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['gr'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['gr'], wtd[3]['gr'])}</span> <small>vs</small> py` : '')
    },

    blockRetailTransVar: () => {
        if (!reports.isSquare()) return
        var wtd = reports.reportWtd(null, ['sq']);
        if (!wtd[1]['c']) return
        var color1 = wtd[1]['c'] > wtd[2]['c'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['c'] > wtd[3]['c'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['c'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['c'], wtd[2]['c'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['c'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['c'], wtd[3]['c'])}</span> <small>vs</small> py` : '')
    },

    blockRetailAvgVar: () => {
        if (!reports.isSquare()) return
        var wtd = reports.reportWtd(null,['sq']);
        if (!wtd[1]['a']) return
        var color1 = wtd[1]['a'] > wtd[2]['a'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        var color2 = wtd[1]['a'] > wtd[3]['a'] ? config.ui.table.colors.positive : config.ui.table.colors.negative
        return (wtd[2]['c'] ? `<span style='display: inline; color: ${color1}'>${format.percent(wtd[1]['a'], wtd[2]['a'])}</span> <small>vs</small> pw\n` : '') + 
               (wtd[3]['a'] ? `<span style='display: inline; color: ${color2}'>${format.percent(wtd[1]['a'], wtd[3]['a'])}</span> <small>vs</small> py` : '')
    }
}
