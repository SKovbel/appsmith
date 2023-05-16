exports.style = {
    "color": {
        "positive": "#008000",
        "negative": "#FF0000",

        "set": [
            "#1896c6",
            "#EF767A",
            "#EEB868",
            "#49DCB1",
            "#456990",
        ],
    },

    valueColor: (val, negativeOnly) => {
        const v = format.toInt(val)
        if (v == 0) return ''
        if (v > 0 && negativeOnly) return ''
        return v > 0 ? style.color.positive  : style.color.negative
    },

    valueBackground: (val) => {
        if (!val) return '#F0F0F0'
        if (!(val.length > 0)) return '#F0F0F0'
        return '#FFFFFF'
    }
}
