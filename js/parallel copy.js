var parallel = echarts.init(document.querySelector('.parallel'), null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var month_city = []//用于存储平行线图相关数据

var maxDay = 30
var maxvisualmap = 0
var temp = []

var airDataJSON = {}

var schema = [
    { name: 'date', index: 0, text: '日期' },
    { name: 'AQIindex', index: 1, text: 'AQI' },
    { name: 'PM25', index: 2, text: 'PM2.5' },
    { name: 'PM10', index: 3, text: 'PM10' },
    { name: 'CO', index: 4, text: ' CO' },
    { name: 'NO2', index: 5, text: 'NO2' },
    { name: 'SO2', index: 6, text: 'SO2' },
    { name: '等级', index: 7, text: '等级' }
]
var lineStyle = {
    width: 1,
    opacity: 0.5
}
function dataParallel() {

    $.getJSON("./json/四川省2013-2018年空气数据.json", function (data) {//此函数用于从json文件中获取选择的城市下当年当月的每日数据，结果保存在month_city数组中
        month_city = []
        for (var i = 0; i < data.length; i++) {
            temp = []

            if (data[i].year == year && data[i].month == month && data[i].city == city_clicked) {
                temp.push(+data[i]['day'])
                temp.push(+data[i]['AQI'])
                temp.push(+data[i]['PM2.5'])
                temp.push(+data[i]['PM10'])
                temp.push(+data[i]['CO'])
                temp.push(+data[i]['NO2'])
                temp.push(+data[i]['SO2'])
                temp.push(data[i]['quality'])
            }

            if (temp.length > 0) {
                month_city.push(temp)
            }

        }
        maxDay = month_city.length
        for (var i = 0; i < month_city.length; i++) {
            if (month_city[i][1] > maxvisualmap) {
                maxvisualmap = month_city[i][1]
            }
        }
    }).done(function () {
        parallel.setOption({
            legend: {
                show: true,
                bottom: 5,
                data: [city_clicked],
                itemGap: 20,//图例项之间的间距
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            },

            tooltip: {
                padding: 10,
                backgroundColor: 'black',
                borderColor: 'black',
                textStyle: {
                    color: 'white',
                    fontSize: 12
                },
                formatter: function (params) {
                    return params.seriesName + '<br/>' + params.data[7] + '&nbsp&nbsp&nbsp&nbsp' + params.data[1]
                }
            },
            parallelAxis: [
                {
                    // 维度为0
                    dim: 0,
                    // 名称为第一个元素的文本
                    name: schema[0].text,
                    // 逆序为true
                    inverse: true,
                    // 最大值
                    max: maxDay,
                    // 名称位置为'start'
                    nameLocation: 'start',

                },
                {
                    dim: 1,
                    name: schema[1].text,
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },
                {
                    dim: 2,
                    name: schema[2].text,
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },
                {
                    dim: 3,
                    name: schema[3].text,
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },
                {
                    dim: 4,
                    name: schema[4].text,
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },
                {
                    dim: 5,
                    name: schema[5].text,
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },
                {
                    dim: 6,
                    name: schema[6].text,
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },
                {
                    dim: 7,
                    name: schema[7].text,
                    type: 'category',
                    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染'],
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12,
                    },
                },

            ],
            //视觉映射模块
            visualMap: {
                left: '2%',
                bottom: '8%',
                show: true,
                min: 0,
                max: maxvisualmap,//最大值
                dimension: 1,//映射的维度
                inRange: {
                    color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()//颜色
                    // colorAlpha: [0, 1]
                }
            },
            parallel: {
                left: '13%',
                bottom: '10%',
                parallelAxisDefault: {
                    // 坐标轴类型
                    type: 'value',
                    // 坐标轴名称
                    name: 'AQI指数',
                    // 坐标轴名称位置
                    nameLocation: 'end',
                    // 坐标轴名称与刻度线之间的间隔
                    nameGap: 15,
                    // 坐标轴名称的文本样式
                    nameTextStyle: {
                        color: 'black',
                        fontSize: 12
                    },
                    // 坐标轴线的样式
                    axisLine: {
                        lineStyle: {
                            color: '#aaa'
                        }
                    },
                    // 坐标轴刻度的样式
                    axisTick: {
                        lineStyle: {
                            color: '#777'
                        }
                    },
                    // 坐标轴的分割线样式
                    splitLine: {
                        show: false,
                    },
                    // 坐标轴标签的样式
                    axisLabel: {
                        color: 'grey',
                        fontSize: 10
                    }
                }
            },
            series: [
                {
                    name: city_clicked,
                    type: 'parallel',
                    lineStyle: lineStyle,
                    data: month_city
                }
            ]
        })
    })
}
dataParallel()

