MAPPING = {
    'theresamay': [
        {
            'text': 'tmay tweet',
            'username': 'tmay_tweeter',
            'date': 'April 13, 2017',
        },
        {
            'text': 'tmay tweet2',
            'username': 'tmay_tweeter2',
            'date': 'April 15, 2017',
        },
    ],
    'jeremycorbyn': [
        {
            'text': 'jcorbyn tweet',
            'username': 'jcorbyn_tweeter',
            'date': 'April 14, 2017',
        },
        {
            'text': 'jcorbyn tweet2',
            'username': 'jcorbyn_tweeter2',
            'date': 'April 15, 2017',
        },
    ]
}

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
    var mp_map = MAPPING[mp][0];
    var text = mp_map['text'];
    var username = mp_map['username'];
    var date = mp_map['date'];
    $('.twitter-tweet')[index].innerHTML = '<p lang="en" dir="ltr">' + text + '</p>— @' + username + ' ' + date;
}

$(document).ready(function() {
    w3IncludeHTML();
});
