
document.getElementById('generate-incident').addEventListener('click', () => {
    const incidentList = document.getElementById('incident-list');
    const newIncident = document.createElement('li');
    newIncident.textContent = "Neuer Einsatz: " + incidents[0].description;
    incidentList.appendChild(newIncident);
});
    