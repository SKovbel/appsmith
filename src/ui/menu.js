exports.menu = {
    isActive: (submenus) => {
        return submenus.reduce((x, item) => {
            return appsmith.URL.pathname.includes(item.page.replaceAll('_', '-')) 
                ? true
                : x
        }, false)
    }
}