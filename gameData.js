
const vehiclesCatalog = [
    // Feuerwehr Fahrzeuge
    { name: "LF 10/20", type: "Löschfahrzeug", organization: "Feuerwehr", crewRequired: 6, specialEquipment: ["Atemschutz", "Wasserwerfer"], missionTags: ["Brandbekämpfung"] },
    { name: "TLF 3000", type: "Tanklöschfahrzeug", organization: "Feuerwehr", crewRequired: 5, specialEquipment: ["Schaumkanone"], missionTags: ["Brandbekämpfung"] },
    // Rettungsdienst Fahrzeuge
    { name: "RTW", type: "Rettungswagen", organization: "Rettungsdienst", crewRequired: 3, specialEquipment: ["Sanitätsausrüstung", "Trage"], missionTags: ["Notfall", "Transport"] },
    { name: "NEF", type: "Notarzteinsatzfahrzeug", organization: "Rettungsdienst", crewRequired: 2, specialEquipment: ["Notarzt", "Medikamente"], missionTags: ["Notfall"] },
    // Polizei Fahrzeuge
    { name: "FuStW", type: "Streifenwagen", organization: "Polizei", crewRequired: 2, specialEquipment: ["Blaulicht", "Sirene"], missionTags: ["Verkehrskontrolle", "Patrouille"] },
    { name: "Zivilwagen", type: "Zivilfahrzeug", organization: "Polizei", crewRequired: 2, specialEquipment: ["Blaulicht"], missionTags: ["Verbrechensbekämpfung"] },
    // THW Fahrzeuge
    { name: "GKW", type: "Gerätekraftwagen", organization: "THW", crewRequired: 5, specialEquipment: ["Lichtmast", "Bauausstattung"], missionTags: ["Technische Hilfeleistung"] },
    { name: "MzKW", type: "Mannschaftstransportwagen", organization: "THW", crewRequired: 4, specialEquipment: ["Transport", "Funk"], missionTags: ["Transport"] }
];

const buildingsCatalog = [
    { name: "Feuerwache", type: "Feuerwehr", location: "Stadtzentrum", capacity: 5, vehicles: ["LF 10/20", "TLF 3000"], equipment: ["Atemschutz", "Feuerlöscher"] },
    { name: "Rettungswache", type: "Rettungsdienst", location: "Stadtzentrum", capacity: 3, vehicles: ["RTW", "NEF"], equipment: ["Sanitätsausrüstung", "Medikamente"] },
    { name: "Polizeiwache", type: "Polizei", location: "Stadtzentrum", capacity: 4, vehicles: ["FuStW", "Zivilwagen"], equipment: ["Funkgeräte", "Schutzwesten"] }
];
    