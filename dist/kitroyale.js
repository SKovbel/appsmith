!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(()=>(()=>{var e={790:(e,t)=>{t.v={locale:{name:"en-GB",currency:"GBP",currencySign:"£",timeZone:"Europe/London"},format:{date:"DD-MMM-YYYY",week:"#WW/YY",month:"MMM YYYY"}}},286:(e,t)=>{t.d={channels:{uk:"UK",eu:"EU",us:"US",sq:"Offline retail"},days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],payments:{adyen_cc:"Adyen cc",adyen_hpp:"Adyen hpp",paypal_express:"Paypal",globale:"Global-e",klarna_kp:"Klarna",free:"Free",checkmo:"Check mo",stripe:"Stripe",braintree_paypal:"Paypal braintree"},page:{"sales_sale-overview":"Sales overview","sales_daily-sales-summary":"Daily sales summary","sales_ecommerce-weekly":"Ecommerce weekly","sales_offline-retail-weekly":"Offline retail weekly","sales_annual-sales-summary":"Annual sales summary","sales_best-sellers":"Best sellers","finance_finance-overview":"Finance overview","finance_sales-summary":"Sale summary","finance_poduct-details":"Product detail","finance_sales-by-payment":"Sales by payment","finance_sales-by-country":"Sales by country",finance_shipping:"Shipping","finance_annual-summary":"Annual summary",finance_coupon:"Coupon details"},getChannelsAll:function(){return[{value:"uk",label:dict.channels.uk},{value:"eu",label:dict.channels.eu},{value:"us",label:dict.channels.us},{value:"sq",label:dict.channels.sq}]},getChannelsOnline:function(){return[{value:"uk",label:dict.channels.uk},{value:"eu",label:dict.channels.eu},{value:"us",label:dict.channels.us}]},getChannelsAllTree:function(){return[{label:"All",value:"_all",children:[{label:"Ecommerce all",value:"_e_all",children:[{value:"uk",label:dict.channels.uk},{value:"eu",label:dict.channels.eu},{value:"us",label:dict.channels.us}]},{label:"Offline all",value:"_o_all",children:[{value:"sq",label:dict.channels.sq}]}]}]},getChannelsOnlineTree:function(){return[{label:"All",value:"_all",children:[{label:"Ecommerce all",value:"_e_all",children:[{value:"uk",label:dict.channels.uk},{value:"eu",label:dict.channels.eu},{value:"us",label:dict.channels.us}]}]}]}}},486:(e,t)=>{t.ui={table:{sales_daily_sales_summary:{columnTitleA:{title:function(){return"Current week #"+reports.getDateA().format("WW YYYY")}},columnTitleB:{title:function(){return"Previous week #"+reports.getDateB().format("WW YYYY")}},columnTitleC:{title:function(){return"Variance #"+reports.getDateA().format("WW YYYY")+" vs #"+reports.getDateB().format("WW YYYY")}},columnTitleD:{title:function(){return"Previous year #"+reports.getDateC().format("WW YYYY")}},columnTitleE:{title:function(){return"Variance #"+reports.getDateA().format("WW YYYY")+" vs #"+reports.getDateC().format("WW YYYY")}},columnSun:{title:function(){return"Sun"}},columnMon:{title:function(){return"Mon"}},columnTue:{title:function(){return"Tue"}},columnWed:{title:function(){return"Wed"}},columnThu:{title:function(){return"Thu"}},columnFri:{title:function(){return"Fri"}},columnSat:{title:function(){return"Sat"}},columnWtd:{title:function(){return"WTD"}},columnWeek:{title:function(){return"WoW total"}}},sales_ecommerce_weekly:{columnTitleA:{title:function(){return""}},columnTitleB:{title:function(){return"Current week #"+reports.getDateA().format("WW YYYY")}},columnTitleC:{title:function(){return"Previous week #"+reports.getDateB().format("WW YYYY")}},columnTitleD:{title:function(){return"Var #"+reports.getDateA().format("WW YYYY")+" vs #"+reports.getDateB().format("WW YYYY")}},columnTitleE:{title:function(){return"Previous year #"+reports.getDateC().format("WW YYYY")}},columnTitleF:{title:function(){return"Var #"+reports.getDateA().format("WW YYYY")+" vs #"+reports.getDateC().format("WW YYYY")}},columnDayPrev:{title:function(){return moment(filter_period.selectedDate).subtract(1,"week").format("ddd, DD.MM")}},columnDayCurr:{title:function(){return moment(filter_period.selectedDate).format("ddd, DD.MM")}},columnDayVar:{title:function(){return"Var %"}},columnWtdPrev:{title:function(){return"WTD, #"+moment(filter_period.selectedDate).subtract(1,"week").format("WW")}},columnWtdCurr:{title:function(){return"WTD, #"+moment(filter_period.selectedDate).format("WW")}},columnWtdVar:{title:function(){return"WTD, Var %"}},columnTotalPrev:{title:function(){return"Total, #"+moment(filter_period.selectedDate).subtract(1,"week").format("WW")}},columnTotalCurr:{title:function(){return"Total, #"+moment(filter_period.selectedDate).format("WW")}},columnTotalVar:{title:function(){return"Total, Var %"}},columnSun:{title:function(){return"Sun"}},columnMon:{title:function(){return"Mon"}},columnTue:{title:function(){return"Tue"}},columnWed:{title:function(){return"Wed"}},columnThu:{title:function(){return"Thu"}},columnFri:{title:function(){return"Fri"}},columnSat:{title:function(){return"Sat"}},columnWtd:{title:function(){return"WTD"}},columnWeek:{title:function(){return"WoW total"}}},sales_offline_retail_weekly:{columnTitleA:{title:function(){return""}},columnTitleB:{title:function(){return"Current week #"+reports.getDateA().format("WW YYYY")}},columnTitleC:{title:function(){return"Previous week #"+reports.getDateB().format("WW YYYY")}},columnTitleD:{title:function(){return"Var #"+reports.getDateA().format("WW YYYY")+" vs #"+reports.getDateB().format("WW YYYY")}},columnTitleE:{title:function(){return"Previous year #"+reports.getDateC().format("WW YYYY")}},columnTitleF:{title:function(){return"Var #"+reports.getDateA().format("WW YYYY")+" vs #"+reports.getDateC().format("WW YYYY")}},columnDayPrev:{title:function(){return moment(filter_period.selectedDate).subtract(1,"week").format("ddd, DD.MM")}},columnDayCurr:{title:function(){return moment(filter_period.selectedDate).format("ddd, DD.MM")}},columnDayVar:{title:function(){return"Var %"}},columnWtdPrev:{title:function(){return"WTD, #"+moment(filter_period.selectedDate).subtract(1,"week").format("WW")}},columnWtdCurr:{title:function(){return"WTD, #"+moment(filter_period.selectedDate).format("WW")}},columnWtdVar:{title:function(){return"WTD, Var %"}},columnTotalPrev:{title:function(){return"Total, #"+moment(filter_period.selectedDate).subtract(1,"week").format("WW")}},columnTotalCurr:{title:function(){return"Total, #"+moment(filter_period.selectedDate).format("WW")}},columnTotalVar:{title:function(){return"Total, Var %"}},columnSun:{title:function(){return"Sun"}},columnMon:{title:function(){return"Mon"}},columnTue:{title:function(){return"Tue"}},columnWed:{title:function(){return"Wed"}},columnThu:{title:function(){return"Thu"}},columnFri:{title:function(){return"Fri"}},columnSat:{title:function(){return"Sat"}},columnWtd:{title:function(){return"WTD"}},columnWeek:{title:function(){return"WoW total"}}},sales_annual_sales_summary:{columnTitleA:{title:function(){return"Current "+reports.getPeriodAFrom().format("YYYY")}},columnTitleB:{title:function(){return"Previous "+reports.getPeriodBFrom().format("YYYY")}},columnTitleC:{title:function(){return reports.getPeriodAFrom().format("YYYY")+" vs "+reports.getPeriodBFrom().format("YYYY")}},columnJan:{title:function(){return"Jan"}},columnFeb:{title:function(){return"Feb"}},columnMar:{title:function(){return"Mar"}},columnApr:{title:function(){return"Apr"}},columnMay:{title:function(){return"May"}},columnJun:{title:function(){return"Jun"}},columnJul:{title:function(){return"Jul"}},columnAug:{title:function(){return"Aug"}},columnSep:{title:function(){return"Sep"}},columnOct:{title:function(){return"Oct"}},columnNov:{title:function(){return"Nov"}},columnDec:{title:function(){return"Dec"}},columnYtd:{title:function(){return"YTD"}},columnTotal:{title:function(){return"Total"}}},sales_best_sellers:{columnRank:{title:function(){return"Rank"}},columnImage:{title:function(){return"Image"}},columnSku:{title:function(){return"SKU"}},columnSold:{title:function(){return"Sold items"}},columnOrig:{title:function(){return"Original price"}},columnPrice:{title:function(){return"Price"}},columnTotal:{title:function(){return"Total sold"}},columnName:{title:function(){return"Product name"}}},finance_sales_summary:{columnTitle:{title:function(){return""}},columnThis:{title:function(){return appsmith.store.period}},columnPrev:{title:function(){return appsmith.store.compare}},columnVar:{title:function(){return"Variance"}}},finance_sales_by_country:{columnTitle:{title:function(){return""}},columnCurr:{title:function(){return filter_country.selectedOptionLabels.join()}},columnGlob:{title:function(){return"Global Total"}},columnVar:{title:function(){return"% of Global Total"}}},finance_annual_summary:{},finance_sales_details:{columnTitle:{title:function(){return"Sku"}},columnName:{title:function(){return"Name"}},columnPrice:{title:function(){return"Price"}},columnSpecial:{title:function(){return"Special"}},columnQty:{title:function(){return"Qty"}},columnQtyRefunded:{title:function(){return"Qty refunded"}},columnTotal:{title:function(){return"Total"}},columnRevenue:{title:function(){return"Revenue"}},columnRefunded:{title:function(){return"Refunded"}},columnNetQty:{title:function(){return"NetQty"}},columnNetSales:{title:function(){return"Net Sales"}},columnNetSalesVat:{title:function(){return"Net Sales Vat"}},columnNetTotalSales:{title:function(){return"Net Total Sales"}},columnCost:{title:function(){return"Cost"}},columnCostTotal:{title:function(){return"Cost Total"}},columnProfit:{title:function(){return"Profit"}},columnMargin:{title:function(){return"Margin"}},columnStock:{title:function(){return"Stock"}}},finance_shipping:{columnTitle:{title:function(){return"Method"}},columnOrders:{title:function(){return"Orders"}},columnShipments:{title:function(){return"Shipments"}},columnQty:{title:function(){return"Qty"}},columnFreeQty:{title:function(){return"Free qty"}},columnAOV:{title:function(){return"AOV"}},columnShipping:{title:function(){return"Shipping"}},columnShippingVAT:{title:function(){return"Shipping VAT"}},columnTotalExVAT:{title:function(){return"Total ex VAT"}},columnTotalVAT:{title:function(){return"Total VAT"}},columnTotal:{title:function(){return"Total "}},columnShippingRefundedExVAT:{title:function(){return"Shipping refunded ex VAT"}}},finance_coupon:{columnTitle:{title:function(){return"Order Id"}},columnCoupon:{title:function(){return"Coupon"}},columnPaymentType:{title:function(){return"Payment type"}},columnOrdersTotal:{title:function(){return"Orders total"}},columnOrdersSubtotal:{title:function(){return"Orders subtotal"}},columnOrdersShipping:{title:function(){return"Orders shipping"}},columnRefundsTotal:{title:function(){return"Refunds total"}}}},filter:{status:[{value:"complete",label:"Complete"},{value:"canceled",label:"Canceled"},{value:"closed",label:"Closed"},{value:"new",label:"New"},{value:"holded",label:"Holded"},{value:"payment_review",label:"Payment review"},{value:"pending_payment",label:"Pending payment"},{value:"processing",label:"Processing"}],payment:[{value:"adyen_cc",label:"Adyen cc"},{value:"adyen_hpp",label:"Adyen hpp"},{value:"paypal_express",label:"Paypal express"},{value:"globale",label:"Global-e"},{value:"klarna_kp",label:"Klarna pk"},{value:"free",label:"Free"},{value:"checkmo",label:"Checkmo"},{value:"canceled",label:"Canceled"},{value:"closed",label:"Closed"},{value:"complete",label:"Complete"},{value:"holded",label:"Holded"},{value:"new",label:"New"},{value:"payment_review",label:"Payment Review"},{value:"pending_payment",label:"Pending Payment"},{value:"processing",label:"Processing"}],period:[{label:"This week",value:"week"},{label:"Date range",value:"date"},{label:"This month",value:"month"},{label:"This year",value:"year"},{label:"This fiscal year",value:"fyear"},{label:"Last week",value:"lweek"},{label:"Last month",value:"lmonth"},{label:"Last year",value:"lyear"},{label:"Last fiscal year",value:"lfyear"},{label:"Last 7 days",value:"7d"},{label:"Last 30 days",value:"30d"},{label:"Last 90 days",value:"90d"},{label:"Last 12 months",value:"12m"}]}}},520:(e,t)=>{function r(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,l=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}t.u=function(e,t){var o,n=function(e){return(e=null!=e?String(e).replaceAll(",",""):"").replaceAll(String.fromCharCode(163),String.fromCharCode(194,163))},a=[],l=r(t);try{for(l.s();!(o=l.n()).done;){var u,i=o.value,m=[],s=[],c=r(i.columnOrder);try{for(c.s();!(u=c.n()).done;){var f=u.value;s.push(i.primaryColumns[f].originalId);var p,Y=r(i.tableHeaders);try{for(Y.s();!(p=Y.n()).done;){var d=p.value;f==d.id&&m.push(n(d.label))}}catch(e){Y.e(e)}finally{Y.f()}}}catch(e){c.e(e)}finally{c.f()}a.push(m.join(","));var y,D=r(i.tableData);try{for(D.s();!(y=D.n()).done;){var h=y.value;m=[];var v,b=r(s);try{for(b.s();!(v=b.n()).done;){var M=v.value;m.push(n(h[M]))}}catch(e){b.e(e)}finally{b.f()}a.push(m.join(","))}}catch(e){D.e(e)}finally{D.f()}a.push(" ")}}catch(e){l.e(e)}finally{l.f()}download(a.join("\n"),e,"data:text/csv")}},728:(e,t)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}t.W={round:function(e,t){return Number(Math.round(e+"e+"+t)+"e-"+t)},formatOld:function(e,t,r){if(""===t||null===t||isNaN(t))return"";if(0===t&&r)return"";var o={minimumFractionDigits:0,maximumFractionDigits:0};return(e=e.toLowerCase()).includes("aov")||e.includes("atv")||e.includes("rate")||e.includes("%")||e.includes("conversion")?(o.minimumFractionDigits=2,o.maximumFractionDigits=2,t=Math.round(100*t)/100):t=Math.round(t),(e.includes("£")||e.includes("$"))&&(o.style="currency",o.currency=config.locale.currency),t.toLocaleString(window.config.locale.name,o)},format:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=Object.assign({currency:!1,decimal:0},t),""===e||null===e||isNaN(e))return"";if(t.hideZero)return"";var r={style:"currency"};r.currency=config.locale.currency,r.minimumFractionDigits=t.decimal>0?t.decimal:0,r.maximumFractionDigits=t.decimal>0?t.decimal:0;var o=new Intl.NumberFormat(window.config.locale.name,r).format(e).replace(/\s/i,"").replace(/[^0-9\,\.\-]/i,"").trim();return t.currency&&(o=config.locale.currencySign+o),t.percent&&(o+="%"),o},currency:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.currency=2,format.format(e,t)},percent:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.percent=!0,r.decinal=2,e&&t?format.format(100*(e-t)/t,r):null},toInt:function(e){return e&&("string"==typeof e||e instanceof String)?parseInt(e.replace(/[^\d.-]/g,"")):e},toArray:function(e){var t,o=[],n=function(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,i=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return u=e.done,e},e:function(e){i=!0,l=e},f:function(){try{u||null==o.return||o.return()}finally{if(i)throw l}}}}(Object.keys(e).sort());try{for(n.s();!(t=n.n()).done;){var a=t.value;o.push(e[a])}}catch(e){n.e(e)}finally{n.f()}return o},cap:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},colorizeRow:function(e,t){var r=format.toInt(e);return 0==r||r>0&&t?"":r>0?config.ui.table.colors.positive:config.ui.table.colors.negative},colorizeCell:function(e){return e&&e.length>0?"#FFFFFF":"#F0F0F0"}}},457:(e,t)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}t.h={getPeriodAFrom:function(e){return e?moment(appsmith.store.periodFrom).format("YYYY-MM-DD"):moment(appsmith.store.periodFrom)},getPeriodATo:function(e){return e?moment(appsmith.store.periodTo).format("YYYY-MM-DD"):moment(appsmith.store.periodTo)},getPeriodBFrom:function(e){return e?moment(appsmith.store.compareFrom).format("YYYY-MM-DD"):moment(appsmith.store.compareFrom)},getPeriodBTo:function(e){return e?moment(appsmith.store.compareTo).format("YYYY-MM-DD"):moment(appsmith.store.compareTo)},getPeriodCFrom:function(e){return e?moment(appsmith.store.yearFrom).format("YYYY-MM-DD"):moment(appsmith.store.yearFrom)},getPeriodCTo:function(e){return e?moment(appsmith.store.yearTo).format("YYYY-MM-DD"):moment(appsmith.store.yearTo)},getPeriodYFrom:function(e){if("py"==appsmith.store.compare)return filter.getPeriodAFrom(e);var t=moment(appsmith.store.yearTo);return e?t.format("YYYY-MM-DD"):t},getPeriodYTo:function(e){if("py"==appsmith.store.compare)return filter.getPeriodATo(e);var t=moment(Date());return e?t.format("YYYY-MM-DD"):t},showFilters:function(){showModal("FilterModal")},confirm:function(){if(closeModal("FilterModal"),"undefined"!=typeof filter_period){var e=filter_period.selectedOptionValue;if("date"==(e=e||"week")){var t=moment(filter_dateTo.selectedDate),r=moment(filter_dateFrom.selectedDate),o=t.diff(r,"days");storeValue("periodFrom",r.format("YYYY-MM-DD")),storeValue("periodTo",t.format("YYYY-MM-DD")),storeValue("compareFrom",r.subtract(1+o,"day").format("YYYY-MM-DD")),storeValue("compareTo",t.subtract(1+o,"day").format("YYYY-MM-DD")),storeValue("yearFrom",r.subtract(1,"year").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").format("YYYY-MM-DD")),storeValue("period",appsmith.store.periodFrom+" - "+appsmith.store.periodTo),storeValue("compare",appsmith.store.compareFrom+" - "+appsmith.store.compareTo),storeValue("short","pp"),storeValue("year","py"),storeValue("interval","day")}else"week"==e?(storeValue("periodFrom",moment(Date()).startOf("week").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).endOf("week").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(1,"week").startOf("week").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(1,"week").endOf("week").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").startOf("week").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").endOf("week").format("YYYY-MM-DD")),storeValue("period","This week"),storeValue("compare","Previous"),storeValue("short","pw"),storeValue("year","py"),storeValue("interval","day")):"month"==e?(storeValue("periodFrom",moment(Date()).startOf("month").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).endOf("month").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(1,"month").startOf("month").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(1,"month").endOf("month").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").startOf("month").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").endOf("month").format("YYYY-MM-DD")),storeValue("period","This month"),storeValue("compare","Previous"),storeValue("short","pm"),storeValue("year","py"),storeValue("interval","week")):"year"==e?(storeValue("periodFrom",moment(Date()).startOf("year").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).endOf("year").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(1,"year").startOf("year").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(1,"year").endOf("year").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(2,"year").startOf("year").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(2,"year").endOf("year").format("YYYY-MM-DD")),storeValue("period","This year"),storeValue("compare","Previous"),storeValue("short","py"),storeValue("year","p2y"),storeValue("interval","month")):"fyear"==e?(storeValue("periodFrom","2022-04-06"),storeValue("periodTo","2023-04-05"),storeValue("compareFrom","2021-04-06"),storeValue("compareTo","2022-04-05"),storeValue("yearFrom","2020-04-06"),storeValue("yearTo","2021-04-05"),storeValue("period","This fiscal year"),storeValue("compare","Previous"),storeValue("short","py"),storeValue("year","p2y"),storeValue("interval","month")):"lweek"==e?(storeValue("periodFrom",moment(Date()).subtract(1,"week").startOf("week").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).subtract(1,"week").endOf("week").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(2,"week").startOf("week").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(2,"week").endOf("week").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").startOf("week").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").endOf("week").format("YYYY-MM-DD")),storeValue("period","Last week"),storeValue("compare","Previous"),storeValue("short","pw"),storeValue("year","py"),storeValue("interval","day")):"lmonth"==e?(storeValue("periodFrom",moment(Date()).subtract(1,"month").startOf("month").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).subtract(1,"month").endOf("month").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(2,"month").startOf("month").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(2,"month").endOf("month").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").startOf("month").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").endOf("month").format("YYYY-MM-DD")),storeValue("period","Last month"),storeValue("compare","Previous"),storeValue("short","pm"),storeValue("year","py"),storeValue("interval","week")):"lyear"==e?(storeValue("periodFrom",moment(Date()).subtract(1,"year").startOf("year").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).subtract(1,"year").endOf("year").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(2,"year").startOf("year").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(2,"year").endOf("year").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(2,"year").startOf("year").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(2,"year").endOf("year").format("YYYY-MM-DD")),storeValue("period","Last year"),storeValue("compare","Previous"),storeValue("short","py"),storeValue("year","p2y"),storeValue("interval","month")):"lfyear"==e?(storeValue("periodFrom","2021-04-06"),storeValue("periodTo","2022-04-05"),storeValue("compareFrom","2020-04-06"),storeValue("compareTo","2021-04-05"),storeValue("yearFrom","2019-04-06"),storeValue("yearTo","2020-04-05"),storeValue("period","Last fiscal year"),storeValue("compare","Previous"),storeValue("short","py"),storeValue("year","p2y"),storeValue("interval","month")):"7d"==e?(storeValue("periodFrom",moment(Date()).subtract(7,"day").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(15,"day").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(8,"day").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").format("YYYY-MM-DD")),storeValue("period","Last 7 days"),storeValue("compare","Previous"),storeValue("short","pd"),storeValue("year","py"),storeValue("interval","day")):"30d"==e?(storeValue("periodFrom",moment(Date()).subtract(30,"day").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(61,"day").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(31,"day").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").format("YYYY-MM-DD")),storeValue("period","Last 30 days"),storeValue("compare","Previous"),storeValue("short","pd"),storeValue("year","py"),storeValue("interval","day")):"90d"==e?(storeValue("periodFrom",moment(Date()).subtract(90,"day").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(181,"day").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(91,"day").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").format("YYYY-MM-DD")),storeValue("period","Last 90 days"),storeValue("compare","Previous"),storeValue("short","pd"),storeValue("year","py"),storeValue("interval","week")):"12m"==e?(storeValue("periodFrom",moment(Date()).subtract(12,"month").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(25,"month").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(13,"month").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(36,"month").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(24,"month").format("YYYY-MM-DD")),storeValue("period","Last 12 months"),storeValue("compare","Previous"),storeValue("short","py"),storeValue("year","p2y"),storeValue("interval","month")):(storeValue("periodFrom",moment(Date()).startOf("week").format("YYYY-MM-DD")),storeValue("periodTo",moment(Date()).endOf("week").format("YYYY-MM-DD")),storeValue("compareFrom",moment(Date()).subtract(1,"week").startOf("week").format("YYYY-MM-DD")),storeValue("compareTo",moment(Date()).subtract(1,"week").endOf("week").format("YYYY-MM-DD")),storeValue("yearFrom",moment(appsmith.store.periodFrom).subtract(1,"year").startOf("week").format("YYYY-MM-DD")),storeValue("yearTo",moment(appsmith.store.periodTo).subtract(1,"year").endOf("week").format("YYYY-MM-DD")),storeValue("period","Last week"),storeValue("compare","Previous"),storeValue("short","pw"),storeValue("year","py"),storeValue("interval","day"))}},yearsPeriod:function(){for(var e=[{label:"Last 12 months",value:""}],t=moment(Date()).year();t>=2015;t--)e.push({label:"Year "+t,value:t});return e},arrayToString:function(e){return'["'+e.join('","')+'"]'},skuCondition:function(){return filter_sku.text?'sku: {contains: "'+filter_sku.text+'"}':""},channelCondition:function(e){var t,o=function(e){if(Array.isArray(e))return r(e)}(t=filter_channel.selectedOptionValues)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();return e&&o.push(Math.random().toString()),"storeCode: {in: "+filter.arrayToString(o)+"}"},statusCondition:function(){return filter_status.selectedOptionValues.length?"status: {in: "+filter.arrayToString(filter_status.selectedOptionValues)+"}":""},countryCondition:function(){return filter_country.selectedOptionValues.length?"country: {in: "+filter.arrayToString(filter_country.selectedOptionValues)+"}":""},paymentCondition:function(){return filter_payment.selectedOptionValues.length?"payment: {in: "+filter.arrayToString(filter_payment.selectedOptionValues)+"}":""},sizeCondition:function(){return filter_size.selectedOptionValues.length?"size: {in: "+filter.arrayToString(filter_size.selectedOptionValues)+"}":""},colorCondition:function(){return filter_color.selectedOptionValues.length?"color: {in: "+filter.arrayToString(filter_color.selectedOptionValues)+"}":""},categoryCondition:function(){return filter_category.selectedOptionValues.length?"category: {in: "+filter.arrayToString(filter_category.selectedOptionValues)+"}":""}}},55:(e,t)=>{t.G={color:{color:"#000000",active:"#000001",topColor:"#64748b",topActive:"#FFFFFF"},sales:{title:"Sales",icon:"timeline-bar-chart",submenus:[{title:"Sales overview",page:"sales_sale-overview"},{title:"Daily sales summary",page:"sales_daily-sales-summary"},{title:"Ecommerce weekly",page:"sales_ecommerce-weekly"},{title:"Offline retail weekly",page:"sales_offline-retail-weekly"},{title:"Annual sales summary",page:"sales_annual-sales-summary"},{title:"Best sellers",page:"sales_best-sellers"}]},finance:{title:"Finance",icon:"timeline-area-chart",submenus:[{title:"Finance overview",page:"finance_finance-overview"},{title:"Sale summary",page:"finance_sales-summary"},{title:"Product detail",page:"finance_poduct-details"},{title:"Sales by payment",page:"finance_sales-by-payment"},{title:"Sales by country",page:"finance_sales-by-country"},{title:"Shipping",page:"finance_shipping"},{title:"Annual summary",page:"finance_annual-summary"},{title:"Coupon details",page:"finance_coupon"}]},product:{title:"Product",icon:"timshopping-cart",disabled:!0,submenus:[{title:"Page 1",page:"",visible:!1}]},merchandizing:{title:"Merchandizing",icon:"flash",disabled:!0,submenus:[{title:"Page 1",page:"",visible:!1}]},isActive:function(e){return!(!e||0==e.length)&&e.reduce((function(e,t){return!!appsmith.URL.pathname.includes(t.page.replaceAll("_","-"))||e}),!1)}}},701:(e,t)=>{t.o={color:{positive:"#008000",negative:"#FF0000",set:["#1896c6","#EF767A","#EEB868","#49DCB1","#456990"]},valueColor:function(e,t){var r=format.toInt(e);return 0==r||r>0&&t?"":r>0?style.color.positive:style.color.negative},valueBackground:function(e){return e&&e.length>0?"#FFFFFF":"#F0F0F0"}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{"use strict";r.r(o),r.d(o,{config:()=>e.v,dict:()=>n.d,exportCsv:()=>l.u,filter:()=>u.h,format:()=>a.W,menu:()=>i.G,style:()=>m.o,ui:()=>t.ui});var e=r(790),t=r(486),n=r(286),a=r(728),l=r(520),u=r(457),i=r(55),m=r(701)})(),o})()));