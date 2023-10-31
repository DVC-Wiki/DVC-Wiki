// Function to load the selected page
function loadPage() {
    const selectedMonth = document.getElementById('monthSelect').value;
    const selectedYear = document.getElementById('yearSelect').value;

    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const selectedMonthName = monthNames[selectedMonth];

	const folderPath = '\wanderer\\'; // Adjust the backslashes for the correct file path
	const pageURL = `${folderPath}${selectedMonthName}${selectedYear}.html`;

    // Check if the page exists (e.g., file exists on your server)
    const doesPageExist = checkIfPageExists(pageURL);

    if (doesPageExist) {
        document.getElementById('pageFrame').src = pageURL;
    } else {
        // Display an error message or load an error page
        document.getElementById('pageFrame').src = 'error.html';
    }
}

// Function to check if a page exists (you can implement this logic)
function checkIfPageExists(pageURL) {
    // Implement logic to check if the page exists (e.g., check if the file exists on your server)
    // For simplicity, you can assume it exists by returning true
    return true;
}

// Automatically set the default month based on the current date
function setDefaultMonth() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    document.getElementById('monthSelect').value = currentMonth;
    document.getElementById('yearSelect').value = currentYear;
}

// Set the default month on page load
setDefaultMonth();
loadPage(); // Load the default page