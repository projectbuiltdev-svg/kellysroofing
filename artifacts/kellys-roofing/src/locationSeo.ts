import { locationProfiles } from './locationProfiles';

export type PlaceKind = 'coastal' | 'terrace' | 'estate';

export type LocationNeighbour = {
  slug: string;
  name: string;
};

export type LocationPageModel = {
  sentence: string;
  base: string;
  localHeading: string;
  localBody: string;
  serviceHref: string;
  serviceLabel: string;
  repairsHref: string;
  repairsLabel: string;
  neighbours: LocationNeighbour[];
  faqs: ReadonlyArray<{ question: string; answer: string }>;
};

const coastalPattern = /\b(coast|coastal|seafront|harbour|harbor|beach|bay|marina|estuary|exposed)\b/i;
const terracePattern = /\b(victorian|edwardian|red-brick)\b/i;

export function placeKind(setting: string): PlaceKind {
  if (coastalPattern.test(setting)) return 'coastal';
  if (terracePattern.test(setting)) return 'terrace';
  return 'estate';
}

export function nearestLocations(slug: string, count = 6): LocationNeighbour[] {
  const origin = locationProfiles[slug];
  if (!origin) return [];

  return Object.entries(locationProfiles)
    .filter(([key]) => key !== slug)
    .map(([key, profile]) => {
      const dLat = profile.coordinates.latitude - origin.coordinates.latitude;
      const dLon = profile.coordinates.longitude - origin.coordinates.longitude;
      return { slug: key, name: profile.name, distance: dLat * dLat + dLon * dLon };
    })
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map(({ slug: neighbourSlug, name }) => ({ slug: neighbourSlug, name }));
}

export function locationPageModel(slug: string): LocationPageModel {
  const profile = locationProfiles[slug];
  const kind = placeKind(profile.setting);
  const neighbours = nearestLocations(slug, 6);
  const [first, second] = neighbours;
  const name = profile.name;
  const housing = profile.setting;

  const sentence = `Kellys Roofing & Interiors, a Dublin roofing contractor since 2009, repairs and replaces roofs in ${name}, Co. Dublin, including ${housing}.`;
  const base = `The business is based in Dublin 8 and serves ${name} alongside ${first.name} and ${second.name}.`;

  const local = kind === 'coastal'
    ? {
        localHeading: `Wind, salt and exposed slate in ${name}`,
        localBody: `Roofs in ${name}, Co. Dublin take wind, salt and driving rain. On ${housing}, the details that fail first are exposed slate, ridges and flashing. A ceiling mark after a hard blow off the water is a reason to look at those edges, not only at the stain indoors.`,
        serviceHref: '/services/roof-repairs',
        serviceLabel: `Roof repairs in ${name}`,
      }
    : kind === 'terrace'
      ? {
          localHeading: `Chimney flashing, valleys and party walls in ${name}`,
          localBody: `In ${name}, Co. Dublin, leaks often start at chimney flashing, valleys and party walls. ${housing.charAt(0).toUpperCase()}${housing.slice(1)} let water travel along felt or a joist before it appears in a room. The useful inspection follows that path instead of patching the stain.`,
          serviceHref: '/services/roof-repairs',
          serviceLabel: `Roof repairs in ${name}`,
        }
      : {
          localHeading: `Tiles, extensions and gutters in ${name}`,
          localBody: `Homes in ${name}, Co. Dublin are often concrete tile roofs with later extensions and long gutter runs. On ${housing}, the practical checks are slipped or tired tiles, flat roofs over extensions, and outlets that overflow in heavy rain.`,
          serviceHref: '/services/flat-roofing',
          serviceLabel: `Flat roofing in ${name}`,
        };

  const roofAnswer = kind === 'coastal'
    ? `Exposed slate and coastal coverings are common in ${name}, Co. Dublin, especially on ${housing}. Wind and salt work on ridges, verges and flashing before they show up as an indoor stain.`
    : kind === 'terrace'
      ? `Slate and tile roofs with chimney stacks are common in ${name}, Co. Dublin, especially on ${housing}. Flashing, valleys and party-wall junctions are the usual places water gets in.`
      : `Concrete tile roofs, extension flat roofs and long gutter runs are common in ${name}, Co. Dublin, on ${housing}. Slipped tiles, tired outlets and flat roofs over extensions are the details worth checking first.`;

  return {
    sentence,
    base,
    ...local,
    repairsHref: '/services/roof-repairs',
    repairsLabel: `Roof repairs in ${name}`,
    neighbours,
    faqs: [
      {
        question: `Do you cover roof repairs in ${name}?`,
        answer: `Yes. Kellys Roofing & Interiors covers roof repairs in ${name}, Co. Dublin, from our base in Dublin 8. We also work in ${first.name} and ${second.name}.`,
      },
      {
        question: `What roofs are common in ${name}?`,
        answer: roofAnswer,
      },
      {
        question: `How do I get a quote in ${name}?`,
        answer: `Call, WhatsApp or use the form on this website. Kellys Roofing & Interiors gives a free, no-obligation quote for ${name}, Co. Dublin, and we are based in Dublin 8.`,
      },
    ],
  };
}
