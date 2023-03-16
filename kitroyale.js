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
        global.kitroyale = mod.exports
    }
})(this, function (exports) {
    "use strict"

    exports.kitroyale = {
      "ui": {
        "local": "en-GB",
        "currency": "GBP",
        "timeZone": "Europe/London",
        "topMenu": {
          "sales": {
            "title": "Sales",
            "page": "sales_sale-overview",
            "submenus": [
              {
                "title": "Sales overview",
                "page": "sales_sale-overview",
              },
              {
                "title": "Daily sales summary",
                "page": "sales_daily-sales-summary",
              },
              {
                "title": "Ecommerce weekly",
                "page": "sales_ecommerce-weekly",
              },
              {
                "title": "Offline retail weekly",
                "page": "sales_offline-retail-weekly",
              },
              {
                "title": "Annual sales summary",
                "page": "sales_annual-sales-summary",
              },
              {
                "title": "Best sellers",
                "page": "sales_best-sellers",
              }
            ]
          },
          "finance": {
            "title": "Finance",
            "page": "finance_finance-overview",
            "submenus": [
              {
                "title": "Finance overview",
                "page": "finance_finance-overview",
              },
              {
                "title": "Sale summary",
                "page": "finance_sales-summary",
              },
              {
                "title": "Sales details",
                "page": "finance_sales-details",
              },
              {
                "title": "Sales by payment",
                "page": "finance_sales-by-payment",
              },
              {
                "title": "Sales by country",
                "page": "finance_sales-by-country",
              },
              {
                "title": "Shipping",
                "page": "finance_shipping",
              },
              {
                "title": "Annual summary",
                "page": "finance_annual-summary",
              }
            ]
          }
        ]
      }
    }
})
