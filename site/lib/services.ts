// Diensten data — gebaseerd op probandenservice.nl
// Locatie: Bellweg 40, 4104 BJ Culemborg | Tel: 06 42 51 36 92

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  intro: string;
  body: { heading: string; text: string }[];
  tags: string[];
  price?: string;
  duration?: string;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'banden-verkoop',
    number: '01',
    title: 'Bandenverkoop',
    shortTitle: 'Banden',
    tagline: 'Groot assortiment hoogwaardige banden van toonaangevende merken.',
    summary:
      'Ontdek een uitgebreid assortiment hoogwaardige banden voor alle voertuigtypen en rijomstandigheden. Zomer, winter, all-season — eerlijk advies op basis van jouw auto en rijstijl.',
    intro:
      'Een goede band is de basis van veilig rijden. Of je nu dagelijks door de stad rijdt of regelmatig de snelweg op gaat — wij helpen je aan de juiste band voor jouw situatie.',
    body: [
      {
        heading: 'Voor elk voertuig',
        text:
          'Van kleine stadsauto tot grote SUV en bestelwagen — banden voor alle gangbare voertuigtypen en maten. Van toonaangevende merken zoals Michelin, Continental en Bridgestone tot kwalitatieve middenklassers.',
      },
      {
        heading: 'Eerlijk advies',
        text:
          'Zomerbanden, winterbanden of all-season? We kijken naar hoe en waar je rijdt en geven eerlijk advies. Zijn je banden nog goed? Dan zeggen we dat. Pas als vervanging echt nodig is, leggen we uit waarom.',
      },
      {
        heading: 'Montage erbij',
        text:
          'Banden kopen en meteen monteren — dat doen we in één bezoek. Vakkundig gemonteerd, gebalanceerd en klaar om op te rijden.',
      },
    ],
    tags: ['Zomerbanden', 'Winterbanden', 'All-season', 'Alle merken'],
    metaTitle: 'Banden kopen Culemborg — alle merken & maten | Probandenservice',
    metaDescription:
      'Banden kopen in Culemborg. Groot assortiment zomer-, winter- en all-seasonbanden. Eerlijk advies, vakkundige montage. Bel 06 42 51 36 92.',
  },
  {
    slug: 'banden-vervangen',
    number: '02',
    title: 'Bandenwissel',
    shortTitle: 'Wissel',
    tagline: 'Vakkundig gewisseld — veilig en met optimale grip de weg op.',
    summary:
      'Laat je banden vakkundig wisselen door onze monteurs. Van seizoenswisseling tot montage van nieuwe banden — snel, zorgvuldig en klaar terwijl je wacht.',
    intro:
      'Banden wisselen klinkt simpel, maar fout monteren beschadigt je velg en zorgt voor trillingen op de snelweg. Wij doen het zorgvuldig, op professionele montagemachines.',
    body: [
      {
        heading: 'Wat er bij zit',
        text:
          'Demontage van je huidige banden, montage van de nieuwe set, balancering op alle vier wielen en controle van bandenspanning. Oude banden voeren we voor je af.',
      },
      {
        heading: 'Snel klaar',
        text:
          'Een gewone seizoenswisseling duurt bij ons gemiddeld 30 tot 45 minuten. Je kunt wachten terwijl we bezig zijn.',
      },
      {
        heading: 'Balanceren inbegrepen',
        text:
          'Na elke montage balanceren we de wielen. Dat voorkomt trillingen bij hogere snelheden en zorgt dat je banden gelijkmatig slijten.',
      },
    ],
    tags: ['Seizoenswisseling', 'Montage', 'Balanceren'],
    metaTitle: 'Banden wisselen Culemborg | Probandenservice',
    metaDescription:
      'Banden wisselen in Culemborg. Vakkundig gemonteerd en gebalanceerd, snel klaar. Bel 06 42 51 36 92 voor een afspraak.',
  },
  {
    slug: 'airco-vullen',
    number: '03',
    title: 'Airco vullen',
    shortTitle: 'Airco',
    tagline: 'Airconditioningsysteem vullen en onderhouden door ons ervaren team.',
    summary:
      'Laat je airconditioningsysteem vullen en onderhouden. R134a en R1234yf op voorraad — we checken op lekkages en zorgen dat je airco weer optimaal koelt.',
    intro:
      'Een airco verliest elk jaar een deel van zijn koudemiddel. Na een paar jaar merk je dat hij minder goed koelt. Wij vullen bij en controleren meteen of er een lek is.',
    body: [
      {
        heading: 'R134a en R1234yf',
        text:
          'Oudere auto\'s gebruiken R134a, nieuwere (na 2017) R1234yf. Wij hebben beide op voorraad en weten precies wat jouw auto nodig heeft.',
      },
      {
        heading: 'Inclusief lekcheck',
        text:
          'Bij elke vulbeurt controleren we of er een lek in het systeem zit. Zo voorkom je dat het koudemiddel er snel weer uit lekt.',
      },
      {
        heading: 'Snel klaar',
        text:
          'Een complete airco service duurt gemiddeld een uur. Je rijdt weg met een goed werkende airco.',
      },
    ],
    tags: ['R134a', 'R1234yf', 'Lekcheck'],
    duration: '± 60 minuten',
    metaTitle: 'Airco vullen Culemborg — R134a & R1234yf | Probandenservice',
    metaDescription:
      'Airco vullen in Culemborg. R134a en R1234yf op voorraad, inclusief lekcheck. Bel 06 42 51 36 92.',
  },
  {
    slug: '3d-uitlijnen',
    number: '04',
    title: '3D-Uitlijnen',
    shortTitle: 'Uitlijnen',
    tagline: 'Geavanceerde 3D-uitlijning voor perfect uitgelijnde wielen.',
    summary:
      'Geavanceerde 3D-uitlijningsservice zodat jouw wielen perfect zijn uitgelijnd voor optimale rijeigenschappen en minder bandenslijtage.',
    intro:
      'Trekt je auto naar één kant? Slijten je banden ongelijkmatig? Dat zijn tekenen dat uitlijning nodig is. Wij meten en corrigeren met moderne 3D-apparatuur.',
    body: [
      {
        heading: 'Wat is 3D-uitlijnen?',
        text:
          'Met 3D-uitlijning meten we de exacte positie van al je wielen ten opzichte van elkaar en de rijrichting. Afwijkingen worden nauwkeurig geconstateerd en gecorrigeerd.',
      },
      {
        heading: 'Wanneer is het nodig?',
        text:
          'Na een flinke stoot tegen een stoeprand, na het rijden door een diepe kuil, of als je merkt dat je auto naar één kant trekt. Ook standaard bij vier nieuwe banden.',
      },
      {
        heading: 'Wat levert het op?',
        text:
          'Recht rijden zonder stuurcorrectie, gelijkmatige bandenslijtage en lagere brandstofkosten.',
      },
    ],
    tags: ['3D-uitlijnen', 'Wieluitlijning'],
    metaTitle: '3D-uitlijnen Culemborg | Probandenservice',
    metaDescription:
      'Wielen uitlijnen in Culemborg. Geavanceerde 3D-uitlijning voor optimale rijprestaties. Bel 06 42 51 36 92.',
  },
  {
    slug: 'spoedservice',
    number: '05',
    title: 'Spoedservice',
    shortTitle: 'Spoed',
    tagline: 'Tijdelijke band ter plekke — veilig tot 80 km/u verder.',
    summary:
      'Pech onderweg met een lekke band? Wij rijden naar je toe, monteren ter plekke een tijdelijke band waarmee je veilig tot 80 km/u kunt rijden. Kapotte band nemen we mee en repareren we voor je.',
    intro:
      'Lekke band onderweg is altijd op het verkeerde moment. Bel ons en we rijden zo snel mogelijk naar je toe — dag en nacht, 24/7 bereikbaar.',
    body: [
      {
        heading: 'Tijdelijke band ter plekke',
        text:
          'We monteren een tijdelijke band ter plekke waarmee je veilig tot 80 km/u kunt rijden. Zo kom je thuis of naar de werkplaats zonder gesleep.',
      },
      {
        heading: 'Kapotte band mee, reparatie geregeld',
        text:
          'Je kapotte band nemen we mee. We repareren hem voor je en je kunt hem daarna ophalen bij onze werkplaats in Culemborg.',
      },
      {
        heading: '24/7 bereikbaar',
        text:
          'Dag of nacht, weekdag of weekend — onze spoedlijn staat altijd aan. Bel 06 40 96 18 48 en we komen zo snel mogelijk naar je toe.',
      },
    ],
    tags: ['24/7', 'Tijdelijke band', '80 km/u'],
    featured: true,
    metaTitle: 'Spoedservice lekke band Culemborg | Probandenservice',
    metaDescription:
      'Lekke band in Culemborg en omgeving? 24/7 spoedservice. Tijdelijke band ter plekke. Bel 06 40 96 18 48.',
  },
  {
    slug: 'bandenopslag',
    number: '06',
    title: 'Bandenopslag',
    shortTitle: 'Opslag',
    tagline: 'Wisselseizoen zonder gedoe — wij bewaren jouw set.',
    summary:
      'Geen ruimte voor je reserveset? Wij slaan je banden op in onze werkplaats. Bij de volgende wisseling liggen ze klaar — inclusief profielcheck.',
    intro:
      'Banden in de schuur of garage opslaan is gedoe. Wij bewaren ze voor je — netjes gelabeld, klaar voor het volgende seizoen.',
    body: [
      {
        heading: 'Hoe het werkt',
        text:
          'Je laat de set achter na de seizoenswisseling. Wij labelen ze en bewaren ze tot je terugkomt voor de volgende wisseling.',
      },
      {
        heading: 'Profielcheck inbegrepen',
        text:
          'Bij elke wisseling controleren we de profieldiepte van alle vier banden. Zo weet je op tijd wanneer vervanging nodig is.',
      },
      {
        heading: 'Praktisch en simpel',
        text:
          'Geen banden meer sjouwen, geen vieze handen, geen gezeur over opslagruimte. Gewoon inleveren en ophalen.',
      },
    ],
    tags: ['Bandenopslag', 'Profielcheck', 'Seizoenswisseling'],
    metaTitle: 'Bandenopslag Culemborg | Probandenservice',
    metaDescription:
      'Banden opslaan in Culemborg. Wij bewaren jouw set netjes tot de volgende wisseling, inclusief profielcheck. Bel 06 42 51 36 92.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
