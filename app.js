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

let myItem = song.title
console.log(myItem)


        var card = `
<div class='col-md-6'>
    <p class='h4 text-center' href='${song.url}'>${song.title}</p>
    <p class='h5 text-center' href='${song.url}'>${song.artist}</p>
            <img <img onclick="searchTube('${song.title} ${song.artist}')"  class='center-block' src='${song.albumArt}'>
            <div>
            <audio controls class='center-block'>
                <source  src="${song.preview}" type="audio/mpeg"> 
                Your browser does not support the audio element.
            </audio>
            </div>
</div>
    `

        container.append(card)
        myInfo = ''
    })
}



