// ==========================================
// VEDUUU BIRTHDAY WEBSITE
// ==========================================

const youtubeVideoId = "32YzafO9Bmo";

let musicStarted = false;


// ==========================================
// OPEN LETTER + START BIRTHDAY SONG
// ==========================================

function openLetter() {

    // Start the birthday song when the user
    // taps the Open Your Letter button
    if (!musicStarted) {

        const player = document.getElementById("youtubePlayer");

        if (player) {

            player.src =
                "https://www.youtube.com/embed/" +
                youtubeVideoId +
                "?autoplay=1" +
                "&loop=1" +
                "&playlist=" + youtubeVideoId +
                "&controls=0" +
                "&rel=0";

            musicStarted = true;
        }
    }


    // Scroll to the love letter
    const letter = document.getElementById("letter");

    if (letter) {

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }

}