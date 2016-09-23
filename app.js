//Do Not Modify the getMusic function
function getMusic() {
    var artist = document.getElementById('artist').value;
    itunes.getMusicByArtist(artist).then(drawSongs);
}




function drawSongs(songList) {
    console.log(songList);

    var container = $('#music-container')
    container.html('')
    songList.forEach(function(song) {

        var card = `
    <div>
    <h3>${song.title}</h3>
    <img src='${song.albumArt}'></img>
    </div>
    `

container.append(card)

var audio = new Audio('audio_file.mp3');
audio.play();

    })
}



