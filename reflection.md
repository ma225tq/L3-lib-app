# Kapitel 2 & 3

[Reflektioner finns i repot för biblioteket.](https://github.com/ma225tq/stringManipulationLib/blob/L2/reflektion.md)

# Kapitel 4 - Kommentarer

Författaren menar att kommentarer ofta används för att kompensera för dåligt skriven kod. Istället för att skriva en massa kommentarer bör man skriva självklar kod.

Om man ändå känner att kommentarer behövs ska de ge kontext eller motivation till att man gör en viss sak i koden, och inte vara upprepande eller uppenbara.

[Ett exempel på ett ställe där jag känner att kommentarerna tillför något.](./img/Screenshot%202023-11-30%20at%2020.18.19.png)

Har man inte sett mitt bibliotek är det inte självklart att första argumentet alltid ska vara en sträng, eller att vissa funktioner kräver en int.

# Kapitel 5 - Formatering

Kod ska kunna läsas uppifrån och ner, som en tidningsartikel. ("The newspaper metaphor")
Rader ska inte vara för långa och indentering ska användas. Hjälpfunktioner inom klasser ska vara privata.

Det bör finnas tomrum mellan olika koncept, medan sammanhängande koncept ska vara nära. [Ett exempel på detta.](./img/Screenshot%202023-11-30%20at%2020.27.37.png), där funktionen anropar en hjälpfunktion som ligger direkt under.

# Kapitel 6 - Objects and data structures

"The law of demeter": metod *f* från klass *C* ska endast anropa metoder i *C* eller objekt skapade av *C*.

Objekt ska dölja sin data och exponera metoder medan en datastruktur exponerar sin data. Objekt är bra när inkapsling och abstraktion är nödvändigt medan datastrukturer, som namnet skvallrar om, lämpar sig för mer transparant datalagring.

"Train wrecks" är när man kör funktionsanrop på funktionsanrop på en variabel. [Ett utmärkt exempel på kod som bryter helt mot denna regel](./img/Screenshot%202023-11-30%20at%2020.37.07.pn). Mitt rättfärdigande är att det inte är svårt att förstå vad denna funktion gör utifrån namnet, och det finns ingen anledning till att modifiera den i framtiden eller överblicka varenda rad på en sekund. Vill man modifiera den så skulle den inte längre uppfylla sitt syfte och då kan man lika gärna ta bort den och / eller skapa en ny funktion. Det hade blivit många fler rader kod och en massa upprepningar av variabelnamnet om man inte skrev den som ett "train wreck". Men i andra fall där det finns behov av att förstå koden i framtiden undviker jag det.

# Kapitel 7 - Error Handling

Felhantering är viktigt men den ska inte vara i vägen för att man ska kunna förstå kodlogiken.

Kasta undantag med kontext istället för att returnera felkoder. Returnera inte null. Håll try-catch separerat från business-logik.

I första versionen av mitt bibliotek hade jag felhantering i samma metoder som skulle manipulera inputen vilket gör logiken otydlig och metoderna väldigt långa. Jag har löst det genom att skapa privata metoder för att validera inputen i varje klass. Det är inte perfekt då det finns viss upprepning mellan de olika klasserna (t.ex har många klasser en metod som bara validerar att inputen är en sträng) men jag föredrog ändå detta istället för att skapa en ny klass för felhantering då detta skulle kunna vara mer förvirrande för användaren av mitt biblitotek.

[Exempel](./img/Screenshot%202023-11-30%20at%2022.34.47.png)

# Kapitel 8 - Boundaries

Använd tredjepartskod utan att låta den påverka din egen kodbas alltför mycket. Detta gör det enklare att hantera förändringar i tredjepartskoden. Använd wrappers runt externa API:er eller bibliotek för att inte bero på dem i för stor utsträckning.

Håll kod för gränssnitt separerad från business-logik. Detta är något som min applikation inte direkt efterföljer. 

# Kapitel 9 - Unit tests

Det finns tre regler för testdriven utveckling:

Man ska inte skriva produktionskod förrän du har skrivit ett test som misslyckas.

Man ska inte skriva ett större enhetstest än vad som krävs för att misslyckas.

Man ska inte skriva mer produktionskod än vad som krävs för att passera det tidigare misslyckande testet.

Testen ska hålla lika hög kodkvalitet som resten av koden och varje test ska endast testa en sak.

Enligt "F.I.R.S.T" ska testen vara fast, independent, repeateable och self-validating.

Mina tester efterföljer detta rätt bra, de testar endast en sak per test, de är oberoende genom att jag skapar ett nytt objekt innan varje test. [Exempel](./img/Screenshot%202023-11-30%20at%2023.17.43.png)

# Kapitel 10 - Classes

Klasser ska ha besläktade metoder nära varandra. Metoder ska endast vara publika om det är absolut nödvändigt. Klasserna ska vara så små som möjligt och endast vara beroende av abstraktioner, inte konkreta implementationer.

"Open-Closed Principle": Klasser ska kunna utökas utan att ändra befintlig kod. Detta tycker jag att klasserna i biblioteket efterföljer. Varje metod är specifik och påverkar inte något som den inte bör.

# Kapitel 11 - Systems

Att bygga ett system är en annan sak än att använda det. 

Använd oo-principer såsom dependency injection i en main-metod eller factories för att skapa komponenterna till systemet. Detta ger bättre kontroll över olika komponenters livscykler.

Håll olika ansvarsområden separerade och se till att systemet är skalbart. Återigen är det inget min applikation direkt efterföljer. Jag tänkte inte på att även appen skulle vara objektorienterad, så behöver jag skriva om den så blir det en mer MVC-liknande struktur med webbkomponenter och klasser.


