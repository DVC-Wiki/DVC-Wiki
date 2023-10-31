document.addEventListener("DOMContentLoaded", function () {
    // Load XML data using XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "xml/dragons.xml", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var xmlDoc = xhr.responseXML;
            var dragons = xmlDoc.getElementsByTagName("dragon");

            // Handle search input
            var searchInput = document.getElementById("searchInput");
            var locationFilter = "Altar of Darkness"; // Default location filter

            // Define a function to update the displayed results
            function updateResults() {
                var searchTerm = searchInput.value.toLowerCase();
                displayResults(dragons, searchTerm, locationFilter);
            }

            // Attach the updateResults function to the input event
            searchInput.addEventListener("input", updateResults);

            // Get the clear search button element
            var clearSearchButton = document.getElementById("clearSearch");

            // Add a click event listener to clear the search input
            clearSearchButton.addEventListener("click", function () {
                searchInput.value = ""; // Clear the search input
                updateResults(); // Update results after clearing
            });

            // Initial display of all dragons with the default location filter
            updateResults();
        }
    };
    xhr.send();
});

function displayResults(dragons, searchTerm, locationFilter) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

   for (var i = 0; i < dragons.length; i++) {
        var dragon = dragons[i];
        var dragonName = dragon.getElementsByTagName("dragonName")[0].textContent;
        var eggDescription = dragon.getElementsByTagName("eggDescription")[0].textContent;
        var location = dragon.getElementsByTagName("location")[0].textContent;
        var careOptions = dragon.getElementsByTagName("careOptions")[0].textContent;
        var personality1 = dragon.getElementsByTagName("personality1")[0].textContent;
        var personality2 = dragon.getElementsByTagName("personality2")[0].textContent;
        var eggSpriteElement = dragon.getElementsByTagName("eggSprite")[0];
        var eggSprite = eggSpriteElement ? eggSpriteElement.textContent : "";
        var spriteM = dragon.getElementsByTagName("spriteM")[0].textContent;
        var spriteF = dragon.getElementsByTagName("spriteF")[0].textContent;
        var spriteN = dragon.getElementsByTagName("spriteN")[0].textContent;
        var artworkURL = dragon.getElementsByTagName("artwork")[0].textContent;

        // Check if any column contains the search term (case insensitive)
        if (
            dragonName.toLowerCase().includes(searchTerm) ||
            eggDescription.toLowerCase().includes(searchTerm) ||
            location.toLowerCase().includes(searchTerm) ||
            careOptions.toLowerCase().includes(searchTerm) ||
            personality1.toLowerCase().includes(searchTerm) ||
            personality2.toLowerCase().includes(searchTerm)
        ) {
            var row = document.createElement("tr");

            var dragonNameCell = document.createElement("td");
			dragonNameCell.innerHTML = dragonName; // Render as HTML
			row.appendChild(dragonNameCell);

            var eggDescriptionCell = document.createElement("td");
            eggDescriptionCell.innerHTML = eggDescription;
            row.appendChild(eggDescriptionCell);

            var locationCell = document.createElement("td");
            locationCell.innerHTML = location;
            row.appendChild(locationCell);

            var careOptionsCell = document.createElement("td");
            careOptionsCell.innerHTML = careOptions; // Render as HTML
            row.appendChild(careOptionsCell);

            var personality1Cell = document.createElement("td");
            personality1Cell.innerHTML = personality1; // Render as HTML
            row.appendChild(personality1Cell);

            var personality2Cell = document.createElement("td");
            personality2Cell.innerHTML = personality2; // Render as HTML
            row.appendChild(personality2Cell);

            var eggSpriteCell = document.createElement("td");
            if (eggSprite) {
                var eggSpriteImg = document.createElement("img");
                eggSpriteImg.src = eggSprite;
                eggSpriteCell.appendChild(eggSpriteImg);
            }
            row.appendChild(eggSpriteCell);

            var spriteMCell = document.createElement("td");
            if (spriteM) {
                var spriteMImg = document.createElement("img");
                spriteMImg.src = spriteM;
                spriteMCell.appendChild(spriteMImg);
            }
            row.appendChild(spriteMCell);

            var spriteFCell = document.createElement("td");
            if (spriteF) {
                var spriteFImg = document.createElement("img");
                spriteFImg.src = spriteF;
                spriteFCell.appendChild(spriteFImg);
            }
            row.appendChild(spriteFCell);

            var spriteNCell = document.createElement("td");
            if (spriteN) {
                var spriteNImg = document.createElement("img");
                spriteNImg.src = spriteN;
                spriteNCell.appendChild(spriteNImg);
            }
            row.appendChild(spriteNCell);

            var artworkCell = document.createElement("td");
            if (artworkURL) {
                var artworkImg = document.createElement("img");
                artworkImg.src = artworkURL;
                artworkCell.appendChild(artworkImg);
            }
            row.appendChild(artworkCell);

            tableBody.appendChild(row);
        }
    }
}