import type { CampsiteConfig } from "../types";

/**
 * Camping Neubauer — Dellach 63, 9872 Millstatt am See, Kärnten.
 * Betreiber: Camping Neubauer GmbH · Familie Glabischnig (Silvia Glabischnig).
 * Alle Texte/Fakten belegt aus camping-neubauer.at (Stand-Scrape 2026-06).
 * Bilder = ausschließlich eigene Camping-Neubauer-Fotos bzw. die vom Platz selbst
 * für die Region genutzten, korrekt lizenzierten Tourismusbilder (MBN Tourismus)
 * in /public/campsites/camping-neubauer/ — jedes Bild per Vision geprüft.
 *
 * EHRLICH: Der Platz liegt DIREKT am Millstätter See (eigener 110-m-Naturbade-
 * strand, "1. Reihe am Wasser") → "am See"-Rahmung ist belegt. Reale Preisliste
 * 2026 (Vor-/Nachsaison-„ab“-Preise). camping.info Award 2025 ist eine echte,
 * klar ausgewiesene Auszeichnung. Keine eigenen Koordinaten auf der Quelle →
 * coords ausgelassen (nur Adresse). In allen Mieteinheiten keine Haustiere.
 */
const IMG = "/campsites/camping-neubauer";

export const campingNeubauer: CampsiteConfig = {
  name: "Camping Neubauer",
  shortName: "Neubauer",
  slug: "camping-neubauer",
  ort: "Dellach · Millstatt am See",
  region: "Kärnten",
  brandKind: "Camping & Ferienwohnungen",
  see: "Millstätter See",
  regionLong: "Urlaubsregion Millstätter See · Kärnten · Österreich",

  claim: "Ihr Familienurlaub direkt am Millstätter See",
  claimEmphasis: "direkt am Millstätter See",
  intro:
    "Familienfreundliches Wiesencamping direkt am trinkwasserklaren Millstätter See — umrahmt von einer beeindruckenden Bergwelt und gelegen inmitten von Obst- und Walnussbäumen, mitten in Kärnten.",

  logo: { src: `${IMG}/logo-camping-neubauer.png`, alt: "Logo Camping Neubauer am Millstätter See" },

  statement: {
    text: "Ob Erholung am Strand oder Kraft in den Bergen — bei uns ist Urlaub noch echte Familiensache.",
    emphasis: "noch echte Familiensache",
  },

  pillars: [
    {
      title: "Direkt am Millstätter See",
      text: "Der trinkwasserklare Millstätter See liegt vor der Tür — mit eigenem Naturbadestrand und direktem Zugang zum Wasser.",
      image: { src: `${IMG}/see-panorama.webp`, alt: "Luftaufnahme: Camping Neubauer am Ufer des Millstätter Sees mit Bergpanorama" },
    },
    {
      title: "Inmitten von Obst- & Walnussbäumen",
      text: "Ein 1,5 ha großer, familiär geführter Campingplatz, eingebettet in Obstgärten und die beeindruckende Bergwelt Kärntens.",
      image: { src: `${IMG}/luftbild-campingplatz.webp`, alt: "Luftbild des Campingplatzes Neubauer mit Wiesen und Bergen am Millstätter See" },
    },
    {
      title: "Aktiv in Kärntens Bergwelt",
      text: "Wandern, Radfahren und Klettern zwischen den sanften Nockbergen und den Gipfeln der Hohen Tauern — ideal für Aktivurlauber.",
      image: { src: `${IMG}/wandern-am-see.webp`, alt: "Wandern auf einem Uferweg am Millstätter See" },
    },
  ],

  usps: [
    "Direkt am Millstätter See",
    "Eigener Naturbadestrand (110 m)",
    "Parzellierte Stellplätze mit Strom",
    "Gratis WLAN am ganzen Gelände",
    "Restaurant mit Sonnenterrasse",
    "camping.info Award 2025",
  ],

  trust: {
    heading: "Worauf Sie sich bei Camping Neubauer verlassen können",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Familie Glabischnig: ein eigener Naturbadestrand am trinkwasserklaren Millstätter See, moderne beheizte Sanitäranlagen und ein Platz mitten in Kärntens Bergwelt — ausgezeichnet mit dem camping.info Award 2025.",
  },

  // Echte, klar ausgewiesene Auszeichnung (Footer-Badge auf camping-neubauer.at).
  // Badge-Grafik liegt nicht lokal vor → nur Label, kein Bild.
  awards: [{ label: "camping.info Award 2025" }],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/hero-luftaufnahme-see.webp`,
      alt: "Luftaufnahme: Camping Neubauer mit Stellplätzen direkt am Ufer des Millstätter Sees",
    },
  },

  camping: {
    heading: "Camping direkt am Millstätter See",
    intro:
      "Auf dem 1,5 ha großen Campingplatz mit familiärer Atmosphäre erwarten Sie durchgehend parzellierte Stellplätze, moderne beheizte Sanitäranlagen und ein direkt angrenzender Naturbadestrand. Jeder Stellplatz hat einen eigenen Stromanschluss mit Zähler — gratis WLAN am gesamten Gelände.",
    features: [
      {
        title: "Sonnige Lage am Seeufer",
        text: "Camping in erster Reihe am türkisblauen Millstätter See — einem der wärmsten Seen Kärntens mit 22–25 °C Wassertemperatur im Sommer.",
        image: { src: `${IMG}/drohne-see-panorama.webp`, alt: "Drohnenaufnahme des Millstätter Sees mit Uferlage des Campingplatzes" },
      },
      {
        title: "Parzellierte Stellplätze",
        text: "Durchgehend parzellierte, teils terrassierte Stellplätze für Wohnwagen, Wohnmobile und Zelte — mit eigenem Stromanschluss (6 Ampere) und teils schattig.",
        image: { src: `${IMG}/stellplaetze-luftbild.webp`, alt: "Parzellierte Camping-Stellplätze am Ufer des Millstätter Sees" },
      },
      {
        title: "Moderne, beheizte Sanitäranlagen",
        text: "Gratis Warmwasserduschen, Fußbodenheizung und gepflegte Waschräume sorgen das ganze Jahr über für Komfort.",
        image: { src: `${IMG}/sanitaer-1.webp`, alt: "Moderne Sanitäranlage bei Camping Neubauer" },
      },
      {
        title: "Familien- & barrierefreie Waschräume",
        text: "Familienwaschraum, Einzelwaschkabinen, Kinderwaschraum und ein barrierefreier Waschraum — dazu Geschirrspülraum, Waschmaschinen, Trockner und Hundedusche.",
        image: { src: `${IMG}/sanitaer-2.webp`, alt: "Familien- und Kinderwaschraum bei Camping Neubauer" },
      },
      {
        title: "Restaurant mit Sonnenterrasse",
        text: "Das gemütliche „Restaurant Neubauer“ mit großer Sonnenterrasse ist beliebter Treffpunkt — mit Kärntner Schmankerln und regelmäßigen Live-Musik-Abenden.",
        image: { src: `${IMG}/restaurant-terrasse.webp`, alt: "Restaurant Neubauer mit Sonnenterrasse am Campingplatz" },
      },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte zum Mieten",
    intro:
      "Lieber feste Wände statt Zelt? Wählen Sie zwischen modern ausgestatteten Appartements mit Seeblick, den Mobilheimen Typ Nemo und Typ Duo sowie einem Mietwohnwagen in erster Reihe direkt am Wasser. In allen Mieteinheiten sind keine Haustiere erlaubt.",
    items: [
      {
        name: "Appartement mit Seeblick",
        kind: "2 Appartements · Balkon/Terrasse",
        text: "Liebevoll und modern ausgestattet, südseitig mit Balkon oder Terrasse und atemberaubendem Blick über den Millstätter See bis zu den Hohen Tauern. Inklusive gratis Kärnten Card, Strom und Heizung.",
        image: { src: `${IMG}/appartement-terrasse-seeblick.webp`, alt: "Sonnenterrasse eines Appartements mit Blick über den Millstätter See" },
        priceFrom: 69,
        features: ["2–6 Personen", "ca. 50 & 65 m²", "Kärnten Card inkl."],
      },
      {
        name: "Mobilheim Typ Nemo",
        kind: "Mobilheim · ca. 29 m²",
        text: "Gemütliches Mobilheim für 2–4 Personen mit zwei Schlafzimmern (Doppelbett + Etagenbett), Wohnküche mit Gasherd, Bad mit Dusche/WC, Sat-TV und überdachter Terrasse mit Gartenmöbeln.",
        image: { src: `${IMG}/mobilheim-nemo.webp`, alt: "Außenansicht der Mobilheime Typ Nemo bei Camping Neubauer" },
        priceFrom: 61,
        features: ["2–4 Personen", "2 Schlafzimmer", "überdachte Terrasse"],
      },
      {
        name: "Mobilheim Typ Duo",
        kind: "Mobilheim · ca. 33 m²",
        text: "Mobilheim für 2–4 Personen mit zwei Schlafzimmern (je Doppelbett 140 × 200), Wohnküche mit Elektroherd, Bad mit Dusche/WC, Sat-TV und überdachter Terrasse mit Gartenmöbeln.",
        image: { src: `${IMG}/mobilheim-duo.webp`, alt: "Überdachte Terrasse des Mobilheims Typ Duo bei Camping Neubauer" },
        priceFrom: 66,
        features: ["2–4 Personen", "2 Doppelbetten", "Sat-TV"],
      },
      {
        name: "Mietwohnwagen",
        kind: "1. Reihe · direkt am Wasser",
        text: "Mietwohnwagen für 2–4 Personen in erster Reihe direkt am Wasser — mit Vorzelt, Heizung, Sat-TV sowie komplettem Koch- und Essgeschirr. Endreinigung € 50.",
        image: { src: `${IMG}/mietwohnwagen-am-wasser.webp`, alt: "Mietwohnwagen mit Vorzelt direkt am Ufer des Millstätter Sees" },
        priceFrom: 52,
        features: ["2–4 Personen", "direkt am Wasser", "Vorzelt & Heizung"],
      },
    ],
  },

  kinder: {
    heading: "Strand & Spielplatz",
    intro:
      "Bei Camping Neubauer wird der Urlaub für Groß und Klein zum Erlebnis: ein liebevoll gestalteter Kinderspielplatz, eine großflächige Spielwiese und ein hauseigener Naturbadestrand mit direktem Zugang zum Millstätter See.",
    features: [
      {
        title: "Spielplatz & Spielwiese",
        text: "Die großflächige Spielwiese bietet Rutsch- und Kletterturm, Spielseilbahn, Karussell, Schaukeln, Wippe und Tischtennis — Platz zum Toben für alle Altersgruppen.",
        image: { src: `${IMG}/spielwiese.webp`, alt: "Spielwiese und Kinderspielplatz bei Camping Neubauer" },
      },
      {
        title: "Naturbadestrand (110 m)",
        text: "Ein 110 m langer Naturbadestrand mit Liegewiese und Sandbereich lädt zum Baden, Sonnen und Sandburgenbauen direkt am See ein.",
        image: { src: `${IMG}/naturbadestrand.webp`, alt: "Naturbadestrand mit Liegewiese am Millstätter See bei Camping Neubauer" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Natur & Aktiv rund um den See",
    intro:
      "Der Millstätter See — mit 588 m Seehöhe, mildem Klima und Wassertemperaturen von 22–25 °C einer der wärmsten Seen Kärntens — ist der ideale Ausgangspunkt für aktive Urlaubstage.",
    items: [
      {
        title: "Radfahren am Seeradweg",
        text: "Der rund 28 km lange Millstätter-See-Radweg führt direkt durch unser Dorf Dellach — ideal für Familien und (Wieder-)Einsteiger, kombinierbar mit den Radfähren über den See.",
        image: { src: `${IMG}/radfahren-seeradweg.webp`, alt: "Radfahren am Millstätter-See-Radweg" },
      },
      {
        title: "Wandern & Klettern",
        text: "Zahllose Wander- und Kletterrouten zwischen den sanften Nockbergen und den Gipfeln der Hohen Tauern — vom Millstätter See Höhensteig bis zum sagenumwobenen Mirnock.",
        image: { src: `${IMG}/wandern-nockberge.webp`, alt: "Wanderer mit Blick über den Millstätter See in den Nockbergen" },
      },
      {
        title: "Angeln am See",
        text: "Petrijünger versuchen ihr Glück am wasserreichen Millstätter See — etwa beim alljährlichen Wettbewerb „Angeln um die Kristallrenke“ (Erlaubnisschein erforderlich).",
        image: { src: `${IMG}/angeln.webp`, alt: "Angeln am Millstätter See" },
      },
      {
        title: "Schifffahrt am See",
        text: "Die Schiffsanlegestelle liegt nur rund 150 m vom Campingplatz entfernt — perfekt für eine Rundfahrt und neue Blickwinkel auf die Bergwelt.",
        image: { src: `${IMG}/schifffahrt.webp`, alt: "Ausflugsschiff auf dem Millstätter See" },
      },
    ],
  },

  anreise: {
    heading: "So finden Sie uns",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Dellach 63, 9872 Millstatt am See — am Ufer des Millstätter Sees in Kärnten. Die nächsten Einkaufsmöglichkeiten und ein Bankomat sind rund 4 km entfernt (Millstatt oder Döbriach).",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Eine Bushaltestelle befindet sich rund 200 m vom Campingplatz entfernt.",
      },
      {
        title: "Mit dem Schiff",
        text: "Die Schiffsanlegestelle ist nur ca. 150 m entfernt — ein toller Ausgangspunkt für eine Rundfahrt am Millstätter See.",
      },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Seeblick, gemütliche Unterkünfte und Kärntner Schmankerl — ein paar Eindrücke von Camping Neubauer in Dellach am Millstätter See.",
    tag: "1. Mai bis 11. Oktober 2026",
    moreCount: 12,
    images: [
      { src: `${IMG}/mobilheim-nemo-innen.webp`, alt: "Wohnküche im Mobilheim Typ Nemo mit Blick auf den See" },
      { src: `${IMG}/appartement-wohnzimmer.webp`, alt: "Wohnzimmer eines Appartements bei Camping Neubauer" },
      { src: `${IMG}/restaurant-kasnudln.webp`, alt: "Kärntner Kasnudln im Restaurant Neubauer" },
      { src: `${IMG}/mietwohnwagen-innen.webp`, alt: "Innenansicht eines Mietwohnwagens bei Camping Neubauer" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählen Sie Zeitraum, Unterkunft und Personen — Familie Glabischnig meldet sich mit Ihrer persönlichen Verfügbarkeit. Mindestaufenthalt bei Reservierung: 5 Nächte.",
    pricesArePlaceholder: false,
    priceNote:
      "„ab“-Preise Vor-/Nachsaison (Mai/Juni, Sept./Okt.); Stellplatz inkl. 2 Pers., exkl. Strom (€ 0,35/kWh) & Ortstaxe (€ 2,70 p. P./Tag). Mieteinheiten zzgl. Ortstaxe & € 50 Endreinigung; Appartement-Preis inkl. Kärnten Card, Strom & Heizung. Preise 2026 — Änderungen vorbehalten.",
    highlight: {
      title: "Inklusive Kärnten Card",
      text: "Gäste der Appartements erhalten für die Dauer ihres Aufenthalts gratis die Kärnten Card — freier Eintritt zu über 100 Ausflugszielen und bis zu 50 % Ermäßigung bei vielen Partnern.",
    },
    categories: [
      // Reale Preisliste 2026 (camping-neubauer.at/camping & /appartements).
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/Wohnmobil/Zelt)", perNight: 24.3, perExtraGuest: 7.8 },
      { id: "mietwohnwagen", label: "Mietwohnwagen", perNight: 52, perExtraGuest: 7.8 },
      { id: "mobilheim-nemo", label: "Mobilheim Typ Nemo", perNight: 61, perExtraGuest: 11.3 },
      { id: "mobilheim-duo", label: "Mobilheim Typ Duo", perNight: 66, perExtraGuest: 11.3 },
      { id: "appartement", label: "Appartement (Seeblick)", perNight: 69, perExtraGuest: 11.3 },
    ],
  },

  kontakt: {
    tel: "+43 4766 2532",
    telHref: "tel:+4347662532",
    mail: "info@camping-neubauer.at",
    facebook: "https://www.facebook.com/profile.php?id=100063456525066",
    adresse: "Dellach 63 · 9872 Millstatt am See · Kärnten",
    // Keine expliziten Koordinaten auf der Quelle → coords ausgelassen (nur Adresse).
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen", href: "#camping" },
        { label: "Restaurant", href: "#camping" },
      ],
    },
    {
      label: "Unterkünfte",
      href: "#mobilheime",
      children: [
        { label: "Appartements", href: "#mobilheime" },
        { label: "Mobilheime", href: "#mobilheime" },
        { label: "Mietwohnwagen", href: "#mobilheime" },
      ],
    },
    {
      label: "Strand & Familie",
      href: "#kinder",
      children: [
        { label: "Naturbadestrand", href: "#kinder" },
        { label: "Spielplatz", href: "#kinder" },
        { label: "Galerie", href: "#galerie" },
      ],
    },
    {
      label: "Natur & Aktiv",
      href: "#aktivitaeten",
      children: [
        { label: "Radfahren", href: "#aktivitaeten" },
        { label: "Wandern & Klettern", href: "#aktivitaeten" },
        { label: "Angeln & Schifffahrt", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingNeubauer;
