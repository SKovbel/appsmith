export default {
    // date functions
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthes: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  getDate: () => moment(Date()),
  getDayname: (n) => this.days[n],
  getMonthname: (n) => this.monthes[n],
  getDay: () => this.getDateA().day(),
  getWtdDay: () => this.getDateA().diff(moment(Date()), 'days') < 6  ? this.getDateA().day() : 6,

  getDateA: () => moment(dateCurr.selectedDate),
  getDateB: () => this.getDateA().subtract(1, 'week'),
  getDateC: () => this.getDateA().subtract(1, 'year'),

  getWeekAFrom: () => this.getDateA().startOf('week'),
  getWeekATo: () => this.getDateA().endOf('week'),
  getWeekBFrom: () => this.getDateB().startOf('week'),
  getWeekBTo: () => this.getDateB().endOf('week'),
  getWeekCFrom: () => this.getDateC().startOf('week'),
  getWeekCTo: () => this.getDateC().endOf('week') ,
  
  getDateY: () => this.getDateA().subtract(1, 'year'),
  getDateYY: () => this.getDateA().subtract(2, 'year'),

  getYearAFrom: () => this.getDateA().startOf('year'),
  getYearATo: () => this.getDateA().endOf('year'),
  getYearBFrom: () => this.getDateY().startOf('year'),
  getYearBTo: () => this.getDateY().endOf('year'),
  getYearCFrom: () => this.getDateYY().startOf('year'),
  getYearCTo: () => this.getDateYY().endOf('year'),

  getWeekGroup: (period) => {
      period = moment(period)
          console.log(period.format("YYYY-MM-DD") + " " + this.getWeekAFrom().format("YYYY-MM-DD") + " " + this.getWeekATo().format("YYYY-MM-DD"))
      if (period.isBetween(this.getWeekAFrom(), this.getWeekATo(), undefined, '[]')) return 1
      else if (period.isBetween(this.getWeekBFrom(), this.getWeekBTo(), undefined, '[]')) return 2
      else if (period.isBetween(this.getWeekCFrom(), this.getWeekCTo(), undefined, '[]')) return 3;
      else return 0;
  },

  getYearGroup: (period) => {
      period = moment(period)
      if (period.isBetween(this.getYearAFrom(), this.getYearATo(), undefined, '[]')) return 1
      else if (period.isBetween(this.getYearBFrom(), this.getYearBTo(), undefined, '[]')) return 2
      else if (period.isBetween(this.getYearCFrom(), this.getYearCTo(), undefined, '[]')) return 3;
      else return 0;
  },
 
  refresh: () => {
      filter.confirm()
      cube.run()
  },
 
  getUnit: (a) => {
      if (filter_entity.selectedOptionValue == 'invoices') {
          if (filter_unit.selectedOptionValue == 'number') return a.invoicesCount
          if (filter_unit.selectedOptionValue == 'items') return a.invoicesItems
          return a.invoicesQty
      } else
      if (filter_entity.selectedOptionValue == 'refunds') {
          if (filter_unit.selectedOptionValue == 'number') return a.refundsCount
          if (filter_unit.selectedOptionValue == 'items') return a.refundsItems
          return a.refundsQty
      } else
      if (filter_entity.selectedOptionValue == 'net') {
          if (filter_unit.selectedOptionValue == 'number') return a.invoicesCount - a.refundsCount
          if (filter_unit.selectedOptionValue == 'items') return a.invoicesItems - a.refundsItems
          return a.invoicesQty - a.refundsQty
      } else
      if (filter_entity.selectedOptionValue == 'shipments') {
          if (filter_unit.selectedOptionValue == 'number') return a.shipmentsCount
          if (filter_unit.selectedOptionValue == 'items') return a.shipmentsItems
          return a.shipmentsQty
      } else {
          if (filter_unit.selectedOptionValue == 'number') return a.ordersCount
          if (filter_unit.selectedOptionValue == 'items') return a.ordersItems
          return a.ordersQty
      }
  },

  getRevenue: (a) => {
      if (filter_entity.selectedOptionValue == 'refunds') {
          if (filter_revenue.selectedOptionValue == 'tax') return a.refundsTax ?  a.refundsTax : 0
          if (filter_revenue.selectedOptionValue == 'discount') return Math.abs(a.refundsDiscount ? a.refundsDiscount : 0)
          return a.refundsTotal
      } else
      if (filter_entity.selectedOptionValue == 'net') {
          if (filter_unit.selectedOptionValue == 'tax') return a.invoicesTax - a.refundsTax
          if (filter_unit.selectedOptionValue == 'discount') return Math.abs(a.invoicesDiscount) - Math.abs(a.refundsDiscount)
          return a.invoicesTotal - a.refundsTotal
      } else
      if (filter_entity.selectedOptionValue == 'invoices') {
          if (filter_revenue.selectedOptionValue == 'tax') return a.invoicesTax ? a.invoicesTax : 0
          if (filter_revenue.selectedOptionValue == 'discount') return Math.abs(a.invoicesDiscount ? a.invoicesDiscount : 0)
          return a.invoicesTotal ? a.invoicesTotal : 0
      } else
      if (filter_entity.selectedOptionValue == 'shipments') {
          if (filter_revenue.selectedOptionValue == 'tax') return a.shipmentsTax ? a.shipmentsTax : 0
          if (filter_revenue.selectedOptionValue == 'discount') return Math.abs(a.shipmentsDiscount ? a.shipmentsDiscount : 0)
          return a.shipmentsTotal ? a.shipmentsTotal : 0
      } else {
          if (filter_revenue.selectedOptionValue == 'tax') return a.ordersTax ? a.ordersTax : 0
          if (filter_revenue.selectedOptionValue == 'discount') return Math.abs(a.ordersDiscount ? a.ordersDiscount : 0)
          return a.ordersTotal ? a.ordersTotal : 0
      }
  },

  getEntityTitle: (a) => {
      if (filter_entity.selectedOptionValue == 'refunds') {
          return 'refunds'
      } else
      if (filter_entity.selectedOptionValue == 'invoices') {
          return 'sales'
      } else
      if (filter_entity.selectedOptionValue == 'shipments') {
          return 'shipments'
      } else
      if (filter_entity.selectedOptionValue == 'net') {
          return 'net sales'
      }
      return 'orders'
  },

  getRevenueTitle: (a) => {
      if (filter_revenue.selectedOptionValue == 'tax') {
          return 'tax'
      } else
      if (filter_revenue.selectedOptionValue == 'discount') {
          return 'discount'
      }
      return 'revenue'
  },

  
  getUnitTitle: (a) => {
      if (filter_unit.selectedOptionValue == 'number') {
          return 'count'
      } else
      if (filter_unit.selectedOptionValue == 'items') {
          return 'items'
      }
      return 'quantity'
  },


  chartUnits:(grp, what) => {
      let res = cube.data.data.cube.reduce((x, a) => {
          a = a.allSales
          if (this.getWeekGroup(a.period.day) == grp) {
              x[moment(a.period.day).day()]['value'] += 
                what == 'unit' ? this.getUnit(a) : this.getRevenue(a)
          }
          return x
      }, [{'value':0},{'value':0},{'value':0},{'value':0},{'value':0},{'value':0},{'value':0}])

      for (var i = 1; i < 7; i++) {
          for (var j = 0; j < i; j++) {
              res[i]['value'] += res[j]['value']
          }
      }
      return res
  },
  
 _report: (grp) => {
     var e1 = cube.data.data.cube.reduce((x, a) => {
         a = a.allSales
         x[moment(a.period.day).day()] += this.getWeekGroup(a.period.day) == grp ? this.getUnit(a) : 0
         return x
     }, {'title': 'Gross ' + this.getEntityTitle() + ' ' + this.getUnitTitle(), 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 'w':0, 't':0});

     var e2 = cube.data.data.cube.reduce((x, a) => {
         a = a.allSales
         x[moment(a.period.day).day()] += this.getWeekGroup(a.period.day) == grp ? this.getRevenue(a) : 0
         return x
     }, {'title': 'Gross ' + this.getEntityTitle() + ' ' + this.getRevenueTitle(), 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 'w':0, 't':0});
         
     return [e1, e2].map((e) => {
         for (var i = 0; i < 7; i++) {
             e['w'] += i <= this.getDateA().day() ? e[i] : 0
             e['t'] += e[i] ? e[i] : 0
         }
         return e
     })
 },

 report: (grp) => {
     return this._report(grp).map((e) => {
         for (var idx in e)
             if (idx != 'title') e[idx] = format.format(e.title.includes('revenue') ? '£' : ' ', e[idx], true)
         return e
     })
 },

 report_diff(grp1, grp2) {
     var rep1 = this._report(grp1)
     var rep2 = this._report(grp2)

     return rep1.map((r1) => {
         var r2 = rep2.reduce((c, r0) => {return r0.title == r1.title ? r0 : c}, {})
         var res = {'title': r1['title']}
         for (var idx in r1)
             if (idx != 'title') res[idx] = format.percent(r1[idx], r2[idx])
         return res
     })
 }
}
