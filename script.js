
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Bitte mit deinem echten Token ersetzen

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
  center: [10.4515, 51.1657],
  zoom: 6
});

const vehicleList = document.getElementById('vehicle-list');
const logList = document.getElementById('log-list');

let balance = 10000;
let personnel = 10;
let vehicleCount = 0;

function updateStatus() {
  document.getElementById('balance').textContent = `💰 Kontostand: ${balance}€`;
  document.getElementById('personnel').textContent = `👥 Personal: ${personnel}`;
}

function addVehicle() {
  if (balance < 3000) {
    alert("Nicht genug Geld.");
    return;
  }
  balance -= 3000;
  vehicleCount++;
  const id = 'Fahrzeug-' + vehicleCount;
  const li = document.createElement('li');
  li.textContent = id + ' (bereit)';
  vehicleList.appendChild(li);
  updateStatus();
}

document.getElementById('buy-vehicle').addEventListener('click', addVehicle);
updateStatus();
