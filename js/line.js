var line = echarts.init(document.querySelector('.line'), null, {
    renderer: 'canvas',
    useDirtyRect: false
});

var data_aqi = []//存放AQI平均值
var data_lvhuasquare = []//存放绿化面积
var data_lvhuapercentage = []//存放绿化覆盖率
var data_renkou = []//存放人口
var data_renkoudensity = []//存放人口密度
var data_feiqi = []//存放废气
var data_qiwen = []//存放气温
var data_jiangshui = []//存放降水量

//人口相关option
var option_renkou = {
    grid: {
        left: '13%',
        top: '24%',
        bottom: '10%'
    },
    tooltip: {
        //触发提示框的条件
        trigger: 'axis',
        axisPointer: {
            //坐标轴指示器类型
            type: 'cross'
        },

    },
    legend: {
        //图例数据，表示图表中系列的标签
        data: ['人口密度(人/平方公里)', '人口(万人)', 'AQI年平均值'],
        right: '5%',
        top: '5%'
    },
    xAxis: {
        //X轴类型，表示坐标轴刻度的类型
        type: 'category',
        //X轴数据，表示X轴的标签数据
        data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: [
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: '人口密度(人/平方公里)',
            //是否显示
            show: true,
            //间隔
            interval: 100,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },

        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            offset: 40,
            name: '人口(万人)',
            nameLocation: 'start',
            //是否显示
            show: true,
            //间隔
            interval: 200,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: 'AQI年平均值',
            //是否显示
            show: true,
            //间隔
            interval: 5,
            //Y轴位置
            position: 'right',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
            axisLineLabel: {
                //是否显示轴线上的文字
                show: true,
                //文字颜色
                color: 'black',
                //文字大小
                fontSize: 12,
            },
        }
    ],
    series: [
        {
            //系列名称
            name: '人口密度(人/平方公里)',
            //图表类型
            type: 'line',
            //平滑曲线
            smooth: true,
            //数据
            data: data_renkoudensity,
            color: 'rgb(110, 157, 181)'
        }, {
            //系列名称
            name: '人口(万人)',
            //图表类型
            type: 'bar',
            //条形图的宽度
            barWidth: '50%',
            // 设置y轴的索引
            yAxisIndex: 1,
            //数据
            data: data_renkou,
            color: 'rgba(215,215,215,0.5)'
        }, {
            //系列名称
            name: 'AQI年平均值',
            //图表类型
            type: 'line',
            smooth: true,
            //数据
            yAxisIndex: 2,
            data: data_aqi,
            color: 'rgba(117, 110, 181)'
        },
    ],

}


//绿化相关option
var option_lvhua = {
    grid: {
        left: '13%',
        top: '24%',
        bottom: '10%'
    },
    tooltip: {
        //触发提示框的条件
        trigger: 'axis',
        axisPointer: {
            //坐标轴指示器类型
            type: 'cross'
        },

    },
    legend: {
        //图例数据，表示图表中系列的标签
        data: ['绿化覆盖率(%)', '绿化覆盖面积(公顷)', 'AQI年平均值'],
        right: '5%',
        top: '5%'

    },
    xAxis: {
        //X轴类型，表示坐标轴刻度的类型
        type: 'category',
        //X轴数据，表示X轴的标签数据
        data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: [
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: '绿化覆盖率(%)',
            //是否显示
            show: true,
            //间隔
            interval: 5,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },

        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            offset: 40,
            name: '绿化覆盖面积(公顷)',
            nameLocation: 'start',
            //是否显示
            show: true,
            //间隔
            interval: 2000,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: 'AQI年平均值',
            //是否显示
            show: true,
            //间隔
            interval: 5,
            //Y轴位置
            position: 'right',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
            axisLineLabel: {
                //是否显示轴线上的文字
                show: true,
                //文字颜色
                color: 'black',
                //文字大小
                fontSize: 12,
            },
        }
    ],
    series: [
        {
            //系列名称
            name: '绿化覆盖率(%)',
            //图表类型
            type: 'line',
            //平滑曲线
            smooth: true,
            //数据
            data: data_lvhuapercentage,
            color: 'rgb(110, 157, 181)'
        }, {
            //系列名称
            name: '绿化覆盖面积(公顷)',
            //图表类型
            type: 'bar',
            //条形图的宽度
            barWidth: '40%',
            // 设置y轴的索引
            yAxisIndex: 1,
            //数据
            data: data_lvhuasquare,
            color: 'rgba(145, 188, 145,0.5)'
        }, {
            //系列名称
            name: 'AQI年平均值',
            //图表类型
            type: 'line',
            smooth: true,
            //数据
            yAxisIndex: 2,
            data: data_aqi,
            color: 'rgba(117, 110, 181)',

        },
    ],

}

//废气option
var option_feiqi = {
    grid: {
        left: '13%',
        top: '24%',
        bottom: '10%'
    },
    tooltip: {
        //触发提示框的条件
        trigger: 'axis',
        axisPointer: {
            //坐标轴指示器类型
            type: 'cross'
        },

    },
    legend: {
        //图例数据，表示图表中系列的标签
        data: ['工业废气排放(亿/立方米)', 'AQI年平均值'],
        right: '5%',
        top: '5%'

    },
    xAxis: {
        //X轴类型，表示坐标轴刻度的类型
        type: 'category',
        //X轴数据，表示X轴的标签数据
        data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: [
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: '工业废气排放(亿/立方米)',
            //是否显示
            show: true,
            //间隔
            interval: 200,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },

        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: 'AQI年平均值',
            //是否显示
            show: true,
            //间隔
            interval: 5,
            //Y轴位置
            position: 'right',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
            axisLineLabel: {
                //是否显示轴线上的文字
                show: true,
                //文字颜色
                color: 'black',
                //文字大小
                fontSize: 12,
            },
        }
    ],
    series: [
        {
            //系列名称
            name: '工业废气排放(亿/立方米)',
            //图表类型
            type: 'line',
            //平滑曲线
            smooth: true,
            yAxisIndex: 0,
            //数据
            data: data_feiqi,
            color: 'rgb(216, 225, 109)'
        }, {
            //系列名称
            name: 'AQI年平均值',
            //图表类型
            type: 'line',
            smooth: true,
            //数据
            yAxisIndex: 1,
            data: data_aqi,
            color: 'rgba(117, 110, 181)',

        },
    ],

}
//气温option
var option_qiwen = {
    grid: {
        left: '13%',
        top: '24%',
        bottom: '10%'
    },
    tooltip: {
        //触发提示框的条件
        trigger: 'axis',
        axisPointer: {
            //坐标轴指示器类型
            type: 'cross'
        },

    },
    legend: {
        //图例数据，表示图表中系列的标签
        data: ['平均气温(摄氏度)', 'AQI年平均值'],
        right: '5%',
        top: '5%'

    },
    xAxis: {
        //X轴类型，表示坐标轴刻度的类型
        type: 'category',
        //X轴数据，表示X轴的标签数据
        data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: [
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: '平均气温(摄氏度)',
            //是否显示
            show: true,
            //间隔
            interval: 2,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },

        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: 'AQI年平均值',
            //是否显示
            show: true,
            //间隔
            interval: 5,
            //Y轴位置
            position: 'right',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
            axisLineLabel: {
                //是否显示轴线上的文字
                show: true,
                //文字颜色
                color: 'black',
                //文字大小
                fontSize: 12,
            },
        }
    ],
    series: [
        {
            //系列名称
            name: '平均气温(摄氏度)',
            //图表类型
            type: 'line',
            //平滑曲线
            smooth: true,
            yAxisIndex: 0,
            //数据
            data: data_qiwen,
            color: 'rgb(228, 137, 52)'
        }, {
            //系列名称
            name: 'AQI年平均值',
            //图表类型
            type: 'line',
            smooth: true,
            //数据
            yAxisIndex: 1,
            data: data_aqi,
            color: 'rgba(117, 110, 181)',

        },
    ],

}

//降水option
var option_jiangshui = {
    grid: {
        left: '13%',
        top: '24%',
        bottom: '10%'
    },
    tooltip: {
        //触发提示框的条件
        trigger: 'axis',
        axisPointer: {
            //坐标轴指示器类型
            type: 'cross'
        },

    },
    legend: {
        //图例数据，表示图表中系列的标签
        data: ['降水量(毫米)', 'AQI年平均值'],
        right: '5%',
        top: '5%'

    },
    xAxis: {
        //X轴类型，表示坐标轴刻度的类型
        type: 'category',
        //X轴数据，表示X轴的标签数据
        data: ['2013', '2014', '2015', '2016', '2017', '2018']
    },
    yAxis: [
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: '降水量(毫米)',
            //是否显示
            show: true,
            //间隔
            interval: 2,
            //Y轴位置
            position: 'left',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },

        },
        {
            //Y轴类型，表示坐标轴刻度的类型
            type: 'value',
            //Y轴名称，表示Y轴的名称
            name: 'AQI年平均值',
            //是否显示
            show: true,
            //间隔
            interval: 5,
            //Y轴位置
            position: 'right',
            axisLine: {
                //是否显示轴线
                show: true,
                lineStyle: {
                    //轴线颜色
                    color: 'grey'
                }
            },
            axisLineLabel: {
                //是否显示轴线上的文字
                show: true,
                //文字颜色
                color: 'black',
                //文字大小
                fontSize: 12,
            },
        }
    ],
    series: [
        {
            //系列名称
            name: '降水量(毫米)',
            //图表类型
            type: 'line',
            //平滑曲线
            smooth: true,
            yAxisIndex: 0,
            //数据
            data: data_jiangshui,
            color: 'rgb(52, 146, 228)'
        }, {
            //系列名称
            name: 'AQI年平均值',
            //图表类型
            type: 'line',
            smooth: true,
            //数据
            yAxisIndex: 1,
            data: data_aqi,
            color: 'rgba(117, 110, 181)',

        },
    ],

}
//选择人口选项调用此函数
function select_renkou() {
    $.getJSON("./json/AQI平均值.json", function (data) {
        data_aqi = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_aqi.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_renkou.series[2].data = data_aqi
        line.clear()
        line.setOption(option_renkou)
    })

    $.getJSON("./json/人口密度.json", function (data) {
        data_renkoudensity = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_renkoudensity.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_renkou.series[0].data = data_renkoudensity
        line.clear()
        line.setOption(option_renkou)
    })

    $.getJSON("./json/人口.json", function (data) {
        data_renkou = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_renkou.push(+data[i][j])
                }

            }
        }
    }).done(function () {
        option_renkou.series[1].data = data_renkou
        line.clear()
        line.setOption(option_renkou)
    })

}

//选择绿化选项调用此函数
function select_lvhua() {
    $.getJSON("./json/AQI平均值.json", function (data) {
        data_aqi = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_aqi.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_lvhua.series[2].data = data_aqi
        line.clear()
        line.setOption(option_lvhua)
    })

    $.getJSON("./json/建成区绿化覆盖率.json", function (data) {
        data_lvhuapercentage = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_lvhuapercentage.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_lvhua.series[0].data = data_lvhuapercentage
        line.clear()
        line.setOption(option_lvhua)
    })

    $.getJSON("./json/城市绿化覆盖面积.json", function (data) {
        data_lvhuasquare = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_lvhuasquare.push(+data[i][j])
                }

            }
        }
    }).done(function () {
        option_lvhua.series[1].data = data_lvhuasquare
        line.clear()
        line.setOption(option_lvhua)
    })

}

//选择废气选项调用此函数
function select_feiqi() {
    $.getJSON("./json/AQI平均值.json", function (data) {
        data_aqi = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_aqi.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_feiqi.series[1].data = data_aqi
        line.clear()
        line.setOption(option_feiqi)
    })

    $.getJSON("./json/工业废气排放.json", function (data) {
        data_feiqi = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_feiqi.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_feiqi.series[0].data = data_feiqi
        line.clear()
        line.setOption(option_feiqi)
    })

}

//选择气温选项调用此函数
function select_qiwen() {
    $.getJSON("./json/AQI平均值.json", function (data) {
        data_aqi = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_aqi.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_qiwen.series[1].data = data_aqi
        line.clear()
        line.setOption(option_qiwen)
    })

    $.getJSON("./json/平均气温.json", function (data) {
        data_qiwen = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_qiwen.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_qiwen.series[0].data = data_qiwen
        line.clear()
        line.setOption(option_qiwen)
    })

}

//选择降水选项调用此函数
function select_jiangshui() {
    $.getJSON("./json/AQI平均值.json", function (data) {
        data_aqi = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_aqi.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_jiangshui.series[1].data = data_aqi
        line.clear()
        line.setOption(option_jiangshui)
    })

    $.getJSON("./json/平均气温.json", function (data) {
        data_jiangshui = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].city == city_clicked) {
                for (var j = 2013; j <= 2018; j++) {
                    j = j.toString()
                    data_jiangshui.push(+data[i][j])
                }
            }
        }
    }).done(function () {
        option_jiangshui.series[0].data = data_jiangshui
        line.clear()
        line.setOption(option_jiangshui)
    })

}

var optionSelect = document.getElementById("option_select")

//此函数用于刷新曲线图
function dataLine() {
    if (option_select.value == 'renkou') {
        select_renkou()
    }
    if (option_select.value == 'paifang') {
        select_feiqi()
    }
    if (option_select.value == 'qiwen') {
        select_qiwen()
    }
    if (option_select.value == 'jiangshui') {
        select_jiangshui()
    }
    if (option_select.value == 'lvhua') {
        select_lvhua()
    }
}
optionSelect.onchange = function () { dataLine() }


dataLine()
