// 获取年份选择框元素
var yearSelect = document.querySelector('#year')
// 获取月份选择框元素
var monthSelect = document.querySelector('#month')
// 获取日期选择框元素
var daySelect = document.querySelector('#day')

// 获取年份选择框的值
var year = yearSelect.value
// 获取月份选择框的值
var month = monthSelect.value
// 初始化日期为1
var day = 1


// 循环生成日期选项
for (var i = 1; i <= new Date(year, month, 0).getDate(); i++) {
    // 创建选项元素
    var option = document.createElement('option')
    // 设置选项的值
    option.value = i
    // 设置选项的显示内容
    option.innerHTML = i
    // 将选项添加到日期选择框中
    daySelect.appendChild(option)
}

// 年份选择框的change事件处理函数
yearSelect.onchange = function () {
    // 更新年份
    year = yearSelect.value
    // 清空日期选择框的内容
    daySelect.innerHTML = ''
    // 重新生成日期选项
    for (var i = 1; i <= new Date(year, month, 0).getDate(); i++) {
        // 创建选项元素
        var option = document.createElement('option')
        // 设置选项的值
        option.value = i
        // 设置选项的显示内容
        option.innerHTML = i
        // 将选项添加到日期选择框中
        daySelect.appendChild(option)
    }
    // 调用dataMap函数,更新地图
    dataMap()

    // 调用dataGauge函数，更新仪表盘
    dataGauge()

    element_select_change()

    dataRank()//刷新排名
}

// 月份选择框的change事件处理函数
monthSelect.onchange = function () {
    // 更新月份
    month = monthSelect.value
    // 清空日期选择框的内容
    daySelect.innerHTML = ''
    // 重新生成日期选项
    for (var i = 1; i <= new Date(year, month, 0).getDate(); i++) {
        // 创建选项元素
        var option = document.createElement('option')
        // 设置选项的值
        option.value = i
        // 设置选项的显示内容
        option.innerHTML = i
        // 将选项添加到日期选择框中
        daySelect.appendChild(option)
    }
    // 调用dataMap函数，更新地图
    dataMap()

    // 调用dataGauge函数，更细仪表盘
    dataGauge()

    element_select_change()

    dataRank()//刷新排名
}

// 日期选择框的change事件处理函数
daySelect.onchange = function () {
    // 更新日期
    day = daySelect.value
    // 调用dataMap函数，更新地图
    dataMap()

    // 调用dataGauge函数，更新仪表盘
    dataGauge()

    dataRank()//刷新排名
}