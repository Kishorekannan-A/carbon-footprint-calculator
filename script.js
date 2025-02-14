function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("location").innerHTML = `Your Location: Latitude: ${lat}, Longitude: ${lon}`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("location").innerHTML = "An unknown error occurred.";
            break;
    }
}

window.onload = getLocation;


function calculateCarbonFootprint() {
    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;

    const energyEmissionFactor = 0.85;  
    const transportEmissionFactor = 0.21; 
    const wasteEmissionFactor = 1.2;  

    const energyEmissions = energy * energyEmissionFactor;
    const transportEmissions = transport * transportEmissionFactor;
    const wasteEmissions = waste * wasteEmissionFactor;

    const totalEmissions = energyEmissions + transportEmissions + wasteEmissions;

    window.location.href = `results.html?carbonFootprint=${totalEmissions.toFixed(2)}`;
}
