// Function to create a table
function createTable(album, color, text, songs) {
    var mainContainer = document.getElementById("discography");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = album;
    headerCell.style.backgroundColor = color;
    headerCell.style.color = text;
    headerCell.style.fontWeight = "bold";

    songs.forEach(song => {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        titleCell.textContent = song.title;
        if(song.setlist) {
            titleCell.style.backgroundColor = "#d5a6bd";
        } else if(song.played) {
            titleCell.style.backgroundColor = "#9fc5e8";
        }
    });

    mainContainer.appendChild(table);
}

// Fetch JSON data and process it
fetch('../json/songs2024.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.music.forEach(era => {
            createTable(era.album, era.color, era.text, era.songs);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));