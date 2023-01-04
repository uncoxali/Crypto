export const option: any = {
    chart: {
        type: 'column',
        backgroundColor: '#2B3A55',
        width: 600,
        color: '#fff',
    },
    title: {
        color: '#fff',
        text: '',
    },
    subtitle: {
        text: 'Chart',
    },
    colors: ['blue', 'red'],
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        crosshair: true,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Chart',
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
        },
    },

    series: [
        {
            name: '',
            data: [60.9, 40.8, 3.3, 20.4, 17.0, 98.3, 39.0, 59.6, 52.4, 65.2, 99.3, 51.2],
        },
        {
            name: '',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 5.5, 57.4, 0.4, 47.6, 39.1, 46.8, 91.1],
        },
    ],
};
