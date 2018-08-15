
var values = [2.00,5.00,1.00,8.00,3.00,8,6];

$('#sparkline-visitors').sparkline(values, {
    type: "bar",
    barColor: '#a27ce6',
    height: "42px",
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});
var values = [10.00,8.00,9.00,3.00,5.00,8,5];

$('#sparkline-visits').sparkline(values, {
    type: "bar",
    height: "42px",
    barColor:'#0078ff',
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});
var values = [1,8.00,5.00,6.00,3.00,4,5];

$('#sparkline-chats ').sparkline(values, {
    type: "bar",
    height: "42px",
    barColor:'#50d38a',
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});

$('.sparkline-employee').data("id","1").sparkline(values, {
    type: "bar",
    height: "16px",
    barColor:'#50d38a',
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});
$('.sparkline-employee').data("id","2").sparkline(values, {
    type: "bar",
    height: "16px",
    barColor:'#50d38a',
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});
$('.sparkline-employee').data("id","3").sparkline(values, {
    type: "bar",
    height: "16px",
    barColor:'#50d38a',
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});
$('.sparkline-employee').data("id","4").sparkline(values, {
    type: "bar",
    height: "16px",
    barColor:'#50d38a',
    tooltipFormat: '{{offset:offset}} {{value}}',
    tooltipValueLookups: {
        'offset': {
            0: '<span></span>',
            1: '<span></span>',
            2: '<span></span>',
            3: '<span></span>',
            4: '<span></span>',
            5: '<span></span>',
        }
    },
});

var values = [44, 33, 22];

// Draw a sparkline for the #sparkline element
$('#sparkline-income').sparkline(values, {
    type: "pie",
    width: "147px",
    height: "147px",
    sliceColors: ["#ffcd55", "#02b5b2","#445771"],
    tooltipFormatFieldlistKey: 'value',
    // Map the offset in the list of values to a name to use in the tooltip
    tooltipValueLookups: {

        'offset': {
            0: 'First',
            1: 'Second',
            2: 'Third'
        }
    },
});