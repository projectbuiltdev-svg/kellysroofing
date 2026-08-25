export type LocationProfile = {
  header: string;
  metaDescription: string;
  coordinates: {
    latitude: number;
    longitude: number;
    label: string;
  };
  introduction: [string, string, string, string];
  attractions: [string, string, string];
};

type LocationSeed = {
  name: string;
  latitude: number;
  longitude: number;
  setting: string;
  attractions: [string, string, string];
};

const seeds: Record<string, LocationSeed> = {
  adamstown: { name: 'Adamstown', latitude: 53.3353, longitude: -6.4689, setting: 'modern estates, apartment buildings, terraces and family homes around its parks and rail station', attractions: ['Airlie Park', "Tandy's Lane Park", 'Griffeen Valley Park'] },
  artane: { name: 'Artane', latitude: 53.3876, longitude: -6.2133, setting: 'mature red-brick streets, mid-century estates and newer infill homes', attractions: ['Artane Castle Shopping Centre', 'Rockfield Park', 'St David’s Church'] },
  ashtown: { name: 'Ashtown', latitude: 53.3754, longitude: -6.3315, setting: 'canal-side apartments, railway-era terraces and established suburban houses', attractions: ['Royal Canal Greenway', 'Tolka Valley Park', 'Phoenix Park'] },
  balbriggan: { name: 'Balbriggan', latitude: 53.6083, longitude: -6.1821, setting: 'coastal terraces, established estates, one-off houses and a busy historic town centre', attractions: ['Balbriggan Lighthouse', 'Balbriggan Beach', 'Ardgillan Castle and Demesne'] },
  baldoyle: { name: 'Baldoyle', latitude: 53.3997, longitude: -6.1258, setting: 'coastal cottages, settled estates and modern homes near the estuary', attractions: ['Baldoyle Bay', 'Seagrange Park', 'Racecourse Park'] },
  balgriffin: { name: 'Balgriffin', latitude: 53.4097, longitude: -6.1764, setting: 'new residential schemes, older cottages and homes on the rural-urban edge', attractions: ['Father Collins Park', 'Balgriffin Cemetery', 'Baldoyle Bay'] },
  ballinteer: { name: 'Ballinteer', latitude: 53.2771, longitude: -6.2537, setting: 'hillside estates, semi-detached family houses and apartment developments below the Dublin Mountains', attractions: ['Marlay Park', 'Ballawley Park', 'Dún Laoghaire Golf Club at Ballyman'] },
  ballsbridge: { name: 'Ballsbridge', latitude: 53.3280, longitude: -6.2297, setting: 'Victorian and Edwardian houses, embassy properties, offices and modern apartments beside the Dodder', attractions: ['Herbert Park', 'Aviva Stadium', 'National Print Museum'] },
  ballyboden: { name: 'Ballyboden', latitude: 53.2806, longitude: -6.2985, setting: 'established family estates, older cottages and homes close to the foothills', attractions: ['Ballyboden St Enda’s GAA Club', 'St Enda’s Park', 'Pearse Museum'] },
  ballybough: { name: 'Ballybough', latitude: 53.3604, longitude: -6.2391, setting: 'compact city terraces, red-brick houses, flats and small commercial premises', attractions: ['Croke Park', 'Mountjoy Square Park', 'Royal Canal Greenway'] },
  ballybrack: { name: 'Ballybrack', latitude: 53.2537, longitude: -6.1354, setting: 'mature housing estates, traditional cottages and homes rising towards Killiney Hill', attractions: ['Killiney Hill Park', 'Cabinteely Park', 'Ballybrack Dolmen'] },
  ballyfermot: { name: 'Ballyfermot', latitude: 53.3426, longitude: -6.3586, setting: 'mid-century terraces and corporation-built estates alongside newer residential schemes', attractions: ['Ballyfermot Library', 'Le Fanu Park', 'Irish National War Memorial Gardens'] },
  ballygall: { name: 'Ballygall', latitude: 53.3895, longitude: -6.2778, setting: 'settled suburban roads of semi-detached houses, terraces and carefully extended family homes', attractions: ['Johnstown Park', 'Albert College Park', 'Glasnevin Cemetery'] },
  ballymount: { name: 'Ballymount', latitude: 53.3140, longitude: -6.3498, setting: 'industrial and commercial units mixed with long-established homes near the city edge', attractions: ['Tymon Park', 'Ballymount Park', 'The Round Tower Clondalkin'] },
  ballymun: { name: 'Ballymun', latitude: 53.3973, longitude: -6.2647, setting: 'regenerated apartment schemes, terraces and established estates around the civic centre', attractions: ['The Rediscovery Centre', 'Poppintree Park', 'Albert College Park'] },
  ballyroan: { name: 'Ballyroan', latitude: 53.2858, longitude: -6.2996, setting: 'quiet mid-century estates, bungalows and extended semi-detached homes', attractions: ['Ballyroan Library', 'St Enda’s Park', 'Dodder Valley Park'] },
  bayside: { name: 'Bayside', latitude: 53.3918, longitude: -6.1408, setting: 'coastal-era estates, terraced houses and low-rise homes exposed to sea air', attractions: ['Bayside DART Station', 'Baldoyle Bay', 'St Anne’s Park'] },
  beaumont: { name: 'Beaumont', latitude: 53.3913, longitude: -6.2292, setting: 'mature semi-detached estates, bungalows and homes enlarged over several generations', attractions: ['Beaumont Woods', 'Ellenfield Park', 'St Anne’s Park'] },
  belfield: { name: 'Belfield', latitude: 53.3083, longitude: -6.2218, setting: 'campus buildings, period houses, apartments and established suburban homes', attractions: ['UCD Belfield Campus', 'UCD Rose Garden', 'Deerpark'] },
  blackrock: { name: 'Blackrock', latitude: 53.3015, longitude: -6.1778, setting: 'period terraces, coastal villas, apartments and established residential streets', attractions: ['Blackrock Park', 'Blackrock Market', 'Frascati Shopping Centre'] },
  blanchardstown: { name: 'Blanchardstown', latitude: 53.3888, longitude: -6.3770, setting: 'older village homes, broad suburban estates, apartments and commercial buildings', attractions: ['Blanchardstown Centre', 'Millennium Park', 'National Aquatic Centre'] },
  bluebell: { name: 'Bluebell', latitude: 53.3297, longitude: -6.3338, setting: 'traditional terraces and family estates beside a substantial industrial district', attractions: ['Bluebell Community Centre', 'Grand Canal Greenway', 'Tymon Park'] },
  booterstown: { name: 'Booterstown', latitude: 53.3099, longitude: -6.1953, setting: 'coastal period houses, mature suburban homes and modern apartment blocks', attractions: ['Booterstown Marsh', 'Blackrock Park', 'Elm Park Golf Club'] },
  cabinteely: { name: 'Cabinteely', latitude: 53.2616, longitude: -6.1548, setting: 'village cottages, leafy detached homes, estates and newer apartment developments', attractions: ['Cabinteely Park', 'The Oratory Dún Laoghaire', 'Kilbogget Park'] },
  cabra: { name: 'Cabra', latitude: 53.3668, longitude: -6.2944, setting: 'recognisable terraces, red-brick houses and infill homes around the north-west inner city', attractions: ['Blessington Street Basin', 'Grangegorman Campus', 'Phoenix Park'] },
  carrickmines: { name: 'Carrickmines', latitude: 53.2508, longitude: -6.1836, setting: 'older rural houses, modern estates, apartments and large commercial buildings near the foothills', attractions: ['Carrickmines Equestrian Centre', 'Carrickmines Park', 'The Lead Mines Chimney'] },
  castleknock: { name: 'Castleknock', latitude: 53.3747, longitude: -6.3632, setting: 'village terraces, substantial period homes and mature family estates beside the Phoenix Park', attractions: ['Farmleigh House', 'Phoenix Park', 'Castleknock Castle'] },
  chapelizod: { name: 'Chapelizod', latitude: 53.3488, longitude: -6.3444, setting: 'historic village terraces, cottages, apartments and riverside properties', attractions: ['Phoenix Park', 'Anna Livia Bridge', 'Chapelizod Old Church'] },
  'cherry-orchard': { name: 'Cherry Orchard', latitude: 53.3362, longitude: -6.3761, setting: 'established estates, terraces and newer housing around open green spaces', attractions: ['Cherry Orchard Park', 'Le Fanu Park', 'Park West Plaza'] },
  churchtown: { name: 'Churchtown', latitude: 53.2964, longitude: -6.2586, setting: 'mature semi-detached houses, bungalows and sensitively extended family homes', attractions: ['Dundrum Town Centre', 'Dodder Linear Park', 'Bottle Tower'] },
  clondalkin: { name: 'Clondalkin', latitude: 53.3215, longitude: -6.3947, setting: 'historic village buildings, extensive housing estates and busy commercial premises', attractions: ['Clondalkin Round Tower', 'Corkagh Park', 'Newlands Castle'] },
  clongriffin: { name: 'Clongriffin', latitude: 53.4029, longitude: -6.1483, setting: 'contemporary apartment buildings, townhouses and compact modern estates', attractions: ['Father Collins Park', 'Baldoyle Bay', 'Clongriffin DART Station'] },
  clonshaugh: { name: 'Clonshaugh', latitude: 53.4120, longitude: -6.2174, setting: 'settled housing estates and substantial logistics and commercial buildings near the airport', attractions: ['Santry Demesne', 'Clarehall Shopping Centre', 'Belcamp Park'] },
  clonskeagh: { name: 'Clonskeagh', latitude: 53.3146, longitude: -6.2314, setting: 'period villas, leafy suburban houses, apartments and properties along the Dodder', attractions: ['UCD Belfield Campus', 'Dodder Linear Park', 'Islamic Cultural Centre of Ireland'] },
  clontarf: { name: 'Clontarf', latitude: 53.3636, longitude: -6.1961, setting: 'red-brick terraces, period seafront houses, mature estates and apartments facing Dublin Bay', attractions: ['St Anne’s Park', 'Clontarf Promenade', 'Bull Island'] },
  coolock: { name: 'Coolock', latitude: 53.3899, longitude: -6.1995, setting: 'long-established terraces and estates alongside retail and light-industrial buildings', attractions: ['Stardust Memorial Park', 'Parnells GAA Club', 'St Anne’s Park'] },
  crumlin: { name: 'Crumlin', latitude: 53.3243, longitude: -6.3142, setting: 'mid-century terraces, compact family homes and busy neighbourhood shopping streets', attractions: ['Brickfield Park', 'Crumlin Village', 'Eamonn Ceannt Park'] },
  dalkey: { name: 'Dalkey', latitude: 53.2785, longitude: -6.1056, setting: 'historic stone buildings, Victorian terraces, coastal villas and hillside homes', attractions: ['Dalkey Castle and Heritage Centre', 'Killiney Hill Park', 'Coliemore Harbour'] },
  darndale: { name: 'Darndale', latitude: 53.4017, longitude: -6.1929, setting: 'terraced estates, community buildings and newer homes close to the northern fringe', attractions: ['Darndale Park', 'Belcamp Park', 'Father Collins Park'] },
  'dolphins-barn': { name: 'Dolphins Barn', latitude: 53.3312, longitude: -6.2914, setting: 'traditional city terraces, red-brick homes, apartments and small business premises', attractions: ['Grand Canal Greenway', 'Eamonn Ceannt Park', 'Irish National War Memorial Gardens'] },
  donabate: { name: 'Donabate', latitude: 53.4872, longitude: -6.1510, setting: 'village houses, expanding modern estates and coastal homes on the peninsula', attractions: ['Newbridge House and Farm', 'Donabate Beach', 'Rogerstown Estuary'] },
  donaghmede: { name: 'Donaghmede', latitude: 53.3958, longitude: -6.1618, setting: 'mature estates, terraces and apartment schemes between the coast and northern suburbs', attractions: ['Father Collins Park', 'Baldoyle Bay', 'St Anne’s Park'] },
  donnybrook: { name: 'Donnybrook', latitude: 53.3207, longitude: -6.2351, setting: 'Victorian terraces, substantial period houses, apartments and village shopfronts', attractions: ['Herbert Park', 'Donnybrook Stadium', 'Dodder Linear Park'] },
  donnycarney: { name: 'Donnycarney', latitude: 53.3736, longitude: -6.2171, setting: 'solid mid-century houses, red-brick terraces and extended family homes', attractions: ['Fairview Park', 'Clontarf Promenade', 'Croke Park'] },
  drimnagh: { name: 'Drimnagh', latitude: 53.3310, longitude: -6.3192, setting: 'distinctive brick terraces, compact estates and homes with later rear additions', attractions: ['Drimnagh Castle', 'Brickfield Park', 'Grand Canal Greenway'] },
  drumcondra: { name: 'Drumcondra', latitude: 53.3701, longitude: -6.2549, setting: 'Victorian red-brick terraces, larger period houses, flats and village businesses', attractions: ['National Botanic Gardens', 'Croke Park', 'Tolka Park'] },
  dundrum: { name: 'Dundrum', latitude: 53.2903, longitude: -6.2417, setting: 'older village buildings, mature estates, apartments and modern commercial property', attractions: ['Dundrum Town Centre', 'Airfield Estate', 'Dún Laoghaire–Rathdown County Hall Dundrum Offices'] },
  'dun-laoghaire': { name: 'Dún Laoghaire', latitude: 53.2944, longitude: -6.1339, setting: 'Victorian terraces, seafront properties, apartments and historic commercial buildings', attractions: ['Dún Laoghaire East Pier', 'People’s Park', 'National Maritime Museum of Ireland'] },
  'east-wall': { name: 'East Wall', latitude: 53.3545, longitude: -6.2262, setting: 'compact dockland terraces, cottages, apartments and converted commercial premises', attractions: ['The Point', 'Royal Canal Greenway', 'Fairview Park'] },
  fairview: { name: 'Fairview', latitude: 53.3634, longitude: -6.2365, setting: 'red-brick terraces, period houses, apartments and busy village-front properties', attractions: ['Fairview Park', 'Tolka Park', 'Croke Park'] },
  finglas: { name: 'Finglas', latitude: 53.3890, longitude: -6.2988, setting: 'old village buildings, broad residential estates, terraces and commercial units', attractions: ['Johnstown Park', 'Tolka Valley Park', 'Finglas Village Cross'] },
  foxrock: { name: 'Foxrock', latitude: 53.2665, longitude: -6.1834, setting: 'leafy detached houses, period residences and carefully designed modern homes', attractions: ['Foxrock Village', 'Leopardstown Racecourse', 'Cabinteely Park'] },
  glasnevin: { name: 'Glasnevin', latitude: 53.3781, longitude: -6.2706, setting: 'Victorian terraces, mature suburban houses, institutional buildings and apartments', attractions: ['National Botanic Gardens', 'Glasnevin Cemetery', 'Albert College Park'] },
  glasthule: { name: 'Glasthule', latitude: 53.2883, longitude: -6.1238, setting: 'colourful village terraces, period homes and compact coastal properties', attractions: ['People’s Park', 'Sandycove Beach', 'James Joyce Tower and Museum'] },
  glenageary: { name: 'Glenageary', latitude: 53.2818, longitude: -6.1328, setting: 'Victorian homes, mature estates, bungalows and elevated properties near the coast', attractions: ['The Metals', 'People’s Park', 'Dún Laoghaire East Pier'] },
  goatstown: { name: 'Goatstown', latitude: 53.2920, longitude: -6.2304, setting: 'mature family houses, bungalows, infill homes and low-rise apartments', attractions: ['Deerpark', 'UCD Belfield Campus', 'Airfield Estate'] },
  greenhills: { name: 'Greenhills', latitude: 53.3057, longitude: -6.3332, setting: 'settled mid-century estates, semi-detached houses and extended family homes', attractions: ['Tymon Park', 'Greenhills Park', 'The Square Tallaght'] },
  'harold-s-cross': { name: "Harold's Cross", latitude: 53.3263, longitude: -6.2808, setting: 'Victorian terraces, red-brick cottages, apartments and busy main-street buildings', attractions: ["Harold's Cross Park", 'Mount Jerome Cemetery', 'Grand Canal Greenway'] },
  howth: { name: 'Howth', latitude: 53.3871, longitude: -6.0659, setting: 'harbour cottages, period terraces, exposed coastal houses and hillside properties', attractions: ['Howth Harbour', 'Howth Cliff Walk', 'Howth Castle'] },
  inchicore: { name: 'Inchicore', latitude: 53.3416, longitude: -6.3206, setting: 'railway cottages, red-brick terraces, apartments and former industrial buildings', attractions: ['Irish National War Memorial Gardens', 'Richmond Barracks', 'Goldenbridge Cemetery'] },
  irishtown: { name: 'Irishtown', latitude: 53.3385, longitude: -6.2229, setting: 'historic cottages, tight terraces, apartments and homes exposed to Dublin Bay weather', attractions: ['Irishtown Nature Park', 'Sandymount Strand', 'Poolbeg Lighthouse'] },
  kilbarrack: { name: 'Kilbarrack', latitude: 53.3879, longitude: -6.1570, setting: 'coastal suburban estates, terraces and family houses affected by salt-laden air', attractions: ['Bayside Park', 'St Anne’s Park', 'Bull Island'] },
  killester: { name: 'Killester', latitude: 53.3730, longitude: -6.2048, setting: 'mature garden suburbs, red-brick terraces and extended semi-detached houses', attractions: ['St Anne’s Park', 'Clontarf Promenade', 'Killester DART Station'] },
  killiney: { name: 'Killiney', latitude: 53.2562, longitude: -6.1131, setting: 'coastal villas, hillside houses, mature estates and properties exposed above Dublin Bay', attractions: ['Killiney Hill Park', 'Killiney Beach', 'The Obelisk'] },
  kilmacud: { name: 'Kilmacud', latitude: 53.2886, longitude: -6.2102, setting: 'mature estates, bungalows and extended semi-detached homes on gently rising ground', attractions: ['Deerpark', 'Airfield Estate', 'Stillorgan Village'] },
  kilmainham: { name: 'Kilmainham', latitude: 53.3423, longitude: -6.3098, setting: 'historic terraces, red-brick homes, apartments and converted institutional buildings', attractions: ['Kilmainham Gaol', 'Royal Hospital Kilmainham', 'Irish National War Memorial Gardens'] },
  kilmarnock: { name: 'Kilmarnock', latitude: 53.3846, longitude: -6.2055, setting: 'established northside terraces and family houses around Kilmarnock Road', attractions: ['St Anne’s Park', 'Rockfield Park', 'Clontarf Promenade'] },
  kimmage: { name: 'Kimmage', latitude: 53.3203, longitude: -6.2993, setting: 'interwar and mid-century houses, terraces and extensively adapted family homes', attractions: ['Eamonn Ceannt Park', 'Tymon Park', 'Kimmage Manor'] },
  kinsealy: { name: 'Kinsealy', latitude: 53.4261, longitude: -6.1720, setting: 'rural cottages, detached houses and newer developments between Malahide and the city', attractions: ['Malahide Castle and Gardens', 'Newbridge House and Farm', 'Kinsealy Woods'] },
  knocklyon: { name: 'Knocklyon', latitude: 53.2807, longitude: -6.3177, setting: 'late twentieth-century estates, semi-detached houses and homes close to the Dodder', attractions: ['Dodder Valley Park', 'Tymon Park', 'St Enda’s Park'] },
  leopardstown: { name: 'Leopardstown', latitude: 53.2689, longitude: -6.2013, setting: 'modern apartments, established estates, office buildings and homes near the mountains', attractions: ['Leopardstown Racecourse', 'The Lead Mines Chimney', 'Fernhill House and Gardens'] },
  lucan: { name: 'Lucan', latitude: 53.3572, longitude: -6.4486, setting: 'historic village houses, large suburban estates and riverside properties around the Liffey', attractions: ['Lucan Demesne', 'St Catherine’s Park', 'The Italian Embassy at Lucan House'] },
  lusk: { name: 'Lusk', latitude: 53.5273, longitude: -6.1642, setting: 'historic village buildings, rural homes and rapidly growing modern estates', attractions: ['Lusk Round Tower', 'Newbridge House and Farm', 'Rogerstown Estuary'] },
  malahide: { name: 'Malahide', latitude: 53.4509, longitude: -6.1544, setting: 'village terraces, coastal houses, mature estates and marina-side apartments', attractions: ['Malahide Castle and Gardens', 'Malahide Beach', 'Malahide Marina'] },
  marino: { name: 'Marino', latitude: 53.3718, longitude: -6.2310, setting: 'garden-suburb terraces, distinctive 1920s houses and carefully extended homes', attractions: ['Casino Marino', 'Fairview Park', 'Croke Park'] },
  milltown: { name: 'Milltown', latitude: 53.3094, longitude: -6.2511, setting: 'Victorian houses, mature estates, apartments and riverside properties along the Dodder', attractions: ['Dodder Linear Park', 'Dropping Well', 'Dillon Garden'] },
  monkstown: { name: 'Monkstown', latitude: 53.2932, longitude: -6.1531, setting: 'Georgian and Victorian houses, coastal terraces, apartments and village properties', attractions: ['Monkstown Castle', 'Dún Laoghaire Harbour', 'Seapoint Beach'] },
  'mount-merrion': { name: 'Mount Merrion', latitude: 53.2970, longitude: -6.2142, setting: 'leafy detached and semi-detached houses, many with substantial later extensions', attractions: ['Deerpark', 'UCD Belfield Campus', 'The Rise Mount Merrion'] },
  mulhuddart: { name: 'Mulhuddart', latitude: 53.4023, longitude: -6.3974, setting: 'older village houses, broad modern estates and nearby business premises', attractions: ['Tolka Valley Park', 'Millennium Park', 'National Aquatic Centre'] },
  newcastle: { name: 'Newcastle', latitude: 53.3015, longitude: -6.5004, setting: 'village houses, rural properties and expanding estates on Dublin’s western edge', attractions: ['Newcastle Lyons Castle', 'Corkagh Park', 'Grange Castle Business Park'] },
  ongar: { name: 'Ongar', latitude: 53.3946, longitude: -6.4386, setting: 'contemporary townhouses, duplexes and apartment-led neighbourhoods', attractions: ['St Catherine’s Park', 'Tolka Valley Park', 'Hansfield Park'] },
  palmerstown: { name: 'Palmerstown', latitude: 53.3514, longitude: -6.3799, setting: 'mature estates, semi-detached homes and properties close to the Liffey valley', attractions: ['Waterstown Park', 'Farmleigh House', 'Phoenix Park'] },
  phibsborough: { name: 'Phibsborough', latitude: 53.3609, longitude: -6.2730, setting: 'Victorian red-brick terraces, cottages, flats and busy urban shopfronts', attractions: ['Blessington Street Basin', 'Dalymount Park', 'Royal Canal Greenway'] },
  portmarnock: { name: 'Portmarnock', latitude: 53.4235, longitude: -6.1372, setting: 'coastal estates, bungalows and detached homes exposed to sea winds and salt air', attractions: ['Portmarnock Beach', 'Velvet Strand', 'Malahide Estuary'] },
  portobello: { name: 'Portobello', latitude: 53.3351, longitude: -6.2750, setting: 'Georgian and Victorian terraces, red-brick houses and canal-side apartments', attractions: ['Grand Canal', 'Iveagh Gardens', 'Irish Jewish Museum'] },
  raheny: { name: 'Raheny', latitude: 53.3813, longitude: -6.1744, setting: 'village cottages, mature suburban houses and coastal estates', attractions: ['St Anne’s Park', 'Bull Island', 'Raheny Library'] },
  ranelagh: { name: 'Ranelagh', latitude: 53.3258, longitude: -6.2569, setting: 'Victorian red-brick terraces, cottages, apartments and handsome village buildings', attractions: ['Ranelagh Gardens Park', 'Dartmouth Square', 'Dodder Linear Park'] },
  rathcoole: { name: 'Rathcoole', latitude: 53.2829, longitude: -6.4723, setting: 'historic village properties, suburban estates and rural-edge houses', attractions: ['Corkagh Park', 'Rathcoole Park', 'Saggart Heritage Centre'] },
  rathfarnham: { name: 'Rathfarnham', latitude: 53.2980, longitude: -6.2858, setting: 'period village buildings, mature estates, bungalows and foothill homes', attractions: ['Rathfarnham Castle', 'St Enda’s Park', 'Marlay Park'] },
  rathgar: { name: 'Rathgar', latitude: 53.3123, longitude: -6.2744, setting: 'Victorian and Edwardian red-brick houses, terraces and converted apartments', attractions: ['Palmerston Park', 'Dodder Linear Park', 'Rathgar Village'] },
  rathmines: { name: 'Rathmines', latitude: 53.3207, longitude: -6.2657, setting: 'Victorian terraces, red-brick villas, apartments and prominent commercial buildings', attractions: ['Swan Leisure', 'Cathal Brugha Barracks', 'Palmerston Park'] },
  rialto: { name: 'Rialto', latitude: 53.3379, longitude: -6.2980, setting: 'compact terraces, red-brick homes, flats and properties beside the Grand Canal', attractions: ['Grand Canal Greenway', 'Royal Hospital Kilmainham', 'Irish National War Memorial Gardens'] },
  ringsend: { name: 'Ringsend', latitude: 53.3418, longitude: -6.2269, setting: 'historic dockers’ cottages, tight terraces, apartments and coastal commercial buildings', attractions: ['Poolbeg Lighthouse', 'Irishtown Nature Park', 'Grand Canal Dock'] },
};

const serviceParagraphs = [
  (name: string) => `Serving Dublin since 2009, our insured team can help ${name} property owners with roof repairs, slate and tile roofing, full roof replacement, flat roofing, guttering, chimney repairs and emergency roofing services.`,
  (name: string) => `Since 2009, our insured Dublin team has provided ${name} property owners with practical help across roof repairs, slate and tile work, replacement roofs, flat roofing, gutters, chimney repairs and roofing emergencies.`,
  (name: string) => `Our insured team has served Dublin since 2009, covering everything ${name} properties may need from focused roof repairs and flat roofing to slate, tile, replacement, gutter and chimney work, including emergency call-outs.`,
  (name: string) => `Kellys Roofing & Interiors has served Dublin since 2009. Our insured service range for ${name} includes repairs, slate and tile roofing, roof replacement, flat roofs, guttering, chimney repairs and emergency roofing support.`,
];

const interiorParagraphs = [
  'Ceilings, plastering, drylining, carpentry and interior finishing can also be included, so the roof and the rooms below are handled as one coherent scope.',
  'We also undertake ceilings, plastering, drylining, carpentry and interior finishing, bringing exterior protection and the interior work beneath it into one joined-up plan.',
  'Where work continues indoors, our ceilings, plastering, drylining, carpentry and finishing services allow the building to be considered as a connected whole.',
  'Our wider building service covers ceilings, plastering, drylining, carpentry and interior finishing, making it possible to coordinate the secure roof with the spaces underneath.',
];

const missionParagraphs = [
  (name: string) => `Our aim is to help ${name} property owners make a clear, practical decision about what their building needs. Contact our professional team for a free, no-obligation quote and straightforward advice on the next step.`,
  (name: string) => `Our mission is to give ${name} owners a clear route forward, based on the needs of the property. Speak with our professional team today for practical advice and a free, no-obligation quote.`,
  (name: string) => `We want every ${name} property owner to understand the sensible next move for their building. Contact us for professional guidance and a free, no-obligation quotation.`,
  (name: string) => `The goal is a clear, practical recommendation for your ${name} property. Our professional team is ready to help, so get in touch today for advice and a free, no-obligation quote.`,
];

const headerEndings = [
  'Practical roofing care for every kind of property.',
  'Clear roofing answers for local homes and buildings.',
  'Sound roofing and interior support, carefully planned.',
  'A considered approach to roofs and the rooms below.',
  'Dependable roofing guidance shaped around the building.',
  'Roofing decisions made clearer from the outset.',
  'Joined-up care for the whole property.',
  'Straightforward help for roofs, gutters and interiors.',
];

const metaDescriptionBuilders = [
  (name: string) => `Roof repairs, replacement, flat roofing and interior work in ${name}, Dublin. Get practical advice and a free quote from Kellys Roofing & Interiors.`,
  (name: string) => `Need roofing help in ${name}? Kellys Roofing & Interiors provides roof repairs, replacement, flat roofing and joined-up interior work across Dublin.`,
  (name: string) => `Kellys Roofing & Interiors serves ${name}, Dublin with roof repairs, new roofs, flat roofing and interior building work. Request a free quote.`,
  (name: string) => `Explore roofing services in ${name}, from focused leak repairs and roof replacement to flat roofing and interior finishing. Free quotes available.`,
  (name: string) => `Local roofing support for ${name} properties, including repairs, replacement roofs, flat roofing and interiors from Kellys Roofing & Interiors.`,
  (name: string) => `Planning roof work in ${name}, Dublin? Get clear advice on repairs, replacement, flat roofing and related interior work from the Kellys team.`,
  (name: string) => `Practical roofing services for homes and properties in ${name}: roof repairs, replacement, flat roofing and coordinated interior work.`,
  (name: string) => `From active leaks to planned roof renewal, Kellys Roofing & Interiors helps ${name} property owners choose the right roofing and interior work.`,
];

const formatCoordinate = (value: number, positive: string, negative: string) =>
  `${Math.abs(value).toFixed(4)}°${value >= 0 ? positive : negative}`;

export const locationProfiles: Record<string, LocationProfile> = Object.fromEntries(
  Object.entries(seeds).map(([slug, seed], index) => {
    const variation = index % 4;
    const introduction: [string, string, string, string] = [
      `Kellys Roofing & Interiors supports property owners in ${seed.name}, where ${seed.setting}. Different roof ages, alterations and exposure call for a careful assessment of leaks, coverings, flashing, gutters and junctions before the right course is agreed.`,
      serviceParagraphs[variation](seed.name),
      interiorParagraphs[variation],
      missionParagraphs[variation](seed.name),
    ];

    return [slug, {
      header: `${seed.name}: ${headerEndings[index % headerEndings.length]}`,
      metaDescription: metaDescriptionBuilders[index % metaDescriptionBuilders.length](seed.name),
      coordinates: {
        latitude: seed.latitude,
        longitude: seed.longitude,
        label: `${formatCoordinate(seed.latitude, 'N', 'S')}, ${formatCoordinate(seed.longitude, 'E', 'W')}`,
      },
      introduction,
      attractions: seed.attractions,
    }];
  }),
) as Record<string, LocationProfile>;