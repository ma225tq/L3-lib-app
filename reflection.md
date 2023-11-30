# Kapitel 2 & 3

Reflektioner finns i repot för biblioteket.

# Kapitel 4 - Kommentarer

Författaren menar att kommentarer ofta används för att kompensera för dåligt skriven kod. Istället för att skriva en massa kommentarer bör man skriva självklar kod.

Om man ändå känner att kommentarer behövs ska de ge kontext eller motivation till att man gör en viss sak i koden, och inte vara upprepande eller uppenbara.

Ett exempel på ett ställe där jag känner att kommentarerna tillför något är: img/Screenshot 2023-11-30 at 20.18.19.png

Har man inte sett mitt bibliotek är det inte självklart att första argumentet alltid ska vara en sträng, eller att vissa funktioner kräver en int.

# Kapitel 5 - Formatering

Kod ska kunna läsas uppifrån och ner, som en tidningsartikel. ("The newspaper metaphor")

Det bör finnas tomrum mellan olika koncept, medan sammanhängande koncept ska vara nära. Ett exempel på detta är 
img/Screenshot 2023-11-30 at 20.27.37.png, där funktionen anropar en hjälpfunktion som ligger direkt under.

# Kapitel 6 - Objects and data structures

"The law of demeter": metod *f* från klass *C* ska endast anropa metoder i *C* eller objekt skapade av *C*.

"Train wrecks" är när man kör funktionsanrop på funktionsanrop på en variabel. img/Screenshot 2023-11-30 at 20.37.07.png är ett utmärkt exempel på kod som bryter helt mot denna regel. Mitt rättfärdigande är att det inte är svårt att förstå vad denna funktion gör utifrån namnet, och det finns ingen anledning till att modifiera den i framtiden eller överblicka varenda rad på en sekund. Vill man modifiera den så skulle den inte längre uppfylla sitt syfte och då kan man lika gärna ta bort den och / eller skapa en ny funktion. Det hade blivit många fler rader kod och en massa upprepningar av variabelnamnet om man inte skrev den som ett "train wreck". Men i andra fall undviker jag det.

# Kapitel 7 - Error Handling

Felhantering är viktigt men den ska inte vara i vägen för att man ska kunna förstå kodlogiken.

Använd undantag med kontext istället för att returnera felkoder.

fixa bibliotek!!

# Kapitel 8 - Boundaries

Använd tredjepartskod utan att låta den 


# Kapitel 9 - Unit tests

Det finns tre regler för testdriven utveckling:

Man ska inte skriva produktionskod förrän du har skrivit ett test som misslyckas.

Man ska inte skriva ett större enhetstest än vad som krävs för att misslyckas. Att koden inte går att kompilera är ett misslyckande.

Man ska inte skriva mer produktionskod än vad som krävs för att passera det tidigare misslyckande testet.

Testen ska hålla lika hög kodkvalitet som resten av koden och varje test ska endast testa en sak.

Enligt "F.I.R.S.T" ska testen vara fast, independent, repeateable och self-validating.

# Kapitel 10 - Classes

Klasser ska ha besläktade metoder nära varandra. Metoder ska endast vara publika om det är absolut nödvändigt. Klasserna ska vara så små som möjligt och endast vara beroende av abstraktioner, inte konkreta implementationer.

# Kapitel 11 - Systems

Att bygga ett system är en annan sak än att använda det. 

Använd oo-principer såsom dependency injection i en main-metod eller factories för att skapa system. Detta ger bättre kontroll över olika komponenters livscykler.

Håll olika ansvarsområden separerade och se till att systemet är skalbart.


