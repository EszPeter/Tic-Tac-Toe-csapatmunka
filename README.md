# Projekt Dokumentáció: Tic-Tac-Toe (Amőba)

## 1. Felhasználói dokumentáció

### Az alkalmazás célja
Egy klasszikus 3x3-as amőba játék, ahol két játékos (X és O) mérheti össze tudását. A program figyeli a győzelmi kondíciókat és vezeti a pontszámot.

### Hogyan kell elindítani?
1. Töltse le a projekt fájljait (`index.html`, `style.css`, `script.js`).
2. Győződjön meg róla, hogy mindhárom fájl egy mappában található.
3. Nyissa meg az `index.html` fájlt bármilyen modern webböngészőben (Chrome, Firefox, Edge, Safari).

### Használati útmutató
- **Játék menete:** A játékot az "X" játékos kezdi. Kattintson a rács bármelyik üres mezőjére a jel elhelyezéséhez. Ezután az "O" játékos következik.
- **Győzelem:** Az a játékos nyer, akinek sikerül vízszintesen, függőlegesen vagy átlósan 3 azonos jelet elhelyeznie.
- **Új kör:** A kör végén (győzelem vagy döntetlen esetén) az "Új kör" gombbal lehet alaphelyzetbe állítani a táblát.
- **Pontszámok:** A rendszer automatikusan menti az állást a böngészőben. A "Nullázás" gombbal a pontszámok törölhetőek.

---

## 2. Fejlesztői dokumentáció

### Architektúra
Az alkalmazás a klasszikus **HTML-CSS-JS** trióra épül:
- **HTML:** A szerkezeti felépítésért felel (3x3-as rács, gombok, ponttábla).
- **CSS:** A modern, reszpontzív megjelenésért felel.
- **JavaScript:** A játéklogika, az állapotkezelés és az adattárolás (LocalStorage) motorja.

### Főbb függvények és működés
- `kattintas(index)`: Kezeli a felhasználói interakciót. Ellenőrzi, hogy a mező üres-e, majd elhelyezi a jelet.
- `ellenorzes()`: A játék legfontosabb része. Végigfut a `nyeroMintak` tömbön, és összehasonlítja a tábla aktuális állapotát a lehetséges nyerő kombinációkkal. Kezeli a döntetlent is.
- `mentes()` és `pontFrissites()`: A `localStorage` segítségével elmenti az aktuális állást, így az oldal frissítése után sem vesznek el a pontok.
- `ujJatek()`: Alaphelyzetbe állítja a változókat (`tabla`, `aktiv`) és kiüríti a felületet a következő körhöz.

### Adatszerkezetek
- `tabla`: Egy 9 elemű string tömb, amely a mezők állapotát tárolja ("X", "O" vagy üres).
- `nyeroMintak`: Egy fix, beágyazott tömb, amely a győzelemhez szükséges index-kombinációkat tartalmazza.
- `pontok`: Egy objektum, amely a játékosok pontszámait tárolja (`{X: 0, O: 0}`).

---

## 3. Tesztelési jegyzőkönyv

A tesztelés manuálisan történt az alábbi funkcionális tesztesetek alapján:

| Teszteset | Bemenet / Művelet | Elvárt kimenet | Valós kimenet | Állapot |
| :--- | :--- | :--- | :--- | :--- |
| **1. Győzelem ellenőrzése** | X jelek elhelyezése a [0, 1, 2] pozíciókba. | A státusz sorban megjelenik: "Győztes: X", az X pontszáma nő. | A státusz frissült, pont hozzáadva. | Megfelelt |
| **2. Foglalt mező teszt** | Egy már kitöltött mezőre (pl. c0) való ismételt kattintás. | A mező tartalma nem változik, a játékos marad ugyanaz. | Nem történt változás, a logika helyes. | Megfelelt |
| **3. Pontszám mentése** | Oldal frissítése (F5) győztes kör után. | A pontszámoknak meg kell maradniuk a kijelzőn. | A pontszámok sikeresen betöltődtek a LocalStorage-ból. | Megfelelt |
