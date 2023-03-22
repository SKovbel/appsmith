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
        "table": {
          "first_colulmn_color": "#bfdbfe",
          "invoice_colulmn_color": "#febfdb",
          "refund_colulmn_color": "#bffedb",
          "colors": {
            "first_colulmn": "#bfdbfe",
            "invoice_colulmn": "#febfdb",
            "refund_colulmn": "#bffedb",
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
              "columnWeek": {"title": () => "Weekly total"}
          }
        },
        "filter": {
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
                  "label": "Check mo"
              },
              {
                  "value": "stripe",
                  "label": "Stripe"
              },
              {
                  "value": "braintree_paypal",
                  "label": "Paypal braintree"
              }
          ],
          "status": [
            {
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
    }
})
