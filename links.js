function makeStreams() {
    var mainContainer = document.getElementById("streams");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = "Streams";
    headerCell.style.fontWeight = "bold";

    makeRow(table, "Tess - Tiktok", "https://www.tiktok.com/@tessdear");
    makeRow(table, "Tess's Backup - Tiktok", "https://www.tiktok.com/@yestess");
    makeRow(table, "Tess's Backup's Backup - Tiktok", "https://www.tiktok.com/@thetessdear");
    makeRow(table, "Tess - Insta", "https://www.instagram.com/tessbohne/");
    makeRow(table, "SwiftStream", "https://swiftstream.io/");
    makeRow(table, "folkleric - Twitch", "https://www.twitch.tv/folkleric");
    makeRow(table, "taylorswifthockeybro - YouTube", "https://www.youtube.com/@taylorswifthockeybro");

    mainContainer.appendChild(table);
}

function makeTrackers() {
    var mainContainer = document.getElementById("trackers");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = "Trackers";
    headerCell.style.fontWeight = "bold";

    makeRow(table, "Redit Mega Spreadsheet", "https://docs.google.com/spreadsheets/d/1isbSEIwagJrX97rdZhdYsPBQ4Agw09VIdYj8SqkEjxA/edit#gid=0");
    makeRow(table, "Outfits & More", "https://docs.google.com/spreadsheets/d/1WZyhckHAwOosHGA65h5dp5SHL5aoUMiyYXcY1k5MYUM/htmlview#gid=174092590");
    makeRow(table, "Swiftball", "https://docs.google.com/forms/d/e/1FAIpQLSfug6JZmuNdP_Fq_WOeHg3qC9HwbSrZvHAGON31Bc4nvWQezg/viewform");

    mainContainer.appendChild(table);
}

function makeOfficial() {
    var mainContainer = document.getElementById("official");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = "Taylor Swift Official";
    headerCell.style.fontWeight = "bold";

    makeRow(table, "Website", "https://www.taylorswift.com");
    makeRow(table, "Store", "https:www.store.taylorswift.com");
    makeRow(table, "Taylor's Instagram", "https://www.instagram.com/taylorswift/");
    makeRow(table, "Taylor's Twitter", "https://twitter.com/taylorswift13");
    makeRow(table, "Taylor Nation's Instagram", "https://www.instagram.com/taylornation/");
    makeRow(table, "Taylor Nation's Twitter", "https://twitter.com/taylornation13");

    
    mainContainer.appendChild(table);
}

function makeRow(t, title, link) {
    const row = t.insertRow();
    const titleCell = row.insertCell();
    const titleContainer = document.createElement('span');
    titleContainer.textContent = title;

    var linkButton = document.createElement('a');
    linkButton.href = link;
    linkButton.textContent = link;
    linkButton.classList.add('btn', 'btn-link', 'rounded-pill', 'px-3');

    titleCell.appendChild(titleContainer);
    titleCell.appendChild(document.createTextNode(' '));

    titleCell.appendChild(linkButton);

}
makeStreams();
makeTrackers();
makeOfficial();
