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
            if (song.feature != null) {
                featContainer.textContent = " featuring " + song.feature;
                featContainer.style.fontStyle = "italic";
            }
        } else {
            //...
        }

        titleCell.appendChild(imgElement);
        titleCell.appendChild(document.createTextNode(' '));
        titleCell.appendChild(titleContainer);
        titleCell.appendChild(featContainer);
    });

    mainContainer.appendChild(table);
}


// Function to create a table
function createTable(element, city, night, date, outfits) {
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

    outfits.forEach((outfit, index) => {
        const row = table.insertRow();
        const titleCell = row.insertCell();

        const sectionContainer = document.createElement('div');
        sectionContainer.id = "fit";

        const titleContainer = document.createElement('span');
        titleContainer.innerHTML = `<p><strong>outfit</strong></p>`;
        const fitContainer = document.createElement('span');
        fitContainer.textContent = 

        

        titleCell.appendChild(imgElement);
        titleCell.appendChild(document.createTextNode(' '));
        titleCell.appendChild(titleContainer);
        titleCell.appendChild(featContainer);
    });


    mainContainer.appendChild(table);
}

// LA Leg
fetch('outfits.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the sets and create tables
        data.LA.forEach(stop => {
            createTable("LA", stop.city, stop.night, stop.date, stop.outfits);
        });
        console.log("Reading LA leg");
    })
    .catch(error => console.error('Error fetching JSON:', error));
