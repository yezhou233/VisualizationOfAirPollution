var rank = echarts.init(document.querySelector('.rank'), null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var citys = ["成都市",
    "自贡市",
    "攀枝花市",
    "泸州市",
    "德阳市",
    "绵阳市",
    "广元市",
    "遂宁市",
    "内江市",
    "乐山市",
    "南充市",
    "眉山市",
    "宜宾市",
    "广安市",
    "达州市",
    "雅安市",
    "巴中市",
    "资阳市",
    "阿坝藏族羌族自治州",
    "甘孜藏族自治州",
    "凉山彝族自治州"]

var data_pollutant = []
//series数据

var pollutant = ['PM2.5', 'PM10', 'CO', 'NO2', 'O3', 'SO2']


function dataRank() {
    $.getJSON("./json/四川省2013-2018年空气数据.json", function (data) {
        data_pollutant = []

        var temp_pollutant = []
        var temp_pollutant1 = []//临时存放数据

        for (var i = 0; i < data.length; i++) {
            if (data[i].year == year && data[i].month == month && data[i].day == day) {
                temp_pollutant.push(data[i])
            }
        }


        for (var j = 0; j < pollutant.length; j++) {
            temp_pollutant1 = []
            for (var k = 0; k < citys.length; k++) {
                for (var i = 0; i < temp_pollutant.length; i++) {
                    if (temp_pollutant[i].city == citys[k]) {
                        temp_pollutant1.push(+temp_pollutant[i][pollutant[j]])
                    }
                }
            }
            data_pollutant.push(temp_pollutant1)
        }

    }).done(function () {
        rank.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 15,
                textStyle: {
                    color: 'black',
                    fontSize: 11
                }
            },
            grid: {
                left: '4.3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: citys,
                    axisLabel: {
                        interval: 1,
                        rotate: 30,
                        margin: 10,
                        fontSize: 10

                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    interval: 30,
                    axisLine: {
                        color: "rgb(215,215,215)",
                        show: true

                    },
                    axisLabel: {
                        show: true,
                        fontSize: 10

                    }
                },

            ],
            series: [
                {
                    name: pollutant[0],
                    type: 'bar',
                    stack: 'AD',
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    },
                    data: data_pollutant[0]
                },
                {
                    name: pollutant[1],
                    type: 'bar',
                    stack: 'AD',
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    },
                    data: data_pollutant[1]
                },
                {
                    name: pollutant[2],
                    type: 'bar',
                    stack: 'AD',
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    },
                    data: data_pollutant[2]
                },
                {
                    name: pollutant[3],
                    type: 'bar',
                    stack: 'AD',
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    },
                    data: data_pollutant[3]
                },
                {
                    name: pollutant[4],
                    type: 'bar',
                    stack: 'AD',
                    data: data_pollutant[4],
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    }
                },
                {
                    name: pollutant[5],
                    type: 'bar',
                    barWidth: 5,
                    stack: 'AD',
                    emphasis: {
                        focus: 'series'
                    },
                    data: data_pollutant[5],
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    }
                },

            ]
        })
    })
}

dataRank()
