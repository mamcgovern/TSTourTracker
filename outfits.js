function createHeader(row) {
    console.log("Creating header row");

    row.style.backgroundColor = "#E0E0E0";
    row.style.fontWeight = "bold";
    /* Add city and night info */
    const cityCell = row.insertCell();
    cityCell.textContent = "Key";
    cityCell.style.fontWeight = "bold";
    cityCell.style.borderBottom = "1px solid gray";
    const dateCell = row.insertCell();
    dateCell.textContent = "";
    dateCell.style.borderBottom = "1px solid gray";
    createCell(row, "Lover Bodysuit");
    createCell(row, "The Man Jacket");
    createCell(row, "Lover Guitar");
    createCell(row, "Fearless Dress");
    createCell(row, "evermore Dress");
    createCell(row, "reputation Jumpsuit");
    createCell(row, "Speak Now Dress");
    createCell(row, "Red Shirt");
    createCell(row, "folklore Dress");
    createCell(row, "1989 Combo");
    createCell(row, "Midnights Shirt");
    createCell(row, "Midnights Bodysuit");
    createCell(row, "Midnights Jacket");
}

function createCell(row, type) {
    const outfitCell = row.insertCell();
    outfitCell.innerText = type;
    outfitCell.style = "min-width: 100px; border: 1px solid gray; padding-left: 10px; padding-right: 10px;";
}

// Function to create the table
function createTable(table, city, night, date, outfits) {

    /* Create a row for the show */
    const keyRow = table.insertRow();
    /* Add city and night info */
    const cityCell = keyRow.insertCell();
    cityCell.textContent = city + " N" + night;
    cityCell.style.fontWeight = "bold";
    cityCell.style.borderBottom = "1px solid gray";
    const dateCell = keyRow.insertCell();
    dateCell.textContent = " (" + date + ")";
    dateCell.style.fontStyle = "italic";
    dateCell.style.borderBottom = "1px solid gray";

    createCell(keyRow, outfits.loverBodysuit);
    createCell(keyRow, outfits.theManJacket);
    createCell(keyRow, outfits.loverGuitar);
    createCell(keyRow, outfits.fearlessDress);
    createCell(keyRow, outfits.evermoreDress);
    createCell(keyRow, outfits.reputationJumpsuit);
    createCell(keyRow, outfits.speakNowDress);
    createCell(keyRow, outfits.redShirt);
    createCell(keyRow, outfits.folkloreDress);
    createCell(keyRow, outfits.combo1989);
    createCell(keyRow, outfits.midnightsShirt);
    createCell(keyRow, outfits.midnightsBodysuit);
    createCell(keyRow, outfits.midnightsJacket);

    /* For each outfit */
    // outfits.forEach((outfit, index) => {
    //     /* Create a row */
    //     const row = table.insertRow();
    //     const titleCell = row.insertCell();



    //     const sectionContainer = document.createElement('div');
    //     sectionContainer.id = "fit";

    //     const titleContainer = document.createElement('span');
    //     titleContainer.innerHTML = `<p><strong>outfit</strong></p>`;
    //     const fitContainer = document.createElement('span');
    //     fitContainer.textContent = 



    //     titleCell.appendChild(imgElement);
    //     titleCell.appendChild(document.createTextNode(' '));
    //     titleCell.appendChild(titleContainer);
    //     titleCell.appendChild(featContainer);
    // });
}

// LA Leg
fetch('outfits.json')
    .then(response => response.json())
    .then(data => {
        var mainContainer = document.getElementById("outfits");
        /* Create the table */
        const table = document.createElement('table');
        table.style = "border: 2px solid black; padding: 10px;";
        /* Create the header row */
        const headerRow = table.insertRow();
        createHeader(headerRow);

        // Loop through the stops and create tables
        data.shows.forEach(stop => {
            createTable(table, stop.city, stop.night, stop.date, stop.outfits);
        });
        mainContainer.appendChild(table);
    })
    .catch(error => console.error('Error fetching JSON:', error));