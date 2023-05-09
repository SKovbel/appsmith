exportCsv = (fileName, tables) => {
    var conv = function (str) {
        str = str != null ? String(str).replaceAll(',', '') : ''
        return str.replaceAll(String.fromCharCode(163), String.fromCharCode(194, 163))
    }

    let csv = []
    //tables
    for (let table of tables) {
        // header
        let row = []
        let orders = []
        for (let order of table.columnOrder) {
            orders.push(table.primaryColumns[order].originalId)
            for (let head of table.tableHeaders) {
                if (order == head.id) 
                    row.push(conv(head.label))
            }
        }
        csv.push(row.join(','))

        // data
        for (let dataRow of table.tableData) {
            row = []
            for (let order of orders) {
                row.push(conv(dataRow[order]))
            }
            csv.push(row.join(','))
        }
        csv.push(' ')
    }
    download(csv.join("\n"), fileName, 'data:text/csv')
}
