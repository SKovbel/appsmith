exports.ui = {
    "colors": {
        "positive": "#008000",
        "negative": "#FF0000",

        "set": [
            "#1896c6",
            "#EF767A",
            "#456990",
            "#49DCB1",
            "#EEB868"
        ],
    },

    "menu": {
        "colors": {
            "color": '#000000',
            "active": '#000001', // word #000001 used in styles, important to have
            "topColor": '#64748b',
            "topActive": '#000000',
        },

        "sales": {
            "title": "Sales",
            "icon": "timeline-bar-chart",
            "submenus": [
                {"title": "Sales overview", "page": "sales_sale-overview"},
                {"title": "Daily sales summary", "page": "sales_daily-sales-summary"},
                {"title": "Ecommerce weekly", "page": "sales_ecommerce-weekly"},
                {"title": "Offline retail weekly", "page": "sales_offline-retail-weekly"},
                {"title": "Annual sales summary", "page": "sales_annual-sales-summary"},
                {"title": "Best sellers", "page": "sales_best-sellers"}
            ]
        },

        "finance": {
            "title": "Finance",
            "icon": "timeline-area-chart",
            "submenus": [
                {"title": "Finance overview", "page": "finance_finance-overview"},
                {"title": "Sale summary", "page": "finance_sales-summary"},
                {"title": "Product detail", "page": "finance_poduct-details"},
                {"title": "Sales by payment", "page": "finance_sales-by-payment"},
                {"title": "Sales by country", "page": "finance_sales-by-country"},
                {"title": "Shipping", "page": "finance_shipping"},
                {"title": "Annual summary", "page": "finance_annual-summary"},
                {"title": "Coupon details", "page": "finance_coupon"}
            ]
        },

        "product": {
            "title": "Product",
            "icon": "timshopping-cart",
            "disabled": true,
            "submenus": [
                {"title": "Page 1", "page": "",  "visible": false}
            ]
        },

        "merchandizing": {
            "title": "Merchandizing",
            "icon": "flash",
            "disabled": true,
            "submenus": [
                {"title": "Page 1", "page": "",  "visible": false}
            ]
        }
    },

    "table": {
        "sales_daily_sales_summary": {
            "columnTitleA": {"title": () => "Current week #" + reports.getDateA().format("WW YYYY")},
            "columnTitleB": {"title": () => "Previous week #" +reports.getDateB().format("WW YYYY")},
            "columnTitleC": {"title": () => "Variance #" + reports.getDateA().format("WW YYYY") + " vs #" + reports.getDateB().format("WW YYYY")},
            "columnTitleD": {"title": () => "Previous year #" + reports.getDateC().format("WW YYYY")},
            "columnTitleE": {"title": () => "Variance #" + reports.getDateA().format("WW YYYY") + " vs #" + reports.getDateC().format("WW YYYY")},
            "columnSun": {"title": () => "Sun"},
            "columnMon": {"title": () => "Mon"},
            "columnTue": {"title": () => "Tue"},
            "columnWed": {"title": () => "Wed"},
            "columnThu": {"title": () => "Thu"},
            "columnFri": {"title": () => "Fri"},
            "columnSat": {"title": () => "Sat"},
            "columnWtd": {"title": () => "WTD"},
            "columnWeek": {"title": () => "WoW total"}
        },

        "sales_ecommerce_weekly": {
            "columnTitleA": {"title": () => ""},
            "columnTitleB": {"title": () => "Current week #" + reports.getDateA().format("WW YYYY")},
            "columnTitleC": {"title": () => "Previous week #" +reports.getDateB().format("WW YYYY")},
            "columnTitleD": {"title": () => "Var #" + reports.getDateA().format("WW YYYY") + " vs #" + reports.getDateB().format("WW YYYY")},
            "columnTitleE": {"title": () => "Previous year #" + reports.getDateC().format("WW YYYY")},
            "columnTitleF": {"title": () => "Var #" + reports.getDateA().format("WW YYYY") + " vs #" + reports.getDateC().format("WW YYYY")},
            "columnDayPrev": {"title": () => moment(filter_period.selectedDate).subtract(1,'week').format('ddd, DD.MM')},
            "columnDayCurr": {"title": () => moment(filter_period.selectedDate).format('ddd, DD.MM')},
            "columnDayVar": {"title": () => "Var %"},
            "columnWtdPrev": {"title": () => "WTD, #" + moment(filter_period.selectedDate).subtract(1,'week').format('WW')},
            "columnWtdCurr": {"title": () => "WTD, #" + moment(filter_period.selectedDate).format('WW')},
            "columnWtdVar": {"title": () => "WTD, Var %"},
            "columnTotalPrev": {"title": () => "Total, #" + moment(filter_period.selectedDate).subtract(1,'week').format('WW')},
            "columnTotalCurr": {"title": () => "Total, #" + moment(filter_period.selectedDate).format('WW')},
            "columnTotalVar": {"title": () => "Total, Var %"},
            "columnSun": {"title": () => "Sun"},
            "columnMon": {"title": () => "Mon"},
            "columnTue": {"title": () => "Tue"},
            "columnWed": {"title": () => "Wed"},
            "columnThu": {"title": () => "Thu"},
            "columnFri": {"title": () => "Fri"},
            "columnSat": {"title": () => "Sat"},
            "columnWtd": {"title": () => "WTD"},
            "columnWeek": {"title": () => "WoW total"}
        },

        "sales_offline_retail_weekly": {
            "columnTitleA": {"title": () => ""},
            "columnTitleB": {"title": () => "Current week #" + reports.getDateA().format("WW YYYY")},
            "columnTitleC": {"title": () => "Previous week #" +reports.getDateB().format("WW YYYY")},
            "columnTitleD": {"title": () => "Var #" + reports.getDateA().format("WW YYYY") + " vs #" + reports.getDateB().format("WW YYYY")},
            "columnTitleE": {"title": () => "Previous year #" + reports.getDateC().format("WW YYYY")},
            "columnTitleF": {"title": () => "Var #" + reports.getDateA().format("WW YYYY") + " vs #" + reports.getDateC().format("WW YYYY")},
            "columnDayPrev": {"title": () => moment(filter_period.selectedDate).subtract(1,'week').format('ddd, DD.MM')},
            "columnDayCurr": {"title": () => moment(filter_period.selectedDate).format('ddd, DD.MM')},
            "columnDayVar": {"title": () => "Var %"},
            "columnWtdPrev": {"title": () => "WTD, #" + moment(filter_period.selectedDate).subtract(1,'week').format('WW')},
            "columnWtdCurr": {"title": () => "WTD, #" + moment(filter_period.selectedDate).format('WW')},
            "columnWtdVar": {"title": () => "WTD, Var %"},
            "columnTotalPrev": {"title": () => "Total, #" + moment(filter_period.selectedDate).subtract(1,'week').format('WW')},
            "columnTotalCurr": {"title": () => "Total, #" + moment(filter_period.selectedDate).format('WW')},
            "columnTotalVar": {"title": () => "Total, Var %"},
            "columnSun": {"title": () => "Sun"},
            "columnMon": {"title": () => "Mon"},
            "columnTue": {"title": () => "Tue"},
            "columnWed": {"title": () => "Wed"},
            "columnThu": {"title": () => "Thu"},
            "columnFri": {"title": () => "Fri"},
            "columnSat": {"title": () => "Sat"},
            "columnWtd": {"title": () => "WTD"},
            "columnWeek": {"title": () => "WoW total"}
        },

        "sales_annual_sales_summary": {
            "columnTitleA": {"title": () => "Current " + reports.getPeriodAFrom().format('YYYY')},
            "columnTitleB": {"title": () => "Previous " + reports.getPeriodBFrom().format('YYYY')},
            "columnTitleC": {"title": () => reports.getPeriodAFrom().format('YYYY') + " vs " + reports.getPeriodBFrom().format('YYYY')},
            "columnJan": {"title": () => "Jan"},
            "columnFeb": {"title": () => "Feb"},
            "columnMar": {"title": () => "Mar"},
            "columnApr": {"title": () => "Apr"},
            "columnMay": {"title": () => "May"},
            "columnJun": {"title": () => "Jun"},
            "columnJul": {"title": () => "Jul"},
            "columnAug": {"title": () => "Aug"},
            "columnSep": {"title": () => "Sep"},
            "columnOct": {"title": () => "Oct"},
            "columnNov": {"title": () => "Nov"},
            "columnDec": {"title": () => "Dec"},
            "columnYtd": {"title": () => "YTD"},
            "columnTotal": {"title": () => "Total"},
        },

        "sales_best_sellers": {
            "columnRank": {"title": () => "Rank"},
            "columnImage": {"title": () => "Image"},
            "columnSku": {"title": () => "SKU"},
            "columnSold": {"title": () => "Sold items"},
            "columnOrig": {"title": () => "Original price"},
            "columnPrice": {"title": () => "Price"},
            "columnTotal": {"title": () => "Total sold"},
            "columnName": {"title": () => "Product name"},
        },

        "finance_sales_summary": {
            "columnTitle": {"title": () => ""},
            "columnThis": {"title": () => appsmith.store.period},
            "columnPrev": {"title": () => appsmith.store.compare},
            "columnVar": {"title": () => "Variance"},
        },

        "finance_sales_by_country": {
            "columnTitle": {"title": () => ""},
            "columnCurr": {"title": () => filter_country.selectedOptionLabels.join()},
            "columnGlob": {"title": () => "Global Total"},
            "columnVar": {"title": () => "% of Global Total"},
        },

        "finance_annual_summary": {},

        "finance_sales_details": {
            "columnTitle": {"title": () => "Sku"},
            "columnName": {"title": () => "Name"},
            "columnPrice": {"title": () => "Price"},
            "columnSpecial": {"title": () => "Special"},
            "columnQty": {"title": () => "Qty"},
            "columnQtyRefunded": {"title": () => "Qty refunded"},
            "columnTotal": {"title": () => "Total"},
            "columnRevenue": {"title": () => "Revenue"},
            "columnRefunded": {"title": () => "Refunded"},
            "columnNetQty": {"title": () => "NetQty"},
            "columnNetSales": {"title": () => "Net Sales"},
            "columnNetSalesVat": {"title": () => "Net Sales Vat"},
            "columnNetTotalSales": {"title": () => "Net Total Sales"},
            "columnCost": {"title": () => "Cost"},
            "columnCostTotal": {"title": () => "Cost Total"},
            "columnProfit": {"title": () => "Profit"},
            "columnMargin": {"title": () => "Margin"},
            "columnStock": {"title": () => "Stock"},
        },

        "finance_shipping": {
            "columnTitle": {"title": () => "Method"},
            "columnOrders": {"title": () => "Orders"},
            "columnShipments": {"title": () => "Shipments"},
            "columnQty": {"title": () => "Qty"},
            "columnFreeQty": {"title": () => "Free qty"},
            "columnAOV": {"title": () => "AOV"},
            "columnShipping": {"title": () => "Shipping"},
            "columnShippingVAT": {"title": () => "Shipping VAT"},
            "columnTotalExVAT": {"title": () => "Total ex VAT"},
            "columnTotalVAT": {"title": () => "Total VAT"},
            "columnTotal": {"title": () => "Total "},
            "columnShippingRefundedExVAT": {"title": () => "Shipping refunded ex VAT"},
        },

        "finance_coupon": {
            "columnTitle": {"title": () => "Order Id"},
            "columnCoupon": {"title": () => "Coupon"},
            "columnPaymentType": {"title": () => "Payment type"},
            "columnOrdersTotal": {"title": () => "Orders total"},
            "columnOrdersSubtotal": {"title": () => "Orders subtotal"},
            "columnOrdersShipping": {"title": () => "Orders shipping"},
            "columnRefundsTotal": {"title": () => "Refunds total"},
        }
    },

    "filter": {
        "status": [
            {"value": "complete", "label": "Complete"},
            {"value": "canceled", "label": "Canceled"},
            {"value": "closed", "label": "Closed"},
            {"value": "new", "label": "New"},
            {"value": "holded", "label": "Holded"},
            {"value": "payment_review", "label": "Payment review"},
            {"value": "pending_payment", "label": "Pending payment"},
            {"value": "processing", "label": "Processing"}
        ],

        "payment": [
            {"value": "adyen_cc", "label": "Adyen cc"},
            {"value": "adyen_hpp", "label": "Adyen hpp"},
            {"value": "paypal_express", "label": "Paypal express"},
            {"value": "globale", "label": "Global-e"},
            {"value": "klarna_kp", "label": "Klarna pk"},
            {"value": "free","label": "Free"},
            {"value": "checkmo","label": "Checkmo"},
            {"value": "canceled", "label": "Canceled"},
            {"value": "closed", "label": "Closed"},
            {"value": "complete", "label": "Complete"},
            {"value": "holded", "label": "Holded"},
            {"value": "new", "label": "New"},
            {"value": "payment_review", "label": "Payment Review"},
            {"value": "pending_payment", "label": "Pending Payment"},
            {"value": "processing", "label": "Processing"}
        ],

        "channel": [{
            "label": "All",
            "value": "_all",
            "children": [{
                "label": "Ecommerce all",
                "value": "_e_all",
                "children": [
                    {"label": "UK", "value": "uk"},
                    {"label": "EU", "value": "eu"},
                    {"label": "US", "value": "us"}
                ]
            },
            {
                "label": "Offline all",
                "value": "_o_all",
                "children": [
                    {"label": "Offline retail", "value": "sq"}
                ]
            }]  
        }],

        "channel_f": [{
            "label": "Ecommerce all",
            "value": "_e_all",
            "children": [
                {"label": "UK", "value": "uk"},
                {"label": "EU", "value": "eu"},
                {"label": "US", "value": "us"}
            ]
        }],

        "period":[
            {"label": "This week", "value": "week"},
            {"label": "Date range", "value": "date"},
            {"label": "This month", "value": "month"},
            {"label": "This year", "value": "year"},
            {"label": "This fiscal year", "value": "fyear"},
            {"label": "Last week", "value": "lweek"},
            {"label": "Last month", "value": "lmonth"},
            {"label": "Last year", "value": "lyear"},
            {"label": "Last fiscal year", "value": "lfyear"},
            {"label": "Last 7 days", "value": "7d"},
            {"label": "Last 30 days", "value": "30d"},
            {"label": "Last 90 days", "value": "90d"},
            {"label": "Last 12 months", "value": "12m"}
        ]
    }
}