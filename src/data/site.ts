export const business = {
  name: 'Catarinetes Reus',
  shortName: 'Catarinetes',
  tagline: 'Moda de dona amb tracte proper',
  description:
    'Botiga de moda de dona al centre de Reus amb looks actuals, peces còmodes, atenció personalitzada, enviaments i devolucions senzilles.',
  address: 'C/ Jesús · Reus',
  city: 'Reus',
  phone: '+34977341663',
  phoneLabel: '977 34 16 63',
  hours: 'Dilluns a dissabte · 10.00–13.30 h / 17.00–20.30 h',
  instagram: 'https://www.instagram.com/catarinetes_reus/',
  mapsUrl: 'https://www.google.com/maps?q=C%2F%20Jes%C3%BAs%2C%20Reus&output=embed',
  logo: 'assets/img/logo-catarinetes-crop.jpg',
  storyImage: 'assets/img/historia-catarinetes.png',
  heroImage: 'assets/img/look-verd.jpg',
};

export const navItems = [
  { label: 'Looks', href: '#looks' },
  { label: 'Botiga', href: '#botiga' },
  { label: 'Serveis', href: '#serveis' },
  { label: 'Enviaments', href: '#enviaments' },
  { label: 'Contacte', href: '#contacte' },
];

export const quickInfo = [
  { label: 'Adreça', value: business.address },
  { label: 'Horari', value: 'Dilluns a dissabte' },
  { label: 'Telèfon', value: business.phoneLabel },
  { label: 'Enviaments', value: 'Gratis a partir de 120 €' },
];

export const looks = [
  {
    title: 'Look blau estampat',
    tag: 'Novetat',
    image: 'assets/img/look-blau.jpg',
    alt: 'Look blau estampat de Catarinetes',
    description:
      'Conjunt amb samarreta blava, pantaló estampat i complements. Ideal per a un estil còmode i diferent.',
  },
  {
    title: 'Look verd llima',
    tag: 'Color',
    image: 'assets/img/look-verd.jpg',
    alt: 'Look verd llima de Catarinetes',
    description:
      'Total look en verd amb peça fluida, punt lleuger i collaret llarg. Una proposta fresca i molt visual.',
  },
  {
    title: 'Look vermell i blau',
    tag: 'Casual',
    image: 'assets/img/look-vermell.jpg',
    alt: 'Look vermell i blau de Catarinetes',
    description:
      'Combinació de vermell, camisa de ratlles i pantaló clar. Un look alegre per al dia a dia.',
  },
  {
    title: 'Look negre fluid',
    tag: 'Bàsic elegant',
    image: 'assets/img/look-negre.jpg',
    alt: 'Look negre fluid de Catarinetes',
    description:
      'Conjunt negre de línia fluida i còmoda. Fàcil de portar i combinar amb complements.',
  },
  {
    title: 'Look rosa suau',
    tag: 'Primavera',
    image: 'assets/img/look-rosa-ratlles.jpg',
    alt: 'Look rosa suau de Catarinetes',
    description:
      'Camisa rosa clara amb pantaló rosa. Una proposta lluminosa i femenina.',
  },
  {
    title: 'Camisa quadres rosa',
    tag: 'Estampat',
    image: 'assets/img/look-quadres-rosa.jpg',
    alt: 'Camisa de quadres rosa de Catarinetes',
    description:
      'Camisa de quadres en tons roses combinada amb pantaló rosa. Look informal i actual.',
  },
];

export const services = [
  {
    title: 'Assessorament proper',
    description:
      'T’ajudem a trobar peces que encaixin amb el teu estil, la teva talla i el moment en què les vols portar.',
  },
  {
    title: 'Looks complets',
    description:
      'Propostes combinades perquè sigui més fàcil imaginar el conjunt sencer abans de comprar.',
  },
  {
    title: 'Consulta per Instagram',
    description:
      'Pots preguntar per talles, disponibilitat o reservar una peça directament des del perfil de la botiga.',
  },
  {
    title: 'Compra a distància',
    description:
      'Enviaments disponibles amb pagament per Bizum o targeta, pensats per clientes de fora de Reus.',
  },
];

export const policies = [
  {
    title: 'Enviaments',
    image: 'assets/img/enviaments.jpg',
    items: [
      'Enviaments gratuïts en compres superiors a 120 €.',
      '4,95 € en compres inferiors.',
      'Pagament mitjançant Bizum o targeta.',
    ],
  },
  {
    title: 'Devolucions',
    image: 'assets/img/devolucions.jpg',
    items: [
      'Màxim 7 dies després de la rebuda o entrega.',
      'Peces i etiquetatge en perfecte estat.',
      'No es retornaran els diners.',
      'Es farà un val de compra amb caducitat de 6 mesos.',
    ],
  },
];

export const reviews = [
  {
    quote:
      'Una botiga de les de sempre, amb roba actual i una atenció molt propera.',
    author: 'Clienta local',
  },
  {
    quote:
      'M’agrada perquè publiquen looks complets i és fàcil preguntar per talles.',
    author: 'Clienta de Catarinetes',
  },
  {
    quote:
      'Una selecció molt cuidada i peces còmodes per al dia a dia.',
    author: 'Clienta de Reus',
  },
];
