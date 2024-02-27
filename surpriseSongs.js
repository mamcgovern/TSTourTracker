// Function to create a table
function createTable(element, city, night, date, songs) {
    var mainContainer = document.getElementById(element);
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();

    const cityNightContainer = document.createElement('span');
    const dateContainer = document.createElement('span');

    cityNightContainer.textContent = city + " N" + night;
    dateContainer.textContent = " (" + date + ")";

    cityNightContainer.style.fontWeight = "bold";
    dateContainer.style.fontStyle = "italic";

    headerCell.appendChild(cityNightContainer);
    headerCell.appendChild(dateContainer);

    songs.forEach(song => {
        const row = table.insertRow();
        const titleCell = row.insertCell();

        const imgElement = document.createElement('img');
        imgElement.style.width = '20px';
        imgElement.style.height = '20px';
        const titleContainer = document.createElement('span');
        titleContainer.textContent = song.title;
        const featContainer = document.createElement('span');
        if (song.album == "Taylor Swift") {
            titleCell.style.backgroundColor = "#d9ffcc";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "Fearless") {
            titleCell.style.backgroundColor = "#feeab6";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "Speak Now") {
            titleCell.style.backgroundColor = "#d1beff";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "Red") {
            titleCell.style.backgroundColor = "#ff6362";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "1989") {
            titleCell.style.backgroundColor = "#aceeff";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "reputation") {
            titleCell.style.backgroundColor = "#000000";
            titleCell.style.color = "#ffffff";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_white.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_white.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
                featContainer.style.color = "#ffffff";
            }
        } else if (song.album == "Lover") {
            titleCell.style.backgroundColor = "#ffc2ea";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "folklore") {
            titleCell.style.backgroundColor = "#d8dee5";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "evermore") {
            titleCell.style.backgroundColor = "#ffac54";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "Midnights") {
            titleCell.style.backgroundColor = "#000fb7";
            titleCell.style.color = "#ffffff";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_white.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_white.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
                featContainer.style.color = "#ffffff";
            }
        } else if (song.album == "The Tortured Poets Department") {
            titleCell.style.backgroundColor = "#dcd3c3";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else if (song.album == "album") {
            titleCell.style.backgroundColor = "#ffffff";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
        } else {
            titleCell.style.backgroundColor = "#fbe0d5";
            if (song.instrument == "guitar") {
                imgElement.src = 'guitar_black.png';
                imgElement.alt = 'Guitar';
            } else {
                imgElement.src = 'piano_black.png';
                imgElement.alt = 'Piano';
            }
            if(song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        }

        titleCell.appendChild(imgElement);
        titleCell.appendChild(document.createTextNode(' '));
        titleCell.appendChild(titleContainer);
        titleCell.appendChild(featContainer);
    });

    mainContainer.appendChild(table);
}

// US Leg
fetch('US_surpriseSongs.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the sets and create tables
        data.stops.forEach(stop => {
            createTable("US", stop.city, stop.night, stop.date, stop.songs);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// LA Leg
fetch('LA_surpriseSongs.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the sets and create tables
        data.stops.forEach(stop => {
            createTable("LA", stop.city, stop.night, stop.date, stop.songs);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Asia-Aus Leg
fetch('Asia-Aus_surpriseSongs.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the sets and create tables
        data.stops.forEach(stop => {
            createTable("Asia-Aus", stop.city, stop.night, stop.date, stop.songs);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// Europe Leg
fetch('Eur_surpriseSongs.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the sets and create tables
        data.stops.forEach(stop => {
            createTable("Eur", stop.city, stop.night, stop.date, stop.songs);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

// US & Canada Leg
fetch('US-Can_surpriseSongs.json')
.then(response => response.json())
.then(data => {
    // Loop through the sets and create tables
    data.stops.forEach(stop => {
        createTable("US-Can", stop.city, stop.night, stop.date, stop.songs);
    });
})
.catch(error => console.error('Error fetching JSON:', error));
