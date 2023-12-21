//被点击的城市
let city_clicked = "未选城市"

// 创建一个空数组airData
var airData = []

// 初始化echarts图表，绑定到选择的类名为'sichuan'的元素上
var sichuan_map = echarts.init(document.querySelector('.sichuan'))

function dataMap() {


    // 发送GET请求，从指定的URL加载json数据
    var airDataJSON = $.getJSON("./json/四川省2013-2018年空气数据.json", function (data) {
        airData = []
        // 遍历数据并添加到airData数组中
        for (var i = 0; i < data.length; i++) {
            if (data[i].year == year && data[i].month == month && data[i].day == day) {
                airData.push(data[i])
            }
        }
        for (var i = 0; i < airData.length; i++) {
            airData[i].name = airData[i].city
            airData[i].value = airData[i].AQI
        }
        dataPosition() //此函数用于从airData数组中获取当天数据显示在仪表盘上
    }).done(function () {


        $.get('./json/四川省.json', function (ret) {
            echarts.registerMap('sichuanMap', ret)

            // 指定图表的配置项和数据
            var sichuan_map_option = {

                /**
                 * 地图属性配置
                 */
                geo: {
                    type: 'map',  // 地图类型
                    map: 'sichuanMap', // 地图名称
                    left: '33%',
                    center: [104.065735, 30.659462],  // 地图中心点坐标
                    label: {// 地图标签 地名
                        normal: {//正常时
                            show: true,  // 是否显示标签
                            textStyle: {
                                color: "black",  // 标签文本颜色
                                // fontSize: "10",
                            },
                        },
                        emphasis: {//鼠标悬停时
                            show: true,  // 是否显示标签
                            textStyle: {
                                color: "black",  // 标签文本颜色
                            },
                        },
                    },

                    //可拖动
                    // roam: true,

                    // 地图区域的多边形 图形样式
                    itemStyle: {
                        emphasis: {// 鼠标移入时
                            borderColor: 'black',// 地图边界颜色
                            borderWidth: 1,// 地图边界宽度
                            areaColor: 'aliceblue',// 地图填充颜色
                        }
                    },
                },


                /**
                 * 提示框属性配置
                 */
                tooltip: {
                    show: true, // 是否显示
                    trigger: "item", // 触发类型
                    alwaysShowContent: false, // 是否总是显示内容
                    backgroundColor: "black", // 背景颜色
                    borderRadius: 10,
                    hideDelay: 10, // 隐藏延迟时间
                    triggerOn: "mousemove", // 触发方式
                    enterable: true, // 是否可以交互
                    textStyle: {
                        color: "white", // 文本颜色
                        fontSize: "12", // 文本大小
                        width: 20, // 文本宽度
                        height: 30, // 文本高度
                        overflow: "break", // 文本溢出方式
                    },
                    showDelay: 0, // 显示延迟时间

                    formatter: function (params) {
                        return params.data.city + " <br>" + "AQI：" + params.data.AQI + " <br>" + "空气质量：" + params.data.quality
                    }, // 格式化
                },



                /**
                 * 视觉映射组件
                 */
                visualMap: {
                    min: 0,  // 最小值
                    max: 300,  // 最大值
                    text: ['严重污染', '优'],  // 文本标签
                    x: '50',  // 指标在图表中的 x 坐标位置
                    y: 'bottom',  // 指标在图表中的 y 坐标位置
                    realtime: true,  // 是否实时更新
                    calculable: true,  // 是否可计算
                    inRange: {  // 范围内颜色配置
                        color: ['rgb(252, 252, 252)', 'rgb(255, 219, 60)']
                        // color: ['RGB(0, 128, 0)', 'RGB(255, 255, 0)', 'RGB(255, 165, 0)', 'RGB(255, 0, 0)']  // 颜色列表
                    },

                },


                /**
                 * 工具箱组件
                 */
                toolbox: {
                    show: true,//是否显示工具栏                   
                    orient: 'horizontal',//工具栏的布局方式                
                    x: '90%',//工具栏的位置
                    y: '2%',
                    borderColor: '#FFF',//边框颜色                    
                    borderWidth: 0,//边框宽度                   
                    padding: 5,//内边距
                    showTitle: true,//是否显示工具栏标题
                    feature: {//工具栏功能
                        saveAsImage: {//保存图片
                            show: true,//是否显示保存图片按钮
                            title: '保存为图片',//保存图片按钮的标题
                            type: 'jpg',//保存图片的格式
                        },
                        restore: { show: true },//恢复图片
                    }
                },

                /*
                *数据配置
                */
                series: [{
                    // 指定图例项的索引
                    geoIndex: 0,
                    // 指定数据
                    data: airData,
                    // 指定图表类型
                    type: 'map',
                    // 指定地图类型
                    mapType: 'sichuanMap',
                    // 指定图表名称
                    name: '污染',


                }]


            }

            sichuan_map.setOption(sichuan_map_option)

            sichuan_map.on('click', function (params) {
                city_clicked = params.data.city
                cityname.innerHTML = "<p>" + get_city(city_clicked) + "</p>"
                dataPosition()//更新仪表盘数据
                dataGauge()//刷新仪表盘
                element_select_change()
                dataLine()//刷新折线图
            });
        })
    })

}
window.addEventListener('resize', sichuan_map.resize);
dataMap()

function get_city(city_clicked) {
    if (city_clicked == "甘孜藏族自治州") {
        return "甘孜州"
    } else if (city_clicked == "阿坝藏族羌族自治州") {
        return "阿坝州"
    } else if (city_clicked == "凉山彝族自治州") {
        return "凉山州"
    } else {
        return city_clicked
    }
}