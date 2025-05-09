
// Fahrzeug- und Gebäude-Daten für das Spiel
const vehiclesCatalog = [
    { name: "LF 10/20", type: "Löschfahrzeug", organization: "Feuerwehr", crewRequired: 6, specialEquipment: ["Atemschutz", "Wasserwerfer"], missionTags: ["Brandbekämpfung"] },
    { name: "TLF 3000", type: "Tanklöschfahrzeug", organization: "Feuerwehr", crewRequired: 5, specialEquipment: ["Schaumkanone"], missionTags: ["Brandbekämpfung"] },
    { name: "RTW", type: "Rettungswagen", organization: "Rettungsdienst", crewRequired: 3, specialEquipment: ["Sanitätsausrüstung", "Trage"], missionTags: ["Notfall", "Transport"] },
    { name: "NEF", type: "Notarzteinsatzfahrzeug", organization: "Rettungsdienst", crewRequired: 2, specialEquipment: ["Notarzt", "Medikamente"], missionTags: ["Notfall"] },
    { name: "FuStW", type: "Streifenwagen", organization: "Polizei", crewRequired: 2, specialEquipment: ["Blaulicht", "Sirene"], missionTags: ["Verkehrskontrolle", "Patrouille"] }
];

const buildingsCatalog = [
    { name: "Feuerwache", type: "Feuerwehr", location: "Stadtzentrum", capacity: 5, vehicles: ["LF 10/20", "TLF 3000"], equipment: ["Atemschutz", "Feuerlöscher"] },
    { name: "Rettungswache", type: "Rettungsdienst", location: "Stadtzentrum", capacity: 3, vehicles: ["RTW", "NEF"], equipment: ["Sanitätsausrüstung", "Medikamente"] },
    { name: "Polizeiwache", type: "Polizei", location: "Stadtzentrum", capacity: 4, vehicles: ["FuStW"], equipment: ["Funkgeräte", "Schutzwesten"] }
];

const incidents = [
    { id: 1, type: "Brand", description: "Großbrand im Industriegebiet", requiredVehicles: ["LF 10/20", "TLF 3000"], status: "offen" },
    { id: 2, type: "Unfall", description: "Autounfall auf der Autobahn", requiredVehicles: ["RTW", "NEF"], status: "offen" }
];
    