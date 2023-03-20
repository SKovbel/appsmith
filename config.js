// File kitroyale.js
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports"], factory)
    } else if (typeof exports !== "undefined") {
        factory(exports)
    } else {
        var mod = {exports: {}}
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
            "icon": "timeline-bar-chart",
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
            "icon": "timeline-area-chart",
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
          },
          "product": {
            "title": "Product",
            "icon": "timshopping-cart",
            "disabled": true,
            "submenus": [
              {
                "title": "Product 1",
                "page": "",
                "visible": false
              }
            ]
          },
          "merchandizing": {
            "title": "Merchandizing",
            "icon": "flash",
            "disabled": true,
            "submenus": [
              {
                "title": "Merchandizing 1",
                "page": "",
                "visible": false
              }
            ]
          }
        },
        "filter": {
          "channel": [
            {
              "label": "All",
              "value": "_all",
              "children": [
                {
                  "label": "Ecommerce All",
                  "value": "_e_all",
                  "children": [
                      {
                          "label": "UK",
                          "value": "uk"
                      },
                      {
                          "label": "EU",
                          "value": "eu"
                      },
                      {
                          "label": "US",
                          "value": "us"
                      }
                  ]
                },
                {
                  "label": "Offline All",
                  "value": "_o_all",
                  "children": [
                      {
                          "label": "offline retail",
                          "value": "sq"
                      }
                  ]
                }
              ]  
            }
          ],
          "channel_f": [
            {

              "label": "Ecommerce All",
              "value": "_e_all",
              "children": [
                  {
                      "label": "UK",
                      "value": "uk"
                  },
                  {
                      "label": "EU",
                      "value": "eu"
                  },
                  {
                      "label": "US",
                      "value": "us"
                  }
              ]
            }
          ],
          "period":[
            {
                "label": "Date range",
                "value": "date"
            },
            {
                "label": "This week",
                "value": "week"
            },
            {
                "label": "This month",
                "value": "month"
            },
            {
                "label": "This year",
                "value": "year"
            },
            {
                "label": "This fiscal year",
                "value": "fyear"
            },
            {
                "label": "Last week",
                "value": "lweek"
            },
            {
                "label": "Last month",
                "value": "lmonth"
            },
            {
                "label": "Last year",
                "value": "lyear"
            },
            {
                "label": "Last fiscal year",
                "value": "lfyear"
            },
            {
                "label": "Last 7 days",
                "value": "7d"
            },
            {
                "label": "Last 30 days",
                "value": "30d"
            },
            {
                "label": "Last 90 days",
                "value": "90d"
            },
            {
                "label": "Last 12 months",
                "value": "12m"
            }
          ]
        }
      }
    }
})