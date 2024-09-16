    
// Funktion zum Mischen des Arrays basierend auf einem Seed (der Game ID)
function shuffleArray(array, seed) {
    let currentIndex = array.length, randomIndex;
    const random = (seed) => {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    // Während noch Elemente vorhanden sind, welche gemischt werden sollen
    while (currentIndex != 0) {
        // Wähle ein verbleibendes Element aus
        randomIndex = Math.floor(random(seed) * currentIndex);
        currentIndex--;

        // Tausche es mit dem aktuellen Element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

const fragen = {
            "ET01": [
                { q: "Wie hoch ist die Spannung in einer typischen Haushaltssteckdose in Deutschland?", a: 230, unit: "Volt" },
                { q: "Wie viele Ampere hat eine Standard-Sicherung in einem Haushalt?", a: 16, unit: "Ampere" },
                { q: "Wie viel Watt verbraucht eine durchschnittliche LED-Glühbirne?", a: 8.5, unit: "Watt" },
                { q: "Wie lang ist ein typisches Stromkabel für Haushaltsgeräte?", a: 1.5, unit: "Meter" },
                { q: "Wie viel Strom verbraucht ein durchschnittlicher Kühlschrank pro Jahr?", a: 150, unit: "Kilowattstunden" },
               { q: "Wie viele Volt hat eine typische AA-Batterie?", a: 1.5, unit: "Volt" },
                { q: "Wie viel Watt hat eine durchschnittliche Mikrowelle?", a: 800, unit: "Watt" },
                { q: "Wie viele Ampere kann ein USB-Anschluss typischerweise liefern?", a: 0.5, unit: "Ampere" },
                { q: "Wie viel Energie speichert eine typische Powerbank?", a: 10000, unit: "Milliamperestunden" },
                { q: "Wie viele Watt verbraucht ein durchschnittlicher Laptop?", a: 50, unit: "Watt" },
                { q: "Wie viele Volt hat ein Autobatterie?", a: 12, unit: "Volt" },
                { q: "Wie viel Strom verbraucht eine Waschmaschine pro Waschgang durchschnittlich?", a: 1, unit: "Kilowattstunde" },
                { q: "Wie viele Watt hat eine typische Stereoanlage?", a: 100, unit: "Watt" },
                { q: "Wie viel Strom verbraucht ein Fernseher pro Stunde im Durchschnitt?", a: 0.1, unit: "Kilowattstunden" },
                { q: "Wie viele Ampere hat ein typischer Haartrockner?", a: 10, unit: "Ampere" },
                { q: "Wie viel Energie verbraucht ein Smartphone beim einmaligen vollständigen Aufladen?", a: 0.01, unit: "Kilowattstunden" },
            ],

    "ET02": [ // Elektrotechnik Schwer
        { q: "Wie hoch ist die Spannung in einem Hochspannungsnetz zur Stromübertragung?", a: 380000, unit: "Volt" },
        { q: "Wie viele Ampere fließen typischerweise durch einen Blitzableiter bei einem Blitzeinschlag?", a: 30000, unit: "Ampere" },
        { q: "Wie viele Watt Leistung hat ein großes Windrad?", a: 5000000, unit: "Watt" },
        { q: "Wie hoch ist der Wirkungsgrad eines modernen Solarpanels?", a: 22, unit: "Prozent" },
        { q: "Wie viele Volt hat eine Zelle in einer Lithium-Ionen-Batterie?", a: 3.7, unit: "Volt" },
        { q: "Wie viele Ampere fließen durch eine 100-Watt-Glühbirne bei 230 Volt?", a: 0.43, unit: "Ampere" },
        { q: "Wie viele Kilovoltampere (kVA) hat ein typischer Transformator in einer Ortsnetzstation?", a: 630, unit: "Kilovoltampere" },
        { q: "Wie viele Milliohm Widerstand hat ein Meter Kupferdraht mit 1mm² Querschnitt?", a: 17.2, unit: "Milliohm" },
        { q: "Wie viele Mikrofarad Kapazität hat ein typischer Entstörkondensator in einem Netzteil?", a: 0.1, unit: "Mikrofarad" },
        { q: "Wie viele Henry Induktivität hat eine typische Drossel in einem Schaltnetzteil?", a: 0.001, unit: "Henry" },
        { q: "Wie viele Elektronenvolt Energie benötigt man, um ein Elektron aus einem Kupferatom zu lösen?", a: 7.7, unit: "Elektronenvolt" },
        { q: "Wie viele Tesla magnetische Flussdichte erzeugt ein starker Neodym-Magnet?", a: 1.3, unit: "Tesla" },
        { q: "Wie viele Hertz hat die Taktfrequenz eines modernen Mikroprozessors?", a: 3500000000, unit: "Hertz" },
        { q: "Wie viele Watt pro Quadratmeter Strahlungsleistung sendet die Sonne zur Erde?", a: 1361, unit: "Watt pro Quadratmeter" },
        { q: "Wie viele Coulomb elektrische Ladung fließen durch einen 1-Ampere-Strom in einer Sekunde?", a: 1, unit: "Coulomb" },
        { q: "Wie viele Ohm Widerstand hat ein typisches Multimeter im Strommessmodus?", a: 0.1, unit: "Ohm" },
    ],

    "BT01": [ // Bautechnik Leicht
        { q: "Wie hoch ist ein durchschnittliches Einfamilienhaus in Deutschland?", a: 7.5, unit: "Meter" },
        { q: "Wie dick ist eine Standard-Innenwand in einem modernen Haus?", a: 11.5, unit: "Zentimeter" },
        { q: "Wie viele Ziegel werden für 1 m² Mauer benötigt?", a: 55, unit: "Stück" },
        { q: "Wie viel wiegt ein Kubikmeter Beton?", a: 2400, unit: "Kilogramm" },
        { q: "Wie lang ist eine Standard-Europalette?", a: 120, unit: "Zentimeter" },
        { q: "Wie hoch ist eine typische Zimmerdecke in einem Wohnhaus?", a: 250, unit: "Zentimeter" },
        { q: "Wie breit ist eine normale Haustür?", a: 90, unit: "Zentimeter" },
        { q: "Wie viele Liter Farbe benötigt man für 10 m² Wandfläche?", a: 1, unit: "Liter" },
        { q: "Wie viele Kilogramm wiegt ein Standard-Ziegelstein?", a: 2.5, unit: "Kilogramm" },
        { q: "Wie dick ist eine typische Dämmschicht im Dach?", a: 20, unit: "Zentimeter" },
        { q: "Wie viele Quadratmeter Wohnfläche hat eine durchschnittliche 3-Zimmer-Wohnung?", a: 75, unit: "Quadratmeter" },
        { q: "Wie viele Stufen hat eine typische Treppe zwischen zwei Stockwerken?", a: 16, unit: "Stufen" },
        { q: "Wie hoch ist ein Standard-Fensterbankett?", a: 80, unit: "Zentimeter" },
        { q: "Wie viele Liter Wasser enthält ein Kubikmeter Frischbeton?", a: 150, unit: "Liter" },
        { q: "Wie viele Quadratmeter deckt ein 25-kg-Sack Fliesenkleber ab?", a: 5, unit: "Quadratmeter" },
        { q: "Wie lang ist ein Standard-Gipskartonplatte?", a: 250, unit: "Zentimeter" },
    ],

    "BT02": [ // Bautechnik Schwer
        { q: "Wie hoch ist der höchste Wolkenkratzer der Welt (Burj Khalifa)?", a: 828, unit: "Meter" },
        { q: "Wie lang ist die längste Brücke der Welt (Danyang–Kunshan Grand Bridge)?", a: 164800, unit: "Meter" },
        { q: "Wie viele Tonnen Stahl wurden für den Eiffelturm verwendet?", a: 7300, unit: "Tonnen" },
        { q: "Wie tief ist das tiefste Bohrloch der Welt (Kola-Bohrung)?", a: 12262, unit: "Meter" },
        { q: "Wie viele Kubikmeter Beton wurden für den Drei-Schluchten-Damm in China verwendet?", a: 27200000, unit: "Kubikmeter" },
        { q: "Wie dick ist die dickste Betonmauer der Welt (Grand Coulee Dam)?", a: 150, unit: "Meter" },
        { q: "Wie viele Tonnen wiegt die schwerste von Menschen bewegte Steinstruktur (Ramses-II-Statue)?", a: 1000, unit: "Tonnen" },
        { q: "Wie hoch ist der höchste Damm der Welt (Jinping-I-Talsperre)?", a: 305, unit: "Meter" },
        { q: "Wie lang ist der längste Tunnel der Welt (Gotthard-Basistunnel)?", a: 57100, unit: "Meter" },
        { q: "Wie viele Quadratmeter Fläche hat das größte Gebäude der Welt (New Century Global Center)?", a: 1760000, unit: "Quadratmeter" },
        { q: "Wie viele Tonnen wiegt die schwerste Glocke der Welt (Zar-Kolokol)?", a: 201, unit: "Tonnen" },
        { q: "Wie viele Meter pro Sekunde fährt der schnellste Aufzug der Welt (Shanghai Tower)?", a: 20.5, unit: "Meter pro Sekunde" },
        { q: "Wie viele Grad Celsius hält der feuerfesteste Beton der Welt stand?", a: 1850, unit: "Grad Celsius" },
        { q: "Wie viele Pascal Druck hält der druckfesteste Beton der Welt aus?", a: 720000000, unit: "Pascal" },
        { q: "Wie viele Newtonmeter Drehmoment kann die größte Schraube der Welt (für Windkraftanlagen) aufnehmen?", a: 10000000, unit: "Newtonmeter" },
        { q: "Wie viele Quadratmeter Glas wurden für die Fassade des Burj Khalifa verwendet?", a: 142000, unit: "Quadratmeter" },
    ],
 "EVT1": [ // Entsorgungs- und Versorgungstechnik Leicht
        { q: "Wie viel Liter Wasser verbraucht eine durchschnittliche Toilettenspülung?", a: 7.5, unit: "Liter" },
        { q: "Wie hoch ist der durchschnittliche Wasserverbrauch pro Person pro Tag in Deutschland?", a: 120, unit: "Liter" },
        { q: "Wie viel Müll produziert ein Deutscher durchschnittlich pro Jahr?", a: 450, unit: "Kilogramm" },
        { q: "Wie viel Prozent des Hausmülls werden in Deutschland recycelt?", a: 67, unit: "Prozent" },
        { q: "Wie viele Liter Wasser verbraucht eine Waschmaschine pro Waschgang durchschnittlich?", a: 45, unit: "Liter" },
        { q: "Wie viele Kilogramm Papier verbraucht ein Deutscher durchschnittlich pro Jahr?", a: 220, unit: "Kilogramm" },
        { q: "Wie viele Liter Wasser werden für die Produktion einer Jeans benötigt?", a: 8000, unit: "Liter" },
        { q: "Wie viele Kilowattstunden Strom verbraucht ein durchschnittlicher 2-Personen-Haushalt pro Jahr?", a: 3000, unit: "Kilowattstunden" },
        { q: "Wie viele Liter Wasser verdunstet ein Mensch durchschnittlich pro Tag?", a: 2.5, unit: "Liter" },
        { q: "Wie viele Kilogramm Lebensmittel wirft ein Deutscher durchschnittlich pro Jahr weg?", a: 75, unit: "Kilogramm" },
        { q: "Wie viele Liter Wasser verbraucht man durchschnittlich für eine 5-minütige Dusche?", a: 60, unit: "Liter" },
        { q: "Wie viele Gramm Plastikmüll produziert ein Deutscher durchschnittlich pro Tag?", a: 110, unit: "Gramm" },
        { q: "Wie viele Liter Wasser werden für die Produktion eines Kilogramms Rindfleisch benötigt?", a: 15000, unit: "Liter" },
        { q: "Wie viele Kilogramm Elektroschrott produziert ein Deutscher durchschnittlich pro Jahr?", a: 20, unit: "Kilogramm" },
        { q: "Wie viele Liter Wasser verbraucht ein Geschirrspüler pro Spülgang durchschnittlich?", a: 12, unit: "Liter" },
        { q: "Wie viele Kilogramm CO2 produziert ein durchschnittlicher PKW pro 100 km Fahrt?", a: 12, unit: "Kilogramm" },
    ],
    "EVT2": [ // Entsorgungs- und Versorgungstechnik Schwer
        { q: "Wie viele Kubikmeter Erdgas verbraucht Deutschland pro Jahr?", a: 95000000000, unit: "Kubikmeter" },
        { q: "Wie viele Tonnen Müll werden weltweit pro Jahr produziert?", a: 2010000000, unit: "Tonnen" },
        { q: "Wie viele Liter Wasser werden weltweit pro Tag für die Industrie verbraucht?", a: 770000000000, unit: "Liter" },
        { q: "Wie viele Kilowattstunden Strom erzeugt das größte Solarkraftwerk der Welt pro Jahr?", a: 1177000000, unit: "Kilowattstunden" },
        { q: "Wie viele Tonnen Plastik landen jährlich in den Weltmeeren?", a: 8000000, unit: "Tonnen" },
        { q: "Wie viele Kubikmeter Wasser fasst der größte Staudamm der Welt (Drei-Schluchten-Damm)?", a: 39300000000, unit: "Kubikmeter" },
        { q: "Wie viele Kilometer lang ist das längste Unterwasser-Stromkabel der Welt?", a: 720, unit: "Kilometer" },
        { q: "Wie viele Tonnen Elektroschrott werden weltweit pro Jahr produziert?", a: 50000000, unit: "Tonnen" },
        { q: "Wie viele Liter Öl gelangen jährlich durch Unfälle ins Meer?", a: 1500000000, unit: "Liter" },
        { q: "Wie viele Quadratkilometer Regenwald werden pro Jahr abgeholzt?", a: 150000, unit: "Quadratkilometer" },
        { q: "Wie viele Tonnen Kohlendioxid speichert ein Hektar Regenwald pro Jahr?", a: 10, unit: "Tonnen" },
        { q: "Wie viele Meter tief liegt die tiefste Erdöl-Bohrung der Welt?", a: 12289, unit: "Meter" },
        { q: "Wie viele Kilogramm Uran werden jährlich weltweit abgebaut?", a: 54000000, unit: "Kilogramm" },
        { q: "Wie viele Liter Wasser werden für die Produktion eines Mikrochips benötigt?", a: 32, unit: "Liter" },
        { q: "Wie viele Tonnen Lebensmittel werden in Deutschland pro Jahr weggeworfen?", a: 12000000, unit: "Tonnen" },
        { q: "Wie viele Kilometer lang ist das längste Fernwärmenetz der Welt (in Kopenhagen)?", a: 167, unit: "Kilometer" },
    ],

      "IT01": [ // Informationstechnik Leicht
        { q: "Wie viele Bits sind in einem Byte?", a: 8, unit: "Bits" },
        { q: "Wie viel Speicherplatz hat eine typische DVD?", a: 4.7, unit: "Gigabyte" },
        { q: "Wie schnell ist eine durchschnittliche Internetverbindung in Deutschland?", a: 100, unit: "Mbit/s" },
        { q: "Wie viele Zeichen kann eine SMS maximal enthalten?", a: 160, unit: "Zeichen" },
        { q: "Wie viele Gigabyte Speicherplatz hat ein typisches Smartphone?", a: 128, unit: "Gigabyte" },
        { q: "Wie viele Megapixel hat die Hauptkamera eines durchschnittlichen Smartphones?", a: 12, unit: "Megapixel" },
        { q: "Wie viele Stunden Akkulaufzeit hat ein typisches Laptop?", a: 8, unit: "Stunden" },
        { q: "Wie viele Tasten hat eine Standard-QWERTZ-Tastatur?", a: 105, unit: "Tasten" },
        { q: "Wie viele Gigahertz Taktfrequenz hat ein durchschnittlicher Laptop-Prozessor?", a: 2.4, unit: "Gigahertz" },
        { q: "Wie viele Watt Leistung hat ein typisches Laptop-Netzteil?", a: 65, unit: "Watt" },
        { q: "Wie viele Millimeter dick ist ein modernes Smartphone?", a: 8, unit: "Millimeter" },
        { q: "Wie viele Gramm wiegt ein durchschnittliches Tablet?", a: 450, unit: "Gramm" },
        { q: "Wie viele Frames pro Sekunde werden bei den meisten Filmen verwendet?", a: 24, unit: "Frames pro Sekunde" },
        { q: "Wie viele Megabyte groß ist eine typische Musik-MP3-Datei?", a: 4, unit: "Megabyte" },
        { q: "Wie viele Jahre beträgt die durchschnittliche Lebensdauer eines Laptops?", a: 5, unit: "Jahre" },
        { q: "Wie viele Anschlüsse hat ein typischer USB-Hub?", a: 4, unit: "Anschlüsse" },
    ],

    "IT02": [ // Informationstechnik Schwer
        { q: "Wie viele Transistoren enthält ein moderner High-End-Prozessor?", a: 30000000000, unit: "Transistoren" },
        { q: "Wie viele Petabyte Daten werden täglich im Internet generiert?", a: 2500, unit: "Petabyte" },
        { q: "Wie viele Kilometer lang ist das längste Unterseekabel der Welt?", a: 39000, unit: "Kilometer" },
        { q: "Wie viele Gigabit pro Sekunde erreicht der schnellste kommerzielle Internetanschluss?", a: 10000, unit: "Gigabit pro Sekunde" },
        { q: "Wie viele Watt Leistung verbraucht ein typisches Rechenzentrum?", a: 5000000, unit: "Watt" },
        { q: "Wie viele Exabyte betrug das globale IP-Verkehrsvolumen im Jahr 2021?", a: 3300, unit: "Exabyte" },
        { q: "Wie viele Quadratnanometer groß ist die kleinste bekannte Transistorstruktur?", a: 1, unit: "Quadratnanometer" },
        { q: "Wie viele Bits pro Sekunde erreicht der schnellste optische Datentransfer im Labor?", a: 1000000000000000, unit: "Bits pro Sekunde" },
        { q: "Wie viele Qubits hat der leistungsfähigste Quantencomputer?", a: 127, unit: "Qubits" },
        { q: "Wie viele Teraflops Rechenleistung hat der schnellste Supercomputer der Welt?", a: 442000, unit: "Teraflops" },
        { q: "Wie viele Gigabyte Daten kann eine moderne DNA-Speichertechnik pro Kubikmillimeter speichern?", a: 215000, unit: "Gigabyte" },
        { q: "Wie viele Millisekunden Latenz hat eine Satelliteninternetverbindung durchschnittlich?", a: 600, unit: "Millisekunden" },
        { q: "Wie viele Gigahertz Taktrate erreicht der schnellste übertaktete PC-Prozessor?", a: 8.7, unit: "Gigahertz" },
        { q: "Wie viele Bits pro Sekunde überträgt ein einzelnes Neuron im menschlichen Gehirn?", a: 1, unit: "Bit pro Sekunde" },
        { q: "Wie viele Jahre soll eine auf Saphirplatten gespeicherte Daten-Zeitkapsel überdauern?", a: 1000000, unit: "Jahre" },
        { q: "Wie viele Kilobyte Arbeitsspeicher hatte der erste IBM PC?", a: 16, unit: "Kilobyte" },
    ],
        };

let currentQuestionIndex = 0;
let currentQuestions = [];
let gameID = '';

// Initialisiere die Seite, sobald das Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {
    // Setze initiale Game ID
    document.getElementById('game-id').value = generateGameID();

    // Neue Game ID generieren
    document.getElementById('generate-game-id').addEventListener('click', () => {
        document.getElementById('game-id').value = generateGameID();
    });

    // Spiel starten
    document.getElementById('start-game').addEventListener('click', () => {
        const themenID = document.getElementById('themen-id').value.toUpperCase();
        gameID = document.getElementById('game-id').value;

        // Überprüfen, ob die Themen-ID existiert
        if (fragen[themenID]) {
            // Fragen für die Themen-ID laden
            currentQuestions = fragen[themenID];

            // Seed für das Mischen der Fragen setzen (basierend auf der Game ID)
            const seed = gameID.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

            // Fragen zufällig mischen basierend auf der Game ID
            currentQuestions = shuffleArray(currentQuestions, seed);

            // Verstecke das Setup und zeige das Spiel an
            document.getElementById('setup').style.display = 'none';
            document.getElementById('game-area').style.display = 'block';

            // Zeige die erste Frage
            showNextQuestion();
        } else {
            alert('Ungültige Themen-ID! Bitte versuche es erneut.');
        }
    });

    // Antwort einreichen und Abweichung anzeigen
    document.getElementById('submit-answer').addEventListener('click', () => {
        const userAnswer = parseFloat(document.getElementById('answer-input').value);
        const correctAnswer = currentQuestions[currentQuestionIndex].a;  // Korrekte Antwort
        const unit = currentQuestions[currentQuestionIndex].unit;  // Einheit hinzufügen
        const deviation = Math.abs(userAnswer - correctAnswer);  // Berechne Abweichung

        // Zeige die richtige Antwort und die Abweichung an, inklusive der Einheit
        document.getElementById('correct-value').textContent = `${correctAnswer} ${unit}`;
        document.getElementById('deviation-value').textContent = `${deviation.toFixed(2)} ${unit}`;

        document.getElementById('question-area').style.display = 'none';
        document.getElementById('result-area').style.display = 'block';

    }

    // Antwort einreichen und Abweichung anzeigen
    function submitAnswer() {
        const userAnswer = parseFloat(document.getElementById('answer-input').value);
        const correctAnswer = currentQuestions[currentQuestionIndex].a;  // Korrekte Antwort
        const unit = currentQuestions[currentQuestionIndex].unit;  // Einheit hinzufügen
        const deviation = Math.abs(userAnswer - correctAnswer);  // Berechne Abweichung

        // Zeige die richtige Antwort und die Abweichung an, inklusive der Einheit
        document.getElementById('correct-value').textContent = `${correctAnswer} ${unit}`;
        document.getElementById('deviation-value').textContent = `${deviation.toFixed(2)} ${unit}`;

        document.getElementById('question-area').style.display = 'none';
        document.getElementById('result-area').style.display = 'block';
    }

    // Button zum Einreichen der Antwort
    document.getElementById('submit-answer').addEventListener('click', submitAnswer);

    // Antwort mit der Enter-Taste einreichen
    document.getElementById('answer-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            submitAnswer();
        }  

    });

    // Nächste Frage anzeigen
    document.getElementById('next-question').addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showNextQuestion();
        } else {
            alert('Das Spiel ist beendet!');
            window.location.reload();
        }
    });
});

// Funktion zum Generieren einer zufälligen Game ID
function generateGameID() {
    return Math.random().toString(36).substr(2, 5).toUpperCase();
}

// Zeige die nächste Frage inklusive der Einheit
function showNextQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const questionText = currentQuestion.q;
    const unit = currentQuestion.unit; // Einheit der Antwort hinzufügen

    // Frage anzeigen mit der Einheit der Antwort
    document.getElementById('question-text').textContent = `${questionText} (in ${unit})`;

    // Eingabefeld leeren und Bereiche anzeigen
    document.getElementById('answer-input').value = '';
    document.getElementById('question-area').style.display = 'block';
    document.getElementById('result-area').style.display = 'none';
}
       
