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

function createCell(row, type, textColor, backgroundColor) {
    const outfitCell = row.insertCell();
    outfitCell.innerText = type;
    outfitCell.style = "min-width: 100px; border: 1px solid gray; padding-left: 10px; padding-right: 10px;";
    outfitCell.style.backgroundColor = backgroundColor;
    outfitCell.style.color = textColor;
    outfitCell.style.fontWeight = "bold";
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

    if(outfits.loverBodysuit == "Pink & Blue") {
        createCell(keyRow, outfits.loverBodysuit, "#1f2cff", "#ffbae0");
    } else if(outfits.loverBodysuit == "Blue & Gold") {
        createCell(keyRow, outfits.loverBodysuit, "#f9d040", "#4689ff");
    } else if(outfits.loverBodysuit == "Tassels") {
        createCell(keyRow, outfits.loverBodysuit, "#5a3286", "#e6cff2");
    } else if(outfits.loverBodysuit == "Pink") {
        createCell(keyRow, outfits.loverBodysuit, "#f6c1d6", "#c91c50");
    } else {
        createCell(keyRow, outfits.loverBodysuit);
    }

    if(outfits.theManJacket == "Silver") {
        createCell(keyRow, outfits.theManJacket, "#ffffff", "#cccccc");
    } else if(outfits.theManJacket == "Black") {
        createCell(keyRow, outfits.theManJacket, "#e5e5e5", "#000000");
    } else if(outfits.theManJacket == "Blue") {
        createCell(keyRow, outfits.theManJacket, "#ffffff", "#4c42c7");
    } else if(outfits.theManJacket == "Pink") {
        createCell(keyRow, outfits.theManJacket, "#ffc0d5", "#f13a96");
    } else {
        createCell(keyRow, outfits.theManJacket);
    }

    if(outfits.loverGuitar == "Pink") {
        createCell(keyRow, outfits.loverGuitar, "#f13a96", "#fab8dc");
    } else if(outfits.loverGuitar == "Blue") {
        createCell(keyRow, outfits.loverGuitar, "#4982db", "#6bd1f7");
    } else {
        createCell(keyRow, outfits.loverGuitar);
    }

    if(outfits.fearlessDress == "Short Fringe") {
        createCell(keyRow, outfits.fearlessDress, "black", "#fce598");
    } else if(outfits.fearlessDress == "Gold Noodle") {
        createCell(keyRow, outfits.fearlessDress, "#ffffff", "#f1c231");
    } else if(outfits.fearlessDress == "Silver Noodle") {
        createCell(keyRow, outfits.fearlessDress, "#3d3d3d", "#e6e6e6");
    } else {
        createCell(keyRow, outfits.fearlessDress);
    }

    if(outfits.evermoreDress == "Orange/Yellow Flowers") {
        createCell(keyRow, outfits.evermoreDress, "#8d5301", "#ffab00");
    } else if(outfits.evermoreDress == "Bronze") {
        createCell(keyRow, outfits.evermoreDress, "#700b0a", "#c8624e");
    } else {
        createCell(keyRow, outfits.evermoreDress);
    }

    if(outfits.reputationJumpsuit == "Red & Black") {
        createCell(keyRow, outfits.reputationJumpsuit, "#ff0000", "black");
    } else {
        createCell(keyRow, outfits.reputationJumpsuit);
    }

    if(outfits.speakNowDress == "Pink") {
        createCell(keyRow, outfits.speakNowDress, "#c82c7b", "#f9a7d4");
    } else if(outfits.speakNowDress == "Champagne (Everything Bagel)") {
        createCell(keyRow, outfits.speakNowDress, "#c79e1e", "#fdf1cb");
    } else if(outfits.speakNowDress == "Flowers") {
        createCell(keyRow, outfits.speakNowDress, "#ffffff", "#cccccc");
    } else if(outfits.speakNowDress == "White/Silver") {
        createCell(keyRow, outfits.speakNowDress, "#8f7dc4", "#d9d2e9");
    } else if(outfits.speakNowDress == "Purple (Cupcake)") {
        createCell(keyRow, outfits.speakNowDress, "#f3dfff", "#c884f2");
    } else if(outfits.speakNowDress == "Blue") {
        createCell(keyRow, outfits.speakNowDress, "#0a53a8", "#bfe1f6");
    } else {
        createCell(keyRow, outfits.speakNowDress);
    }

    if(outfits.redShirt == "Never Ever") {
        createCell(keyRow, outfits.redShirt, "#e5e5e5", "#3d3d3d");
    } else if(outfits.redShirt == "Ew") {
        createCell(keyRow, outfits.redShirt, "#ff0000", "#f0f0f0");
    } else if(outfits.redShirt == "A Lot") {
        createCell(keyRow, outfits.redShirt, "#ffcfc9", "#b10202");
    } else {
        createCell(keyRow, outfits.redShirt);
    }

    if(outfits.folkloreDress == "Purple") {
        createCell(keyRow, outfits.folkloreDress, "#432c7e", "#d9d2e9");
    } else if(outfits.folkloreDress == "White/Cream") {
        createCell(keyRow, outfits.folkloreDress, "#c29408", "#fef5db");
    } else if(outfits.folkloreDress == "Pink") {
        createCell(keyRow, outfits.folkloreDress, "#a74f7a", "#f7c1d9");
    } else if(outfits.folkloreDress == "Green") {
        createCell(keyRow, outfits.folkloreDress, "#38761d", "#bae1ae");
    } else if(outfits.folkloreDress == "Blue") {
        createCell(keyRow, outfits.folkloreDress, "#184e7f", "#60cdff");
    } else {
        createCell(keyRow, outfits.folkloreDress);
    }
    
    if(outfits.combo1989 == "Green") {
        createCell(keyRow, outfits.combo1989, "#cbffb4", "#5bc42c");
    } else if(outfits.combo1989 == "Yellow/Orange") {
        createCell(keyRow, outfits.combo1989, "#fbfcb0", "#f89324");
    } else if(outfits.combo1989 == "Pink") {
        createCell(keyRow, outfits.combo1989, "#fbc4e2", "#f655a7");
    } else if(outfits.combo1989 == "Blue") {
        createCell(keyRow, outfits.combo1989, "#d7f3ff", "#60cdff");
    } else {
        createCell(keyRow, outfits.combo1989);
    }

    if(outfits.midnightsShirt == "Pink") {
        createCell(keyRow, outfits.midnightsShirt, "#c82c7b", "#f9a7d4");
    } else if(outfits.midnightsShirt == "Purple") {
        createCell(keyRow, outfits.midnightsShirt, "#e1d5ff", "#b595ff");
    } else if(outfits.midnightsShirt == "Silver Sequin") {
        createCell(keyRow, outfits.midnightsShirt, "#999999", "#efefef");
    } else if(outfits.midnightsShirt == "Iridescent") {
        createCell(keyRow, outfits.midnightsShirt, "#72359c", "#a4c6ff");
    } else if(outfits.midnightsShirt == "Dark Purple") {
        createCell(keyRow, outfits.midnightsShirt, "#d9d2e9", "#6105a2");
    } else if(outfits.midnightsShirt == "Blue") {
        createCell(keyRow, outfits.midnightsShirt, "#b1dfff", "#369df7");
    } else {
        createCell(keyRow, outfits.midnightsShirt);
    }

    if(outfits.midnightsBodysuit == "Blue") {
        createCell(keyRow, outfits.midnightsBodysuit, "#d0e2f3", "#2a48ef");
    } else if(outfits.midnightsBodysuit == "Navy") {
        createCell(keyRow, outfits.midnightsBodysuit, "#b7cbed", "#163f84");
    } else if(outfits.midnightsBodysuit == "Cutouts") {
        createCell(keyRow, outfits.midnightsBodysuit, "#d0e2f3", "#655bcf");
    } else {
        createCell(keyRow, outfits.midnightsBodysuit);
    }

    if(outfits.midnightsJacket == "Light Pink") {
        createCell(keyRow, outfits.midnightsJacket, "#9f1158", "#f887c3");
    } else if(outfits.midnightsJacket == "Multicolor") {
        createCell(keyRow, outfits.midnightsJacket, "#70b6f7", "#8644b1");
    } else if(outfits.midnightsJacket == "Magenta") {
        createCell(keyRow, outfits.midnightsJacket, "#f5cbcb", "#ca1c50");
    } else if(outfits.midnightsJacket == "Blue") {
        createCell(keyRow, outfits.midnightsJacket, "#c6d8f4", "#2008ff");
    } else if(outfits.midnightsJacket == "No Jacket") {
        createCell(keyRow, outfits.midnightsJacket);
    } else {
        createCell(keyRow, outfits.midnightsJacket);
    }

}

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