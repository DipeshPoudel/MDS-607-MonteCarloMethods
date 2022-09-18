const btn = document.getElementById("rand_number");
btn.addEventListener('click',function gen_rand(){
    let random_number_list = [];
    let random_seed = document.getElementById("random_seed_value").value;
    console.log(`Random Seed: ${random_seed}`);
    let count = document.getElementById("random_count").value;
    for(let i=0;i<=count;i++)
    {
        rand = (16807*random_seed)%((Math.pow(2,31))-1);
        random_number_list.push(rand);
        random_seed=rand;
    }
    Highcharts.chart('chart_container', {
        title: {
            text: 'Highcharts Histogram'
        },
    
        xAxis: [{
            title: { text: 'Data' },
            alignTicks: false
        }, {
            title: { text: 'Histogram' },
            alignTicks: false,
            opposite: true
        }],
    
        yAxis: [{
            title: { text: 'Data' }
        }, {
            title: { text: 'Histogram' },
            opposite: true
        }],
    
        plotOptions: {
            histogram: {
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.x:.3f} to {point.x2:.3f}, {point.y}.'
                    }
                }
            }
        },
    
        series: [{
            name: 'Histogram',
            type: 'histogram',
            xAxis: 1,
            yAxis: 1,
            baseSeries: 's1',
            zIndex: -1
        }, {
            name: 'Data',
            type: 'scatter',
            data: random_number_list,
            id: 's1',
            marker: {
                radius: 1.5
            }
        }]
    });
});


