function change_mp(mp) {
    var index = parseInt($($(mp).closest('.row')[0]).attr('name').split('-')[1]);
    var val = $(mp).val()
    show_tweets(index, val);
    change_graph_source(index, val);
}

function change_graph_source(index, mp_name) {
    $($('.graph')[index]).attr('src', 'static/images/' + mp_name + '.jpg')
}

function show_tweets(index, mp) {
    count = 0;
    setInterval(function(){
        var mp_map = MAPPING[mp][count];
        $($('.twitter-tweet')[index]).fadeOut(400, function() {
            $(this).text('<p lang="en" dir="ltr">' + mp_map['text'] + '</p>— @' + mp_map['username'] + ' ' + mp_map['date']);
        });
        if (count < MAPPING[mp].length - 1) {
            count++;
        } else {
            count = 0;
        }
        
    }, 4000);
}

$(document).ready(function() {
    w3IncludeHTML();
});
