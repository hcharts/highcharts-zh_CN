/**
 * Highcharts-zh_CN plugins v1.2.1 (2020-07-29)
 *
 * (c) 2020 Jianshu Technology Co.,LTD (https://jianshukeji.com)
 *
 * Author : john@jianshukeji.com, Blue Monkey
 *
 * License: Creative Commons Attribution (CC)
 */

(function(factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory;
    } else {
        factory(Highcharts);
    }
})(function(Highcharts) {

    var protocol = window.location.protocol;
    if (!/^http(s)?:&/.test(protocol)) {
        protocol = 'http:';
    }

    var defaultOptionsZhCn = {
        lang: {
            // Highcharts
            contextButtonTitle: '图表导出菜单',
            decimalPoint: '.',
            downloadCSV: "下载 CSV 文件",
            downloadJPEG: "下载 JPEG 图片",
            downloadPDF: "下载 PDF 文件",
            downloadPNG: "下载 PNG 文件",
            downloadSVG: "下载 SVG 文件",
            downloadXLS: "下载 XLS 文件",
            drillUpText: "◁ 返回 {series.name}",
            exitFullscreen: '退出全屏',
            exportData: {
                categoryDatetimeHeader: '时间',
                categoryHeader: '类别'
            },
            openInCloud: '在 Highcharts Cloud 中打开',
            invalidDate: '无效的时间',
            loading: '加载中...',
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            navigation: {
                popup: {
                    addButton: "新增",
                    arrowLine: "直线",
                    arrowRay: "射线",
                    arrowSegment: "线段",
                    background: "背景",
                    backgroundColor: "背景颜色",
                    backgroundColors: "背景颜色",
                    borderColor: "边框颜色",
                    borderRadius: "圆角",
                    borderWidth: "边框大小",
                    circle: "圆",
                    color: "颜色",
                    connector: "连接",
                    crooked3: "Crooked 3 line",
                    crooked5: "Crooked 5 line",
                    crosshairX: "竖直准星线",
                    crosshairY: "水平准星线",
                    editButton: "编辑",
                    elliott3: "Elliott 3 line",
                    elliott5: "Elliott 5 line",
                    fibonacci: "斐波纳契",
                    fill: "填充颜色",
                    flags: "标志",
                    fontSize: "字体大小",
                    format: "文本",
                    height: "高度",
                    horizontalLine: "水平线",
                    infinityLine: "无限线",
                    innerBackground: "内背景",
                    label: "文字标签",
                    labelOptions: "文字标签配置",
                    labels: "文字标签",
                    line: "线",
                    lines: "线条",
                    measure: "Measure",
                    measureX: "Measure X",
                    measureXY: "Measure XY",
                    measureY: "Measure Y",
                    name: "名字",
                    outerBackground: "外背景",
                    padding: "内间距",
                    parallelChannel: "并行通道",
                    pitchfork: "杈子",
                    ray: "射线",
                    rectangle: "矩形",
                    removeButton: "删除",
                    saveButton: "保存",
                    segment: "段落",
                    series: "数据列",
                    shapeOptions: "图形配置",
                    shapes: "图形",
                    simpleShapes: "简单图形",
                    stroke: "线条颜色",
                    strokeWidth: "线条粗细",
                    style: "样式",
                    title: "标题",
                    tunnel: "通道",
                    typeOptions: "详情",
                    verticalArrow: "竖直箭头",
                    verticalCounter: "竖直计数器",
                    verticalLabel: "竖直标签",
                    verticalLine: "竖直线",
                    volume: "成交量"
                }
            },
            noData: "暂无数据",
            numericSymbols: null,
            printChart: "打印图表",
            resetZoom: '重置缩放比例',
            resetZoomTitle: '重置为原始大小',
            shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            thousandsSep: ',',
            viewData: '查看数据表格',
            viewFullscreen: '全屏查看',
            weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            viewData: '查看数据表格',
            // Highstock
            rangeSelectorFrom: '开始时间',
            rangeSelectorTo: '结束时间',
            rangeSelectorZoom: '范围',

            // Highmaps
            zoomIn: '缩小',
            zoomOut: '放大',
        },

        global: {
            // 不使用 UTC时间
            // useUTC: false,
            //timezoneOffset: -8 * 60,
            canvasToolsURL: protocol + '//cdn.hcharts.cn/highcharts/modules/canvas-tools.js',
            VMLRadialGradientURL: protocol + '//cdn.hcharts.cn/highcharts/gfx/vml-radial-gradient.png'
        },

        title: {
            text: '图表标题'
        },

        tooltip: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                week: '%Y-%m-%d',
                month: '%Y-%m',
                year: '%Y'
            },
            split: false
        },

        exporting: {
            url: protocol + '//export.highcharts.com.cn'
        },

        credits: {
            text: 'Highcharts.com.cn',
            href: 'https://www.highcharts.com.cn'
        },

        xAxis: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y-%m-%d',
                // 增加显示第几周
                week: {
                    list: ["第%W周", "%W周"],
                },
                month: '%Y-%m',
                year: '%Y'
            }
        },

        /**
         * Highstock
         */


        rangeSelector: {
            inputDateFormat: '%Y-%m-%d',
            // buttonTheme: {
            //     width: 'auto',
            //     style: {
            //         fontSize: '12px',
            //         padding: '4px'
            //     }
            // },
            buttons: [{
                type: 'month',
                count: 1,
                text: '月'
            }, {
                type: 'month',
                count: 3,
                text: '季度'
            }, {
                type: 'month',
                count: 6,
                text: '半年'
            }, {
                type: 'ytd',
                text: 'YTD'
            }, {
                type: 'year',
                count: 1,
                text: '年'
            }, {
                type: 'all',
                text: '所有'
            }]
        },

        plotOptions: {
            series: {
                dataGrouping: {
                    dateTimeLabelFormats: {
                        millisecond: ['%Y-%m-%d %H:%M:%S.%L', '%Y-%m-%d %H:%M:%S.%L', ' ~ %H:%M:%S.%L'],
                        second: ['%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M:%S', ' ~ %H:%M:%S'],
                        minute: ['%Y-%m-%d %H:%M', '%Y-%m-%d %H:%M', ' ~ %H:%M'],
                        hour: ['%Y-%m-%d %H:%M', '%Y-%m-%d %H:%M', ' ~ %H:%M'],
                        day: ['%Y-%m-%d', '%Y-%m-%d', ' ~ %Y-%m-%d'],
                        week: ['%Y-%m-%d', '%Y-%m-%d', ' ~ %Y-%m-%d'],
                        month: ['%Y-%m', '%Y-%m', ' ~ %Y-%m'],
                        year: ['%Y', '%Y', ' ~ %Y']
                    }
                }
            },
            ohlc: {
                tooltip: {
                    split: false,
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
                        '开盘：{point.open}<br/>' +
                        '最高：{point.high}<br/>' +
                        '最低：{point.low}<br/>' +
                        '收盘：{point.close}<br/>'
                }
            },
            candlestick: {
                tooltip: {
                    split: false,
                    pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' +
                        '开盘：{point.open}<br/>' +
                        '最高：{point.high}<br/>' +
                        '最低：{point.low}<br/>' +
                        '收盘：{point.close}<br/>'
                }
            }
        }
    };

    Highcharts.setOptions(defaultOptionsZhCn);
});