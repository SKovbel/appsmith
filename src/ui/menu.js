exports.menu = {
    "color": {
        "color": '#000000',
        "active": '#000001', // word #000001 used in styles, important to have
        "topColor": '#64748b',
        "topActive": '#FFFFFF',
    },

    "submenu": {
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

    isActive: (submenus) => {
        if (!submenus || submenus.length == 0) return false
        return submenus.reduce((x, item) => {
            return appsmith.URL.pathname.includes(item.page.replaceAll('_', '-')) 
                ? true
                : x
        }, false)
    }
}