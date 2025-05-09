
const emergencies = [
  { id: 1, type: "Verkehrsunfall", location: "B27 - Stuttgart", severity: "Mittel" },
  { id: 2, type: "Wohnungsbrand", location: "Berlin - Mitte", severity: "Hoch" },
  { id: 3, type: "Herzinfarkt", location: "Köln Innenstadt", severity: "Kritisch" }
];

const vehicles = [
  { id: "RTW-01", type: "RTW", status: "verfügbar" },
  { id: "NEF-01", type: "NEF", status: "verfügbar" },
  { id: "FLW-01", type: "Feuerwehr", status: "verfügbar" },
  { id: "POL-01", type: "Polizei", status: "verfügbar" },
  { id: "CH-01", type: "Rettungshubschrauber", status: "verfügbar" }
];

let einsatzZaehler = 0;
const stations = [];

function renderEmergencies() {
  const panel = document.getElementById("emergency-list");
  panel.innerHTML = "";
  emergencies.forEach(e => {
    const div = document.createElement("div");
    div.className = "emergency";
    div.innerHTML = `<strong>${e.type}</strong> in <em>${e.location}</em> - <b>${e.severity}</b>
    <br/><button onclick="dispatch(${e.id})">Fahrzeug schicken</button>`;
    panel.appendChild(div);
  });
}

function renderVehicles() {
  const panel = document.getElementById("vehicle-list");
  panel.innerHTML = "";
  vehicles.forEach(v => {
    const div = document.createElement("div");
    div.className = "vehicle";
    div.id = v.id;
    div.textContent = `${v.id} (${v.type}) - ${v.status}`;
    panel.appendChild(div);
  });
}

function dispatch(emergencyId) {
  const emergency = emergencies.find(e => e.id === emergencyId);
  const vehicle = vehicles.find(v => v.status === "verfügbar");

  if (!vehicle) {
    alert("Keine Fahrzeuge verfügbar!");
    return;
  }

  vehicle.status = "im Einsatz";
  document.getElementById(vehicle.id).textContent = `${vehicle.id} (${vehicle.type}) - im Einsatz`;

  einsatzZaehler++;
  const log = document.getElementById("log-list");
  const entry = document.createElement("li");
  entry.textContent = `#${einsatzZaehler}: ${vehicle.id} wurde zu ${emergency.type} nach ${emergency.location} geschickt.`;
  log.appendChild(entry);
}

document.getElementById("station-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.getElementById("station-type").value;
  const location = document.getElementById("station-location").value;

  stations.push({ type, location });
  const entry = document.createElement("li");
  entry.textContent = `${type} gebaut in ${location}`;
  document.getElementById("station-list").appendChild(entry);
});

function initMap() {
  const map = L.map("map").setView([51.1657, 10.4515], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap-Mitwirkende"
  }).addTo(map);

  emergencies.forEach(e => {
    const marker = L.marker([51 + Math.random(), 10 + Math.random()]).addTo(map);
    marker.bindPopup(`${e.type}<br>${e.location}`);
  });
}

function generateRandomEmergency() {
  const types = ["Brand", "Verkehrsunfall", "Reanimation", "Explosion", "Hochwasser"];
  const locations = ["München", "Hamburg", "Kassel", "Dresden", "Bremen"];
  const random = () => Math.floor(Math.random() * types.length);

  const newEinsatz = {
    id: emergencies.length + 1,
    type: types[random()],
    location: locations[random()],
    severity: ["Niedrig", "Mittel", "Hoch"][Math.floor(Math.random() * 3)]
  };

  emergencies.push(newEinsatz);
  renderEmergencies();
}

window.onload = () => {
  renderEmergencies();
  renderVehicles();
  initMap();
  setInterval(generateRandomEmergency, 30000);
};
