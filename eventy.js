// Plik: eventy.js

function pobierzZdarzenia(gracz) {
    let marki = ["Unicorn", "Target", "Winmau", "Red Dragon", "KGHM", "Shot", "Loxley"];
    let wagi = ["18g", "20g", "22g", "23g", "24g", "25g", "26g"];
    let losowaMarka = marki[Math.floor(Math.random() * marki.length)];
    let losowaWaga = wagi[Math.floor(Math.random() * wagi.length)];

    return [
        // STANDARDOWE
        {
            tekst: "Koledzy z drużyny proponują chlanie wódki do 4 rano na dzień przed ważnym turniejem.",
            opcje: [
                { tekst: "Piję. Dart to sport barowy.", wplywSr: -6, wplywMen: 20, wplywPop: 5, wplywKasa: -200 },
                { tekst: "Odmawiam. Pełen profesjonalizm.", wplywSr: 3, wplywMen: -10, wplywPop: -2, wplywKasa: 0 }
            ]
        },
        {
            tekst: "Dostajesz zaproszenie do podrzędnego podcastu o rzucaniu do tarczy.",
            opcje: [
                { tekst: "Idę tam i opowiadam kontrowersyjne bzdury.", wplywSr: 0, wplywMen: 0, wplywPop: 15, wplywKasa: 500 },
                { tekst: "Trenuję, zamiast gadać w internecie.", wplywSr: 4, wplywMen: -5, wplywPop: -5, wplywKasa: 0 }
            ]
        },
        // NOWE ZGODNIE Z TWOIM WIDZIMISIĘ
        {
            tekst: `W sklepie Dartshopper zauważasz promocję na lotki ${losowaMarka} ${losowaWaga}. Twój obecny sprzęt to ${gracz.marka} ${gracz.waga}.`,
            opcje: [
                { tekst: "Kupuję i natychmiast zmieniam sprzęt.", akcja: "zmiana_lotek", marka: losowaMarka, waga: losowaWaga },
                { tekst: "Nie kupuję u Holendra.", wplywSr: 0, wplywMen: 0, wplywPop: 0, wplywKasa: 0 }
            ]
        },
        {
            tekst: `Dart Leżajsk wrzuca na Facebooka wygenerowany w AI obrazek z twoją twarzą i wielkim napisem: "Rzucaj jak ${gracz.imie} ${gracz.pseudonim}".`,
            opcje: [
                { tekst: "Zostawiam lajka, nieważne że mam 7 palców i trzymam lotkę za piórka.", wplywSr: 0, wplywMen: -2, wplywPop: 5, wplywKasa: 0 },
                { tekst: "Wyśmiewam ten AI slop w komentarzu.", akcja: "ai_slop" }
            ]
        },
        {
            tekst: "Dziwne konto na Instagramie pisze do ciebie z ofertą. Gość proponuje ci 10 000 złotych i nową pralkę za przegranie najbliższego meczu do zera.",
            opcje: [
                { tekst: "Biorę to. Pralka mi się popsuła.", akcja: "ustawka" },
                { tekst: "Nawet nie odpisuję. Jestem sportowcem z zasadami.", wplywSr: 0, wplywMen: 5, wplywPop: 0, wplywKasa: 0 }
            ]
        }
    ];
}
