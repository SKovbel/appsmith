export const config = {
      "ui": {
        "local": "en-GB",
        "currency": "GBP",
        "currencySign": "£",
        "timeZone": "Europe/London",
        "date": {
            "date": "DD-MMM-YYYY",
            "month": "MMM YYYY",
            "week": "#WW/YY"
        },
        "colors": [
            "#1896c6",
            "#EF767A",
            "#456990",
            "#49DCB1",
            "#EEB868"
        ],
        "color": {
            "rows": [
                "#1896c6",
                "#EF767A",
                "#456990",
                "#49DCB1",
                "#EEB868"
            ],
            "positive": "#008000",
            "negative": "#FF0000"
        },
        "data": {
            "payments": {
                "adyen_cc": "Adyen cc",
                "adyen_hpp": "Adyen hpp",
                "paypal_express": "Paypal",
                "globale": "Global-e",
                "klarna_kp": "Klarna",
                "free": "Free",
                "checkmo": "Check mo",
                "stripe": "Stripe",
                "braintree_paypal": "Paypal braintree"
            }
        },
        "topMenu": {
          "colors": {
            "topColor": '#64748b',
            "topActive": '#000000',
            "active": '#000001', // word #000001 used in styles, important to have
            "color": '#000000'
          },
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
                "title": "Product detail",
                "page": "finance_poduct-details",
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
              },
              {
                "title": "Coupon details",
                "page": "finance_coupon",
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
                    "title": "Merchandizing",
                    "page": "merchandizing_overview"
                },
                {
                    "title": "Merchandizing summary",
                    "page": "merchandizing_summary"
                },
                {
                    "title": "Merchandizing country",
                    "page": "merchandizing_country"
                }
            ]
          }
        },
        "table": {
          "colors": {
            "first_colulmn": "#f5f5f5",
            "invoice_colulmn": "#febfdb",
            "refund_colulmn": "#bffedb",
            "positive": "#008000",
            "negative": "#FF0000"
          },
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
          "finance_annual_summary": {

          },
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
                {
                    "value": "complete",
                    "label": "Complete"
                },
                {
                    "value": "canceled",
                    "label": "Canceled"
                },
                {
                    "value": "closed",
                    "label": "Closed"
                },
                {
                    "value": "new",
                    "label": "New"
                },
                {
                    "value": "holded",
                    "label": "Holded"
                },
                {
                    "value": "payment_review",
                    "label": "Payment review"
                },
                {
                    "value": "pending_payment",
                    "label": "Pending payment"
                },
                {
                    "value": "processing",
                    "label": "Processing"
                }
           ],
          "payment": [
              {
                  "value": "adyen_cc",
                  "label": "Adyen cc"
              },
              {
                  "value": "adyen_hpp",
                  "label": "Adyen hpp"
              },
              {
                  "value": "paypal_express",
                  "label": "Paypal express"
              },
              {
                  "value": "globale",
                  "label": "Global-e"
              },
              {
                  "value": "klarna_kp",
                  "label": "Klarna pk"
              },
              {
                  "value": "free",
                  "label": "Free"
              },
              {
                  "value": "checkmo",
                "value": "canceled",
                "label": "Canceled"
            },
            {
                "value": "closed",
                "label": "Closed"
            },
            {
                "value": "complete",
                "label": "Complete"
            },
            {
                "value": "holded",
                "label": "Holded"
            },
            {
                "value": "new",
                "label": "New"
            },
            {
                "value": "payment_review",
                "label": "Payment Review"
            },
            {
                "value": "pending_payment",
                "label": "Pending Payment"
            },
            {
                "value": "processing",
                "label": "Processing"
            }
          ],
          "channel": [
            {
              "label": "All",
              "value": "_all",
              "children": [
                {
                  "label": "Ecommerce all",
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
                  "label": "Offline all",
                  "value": "_o_all",
                  "children": [
                      {
                          "label": "Offline retail",
                          "value": "sq"
                      }
                  ]
                }
              ]  
            }
          ],
          "channel_f": [
            {
              "label": "Ecommerce all",
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
                "label": "This week",
                "value": "week"
            },
            {
                "label": "Date range",
                "value": "date"
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
          ],
          "country": [
            {
                "value": "AF",
                "label": "Afghanistan"
            },
            {
                "value": "AX",
                "label": "Aland Islands"
            },
            {
                "value": "AL",
                "label": "Albania"
            },
            {
                "value": "DZ",
                "label": "Algeria"
            },
            {
                "value": "AS",
                "label": "American Samoa"
            },
            {
                "value": "AD",
                "label": "Andorra"
            },
            {
                "value": "AO",
                "label": "Angola"
            },
            {
                "value": "AI",
                "label": "Anguilla"
            },
            {
                "value": "AQ",
                "label": "Antarctica"
            },
            {
                "value": "AG",
                "label": "Antigua and Barbuda"
            },
            {
                "value": "AR",
                "label": "Argentina"
            },
            {
                "value": "AM",
                "label": "Armenia"
            },
            {
                "value": "AW",
                "label": "Aruba"
            },
            {
                "value": "AU",
                "label": "Australia"
            },
            {
                "value": "AT",
                "label": "Austria"
            },
            {
                "value": "AZ",
                "label": "Azerbaijan"
            },
            {
                "value": "BS",
                "label": "Bahamas"
            },
            {
                "value": "BH",
                "label": "Bahrain"
            },
            {
                "value": "BD",
                "label": "Bangladesh"
            },
            {
                "value": "BB",
                "label": "Barbados"
            },
            {
                "value": "BY",
                "label": "Belarus"
            },
            {
                "value": "BE",
                "label": "Belgium"
            },
            {
                "value": "BZ",
                "label": "Belize"
            },
            {
                "value": "BJ",
                "label": "Benin"
            },
            {
                "value": "BM",
                "label": "Bermuda"
            },
            {
                "value": "BT",
                "label": "Bhutan"
            },
            {
                "value": "BO",
                "label": "Bolivia, Plurinational State of"
            },
            {
                "value": "BQ",
                "label": "Bonaire, Sint Eustatius and Saba"
            },
            {
                "value": "BA",
                "label": "Bosnia and Herzegovina"
            },
            {
                "value": "BW",
                "label": "Botswana"
            },
            {
                "value": "BV",
                "label": "Bouvet Island"
            },
            {
                "value": "BR",
                "label": "Brazil"
            },
            {
                "value": "IO",
                "label": "British Indian Ocean Territory"
            },
            {
                "value": "BN",
                "label": "Brunei Darussalam"
            },
            {
                "value": "BG",
                "label": "Bulgaria"
            },
            {
                "value": "BF",
                "label": "Burkina Faso"
            },
            {
                "value": "BI",
                "label": "Burundi"
            },
            {
                "value": "KH",
                "label": "Cambodia"
            },
            {
                "value": "CM",
                "label": "Cameroon"
            },
            {
                "value": "CA",
                "label": "Canada"
            },
            {
                "value": "CV",
                "label": "Cape Verde"
            },
            {
                "value": "KY",
                "label": "Cayman Islands"
            },
            {
                "value": "CF",
                "label": "Central African Republic"
            },
            {
                "value": "TD",
                "label": "Chad"
            },
            {
                "value": "CL",
                "label": "Chile"
            },
            {
                "value": "CN",
                "label": "China"
            },
            {
                "value": "CX",
                "label": "Christmas Island"
            },
            {
                "value": "CC",
                "label": "Cocos (Keeling) Islands"
            },
            {
                "value": "CO",
                "label": "Colombia"
            },
            {
                "value": "KM",
                "label": "Comoros"
            },
            {
                "value": "CG",
                "label": "Congo"
            },
            {
                "value": "CD",
                "label": "Congo, the Democratic Republic of the"
            },
            {
                "value": "CK",
                "label": "Cook Islands"
            },
            {
                "value": "CR",
                "label": "Costa Rica"
            },
            {
                "value": "CI",
                "label": "Cote d'Ivoire"
            },
            {
                "value": "HR",
                "label": "Croatia"
            },
            {
                "value": "CU",
                "label": "Cuba"
            },
            {
                "value": "CW",
                "label": "Curacao"
            },
            {
                "value": "CY",
                "label": "Cyprus"
            },
            {
                "value": "CZ",
                "label": "Czech Republic"
            },
            {
                "value": "DK",
                "label": "Denmark"
            },
            {
                "value": "DJ",
                "label": "Djibouti"
            },
            {
                "value": "DM",
                "label": "Dominica"
            },
            {
                "value": "DO",
                "label": "Dominican Republic"
            },
            {
                "value": "EC",
                "label": "Ecuador"
            },
            {
                "value": "EG",
                "label": "Egypt"
            },
            {
                "value": "SV",
                "label": "El Salvador"
            },
            {
                "value": "GQ",
                "label": "Equatorial Guinea"
            },
            {
                "value": "ER",
                "label": "Eritrea"
            },
            {
                "value": "EE",
                "label": "Estonia"
            },
            {
                "value": "ET",
                "label": "Ethiopia"
            },
            {
                "value": "FK",
                "label": "Falkland Islands (Malvinas)"
            },
            {
                "value": "FO",
                "label": "Faroe Islands"
            },
            {
                "value": "FJ",
                "label": "Fiji"
            },
            {
                "value": "FI",
                "label": "Finland"
            },
            {
                "value": "FR",
                "label": "France"
            },
            {
                "value": "GF",
                "label": "French Guiana"
            },
            {
                "value": "PF",
                "label": "French Polynesia"
            },
            {
                "value": "TF",
                "label": "French Southern Territories"
            },
            {
                "value": "GA",
                "label": "Gabon"
            },
            {
                "value": "GM",
                "label": "Gambia"
            },
            {
                "value": "GE",
                "label": "Georgia"
            },
            {
                "value": "DE",
                "label": "Germany"
            },
            {
                "value": "GH",
                "label": "Ghana"
            },
            {
                "value": "GI",
                "label": "Gibraltar"
            },
            {
                "value": "GR",
                "label": "Greece"
            },
            {
                "value": "GL",
                "label": "Greenland"
            },
            {
                "value": "GD",
                "label": "Grenada"
            },
            {
                "value": "GP",
                "label": "Guadeloupe"
            },
            {
                "value": "GU",
                "label": "Guam"
            },
            {
                "value": "GT",
                "label": "Guatemala"
            },
            {
                "value": "GG",
                "label": "Guernsey"
            },
            {
                "value": "GN",
                "label": "Guinea"
            },
            {
                "value": "GW",
                "label": "Guinea-Bissau"
            },
            {
                "value": "GY",
                "label": "Guyana"
            },
            {
                "value": "HT",
                "label": "Haiti"
            },
            {
                "value": "HM",
                "label": "Heard Island and McDonald Islands"
            },
            {
                "value": "VA",
                "label": "Holy See (Vatican City State)"
            },
            {
                "value": "HN",
                "label": "Honduras"
            },
            {
                "value": "HK",
                "label": "Hong Kong"
            },
            {
                "value": "HU",
                "label": "Hungary"
            },
            {
                "value": "IS",
                "label": "Iceland"
            },
            {
                "value": "IN",
                "label": "India"
            },
            {
                "value": "ID",
                "label": "Indonesia"
            },
            {
                "value": "IR",
                "label": "Iran, Islamic Republic of"
            },
            {
                "value": "IQ",
                "label": "Iraq"
            },
            {
                "value": "IE",
                "label": "Ireland"
            },
            {
                "value": "IM",
                "label": "Isle of Man"
            },
            {
                "value": "IL",
                "label": "Israel"
            },
            {
                "value": "IT",
                "label": "Italy"
            },
            {
                "value": "JM",
                "label": "Jamaica"
            },
            {
                "value": "JP",
                "label": "Japan"
            },
            {
                "value": "JE",
                "label": "Jersey"
            },
            {
                "value": "JO",
                "label": "Jordan"
            },
            {
                "value": "KZ",
                "label": "Kazakhstan"
            },
            {
                "value": "KE",
                "label": "Kenya"
            },
            {
                "value": "KI",
                "label": "Kiribati"
            },
            {
                "value": "KP",
                "label": "Korea, Democratic People's Republic of"
            },
            {
                "value": "KR",
                "label": "Korea, Republic of"
            },
            {
                "value": "KW",
                "label": "Kuwait"
            },
            {
                "value": "KG",
                "label": "Kyrgyzstan"
            },
            {
                "value": "LA",
                "label": "Lao People's Democratic Republic"
            },
            {
                "value": "LV",
                "label": "Latvia"
            },
            {
                "value": "LB",
                "label": "Lebanon"
            },
            {
                "value": "LS",
                "label": "Lesotho"
            },
            {
                "value": "LR",
                "label": "Liberia"
            },
            {
                "value": "LY",
                "label": "Libya"
            },
            {
                "value": "LI",
                "label": "Liechtenstein"
            },
            {
                "value": "LT",
                "label": "Lithuania"
            },
            {
                "value": "LU",
                "label": "Luxembourg"
            },
            {
                "value": "MO",
                "label": "Macao"
            },
            {
                "value": "MK",
                "label": "Macedonia, the Former Yugoslav Republic of"
            },
            {
                "value": "MG",
                "label": "Madagascar"
            },
            {
                "value": "MW",
                "label": "Malawi"
            },
            {
                "value": "MY",
                "label": "Malaysia"
            },
            {
                "value": "MV",
                "label": "Maldives"
            },
            {
                "value": "ML",
                "label": "Mali"
            },
            {
                "value": "MT",
                "label": "Malta"
            },
            {
                "value": "MH",
                "label": "Marshall Islands"
            },
            {
                "value": "MQ",
                "label": "Martinique"
            },
            {
                "value": "MR",
                "label": "Mauritania"
            },
            {
                "value": "MU",
                "label": "Mauritius"
            },
            {
                "value": "YT",
                "label": "Mayotte"
            },
            {
                "value": "MX",
                "label": "Mexico"
            },
            {
                "value": "FM",
                "label": "Micronesia, Federated States of"
            },
            {
                "value": "MD",
                "label": "Moldova, Republic of"
            },
            {
                "value": "MC",
                "label": "Monaco"
            },
            {
                "value": "MN",
                "label": "Mongolia"
            },
            {
                "value": "ME",
                "label": "Montenegro"
            },
            {
                "value": "MS",
                "label": "Montserrat"
            },
            {
                "value": "MA",
                "label": "Morocco"
            },
            {
                "value": "MZ",
                "label": "Mozambique"
            },
            {
                "value": "MM",
                "label": "Myanmar"
            },
            {
                "value": "NA",
                "label": "Namibia"
            },
            {
                "value": "NR",
                "label": "Nauru"
            },
            {
                "value": "NP",
                "label": "Nepal"
            },
            {
                "value": "NL",
                "label": "Netherlands"
            },
            {
                "value": "NC",
                "label": "New Caledonia"
            },
            {
                "value": "NZ",
                "label": "New Zealand"
            },
            {
                "value": "NI",
                "label": "Nicaragua"
            },
            {
                "value": "NE",
                "label": "Niger"
            },
            {
                "value": "NG",
                "label": "Nigeria"
            },
            {
                "value": "NU",
                "label": "Niue"
            },
            {
                "value": "NF",
                "label": "Norfolk Island"
            },
            {
                "value": "MP",
                "label": "Northern Mariana Islands"
            },
            {
                "value": "NO",
                "label": "Norway"
            },
            {
                "value": "OM",
                "label": "Oman"
            },
            {
                "value": "PK",
                "label": "Pakistan"
            },
            {
                "value": "PW",
                "label": "Palau"
            },
            {
                "value": "PS",
                "label": "Palestine, State of"
            },
            {
                "value": "PA",
                "label": "Panama"
            },
            {
                "value": "PG",
                "label": "Papua New Guinea"
            },
            {
                "value": "PY",
                "label": "Paraguay"
            },
            {
                "value": "PE",
                "label": "Peru"
            },
            {
                "value": "PH",
                "label": "Philippines"
            },
            {
                "value": "PN",
                "label": "Pitcairn"
            },
            {
                "value": "PL",
                "label": "Poland"
            },
            {
                "value": "PT",
                "label": "Portugal"
            },
            {
                "value": "PR",
                "label": "Puerto Rico"
            },
            {
                "value": "QA",
                "label": "Qatar"
            },
            {
                "value": "RE",
                "label": "Runion"
            },
            {
                "value": "RO",
                "label": "Romania"
            },
            {
                "value": "RU",
                "label": "Russian Federation"
            },
            {
                "value": "RW",
                "label": "Rwanda"
            },
            {
                "value": "BL",
                "label": "Saint Barthelemy"
            },
            {
                "value": "SH",
                "label": "Saint Helena, Ascension and Tristan da Cunha"
            },
            {
                "value": "KN",
                "label": "Saint Kitts and Nevis"
            },
            {
                "value": "LC",
                "label": "Saint Lucia"
            },
            {
                "value": "MF",
                "label": "Saint Martin (French part)"
            },
            {
                "value": "PM",
                "label": "Saint Pierre and Miquelon"
            },
            {
                "value": "VC",
                "label": "Saint Vincent and the Grenadines"
            },
            {
                "value": "WS",
                "label": "Samoa"
            },
            {
                "value": "SM",
                "label": "San Marino"
            },
            {
                "value": "ST",
                "label": "Sao Tome and Principe"
            },
            {
                "value": "SA",
                "label": "Saudi Arabia"
            },
            {
                "value": "SN",
                "label": "Senegal"
            },
            {
                "value": "RS",
                "label": "Serbia"
            },
            {
                "value": "SC",
                "label": "Seychelles"
            },
            {
                "value": "SL",
                "label": "Sierra Leone"
            },
            {
                "value": "SG",
                "label": "Singapore"
            },
            {
                "value": "SX",
                "label": "Sint Maarten (Dutch part)"
            },
            {
                "value": "SK",
                "label": "Slovakia"
            },
            {
                "value": "SI",
                "label": "Slovenia"
            },
            {
                "value": "SB",
                "label": "Solomon Islands"
            },
            {
                "value": "SO",
                "label": "Somalia"
            },
            {
                "value": "ZA",
                "label": "South Africa"
            },
            {
                "value": "GS",
                "label": "South Georgia and the South Sandwich Islands"
            },
            {
                "value": "SS",
                "label": "South Sudan"
            },
            {
                "value": "ES",
                "label": "Spain"
            },
            {
                "value": "LK",
                "label": "Sri Lanka"
            },
            {
                "value": "SD",
                "label": "Sudan"
            },
            {
                "value": "SR",
                "label": "Suriname"
            },
            {
                "value": "SJ",
                "label": "Svalbard and Jan Mayen"
            },
            {
                "value": "SZ",
                "label": "Swaziland"
            },
            {
                "value": "SE",
                "label": "Sweden"
            },
            {
                "value": "CH",
                "label": "Switzerland"
            },
            {
                "value": "SY",
                "label": "Syrian Arab Republic"
            },
            {
                "value": "TW",
                "label": "Taiwan, Province of China"
            },
            {
                "value": "TJ",
                "label": "Tajikistan"
            },
            {
                "value": "TZ",
                "label": "Tanzania, United Republic of"
            },
            {
                "value": "TH",
                "label": "Thailand"
            },
            {
                "value": "TL",
                "label": "Timor-Leste"
            },
            {
                "value": "TG",
                "label": "Togo"
            },
            {
                "value": "TK",
                "label": "Tokelau"
            },
            {
                "value": "TO",
                "label": "Tonga"
            },
            {
                "value": "TT",
                "label": "Trinidad and Tobago"
            },
            {
                "value": "TN",
                "label": "Tunisia"
            },
            {
                "value": "TR",
                "label": "Turkey"
            },
            {
                "value": "TM",
                "label": "Turkmenistan"
            },
            {
                "value": "TC",
                "label": "Turks and Caicos Islands"
            },
            {
                "value": "TV",
                "label": "Tuvalu"
            },
            {
                "value": "UG",
                "label": "Uganda"
            },
            {
                "value": "UA",
                "label": "Ukraine"
            },
            {
                "value": "AE",
                "label": "United Arab Emirates"
            },
            {
                "value": "GB",
                "label": "United Kingdom"
            },
            {
                "value": "US",
                "label": "United States"
            },
            {
                "value": "UM",
                "label": "United States Minor Outlying Islands"
            },
            {
                "value": "UY",
                "label": "Uruguay"
            },
            {
                "value": "UZ",
                "label": "Uzbekistan"
            },
            {
                "value": "VU",
                "label": "Vanuatu"
            },
            {
                "value": "VE",
                "label": "Venezuela, Bolivarian Republic of"
            },
            {
                "value": "VN",
                "label": "Viet Nam"
            },
            {
                "value": "VG",
                "label": "Virgin Islands, British"
            },
            {
                "value": "VI",
                "label": "Virgin Islands, U.S."
            },
            {
                "value": "WF",
                "label": "Wallis and Futuna"
            },
            {
                "value": "EH",
                "label": "Western Sahara"
            },
            {
                "value": "YE",
                "label": "Yemen"
            },
            {
                "value": "ZM",
                "label": "Zambia"
            },
            {
                "value": "ZW",
                "label": "Zimbabwe"
            }
          ]
        }
      }
};

