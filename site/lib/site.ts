// Centrale bedrijfsgegevens — info van probandenservice.nl
// Adres: Bellweg 40, 4104 BJ Culemborg | Tel: 06 42 51 36 92 | Spoed: 06 40 96 18 48

export const site = {
  name: 'Probandenservice',
  tagline: 'Van stadsstraten tot snelwegen, wij houden je in beweging',
  taglineShort: 'Banden · Uitlijnen · Spoed',
  legalName: 'Probandenservice',

  url: 'https://probandenservice.nl',
  email: 'info@probandenservice.nl',

  phone: {
    display: '06 — 42 51 36 92',
    tel: '+31642513692',
  },
  emergencyPhone: {
    display: '06 — 40 96 18 48',
    tel: '+31640961848',
  },

  address: {
    street: 'Bellweg 40',
    postal: '4104 BJ',
    city: 'Culemborg',
    country: 'Nederland',
    googleMapsUrl: 'https://maps.google.com/?q=Bellweg+40+4104+BJ+Culemborg',
  },

  hours: {
    weekdays: 'Ma — Zo · 09:00 — 20:00',
    saturday: 'Za · 09:00 — 20:00',
    sunday: 'Zo · 09:00 — 20:00',
    emergency: '24 / 7',
  },

  serviceArea: 'Culemborg, Utrecht en omgeving',

  // Steden vermeld op website + nabije steden in Utrecht/Gelderland
  serviceAreaCities: [
    'Culemborg',
    'Utrecht',
    'Nieuwegein',
    'Amersfoort',
    'Tiel',
    'Geldermalsen',
    'Vianen',
    'Houten',
    'IJsselstein',
    'Gorinchem',
    'Wijk bij Duurstede',
    'Leerdam',
    'Zaltbommel',
    'Veenendaal',
  ],

  certifications: [] as string[],

  social: {
    facebook: 'https://facebook.com/probandenservice',
    instagram: 'https://instagram.com/probandenservice',
    marktplaats: 'https://marktplaats.nl',
  },

  stats: {
    tiresInStock: 'groot assortiment',
    rating: null as number | null,
    reviews: null as number | null,
    yearsExperience: null as number | null,
    montagesPerYear: null as string | null,
  },

  brands: ['Michelin', 'Continental', 'Pirelli', 'Bridgestone', 'Goodyear', 'Dunlop', 'Hankook', 'Nokian', 'Vredestein', 'Falken'],

  usp: [
    'Deskundige technici',
    '24/7 bereikbaar voor spoed',
    'Servicegarantie op al ons werk',
    'Betrouwbaar en eerlijk',
    'Alle voertuigtypen',
    'Van stad tot snelweg',
  ],

  emergency: {
    description: 'Tijdelijke band monteren ter plekke — veilig tot 80 km/u. Kapotte band nemen we mee en repareren we voor je.',
  },
};

export type Site = typeof site;
