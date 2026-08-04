const bazaTurniejow = [
    // TIER 5 - Poziom amatorski (Średnie 35-50)
    { nazwa: "Gra z botami", tier: 5, etapy: [{ faza: "Trening", sr: 35 }] },
    { nazwa: "Gra online na Dartcounterze", tier: 5, etapy: [{ faza: "Mecz", sr: 45 }] },
    { nazwa: "Gra z kolegami przy piwie", tier: 5, etapy: [{ faza: "Mecz przy barze", sr: 42 }] },

    // TIER 4 - Turnieje lokalne i początkujące (Średnie 55-65)
    { nazwa: "Przypadkowe turnieje (50 km od domu)", tier: 4, etapy: [{ faza: "Grupa", sr: 50 }, { faza: "1/16 Finału", sr: 52 }, { faza: "1/8 Finału", sr: 54 }, { faza: "Ćwierćfinał", sr: 56 }, { faza: "Półfinał", sr: 58 }, { faza: "Finał", sr: 60 }] },
    { nazwa: "Poznań Darts Club (Początkujący)", tier: 4, etapy: [{ faza: "Grupa", sr: 52 }, { faza: "1/8 Finału", sr: 54 }, { faza: "Ćwierćfinał", sr: 56 }, { faza: "Półfinał", sr: 58 }, { faza: "Finał", sr: 60 }] },
    { nazwa: "Turnieje na Hali Świebodzki", tier: 4, etapy: [{ faza: "Grupa", sr: 55 }, { faza: "1/8 Finału", sr: 57 }, { faza: "Ćwierćfinał", sr: 59 }, { faza: "Półfinał", sr: 61 }, { faza: "Finał", sr: 63 }] },
    { nazwa: "Turnieje Steel Łódź", tier: 4, etapy: [{ faza: "Grupa", sr: 55 }, { faza: "1/16 Finału", sr: 57 }, { faza: "1/8 Finału", sr: 59 }, { faza: "Ćwierćfinał", sr: 61 }, { faza: "Półfinał", sr: 63 }, { faza: "Finał", sr: 65 }] },
    { nazwa: "Dolnośląska Liga Darta", tier: 4, etapy: [{faza: "Ćwierćfinał", sr: 48 }, { faza: "Półfinał", sr: 53 }, { faza: "Finał", sr: 60 }, { faza: "Zwycięstwo", sr: 67 }] },
    { nazwa: "Warszawska Liga Darta", tier: 4, etapy: [{ faza: "Ćwierćfinał", sr: 51 }, { faza: "Półfinał", sr: 55 }, { faza: "Finał", sr: 65 }, { faza: "Zwycięstwo", sr: 70 }] },

    // TIER 3 - Poważne rozgrywki krajowe
    { nazwa: "Bielska Liga Darta", tier: 3, etapy: [{ faza: "Kwalifikacje", sr: 65 }, { faza: "1/32 Finału", sr: 68 }, { faza: "1/16 Finału", sr: 70 }, { faza: "1/8 Finału", sr: 72 }, { faza: "Ćwierćfinał", sr: 74 }, { faza: "Półfinał", sr: 76 }, { faza: "Finał", sr: 78 }] },
    { nazwa: "Winmau Grand Prix POD", tier: 3, etapy: [{ faza: "Grupa", sr: 68 }, { faza: "1/32 Finału", sr: 70 }, { faza: "1/16 Finału", sr: 72 }, { faza: "1/8 Finału", sr: 74 }, { faza: "Ćwierćfinał", sr: 76 }, { faza: "Półfinał", sr: 78 }, { faza: "Finał", sr: 80 }] },
    { nazwa: "Cykl Pucharu Polski POD", tier: 3, etapy: [{ faza: "Grupa", sr: 70 }, { faza: "1/32 Finału", sr: 72 }, { faza: "1/16 Finału", sr: 74 }, { faza: "1/8 Finału", sr: 76 }, { faza: "Ćwierćfinał", sr: 78 }, { faza: "Półfinał", sr: 80 }, { faza: "Finał", sr: 83 }] },
    { nazwa: "Polska Liga Steeldarta", tier: 3, etapy: [{ faza: "Mecz Ligowy", sr: 78 }] },

    // TIER 2 - Przedsionek profesjonalizmu
    { nazwa: "Modus Super Series", tier: 2, etapy: [{ faza: "Grupa A/B/C", sr: 84 }, { faza: "Faza Zwycięzców", sr: 86 }, { faza: "Półfinał Tygodnia", sr: 88 }, { faza: "Finał Tygodnia", sr: 90 }] },
    { nazwa: "Players Championship", tier: 2, etapy: [{ faza: "1/64 Finału", sr: 85 }, { faza: "1/32 Finału", sr: 87 }, { faza: "1/16 Finału", sr: 89 }, { faza: "1/8 Finału", sr: 91 }, { faza: "Ćwierćfinał", sr: 93 }, { faza: "Półfinał", sr: 95 }, { faza: "Finał", sr: 97 }] },
    { nazwa: "Development Tour", tier: 2, etapy: [{ faza: "1/128 Finału", sr: 82 }, { faza: "1/64 Finału", sr: 84 }, { faza: "1/32 Finału", sr: 86 }, { faza: "1/16 Finału", sr: 88 }, { faza: "1/8 Finału", sr: 90 }, { faza: "Ćwierćfinał", sr: 92 }, { faza: "Półfinał", sr: 94 }, { faza: "Finał", sr: 96 }] },

    // TIER 1 - Pro Tour
    { nazwa: "Players Championship", tier: 1, etapy: [{ faza: "1/64 Finału", sr: 90 }, { faza: "1/32 Finału", sr: 92 }, { faza: "1/16 Finału", sr: 94 }, { faza: "1/8 Finału", sr: 96 }, { faza: "Ćwierćfinał", sr: 98 }, { faza: "Półfinał", sr: 100 }, { faza: "Finał", sr: 102 }] },
    { nazwa: "European Tour", tier: 1, etapy: [{ faza: "Runda 1 (1/24)", sr: 92 }, { faza: "Runda 2 (1/16)", sr: 94 }, { faza: "1/8 Finału", sr: 96 }, { faza: "Ćwierćfinał", sr: 98 }, { faza: "Półfinał", sr: 100 }, { faza: "Finał", sr: 103 }] },

    // TIER 0 - Telewizyjne Majory
    { nazwa: "Majory (PDC)", tier: 0, etapy: [{ faza: "Runda 1", sr: 95 }, { faza: "Runda 2", sr: 97 }, { faza: "Runda 3", sr: 99 }, { faza: "1/8 Finału", sr: 101 }, { faza: "Ćwierćfinał", sr: 103 }, { faza: "Półfinał", sr: 105 }, { faza: "Finał", sr: 108 }] }
];

const bazaZawodnikow = [
    // TIER 0 - Elita
    { imie: "Luke", nazwisko: "Littler", srednia: 110, tier: 0 },
    { imie: "Luke", nazwisko: "Humphries", srednia: 106, tier: 0 },
    { imie: "Michael", nazwisko: "van Gerwen", srednia: 99, tier: 0 },
    { imie: "Michael", nazwisko: "Smith", srednia: 98, tier: 0 },
    { imie: "Gerwyn", nazwisko: "Price", srednia: 98, tier: 0 },
    { imie: "Rob", nazwisko: "Cross", srednia: 97, tier: 0 },
    { imie: "James", nazwisko: "Wade", srednia: 95, tier: 0 },

    // TIER 1 - Czołówka i mocni gracze Touru
    { imie: "Dave", nazwisko: "Chisnall", srednia: 96, tier: 1 },
    { imie: "Damon", nazwisko: "Heta", srednia: 95, tier: 1 },
    { imie: "Josh", nazwisko: "Rock", srednia: 95, tier: 1 },
    { imie: "Stephen", nazwisko: "Bunting", srednia: 95, tier: 1 },
    { imie: "Krzysztof", nazwisko: "Ratajski", srednia: 93, tier: 1 },
    { imie: "Martin", nazwisko: "Schindler", srednia: 94, tier: 1 },
    { imie: "Wesley", nazwisko: "Plaisier", srednia: 92, tier: 1 },

    // TIER 2 - Solidni gracze
    { imie: "Andy", nazwisko: "Baetens", srednia: 89, tier: 2 },
    { imie: "Radek", nazwisko: "Szagański", srednia: 88, tier: 2 },
    { imie: "Jelle", nazwisko: "Klaasen", srednia: 87, tier: 2 },
    { imie: "Leonard", nazwisko: "Gates", srednia: 87, tier: 2 },
    { imie: "Graham", nazwisko: "Hall", srednia: 86, tier: 2 },
    { imie: "Fallon", nazwisko: "Sherrock", srednia: 85, tier: 2 },
    { imie: "Derek", nazwisko: "Coulson", srednia: 84, tier: 2 },
    { imie: "Jasper", nazwisko: "Scarrott", srednia: 84, tier: 2 },
    { imie: "Ashley", nazwisko: "Coleman", srednia: 83, tier: 2 },
    { imie: "Dmitrii", nazwisko: "Rogov", srednia: 82, tier: 2 },

    // TIER 3 - Krajowa czołówka
    { imie: "Krzysztof", nazwisko: "Kciuk", srednia: 82, tier: 3 },
    { imie: "Tytus", nazwisko: "Kanik", srednia: 80, tier: 3 },
    { imie: "Tomasz", nazwisko: "Janeczek", srednia: 78, tier: 3 },
    { imie: "Mirosław", nazwisko: "Grudziecki", srednia: 77, tier: 3 },
    { imie: "Jakub", nazwisko: "Janaszkiewicz", srednia: 76, tier: 3 },

    // TIER 4 - Gracze lokalni z potencjałem
    { imie: "Dawid", nazwisko: "Lasek", srednia: 72, tier: 4 },
    { imie: "Damian", nazwisko: "Pałaszewski", srednia: 71, tier: 4 },
    { imie: "Tomasz", nazwisko: "Roszyk", srednia: 68, tier: 4 },
    { imie: "Kamil", nazwisko: "Zieliński", srednia: 66, tier: 4 },
    { imie: "Dominik", nazwisko: "Rojek", srednia: 65, tier: 4 }
];

// WYDARZENIA CYKLICZNE
const roczneWydarzenia = {
    mistrzostwaPolski: {
        nazwa: "Mistrzostwa Polski w Darcie",
        miesiac: 12,
        progKwalifikacji: 65, // Gracz musi mieć przynajmniej średnią 65, żeby w ogóle tu zagrać
        etapy: [
            { faza: "Faza Grupowa", wymaganaSrednia: 68 },
            { faza: "1/16 Finału", wymaganaSrednia: 72 },
            { faza: "Ćwierćfinał", wymaganaSrednia: 78 },
            { faza: "Półfinał", wymaganaSrednia: 82 },
            { faza: "Finał", wymaganaSrednia: 86 }
        ]
    }
};
