//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}




function drawSongs(songList) {
    console.log(songList);

    var container = $('#music-container')
    container.html('')
    songList.forEach(function (song) {

        var card = `
<div class='col-md-4'>
    <p class: 'h4 text-center' href='${song.url}'>${song.title}
        <p>
            <img src='${song.albumArt}'></img>
            <div>
            </div>
            <audio controls>
                <source src="${song.preview}" type="audio/mpeg"> Your browser does not support the audio element.
            </audio>
</div>
    `

        container.append(card)

    })
}



