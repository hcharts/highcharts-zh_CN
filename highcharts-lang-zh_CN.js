/**
 * Highcharts-zh_CN plugins v1.0.0 (2017-02-22)
 *
 * (c) 2017 Jianshu Technology CO.,LTD (https://jianshukeji.com)
 *
 * Author : John@jianshukeji.com, Blue Monkey
 *
 * License: Creative Commons Attribution (CC)
 */

var protocol = window.location.protocol;

Highcharts.setOptions({
    lang: {
        // Highcharts
        contextButtonTitle: '图表导出菜单',
        decimalPoint: '.',
        downloadJPEG: "下载JPEG图片",
        downloadPDF: "下载PDF文件",
        downloadPNG: "下载PNG文件",
        downloadSVG: "下载SVG文件",
        drillUpText: "返回 {series.name}",
        invalidDate: '无效的时间',
        loading: '加载中...',
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        noData: "没有数据",
        numericSymbols: null,
        printChart: "打印图表",
        resetZoom: '重置缩放比例',
        resetZoomTitle: '重置为原始大小',
        shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        thousandsSep: ',',
        weekdays: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],

        // Highstock
        rangeSelectorFrom: '开始时间',
        rangeSelectorTo: '结束时间',
        rangeSelectorZoom: '范围',

        // Highmaps
        zoomIn: '缩小',
        zoomOut: '放大'
    },

    global: {
        useUTC: true,
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
            week: 'Week from %A, %b %e, %Y',
            month: '%Y-%m',
            year: '%Y'
        }
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

    rangeSelector: {
        inputDateFormat: '%Y-%m-%d',
        buttonTheme: {
            width: 'auto',
            style: {
                fontSize: '12px',
                padding: '4px'
            }
        },
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
    }
});