// File filter.js
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory)
    } else if (typeof exports !== "undefined") {
        factory(exports)
    } else {
        var mod = {
            exports: {}
        }
        factory(mod.exports)
        global.filter = mod.exports
    }
})(this, function (exports) {
    "use strict"

    exports = {
        getPeriodAFrom: (format) => format ? moment(appsmith.store.periodFrom).format('YYYY-MM-DD') : moment(appsmith.store.periodFrom),
        getPeriodATo: (format) => format ? moment(appsmith.store.periodTo).format('YYYY-MM-DD') : moment(appsmith.store.periodTo),
        getPeriodBFrom: (format) => format ? moment(appsmith.store.compareFrom).format('YYYY-MM-DD') : moment(appsmith.store.compareFrom),
        getPeriodBTo: (format) => format ? moment(appsmith.store.compareTo).format('YYYY-MM-DD') : moment(appsmith.store.compareTo),
        getPeriodCFrom: (format) => format ? moment(appsmith.store.yearFrom).format('YYYY-MM-DD') : moment(appsmith.store.yearFrom),
        getPeriodCTo: (format) => format ? moment(appsmith.store.yearTo).format('YYYY-MM-DD') : moment(appsmith.store.yearTo),

        getPeriodYFrom: (format) => {
            if (appsmith.store.compare == 'py') return this.getPeriodAFrom(format)
            var dt = moment(appsmith.store.yearTo)
            return format ? dt.format('YYYY-MM-DD') : dt
        },

        getPeriodYTo: (format) => {
            if (appsmith.store.compare == 'py') return this.getPeriodATo(format)
            var dt = moment(Date())
            return format ? dt.format('YYYY-MM-DD') : dt
        },

        showFilters: () => {
            this.selectDateType()
            showModal('FilterModal')
        },

        selectDateType: () => {
            var range = filter_period.selectedOptionValue;
            filter_dateFrom.isDisabled = range != 'date'
            filter_dateTo.isDisabled = range != 'date'
        },
    
        confirm: () => {
            var range = filter_period.selectedOptionValue;
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
                storeValue('compare', 'pp')
                storeValue('year', 'py')
            } else if (range == 'week') {
                storeValue('periodFrom', moment(Date()).startOf('week').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).endOf('week').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(1, 'week').startOf('week').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(1, 'week').endOf('week').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('week').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('week').format('YYYY-MM-DD'))
                storeValue('compare', 'pw')
                storeValue('year', 'py')
            } else if (range == 'month') {
                storeValue('periodFrom', moment(Date()).startOf('month').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).endOf('month').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(1, 'month').startOf('month').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(1, 'month').endOf('month').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('month').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('month').format('YYYY-MM-DD'))
                storeValue('compare', 'pm')
                storeValue('year', 'py')
            } else if (range == 'year') {
                storeValue('periodFrom', moment(Date()).startOf('year').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).endOf('year').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(1, 'year').startOf('year').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(1, 'year').endOf('year').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(2, 'year').startOf('year').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(2, 'year').endOf('year').format('YYYY-MM-DD'))
                storeValue('compare', 'py')
                storeValue('year', 'p2y')
            } else if (range == 'fyear') {
                storeValue('periodFrom', '2022-04-06')
                storeValue('periodTo', '2023-04-05')
                storeValue('compareFrom', '2021-04-06')
                storeValue('compareTo', '2022-04-05')
                storeValue('yearFrom', '2020-04-06')
                storeValue('yearTo', '2021-04-05')
                storeValue('compare', 'py')
                storeValue('year', 'p2y')
            } else if (range == 'lweek') {
                storeValue('periodFrom', moment(Date()).subtract(1, 'week').startOf('week').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).subtract(1, 'week').endOf('week').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(2, 'week').startOf('week').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(2, 'week').endOf('week').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('week').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('week').format('YYYY-MM-DD'))
                storeValue('compare', 'pw')
                storeValue('year', 'py')
            } else if (range == 'lmonth') {
                storeValue('periodFrom', moment(Date()).subtract(1, 'month').startOf('month').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).subtract(1, 'month').endOf('month').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(2, 'month').startOf('month').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(2, 'month').endOf('month').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('month').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('month').format('YYYY-MM-DD'))
                storeValue('compare', 'pm')
                storeValue('year', 'py')
            } else if (range == 'lyear') {
                storeValue('periodFrom', moment(Date()).subtract(1, 'year').startOf('year').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).subtract(1, 'year').endOf('year').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(2, 'year').startOf('year').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(2, 'year').endOf('year').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(2, 'year').startOf('year').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(2, 'year').endOf('year').format('YYYY-MM-DD'))
                storeValue('compare', 'py')
                storeValue('year', 'p2y')
            } else if (range == 'lfyear') {
                storeValue('periodFrom', '2021-04-06')
                storeValue('periodTo', '2022-04-05')
                storeValue('compareFrom', '2020-04-06')
                storeValue('compareTo', '2021-04-05')
                storeValue('yearFrom', '2019-04-06')
                storeValue('yearTo', '2020-04-05')
                storeValue('compare', 'py')
                storeValue('year', 'p2y')
            } else if (range == '7d') {
                storeValue('periodFrom', moment(Date()).subtract(7, 'day').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(7 + 1 + 7, 'day').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(7 + 1, 'day').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
                storeValue('compare', 'pd')
                storeValue('year', 'py')
            } else if (range == '30d') {
                storeValue('periodFrom', moment(Date()).subtract(30, 'day').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(30 + 1 + 30, 'day').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(30 + 1, 'day').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
                storeValue('compare', 'pd')
                storeValue('year', 'py')
            } else if (range == '90d') {
                storeValue('periodFrom', moment(Date()).subtract(90, 'day').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(90 + 1 + 90, 'day').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(90 + 1, 'day').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').format('YYYY-MM-DD'))
                storeValue('compare', 'pd')
                storeValue('year', 'py')
            } else if (range == '12m') {
                storeValue('periodFrom', moment(Date()).subtract(12, 'month').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(12 + 1 + 12, 'month').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(12 + 1, 'month').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(23 + 1 + 12, 'month').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(23 + 1, 'month').format('YYYY-MM-DD'))
                storeValue('compare', 'py')
                storeValue('year', 'p2y')
            } else {
                storeValue('periodFrom', moment(Date()).startOf('week').format('YYYY-MM-DD'))
                storeValue('periodTo', moment(Date()).endOf('week').format('YYYY-MM-DD'))
                storeValue('compareFrom', moment(Date()).subtract(1, 'week').startOf('week').format('YYYY-MM-DD'))
                storeValue('compareTo', moment(Date()).subtract(1, 'week').endOf('week').format('YYYY-MM-DD'))
                storeValue('yearFrom', moment(appsmith.store.periodFrom).subtract(1, 'year').startOf('week').format('YYYY-MM-DD'))
                storeValue('yearTo', moment(appsmith.store.periodTo).subtract(1, 'year').endOf('week').format('YYYY-MM-DD'))
                storeValue('compare', 'pw')
                storeValue('year', 'py')
            }
            closeModal('FilterModal')
        }
    }
})
