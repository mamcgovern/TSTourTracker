var onlyUpcoming = false;

function makeMenu() {
    var mainContainer = document.getElementById("menu");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = "Menu";
    headerCell.style.fontWeight = "bold";

    const row = table.insertRow();
    const titleCell = row.insertCell();

    const primaryClass = "btn btn-primary";
    const secondaryClass = "btn btn-outline-secondary";

    var buttonUpcoming = document.createElement("button");
    var buttonUpcomingText = document.createElement("span");
    buttonUpcomingText.id = "buttonText";
    buttonUpcomingText.textContent = "Upcoming Events";
    buttonUpcoming.appendChild(buttonUpcomingText);
    buttonUpcoming.className = primaryClass;

    var buttonAll = document.createElement("button");
    var buttonAllText = document.createElement("span");
    buttonAllText.id = "buttonText";
    buttonAllText.textContent = "All Events";
    buttonAll.appendChild(buttonAllText);
    buttonAll.className = secondaryClass;

    function onlyUpcomingEvent() {
        onlyUpcoming = true;
        toggleOption();
        renderEvents();
    }
    function allEvent() {
        onlyUpcoming = false;
        toggleOption();
        renderEvents();
    }
    function toggleOption() {
        console.log("Only upcoming: " + onlyUpcoming);
        if (onlyUpcoming) {
            buttonUpcoming.className = primaryClass;
            buttonAll.className = secondaryClass;
        } else {
            buttonUpcoming.className = secondaryClass;
            buttonAll.className = primaryClass;
        }
    }

    // Add click event listener to the buttons
    buttonUpcoming.addEventListener("click", onlyUpcomingEvent);
    buttonAll.addEventListener("click", allEvent);

    titleCell.appendChild(buttonUpcoming);
    titleCell.appendChild(document.createTextNode(" "));
    titleCell.appendChild(buttonAll);

    console.log("Running makeMenu");

    mainContainer.appendChild(table);
}

function makeKey() {
    var mainContainer = document.getElementById("key");
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.textContent = "Key";
    headerCell.style.fontWeight = "bold";

    const rowConcert = table.insertRow();
    const titleCellConcert = rowConcert.insertCell();
    titleCellConcert.style.backgroundColor = "#fbe0d5";
    titleCellConcert.textContent = "Concerts";

    const rowRelease = table.insertRow();
    const titleCellRelease = rowRelease.insertCell();
    titleCellRelease.style.backgroundColor = "#effd5f";
    titleCellRelease.textContent = "Releases";

    const rowCeremony = table.insertRow();
    const titleCellCeremony = rowCeremony.insertCell();
    titleCellCeremony.style.backgroundColor = "#000fb7";
    titleCellCeremony.style.color = "#ffffff";
    titleCellCeremony.textContent = "Award Ceremonies";

    const rowFootball = table.insertRow();
    const titleCellFootball = rowFootball.insertCell();
    titleCellFootball.style.backgroundColor = "#825736";
    titleCellFootball.style.color = "#ffffff";
    titleCellFootball.textContent = "Football";

    const rowOther = table.insertRow();
    const titleCellOther = rowOther.insertCell();
    titleCellOther.textContent = "Other";

    console.log("Running makeKey");

    mainContainer.appendChild(table);
}

function renderEvents() {
    fetch('events.json')
        .then(response => response.json())
        .then(data => {
            var mainContainer = document.getElementById("events");
            const table = document.createElement('table');
            const headerRow = table.insertRow();
            const headerCell = headerRow.insertCell();
            headerCell.textContent = "Events";
            headerCell.style.fontWeight = "bold";

            // Loop through the sets and create tables
            data.events.forEach(event => {
                if (onlyUpcoming) {
                    var currentDate = new Date();
                    var eventDate = new Date(event.date);

                    if (eventDate >= currentDate) {
                        const row = table.insertRow();
                        const titleCell = row.insertCell();

                        const dateContainer = document.createElement('span');
                        dateContainer.textContent = event.date + ": ";
                        dateContainer.style.fontStyle = "italic";
                        const titleContainer = document.createElement('span');
                        titleContainer.textContent = event.title;

                        if(event.category == "concert") {
                            titleCell.style.backgroundColor = "#fbe0d5";
                        } else if(event.category == "release") {
                            titleCell.style.backgroundColor = "#effd5f";
                        } else if(event.category == "ceremony") {
                            titleCell.style.backgroundColor = "#000fb7";
                            titleCell.style.color = "#ffffff";
                        } else if (event.category == "football") {
                            titleCell.style.backgroundColor = "#825736";
                            titleCell.style.color = "#ffffff";
                        }

                        titleCell.appendChild(dateContainer);
                        titleCell.appendChild(document.createTextNode(' '));
                        titleCell.appendChild(titleContainer);
                    }
                } else {
                    const row = table.insertRow();
                    const titleCell = row.insertCell();

                    const dateContainer = document.createElement('span');
                    dateContainer.textContent = event.date + ": ";
                    dateContainer.style.fontStyle = "italic";
                    const titleContainer = document.createElement('span');
                    titleContainer.textContent = event.title;

                    if(event.category == "concert") {
                        titleCell.style.backgroundColor = "#fbe0d5";
                    } else if(event.category == "release") {
                        titleCell.style.backgroundColor = "#effd5f";
                    } else if(event.category == "ceremony") {
                        titleCell.style.backgroundColor = "#000fb7";
                        titleCell.style.color = "#ffffff";
                    } else if (event.category == "football") {
                        titleCell.style.backgroundColor = "#825736";
                        titleCell.style.color = "#ffffff";
                    }

                    titleCell.appendChild(dateContainer);
                    titleCell.appendChild(document.createTextNode(' '));
                    titleCell.appendChild(titleContainer);
                }
            });
            mainContainer.innerHTML = ""; // Clear existing content
            mainContainer.appendChild(table);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Call makeMenu and renderEvents when the page loads
makeMenu();
makeKey();
renderEvents();
