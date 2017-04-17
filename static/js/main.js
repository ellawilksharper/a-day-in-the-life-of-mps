INTERVALS = [0, 0]

function change_mp(mp) {
    var index = parseInt($($(mp).closest('.row')[0]).attr('name').split('-')[1]);
    var val = $(mp).val()
    var mp_map = MAPPING[val]
    show_tweets(mp_map, index);
    change_graph_source(mp_map, index);
}

function change_graph_source(mp_map, index) {
    var graph_container = $('.graph-container')[index];
    $(graph_container).highcharts(get_graph_data(mp_map));
}

function set_tweet(tweet, mp_map) {
    tweet.innerHTML = '<p lang="en" dir="ltr">' + mp_map['text'] + '</p>— @' + mp_map['username'] + ' ' + mp_map['date'];
}

function show_tweets(mp_map, index) {
    if (INTERVALS[index] != 0) {
        clearInterval(INTERVALS[index]);
    }

    var tweet = $('.twitter-tweet')[index];
    $(tweet).show();
    var count = 0;
    set_tweet(tweet, mp_map[count]);

    INTERVALS[index] = setInterval(function(){
        if (count < mp_map.length - 1) {
            count++;
        } else {
            count = 0;
        }
        set_tweet(tweet, mp_map[count]);

    }, 3000);
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
            type: 'bar'
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
