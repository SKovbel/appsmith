export const filter = {
    getPeriodAFrom: (format) => format ? moment(appsmith.store.periodFrom).format('YYYY-MM-DD') : moment(appsmith.store.periodFrom),
    getPeriodATo: (format) => format ? moment(appsmith.store.periodTo).format('YYYY-MM-DD') : moment(appsmith.store.periodTo),
    getPeriodBFrom: (format) => format ? moment(appsmith.store.compareFrom).format('YYYY-MM-DD') : moment(appsmith.store.compareFrom),
    getPeriodBTo: (format) => format ? moment(appsmith.store.compareTo).format('YYYY-MM-DD') : moment(appsmith.store.compareTo),
    getPeriodCFrom: (format) => format ? moment(appsmith.store.yearFrom).format('YYYY-MM-DD') : moment(appsmith.store.yearFrom),
    getPeriodCTo: (format) => format ? moment(appsmith.store.yearTo).format('YYYY-MM-DD') : moment(appsmith.store.yearTo),

    getPeriodYFrom: (format) => {
        if (appsmith.store.compare == 'py') return filter.getPeriodAFrom(format)
        var dt = moment(appsmith.store.yearTo)
        return format ? dt.format('YYYY-MM-DD') : dt
    },

    getPeriodYTo: (format) => {
        if (appsmith.store.compare == 'py') return filter.getPeriodATo(format)
        var dt = moment(Date())
        return format ? dt.format('YYYY-MM-DD') : dt
    },

    showFilters: () => {
        showModal('FilterModal')
    },

    confirm: () => {
        closeModal('FilterModal')
        if (typeof filter_period == "undefined" ) {
            return
        }
        var range = filter_period.selectedOptionValue
        range = range ? range : 'week'
        if (range == 'date') {
            var to = moment(filter_dateTo.selectedDate)
            var from = moment(filter_dateFrom.selectedDate)
            var diff = to.diff(from, 'days')
            storeValue('periodFrom', from.format('YYYY-MM-DD'))
            storeValue('periodTo', to.format('YYYY-MM-DD'))
            storeValue('compareFrom', from.subtract(1 + diff, 'day').format('YYYY-MM-DD'))
            storeValue('compareTo', to.subtract(1 + diff, 'day').format('YYYY-MM-DD'))
            storeValue('yearFrom', from.subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('period', appsmith.store.periodFrom + ' - ' + appsmith.store.periodTo)
            storeValue('compare', appsmith.store.compareFrom + ' - ' + appsmith.store.compareTo)
            storeValue('short', 'pp')
            storeValue('year', 'py')
            storeValue('interval', 'day')
        } else if (range == 'week') {
            storeValue('periodFrom', moment(Date()).startOf('week').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).endOf('week').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(1, 'week').startOf('week').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(1, 'week').endOf('week').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('week').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('week').format('YYYY-MM-DD'))
            storeValue('period', 'This week')
            storeValue('compare', 'Previous')
            storeValue('short', 'pw')
            storeValue('year', 'py')
            storeValue('interval', 'day')
        } else if (range == 'month') {
            storeValue('periodFrom', moment(Date()).startOf('month').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).endOf('month').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(1, 'month').startOf('month').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(1, 'month').endOf('month').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('month').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('month').format('YYYY-MM-DD'))
            storeValue('period', 'This month')
            storeValue('compare', 'Previous')
            storeValue('short', 'pm')
            storeValue('year', 'py')
            storeValue('interval', 'week')
        } else if (range == 'year') {
            storeValue('periodFrom', moment(Date()).startOf('year').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).endOf('year').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(1, 'year').startOf('year').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(1, 'year').endOf('year').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(2, 'year').startOf('year').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(2, 'year').endOf('year').format('YYYY-MM-DD'))
            storeValue('period', 'This year')
            storeValue('compare', 'Previous')
            storeValue('short', 'py')
            storeValue('year', 'p2y')
            storeValue('interval', 'month')
        } else if (range == 'fyear') {
            storeValue('periodFrom', '2022-04-06')
            storeValue('periodTo', '2023-04-05')
            storeValue('compareFrom', '2021-04-06')
            storeValue('compareTo', '2022-04-05')
            storeValue('yearFrom', '2020-04-06')
            storeValue('yearTo', '2021-04-05')
            storeValue('period', 'This fiscal year')
            storeValue('compare', 'Previous')
            storeValue('short', 'py')
            storeValue('year', 'p2y')
            storeValue('interval', 'month')
        } else if (range == 'lweek') {
            storeValue('periodFrom', moment(Date()).subtract(1, 'week').startOf('week').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).subtract(1, 'week').endOf('week').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(2, 'week').startOf('week').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(2, 'week').endOf('week').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('week').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('week').format('YYYY-MM-DD'))
            storeValue('period', 'Last week')
            storeValue('compare', 'Previous')
            storeValue('short', 'pw')
            storeValue('year', 'py')
            storeValue('interval', 'day')
        } else if (range == 'lmonth') {
            storeValue('periodFrom', moment(Date()).subtract(1, 'month').startOf('month').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).subtract(1, 'month').endOf('month').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(2, 'month').startOf('month').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(2, 'month').endOf('month').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('month').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('month').format('YYYY-MM-DD'))
            storeValue('period', 'Last month')
            storeValue('compare', 'Previous')
            storeValue('short', 'pm')
            storeValue('year', 'py')
            storeValue('interval', 'week')
        } else if (range == 'lyear') {
            storeValue('periodFrom', moment(Date()).subtract(1, 'year').startOf('year').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).subtract(1, 'year').endOf('year').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(2, 'year').startOf('year').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(2, 'year').endOf('year').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(2, 'year').startOf('year').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(2, 'year').endOf('year').format('YYYY-MM-DD'))
            storeValue('period', 'Last year')
            storeValue('compare', 'Previous')
            storeValue('short', 'py')
            storeValue('year', 'p2y')
            storeValue('interval', 'month')
        } else if (range == 'lfyear') {
            storeValue('periodFrom', '2021-04-06')
            storeValue('periodTo', '2022-04-05')
            storeValue('compareFrom', '2020-04-06')
            storeValue('compareTo', '2021-04-05')
            storeValue('yearFrom', '2019-04-06')
            storeValue('yearTo', '2020-04-05')
            storeValue('period', 'Last fiscal year')
            storeValue('compare', 'Previous')
            storeValue('short', 'py')
            storeValue('year', 'p2y')
            storeValue('interval', 'month')
        } else if (range == '7d') {
            storeValue('periodFrom', moment(Date()).subtract(7, 'day').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(7 + 1 + 7, 'day').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(7 + 1, 'day').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('period', 'Last 7 days')
            storeValue('compare', 'Previous')
            storeValue('short', 'pd')
            storeValue('year', 'py')
            storeValue('interval', 'day')
        } else if (range == '30d') {
            storeValue('periodFrom', moment(Date()).subtract(30, 'day').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(30 + 1 + 30, 'day').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(30 + 1, 'day').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('period', 'Last 30 days')
            storeValue('compare', 'Previous')
            storeValue('short', 'pd')
            storeValue('year', 'py')
            storeValue('interval', 'day')
        } else if (range == '90d') {
            storeValue('periodFrom', moment(Date()).subtract(90, 'day').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(90 + 1 + 90, 'day').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(90 + 1, 'day').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
            storeValue('period', 'Last 90 days')
            storeValue('compare', 'Previous')
            storeValue('short', 'pd')
            storeValue('year', 'py')
            storeValue('interval', 'week')
        } else if (range == '12m') {
            storeValue('periodFrom', moment(Date()).subtract(12, 'month').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(12 + 1 + 12, 'month').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(12 + 1, 'month').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(23 + 1 + 12, 'month').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(23 + 1, 'month').format('YYYY-MM-DD'))
            storeValue('period', 'Last 12 months')
            storeValue('compare', 'Previous')
            storeValue('short', 'py')
            storeValue('year', 'p2y')
            storeValue('interval', 'month')
        } else {
            storeValue('periodFrom', moment(Date()).startOf('week').format('YYYY-MM-DD'))
            storeValue('periodTo', moment(Date()).endOf('week').format('YYYY-MM-DD'))
            storeValue('compareFrom', moment(Date()).subtract(1, 'week').startOf('week').format('YYYY-MM-DD'))
            storeValue('compareTo', moment(Date()).subtract(1, 'week').endOf('week').format('YYYY-MM-DD'))
            storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('week').format('YYYY-MM-DD'))
            storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('week').format('YYYY-MM-DD'))
            storeValue('period', 'Last week')
            storeValue('compare', 'Previous')
            storeValue('short', 'pw')
            storeValue('year', 'py')
            storeValue('interval', 'day')
        }
    },

    yearsPeriod: () => {
        var data = [{"label": "Last 12 months", "value": ""}]
        for (var year = moment(Date()).year(); year >= 2015; year--) {
            data.push({"label": "Year " + year, "value": year})
        }
        return data
    },

    arrayToString: (values) => {
        return '["' + values.join('","') + '"]'
    },

    skuCondition: () => filter_sku.text
        ? 'sku: {contains: "' + filter_sku.text + '"}'
        : '',

    channelCondition: (r) => {
        var codes = [...filter_channel.selectedOptionValues]
        if (r) {
            codes.push(Math.random().toString()) // randomize query with unreal store code
        }
        return 'storeCode: {in: ' + filter.arrayToString(codes) + '}'
    },

    statusCondition: () => filter_status.selectedOptionValues.length 
        ? 'status: {in: '+ filter.arrayToString(filter_status.selectedOptionValues) + '}'
        : '',

    countryCondition: () => filter_country.selectedOptionValues.length 
        ? 'country: {in: '+ filter.arrayToString(filter_country.selectedOptionValues) + '}'
        : '',

    paymentCondition: () => filter_payment.selectedOptionValues.length 
        ? 'payment: {in: '+ filter.arrayToString(filter_payment.selectedOptionValues) + '}'
        : '',

    sizeCondition: () => filter_size.selectedOptionValues.length 
        ? 'size: {in: '+ filter.arrayToString(filter_size.selectedOptionValues) + '}'
        : '',

    colorCondition: () => filter_color.selectedOptionValues.length 
        ? 'color: {in: '+ filter.arrayToString(filter_color.selectedOptionValues) + '}'
        : '',

    categoryCondition: () => filter_category.selectedOptionValues.length 
        ? 'category: {in: '+ filter.arrayToString(filter_category.selectedOptionValues) + '}'
        : '',
}