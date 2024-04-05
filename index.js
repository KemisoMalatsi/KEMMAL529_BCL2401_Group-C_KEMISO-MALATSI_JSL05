//Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Pop" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Rock" },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Pop" },
    { title: "Purple Rain", artist: "Prince", genre: "Rock" },
    { title: "Hotel California", artist: "Eagles", genre: "Pop" },
    
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot": "Rock",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    return Object.entries(guardians).map(([guardian,genre]) => {
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, playlist };
    }) 

}

// Function to display playlists
function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById("playlists");

    playlists.forEach(({ guardian, playlist }) => {
        const playlistEl = document.createElement("div");
        playlistEl.id = "plalists";
        playlistEl.innerHTML = `<h4>${guardian}'s playlist</h4>`; // show the guardians name

        // Create list element
        const songList = document.createElement("div");

        playlist.forEach(song => {
            const songItem = document.createElement("li");

            songItem.innerHTML = `<span class = "song-title">${song.title}</span> by ${song.artist}`;

            songList.appendChild(songItem);
        });
        playlistEl.appendChild(songList);
        playlistsDiv.appendChild(playlistEl);
    });
    
}

// Call generatePlaylist and display the playlists for each Guardian

const plalists = generatePlaylist(guardians, songs);
generatePlaylist(guardians, songs);
