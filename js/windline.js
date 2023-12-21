var data_watch = []

let data_wind = []

// 返回x轴的坐标
function getX(data) {
    var x = []
    for (var i = 0; i < data_watch.length; i++) {
        x.push(i)
    }
    return x
}


function datawind() {
    $.getJSON("./json/四川省2013-2018年空气数据.json", function (data) {
        data_watch = []
        data_wind = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].year == year && data[i].month == month && data[i].city == city_clicked) {
                data_watch.push(+data[i].能见度)
                data_wind.push({ value: +data[i].风速, symbolRotate: +data[i].风向角度, symbolRotateStr: data[i].风向 })
            }
        }
    }).done(function () {
        parallel.clear()
        parallel.setOption({
            grid: {
                left: '10%',
                top: '24%',
                bottom: '10%'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return 'day ' + (Number(params[0].name) + 1) + '<br>' + '能见度' + '：' + params[0].value + ' m' + '<br>' + '风速' + '：'
                        + params[1].value + 'm/s' + '<br>' + '风向' + '：' + params[1].data.symbolRotateStr
                }

            },
            xAxis: {
                name: '日期',
                type: 'category',
                boundaryGap: false,
                data: getX(),
            },
            yAxis: [{
                name: '能见度(米)',
                type: 'value',
                axisLine: {
                    show: true
                },
                position: 'right'
            }, {
                name: '风速(米/秒)',
                type: 'value',
                axisLine: {
                    show: true
                },
                position: 'left'
            }],


            legend: {
                show: true,
                top: 10,
                data: ['能见度(米)', '风速(米/秒)'],
                itemGap: 20,//图例项之间的间距
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            },


            series: [
                {
                    data: data_watch,
                    type: 'line',
                    areaStyle: {},
                    itemStyle: {
                        normal: {
                            color: 'rgb(204, 204, 204)',
                            lineStyle: {
                                color: 'rgb(100, 190, 255)'
                            }
                        }
                    },
                    yAxisIndex: 0
                },
                {
                    data: data_wind,
                    type: 'line',
                    smooth: true,
                    symbol: "arrow",
                    // symbol: "image://" + require("../../../assets/img/weather/wind.png"),
                    symbolSize: 15,
                    //折线样式
                    lineStyle: {
                        color: 'rgb(255, 203, 118)',
                        width: 2,
                    },
                    // symbol样式
                    itemStyle: {
                        borderWidth: 0.5,
                        borderColor: 'rgb(250, 186, 82)',
                        color: 'rgb(250, 186, 82)'
                    },
                    yAxisIndex: 1
                }
            ],

            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgb(215, 228, 255)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgb(221, 221, 221)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        })
    })
}



