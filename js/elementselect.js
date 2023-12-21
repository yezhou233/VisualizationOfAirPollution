var element_select = document.getElementById("element_select")

function element_select_change() {
    if (city_clicked != '未选城市') {
        if (element_select.value == "pollution") {
            dataParallel()
        }
        if (element_select.value == "wind") {
            datawind()
        }
    }

}

element_select.onchange = function () {
    if (element_select.value == "pollution") {
        dataParallel()
    }
    if (element_select.value == "wind") {
        datawind()
    }
} 