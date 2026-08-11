window.STEWARD_PROJECTS = {
  bedford: {
    id: "bedford",
    number: "01",
    name: "Bedford Road Redevelopment",
    shortName: "Bedford Road",
    category: "Town-wide civic project",
    status: "Concept proposal",
    statusTone: "planning",
    lastVerified: "July 2026",
    verifiedBy: "Source documents and Finance Department figures",
    heroImage: "assets/images/bedford-plan.jpg",
    heroAlt: "Existing Bedford Road municipal facilities shown in the Fareri RFEI response",
    summary:
      "A proposed redevelopment of Town facilities and public spaces, including Town Hall, police and court facilities, highway and school transportation operations, recreation, and Bedford Road improvements.",
    location: "Bedford Road, Main Street and Business Park Drive",
    department: "Town-wide / multiple departments",
    costLabel: "Proposed total cost",
    costValue: "$70 million",
    costNote: "Conceptual estimate in the Fareri RFEI response—not an awarded construction cost.",
    process: [
      {
        date: "November 10, 2025",
        title: "RFEI response submitted",
        description:
          "Fareri Companies submitted a redevelopment concept with scope, cost, funding and resident-impact estimates.",
        state: "complete"
      },
      {
        date: "Concept stage",
        title: "Project scope and cost assembled",
        description:
          "The proposal combines property acquisition, municipal facilities, recreation, road improvements and miscellaneous expenses into a $70 million estimate.",
        state: "complete"
      },
      {
        date: "Financial scenario",
        title: "Funding model prepared",
        description:
          "The proposal identifies $30 million in contributions and a proposed $40 million, 30-year municipal bond.",
        state: "complete"
      },
      {
        date: "Not documented as complete",
        title: "Town approvals, design and bidding",
        description:
          "The source does not show a final Town approval, completed design, bid solicitation, selected contractor or awarded construction amount.",
        state: "future"
      },
      {
        date: "Future",
        title: "Construction and closeout",
        description:
          "If the project advances, award, construction spending and final financing would replace the current planning assumptions.",
        state: "future"
      }
    ],
    costBreakdown: [
      ["Court and police facility", 18283333],
      ["Highway garage / school transportation", 17549999],
      ["Town Hall", 18000000],
      ["Cornell Birdsall House relocation", 3000000],
      ["Existing highway demolition", 1000000],
      ["New recreation facilities", 5000000],
      ["Bedford Road improvements", 2000000],
      ["Miscellaneous expenses", 5166668]
    ],
    funding: [
      ["30-year municipal bond", 40000000, "Proposed"],
      ["Town fund balance", 15000000, "Proposed"],
      ["BHC School District", 9000000, "Proposed"],
      ["Community Benefits Agreements", 4700000, "To be verified"],
      ["Sewer & Water Department", 800000, "Proposed"],
      ["Recreation Fund", 500000, "Proposed"]
    ],
    impact: {
      type: "bedford",
      available: true,
      heading: "Potential Town tax impact",
      explanation:
        "The RFEI response models a $40 million bond over 30 years at 3.75%. It increases the modeled Town tax rate from 173.10 to 191.49—a difference of 18.39 per $1,000 of assessed value.",
      defaultAssessment: 19800,
      rateIncrease: 18.39,
      benchmark: "$364.12 per year at the document’s $19,800 median assessed value",
      attribution:
        "Calculated from financial figures attributed in the RFEI response to Abbas Sura, Town of North Castle Director of Finance."
    },
    gallery: [
      {
        image: "assets/images/bedford-plan.jpg",
        alt: "Photographs of existing Bedford Road and highway facilities",
        caption: "Existing municipal facilities included in the redevelopment concept.",
        source: "Fareri RFEI response"
      },
      {
        image: "assets/images/bedford-cover.jpg",
        alt: "Cover of the Bedford Road redevelopment RFEI response",
        caption: "Original redevelopment submission.",
        source: "Fareri RFEI response"
      }
    ],
    sources: [
      {
        label: "Project cost",
        title: "Fareri RFEI response — pages 43–44",
        href: "assets/documents/bedford-road-rfei.pdf#page=49",
        note: "Itemized $70 million proposed project cost."
      },
      {
        label: "Funding",
        title: "Fareri RFEI response — page 45",
        href: "assets/documents/bedford-road-rfei.pdf#page=51",
        note: "$30 million proposed sources and $40 million bond."
      },
      {
        label: "Resident impact",
        title: "Fareri RFEI response — page 46",
        href: "assets/documents/bedford-road-rfei.pdf#page=52",
        note: "Tax-rate and median-household calculation."
      }
    ],
    cautions: [
      "This is a proponent’s concept response, not a final Town construction award.",
      "Community Benefits Agreement funding is marked “to be verified” in the source.",
      "Future approvals, bids and financing may materially change these figures."
    ]
  },

  wd9: {
    id: "wd9",
    number: "02",
    name: "Water District No. 9 Extension",
    shortName: "Water District No. 9",
    category: "District water infrastructure",
    status: "Pre-design / grant planning",
    statusTone: "planning",
    lastVerified: "July 2026",
    verifiedBy: "October 2025 informational presentation and Finance Department clarification",
    heroImage: "assets/images/wd9-map.jpg",
    heroAlt: "Water District No. 9 proposed extension presentation",
    summary:
      "A proposed extension of the Quarry Heights water system intended to provide public water and improved fire protection to additional properties.",
    location: "Quarry Heights / Water District No. 9",
    department: "Sewer & Water Department",
    costLabel: "Estimated project cost",
    costValue: "$4.6 million",
    costNote:
      "Planning estimate based on informal vendor discussions; the Finance Department confirmed there are no backup bid documents for these preliminary amounts.",
    process: [
      {
        date: "2024",
        title: "Initial system installed",
        description:
          "WJWW installed approximately 854 feet of distribution system on James Street and part of Williams Street.",
        state: "complete"
      },
      {
        date: "October 21, 2025",
        title: "Informational meeting",
        description:
          "The Town presented the proposed extension, preliminary cost and possible grant-and-bond scenarios.",
        state: "complete"
      },
      {
        date: "Planned step 1",
        title: "Public hearing to extend WD9",
        description: "An order calling for a public hearing is identified as the first formal step.",
        state: "future"
      },
      {
        date: "Planned steps 2–3",
        title: "Final design, approvals, bond and grants",
        description:
          "Authorize final design and regulatory approvals, then adopt a bond resolution and submit grant applications.",
        state: "future"
      },
      {
        date: "Planned steps 4–5",
        title: "Bid documents and construction management",
        description:
          "Competitive bid information and the winning proposal would be posted by the Town after the project reaches bidding.",
        state: "future"
      }
    ],
    costBreakdown: [
      ["Construction", 3696173],
      ["Engineering", 875000]
    ],
    funding: [
      ["No-grant bond scenario", 4600000, "Estimated"],
      ["50% grant scenario — bond remainder", 2300000, "Estimated"],
      ["75% grant scenario — bond remainder", 1150000, "Estimated"]
    ],
    fundingAreAlternatives: true,
    impact: {
      type: "wd9",
      available: true,
      heading: "Potential benefited-property assessment",
      explanation:
        "The presentation allocates annual district debt service according to each property’s share of the district’s estimated $359,650 total assessed value. It models 0%, 50% and 75% grant outcomes over 25, 30 and 40 years at 4.25%.",
      defaultAssessment: 5250,
      districtAssessment: 359650,
      interestRate: 4.25,
      debtService: {
        "0": { "25": 302287, "30": 274152, "40": 241125 },
        "50": { "25": 151143, "30": 137076, "40": 120562 },
        "75": { "25": 75572, "30": 68538, "40": 60281 }
      },
      bondAmounts: { "0": 4600000, "50": 2300000, "75": 1150000 },
      benchmark: "$4,002 per year at $5,250 assessed value in the 30-year, no-grant scenario",
      attribution:
        "Calculated from estimated inputs in the October 2025 Town presentation. The Finance Department later clarified that the underlying cost figures came from informal vendor discussions, not bid documents."
    },
    gallery: [
      {
        image: "assets/images/wd9-map.jpg",
        alt: "Proposed Water District No. 9 extension presentation divider",
        caption: "Proposed district extension.",
        source: "Town informational presentation"
      },
      {
        image: "assets/images/wd9-system.jpg",
        alt: "Water District No. 9 distribution-system data table",
        caption: "Existing and proposed water-main lengths and hydrants.",
        source: "Town informational presentation"
      }
    ],
    sources: [
      {
        label: "Scope and process",
        title: "WD9 informational slide deck",
        href: "assets/documents/wd9-extension-slide-deck.pdf#page=9",
        note: "Extension description and planned project steps."
      },
      {
        label: "Cost and inputs",
        title: "WD9 slide deck — pages 19–20",
        href: "assets/documents/wd9-extension-slide-deck.pdf#page=19",
        note: "$4.6 million estimate and district assessment inputs."
      },
      {
        label: "Funding scenarios",
        title: "WD9 slide deck — pages 21–23",
        href: "assets/documents/wd9-extension-slide-deck.pdf#page=21",
        note: "Grant, bond-term and annual-cost comparisons."
      }
    ],
    cautions: [
      "The presentation explicitly marks the district and average-home assessments as estimated.",
      "The preliminary project amounts were informed by informal vendor discussions and are not bids.",
      "Property owners would separately be responsible for service laterals.",
      "Grant awards, interest rates and bid results could change the modeled annual cost."
    ]
  },

  turf: {
    id: "turf",
    number: "03",
    name: "IBM Community Park Turf Fields",
    shortName: "IBM Turf Fields",
    category: "Parks and recreation",
    status: "Town cost update available",
    statusTone: "active",
    lastVerified: "July 2026",
    verifiedBy: "Finance Department response; earlier process details from The Examiner News",
    heroImage: "assets/images/ibm-community-park.jpg",
    heroAlt: "Pre-project aerial field map of North Castle Community Park, commonly known as IBM Community Park",
    summary:
      "Conversion of two fields at IBM Community Park from grass to artificial turf, with related stormwater, netting, backstop, dugout and bench improvements.",
    location: "IBM Community Park, Business Park Drive",
    department: "Parks & Recreation",
    costLabel: "Approximate Town cost",
    costValue: "$4.4 million",
    costNote:
      "Updated amount provided by Abbas Sura, Director of Finance. This supersedes the newspaper’s earlier $2.7 million planning estimate.",
    process: [
      {
        date: "2023 community survey",
        title: "Turf identified as a recreation priority",
        description:
          "The project followed a parks-and-recreation survey that drew more than 600 responses.",
        state: "complete"
      },
      {
        date: "October 2023",
        title: "Engineering and bid documents authorized",
        description:
          "The Town Board agreed to retain Kellard Sessions to prepare construction and bid documents for fields 1 and 2.",
        state: "complete"
      },
      {
        date: "Later project phases",
        title: "Bidding and construction",
        description:
          "The exact bid comparison, award resolution, contractor and construction dates still need to be linked in STEWARD.",
        state: "unknown"
      },
      {
        date: "Finance update",
        title: "Town cost reported",
        description:
          "The Finance Department reported that the project has cost the Town approximately $4.4 million.",
        state: "complete"
      },
      {
        date: "Scout verification task",
        title: "Complete the official record",
        description:
          "Locate and verify the Town Board award, bid documents, contractor, final scope and completion information.",
        state: "future"
      }
    ],
    costBreakdown: [
      ["Approximate total Town cost", 4400000]
    ],
    funding: [
      ["Town fund balance", 4400000, "Finance Department update"]
    ],
    impact: {
      type: "none",
      available: false,
      heading: "No property-tax analysis",
      explanation:
        "The Finance Department stated that the project was funded using the Town’s fund balance and that no property-tax analysis was performed.",
      benchmark: "No calculated property-tax impact is displayed",
      attribution: "Funding and tax-analysis status provided by Abbas Sura, Director of Finance."
    },
    gallery: [
      {
        image: "assets/images/ibm-community-park.jpg",
        alt: "Pre-project aerial view identifying fields at North Castle Community Park",
        caption: "Pre-project aerial layout identifying IBM Fields 1–4 and the surrounding facilities.",
        source: "Armonk Soccer Club field-information page"
      }
    ],
    sources: [
      {
        label: "Early process",
        title: "The Examiner News — October 19, 2023",
        href: "https://www.theexaminernews.com/north-castle-to-move-ahead-with-artificial-turf-at-two-town-fields/",
        note: "Secondary-source account of the engineering authorization and early estimate."
      },
      {
        label: "Location and amenities",
        title: "Town of North Castle — Parks & Facilities",
        href: "https://www.northcastleny.gov/194/Parks-Facilities",
        note: "Official Town description of the 23-acre North Castle Community Park."
      },
      {
        label: "Field image and layout",
        title: "Armonk Soccer Club — Field Information",
        href: "https://www.armonksoccerclub.org/field-information",
        note: "Local field names, directions and an aerial Community Park image."
      },
      {
        label: "Related facility record",
        title: "Community Park athletic-facility bid",
        href: "https://www.bidnetdirect.com/new-york/townofnorthcastle/solicitations/OPERATION-OF-THE-ATHLETIC-FACILITIES-AT-COMMUNITY-PARK-Bid-Opening-NOW-June-27/0000349442",
        note: "A separate 2024 operating solicitation documenting the park address and existing enclosed athletic facilities."
      }
    ],
    cautions: [
      "The $4.4 million amount is an approximate Finance Department update.",
      "The older $2.7 million newspaper figure was an early estimate and is not presented as the final cost.",
      "Bid, award and contractor records still require primary-source verification."
    ]
  },

  pool: {
    id: "pool",
    number: "04",
    name: "Town Pool Renovation",
    shortName: "Town Pool",
    category: "Parks and recreation",
    status: "Bid received / financing planned",
    statusTone: "active",
    lastVerified: "July 2026",
    verifiedBy: "Bid comparison and Finance Department response",
    heroImage: "assets/images/pool-bid.jpg",
    heroAlt: "North Castle pool renovation bid comparison summary",
    summary:
      "Renovation of the North Castle Pool & Tennis Club pool and pool deck, with bidding conducted in summer 2026.",
    location: "North Castle Pool & Tennis Club",
    department: "Parks & Recreation",
    costLabel: "Bid figure reported by Finance",
    costValue: "$3.21 million",
    costNote:
      "The bid comparison identifies a $3,131,300 base-bid recommendation and a $3,210,000 figure including the listed alternate. The final Board resolution should be linked before labeling either amount the awarded contract.",
    process: [
      {
        date: "Before bidding",
        title: "Design and pre-bid work",
        description:
          "The Town spent approximately $136,000 from fund balance before the construction bid.",
        state: "complete"
      },
      {
        date: "July 7, 2026",
        title: "Sealed bids received",
        description:
          "The bid materials compare contractor submissions for the pool and pool-deck improvements.",
        state: "complete"
      },
      {
        date: "July 2026",
        title: "Bid figure discussed by the Town Board",
        description:
          "The Finance Department reported a $3.21 million bid figure from the recent Town Board meeting.",
        state: "complete"
      },
      {
        date: "Planned financing",
        title: "Debt financing anticipated",
        description:
          "The Finance Department expects debt financing, most likely with a 15-year term.",
        state: "future"
      },
      {
        date: "Verification needed",
        title: "Link final award and contract",
        description:
          "STEWARD still needs the final Board resolution, confirmed awarded scope and executed contract.",
        state: "future"
      }
    ],
    costBreakdown: [
      ["Pre-bid spending from fund balance", 136000],
      ["Recommended base bid — Tony Casale, Inc.", 3131300],
      ["Base bid plus listed alternate", 3210000]
    ],
    funding: [
      ["Pre-bid costs — Town fund balance", 136000, "Spent before bid"],
      ["Construction — debt financing", 3210000, "Expected; likely 15 years"]
    ],
    impact: {
      type: "none",
      available: false,
      heading: "No property-tax analysis yet",
      explanation:
        "The Finance Department stated that no additional property-tax-impact analysis has been completed. STEWARD therefore does not invent a household cost.",
      benchmark: "Debt term is expected to be approximately 15 years",
      attribution: "Funding expectation and tax-analysis status provided by Abbas Sura, Director of Finance."
    },
    gallery: [
      {
        image: "assets/images/pool-bid.jpg",
        alt: "Pool renovation bid-comparison summary",
        caption: "Bid-comparison source used to distinguish the base bid from the alternate.",
        source: "Town bid materials"
      }
    ],
    sources: [
      {
        label: "Bids",
        title: "Pool project bid-comparison summary",
        href: "assets/documents/pool-bid-comparison.pdf",
        note: "Contractor bids, base-bid recommendation and alternate."
      }
    ],
    cautions: [
      "The final Town Board award resolution and executed contract are not yet included.",
      "The $3.21 million figure should not be labeled the final contract amount until the awarded scope is confirmed.",
      "No property-tax-impact analysis has been prepared."
    ]
  },

  pickleball: {
    id: "pickleball",
    number: "05",
    name: "North Castle Pickleball Courts",
    shortName: "Pickleball Courts",
    category: "North Castle concept + Greenwich comparison",
    status: "Conceptual design / pre-procurement",
    statusTone: "planning",
    lastVerified: "August 2026",
    verifiedBy: "North Castle Supervisor’s May 2026 update and official Greenwich records",
    heroImage: "assets/images/greenwich-pickleball-open.jpg",
    heroAlt: "New dedicated pickleball courts at the Cohen Eastern Greenwich Civic Center",
    comparisonNote: {
      title: "North Castle first; Greenwich only as a process example.",
      text:
        "North Castle is considering a conceptual Lombardi Park plan for four dedicated courts west of the existing tennis courts. The plan would remove five storage containers and includes related parking, drainage and retaining-wall work. No construction bid, contractor selection or final funding plan is shown in the linked records. Greenwich appears below only to illustrate later steps North Castle has not yet reached."
    },
    summary:
      "North Castle is considering four dedicated outdoor pickleball courts at Lombardi Park. The May 27, 2026 Town Board materials show a conceptual layout west of the existing tennis courts, replacing five on-site storage containers and coordinating the courts with drainage, retaining walls and parking improvements.",
    location: "John A. Lombardi Park, 85 Cox Avenue, Armonk — west of the existing tennis courts",
    department: "North Castle Parks & Recreation / Town Engineer / Town Board",
    costLabel: "North Castle project cost",
    costValue: "Not yet available",
    costNote:
      "No authoritative North Castle construction estimate, appropriation, final funding plan or bid is displayed. Greenwich’s reported $625,000 capital budget is comparison information only.",
    process: [
      {
        date: "April 7, 2026",
        title: "Pickleball listed as active recreation-board business",
        description:
          "The Parks and Recreation Advisory Board agenda listed “Pickleball Courts in North Castle” under old business and project updates.",
        state: "complete"
      },
      {
        date: "April 22, 2026",
        title: "Residents supported finding a location",
        description:
          "The Supervisor later reported that many residents attended the Town Board meeting in support of finding a location for pickleball courts.",
        state: "complete"
      },
      {
        date: "May 2026",
        title: "Lombardi Park concept developed",
        description:
          "The Town worked with its engineer on site options. Conceptual drawings dated May 21 show four courts west of Lombardi Park’s tennis courts, removal of five storage containers, and related parking and site work.",
        state: "complete"
      },
      {
        date: "Current verified stage",
        title: "Conceptual design and pre-procurement",
        description:
          "The Town Board discussed the Lombardi concept at its May 27 work session. STEWARD has not located a construction authorization, final appropriation, bid solicitation, contractor award or start date.",
        state: "unknown"
      },
      {
        date: "Neighboring-town example",
        title: "Greenwich advanced from funding to rebid, construction and opening",
        description:
          "Greenwich assembled capital funding, rejected an unaffordable first bid round, added funding, rebid the work, built four lighted courts and opened them in June 2026. These are not North Castle milestones.",
        state: "complete"
      }
    ],
    costBreakdown: [],
    funding: [],
    impact: {
      type: "none",
      available: false,
      heading: "No North Castle cost or resident-impact calculation",
      explanation:
        "North Castle has not reached a documented cost-and-funding stage in the records linked here. Greenwich’s figures cannot be used to estimate a North Castle household tax impact.",
      benchmark: "North Castle project data must be obtained before any local calculation is shown",
      attribution: "Comparison information comes from Greenwich public records and clearly labeled reporting on its budget process."
    },
    gallery: [
      {
        image: "assets/images/greenwich-pickleball-construction.jpg",
        alt: "Greenwich construction rendering for four dedicated pickleball courts",
        caption: "Court construction visual released when work began.",
        source: "Town of Greenwich Parks & Recreation"
      },
      {
        image: "assets/images/greenwich-pickleball-open.jpg",
        alt: "New Greenwich pickleball courts open for public use",
        caption: "The completed courts opened in June 2026.",
        source: "Town of Greenwich Parks & Recreation"
      }
    ],
    sources: [
      {
        label: "North Castle status",
        title: "Supervisor’s Update — May 2026",
        href: "https://www.northcastleny.com/1100/Supervisors-Updates-May-2026",
        note: "Official account of resident support, Town Engineer evaluation and the locations work session."
      },
      {
        label: "North Castle agenda",
        title: "Town Board work session — May 27, 2026",
        href: "https://northcastleny.portal.civicclerk.com/event/1984/files",
        note: "Official meeting record for the Lombardi Park pickleball discussion and conceptual drawings."
      },
      {
        label: "Earlier project status",
        title: "Parks & Recreation Advisory Board — April 7, 2026",
        href: "https://www.northcastleny.com/AgendaCenter/ViewFile/Agenda/_04072026-1021",
        note: "Lists Pickleball Courts in North Castle under project updates."
      },
      {
        label: "First bid",
        title: "Greenwich RFB 7881",
        href: "https://www.greenwichct.gov/bids.aspx?bidID=507",
        note: "Initial 2024 solicitation and its supporting documents."
      },
      {
        label: "Rebid",
        title: "Greenwich RFB 7902",
        href: "https://www.greenwichct.gov/bids.aspx?bidID=549",
        note: "The 2025 rebid, exhibits and addendum."
      },
      {
        label: "Funding context",
        title: "Greenwich pickleball project status summary",
        href: "https://www.greenwichpickleball.com/news-and-articles/status-update-on-cohen-eastern-greenwich-civic-center-outdoor-pickleball-courts",
        note: "Secondary summary quoting the Town budget record: $375,000 previously funded and a $250,000 additional request."
      },
      {
        label: "Construction",
        title: "Town of Greenwich construction announcement",
        href: "https://www.greenwichct.gov/m/newsflash/Home/Detail/2983",
        note: "Official scope, start date and expected construction period."
      },
      {
        label: "Completion",
        title: "Town of Greenwich opening announcement",
        href: "https://www.greenwichct.gov/m/newsflash/Home/Detail/3315",
        note: "Official June 2026 opening and punch-list status."
      }
    ],
    cautions: [
      "Lombardi Park is the documented conceptual site, but a concept drawing is not a construction approval or award.",
      "No verified North Castle construction cost, final funding plan or household-impact figure is currently displayed.",
      "The $625,000 Greenwich figure and all Greenwich milestones are comparison information—not North Castle data."
    ]
  },

  clove: {
    id: "clove", number: "06", name: "Clove Road Ballfield Renovations", shortName: "Clove Road Fields",
    category: "Parks and recreation", status: "Construction complete / opening pending", statusTone: "complete",
    lastVerified: "August 2026", verifiedBy: "North Castle Parks records and Supervisor’s May 2026 update",
    heroImage: "", heroAlt: "Clove Road Park project image not yet added",
    summary: "Renovation of two ballfields at Clove Road Park in North White Plains. The Town reported construction complete in May 2026 and said an official opening and ribbon-cutting update would follow.",
    location: "Clove Road Park, North Broadway and Clove Road, North White Plains", department: "Parks & Recreation",
    costLabel: "Verified project cost", costValue: "Not yet available", costNote: "The official status sources located for STEWARD do not provide a complete cost, award or funding breakdown.",
    process: [
      {date:"January–February 2026",title:"Construction paused for winter",description:"Recreation-board minutes reported that the same contractor working on the IBM turf project would return after snow melted.",state:"complete"},
      {date:"May 2026",title:"Field work completed",description:"The Supervisor reported that work was complete on two newly renovated ballfields.",state:"complete"},
      {date:"Next public milestone",title:"Opening and ribbon cutting",description:"The Town said an official opening and ribbon-cutting announcement would follow.",state:"future"},
      {date:"Scout verification task",title:"Complete the financial record",description:"Locate the bid, award resolution, contractor, final scope, funding sources and actual expenditures.",state:"future"}
    ],
    costBreakdown: [], funding: [],
    impact:{type:"none",available:false,heading:"Resident impact not documented",explanation:"The linked official status records do not include a project-specific property-tax analysis.",benchmark:"No household estimate displayed",attribution:"Project status is based on official North Castle records."},
    gallery: [],
    sources:[
      {label:"Completion",title:"Supervisor’s Update — May 2026",href:"https://www.northcastleny.com/1100/Supervisors-Updates-May-2026",note:"Reports work complete and an opening announcement forthcoming."},
      {label:"Winter status",title:"Parks & Recreation minutes — February 3, 2026",href:"https://www.northcastleny.com/AgendaCenter/ViewFile/Minutes/_02032026-1015",note:"Documents the contractor’s planned return after winter."},
      {label:"Location",title:"North Castle Parks & Facilities",href:"https://www.northcastleny.com/194/Parks-Facilities",note:"Official location and park description."}
    ],
    cautions:["Construction status is documented, but the complete bid, award, funding and final-cost records still need to be linked."]
  },

  wd4well: {
    id: "wd4well", number: "07", name: "Water District No. 4 — Well SD2-1 Treatment Building", shortName: "WD4 Well SD2-1",
    category: "District water infrastructure", status: "Bid solicitation documented", statusTone: "active",
    lastVerified: "August 2026", verifiedBy: "Official North Castle bid posting",
    heroImage: "", heroAlt: "Water District No. 4 well project image not yet added",
    summary: "Site work for a prefabricated water-treatment building and the startup and testing needed to incorporate a new bedrock water-supply well into Water District No. 4.",
    location: "Water District No. 4 property, 15 Business Park Drive, Armonk", department: "Sewer & Water / Water District No. 4",
    costLabel: "Awarded project cost", costValue: "Not yet verified", costNote: "The official posting documents the competitive bid stage, but the page reviewed for STEWARD does not establish the awarded amount or final funding plan.",
    process:[
      {date:"March 20, 2025",title:"Bid advertised",description:"The Town published the site-work solicitation and made plans and specifications available.",state:"complete"},
      {date:"April 1, 2025",title:"Pre-bid meeting",description:"A project pre-bid meeting was scheduled at the site.",state:"complete"},
      {date:"April 17, 2025",title:"Bids due",description:"Sealed bids were due at Town Hall for public opening.",state:"complete"},
      {date:"Verification needed",title:"Confirm award and construction status",description:"Link the bid tabulation, Board award, contractor, funding, construction milestones and actual expenditures.",state:"future"}
    ],
    costBreakdown:[], funding:[],
    impact:{type:"none",available:false,heading:"District impact not yet documented",explanation:"No verified district-assessment or household-impact calculation is shown in the linked bid posting.",benchmark:"No household estimate displayed",attribution:"Scope and bid dates come from the official Town solicitation."},
    gallery:[],
    sources:[{label:"Official bid",title:"Water Supply & Treatment Building — Well SD2-1",href:"https://northcastleny.com/bids.aspx?bidID=12",note:"Town posting with project scope, site, schedule and bid documents."}],
    cautions:["A bid solicitation is not the same as a contract award.","The award, funding and current construction status require additional Town records."]
  },

  quarry: {
    id: "quarry", number: "08", name: "Quarry Park Improvements", shortName: "Quarry Park",
    category: "Parks and recreation", status: "Planning and neighborhood engagement", statusTone: "planning",
    lastVerified: "August 2026", verifiedBy: "North Castle Parks & Recreation minutes",
    heroImage: "", heroAlt: "Quarry Park project image not yet added",
    summary: "A proposed improvement effort for the small Quarry Park in North White Plains, including cleanup, a formal survey and park-boundary records, and a possible basketball area.",
    location: "Quarry Park, off Old Orchard Street, Quarry Heights", department: "Parks & Recreation",
    costLabel: "Project cost", costValue: "Not yet available", costNote: "The minutes describe a developing concept, not an approved construction budget or award.",
    process:[
      {date:"January 2026",title:"Basketball concept and resident concerns",description:"Minutes describe a proposed half-court basketball pad and neighborhood concerns about potential activity and hours.",state:"complete"},
      {date:"February 2026",title:"Survey and boundaries added to planning",description:"The Town planned cleanup, an official survey, accurate park-boundary records and a basketball area.",state:"complete"},
      {date:"Planned next step",title:"Neighborhood-informed project development",description:"The record indicates continued engagement and anticipated work, but STEWARD has not located a final design, appropriation, bid or award.",state:"future"}
    ],
    costBreakdown:[], funding:[],
    impact:{type:"none",available:false,heading:"No financial impact analysis",explanation:"The project is still described at a planning stage, without an authoritative cost or funding plan in the linked records.",benchmark:"No household estimate displayed",attribution:"Status is based on official advisory-board minutes."},
    gallery:[],
    sources:[
      {label:"Current plan",title:"Parks & Recreation minutes — February 3, 2026",href:"https://www.northcastleny.com/AgendaCenter/ViewFile/Minutes/_02032026-1015",note:"Cleanup, survey, boundaries and proposed basketball area."},
      {label:"Earlier discussion",title:"Parks & Recreation minutes — January 6, 2026",href:"https://www.northcastleny.com/AgendaCenter/ViewFile/Minutes/_01062026-1016",note:"Half-court concept, resident concerns and proposed outreach."},
      {label:"Location",title:"North Castle Parks & Facilities",href:"https://www.northcastleny.com/194/Parks-Facilities",note:"Official park location and current amenities."}
    ],
    cautions:["The basketball area is a proposal, not a documented approved construction award.","No verified cost, funding or resident-impact calculation is available in the linked records."]
  }
};
