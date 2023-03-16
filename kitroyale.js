// File kitroyale.js
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
        global.exportCsv = mod.exports
    }
})(this, function (exports) {
    "use strict"

    exports.kitroyale = {
      "ui": {
        "local": "en-GB",
        "currency": "GBP",
        "timeZone": "Europe/London",
        "topMenu": [
          {
            "title": "Sales",
            "page": "sales_sale-overview",
            "submenus": [
              {
                "title": "Sales overview",
                "page": "sales_sale-overview",
                "old_page": "Dashboard"
              },
              {
                "title": "Daily sales summary",
                "page": "sales_daily-sales-summary",
                "old_page": "Weekly Summary"
              },
              {
                "title": "Ecommerce weekly",
                "page": "sales_ecommerce-weekly",
                "old_page": "Ecommerce Weekly"
              },
              {
                "title": "Offline retail weekly",
                "page": "sales_offline-retail-weekly",
                "old_page": "Retail Weekly "
              },
              {
                "title": "Annual sales summary",
                "page": "sales_annual-sales-summary",
                "old_page": "Annual Summary"
              },
              {
                "title": "Best sellers",
                "page": "sales_best-sellers",
                "old_page": "Best Sellers"
              }
            ]
          },
          {
            "title": "Finance",
            "page": "finance_finance-overview",
            "submenus": [
              {
                "title": "Finance overview",
                "page": "finance_finance-overview",
                "old_page": "Finance Dashboard"
              },
              {
                "title": "Sale summary",
                "page": "finance_sales-summary",
                "old_page": "Finance Overview"
              },
              {
                "title": "Sales details",
                "page": "finance_sales-details",
                "old_page": "Finance Product"
              },
              {
                "title": "Sales by payment",
                "page": "finance_sales-by-payment",
                "old_page": "Finance Payment"
              },
              {
                "title": "Sales by country",
                "page": "finance_sales-by-country",
                "old_page": "Finance Country"
              },
              {
                "title": "Shipping",
                "page": "finance_shipping",
                "old_page": "Finance Shipping"
              },
              {
                "title": "Annual summary",
                "page": "finance_annual-summary",
                "old_page": "Finance Annual"
              }
            ]
          }
        ]
      }
    }
})
