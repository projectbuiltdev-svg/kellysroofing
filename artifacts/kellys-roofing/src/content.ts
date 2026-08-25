export type ServiceSlug =
  | 'roof-repairs'
  | 'roof-replacement'
  | 'flat-roofing'
  | 'interiors-building';

export type EditorialSection = {
  heading: string;
  paragraphs: readonly [string, string, ...string[]];
};

export type ServicePageEntry = {
  overview: string;
  processSteps: readonly [string, string, string];
  editorialSections: readonly [
    EditorialSection,
    EditorialSection,
    EditorialSection,
  ];
  signsOrConsiderations: readonly string[];
  faqs: readonly [
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
};

export const servicePageContent: Record<ServiceSlug, ServicePageEntry> = {
  'roof-repairs': {
    overview:
      'A sound roof repair starts with finding how water or weather is getting in, rather than covering the most visible symptom. We assess accessible roof areas, junctions, flashings and rainwater goods, then explain a proportionate repair for the roof type and condition. That matters in Dublin, where wind-driven rain can expose small defects around chimneys, valleys and older roof coverings.',
    processSteps: [
      'Discuss the symptoms, their timing and any previous work, then inspect the relevant roof and internal areas where access is safe.',
      'Explain the likely source, the repair scope and any limitations before materials are ordered or work begins.',
      'Complete the agreed repair, clear the working area and review what was found so you know what to monitor.',
    ],
    editorialSections: [
      {
        heading: 'Finding the source of a leak',
        paragraphs: [
          'A ceiling stain does not always sit directly below the fault. Water can travel along felt, timbers or pipework before it appears indoors. We consider when the mark develops, the direction of recent weather and nearby roof details before deciding where intervention is sensible.',
          'The inspection may include slates or tiles, ridge and verge details, valleys, chimney flashings, roof windows and gutters. Some defects are clear immediately; others need observation during rainfall or further access. We set out that uncertainty rather than recommending unnecessary work.',
        ],
      },
      {
        heading: 'Repairs suited to the existing roof',
        paragraphs: [
          'The right repair should work with the existing covering. A slipped natural slate, cracked concrete tile and failed flashing each require a different approach. Matching size, profile and fixing method helps the repaired area perform properly and sit neatly with the surrounding roof.',
          'Where repeated patching has left a complicated detail, a slightly wider local repair may be more practical than adding another layer. We discuss the condition around the defect and whether nearby materials can be retained before agreeing the scope.',
        ],
      },
      {
        heading: 'After the immediate problem',
        paragraphs: [
          'Once the roof is weather-tight, damp internal materials need time to dry. Decoration should usually wait until the area has been monitored and residual moisture has dispersed. Ventilation can help, while persistent staining or softness may justify checking plaster or insulation.',
          'A repair visit can also reveal maintenance items such as blocked outlets, loose pointing or debris in a valley. These are recorded separately so urgent work is not confused with optional upkeep, giving you a clearer basis for future decisions.',
        ],
      },
    ],
    signsOrConsiderations: [
      'New ceiling marks, peeling paint or a musty smell after rain',
      'Slipped, cracked or missing slates and tiles visible from ground level',
      'Loose flashing, damaged ridge or verge details, or debris below the roof',
      'Overflowing gutters or water tracking down an outside wall',
      'Recurring damp around chimneys, roof windows or an extension junction',
    ],
    faqs: [
      {
        question: 'Can a roof leak be traced in one visit?',
        answer:
          'Often the likely cause can be identified during an inspection, but water paths can be complex. Weather conditions, restricted access or several overlapping defects may mean monitoring or staged investigation is the most responsible approach.',
      },
      {
        question: 'Should I go onto the roof to check storm damage?',
        answer:
          'No. Wet coverings, wind and hidden damage make roof access hazardous. Note what you can see safely from the ground or an internal window and arrange suitable professional access.',
      },
      {
        question: 'Will the ceiling dry as soon as the repair is complete?',
        answer:
          'Not immediately. Plaster, insulation and timber can retain moisture after the entry point is repaired. Allow drying time and monitor the area before redecorating or closing concealed spaces.',
      },
    ],
  },
  'roof-replacement': {
    overview:
      'Roof replacement is a planned renewal of the covering and the details that keep the building dry. It may be appropriate where materials are extensively worn, defects recur across several areas, or renovation plans make piecemeal work poor value. We consider the roof structure, ventilation, drainage, access and the character of the Dublin property before defining a practical scope.',
    processSteps: [
      'Survey the roof, loft and key junctions, review access and discuss your plans for the property.',
      'Set out the proposed covering, underlay, battens, ventilation and detailing, together with sequencing and site arrangements.',
      'Strip and renew in controlled stages, complete junctions and rainwater details, then provide a clear handover.',
    ],
    editorialSections: [
      {
        heading: 'Deciding when renewal is appropriate',
        paragraphs: [
          'Age alone does not decide whether a roof needs replacement. The extent and distribution of defects, condition of fixings and underlay, quality of earlier alterations and expected future use all matter. A roof with one isolated failure may remain repairable; widespread deterioration points to a broader solution.',
          'We compare the realistic repair scope with renewal rather than treating replacement as the automatic answer. For a property purchase or renovation, this assessment also helps owners coordinate roofing with insulation, attic work or solar plans.',
        ],
      },
      {
        heading: 'Planning materials and details',
        paragraphs: [
          'Slate or tile choice affects weight, appearance, gauge and detailing. Dublin terraces, suburban houses and later extensions each bring different constraints, including adjoining roofs and planning considerations. Samples and a written specification make those choices easier to understand.',
          'The less visible components matter equally: sound battens, suitable underlay, ventilation paths, leadwork or alternative flashings, and correctly formed edges. These details should be considered together rather than added after the main covering is laid.',
        ],
      },
      {
        heading: 'Managing work around an occupied home',
        paragraphs: [
          'Access, scaffolding, skips, deliveries and weather protection need early thought, especially on tight Dublin streets or shared approaches. We agree working areas and explain when noise, vibration or temporary restrictions are likely.',
          'Opening a roof can reveal concealed timber or chimney issues that could not be confirmed beforehand. A sensible plan includes a way to record these findings, agree any change and protect the house while decisions are made.',
        ],
      },
    ],
    signsOrConsiderations: [
      'Widespread slipping, delamination, cracking or nail fatigue across the covering',
      'Several recurring leaks in unrelated roof areas',
      'Underlay that is brittle, torn or no longer providing secondary protection',
      'A roof plane distorted by suspected timber movement',
      'Major attic or energy work that would benefit from coordinated roof access',
    ],
    faqs: [
      {
        question: 'Can we remain in the house during replacement?',
        answer:
          'Usually an occupied home can remain in use, but the answer depends on access, structural work and household needs. Expect daytime noise and agree any room restrictions before work starts.',
      },
      {
        question: 'Can the existing slates or tiles be reused?',
        answer:
          'Serviceable materials may sometimes be salvaged, particularly natural slate, but yield cannot be known precisely until stripping. The specification should explain where reuse is suitable and how shortfalls will be handled.',
      },
      {
        question: 'What can change once the covering is removed?',
        answer:
          'Concealed timber decay, previous alterations or damaged masonry may only become visible after opening up. These should be photographed, explained and priced as a change before additional work proceeds.',
      },
    ],
  },
  'flat-roofing': {
    overview:
      'Flat roofs rely on a complete system: deck, falls, outlets, upstands, perimeter edges and the waterproof layer must work together. We install and renew roofs on extensions, garages and commercial spaces, choosing the approach around the structure and use below. Dublin rainfall makes drainage capacity and careful junction details particularly important.',
    processSteps: [
      'Inspect the covering, deck where visible, outlets and adjoining walls, then establish how the space below is used.',
      'Agree a compatible system and specification covering falls, insulation, ventilation where relevant, edges and penetrations.',
      'Prepare the substrate, install each component in sequence and leave outlets and the surrounding site clear.',
    ],
    editorialSections: [
      {
        heading: 'Falls and drainage come first',
        paragraphs: [
          'A flat roof is built with a slight fall so water can reach an outlet or edge. Local standing water may indicate poor falls, deck movement or a blocked route. The cause should be understood before another waterproof layer is placed over it.',
          'Outlet position, capacity and maintenance access matter during heavy Dublin rain. We consider overflows and leaf build-up as well as the visible membrane, because dependable drainage reduces stress on every roof detail.',
        ],
      },
      {
        heading: 'Choosing a compatible build-up',
        paragraphs: [
          'Different membrane and liquid-applied systems have distinct substrate, weather and detailing requirements. Selection should respond to roof shape, foot traffic, penetrations and the condition of what is already there, rather than relying on one material for every setting.',
          'Insulation and condensation control must be considered as part of the build-up. Warm and cold roof arrangements behave differently; changing one layer without understanding the rest can trap moisture where it is difficult to see.',
        ],
      },
      {
        heading: 'The importance of edges and junctions',
        paragraphs: [
          'Failures commonly begin at upstands, door thresholds, rooflights, pipes and transitions to pitched roofs. These areas need enough height, support and compatible accessories. Neat detailing is not merely visual: it maintains continuity in the waterproofing.',
          'A handover should identify outlets and any areas that need routine clearing. Flat roofs should not be treated as general storage or walked on unless their build-up and surface are intended for that use.',
        ],
      },
    ],
    signsOrConsiderations: [
      'Persistent ponding after outlets have been cleared',
      'Bubbles, splits, open laps or lifting perimeter trims',
      'Damp at an upstand, rooflight, pipe or pitched-roof junction',
      'A soft or uneven deck beneath the covering',
      'Changes to insulation, heating or use of the room below',
    ],
    faqs: [
      {
        question: 'Is some water on a flat roof normal?',
        answer:
          'A little water can remain briefly after rain, but persistent or deep ponding deserves investigation. Check outlets first; falls or deck condition may need attention if water continues to collect.',
      },
      {
        question: 'Can a new layer go over the old covering?',
        answer:
          'Sometimes, but only where the existing build-up is dry, stable and compatible with the proposed system. Trapped moisture or a weak deck should be addressed rather than concealed.',
      },
      {
        question: 'How should a flat roof be maintained?',
        answer:
          'Keep outlets clear, limit unplanned foot traffic and visually check edges and penetrations after severe weather. Arrange safe inspection if you notice standing water, surface changes or damp below.',
      },
    ],
  },
  'interiors-building': {
    overview:
      'Roof and building problems often leave internal work behind: stained ceilings, damaged plaster, wet insulation or carpentry affected by prolonged moisture. We coordinate practical repair and finishing once the outside is secure and materials have had suitable drying time. The scope can include ceilings, drylining, plastering, carpentry and related building work in Dublin homes.',
    processSteps: [
      'Confirm the source of moisture has been resolved, inspect affected finishes and agree what needs opening or removal.',
      'Allow for drying and complete the necessary substrate, insulation, carpentry or lining repairs in the right order.',
      'Finish the agreed surfaces, review junctions and leave clear advice on drying, decoration or future monitoring.',
    ],
    editorialSections: [
      {
        heading: 'Repairing in the right sequence',
        paragraphs: [
          'Internal staining is the last visible stage of a building-path problem. Decorating too soon can hide damp, while replacing plaster before the roof is secure risks repeat damage. We sequence investigation, external repair, drying and internal reinstatement.',
          'Where a ceiling or lining must be opened, the exposed area may clarify the water route and condition of insulation or timber. Findings are discussed before the opening is closed so necessary work is not missed.',
        ],
      },
      {
        heading: 'Matching repair to the existing room',
        paragraphs: [
          'Older Dublin houses can contain traditional plaster, uneven backgrounds and decorative details, while newer extensions often use plasterboard and modern insulation. Repair methods should suit those materials and preserve sound fabric where practical.',
          'A local patch may be enough for limited damage. Larger areas can be preferable where boards have sagged, finishes are loose or a seamless result would be difficult. We explain that trade-off before the finish is chosen.',
        ],
      },
      {
        heading: 'Coordinating small building works',
        paragraphs: [
          'Carpentry, insulation, drylining and plastering overlap, so order matters. Agreeing one joined-up scope reduces repeated opening and helps maintain ventilation and access to any services.',
          'Drying conditions affect completion. Fresh plaster and previously wet fabric require ventilation and time before final decoration. We provide practical handover notes rather than rushing coatings onto a surface that is not ready.',
        ],
      },
    ],
    signsOrConsiderations: [
      'Plaster that is soft, bulging, cracked or detached after a leak',
      'Insulation that has become wet, compressed or displaced',
      'Persistent odour or staining after the external source is repaired',
      'Timber showing softness, distortion or prolonged water marks',
      'A need to coordinate several trades in one affected area',
    ],
    faqs: [
      {
        question: 'When can internal repair begin after a leak?',
        answer:
          'Only after the entry point is dealt with and the affected construction has been assessed. Drying time varies with material, saturation, ventilation and season, so moisture condition is more useful than a fixed waiting period.',
      },
      {
        question: 'Does every stained ceiling need replacement?',
        answer:
          'No. Sound, dry plaster may only need preparation and suitable stain treatment before decoration. Sagging board, loose plaster or contaminated material can require local or wider removal.',
      },
      {
        question: 'Can interior work be included with a roof repair?',
        answer:
          'Yes, where the required trades and drying sequence are clear. External weather-tightness comes first, followed by assessment and an agreed reinstatement scope.',
      },
    ],
  },
};

export type BlogImageKey = 'repair' | 'replacement' | 'flat' | 'interiors';

export type BlogSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type BlogPost = {
  slug: string;
  serviceSlug: ServiceSlug;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  imageKey: BlogImageKey;
  publishedLabel: string;
  metaDescription: string;
  dek: string;
  sections: readonly BlogSection[];
};

export const blogPosts: readonly BlogPost[] = [
  {
    slug: 'how-to-handle-a-roof-leak-in-dublin',
    serviceSlug: 'roof-repairs',
    category: 'Roof repairs',
    title: 'A Dublin homeowner’s guide to finding and handling a roof leak',
    excerpt:
      'How to respond safely, read the clues and arrange a proportionate repair when water appears indoors.',
    readTime: '9 min read',
    imageKey: 'repair',
    publishedLabel: 'Homeowner guide',
    metaDescription:
      'A practical guide to roof leaks in Dublin homes, including safe first steps, likely sources, inspection questions and repair planning.',
    dek:
      'A damp mark is useful evidence, but it rarely tells the whole story. A calm, methodical response protects the room and gives the eventual inspection a better chance of locating the actual fault.',
    sections: [
      {
        heading: 'Start indoors, and stay off the roof',
        paragraphs: [
          'When water appears, first protect people, electrics and belongings. Move furniture, place a container beneath an active drip and keep away from a ceiling that is bulging. If water is close to a light fitting, socket or consumer unit, do not handle the fitting; isolate the relevant circuit only if that can be done safely and seek appropriate electrical advice. A visibly swollen ceiling can release water and material without warning, so keep the area below clear.',
          'Do not climb onto a wet roof or improvise access from a ladder, particularly during the wind that often accompanies Dublin rain. Instead, record the mark with photographs, note the time and weather, and look from a safe ground-level position for displaced materials. In an attic, use a proper walkway and torch, avoid standing on insulation or plasterboard, and do not touch wet wiring. These observations are valuable without exposing anyone to a fall.',
        ],
        bullets: [
          'Note whether the leak follows driving rain, steady rain or a particular wind direction.',
          'Photograph the first mark and its spread, rather than relying on memory.',
          'Record nearby chimneys, valleys, roof windows, pipes and external walls.',
        ],
      },
      {
        heading: 'Why the stain may not identify the source',
        paragraphs: [
          'Water rarely respects the straight line shown by a ceiling stain. It can enter beside a cracked tile, pass onto underlay, travel along a rafter and finally drip at a board joint several metres away. In a terraced Dublin house, chimney breasts and party-wall junctions add further routes. Flat and pitched roofs may also meet above the affected room, creating a transition that deserves attention even when the mark seems to sit beneath an open roof plane.',
          'Timing provides important clues. A mark that develops only during wind-driven rain can indicate an exposed flashing, verge or under-tile route rather than a simple hole. Damp that appears after prolonged rainfall may relate to saturation, overflowing gutters or slow tracking through masonry. A bathroom mark could involve plumbing or condensation instead. A credible inspection tests these possibilities and avoids assuming that every upstairs damp patch begins at the roof covering.',
        ],
      },
      {
        heading: 'Common details worth inspecting',
        paragraphs: [
          'Slates and tiles are obvious starting points, but most roofs contain junctions that work harder than the main covering. Valleys collect water from two slopes. Chimney flashings bridge materials that expand and move differently. Ridges, verges, roof windows, vents and pipe penetrations all depend on secure fixings and careful laps. Organic debris can hold moisture or obstruct a narrow drainage route. An inspection should look at the whole water path from high point to outlet.',
          'Gutters are part of that path. A blocked hopper or undersized outlet can send water behind a fascia or down masonry, producing an internal symptom that resembles a roof leak. Cracked render, open pointing and defective window seals can also admit rain. The aim is not to create a long list of speculative work; it is to identify evidence, rule out unrelated causes and concentrate the proposed repair where it is likely to make a difference.',
        ],
        bullets: [
          'Covering: slipped, cracked, missing or poorly fixed units.',
          'Junctions: flashings, valleys, abutments and roof-window surrounds.',
          'Drainage: gutters, outlets, hoppers and downpipes.',
          'Interior: water tracks, damp insulation and stained timbers.',
        ],
      },
      {
        heading: 'What a useful repair proposal should explain',
        paragraphs: [
          'A repair proposal should connect the observed defect to the work being suggested. It might describe lifting a limited area, replacing damaged units and reinstating an underlay detail, or renewing flashing around one side of a chimney. It should also state access assumptions and anything that cannot be known until materials are lifted. That distinction matters on older roofs, where surrounding slates or battens may be more fragile than they appear from outside.',
          'Ask what is included in making good, disposal and photographs of concealed findings. If several options exist, the difference between a focused repair and wider renewal should be clear. A low-intervention repair can be sensible when the rest of the roof is serviceable. Repeated patches across a generally worn area may offer less value. No diagnosis can remove every uncertainty, but transparent scope and limitations make decisions more manageable.',
        ],
      },
      {
        heading: 'Weather, access and temporary measures',
        paragraphs: [
          'Dublin weather affects both diagnosis and scheduling. Some defects reveal themselves most clearly during rain, while many roofing materials need a reasonably dry, calm period for safe installation. High winds can prevent ladder or scaffold work even when the rain has stopped. A realistic contractor will distinguish an emergency attendance, temporary risk reduction and the permanent repair, rather than suggesting that all three are always possible at once.',
          'Temporary coverings have limitations and must be fixed without creating further hazards or trapping large amounts of water. Indoors, collecting drips and protecting finishes may be the safest immediate measure until access is possible. On shared or managed property, notify the relevant owner, agent or insurer promptly and retain records. If falling material threatens a footpath or neighbouring area, keep people away and seek urgent professional guidance.',
        ],
      },
      {
        heading: 'Drying, making good and preventing a repeat',
        paragraphs: [
          'Stopping entry does not instantly dry the building. Mineral wool, timber, plaster and masonry release moisture at different rates, particularly in cool winter conditions. Ventilate where appropriate, monitor the mark and avoid sealing it under paint too soon. Saturated insulation may lose effectiveness or hold moisture against other materials; loose plasterboard can become unsafe. The required internal work depends on condition, not simply the appearance of a brown stain.',
          'After repair, retain dated photographs and check the area during later rainfall. Routine ground-level observation can catch slipped materials, vegetation and overflowing gutters early. This is not a substitute for safe inspection, and maintenance cannot prevent every storm-related issue, but it creates a useful record. Avoid pressure washing or unplanned coatings, which may damage coverings or alter how moisture moves without correcting a failed detail.',
        ],
      },
      {
        heading: 'A practical next step',
        paragraphs: [
          'Gather a short, factual description before contacting a roofer: property type, roof area involved, when the mark first appeared, recent weather, previous work and whether attic access is available. Include clear photos taken safely. This helps plan access and gives the inspector a better starting point, though photographs alone should not be treated as a complete diagnosis.',
          'Request an inspection focused on the source and a written scope that separates urgent repair from optional upkeep. Ask how concealed findings will be handled and when internal drying can be reviewed. If water is active near electrics, a ceiling is unstable or materials may fall externally, treat safety as the immediate priority. Otherwise, protect the room, document the pattern and arrange measured investigation rather than rushing into an unexplained patch.',
          'Before approving work, make sure the affected roof area and proposed access are identified clearly. For a shared chimney, valley or apartment block, establish who can authorise the repair and who needs notice. Keep the report, scope and completion photographs together. If the symptom returns, that record helps distinguish a repeat at the same detail from a separate source and gives the next inspection useful evidence instead of starting again from memory.',
        ],
      },
    ],
  },
  {
    slug: 'planning-a-roof-replacement-for-a-dublin-home',
    serviceSlug: 'roof-replacement',
    category: 'Roof replacement',
    title: 'Planning a roof replacement for a Dublin home',
    excerpt:
      'A step-by-step guide to condition, materials, access, hidden work and living at home during a roof renewal.',
    readTime: '10 min read',
    imageKey: 'replacement',
    publishedLabel: 'Planning guide',
    metaDescription:
      'Plan a Dublin roof replacement with practical guidance on surveys, slate and tile choices, ventilation, access, sequencing and hidden defects.',
    dek:
      'Replacement is more than exchanging old tiles for new ones. Decisions about structure, ventilation, junctions and site access shape the project long before the covering is stripped.',
    sections: [
      {
        heading: 'Confirm that replacement is the proportionate choice',
        paragraphs: [
          'A roof does not need renewal merely because it is old, and a young roof is not automatically sound. Begin with condition: how widespread are slipped or damaged units, how reliable are fixings and underlay, and are leaks isolated or recurring in unrelated locations? Examine the roof space where accessible for daylight, staining, timber movement and ventilation. Previous extensions or attic alterations may have changed the original roof in ways that matter more than its calendar age.',
          'Compare a defined repair with the likely renewal scope over the period you expect to own and use the house. One failed valley beside otherwise serviceable slate can justify local work. Extensive nail fatigue, failing felt and numerous earlier patches may make opening small areas repeatedly less practical. Ask the surveyor to separate observed facts from assumptions. The decision should reflect evidence, disruption and future plans, not pressure based on a single headline age.',
        ],
      },
      {
        heading: 'Build a specification, not just a material list',
        paragraphs: [
          '“New slate roof” leaves important questions unanswered. A useful specification identifies the covering and fixing approach, batten and underlay requirements, ridge and verge treatment, valleys, abutments, penetrations, eaves support and rainwater connections. It should address ventilation and insulation interfaces and describe whether existing flashings will be retained or renewed. Drawings or marked photographs can clarify complicated rear returns and the junctions common on altered Dublin terraces.',
          'The specification also creates a fair basis for comparing proposals. Two quotations can appear to describe the same job while allowing for very different details, access or waste removal. Ask what making good is included around fascias, chimney areas and internal openings. Check who is responsible for scaffold licences, parking arrangements or neighbour access where relevant. Clarity at this stage reduces decisions made hurriedly when the old roof is already open.',
        ],
        bullets: [
          'Covering, gauge, fixings and expected treatment of salvageable material.',
          'Underlay, battens, ventilation path and insulation interfaces.',
          'Ridges, verges, valleys, chimneys, rooflights and rainwater goods.',
          'Scaffold, protection, waste, making good and handover records.',
        ],
      },
      {
        heading: 'Choose materials in context',
        paragraphs: [
          'Natural slate, fibre-cement slate and concrete or clay tiles differ in appearance, weight, dimensions and fixing requirements. The existing structure, roof pitch and local streetscape narrow the sensible choices. A heavier replacement covering should not be assumed suitable without considering support. Conversely, changing to a very different format can affect battens, laps and edge details. Samples viewed outdoors are more informative than a small screen image.',
          'On an older or architecturally distinctive property, check whether planning constraints or conservation considerations apply before ordering. Party walls and adjoining roof lines also matter: a change in thickness or gauge must meet the neighbour’s covering cleanly without creating a water trap. Salvaged slate can sometimes be reused after sorting, but breakage and hidden weakness make the final yield uncertain. Agree how recovered material and any shortfall will be managed.',
        ],
      },
      {
        heading: 'Treat insulation, ventilation and structure together',
        paragraphs: [
          'A replacement creates access to layers that are normally difficult to reach, making it a logical time to review insulation. However, simply adding more material can block ventilation at eaves or change condensation risk. Warm air from the house carries moisture; if it reaches a cold surface and cannot disperse, damp may develop even though rain is excluded. The arrangement should reflect the roof design, room use and any existing attic conversion.',
          'Timbers should be assessed where visible, especially around long-term leaks, chimney breasts and earlier openings. Minor local repairs and major structural alterations are different scopes and may require separate design input. Do not assume every dark mark is active decay, or that clean-looking timber is sound beneath a bearing. The quotation should explain allowances, while a change process should cover defects that can only be confirmed when battens and underlay are removed.',
        ],
      },
      {
        heading: 'Plan access and weather protection',
        paragraphs: [
          'Dublin’s dense streets and side passages can make logistics as important as roofing. Scaffolding needs stable placement and safe access; deliveries and skips may compete with parking, bins and pedestrians. Rear returns can require material to pass through or over occupied areas. Discuss protection for paving, windows, gardens and neighbouring property. If access depends on a neighbour, seek agreement early rather than assuming it will be available on the start date.',
          'A roof is normally opened in manageable stages and protected at the end of the working period, but sudden weather still affects progress. Ask how forecasts influence stripping and what temporary protection is planned. Wind may stop work at height even on a dry day. A realistic programme allows for these constraints rather than offering a rigid completion promise. Keep valuable attic contents away from the work area and cover remaining possessions against dust.',
        ],
      },
      {
        heading: 'Living with the work and handling changes',
        paragraphs: [
          'Many households remain at home during straightforward renewal, though daytime noise and vibration are significant. Agree working hours, routes through the property, water or power requirements and the rooms that may be affected. Families with young children, pets, shift workers or home offices may need a more specific plan. Chimney work, structural intervention or opening an inhabited attic can change whether occupation remains comfortable or appropriate.',
          'Once stripping starts, concealed defects should be photographed and explained. Ask for the effect on scope, cost and timing before authorising additional work, except where an immediate action is necessary to keep the building safe. Keep decisions in writing. This does not remove uncertainty from an existing building, but it prevents a vague allowance from becoming an open-ended instruction and gives both homeowner and contractor a shared record.',
        ],
      },
      {
        heading: 'Handover and the next practical step',
        paragraphs: [
          'Before scaffold removal, review the completed roof from available safe viewpoints and ask for photographs of valleys, flashings and other details that will become hard to see. Confirm that gutters and outlets are clear, waste has been removed and any agreed internal making good is complete. Retain product information, the final specification and records of changes with the property documents. Note maintenance access and avoid allowing later trades to cut or fix through the covering without coordination.',
          'Your next step is to commission a condition-led survey and turn its findings into a written scope. Collect information about previous leaks, attic alterations, insulation and shared boundaries, then discuss material samples and access on site. Compare proposals line by line rather than by total alone. A measured preparation period is useful: it makes space for planning checks, neighbour conversations and practical choices before weather protection depends on decisions being made quickly.',
          'Build a modest contingency into both decision-making and household arrangements, without treating unspecified extras as inevitable. Concealed conditions should still be evidenced and agreed. Confirm a contact for day-to-day questions and decide who in the household can approve changes. If the project overlaps with a loft conversion, solar installation or chimney work, have the relevant parties coordinate details before stripping; later alterations through a new covering can otherwise undo carefully completed junctions.',
        ],
      },
    ],
  },
  {
    slug: 'flat-roof-guide-for-dublin-extensions',
    serviceSlug: 'flat-roofing',
    category: 'Flat roofing',
    title: 'A practical flat-roof guide for Dublin extensions and garages',
    excerpt:
      'Understand falls, drainage, membranes, insulation and vulnerable details before repairing or renewing a flat roof.',
    readTime: '10 min read',
    imageKey: 'flat',
    publishedLabel: 'Homeowner guide',
    metaDescription:
      'Practical advice for Dublin flat roofs covering ponding, drainage, membranes, insulation, upstands, inspections and renewal planning.',
    dek:
      'The waterproof surface is only one part of a flat roof. Reliable performance depends on the deck, designed falls, moisture control and small junctions all working as one build-up.',
    sections: [
      {
        heading: 'Understand what lies beneath the surface',
        paragraphs: [
          'From the garden, a flat roof can look like a single sheet. In reality it is a layered construction supported by joists and a deck, with insulation and moisture-control layers arranged according to the design. Falls direct water to an outlet or edge, and the waterproof covering joins upstands, trims and penetrations. A visible split may be the obvious defect, but movement, trapped moisture or an unsuitable substrate can be the reason it formed.',
          'Before choosing a repair, establish the roof’s approximate age, known material and use of the room below. Note whether it covers a heated extension, an unheated garage or a commercial space, because condensation and insulation needs differ. Previous overlays can conceal the original surface and add weight. Inspection openings or moisture investigation may be needed where the deck feels soft or recurring bubbles suggest that water is held within the build-up.',
        ],
      },
      {
        heading: 'Read ponding and drainage clues carefully',
        paragraphs: [
          'Flat roofs are constructed with a slight slope, even though that slope may be difficult to see. Some residual water after a shower is not the same as deep ponding that remains for days. Persistent pools increase loading, collect dirt and vegetation, and expose laps or details to water for longer. They may result from blocked outlets, compressed insulation, deck deflection or falls that were never formed effectively.',
          'Start by checking drainage from a safe position, not by walking onto an unknown surface. Dublin leaf fall can quickly obstruct a small outlet, while intense rain tests hopper and downpipe capacity. Overflows provide an alternative route if the main outlet blocks, but only when correctly positioned and kept clear. Renewal should consider where water goes after leaving the roof; a sound membrane cannot compensate for a blocked or disconnected rainwater system.',
        ],
        bullets: [
          'Observe how long water remains after rain and where the deepest area forms.',
          'Keep outlets, grates and visible overflows free of leaves and debris.',
          'Look for staining below edges as well as directly under the pond.',
        ],
      },
      {
        heading: 'Compare systems by suitability, not labels',
        paragraphs: [
          'Common options include reinforced bituminous membranes, single-ply sheets and liquid-applied systems, among others. Each has manufacturer-specific requirements for preparation, weather, laps or reinforcement and perimeter detailing. A product that suits a simple garage may not be the easiest choice around multiple rooflights and pipes. Likewise, a system designed for occasional maintenance access is not automatically a terrace surface suitable for regular foot traffic.',
          'Ask how the proposed material works with the existing deck and adjoining components. An overlay may be possible when the substrate is secure, dry and compatible, but it should not be used to hide saturated insulation or rotten decking. Complete removal offers a clearer view and allows falls or thermal layers to be corrected, though it brings more disposal and weather-management work. The proposal should explain why its approach fits the observed condition.',
        ],
      },
      {
        heading: 'Get insulation and condensation control right',
        paragraphs: [
          'A warm roof generally places insulation above the structural deck, helping keep that deck closer to indoor temperature. A cold roof places insulation below with a ventilated void, and its airflow requirements can be difficult to achieve around shallow joists and interruptions. These are not interchangeable labels. The correct arrangement depends on the structure and internal environment, and renovation can fail if new insulation blocks an existing ventilation route.',
          'Condensation can resemble a leak, especially during cold, still weather when indoor humidity is high. Kitchens, bathrooms and drying clothes add moisture that finds gaps around lights or service penetrations. An assessment should consider whether damp correlates with rain, temperature or room use. Improving airtightness, ventilation or insulation may form part of the answer, but changes should be coordinated so moisture is not redirected into another concealed part of the roof.',
        ],
      },
      {
        heading: 'Focus on upstands, edges and penetrations',
        paragraphs: [
          'Many failures occur where the horizontal field meets something else. Wall upstands, parapets, rooflights, door thresholds, pipe collars and transitions to pitched roofs all interrupt the membrane. They need secure support, adequate height where achievable, compatible flashings and corners formed without stress. Low thresholds on older extensions can be especially constrained; the designer must balance waterproofing with door and internal floor levels rather than improvising on site.',
          'Perimeter trims must direct water away without allowing wind to lift the covering. At a shared boundary, the junction should respect both roofs and avoid discharging water onto adjoining property. Solar equipment, aerials and services should use planned supports rather than casual fixings through waterproof layers. If another trade needs roof access later, provide them with system information and identify permitted walkways or protection requirements before they begin.',
        ],
      },
      {
        heading: 'Inspect safely and maintain proportionately',
        paragraphs: [
          'A useful routine is a visual check from a safe window or other protected viewpoint after severe weather and during autumn leaf fall. Look for blocked outlets, displaced trims, surface blisters, open joints or unfamiliar debris. Internally, note musty odours, peeling paint and changes around rooflights. Do not probe the membrane, apply household sealants or pressure wash it; incompatible products and concentrated jets can turn a minor issue into a larger repair.',
          'Professional inspection frequency depends on exposure, roof complexity, age and the importance of the space below. Commercial or heavily detailed roofs may justify a planned record, while a small domestic canopy can be simpler. Keep notes of repairs and products used because compatibility matters later. Limit foot traffic unless the surface is designed and protected for it, and do not use the roof as storage: sharp feet and trapped debris create avoidable stress.',
        ],
      },
      {
        heading: 'Set a practical next step',
        paragraphs: [
          'If damp is active, protect the room and record the weather, location and timing. Photograph the roof only from a safe position. Clear a reachable ground-level drain if that can be done without roof access, but leave high or concealed outlets to suitably equipped people. A sagging ceiling, electrical involvement or visibly unstable deck requires prompt safety advice rather than exploratory walking above or below the area.',
          'For planned work, request an assessment that identifies the existing build-up as far as reasonably possible and covers deck condition, falls, drainage, insulation and every junction. Ask whether the scope is local repair, overlay or strip and renewal, and what evidence supports that choice. The most useful next step is not selecting a membrane colour; it is agreeing a coherent build-up and a process for dealing with moisture or damaged decking discovered after opening.',
          'Ask for photographs before inaccessible layers are covered and keep the system information with your property records. The handover should identify safe maintenance routes, outlets and any surface protection intended for occasional access. After completion, observe drainage during ordinary rainfall from a safe place and report unexpected ponding or overflow promptly. This simple record will also help future electricians, window installers or solar contractors avoid incompatible sealants and unplanned penetrations.',
        ],
      },
    ],
  },
  {
    slug: 'repairing-interiors-after-a-roof-leak',
    serviceSlug: 'interiors-building',
    category: 'Interiors & building',
    title: 'Repairing ceilings and interiors after a roof leak',
    excerpt:
      'A practical sequence for drying, assessing and making good a Dublin home after rainwater damage.',
    readTime: '9 min read',
    imageKey: 'interiors',
    publishedLabel: 'Repair guide',
    metaDescription:
      'Learn how to assess, dry and repair ceilings, plaster, insulation and joinery after a roof leak in a Dublin property.',
    dek:
      'The neatest finish begins with patience. Before plastering or painting, the source must be resolved, wet materials assessed and the construction given a realistic opportunity to dry.',
    sections: [
      {
        heading: 'Make the area safe before making it neat',
        paragraphs: [
          'Rainwater can weaken plasterboard, loosen old plaster and reach electrical fittings. Keep people out from beneath a bulging ceiling and move belongings without pressing on the affected surface. Water beside lights, sockets or wiring needs appropriate electrical attention; do not assume that switching a lamp off removes the risk. If material is falling or a ceiling is heavily distorted, controlled removal may be needed by people equipped to manage the debris.',
          'Take photographs before moving or opening finishes, particularly if an insurer, landlord or management company may be involved. Record when the leak occurred and any immediate action. In flats and terraces, notify the relevant parties because the source or damage path may cross ownership boundaries. Emergency work should focus on safety and limiting further loss. Cosmetic decisions can wait until the roof defect is understood and the fabric behind the stain can be assessed.',
        ],
      },
      {
        heading: 'Confirm the external repair first',
        paragraphs: [
          'A stained ceiling is evidence of water’s final destination, not proof of where it entered. The external source may be a tile, valley, flashing, flat-roof junction, gutter or wall detail some distance away. Plumbing and condensation should also be considered. Internal reinstatement before diagnosis can conceal useful clues and create repeat expense if the next period of driving Dublin rain follows the same route.',
          'Ask for a clear account of the roof repair and retain photographs where available. Then monitor during suitable weather. This does not mean leaving unsafe material in place, but it can mean postponing final plaster and decoration. Where an opening is required for safety or drying, use it to inspect insulation, timber and the underside of the roof. A coordinated sequence allows exterior and interior findings to inform each other.',
        ],
      },
      {
        heading: 'Decide what can dry and what should come out',
        paragraphs: [
          'Not every wet material needs wholesale replacement. Sound masonry and timber can often dry when the source is stopped and airflow is appropriate. Plasterboard that has sagged, lost strength or delaminated is less likely to be suitable for retention. Loose traditional plaster may need local removal, while firmly bonded areas can sometimes remain. Wet insulation should be assessed for compression, contamination and its ability to dry without holding moisture against timber.',
          'Condition matters more than a fixed timetable. Surface readings, visual checks and the history of saturation can help, but no single handheld reading tells the whole story across mixed materials. Watch for softness, movement, persistent odour and mould growth. Older Dublin properties may contain layered finishes from several renovations, so opening a small controlled area can reveal lath and plaster, plasterboard patches or concealed services that change the repair method.',
        ],
        bullets: [
          'Retain material only when it remains sound and can dry effectively.',
          'Remove unstable ceiling sections under controlled conditions.',
          'Check insulation and timber before closing an opened void.',
          'Record concealed conditions and any agreed additional work.',
        ],
      },
      {
        heading: 'Dry the construction without rushing it',
        paragraphs: [
          'Drying speed depends on the amount of water, material thickness, indoor heat, ventilation and outside humidity. Cool Dublin winters can extend the process. Gentle background heat and managed ventilation may help, while simply turning the room very hot can dry a surface faster than the layers behind it. Dehumidification can be useful in some settings, but equipment and drainage need to suit the occupied space and progress should be reviewed.',
          'Avoid sealing damp under new boards, impermeable paint or tightly fitted joinery. Moisture trapped in a void can support mould or timber deterioration beyond view. At the same time, uncontrolled ventilation is not always best for every traditional building, and aggressive drying can affect some finishes. A practical plan combines removal of irrecoverable material, airflow to the affected construction and checks before closure rather than relying on an arbitrary number of days.',
        ],
      },
      {
        heading: 'Rebuild in a sensible trade sequence',
        paragraphs: [
          'Once dry and stable, repair begins with the substrate. Timber support, insulation and any services are addressed before boards or plaster. Vapour-control and airtightness details should be reinstated where part of the construction, taking care around cables, pipes and recessed fittings. Boards need appropriate support at edges; a patch attached to weak or unsupported material is likely to crack even if the decorative finish initially looks smooth.',
          'Plastering follows preparation, and carpentry comes in an order that avoids damage or awkward gaps. Skirtings, architraves and fitted units affected by swelling may need drying and reassessment before replacement is chosen. On a larger loss, agree responsibility between roofer, electrician, plasterer, carpenter and decorator. One documented scope helps prevent a ceiling being closed before another trade has completed work inside it.',
        ],
      },
      {
        heading: 'Prepare stains and finishes properly',
        paragraphs: [
          'A dry, sound ceiling can retain a brown mark because water carried tannins, rust or dirt through the construction. Ordinary emulsion may allow that stain to migrate back through. Loose paint should be removed, edges feathered and the surface prepared with a suitable stain-blocking product before normal decoration, following product instructions and allowing fresh plaster to dry. Painting the entire ceiling often gives a more even appearance than touching in one patch.',
          'Colour matching on walls and woodwork is affected by age, light and previous coatings. Decide in advance whether making good means a local functional patch or decoration to natural room boundaries. That distinction avoids disappointment and makes quotations comparable. New plaster can also change the room’s moisture load temporarily, so ventilation remains useful. Final sealants and joinery adjustments should follow the main drying and decorating stages, not conceal movement too early.',
        ],
      },
      {
        heading: 'Monitor the repair and take the next step',
        paragraphs: [
          'Keep before-and-after photographs and note the roof work, internal materials replaced and products used. Check the area during later heavy rain and periodically through the next change of season. A mark that remains unchanged after drying may be historical; one that darkens or expands needs renewed investigation. Also watch adjoining rooms and the outside drainage route, since water can find more than one exit from the same defect.',
          'The practical next step is to separate the job into four decisions: safety, source, drying and reinstatement. Arrange urgent help if ceilings or electrics are unsafe. Obtain evidence that the external cause has been addressed, then assess concealed materials and agree measurable readiness for closing. Finally, write down the extent of plastering, carpentry and decoration. This sequence may feel slower than immediate repainting, but it makes each trade’s role clearer and reduces avoidable repeat work.',
          'For a larger affected area, nominate one person to hold the photographs, scopes and trade contacts. Confirm who checks moisture condition, who authorises closure and whether electrical testing or specialist assessment is needed before finishes proceed. In a rented or managed property, record approvals as well as work completed. A concise handover means the decorator knows which surfaces are new, the homeowner knows what to monitor, and future maintenance does not depend on an incomplete verbal account.',
        ],
      },
    ],
  },
] as const;