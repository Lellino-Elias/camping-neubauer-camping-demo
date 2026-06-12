import type { CampsiteConfig } from "../types";

/**
 * Camping Neubauer — Familie Glabischnig · Dellach 63, 9872 Millstatt am See, Kärnten.
 * Alle Inhalte aus der eigenen Quelle (raw/digest) abgeleitet. Du-Anrede durchgehend.
 * Design FIX: kein theme (Original-Palette), heroVariant "center".
 */
const IMG = "/campsites/camping-neubauer";

const campingNeubauer: CampsiteConfig = {
  name: "Camping Neubauer",
  shortName: "Neubauer",
  slug: "camping-neubauer",
  ort: "Millstatt am See",
  region: "Kärnten",
  brandKind: "Camping & Appartements",
  see: "Millstätter See",
  regionLong: "Millstätter See · Kärnten · Österreich",

  heroVariant: "center",

  claim: "Familiencamping direkt am trinkwasserklaren Millstätter See",
  claimEmphasis: "trinkwasserklaren Millstätter See",
  emailDetail: "euer eigener Naturbadestrand mit 110 m Länge",
  intro:
    "Zwischen Obst- und Walnussbäumen, direkt am Ufer des trinkwasserklaren Millstätter Sees: Bei uns campst du mit eigenem Naturbadestrand, parzellierten Stellplätzen und der Kärntner Bergwelt ringsum.",

  logo: { src: `${IMG}/logo-3cceedfb32.png`, alt: "Camping Neubauer Logo" },

  statement: {
    text: "Vom Stellplatz sind es nur ein paar Schritte über die Liegewiese bis ins trinkwasserklare Seewasser.",
    emphasis: "ein paar Schritte",
  },

  pillars: [
    {
      title: "Trinkwasserklarer See",
      text: "Der direkt angrenzende Naturbadestrand liegt am tiefsten und wasserreichsten See Kärntens — Baden und Liegewiese inklusive.",
      image: { src: `${IMG}/activity-b69e2452c8.webp`, alt: "Naturbadestrand von Camping Neubauer am Millstätter See" },
    },
    {
      title: "Parzellierte Stellplätze",
      text: "Durchgehend parzellierte Plätze für Wohnwagen, Wohnmobil und Zelt — jeder mit eigenem Stromzähler und gratis WLAN am ganzen Gelände.",
      image: { src: `${IMG}/hero-d1f0a72234.webp`, alt: "Campingstellplätze von Camping Neubauer am Seeufer" },
    },
    {
      title: "Mitten in der Bergwelt",
      text: "Eingebettet zwischen Nockbergen, Mirnock und Sportberg Goldeck — ein ruhiger Familienplatz im Dorf Dellach am Südufer.",
      image: { src: `${IMG}/hero-920b346f48.webp`, alt: "Luftaufnahme des Millstätter Sees mit Bergpanorama bei Camping Neubauer" },
    },
  ],

  usps: [
    "Eigener Naturbadestrand",
    "Stromzähler am Stellplatz",
    "Beheizte Sanitäranlagen",
    "Gratis WLAN am Gelände",
    "Restaurant mit Terrasse",
    "Hunde willkommen",
  ],

  trust: {
    heading: "1,5 Hektar Seeufer mitten in Kärnten",
    headingEmphasis: "Seeufer",
    intro:
      "Auf 1,5 Hektar zwischen See und Bergen findest du parzellierte Stellplätze, einen 110 m langen Naturbadestrand, beheizte Sanitäranlagen und ein Restaurant mit Sonnenterrasse — familiär geführt von Mai bis Oktober.",
  },

  awards: [{ label: "camping.info Award 2025" }],

  saison: { von: "Mai", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-a1c2d85c2a.webp`, alt: "Luftaufnahme: Camping Neubauer direkt am Millstätter See" },
  },

  breather: {
    image: { src: `${IMG}/hero-435a6a49a2.webp`, alt: "Drohnenaufnahme des trinkwasserklaren Millstätter Sees" },
    line: "Einer der wärmsten Seen Kärntens — Badesaison von Mai bis September.",
  },

  camping: {
    heading: "Camping zwischen See und Walnussbäumen",
    intro:
      "Durchgehend parzellierte Stellplätze, jeder mit eigenem Stromzähler, dazu beheizte Sanitäranlagen und ein Restaurant mit Sonnenterrasse — alles direkt am See.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Durchgehend parzellierte Plätze für Wohnwagen, Wohnmobil und Zelt — teilweise terrassiert und schattig, jeder mit eigenem Stromzähler (6 Ampere).",
        image: { src: `${IMG}/activity-80cb203609.webp`, alt: "Campingstellplätze von Camping Neubauer am Ufer des Millstätter Sees" },
      },
      {
        title: "Beheizte Sanitäranlagen",
        text: "Moderne, beheizte Waschräume mit Fußbodenheizung und gratis Warmwasserduschen — gepflegt, dazu gratis WLAN am gesamten Areal.",
        image: { src: `${IMG}/amenity-a81742c4a3.webp`, alt: "Beheizte Sanitäranlage von Camping Neubauer" },
      },
      {
        title: "Familien- & Kinderwaschraum",
        text: "Eigener Familienwaschraum, Einzelwaschkabinen, ein Kinderwaschraum und ein barrierefreier Waschraum — für große und kleine Gäste.",
        image: { src: `${IMG}/amenity-139246cb0f.webp`, alt: "Familienwaschraum mit Wickeltisch bei Camping Neubauer" },
      },
      {
        title: "Restaurant mit Sonnenterrasse",
        text: "Das „Restaurant Neubauer“ mit großer Sonnenterrasse ist Treffpunkt für Kaffeeklatsch und gesellige Live-Musik-Abende im Sommer.",
        image: { src: `${IMG}/amenity-9d27b17aec.webp`, alt: "Campingrestaurant Neubauer mit Sonnenterrasse" },
      },
      {
        title: "Kärntner Schmankerl",
        text: "In der Küche kommen Klassiker wie Kärntner Kasnudln frisch auf den Teller — gemütlich essen mit Blick über die Terrasse.",
        image: { src: `${IMG}/amenity-9296ffa9fc.webp`, alt: "Kärntner Kasnudln aus dem Restaurant Neubauer" },
      },
      {
        title: "Grillspezialitäten",
        text: "Vom Grillteller bis zum Wiener Schnitzel — herzhafte Hausmannskost nach einem langen Tag am See. Im Restaurant ist nur Barzahlung möglich.",
        image: { src: `${IMG}/amenity-aa52f2cd84.webp`, alt: "Grillteller aus dem Restaurant Neubauer" },
      },
    ],
  },

  mobilheime: {
    heading: "Mehr Komfort als Zelt und Wohnwagen",
    intro:
      "Wer lieber mit festem Dach übernachtet, findet bei uns voll ausgestattete Mietwohnwagen, Mobilheime und Appartements mit Seeblick.",
    items: [
      {
        name: "Mietwohnwagen",
        kind: "1. Reihe, direkt am Wasser · 2–4 Personen",
        text: "Gemütlicher Mietwohnwagen in erster Reihe mit Blick aufs Wasser — ideal für Paare und kleine Familien.",
        image: { src: `${IMG}/accommodation-f951392a60.webp`, alt: "Mietwohnwagen am Wasser bei Camping Neubauer" },
        priceFrom: 50.5,
        features: ["4 Personen", "4 Betten"],
      },
      {
        name: "Mobilheim Typ Nemo",
        kind: "ca. 29 m² · 2–4 Personen",
        text: "Voll ausgestattetes Mobilheim mit überdachter Terrasse, eigenem Bad und Küche — keine Haustiere.",
        image: { src: `${IMG}/accommodation-4c3f00cff9.webp`, alt: "Zwei Mobilheime Typ Nemo mit Terrasse und Seeblick bei Camping Neubauer" },
        priceFrom: 59,
        features: ["ca. 29 m²", "1 Badezimmer"],
      },
      {
        name: "Mobilheim Typ Duo",
        kind: "ca. 33 m² · 2–4 Personen",
        text: "Das etwas größere Mobilheim mit überdachter Terrasse — Platz für die ganze Familie, Bad und Küche inklusive.",
        image: { src: `${IMG}/gallery-2aea769d95.webp`, alt: "Mobilheim Typ Duo mit Terrasse bei Camping Neubauer" },
        priceFrom: 64,
        features: ["ca. 33 m²", "1 Badezimmer"],
      },
      {
        name: "Appartement mit Seeblick",
        kind: "ca. 50–65 m² · 2–6 Personen",
        text: "Zwei modern ausgestattete Appartements mit eigenem Balkon oder Terrasse und Blick auf den Millstätter See.",
        image: { src: `${IMG}/amenity-90085892a3.webp`, alt: "Terrasse eines Appartements mit Seeblick bei Camping Neubauer" },
        priceFrom: 66.9,
        features: ["2 Appartements", "Seeblick"],
      },
    ],
  },

  kinder: {
    heading: "Für kleine Abenteurer",
    intro:
      "Während die Großen am Strand liegen, klettern, rutschen und schaukeln die Kleinen nur ein paar Schritte weiter.",
    features: [
      {
        title: "Baden & Entdecken am See",
        text: "Der Naturbadestrand und das klare Seewasser laden Kinder zum Plantschen, Sandburgenbauen und Angeln am Millstätter See ein.",
        image: { src: `${IMG}/kids-219d7fce69.webp`, alt: "Familie beim Angeln am Millstätter See" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Millstätter See",
    intro:
      "Der 588 m hoch gelegene Millstätter See ist der tiefste und wasserreichste See Kärntens — und Ausgangspunkt für Rad, Berg und Wasser.",
    items: [
      {
        title: "Radfahren",
        text: "Der rund 28 km lange Millstätter-See-Radweg führt direkt durch unser Dorf Dellach — gemütlich für Familien, mit Radfähren zum Abkürzen.",
        image: { src: `${IMG}/activity-887e821d36.webp`, alt: "Radfahren am Millstätter-See-Radweg" },
      },
      {
        title: "Wandern & Klettern",
        text: "Vom Slow Trail am Südufer bis zum Nockberge-Trail, Mirnock und Sportberg Goldeck — Touren für jede Kondition starten quasi vor der Tür.",
        image: { src: `${IMG}/activity-9b1531c9d3.webp`, alt: "Wandern mit Blick über den Millstätter See" },
      },
      {
        title: "Angeln",
        text: "Am wasserreichsten See Kärntens werfen passionierte Angler ihre Rute aus — etwa beim Wettbewerb „Angeln um die Kristallrenke“.",
        image: { src: `${IMG}/activity-477b8296fb.webp`, alt: "Angeln am Millstätter See" },
      },
      {
        title: "Schifffahrt",
        text: "Die Schiffsanlegestelle liegt nur 150 m vom Platz entfernt — perfekt für eine Rundfahrt und die Bergwelt vom Wasser aus.",
        image: { src: `${IMG}/gallery-02dfa4a7c9.webp`, alt: "Ausflugsschiff auf dem Millstätter See" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Dellach",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauernautobahn A10, Abfahrt Seeboden / Millstätter See, dann am Südufer nach Dellach 63 — Parkplätze direkt am Platz.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Spittal-Millstättersee, von dort mit Bus oder Taxi rund 15 Minuten an den See.",
      },
      {
        title: "Mit dem Schiff",
        text: "Die Schiffsanlegestelle ist nur 150 m entfernt — die Anreise über den See ist gleich der erste Ausflug.",
      },
    ],
  },

  galerie: {
    heading: "Sommertage am Millstätter See",
    headingEmphasis: "Sommertage",
    intro: "Vom Wohnzimmer mit Balkon bis zum Teller im Restaurant — ein paar Eindrücke von einem Urlaubstag bei uns.",
    tag: "Mai bis Oktober",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-a0a0227bd4.webp`, alt: "Wohnzimmer eines Appartements mit Balkon bei Camping Neubauer" },
      { src: `${IMG}/accommodation-d7a4479da4.webp`, alt: "Küche und Terrasse eines Mobilheims mit Seeblick" },
      { src: `${IMG}/amenity-73b4890f9f.webp`, alt: "Mobilheim Typ Duo mit Terrasse und Obstbäumen" },
      { src: `${IMG}/amenity-5967bce0b1.webp`, alt: "Wiener Schnitzel mit Pommes aus dem Restaurant Neubauer" },
    ],
  },

  booking: {
    heading: "Sichere dir deine Tage am Millstätter See",
    headingEmphasis: "am Millstätter See",
    intro:
      "Wähle Unterkunft und Zeitraum — Familie Glabischnig meldet sich persönlich mit Verfügbarkeit und Angebot. Mindestaufenthalt für Reservierungen: 5 Nächte.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Personen in der Vor-/Nachsaison — Stellplatz exkl. Strom (€ 0,35/kWh), zzgl. Ortstaxe € 2,70 pro Person/Tag. Endreinigung bei Mietobjekten € 50, Hauptsaison teurer. Mit dem Platz bestätigen.",
    highlight: {
      title: "Direkt am Wasser",
      text: "Vom Stellplatz über die Liegewiese sind es nur wenige Schritte bis zum 110 m langen Naturbadestrand.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 24.30, perExtraGuest: 7.80 },
      { id: "mietwohnwagen", label: "Mietwohnwagen", perNight: 52, perExtraGuest: 7.80 },
      { id: "mobilheim-nemo", label: "Mobilheim Typ Nemo", perNight: 61, perExtraGuest: 11.30 },
      { id: "mobilheim-duo", label: "Mobilheim Typ Duo", perNight: 66, perExtraGuest: 11.30 },
      { id: "appartement", label: "Appartement", perNight: 69 },
    ],
  },

  kontakt: {
    coords: { lat: 46.788413, lng: 13.613666 },
    tel: "+43 4766 2532",
    telHref: "tel:+4347662532",
    mail: "info@camping-neubauer.at",
    facebook: "https://www.facebook.com/profile.php?id=100063456525066",
    adresse: "Dellach 63 · 9872 Millstatt am See · Kärnten",
  },

  languages: ["DE", "EN", "IT", "NL", "CS"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Sanitär", href: "#camping" },
    ]},
    { label: "Unterkünfte", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv am See", href: "#aktivitaeten" },
    { label: "Preise & Anfrage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingNeubauer;
