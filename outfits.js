function createCell(row, outfit, type) {
    const outfitCell = row.insertCell();
    outfitCell.innerText = type + " " + outfit;
    outfitCell.style.border = "1px solid gray";
}

// Function to create the table
function createTable(city, night, date, outfits) {
    var mainContainer = document.getElementById("outfits");

    /* Create the table and the header row*/
    const table = document.createElement('table');
    table.style.border = "2px solid black";

    /* Create a row for the show */
    const keyRow = table.insertRow();
    /* Add city and night info */
    const cityCell = keyRow.insertCell();
    cityCell.textContent = city + " N" + night;
    cityCell.style.fontWeight = "bold";
    const dateCell = keyRow.insertCell();
    dateCell.textContent = " (" + date + ")";
    dateCell.style.fontStyle = "italic";

    createCell(keyRow, "Lover Bodysuit", outfits.loverBodysuit);
    createCell(keyRow, "The Man Jacket", outfits.theManJacket);
    createCell(keyRow, "Lover Guitar", outfits.loverGuitar);
    createCell(keyRow, "Fearless Dress", outfits.fearlessDress);
    createCell(keyRow, "evermore Dress", outfits.evermoreDress);
    createCell(keyRow, "reputation Jumpsuit", outfits.reputationJumpsuit);
    createCell(keyRow, "Speak Now Dress", outfits.speakNowDress);
    createCell(keyRow, "Red Shirt", outfits.redShirt);
    createCell(keyRow, "folklore Dress", outfits.folkloreDress);
    createCell(keyRow, "1989 Combo", outfits.combo1989);
    createCell(keyRow, "Midnights Shirt", outfits.midnightsShirt);
    createCell(keyRow, "Midnights Bodysuit", outfits.midnightsBodysuit);
    createCell(keyRow, "Midnights Jacket", outfits.midnightsJacket);

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


    mainContainer.appendChild(table);
}

// LA Leg
fetch('outfits.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the stops and create tables
        data.shows.forEach(stop => {
            createTable(stop.city, stop.night, stop.date, stop.outfits);
        });
        console.log("Reading outfit data");
    })
    .catch(error => console.error('Error fetching JSON:', error));
