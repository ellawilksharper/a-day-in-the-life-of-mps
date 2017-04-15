function change_mp(mp) {
    var index = parseInt($($(mp).closest('.row')[0]).attr('name').split('-')[1]);
    var val = $(mp).val()
    show_tweets(index, val);
    change_graph_source(index, val);
}

function change_graph_source(index, mp_name) {
    $($('.graph')[index]).attr('src', 'static/images/' + mp_name + '.jpg')
}

function set_tweet(tweet, mp_map) {
    $(tweet).text('<p lang="en" dir="ltr">' + mp_map['text'] + '</p>— @' + mp_map['username'] + ' ' + mp_map['date']);
}

function show_tweets(index, mp) {
    var tweet = $('.twitter-tweet')[index];
    var count = 0;
    set_tweet(tweet, MAPPING[mp][count]);

    setInterval(function(){
        if (count < MAPPING[mp].length) {
            count++;
        } else {
            count = -1;
        }
        set_tweet(tweet, MAPPING[mp][count]);

    }, 4000);
}

$(document).ready(function() {
    w3IncludeHTML();
});
