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

            // Define a function to update the displayed results
            function updateResults() {
                var searchTerm = searchInput.value.toLowerCase();
                displayResults(dragons, searchTerm);
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

            // Initial display of all dragons
            updateResults();
        }
    };
    xhr.send();
});

function displayResults(dragons, searchTerm) {
    var tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    for (var i = 0; i < dragons.length; i++) {
        var dragon = dragons[i];
        var dragonName = dragon.getElementsByTagName("dragonName")[0].textContent;
        var eggDescription = dragon.getElementsByTagName("eggDescription")[0].textContent;
        var location = dragon.getElementsByTagName("location")[0].textContent;
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
            location.toLowerCase().includes(searchTerm)
        ) {
            var row = document.createElement("tr");

            var dragonNameCell = document.createElement("td");
            dragonNameCell.textContent = dragonName;
            row.appendChild(dragonNameCell);

            var eggDescriptionCell = document.createElement("td");
            eggDescriptionCell.textContent = eggDescription;
            row.appendChild(eggDescriptionCell);

            var locationCell = document.createElement("td");
            locationCell.textContent = location;
            row.appendChild(locationCell);

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

// Get the modal and close button elements
var modal = document.getElementById("myModal");
var closeBtn = modal.querySelector(".close");

// Function to open the modal and populate content
function openModal(content) {
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = content;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Event listener for name clicks in the table
document.getElementById("dragonTable").addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "TD") {
        // Get the dragon name from the clicked table cell
        var dragonName = target.textContent;

        // Simulate loading more information (replace with your own data retrieval logic)
        var moreInfoContent = "More information about " + dragonName;

        // Open the modal with the additional information
        openModal(moreInfoContent);
    }
});

// Event listener for the close button
closeBtn.addEventListener("click", closeModal);
