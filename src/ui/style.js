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

    valueColor: (value, negativeOnly) => {
        const v = format.toInt(value)
        if (v == 0) return ''
        if (v > 0 && negativeOnly) return ''
        return v > 0 ? style.color.positive  : style.color.negative
    },

    valueBackground: (value) => {
        if (!value) return '#F0F0F0'
        if (!(value.length > 0)) return '#F0F0F0'
        return '#FFFFFF'
    }
}
