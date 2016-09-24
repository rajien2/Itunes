function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}


function searchTube() {

    // get fourm input
    q = $('#query').val()

    //run request on api
    $.get(
        "https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet',
            type: 'video',
            q: q,
            maxResults: 1,
            order: 'viewCount',
            key: 'AIzaSyD9YPjBHHTiMX_MpqKySSwIIGlxL1zuD9o'
        },
        function (data) {
            console.log(data.items);
            $.each(data.items, function(index, item){
                $.get('item.html', function(data){
                $('#results').append(tplawesome(data, [{'title':item.snippet.title, 'videoid':item.id.videoId}] ))
                })
                //$('#results').append(item.id.videoId + ' ' + item.snippet.title + '<br>')
            })
            //$('results').append(item.id.videoId + ' ' + data.snippet.title + '<br>');


        }
    );
}