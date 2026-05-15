// Blog posts — voeg artikelen toe, ze verschijnen automatisch in /blog en op de homepage.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;     // ISO YYYY-MM-DD
  category: string; // bv "Techniek", "Gids", "Seizoen"
  readMinutes: number;
  body: { heading?: string; text: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'wanneer-is-uw-band-versleten',
    title: 'Wanneer is uw band echt versleten?',
    excerpt:
      'Profielmeting voor leken — en wat de keuringseisen zeggen. Een korte gids met foto’s.',
    date: '2026-04-12',
    category: 'Gids',
    readMinutes: 4,
    body: [
      {
        text:
          'De wettelijke minimum-profieldiepte in Nederland is 1.6mm. Maar lang daarvoor levert uw band al merkbaar minder grip in — vooral op nat wegdek.',
      },
      {
        heading: 'Hoe meet u zelf?',
        text:
          'Steek een muntje van 2 euro in het profielblok. Verdwijnt de zilveren rand volledig, heeft u nog minstens 3mm. Ziet u de hele rand, dan is het tijd voor vervanging.',
      },
      {
        heading: 'Wat zegt de APK?',
        text:
          'Onder 1.6mm krijgt u geen APK-goedkeuring. Tussen 1.6 en 3mm is technisch toegestaan, maar wij adviseren al vanaf 3mm te vervangen — vooral voor winterbanden, waar de grip eerder terugloopt.',
      },
      {
        heading: 'Gratis check',
        text:
          'Loop bij ons binnen — een profielmeting kost niets en duurt drie minuten. Bij twijfel rekenen wij voor u uit of vervangen of doorrijden voordeliger is.',
      },
    ],
    metaTitle: 'Wanneer is uw band versleten? — profielcheck uitleg',
    metaDescription:
      'Hoe weet u of uw band aan vervanging toe is? Profielmeting in 1 minuut, APK-eisen uitgelegd. Een korte gids van Probandenservice Rotterdam.',
  },
  {
    slug: '2d-versus-3d-uitlijnen',
    title: 'Het verschil tussen 2D en 3D uitlijnen',
    excerpt:
      'Waarom moderne Hunter Hawkeye apparatuur een ander resultaat geeft dan de oude bank-uitlijning.',
    date: '2026-04-03',
    category: 'Techniek',
    readMinutes: 5,
    body: [
      {
        text:
          'Veertig jaar lang werkten garages met "de bank" — een mechanische opstelling met een lange uitlijn-lat. Goed voor zijn tijd, maar onnauwkeurig naar moderne standaarden.',
      },
      {
        heading: 'Wat doet 3D anders?',
        text:
          'In plaats van één meetpunt per wiel gebruikt 3D uitlijnen vier camera’s die elk wiel volledig in beeld brengen. De software meet niet alleen de wielstand, maar ook de hoeken die u niet ziet — caster, camber, toe — tot op tienden van een graad.',
      },
      {
        heading: 'Waarom u het merkt',
        text:
          'Een fout van slechts 0.5 graad in toe-in vreet 10% van uw bandenleven op én verhoogt uw verbruik met circa 3%. Op de bank zou die fout binnen marge vallen. Op 3D wordt hij gecorrigeerd.',
      },
      {
        heading: 'Rapport mee naar huis',
        text:
          'U krijgt na elke meting een rapport mee — voor en na. Transparant en handig om te bewaren bij uw onderhoudsboekje.',
      },
    ],
    metaTitle: '2D vs 3D Uitlijnen — wat is het verschil? | Probandenservice',
    metaDescription:
      'Waarom moderne 3D wieluitlijning (Hunter Hawkeye) een ander resultaat geeft dan de oude bank-uitlijning. Uitleg en cijfers van Probandenservice.',
  },
  {
    slug: 'allseasons-of-zomer-winter-set',
    title: 'Allseasons of toch zomer- en winterset?',
    excerpt:
      'Een eerlijk overzicht voor de Nederlandse weersomstandigheden — en wat goedkoper uitpakt op de lange termijn.',
    date: '2026-03-21',
    category: 'Seizoen',
    readMinutes: 6,
    body: [
      {
        text:
          'De vraag krijgen we minstens vijf keer per week. Het eerlijke antwoord: het hangt af van uw kilometrage en waar u rijdt.',
      },
      {
        heading: 'De cijfers',
        text:
          'Een nette allseason gaat in Nederland ongeveer 50.000 km mee. Een zomer- en winterset samen halen makkelijk 100.000 km, omdat u ze afwisselend gebruikt. De aanschaf is duurder, het kilometertarief vaak vergelijkbaar.',
      },
      {
        heading: 'Wanneer kiest u allseason?',
        text:
          'Rijdt u minder dan 15.000 km per jaar, vooral in de stad, en gaat u zelden naar de Alpen? Dan is een goede allseason (Continental AllSeasonContact of Michelin CrossClimate) prima.',
      },
      {
        heading: 'Wanneer twee setten?',
        text:
          'Rijdt u veel snelweg, naar Duitsland in de winter, of woont u in een gebied met veel vorst? Dan is een aparte zomer- en winterset veiliger en op lange termijn vaak voordeliger.',
      },
      {
        heading: 'Bandenopslag scheelt gedoe',
        text:
          'Het grootste argument tegen twee setten is "waar leg ik ze?". Daarom bieden wij opslag aan voor €49 per seizoen — inclusief profielcheck en automatische reminder.',
      },
    ],
    metaTitle: 'Allseasons of zomer- + winterbanden? — eerlijke vergelijking',
    metaDescription:
      'Wat is voordeliger in Nederland: allseasons of een aparte zomer- en winterset? Eerlijke cijfers en advies van Probandenservice Rotterdam.',
  },
  {
    slug: 'vakantiecheck-zomer-2026',
    title: 'Vakantie met de auto? Check dit vooraf',
    excerpt:
      'Elk jaar stranden honderden Nederlandse gezinnen met pech onderweg. Zo voorkomt u het met een check van minder dan een uur.',
    date: '2026-05-08',
    category: 'Zomer',
    readMinutes: 5,
    body: [
      {
        text:
          'De files op de A2 en A12 staan vol — het zomerseizoen is begonnen. Elk jaar ontvangen wij tijdens de eerste vakantieweken meer spoedoproepen dan de rest van het jaar samen. De oorzaak: rijden met ongecontroleerde banden, een airco die het begeven heeft op 35 graden, en vergeten bandenspanning.',
      },
      {
        heading: 'Banden: het klinkt cliché, maar',
        text:
          'Autorijden met 1,5 mm profiel op de snelweg bij 130 km/u is in droge omstandigheden prima. Totdat er regen valt in de Vendée en uw rem-weg met 30% toeneemt. Controleer uw profieldiepte — de grens van 1.6 mm is wettelijk, maar 3 mm is de veilige grens.',
      },
      {
        heading: 'Airco: 10% verlies per jaar',
        text:
          'Uw airco is 3 jaar oud en u heeft hem nooit laten bijvullen? Dan koelt hij waarschijnlijk al minder effectief. Bij hitte stijgt de temperatuur in een niet-geventileerde auto in 10 minuten naar 40°C+. Airco bijvullen duurt 60 minuten en kost bij ons €49 (zomeractie 2026).',
      },
      {
        heading: 'Bandenspanning vergeten',
        text:
          'Onderdruk verhoogt bandenslijtage en verhoogt verbruik. Overdruk maakt de band stijver en vermindert de grip. Controleer altijd de bandenspanning na een lange stilstand — ook als uw auto een TPMS-sensor heeft.',
      },
      {
        heading: 'Ons vakantiecheck pakket',
        text:
          'Voor €89 doen wij een complete vakantiecheck: profielmeting, bandenspanning, uitlijnen meting, airco check en lichten. U rijdt weg met een digitaal rapport en de zekerheid dat uw auto klaar is voor de weg.',
      },
    ],
    metaTitle: 'Vakantie check auto 2026 — banden, airco en uitlijnen | Probandenservice',
    metaDescription:
      'Bereid uw auto voor op de zomervakantie. Bandenprofiel, airco vullen en uitlijnen check. Complete vakantiecheck voor €89 bij Probandenservice Rotterdam.',
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
