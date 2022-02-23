/**
 * Highcharts-zh_CN plugins v1.3.1 (2022-02-23)
 *
 * (c) 2022 Jianshu Technology Co.,LTD (https://jianshukeji.com)
 *
 * Author : john@jianshukeji.com, Blue Monkey
 *
 * License: Creative Commons Attribution (CC)
 */

 'use strict';
 (function (factory) {
     if (typeof module === 'object' && module.exports) {
         factory['default'] = factory;
         module.exports = factory;
     } else if (typeof define === 'function' && define.amd) {
         define('highcharts/highcharts-zh_CN', ['highcharts'], function (Highcharts) {
             factory(Highcharts);
             factory.Highcharts = Highcharts;
             return factory;
         });
     } else {
         factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
     }
 }(function (Highcharts) {

    var protocol = window.location.protocol;
    if (!/^http(s)?:$/.test(protocol)) {
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
                annotationHeader: '标注',
                categoryDatetimeHeader: '时间',
                categoryHeader: '类别'
            },
            hideData: '隐藏数据表格',
            invalidDate: '无效的时间',
            loading: '加载中...',
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            navigation: {
                popup: {
                    addButton: "新增",
                    algorithm: '算法',
                    arrowInfinityLine: '直线',
                    arrowRay: "射线",
                    arrowSegment: "线段",
                    average: '均值',
                    background: "背景",
                    backgroundColor: "背景颜色",
                    backgroundColors: "背景颜色",
                    borderColor: "边框颜色",
                    borderRadius: "圆角",
                    borderWidth: "边框大小",
                    bottomBand: '底部带',
                    circle: "圆",
                    clearFilter: '✕ 清除过滤条件',
                    color: "颜色",
                    connector: "连接",
                    crooked3: "Crooked 3 line",
                    crooked5: "Crooked 5 line",
                    crosshairX: "竖直准星线",
                    crosshairY: "水平准星线",
                    decimals: '小数',
                    deviation: '偏差',
                    editButton: "编辑",
                    elliott3: "Elliott 3 line",
                    elliott5: "Elliott 5 line",
                    ellipse: '椭圆',
                    factor: '因子',
                    fastAvgPeriod: '快速平均期',
                    fibonacci: "斐波纳契",
                    fibonacciTimeZones: '斐波纳契时区',
                    fill: "填充颜色",
                    flags: "标志",
                    fontSize: "字体大小",
                    format: "文本",
                    height: "高度",
                    highIndex: '最高值下标',
                    horizontalLine: "水平线",
                    increment: '增量',
                    index: '下标',
                    // TODO: Highstock 技术指标命名统一
                    //indicatorAliases: {}
                    infinityLine: "无限线",
                    initialAccelerationFactor: '初始加速系数',
                    innerBackground: "内背景",
                    label: "文字标签",
                    labelOptions: "文字标签配置",
                    labels: "文字标签",
                    line: "线",
                    lines: "线条",
                    longPeriod: '长周期',
                    lowIndex: '最低值下标',
                    maxAccelerationFactor: '最大加速系数',
                    measure: "Measure",
                    measureX: "Measure X",
                    measureXY: "Measure XY",
                    measureY: "Measure Y",
                    multiplier: '乘法',
                    multiplierATR: 'ATR 乘法',
                    name: "名字",
                    noFilterMatch: '没有匹配项',
                    outerBackground: "外背景",
                    padding: "内间距",
                    parallelChannel: "并行通道",
                    period: '周期',
                    periodATR: 'ATR 周期',
                    periods: '周期',
                    periodSenkouSpanB: '森口跨度B周期',
                    periodTenkan: '天干周期',
                    pitchfork: "杈子",
                    ranges: '范围',
                    ray: "射线",
                    rectangle: "矩形",
                    removeButton: "删除",
                    saveButton: "保存",
                    searchIndicators: '搜索技术指标',
                    segment: "段落",
                    series: "数据列",
                    shapeOptions: "图形配置",
                    shapes: "图形",
                    shortPeriod: '短周期',
                    signalPeriod: '信号周期',
                    simpleShapes: "简单图形",
                    slowAvgPeriod: '慢平均周期',
                    standardDeviation: '标准差',
                    stroke: "线条颜色",
                    strokeWidth: "线条粗细",
                    style: "样式",
                    timeCycles: '时间周期',
                    title: "标题",
                    topBand: '顶带',
                    tunnel: "通道",
                    typeOptions: "详情",
                    verticalArrow: "竖直箭头",
                    verticalCounter: "竖直计数器",
                    verticalLabel: "竖直标签",
                    verticalLine: "竖直线",
                    volume: "成交量",
                    xAxisUnit: 'x 轴单位'
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
            // TODO：Highstock stockTools

            // Highmaps
            zoomIn: '缩小',
            zoomOut: '放大',
        },

        global: {
            // 不使用 UTC时间
            // useUTC: false,
            //timezoneOffset: -8 * 60,
            canvasToolsURL: protocol + '//cdn.hcharts.cn/highcharts/modules/canvas-tools.js',
            VMLRadialGradientURL: protocol + +'//cdn.hcharts.cn/highcharts/gfx/vml-radial-gradient.png'
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
                week: '%Y-%m',
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
 }));