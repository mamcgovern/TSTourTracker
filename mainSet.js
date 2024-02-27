// Function to create a table
function createTable(era, color, text, songs) {
    var mainContainer = document.getElementById("eras");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = era;
    headerCell.style.backgroundColor = color;
    headerCell.style.color = text;
    headerCell.style.fontWeight = "bold";

    songs.forEach(song => {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        titleCell.textContent = song.title;
        if(song.temporary) {
            titleCell.style.fontStyle = "italic";
            titleCell.style.backgroundColor = "#efefef";
        }
        if(song.note != null) {
            titleCell.textContent = song.title + " (" + song.note +")";
            titleCell.style.fontStyle = "italic";
        }
    });

    mainContainer.appendChild(table);
}

// Fetch JSON data and process it
fetch('mainSet.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the sets and create tables
        data.sets.forEach(set => {
            createTable(set.era, set.color, set.text, set.songs);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));