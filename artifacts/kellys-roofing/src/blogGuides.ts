import type { BlogPost } from './content';
import { moreGuidePosts } from './blogGuidesMore';

const published = '2026-10-06';

function post(entry: BlogPost): BlogPost {
  return entry;
}

const firstGuidePosts: BlogPost[] = [
  post({
    slug: 'first-hour-of-a-roof-leak-in-dublin',
    serviceSlug: 'roof-repairs',
    category: 'Roof repairs',
    title: 'What to do in the first hour of a roof leak in Dublin',
    seoTitle: 'Roof Leak Dublin | First Hour Steps | Kellys',
    keywords: ['roof leak dublin', 'emergency roof leak', 'water through ceiling dublin', 'what to do roof leak', 'kellys roofing dublin'],
    excerpt: 'Safety, photos and what to tell a roofer in the first hour after water comes through a Dublin ceiling.',
    readTime: '8 min read',
    imageKey: 'repair',
    heroImage: '/blog/blog-first-hour-01.jpg',
    heroAlt: 'A drip from a ceiling caught in a bowl in a Dublin house',
    publishedLabel: 'Emergency guide',
    publishedDate: published,
    modifiedDate: published,
    metaDescription: 'What to do in the first hour of a roof leak in a Dublin home: protect people and electrics, record the evidence, and stay off the roof.',
    dek: 'In the first hour, protect people and electrics, catch the water, and record what you can see from the ground. Kellys Roofing & Interiors, based in Dublin 8 and roofing in Dublin since 2009, can use that record to find the leak.',
    relatedSlugs: ['chimney-flashing-leaks-dublin-terraces', 'when-a-gutter-is-the-leak-not-the-roof', 'storm-damage-roof-check-from-the-ground'],
    faqs: [
      { question: 'Should I go on the roof during a leak?', answer: 'No. Stay off a wet Dublin roof. Photograph the ceiling and the outside from the ground, then call a roofer.' },
      { question: 'What should I photograph in the first hour?', answer: 'Photograph the stain, any active drip, the time, and the weather. From outside, photograph chimneys, valleys, gutters and slipped slates you can see safely.' },
      { question: 'Can I paint the ceiling the same day?', answer: 'No. Stop the water getting worse, then let the ceiling dry after the roof is repaired. Painting a wet stain traps moisture.' },
    ],
    sections: [
      {
        heading: 'What should I do in the first hour of a roof leak?',
        image: '/blog/blog-first-hour-01.jpg',
        imageAlt: 'Water dripping from a ceiling into a bowl',
        paragraphs: [
          'In the first hour of a roof leak in a Dublin house, protect people, keep water away from electrics, and catch the drip. Move anyone out from under a bulging ceiling. Put a bowl or bucket under the drip and pull furniture and bedding clear. If water is running near a light, a socket or the consumer unit, do not touch the fitting. Isolate the circuit only if you can do that safely, and get electrical advice if you are unsure. A swollen ceiling can drop plaster without much warning, so keep the floor below clear.',
          'Kellys Roofing & Interiors is a Dublin roofing contractor based in Dublin 8. We have repaired leaking roofs across the city since 2009. The first hour is not the time to diagnose the whole roof. It is the time to make the room safe and to collect a clear account of what happened. Note whether the water appeared in driving rain, steady rain, or after the rain had eased. That timing is often more useful than a guess about which slate moved.',
        ],
      },
      {
        heading: 'Why should I stay off the roof?',
        image: '/blog/blog-first-hour-02.jpg',
        imageAlt: 'A water stain and paint blister beside a ceiling light',
        paragraphs: [
          'Stay off the roof. Wet slate, wet tile and a wet gutter are slippery, and wind that comes with Dublin rain makes a ladder unsafe. Do not lean a ladder on a gutter to “have a look”. Do not walk an attic either unless there is a proper boarded path. Joists can be hidden under insulation, and a foot through plasterboard is a worse emergency than the leak you were trying to understand.',
          'From the ground or an upstairs window you can still see slipped slates, a displaced ridge, a chimney, a valley full of debris, or a gutter pouring over. Those observations are enough for the first call. If the ceiling is actively bulging, pierce it only if you have been told how to do that safely and you can stand clear. Releasing a trapped pool can prevent a larger collapse, but it is not a repair, and it does not tell you where the water entered.',
        ],
        bullets: [
          'Keep clear of bulging plaster and wet light fittings.',
          'Do not climb a wet roof or an unboarded attic.',
          'Look from the pavement, a window, or the garden.',
        ],
      },
      {
        heading: 'What evidence is worth recording?',
        image: '/blog/blog-first-hour-03.jpg',
        imageAlt: 'A bucket and towels under a ceiling stain',
        paragraphs: [
          'Photograph the stain as soon as you notice it, then again if it spreads. Include a wider shot that shows where the mark sits in the room: beside a chimney breast, under a flat-roof extension, or in the middle of a ceiling. Photograph the outside from a safe place, including gutters, downpipes, chimneys and any roof window. Write down the time and the wind direction if you know it. A leak that appears only when rain is driven from the east is a different problem from a leak that appears after a long soaking.',
          'A short note is better than a long theory. Say what kind of house it is, whether there is an attic, whether anyone has repaired the roof before, and whether the mark is new. Kellys Roofing uses that note to plan access. Photos do not replace an inspection, but they stop the first conversation starting from a blank page. If water is coming through a light, say so first. Electrical risk comes before a discussion of slates.',
        ],
      },
      {
        heading: 'What can I safely do inside?',
        image: '/blog/blog-first-hour-04.jpg',
        imageAlt: 'Looking up at a wet slate roof from the pavement',
        paragraphs: [
          'Inside, you can move belongings, lay towels, and ventilate the room once the immediate drip is controlled. Open a window if rain is not blowing straight in. Do not sand, wash or paint the stain. Do not screw plasterboard over a wet ceiling to hide it. Those steps trap water in timber and insulation and make the later repair larger. If a ceiling rose or downlight is wet, leave it alone and keep the circuit off until someone competent has checked it.',
          'In a terraced Dublin house the stain is often not under the hole. Water runs along felt, a rafter or the top of a party wall and then drops at a joint. That is why a bowl under the drip is the right indoor job, and why poking the roof from a ladder is the wrong one. Catch what is falling. Let a roofer trace the path when the covering can be inspected safely.',
        ],
      },
      {
        heading: 'What should I tell the roofer?',
        image: '/blog/blog-first-hour-05.jpg',
        imageAlt: 'An attic hatch with walk boards and a torch, not a foot on plasterboard',
        paragraphs: [
          'Tell us the address, the room, when the leak started, and whether it is still dripping. Say if there is attic access, a rear extension, a chimney in that room, or a valley you can see from the garden. Mention recent storms, recent building work, or a known slipped slate. If you rent, say who can approve access. If the property is a top-floor flat, say whether the roof is common and who the managing agent is. Those facts change how quickly someone can get onto the roof and who needs to be told.',
          'Kellys Roofing & Interiors quotes roof repairs across Dublin, including emergency leaks, from our base in Dublin 8. A free quote still depends on being able to see the relevant roof and the indoor signs. The first-hour record makes that visit shorter and safer. If the ceiling is in danger of falling, or water is at the electrics, say that at the start of the call or the WhatsApp message so the response matches the risk.',
        ],
      },
      {
        heading: 'What should wait until the roof is sound?',
        image: '/blog/blog-first-hour-06.jpg',
        imageAlt: 'Notes and photos of a ceiling leak ready to send to a roofer',
        paragraphs: [
          'Decorating waits. So does new plaster, new insulation stuffed into a wet attic, and any plan to “seal” the ceiling from below. The roof has to be weather-tight first. After that, plaster and timber need time to dry. A stain that is still damp will show through new paint. Our guide on ceilings after a leak explains how long that drying usually takes and why a moisture check matters more than a calendar guess.',
          'If the leak followed high wind, also look from the ground for debris, a shifted ridge, or a gutter pulled off a bracket. That is a storm check, not a repair. The first hour of an ordinary leak and the morning after a storm ask for the same discipline: people safe, electrics respected, photos taken, nobody on the roof. Send those details to Kellys Roofing and we will tell you the next practical step for that Dublin house.',
          'If you are comparing this with a gutter leak or a chimney leak, look at where the water lands. A mark in the middle of a ceiling after wind-driven rain still starts with the same first hour. A mark high in a corner under a gutter, or a mark tight to a chimney breast, should be in the message you send so we do not treat every stain as the same defect. Dublin roofs fail at junctions more often than in the middle of a sound slate. The photos you take now are what let us tell those cases apart before anyone climbs.',
          'Keep the bowl in place until the drip stops. Empty it before it overflows. If the weather turns and the leak pauses, do not assume it has healed. Dry spells hide flashing and gutter faults that return with the next southerly. Send the address and the pictures while the event is fresh. Kellys Roofing & Interiors will say whether it can wait for a planned visit or whether the ceiling and the electrics need attention sooner. That judgement belongs to an inspection, not to a guess made from the landing.',
          'Also note which room, which floor, and whether the stain sits near an outside wall, a chimney breast or the middle of the ceiling. Those three positions point to different paths: the eaves, the stack, or a valley or roof light higher up. Kellys Roofing & Interiors uses that map before anyone is asked to open a ceiling. If more than one room is wet, list them in the order you noticed them. A second stain often explains the first.',
        ],
      },
    ],
  }),
  post({
    slug: 'chimney-flashing-leaks-dublin-terraces',
    serviceSlug: 'roof-repairs',
    category: 'Roof repairs',
    title: 'Chimney flashing leaks on Dublin terraces',
    seoTitle: 'Chimney Flashing Leak Dublin | Terrace Roofs',
    keywords: ['chimney flashing leak dublin', 'chimney leak terrace', 'lead flashing dublin', 'roof leak chimney breast', 'kellys roofing'],
    excerpt: 'Why water beside a chimney breast in a Dublin terrace often starts at the flashing, not at the stain.',
    readTime: '8 min read',
    imageKey: 'repair',
    heroImage: '/blog/blog-chimney-01.jpg',
    heroAlt: 'Brick chimneys on slate roofs along a Dublin terrace',
    publishedLabel: 'Terrace roofs',
    publishedDate: published,
    modifiedDate: published,
    metaDescription: 'Chimney flashing leaks on Dublin terraces: how lead, mortar and party walls let rain in, and what a proportionate repair looks like.',
    dek: 'A brown mark beside a chimney breast is a common Dublin terrace leak. Kellys Roofing & Interiors, roofing in the city since 2009, usually finds the entry at the flashing, the mortar, or the junction with the party wall.',
    relatedSlugs: ['first-hour-of-a-roof-leak-in-dublin', 'slate-or-tile-repair-or-replace-dublin', 'repairing-interiors-after-a-roof-leak'],
    faqs: [
      { question: 'Does a stain beside the chimney mean the pot is cracked?', answer: 'Not always. On a Dublin terrace the leak is often the lead flashing or open mortar at the stack, not the pot.' },
      { question: 'Can chimney flashing be repaired without a new roof?', answer: 'Yes, when the surrounding slates or tiles are still sound. The repair dresses or replaces the flashing and makes the adjacent covering good.' },
      { question: 'Should I reseal a chimney leak with mastic from the ground?', answer: 'No. Mastic smeared from a ladder rarely holds and can hide the real joint. The flashing needs to be inspected from proper access.' },
    ],
    sections: [
      {
        heading: 'Why do Dublin terraces leak at the chimney?',
        image: '/blog/blog-chimney-01.jpg',
        imageAlt: 'A row of Dublin terrace chimneys',
        paragraphs: [
          'Dublin terraces leak at chimneys because the stack is a hole through the roof that is closed with metal, mortar and the covering around it. Brick and lead move differently as temperatures change. Wind-driven rain hits the face of the stack and runs into any gap at the front apron, the side soakers, or the back gutter. In streets of Victorian and Edwardian houses, from Drumcondra and Phibsborough to Rathmines and Portobello, that junction is one of the hardest-working details on the roof.',
          'Kellys Roofing & Interiors is based in Dublin 8 and has worked on these roofs since 2009. A chimney leak is not a reason to strip a whole terrace roof. It is a reason to inspect the flashing, the mortar, the nearby slates and the way water leaves the back of the stack. The indoor stain usually sits on the chimney breast or just beside it, which is a clue, not a measurement of the hole.',
        ],
      },
      {
        heading: 'What does failed lead flashing look like?',
        image: '/blog/blog-chimney-02.jpg',
        imageAlt: 'Lifted lead flashing where a chimney meets slate',
        paragraphs: [
          'Lead flashing that has lifted, split, or slipped out of its chase will let rain behind the apron. The pointing that covers the edge of the lead can crack and fall out, so water runs down the face of the brick and under the metal. Side soakers can work loose where slates have been replaced badly. A back gutter can fill with debris and overflow under the slates instead of running to the main roof. None of this is visible as a neat hole from the street.',
          'From the ground you may see a flashing line that is no longer tight to the brick, missing mortar, or slates sitting oddly beside the stack. Indoors you may see a tide mark that worsens in wind-driven rain and stays quiet in light drizzle. Tell us which face of the chimney the room sits on, and whether the mark follows a particular wind. That is more useful than a tin of sealant applied from a ladder.',
        ],
      },
      {
        heading: 'How do party walls change the water path?',
        image: '/blog/blog-chimney-03.jpg',
        imageAlt: 'Cracked mortar on an old brick chimney',
        paragraphs: [
          'On a terrace the chimney is often built into or beside the party wall. Water that enters at the flashing can travel along the wall head, the felt, or a rafter and appear in either house, sometimes a metre or more from the stack. That is why a neighbour’s ceiling can stain when the defect is on the shared chimney, and why an agreement about access matters. We inspect the roof we can reach and explain if the stack is shared.',
          'Open joints in the brickwork can take rain as well. Repointing is sometimes part of the job, and sometimes it is not the leak at all. We do not sell a rebuild of the stack because mortar looks old. We look for a path that explains the stain: flashing, soakers, back gutter, cracked pots only if they are actually letting water into the flue and then into the room. Those are different defects.',
        ],
      },
      {
        heading: 'What should a flashing repair include?',
        image: '/blog/blog-chimney-04.jpg',
        imageAlt: 'A ceiling stain beside a chimney breast',
        paragraphs: [
          'A proportionate repair replaces or redressess the lead that has failed, wedges and points it back into a sound chase, and makes good the slates or tiles that have to come off to do the work. It clears a blocked back gutter. It does not cover the chimney in a smear of mastic and call that a guarantee. If the slates beside the stack are already tired, we say so, because a perfect apron next to broken slates will leak again at the next joint.',
          'Access is usually a scaffold or another safe working platform, not a quick ladder on a wet terrace street. We agree that before we start. After the roof is weather-tight, the ceiling stain is a drying problem, not a reason to open the plaster the same day. If the plaster is soft or the stain is still spreading, the indoor work waits until the entry has been stopped and the material has had time to dry.',
        ],
      },
      {
        heading: 'Which signs mean the chimney, not the tiles?',
        image: '/blog/blog-chimney-05.jpg',
        imageAlt: 'A roofer repairing chimney flashing from a scaffold',
        paragraphs: [
          'The stain is close to the breast. It appears in wind-driven rain more than in vertical rain. There is a history of “small jobs” around that chimney. You can see a gap at the lead from an upstairs window. Soot or brown water marks the breast after heavy weather. Any one of these can be wrong on its own. Together they point us at the stack first, before we blame a whole slope of slate.',
          'Slipped slates still matter. A terrace roof can have a chimney leak and a separate slipped slate. We will say if we find both. The quote should separate them so you are not paying for a reroof to solve a flashing, and not paying for a flashing if the covering around it has failed. Kellys Roofing writes that distinction in plain language.',
        ],
        bullets: [
          'Stain on or beside the chimney breast.',
          'Worse in wind-driven rain.',
          'Lifted lead or missing pointing at the stack.',
          'Debris in the back gutter behind the chimney.',
        ],
      },
      {
        heading: 'How do I ask for a chimney repair in Dublin?',
        image: '/blog/blog-chimney-06.jpg',
        imageAlt: 'Neat lead flashing finished against a brick chimney',
        paragraphs: [
          'Send the address, a photo of the indoor stain, and a photo of the chimney from the street or a safe window. Say whether the house is a terrace, whether the stack is on a party wall, and whether the leak is active. Kellys Roofing & Interiors will quote the inspection and the likely flashing repair for that Dublin roof. We are based in Dublin 8 and we cover terrace streets across the city.',
          'Do not climb the roof to “prove” the lead has lifted. The photographs from the ground are the right first evidence. If water is coming through now, use the first-hour steps: people clear, electrics respected, drip caught, nobody on the slates. Then we can deal with the flashing as a repair, not as an accident.',
          'On a Dublin terrace the chimney is also a flue, a piece of structure and a neighbour’s boundary. We will not confuse a smoking fireplace with a rain leak, and we will not ignore rain just because the flue looks old. If both are happening, we say so. Repointing, a pot, and new lead are separate lines of work. You should be able to accept the flashing repair and leave a cosmetic mortar joint for later if the joint is not the path the water is using.',
          'After the lead is right, watch the breast through the next spell of wind-driven rain. A stain that stays the same size is drying. A stain that grows again means the path is still open, sometimes at the back gutter or a neighbouring slate rather than the apron we have just dressed. Tell us. A chimney repair that is checked after weather is a finished repair. One that is painted over the same afternoon is only hidden. Kellys Roofing would rather return to a small remaining gap than leave you with a decorated ceiling and the same leak.',
          'If the house is one of a terrace, tell us whether the neighbour has seen water on the same stack. Party walls and shared chimneys carry water sideways, so a dry room next door does not prove the flashing is sound, and a wet room next door may be the same apron. We will not ask you to arrange their roof. We only need to know whether the stain is one house or two. Bring a photo of the stack from the street if the breast is on a gable you can see without a ladder. The lead, the soakers and the back gutter are the three places a Dublin terrace chimney usually fails, and a ground-level photo is enough to start that conversation. Stay off the roof while you take it.',
        ],
      },
    ],
  }),
];

export const guidePosts: BlogPost[] = [...firstGuidePosts, ...moreGuidePosts];
