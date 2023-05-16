exports.uiStyle = {
    colorizeValue: (val, negativeOnly) => {
        const v = format.toInt(val)
        if (v == 0) return ''
        if (v > 0 && negativeOnly) return ''
        return v > 0 ? ui.colors.positive  : ui.colors.negative
    },

    colorizeCell: (val) => {
        if (!val) return '#F0F0F0'
        if (!(val.length > 0)) return '#F0F0F0'
        return '#FFFFFF'
    }
}
