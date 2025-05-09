
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

function renderEmergencies() {
  const panel = document.getElementById("emergency-list");
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

  const log = document.getElementById("log-list");
  const entry = document.createElement("li");
  entry.textContent = `${vehicle.id} wurde zu ${emergency.type} nach ${emergency.location} geschickt.`;
  log.appendChild(entry);
}

window.onload = () => {
  renderEmergencies();
  renderVehicles();
};
