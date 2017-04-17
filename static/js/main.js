INTERVAL = 0

function change_mp(mp) {
    var val = $(mp).val()
    var mp_map = MAPPING[val]
    show_tweets(mp_map);
    change_graph_source(mp_map);
}

function change_graph_source(mp_map) {
    var graph_data = get_graph_data(mp_map);
    Highcharts.chart('graph-container', graph_data);
    $('#graph-container').show();
}

function set_tweet(tweet, mp_map) {
    tweet.innerHTML = '<p lang="en" dir="ltr">' + mp_map['text'] + '</p>— @' + mp_map['username'] + ' ' + mp_map['date'];
}

function show_tweets(mp_map) {
    if (INTERVAL != 0) {
        clearInterval(INTERVAL);
    }

    var tweet = $('.twitter-tweet')[0];
    $(tweet).show();
    var count = 0;
    set_tweet(tweet, mp_map[count]);

    INTERVAL = setInterval(function(){
        if (count < mp_map.length - 1) {
            count++;
        } else {
            count = 0;
        }
        set_tweet(tweet, mp_map[count]);

    }, 3500);
}

function get_graph_data(mp_map) {
    var bitch = 0;
    var hypocrite = 0;
    var disgrace = 0;
    var dumb = 0;

    $.each(mp_map, function() {
        if (this.text.toLowerCase().includes('bitch')){
            bitch++;
        }
        if (this.text.toLowerCase().includes('hypocrite')){
            hypocrite++;
        }
        if (this.text.toLowerCase().includes('disgrace')){
            disgrace++;
        }
        if (this.text.toLowerCase().includes('dumb')){
            dumb++;
        }
    });

    return {
        chart: {
            type: 'bar',
            width: 500
        },
        title: {
            text: mp_map.name
        },
        xAxis: {
            categories: ['Bitch', 'Hypocrite', 'Disgrace', 'Dumb']
        },
        yAxis: {
            title: {
                text: 'Insult Count'
            }
        },
        series: [{
            data: [bitch, hypocrite, disgrace, dumb]
        }],
    }
}

$(document).ready(function() {
    w3IncludeHTML();
});
