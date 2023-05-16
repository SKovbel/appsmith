exports.dict = {
    "channels": {
        "uk": "UK",
        "eu": "EU",
        "us": "US",
        "sq": "Offline retail"
    },

    "days": [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],

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
    },


    "page": {
        "sales_sale-overview": "Sales overview",
        "sales_daily-sales-summary": "Daily sales summary",
        "sales_ecommerce-weekly": "Ecommerce weekly",
        "sales_offline-retail-weekly": "Offline retail weekly",
        "sales_annual-sales-summary": "Annual sales summary",
        "sales_best-sellers": "Best sellers",
        "finance_finance-overview": "Finance overview",
        "finance_sales-summary": "Sale summary",
        "finance_poduct-details": "Product detail",
        "finance_sales-by-payment": "Sales by payment",
        "finance_sales-by-country": "Sales by country",
        "finance_shipping": "Shipping",
        "finance_annual-summary": "Annual summary",
        "finance_coupon": "Coupon details"
    },

    getChannelsAll: () => {
        return [
            {"value": "uk", "label": "UK"},
            {"value": "eu", "label": "EU"},
            {"value": "us", "label": "US"},
            {"value": "aq", "label": "Offline retail"}
        ]
    },

    getChannelsOnline: () => {
        return [
            {"value": "uk", "label": "UK"},
            {"value": "eu", "label": "EU"},
            {"value": "us", "label": "US"}
        ]
    }
};
