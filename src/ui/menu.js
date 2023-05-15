exports.menu = {
    isActive: (submenus) => {
        if (!submenus || submenus.length == 0) return false
        return submenus.reduce((x, item) => {
            return appsmith.URL.pathname.includes(item.page.replaceAll('_', '-')) 
                ? true
                : x
        }, false)
    }
}