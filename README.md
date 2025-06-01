# Fangplaner
Eine app die in einer HTML läuft und auf seekarten um Leka in norwegen erlaubt marker zu setzen und seine Fänge zu dokumentieren.

Okay, hier ist eine ausführliche Funktionsbeschreibung für den "Heilbutt Hochseeangeln - GPS Seekarten Fangplaner". Diese Beschreibung erklärt alle Funktionen und deren Bedienung im Detail.

---

**Funktionsbeschreibung: Heilbutt Hochseeangeln - GPS Seekarten Fangplaner**

**1. Allgemeines und Zweck der Anwendung**

Diese Webanwendung ist ein umfassendes Werkzeug für passionierte Hochseeangler, insbesondere für das Angeln auf Heilbutt und andere Meeresfische. Sie dient zur Planung von Angeltouren, zur Navigation auf digitalen Seekarten (PDF-Format), zum Setzen und Verwalten von GPS-Markern (Angelspots, Strukturen etc.), zur Führung eines detaillierten Fangbuchs, zur Nutzung von Checklisten und zur schnellen Überprüfung von Wetter- und Gezeitendaten. Die gesamte Anwendung ist als einzelne HTML-Datei konzipiert, die offline (nach einmaligem Laden) im Browser verwendet werden kann. Alle Daten werden lokal im Browser gespeichert.

**2. Hauptnavigation (Nav-Tabs)**

Am oberen Bildschirmrand befindet sich die Hauptnavigation, die den Zugriff auf die verschiedenen Module der Anwendung ermöglicht:

*   **📍 Seekarten:** Der Hauptbereich für die Kartennavigation und Marker-Verwaltung.
*   **🐟 Fangbuch:** Zum Eintragen, Anzeigen und Verwalten aller gefangenen Fische.
*   **📅 Angelplaner:** Zur Planung von Aktivitäten und Spots für bestimmte Angeltage.
*   **✅ Checklisten:** Vordefinierte und anpassbare Checklisten für Ausrüstung, Sicherheit etc.
*   **🌊 Gezeiten/Wetter:** Links zu externen Diensten für aktuelle Gezeiten- und Wetterinformationen.

Durch Klicken auf einen Tab wird der entsprechende Inhaltsbereich unterhalb der Navigation angezeigt. Der aktive Tab ist farblich hervorgehoben.

**3. Modul: 📍 Seekarten**

Dies ist das Kernmodul der Anwendung.

*   **3.1. Karten- und GPS-Steuerung:**
    *   **GPS-Statusanzeige (oben im Kartenbereich):**
        *   Ein farbiger Punkt (Indikator) und Text zeigen den aktuellen GPS-Status:
            *   **Rot (GPS Inaktiv):** Kein GPS-Signal oder keine Erlaubnis erteilt. Für GPS-Nutzung ist eine sichere Verbindung (HTTPS) oder die Ausführung als lokale Datei sowie die Browser-Erlaubnis für den Standortzugriff notwendig.
            *   **Gelb (GPS Signal wird gesucht...):** Die Anwendung versucht, ein GPS-Signal zu empfangen.
            *   **Grün (pulsierend, GPS: Koordinaten (±Genauigkeit)):** GPS ist aktiv und liefert Positionsdaten mit der angezeigten Genauigkeit.
        *   **📡 GPS / ⏳ GPS... / 🛰️ GPS Aktiv / ⚠️ GPS Fehler Button:**
            *   Schaltet die GPS-Ortung ein oder aus.
            *   Der Text und das Aussehen des Buttons ändern sich je nach Status.
    *   **Kartenauswahl (Dropdown "Karte wählen..."):**
        *   Ermöglicht die Auswahl einer der hinterlegten PDF-Seekarten.
        *   Nach Auswahl einer Karte wird diese im Hauptfenster geladen und angezeigt. Die zuletzt ausgewählte Karte wird beim nächsten Start der App versucht wieder zu laden.
    *   **Zoom-Buttons (🔍+ / 🔍-):**
        *   Vergrößern oder verkleinern die Kartenansicht. Der Zoom erfolgt zentriert auf die aktuelle Kartenmitte.
    *   **Ansicht zurücksetzen (🔄):**
        *   Setzt den Zoom und die Kartenposition auf die ursprüngliche Ansicht zurück, sodass die gesamte Karte optimal in den Anzeigebereich passt.
    *   **Marker-Modus (📍 Marker / ✖️ Modus Beenden):**
        *   Aktiviert/Deaktiviert den Modus zum Setzen neuer Marker.
        *   Ist der Modus aktiv, ändert sich der Mauszeiger über der Karte zu einem Fadenkreuz. Ein Klick auf die Karte öffnet dann das "Marker Details"-Fenster, um einen neuen Marker an der geklickten Position zu erstellen.
    *   **Vollbild (🖼️ Vollbild / 🖼️ Verlassen):**
        *   Schaltet die Kartenansicht in den Vollbildmodus des Browsers und wieder zurück. Dies maximiert den sichtbaren Kartenbereich. Im Vollbildmodus ist das Setzen von Markern ebenfalls möglich.

*   **3.2. Kartenansicht (Map Viewer):**
    *   **Anzeige:** Zeigt die geladene PDF-Seekarte.
    *   **Interaktion:**
        *   **Panning (Verschieben):** Klicken und Ziehen mit der linken Maustaste auf der Karte verschiebt den sichtbaren Ausschnitt. Auf Touch-Geräten mit einem Finger wischen.
        *   **Zoomen per Mausrad:** Drehen des Mausrads über der Karte zoomt hinein oder heraus, zentriert auf die Mauszeigerposition.
        *   **Zoomen per Touch (Pinch-to-Zoom):** Auf Touch-Geräten kann mit zwei Fingern durch Auseinanderziehen (Zoom In) oder Zusammenziehen (Zoom Out) gezoomt werden.
    *   **Marker-Anzeige:**
        *   Auf der aktuell geladenen Karte werden alle Marker angezeigt, die *speziifisch für diese Karte* erstellt wurden. Marker von anderen Karten sind hier nicht sichtbar.
        *   Marker werden als farbige Pins dargestellt, deren Farbe vom Marker-Typ abhängt (siehe 3.3.). Bei ausreichendem Zoom wird auch der Name des Markers angezeigt.
    *   **Marker-Info-Popup:**
        *   Wenn der Mauszeiger über einen Marker auf der Karte bewegt wird (und der Marker-Modus *nicht* aktiv ist), erscheint ein kleines Info-Fenster mit Details zum Marker (Name, Typ, Koordinaten, Karte, Tiefe, Notizen).

*   **3.3. Marker-System:**
    *   **Marker erstellen:**
        1.  Sicherstellen, dass eine Karte geladen ist.
        2.  Den "📍 Marker"-Button klicken, um den Marker-Modus zu aktivieren.
        3.  Auf die gewünschte Position auf der Karte klicken.
        4.  Das "Marker Details"-Modal öffnet sich:
            *   **Name des Spots:** Ein aussagekräftiger Name für den Marker (Pflichtfeld).
            *   **GPS Koordinaten:** Werden automatisch anhand der Klickposition auf der PDF-Karte und der hinterlegten geographischen Referenz (`MAP_GEO_BOUNDS` im Code) berechnet. Diese sind nur so genau wie die Referenzierung der Karte selbst! *Wichtig: Die `MAP_GEO_BOUNDS` müssen im Code korrekt für die verwendete Kartensammlung eingestellt sein, um genaue GPS-Werte zu erhalten.*
            *   **Tiefe (m):** Optionale Angabe der Wassertiefe am Spot.
            *   **Notizen:** Freitextfeld für zusätzliche Informationen (z.B. Untergrund, Besonderheiten, verwendete Köder).
            *   **Marker Typ (Dropdown):** Auswahl des Markertyps, der die Farbe des Pins bestimmt:
                *   Hotspot (Rot)
                *   Struktur (Blau)
                *   Warnung (Orange)
                *   Ankerplatz (Grün)
                *   Fang (Lila)
                *   Notiz (Grau)
            *   "💾 Marker Speichern": Speichert den Marker. Er wird dann auf der aktuellen Karte und in der globalen Markerliste angezeigt. Der Marker-Modus wird automatisch beendet.
    *   **Globale Markerliste ("📍 Gespeicherte Marker (Alle Karten)"):**
        *   Unterhalb der Kartenansicht befindet sich eine Liste aller jemals erstellten Marker, unabhängig davon, auf welcher Karte sie ursprünglich gesetzt wurden.
        *   Jeder Eintrag zeigt:
            *   Einen farbigen Punkt entsprechend dem Marker-Typ.
            *   Name und Typ des Markers.
            *   Die GPS-Koordinaten.
            *   Den Namen der Karte, auf der der Marker erstellt wurde.
            *   Optional die Tiefe.
            *   Einen Löschen-Button (❌) für diesen spezifischen Marker.
        *   **Interaktion:**
            *   **Klick auf einen Marker-Eintrag:**
                1.  Wenn der Marker auf einer anderen als der aktuell geladenen Karte liegt, wird der Benutzer gefragt, ob die entsprechende Karte geladen werden soll.
                2.  Nach Bestätigung (oder wenn es bereits die richtige Karte ist) wird die Karte geladen/angezeigt und automatisch zur Position des Markers gescrollt und gezoomt.
                3.  Das Info-Popup des Markers wird in der Kartenmitte angezeigt.
            *   **Klick auf den Löschen-Button (❌):** Nach einer Sicherheitsabfrage wird der Marker dauerhaft aus der Anwendung entfernt.

*   **3.4. Daten Import/Export:**
    *   Unterhalb der Markerliste befinden sich zwei Buttons:
        *   **💾 Export:** Erstellt eine JSON-Datei (`heilbutt-fangplaner-backup-DATUM.json`), die alle aktuellen Daten der Anwendung enthält (Marker, Fänge, Planerdaten, Checklisten). Diese Datei kann als Backup oder zur Übertragung der Daten auf ein anderes Gerät/Browser verwendet werden.
        *   **📁 Import:** Ermöglicht die Auswahl einer zuvor exportierten JSON-Datei. Nach einer Sicherheitsabfrage werden die Daten aus der Datei in die Anwendung geladen und überschreiben dabei alle vorhandenen Daten.

**4. Modul: 🐟 Fangbuch**

Hier können alle Fänge detailliert protokolliert werden.

*   **➕ Neuen Fang eintragen Button:** Öffnet das "Neuer Fangeintrag"-Modal.
*   **"Neuer Fangeintrag"-Modal:**
    *   **Datum & Zeit:** Auswahl von Datum und Uhrzeit des Fangs (wird mit aktueller Zeit vorbelegt).
    *   **GPS Position:**
        *   Textfeld, das automatisch mit den aktuellen GPS-Koordinaten gefüllt werden kann, wenn GPS aktiv ist (über den Button "📡 Aktuelle Position").
        *   Kann auch manuell eingegeben werden (Format: `Breitengrad, Längengrad`).
    *   **Fischart (Dropdown):** Auswahl der gefangenen Fischart aus einer vordefinierten Liste (Heilbutt, Dorsch, Köhler etc.). "Sonstige" für nicht gelistete Arten.
    *   **Gewicht (kg):** Eingabe des Fischgewichts in Kilogramm (z.B. `12.5`).
    *   **Länge (cm):** Eingabe der Fischlänge in Zentimetern.
    *   **Köder (Dropdown):** Auswahl des verwendeten Köders aus einer vordefinierten Liste (Pilker, Gummifisch, Naturköder etc.).
    *   **Ausgesetzt? (Dropdown):** Auswahl, ob der Fisch entnommen ("Nein, entnommen") oder zurückgesetzt ("Ja, released (C&R)") wurde.
    *   **Notizen / Wetter / Strömung:** Freitextfeld für zusätzliche Beobachtungen zum Fangzeitpunkt.
    *   **Checkbox "Als Spot auf aktueller Karte markieren":** Wenn diese Option aktiviert ist und eine Karte geladen ist sowie GPS-Koordinaten für den Fang vorhanden sind, wird automatisch ein neuer Marker vom Typ "Fang" auf der aktuellen Karte an den Fangkoordinaten erstellt.
    *   **💾 Fang Speichern Button:** Speichert den Fangeintrag. Das Modal schließt sich und die Fangliste wird aktualisiert.
*   **Fangliste:**
    *   Zeigt alle eingetragenen Fänge, sortiert nach Datum (neueste zuerst).
    *   Jeder Eintrag beinhaltet:
        *   Datum und Uhrzeit.
        *   Fischart.
        *   Optional Gewicht, Länge.
        *   Verwendeter Köder.
        *   Status (Entnommen/Released).
        *   Optional GPS-Koordinaten des Fangs.
        *   Optional Notizen.
        *   Einen Löschen-Button (❌) für diesen spezifischen Fangeintrag.
    *   **Klick auf den Löschen-Button (❌):** Nach einer Sicherheitsabfrage wird der Fangeintrag dauerhaft gelöscht.

**5. Modul: 📅 Angelplaner**

Ermöglicht eine grobe Tagesplanung für eine festgelegte Periode (im Code aktuell 01.-08. Juli 2025).

*   Für jeden Tag im Planungszeitraum wird ein eigener Abschnitt angezeigt.
*   **Tagesüberschrift:** Zeigt Tagnummer, Wochentag und Datum.
*   **Meilensteine:**
    *   Innerhalb jedes Tages können "Meilensteine" (Planungspunkte) hinzugefügt werden.
    *   Jeder Meilenstein zeigt: Uhrzeit, Ort/Position und Notizen.
    *   Ein Löschen-Button (❌) entfernt den jeweiligen Meilenstein.
*   **➕ Meilenstein Button:**
    *   Öffnet mehrere Eingabeaufforderungen (Prompts) nacheinander, um Uhrzeit, Ort/Position und Notizen für einen neuen Meilenstein dieses Tages einzugeben.
    *   Der neue Meilenstein wird dann der Liste hinzugefügt.

**6. Modul: ✅ Checklisten**

Bietet vordefinierte Checklisten, um sicherzustellen, dass nichts Wichtiges vergessen wird.

*   Es werden mehrere Checklisten angezeigt (z.B. Grundausstattung, Sicherheit, Kleidung, Verpflegung).
*   Jede Checkliste enthält mehrere Einträge.
*   **Interaktion:**
    *   Vor jedem Eintrag befindet sich eine Checkbox. Durch Anklicken kann der Punkt als erledigt markiert werden.
    *   Der Status der Checkboxen (angehakt/nicht angehakt) wird gespeichert.

**7. Modul: 🌊 Gezeiten/Wetter**

Stellt schnelle Verknüpfungen und Basisinformationen bereit.

*   **Externe Links:**
    *   Buttons, die zu externen Webseiten für detaillierte Gezeiten- und Wasserstandsinformationen für Leka, Norwegen führen (Tideschart, Kartverket). Diese öffnen in einem neuen Browser-Tab.
*   **💡 Wichtige Angel-Infos:**
    *   Eine statische Liste mit allgemeinen Tipps zum Angeln (beste Zeiten, Mondphasen, Wind, Wassertemperatur).

**8. Modals (Dialogfenster)**

Die Anwendung verwendet Modals für die Eingabe von Marker-Details und Fangeinträgen.

*   **Öffnen:** Durch entsprechende Aktionen (Klick auf Karte im Marker-Modus, Klick auf "Neuen Fang eintragen").
*   **Schließen:**
    *   Durch Klick auf das "×"-Symbol oben rechts im Modal.
    *   Durch Klick außerhalb des Modal-Inhaltsbereichs.
    *   Automatisch nach erfolgreichem Speichern von Daten.

**9. Datenpersistenz**

*   Alle von Ihnen eingegebenen Daten (Marker, Fänge, Planer-Meilensteine, Checklisten-Status) werden **lokal im Speicher Ihres Webbrowsers** (`localStorage`) abgelegt.
*   Das bedeutet:
    *   Die Daten sind nur in dem Browser und auf dem Gerät verfügbar, auf dem sie eingegeben wurden.
    *   Wenn Sie den Browsercache oder die Websitedaten für diese Seite löschen, gehen die Daten verloren.
    *   Nutzen Sie die Export-Funktion regelmäßig, um Backups Ihrer Daten zu erstellen!

**10. Wichtige Hinweise zur Bedienung und Genauigkeit**

*   **GPS-Genauigkeit auf Karten:** Die Genauigkeit der Umrechnung von PDF-Pixelkoordinaten zu echten GPS-Koordinaten hängt maßgeblich von der korrekten Konfiguration der `MAP_GEO_BOUNDS`-Konstante im HTML-Code der Anwendung ab. Diese Konstante definiert die geographische Ausdehnung (nördlichster/südlichster Breitengrad, westlichster/östlichster Längengrad) des von *allen* PDF-Karten abgedeckten Gesamtbereichs. Sind diese Werte ungenau oder decken Ihre Karten einen anderen Bereich ab, werden die auf der Karte gesetzten Marker nicht den korrekten realen GPS-Positionen entsprechen.
*   **Offline-Nutzung:** Nach dem ersten vollständigen Laden der HTML-Datei im Browser kann die Anwendung prinzipiell offline genutzt werden, solange die PDF-Dateien der Karten bereits einmal geladen (und ggf. vom Browser zwischengespeichert) wurden oder von einer erreichbaren Quelle (wie im Code via githack.com) nachgeladen werden können.
*   **Browser-Kompatibilität:** Die Anwendung ist für moderne Desktop-Browser (Chrome, Firefox, Edge) optimiert. Die Funktionalität auf mobilen Browsern ist gegeben, die Bedienung kann aber je nach Bildschirmgröße variieren.

---

Ich hoffe, diese ausführliche Beschreibung hilft Ihnen und anderen Nutzern, die Anwendung effektiv zu verwenden!
