// 创建echarts实例
var PM25_gauge = echarts.init(document.querySelector('.PM25'), null, {
    renderer: 'canvas',
    useDirtyRect: false
})
var PM10_gauge = echarts.init(document.querySelector('.PM10'), null, {
    renderer: 'canvas',
    useDirtyRect: false
})
var SO2_gauge = echarts.init(document.querySelector('.SO2'), null, {
    renderer: 'canvas',
    useDirtyRect: false
})
var NO2_gauge = echarts.init(document.querySelector('.NO2'), null, {
    renderer: 'canvas',
    useDirtyRect: false
})
var CO_gauge = echarts.init(document.querySelector('.CO'), null, {
    renderer: 'canvas',
    useDirtyRect: false
})
var O3_gauge = echarts.init(document.querySelector('.O3'), null, {
    renderer: 'canvas',
    useDirtyRect: false
})

var temptext = document.querySelector(".temp")
var qualitytext = document.querySelector(".quality")
var fengsu = document.querySelector(".fengsu")
var fengxiang = document.querySelector(".fengxiang")
var nengjian = document.querySelector(".nengjian")


var data_PM25 = 0
var data_PM10 = 0
var data_NO2 = 0
var data_CO = 0
var data_O3 = 0
var data_SO2 = 0

var data_temp = 0
var data_quality = 0
var data_fengsu = 0
var data_fengxiang = ''
var data_nengjian = 0
function dataGauge() {

    dataOther()

    // 设置PM2.5的仪表盘选项
    PM25_gauge.setOption({
        series: [
            {
                // 设置图表类型为 gauge（仪表盘）
                type: 'gauge',
                // 设置图表的中心点位置
                center: ['50%', '60%'],
                // 设置起始角度为200
                startAngle: 200,
                // 设置结束角度为-20
                endAngle: -20,
                // 设置最小值为0
                min: 0,
                // 设置最大值为305
                max: 305,
                // 设置刻度数量为12
                splitNumber: 12,
                // 设置刻度的颜色
                itemStyle: {
                    color: colorSet(data_PM25, 305)
                },
                // 设置进度条的显示状态为true
                progress: {
                    show: true,
                    // 设置进度条的宽度
                    width: 12,
                },
                // 设置指针的显示状态为false
                pointer: {
                    show: false
                },
                // 设置轴线的显示状态为true
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 12
                    }
                },
                // 设置刻度的显示状态为false
                axisTick: {
                    show: false,
                },
                // 设置分割线的显示状态为false
                splitLine: {
                    show: false,
                },
                // 设置标签的显示状态为false
                axisLabel: {
                    show: false,
                },
                // 设置锚点的显示状态为false
                anchor: {
                    show: false
                },
                // 设置标题的显示状态为false
                title: {
                    show: true,
                    textStyle: {
                        width: '30%',
                        lineHeight: 15,
                        borderRadius: 8,
                        offsetCenter: [0, '60%'],
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: 'grey'
                    }
                },
                // 设置详情的显示状态为true
                detail: {
                    show: true,
                    width: '30%',
                    lineHeight: 12,
                    borderRadius: 8,
                    offsetCenter: [0, '60%'],
                    fontSize: 15,
                    fontWeight: 'bolder',
                    formatter: '{value} µg/m³',
                    color: 'inherit'
                },
                // 设置数据系列
                data: [
                    {
                        name: "PM2.5",
                        value: data_PM25,
                        axisLine: {            // 坐标轴线  

                        }
                    }
                ]
            },
        ]
    });

    // 设置PM10的仪表盘选项
    PM10_gauge.setOption({
        series: [
            {
                // 设置图表类型为 gauge（仪表盘）
                type: 'gauge',
                // 设置图表的中心点位置
                center: ['50%', '60%'],
                // 设置起始角度为200
                startAngle: 200,
                // 设置结束角度为-20
                endAngle: -20,
                // 设置最小值为0
                min: 0,
                // 设置最大值为525
                max: 525,
                // 设置刻度数量为12
                splitNumber: 12,
                // 设置刻度的颜色
                itemStyle: {
                    color: colorSet(data_PM10, 525)
                },
                // 设置进度条的显示状态为true
                progress: {
                    show: true,
                    // 设置进度条的宽度
                    width: 12,
                },
                // 设置指针的显示状态为false
                pointer: {
                    show: false
                },
                // 设置轴线的显示状态为true
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 12,

                    },
                },
                // 设置刻度的显示状态为false
                axisTick: {
                    show: false,
                },
                // 设置分割线的显示状态为false
                splitLine: {
                    show: false,
                },
                // 设置标签的显示状态为false
                axisLabel: {
                    show: false,
                },
                // 设置锚点的显示状态为false
                anchor: {
                    show: false
                },
                // 设置标题的显示状态为false
                title: {
                    show: true,
                    textStyle: {
                        width: '30%',
                        lineHeight: 15,
                        borderRadius: 8,
                        offsetCenter: [0, '60%'],
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: 'grey'
                    }
                },
                // 设置详情的显示状态为true
                detail: {
                    show: true,
                    width: '30%',
                    lineHeight: 12,
                    borderRadius: 8,
                    offsetCenter: [0, '60%'],
                    fontSize: 15,
                    fontWeight: 'bolder',
                    formatter: '{value} µg/m³',
                    color: 'inherit'
                },
                // 设置数据系列
                data: [
                    {
                        name: "PM10",
                        value: data_PM10
                    }
                ]
            },
        ]
    });

    // 设置SO2的仪表盘选项
    SO2_gauge.setOption({
        series: [
            {

                // 设置图表类型为 gauge（仪表盘）
                type: 'gauge',

                // 设置图表的中心点位置
                center: ['50%', '60%'],

                // 设置起始角度为200
                startAngle: 200,

                // 设置结束角度为-20
                endAngle: -20,

                // 设置最小值为0
                min: 0,

                // 设置最大值为82
                max: 82,

                // 设置刻度数量为12
                splitNumber: 12,

                // 设置刻度的颜色
                itemStyle: {
                    color: colorSet(data_SO2, 82)
                },

                // 设置进度条的显示状态为true
                progress: {
                    show: true,
                    // 设置进度条的宽度
                    width: 12,
                },
                // 设置指针的显示状态为false
                pointer: {
                    show: false
                },
                // 设置轴线的显示状态为true
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 12
                    }
                },
                // 设置刻度的显示状态为false
                axisTick: {
                    show: false,
                },
                // 设置分割线的显示状态为false
                splitLine: {
                    show: false,
                },
                // 设置标签的显示状态为false
                axisLabel: {
                    show: false,
                },
                // 设置锚点的显示状态为false
                anchor: {
                    show: false
                },
                // 设置标题的显示状态为false
                title: {
                    show: true,
                    textStyle: {
                        width: '30%',
                        lineHeight: 15,
                        borderRadius: 8,
                        offsetCenter: [0, '60%'],
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: 'grey'
                    }
                },
                // 设置详情的显示状态为true
                detail: {
                    show: true,
                    width: '30%',
                    lineHeight: 12,
                    borderRadius: 8,
                    offsetCenter: [0, '60%'],
                    fontSize: 15,
                    fontWeight: 'bolder',
                    formatter: '{value} µg/m³',
                    color: 'inherit'
                },
                // 设置数据系列
                data: [
                    {
                        name: "SO2",
                        value: data_SO2
                    }
                ]
            },
        ]
    })



    NO2_gauge.setOption({
        series: [
            {
                type: 'gauge',
                center: ['50%', '60%'],
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 72,
                splitNumber: 12,
                itemStyle: {
                    color: colorSet(data_NO2, 72)
                },
                progress: {
                    show: true,
                    width: 12,
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 12
                    }
                },
                axisTick: {
                    show: false,
                },
                // 设置分割线的显示状态为false
                splitLine: {
                    show: false,
                },
                // 设置标签的显示状态为false
                axisLabel: {
                    show: false,
                },
                // 设置锚点的显示状态为false
                anchor: {
                    show: false
                },
                // 设置标题的显示状态为false
                title: {
                    show: true,
                    textStyle: {
                        width: '30%',
                        lineHeight: 15,
                        borderRadius: 8,
                        offsetCenter: [0, '60%'],
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: 'grey'
                    }
                },
                // 设置详情的显示状态为true
                detail: {
                    show: true,
                    width: '30%',
                    lineHeight: 12,
                    borderRadius: 8,
                    offsetCenter: [0, '60%'],
                    fontSize: 15,
                    fontWeight: 'bolder',
                    formatter: '{value} µg/m³',
                    color: 'inherit'
                },
                data: [
                    {
                        name: "NO2",
                        value: data_NO2
                    }
                ]
            },
        ]
    })

    CO_gauge.setOption({
        series: [
            {
                // 设置图表类型为 gauge（仪表盘）
                type: 'gauge',
                // 设置图表的中心点位置
                center: ['50%', '60%'],
                // 设置起始角度为200
                startAngle: 200,
                // 设置结束角度为-20
                endAngle: -20,
                // 设置最小值为0
                min: 0,
                // 设置最大值为60
                max: 5,
                // 设置刻度数量为12
                splitNumber: 12,
                // 设置刻度的颜色
                itemStyle: {
                    color: colorSet(data_CO, 5)
                },
                // 设置进度条的显示状态为true
                progress: {
                    show: true,
                    // 设置进度条的宽度
                    width: 12,
                },
                // 设置指针的显示状态为false
                pointer: {
                    show: false
                },
                // 设置轴线的显示状态为true
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 12
                    }
                },
                // 设置刻度的显示状态为false
                axisTick: {
                    show: false,
                },
                // 设置分割线的显示状态为false
                splitLine: {
                    show: false,
                },
                // 设置标签的显示状态为false
                axisLabel: {
                    show: false,
                },
                // 设置锚点的显示状态为false
                anchor: {
                    show: false
                },
                // 设置标题的显示状态为false
                title: {
                    show: true,
                    textStyle: {
                        width: '30%',
                        lineHeight: 15,
                        borderRadius: 8,
                        offsetCenter: [0, '60%'],
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: 'grey'
                    }
                },
                // 设置详情的显示状态为true
                detail: {
                    show: true,
                    width: '30%',
                    lineHeight: 12,
                    borderRadius: 8,
                    offsetCenter: [0, '60%'],
                    fontSize: 15,
                    fontWeight: 'bolder',
                    formatter: '{value}  mg/m³',
                    color: 'inherit'
                },
                data: [
                    {
                        name: "CO",
                        value: data_CO
                    }
                ]
            },
        ]
    })

    O3_gauge.setOption({
        series: [
            {
                // 设置图表类型为 gauge（仪表盘）
                type: 'gauge',
                // 设置图表的中心点位置
                center: ['50%', '60%'],
                // 设置起始角度为200
                startAngle: 200,
                // 设置结束角度为-20
                endAngle: -20,
                // 设置最小值为0
                min: 0,
                // 设置最大值为60
                max: 159,
                // 设置刻度数量为12
                splitNumber: 12,
                // 设置刻度的颜色
                itemStyle: {
                    color: colorSet(data_O3, 159)
                },
                // 设置进度条的显示状态为true
                progress: {
                    show: true,
                    // 设置进度条的宽度
                    width: 12,
                },
                // 设置指针的显示状态为false
                pointer: {
                    show: false
                },
                // 设置轴线的显示状态为true
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 12
                    }
                },
                // 设置刻度的显示状态为false
                axisTick: {
                    show: false,
                },
                // 设置分割线的显示状态为false
                splitLine: {
                    show: false,
                },
                // 设置标签的显示状态为false
                axisLabel: {
                    show: false,
                },
                // 设置锚点的显示状态为false
                anchor: {
                    show: false
                },
                // 设置标题的显示状态为false
                title: {
                    show: true,
                    textStyle: {
                        width: '30%',
                        lineHeight: 12,
                        borderRadius: 8,
                        offsetCenter: [0, '60%'],
                        fontSize: 15,
                        fontWeight: 'bolder',
                        color: 'grey'
                    }
                },
                // 设置详情的显示状态为true
                detail: {
                    show: true,
                    width: '30%',
                    lineHeight: 12,
                    borderRadius: 8,
                    offsetCenter: [0, '60%'],
                    fontSize: 15,
                    fontWeight: 'bolder',
                    formatter: '{value} µg/m³',
                    color: 'inherit'
                },
                data: [
                    {
                        name: "O3",
                        value: data_O3
                    }
                ]
            },
        ]
    })
}

dataGauge()


var cityname = document.querySelector('.cityname')
cityname.innerHTML = get_city(city_clicked)

function dataPosition() {
    for (var i = 0; i < airData.length; i++) {
        if (airData[i].city == city_clicked) {
            data_PM25 = airData[i]["PM2.5"]
            data_PM10 = airData[i]["PM10"]
            data_CO = airData[i]["CO"]
            data_NO2 = airData[i]["NO2"]
            data_SO2 = airData[i]["SO2"]
            data_O3 = airData[i]["O3"]
        }
    }
}

function colorSet(value, max) {
    if (value <= max / 4) {
        return 'rgb(123, 198, 0)'
    } else if (value <= max / 2) {
        return 'rgb(255, 208, 0)'
    } else if (value <= max * 3 / 4) {
        return 'rgb(255, 165, 0)'
    }
    else { return 'rgb(255, 81, 0)' }
}

function dataOther() {
    for (var i = 0; i < airData.length; i++) {
        if (airData[i].city == city_clicked) {
            data_temp = Math.round(+airData[i]["TEMP"] - 273.15)
            data_quality = airData[i]["quality"]
            data_fengsu = +airData[i]["风速"]
            data_fengxiang = airData[i]["风向"]
            data_nengjian = +airData[i]["能见度"]
        }
    }
    temptext.innerHTML = data_temp + "℃"
    qualitytext.innerHTML = data_quality
    fengsu.innerHTML = data_fengsu + "m/s"
    fengxiang.innerHTML = data_fengxiang
    nengjian.innerHTML = data_nengjian + "m"


}