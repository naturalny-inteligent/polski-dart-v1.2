
function pobierzZdarzenia(gracz) {
    let marki = ["Unicorn", "Target", "Winmau", "Red Dragon", "KGHM", "Shot", "Loxley"];
    let wagi = ["18g", "20g", "22g", "23g", "24g", "25g", "26g"];
    let losowaMarka = marki[Math.floor(Math.random() * marki.length)];
    let losowaWaga = wagi[Math.floor(Math.random() * wagi.length)];

    return [
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
        },
        {
            tekst: "Spotykasz Krzysztofa Ratajskiego.",
            opcje: [
                { tekst: "Błagam na kolanach o zdjęcie i autograf.", wplywSr: 0, wplywMen: 5, wplywPop: 0, wplywKasa: 0 },
                { tekst: "Pytam o rady na przyszłość.", wplywSr: 1, wplywMen: 0, wplywPop: 0, wplywKasa: 0 }
            ]
        },
        {
            tekst: "Dostajesz zaproszenie do gry deblowej w Złotej Bili.",
            opcje: [
                { tekst: "Jadę!", akcja: "minigra_bila" },
                { tekst: "Nie jadę. Kolega się obrazi, ale trudno.", wplywSr: 0, wplywMen: 0, wplywPop: 0, wplywKasa: 0 }
            ]
        },
        {
            tekst: "Groty w twoich lotkach zaczynają wypadać z tarczy.",
            opcje: [
                { tekst: "Robię własne groty według poradnika Whitlocka.", wplywSr: 0, wplywMen: -2, wplywPop: 3, wplywKasa: 0 },
                { tekst: "Kupuję nową tarczę Winmau Blade X.", wplywSr: 0, wplywMen: 5, wplywPop: 0, wplywKasa: -600 }
            ]
        },
        {
            tekst: "Kluczowy moment sezonu! Trafiasz do finału ważnego turnieju. Decydujący leg, jesteś przy tarczy. 40 punktów do końca.",
            opcje: [
                { tekst: "Podchodzę do oche. Zrobię to!", akcja: "mecz_timing" }
            ]
        },
        {
            tekst: "Telewizja ANAL+ chce, żebyś wystąpił w reklamie ich stacji.",
            opcje: [
                { tekst: "Jestem chętny. Sława i pieniądze.", wplywSr: 0, wplywMen: 0, wplywPop: 10, wplywKasa: 1000 },
                { tekst: "Wolę potrenować.", akcja: "trening_zamiast_anal" }
            ]
        },
        // NOWE ZDARZENIA:
        {
            tekst: "Na backstage'u znany darter przed zawodami zażywa biały proszek.",
            opcje: [
                { tekst: "Proszę, żeby mnie poczęstował.", akcja: "bialy_proszek" },
                { tekst: "Podpierdalam go komu trzeba.", wplywSr: 0, wplywMen: 20, wplywPop: 0, wplywKasa: 0 }
            ]
        },
        {
            tekst: "Stoisz przed wielką szansą! Kończysz 'Big Fisha'. Trafiłeś dwie potrójne 20, został rzut w czerwony środek.",
            opcje: [
                { tekst: "Rzucam!", akcja: "mecz_bullseye" }
            ]
        }
    ];
}
