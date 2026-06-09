// ============================================================
// STF POLICY APP — DATA
// Edit this file to update church details, people & policies
// ============================================================

window.STF_CONFIG = {
  church: {
    name: "St Francis Mackworth",
    shortName: "STF",
    diocese: "Derby Diocese",
    network: "HTB Network",
    dbsUmbrella: "Thirtyone:eight (via Derby Diocese)",
    address: "Mackworth, Derby",
    website: "",
    established: "July 2020 (revitalised)",
  },

  // ── PEOPLE & ROLES ─────────────────────────────────────────
  people: {
    vicar: { name: "[Vicar Name]", email: "", phone: "" },
    opsManager: { name: "James", email: "", phone: "" },
    pso: { name: "Joanne Baillie", email: "", phone: "" },
    churchwardens: [
      { name: "[Churchwarden 1]", email: "" },
      { name: "[Churchwarden 2]", email: "" },
    ],
    pccMembers: [
      { name: "[PCC Member 1]", role: "" },
    ],
    ministryLeads: [
      { name: "[Children & Families Pastor]", ministry: "Children & Families", email: "" },
      { name: "[Youth Ministry]", ministry: "Youth", email: "" },
    ],
    staff: [
      { name: "James", role: "Operations Manager", startDate: "", dbs: true, dbsDate: "", dbsLevel: "Enhanced" },
    ],
  },

  // ── APP SETTINGS ────────────────────────────────────────────
  adminPasswordHash: "ba3c84162583215a838320a83540540090c7c980f4786c85ff80ae9ff73633c3", // SHA-256 hash — update via Settings
  driveFolder: "https://drive.google.com/drive/folders/1re8xM9EE2Thk1avp5kdAjocThxGKs-HH",
};

// ============================================================
// POLICY DATA — 35 POLICIES
// ============================================================
window.STF_POLICIES = [
  // ── SET 1: ORIGINAL 14 ──────────────────────────────────────
  {
    id:"p01", number:"01", title:"Parish Safeguarding Policy",
    tagline:"Promoting a safer church for all — especially the vulnerable",
    category:"Safeguarding", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"PSO", status:"active",
    sections:[
      {heading:"1. Statement of Commitment", body:"St Francis Mackworth is committed to the safeguarding and protection of all children, young people, and vulnerable adults. We affirm that the care and nurture of children and adults is the responsibility of the whole church community. We will do all within our power to create a safe environment and to prevent the physical, emotional, sexual, spiritual, or financial abuse of any person.\n\nWe subscribe to the Church of England's policy 'Promoting a Safer Church' (2017) and will implement the House of Bishops' Safer Recruitment and People Management Guidance (2021) and the Safeguarding Learning and Development Framework (2024)."},
      {heading:"2. Scope", body:"This policy applies to all paid staff, self-employed contractors, volunteers, and trustees (PCC members) at St Francis Mackworth. It covers all activities organised, hosted, or facilitated by the church, whether on church premises or elsewhere."},
      {heading:"3. Legal and Policy Framework", body:"• Children Act 1989 and 2004\n• Safeguarding Vulnerable Groups Act 2006\n• Working Together to Safeguard Children (2023)\n• Care Act 2014\n• House of Bishops Safeguarding Policy (2017): Promoting a Safer Church\n• House of Bishops Safer Recruitment and People Management Guidance (April 2021)\n• CofE Safeguarding Learning and Development Framework (2024)\n• Derby Diocese Safeguarding Policy and Procedures"},
      {heading:"4. Responsibilities", body:"The PCC: adopts and reviews this policy annually; ensures adequate resources are allocated to safeguarding; receives and acts on the annual safeguarding report.\n\nThe Vicar: takes overall responsibility for safeguarding within the parish; ensures all staff and volunteers are appropriately recruited, trained, and supervised.\n\nThe Parish Safeguarding Officer (PSO): acts as the first point of contact for all safeguarding concerns; liaises with the Diocese Safeguarding Adviser; maintains the safeguarding register and DBS records; coordinates safeguarding training.\n\nAll Staff and Volunteers: read, understand, and implement this policy; complete required safeguarding training; report any concerns immediately to the PSO."},
      {heading:"5. Safer Recruitment", body:"All roles involving work with children or vulnerable adults require:\n1. A written role description\n2. A completed CofE application form\n3. Completion of the CofE Confidential Declaration Form\n4. Two satisfactory written references\n5. An interview by a panel of at least two\n6. An appropriate DBS check (Enhanced with Barred List for regulated activity)\n7. Completion of required safeguarding training before commencing"},
      {heading:"6. Responding to Concerns", body:"Anyone with a concern about a child or vulnerable adult must:\n1. Act immediately — do not wait or investigate yourself\n2. Tell the PSO or, in their absence, the Vicar\n3. Record what was said or seen in writing as soon as possible\n4. Not promise confidentiality to the person disclosing\n\nIf there is immediate risk to life, call 999."},
      {heading:"7. Confidentiality", body:"Information about safeguarding concerns is shared only on a need-to-know basis. Confidentiality is not the same as secrecy. Information will be shared with statutory agencies where there is a risk to life or a legal obligation to do so."},
      {heading:"8. Allegations Against Staff or Volunteers", body:"If an allegation is made against a member of staff or volunteer, the Vicar must be informed immediately (unless the allegation is against the Vicar, in which case the Archdeacon or Diocesan Safeguarding Adviser is contacted directly). The Diocesan Safeguarding Adviser must be contacted before any action is taken."},
      {heading:"9. Training", body:"All church officers must complete Basic Awareness training. Volunteers working with children or adults at risk must complete Foundation level. Those leading such ministries must complete Leadership level. All training is renewed every three years."},
      {heading:"10. Policy Review", body:"This policy will be reviewed annually by the PCC and updated as required. The PSO will present an annual safeguarding report to the PCC."},
    ]
  },
  {
    id:"p02", number:"02", title:"Volunteer Code of Conduct",
    tagline:"Serving with integrity, honouring God and protecting people",
    category:"Safeguarding", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"This Code sets out the standards of behaviour expected of all volunteers at St Francis Mackworth. It exists to protect volunteers, the people they serve, and the reputation of the church. Signing this Code is a condition of volunteering."},
      {heading:"2. Personal Conduct", body:"• Treat every person with dignity, respect, and kindness\n• Maintain appropriate personal and professional boundaries at all times\n• Never act in a way that intimidates, demeans, or exploits another person\n• Be honest and transparent in all dealings with staff, fellow volunteers, and church members\n• Avoid any conflict of interest and declare any that arise"},
      {heading:"3. Safeguarding", body:"• Uphold the Parish Safeguarding Policy at all times\n• Never be alone with a child or vulnerable adult (Two-Adult Rule)\n• Report any safeguarding concern to the PSO immediately\n• Never promise confidentiality to someone making a disclosure\n• Do not investigate concerns yourself — refer and record only"},
      {heading:"4. Communication and Social Media", body:"• Do not send personal messages to children or young people via personal social media\n• Use only church-approved communication channels with under-18s\n• Do not post images of children without parental consent\n• Do not make public statements on behalf of the church without authorisation"},
      {heading:"5. Use of Church Resources", body:"• Use church equipment, premises, and funds only for their intended purpose\n• Do not profit personally from your volunteer role\n• Return equipment and keys promptly when asked\n• Report any damage to church property to the Operations Manager"},
      {heading:"6. Breach of Code", body:"Any breach of this Code may result in a formal conversation, temporary suspension, or removal from the volunteer role, depending on the seriousness of the breach. Safeguarding breaches will be referred to the PSO and Diocese."},
    ]
  },
  {
    id:"p03", number:"03", title:"Lone Working Policy",
    tagline:"Keeping volunteers and staff safe when working alone",
    category:"Health & Safety", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose and Scope", body:"This policy covers any situation where a church volunteer or staff member is working alone on church premises or representing the church without a colleague present."},
      {heading:"2. Definition", body:"Lone working includes: opening and locking up the building; working on church premises outside normal hours; pastoral visits to individuals in their homes; conducting one-to-one meetings."},
      {heading:"3. Risk Assessment", body:"Before commencing a lone-working activity, volunteers must:\n1. Inform a named contact of where they are going and when they expect to return\n2. Confirm a check-in time with that contact\n3. Ensure they have a working mobile phone"},
      {heading:"4. Prohibited Lone-Working Situations", body:"The following are never permitted:\n• Any adult being alone with a child or young person\n• Pastoral home visits to vulnerable adults without prior agreement and check-in\n• Any lone worker opening the building before 7am or remaining after 10pm without prior notification"},
      {heading:"5. Check-In Procedure", body:"For lone working on premises: notify the Operations Manager or Vicar before commencing; check in by text on arrival and departure.\n\nFor pastoral home visits: always seek to visit in pairs where possible; inform the Vicar or PSO of the address and expected duration; check in on arrival and departure."},
      {heading:"6. Building Keyholders", body:"All keyholders must hold an Enhanced DBS check. Keys must not be copied or lent to any third party. Loss of keys must be reported to the Operations Manager immediately."},
    ]
  },
  {
    id:"p04", number:"04", title:"Photography & Filming Policy",
    tagline:"Protecting people's images and upholding GDPR in our communications",
    category:"Safeguarding", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"This policy governs the taking, storage, and use of photographs and video footage at all St Francis Mackworth activities. It protects the dignity and safety of all members, particularly children, and ensures compliance with UK GDPR."},
      {heading:"2. Consent", body:"• Written consent is required before publishing any identifiable photograph or video of an adult or child\n• Consent for children must be given by a parent or legal guardian\n• Consent must be refreshed every three years for adults, and annually for children\n• Consent may be withdrawn at any time"},
      {heading:"3. Do Not Photograph Register", body:"A register is maintained by the PSO. This includes individuals with safeguarding concerns (e.g. domestic abuse survivors, court orders). Photographers must check this register before every event."},
      {heading:"4. Children and Young People", body:"• Children must never be photographed without parental written consent\n• Images of children must never be stored on personal devices\n• Children must never be named alongside their photograph in public-facing material\n• Any photographer working regularly in children's ministry must hold an Enhanced DBS check"},
      {heading:"5. Livestreaming", body:"• Verbal and on-screen notice must be given at the start of every livestreamed service\n• Camera angles must be set to avoid capturing children\n• The livestream must be cut immediately if a safeguarding disclosure is made\n• A CCLI Streaming Licence must be active for all streamed content"},
      {heading:"6. Storage and Retention", body:"• All images and footage are stored on church-approved, password-protected systems\n• Images are not stored on personal devices or uploaded to personal cloud storage"},
    ]
  },
  {
    id:"p05", number:"05", title:"Social Media Policy",
    tagline:"Communicating well, protecting people, and representing Christ faithfully online",
    category:"Communications", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"This policy applies to all use of social media by St Francis Mackworth volunteers and staff, both in official capacities and personal use where it touches on church matters."},
      {heading:"2. Official Church Accounts", body:"• Only authorised individuals may post on official church social media accounts\n• No images of identifiable children are posted without verified parental consent\n• Requests and direct messages are monitored — disclosures are escalated to the PSO immediately"},
      {heading:"3. Communication with Children and Young People", body:"• Volunteers must NEVER contact under-18s via personal social media accounts\n• All communication with under-18s must be via church-approved channels only\n• Group chats with young people must include at least two adults\n• Never request or accept friendship/follow requests from under-18s on personal accounts"},
      {heading:"4. Personal Social Media Use", body:"• Do not post information that could identify a vulnerable person in your care\n• Do not post comments that could bring the church into disrepute\n• Do not represent personal opinions as the position of the church"},
      {heading:"5. Breach", body:"Breach of this policy — particularly any rule relating to communication with under-18s — will be treated with the utmost seriousness and may result in immediate suspension from all volunteering and referral to statutory agencies."},
    ]
  },
  {
    id:"p06", number:"06", title:"Transport Policy",
    tagline:"Transporting people safely on behalf of the church",
    category:"Health & Safety", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose and Scope", body:"This policy covers all transportation of church members, particularly children and young people, in connection with church activities."},
      {heading:"2. General Principles", body:"• No volunteer may transport a child alone — a minimum of two adults must be present\n• Written parental consent is required before transporting any child\n• All drivers must have business use on their motor insurance\n• Seatbelts must be worn by all passengers at all times"},
      {heading:"3. Transporting Children", body:"1. Obtain written parental consent specifying the journey, date, and responsible adults\n2. Ensure at least two unrelated DBS-checked adults are in the vehicle\n3. Never transport a child alone — not even for short distances\n4. Record the names of all children transported and the vehicle registration"},
      {heading:"4. Minibus Use", body:"• Anyone driving a minibus must hold a current MiDAS certificate\n• The minibus must be inspected before each trip\n• A journey log must be completed for every trip\n• Minibus keys are held by the Operations Manager"},
    ]
  },
  {
    id:"p07", number:"07", title:"Overnight & Residential Policy",
    tagline:"Enabling excellent residential ministry with rigorous safeguards",
    category:"Safeguarding", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Scope", body:"This policy applies to all church-organised overnight or residential events involving children, young people, or vulnerable adults."},
      {heading:"2. Planning and Approval", body:"• All residentials involving under-18s must be approved by the PCC at least 6 weeks in advance\n• A detailed risk assessment must be completed and signed off by the Operations Manager\n• Medical forms and emergency contacts must be collected for every participant\n• All leaders attending must hold current Enhanced DBS with Children's Barred List"},
      {heading:"3. Ratios", body:"Minimum adult:young person ratios:\n• Under 8s: 1:6\n• 8–12: 1:8\n• 13–17: 1:10\n• At least two unrelated DBS-checked adults must be present at all times"},
      {heading:"4. Sleeping Arrangements", body:"• Adults and young people sleep in separate spaces — no exceptions\n• No adult may share a sleeping space with a young person\n• Leaders must never enter a young person's sleeping area without another adult present"},
    ]
  },
  {
    id:"p08", number:"08", title:"Data Protection & GDPR Policy",
    tagline:"Handling personal data with care, transparency, and legal compliance",
    category:"Governance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"St Francis Mackworth is registered as a data controller with the ICO. This policy sets out how we collect, store, use, and protect personal data in compliance with UK GDPR and the Data Protection Act 2018."},
      {heading:"2. Data We Hold", body:"We hold: names and contact details; giving records; pastoral notes; safeguarding records; DBS check information; images and recordings; ChurchSuite data; and financial records in Xero.\n\nReligious beliefs and safeguarding data are special-category data under UK GDPR."},
      {heading:"3. Lawful Basis for Processing", body:"• Consent — for marketing communications, newsletters, and photography\n• Contract — for employment and formal volunteer agreements\n• Legal obligation — for DBS records, safeguarding, and financial reporting\n• Legitimate interests — for pastoral care and community ministry"},
      {heading:"4. Individual Rights", body:"Individuals have the right to: access their data (respond within 30 days); rectification; erasure; restriction; portability; object to processing.\n\nRequests should be directed to the Operations Manager."},
      {heading:"5. Data Security", body:"• All personal data is stored on password-protected systems (ChurchSuite, Xero)\n• Safeguarding records are held securely by the PSO\n• Personal data must never be shared via unencrypted email or messaging platforms"},
      {heading:"6. Data Retention", body:"• Active member data: duration of membership plus 3 years\n• Financial records: 7 years (HMRC requirement)\n• Safeguarding records: indefinitely, per Diocesan guidance\n• DBS records: reference number, issue date, and level only"},
      {heading:"7. Data Breaches", body:"Any suspected data breach must be reported to the Operations Manager within 24 hours. Serious breaches must be reported to the ICO within 72 hours."},
    ]
  },
  {
    id:"p09", number:"09", title:"Health & Safety Policy",
    tagline:"Providing a safe environment for all who gather at St Francis Mackworth",
    category:"Health & Safety", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Statement of Intent", body:"St Francis Mackworth (as represented by the PCC) is committed to ensuring the health, safety, and welfare of all who use our premises and participate in our activities. Day-to-day responsibility is delegated to the Operations Manager."},
      {heading:"2. Legal Framework", body:"• Health and Safety at Work Act 1974\n• Management of Health and Safety at Work Regulations 1999\n• Electricity at Work Regulations 1989\n• Fire Safety Order 2005"},
      {heading:"3. Risk Assessments", body:"• A general premises risk assessment is reviewed annually by the Buildings Committee\n• Activity-specific risk assessments are completed for all events and residentials\n• All volunteers are briefed on relevant risk assessments before serving"},
      {heading:"4. Fire Safety", body:"• Fire exits are clearly marked and kept clear at all times\n• A fire evacuation drill is conducted at least once per year\n• Fire extinguishers are serviced annually"},
      {heading:"5. First Aid", body:"• A stocked first aid kit is maintained and checked monthly\n• At least one first-aider is present at every main Sunday service\n• Any first aid incident must be recorded within 24 hours"},
    ]
  },
  {
    id:"p10", number:"10", title:"Managing Allegations & Whistleblowing Policy",
    tagline:"Responding swiftly, fairly, and transparently when concerns arise",
    category:"Safeguarding", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"PSO", status:"active",
    sections:[
      {heading:"1. Purpose", body:"This policy sets out how St Francis Mackworth responds to allegations made against staff, volunteers, or church officers, and how anyone can raise concerns about unsafe or improper practice."},
      {heading:"2. Allegations Against Staff or Volunteers", body:"If an allegation is made:\n1. Do NOT investigate the allegation yourself\n2. Report immediately to the Vicar (or, if against the Vicar, to the Archdeacon)\n3. The Diocesan Safeguarding Adviser must be contacted BEFORE any action is taken\n4. The subject must be asked to stand down from their role pending investigation"},
      {heading:"3. Whistleblowing", body:"Concerns may be raised with:\n• The PSO: Joanne Baillie\n• The Diocesan Safeguarding Adviser: via derby.anglican.org\n• Thirtyone:eight: 0303 003 1111\n• The NSPCC Whistleblowing Helpline: 0800 028 0285\n\nConcerns raised in good faith will not result in any detriment to the person raising them."},
    ]
  },
  {
    id:"p11", number:"11", title:"Recruitment of Ex-Offenders Policy",
    tagline:"Fair, transparent, and safe recruitment for all applicants",
    category:"HR & Employment", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"St Francis Mackworth is committed to the fair treatment of all applicants and volunteers regardless of offending history, while maintaining our duty of care to protect children and vulnerable adults."},
      {heading:"2. Our Approach", body:"• Having a criminal record does not automatically bar a person from volunteering\n• Each case is considered on its merits, taking into account the nature of the offence, time elapsed, and nature of the role\n• Offences involving violence, sexual offences, offences against children, or fraud receive the highest scrutiny"},
      {heading:"3. Barred List", body:"It is a criminal offence for a barred individual to apply for, offer to work in, or work in regulated activity. If an applicant is found to be on the Children's or Adults' Barred List, they will not be permitted to volunteer in any capacity involving those groups."},
    ]
  },
  {
    id:"p12", number:"12", title:"Low-Level Concerns Policy",
    tagline:"Creating a culture where all concerns are heard and no warning sign is ignored",
    category:"Safeguarding", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"PSO", status:"active",
    sections:[
      {heading:"1. Purpose", body:"This policy enables volunteers and staff to report behaviours that do not meet the threshold of a formal safeguarding allegation but which nevertheless feel uncomfortable or inappropriate."},
      {heading:"2. What Is a Low-Level Concern?", body:"A low-level concern is any behaviour that: is not consistent with the Volunteer Code of Conduct; causes unease but does not clearly meet the threshold for a formal allegation; or involves a boundary violation that may seem minor in isolation.\n\nExamples: texting a young person from a personal phone; buying gifts for a child; spending time alone with a child contrary to the Two-Adult Rule."},
      {heading:"3. Reporting and Recording", body:"Report to the PSO as soon as possible, ideally within 24 hours. The PSO records all concerns in a confidential log and reviews it regularly to identify patterns."},
    ]
  },
  {
    id:"p13", number:"13", title:"Allergen & Food Safety Policy",
    tagline:"Serving food with care, transparency, and legal compliance",
    category:"Health & Safety", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Scope", body:"This policy applies to all preparation and serving of food and drink at St Francis Mackworth events, including Sunday refreshments, Alpha meals, community lunches, events, and celebrations."},
      {heading:"2. The 14 Major Allergens", body:"The following must always be declared: Celery, Cereals containing gluten, Crustaceans, Eggs, Fish, Lupin, Milk, Molluscs, Mustard, Nuts (tree nuts), Peanuts, Sesame, Soybeans, Sulphur dioxide/sulphites."},
      {heading:"3. Labelling and Hygiene", body:"• All food prepared on-site must be labelled with a full ingredient list\n• Allergen information must be clearly visible at the point of service\n• Where cooking is involved, at least one Level 2 Food Hygiene-certified person must be present\n• Keep raw and cooked foods separate; maintain correct temperatures"},
    ]
  },
  {
    id:"p14", number:"14", title:"CCLI & Streaming Licence Policy",
    tagline:"Using music and media legally, faithfully, and generously",
    category:"Operations", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. CCLI Copyright Licence", body:"The CCLI Copyright Licence covers reproduction of song lyrics on screen, in printed service sheets, and in notice sheets for gatherings on our premises. It does NOT cover recording and distributing audio/video of songs. Our licence number must be displayed on any printed material reproducing song lyrics."},
      {heading:"2. CCLI Streaming Licence", body:"A separate CCLI Streaming Licence is required for livestreaming or recording services that include congregational singing. It covers: Facebook Live, YouTube Live, church website streams, and pre-recorded services. It does NOT cover background music — a PPL/PRS licence is required for this."},
      {heading:"3. Reporting", body:"CCLI requires annual song usage data. The Worship Leader records songs used at each service. The Operations Manager submits the annual CCLI report before the licence renewal deadline."},
    ]
  },
  // ── SET 2: ORIGINAL 8 ──────────────────────────────────────
  {
    id:"p15", number:"15", title:"Financial Controls Policy",
    tagline:"Handling God's resources with integrity, transparency, and accountability",
    category:"Finance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Governance", body:"The PCC has collective legal responsibility for financial management. The Finance Committee (chaired by the Operations Manager) meets at least quarterly. Annual accounts are prepared in accordance with the Charities SORP (FRS102) and independently examined."},
      {heading:"2. Bank Accounts and Signatories", body:"• A minimum of two authorised signatories are required on all bank mandates\n• No single signatory may authorise a payment to themselves\n• Dual authorisation is required for all payments above £500\n• Signatories who leave must be removed from bank mandates within 14 days"},
      {heading:"3. Expenditure Authorisation", body:"• Operations Manager: up to £500 per item within approved budget\n• Operations Manager + one PCC officer: £500–£2,500 within approved budget\n• Finance Committee: £2,500–£10,000 within approved budget\n• Full PCC: over £10,000, or any unbudgeted item over £1,000"},
      {heading:"4. Cash Handling", body:"• All cash received is counted by a minimum of two unrelated people\n• Cash count sheets are completed and signed by both counters\n• Cash is banked within 5 working days of receipt\n• Petty cash is limited to £100 float, reconciled monthly"},
      {heading:"5. Fraud Prevention", body:"• Invoice requests received by email are verified by a separate phone call before payment\n• Any unexpected change to supplier bank details is verified directly with the supplier\n• All suspected fraud is reported to the Operations Manager and to Action Fraud (0300 123 2040)"},
    ]
  },
  {
    id:"p16", number:"16", title:"IT Security Policy",
    tagline:"Protecting our systems, data, and people from digital harm",
    category:"Operations", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Approved Systems", body:"• ChurchSuite — church management, rota, giving records, contacts\n• Xero — financial management and accounting\n• Email (Microsoft 365 / Google Workspace)\n• ProPresenter / vMix — production and livestream\n• Church social media accounts\n\nNo personal data about church members may be stored in non-approved systems."},
      {heading:"2. Access Control", body:"• Access to ChurchSuite and Xero is role-based\n• Access is removed immediately when a person leaves their role\n• Shared passwords are not used — each person has their own named login"},
      {heading:"3. Passwords and 2FA", body:"• All passwords must be at least 12 characters\n• Two-factor authentication must be enabled on all email accounts, ChurchSuite admin, and Xero\n• A password manager is recommended"},
      {heading:"4. Scam Awareness", body:"Common scams targeting churches:\n• CEO/vicar impersonation requesting urgent bank transfers or gift cards\n• Fake invoice emails from slightly-wrong email addresses\n• Supplier account change requests\n\nRule: if it feels urgent and involves money or credentials, stop and verify by phone."},
    ]
  },
  {
    id:"p17", number:"17", title:"Buildings Hire Policy",
    tagline:"Opening our doors generously while protecting people, property, and mission",
    category:"Operations", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Permitted Uses", body:"Generally approved: community meetings, fitness classes, children's parties, other Christian or community organisation events.\n\nRequires PCC approval: regular commercial activities; events involving alcohol.\n\nNot permitted: events promoting gambling; events of an explicitly political nature."},
      {heading:"2. Safeguarding Requirements for Hirers", body:"• Hirers whose activities involve children must confirm they have their own safeguarding policy and appropriate DBS checks\n• The Two-Adult Rule applies on church premises at all times — hirers are made aware of this as a condition of hire\n• A church keyholder must be available for any hire involving children"},
      {heading:"3. Insurance and Cancellation", body:"• External hirers must hold their own public liability insurance with a minimum limit of £5 million\n• Hirer cancels 28+ days before: full deposit refund\n• Hirer cancels 14–28 days: 50% deposit retained\n• Hirer cancels under 14 days: deposit forfeited"},
    ]
  },
  {
    id:"p18", number:"18", title:"Premises Access & Keyholder Policy",
    tagline:"Managing building access securely and responsibly",
    category:"Operations", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Key Register", body:"The Operations Manager maintains a current Key Register recording: the name and role of every keyholder; key numbers issued; date issued; and date returned. The Key Register is reviewed annually."},
      {heading:"2. Who May Hold Keys", body:"• Keys are issued only to staff and volunteers who need regular building access for their role\n• All keyholders must hold an Enhanced DBS check\n• New keys may only be issued with approval of the Operations Manager"},
      {heading:"3. Key Security and Alarm Codes", body:"• Keys must not be copied under any circumstances\n• If a key is lost, the Operations Manager must be notified immediately\n• Alarm codes are changed annually and when a keyholder leaves their role\n• Alarm codes must not be shared in written form"},
    ]
  },
  {
    id:"p19", number:"19", title:"Complaints Policy",
    tagline:"Listening well, responding fairly, and learning from feedback",
    category:"Governance", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. How to Raise a Complaint", body:"Step 1 — Informal: Most concerns are best resolved by speaking directly with the person involved or their team leader.\n\nStep 2 — Formal: Submit in writing to the Operations Manager; or, if involving the Operations Manager, directly to the Vicar; or, if involving the Vicar, to the PCC Chair or Archdeacon."},
      {heading:"2. How We Will Respond", body:"• Acknowledgement within 5 working days\n• Investigation by a person not directly involved\n• A written response within 28 days"},
      {heading:"3. Escalation", body:"If unsatisfied, escalate to: the full PCC; the Diocese of Derby (Archdeacon's office); or the Charity Commission for concerns about the church's conduct as a charity."},
    ]
  },
  {
    id:"p20", number:"20", title:"Conflict of Interest Policy",
    tagline:"Ensuring decisions are made for the right reasons",
    category:"Governance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"PCC members are charity trustees and have a legal duty to act in the best interests of the charity at all times. This policy ensures personal interests do not influence decisions made on behalf of the church."},
      {heading:"2. Register of Interests", body:"The Operations Manager maintains a Register of Interests for all PCC members and staff. All must complete a Declaration of Interests form when joining the PCC or commencing employment, and review it annually."},
      {heading:"3. Declaring a Conflict", body:"If a conflict arises at any meeting:\n1. Declare it at the start of the relevant discussion\n2. The declaration is recorded in the minutes\n3. The person must not participate in the discussion and must leave the room for the vote"},
    ]
  },
  {
    id:"p21", number:"21", title:"Pastoral Care Policy",
    tagline:"Caring well for one another in a way that is safe, boundaried, and Christ-centred",
    category:"Pastoral", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Vicar", status:"active",
    sections:[
      {heading:"1. What Pastoral Care Is — and Isn't", body:"Pastoral care includes: listening and prayer; visiting the sick, housebound, or bereaved; supporting people through significant life transitions.\n\nPastoral care is NOT: professional counselling; medical, legal, or financial advice; or crisis mental health intervention. Pastoral carers must not attempt to function as counsellors."},
      {heading:"2. Boundaries", body:"• Pastoral visits are not made to an individual's home without prior arrangement\n• The Lone Working Policy applies to all pastoral home visits\n• A maximum of three one-to-one conversations on a single presenting issue before referral is considered\n• Physical contact must be consensual and culturally appropriate"},
      {heading:"3. Confidentiality and Mental Health", body:"Pastoral confidentiality is not absolute. If a person discloses that they or someone else is at risk of harm, the pastoral carer must follow the safeguarding procedure.\n\nIf a person expresses thoughts of suicide or self-harm: stay calm; call 999 if there is immediate risk; contact the Vicar or PSO immediately; refer to Samaritans (116 123) or NHS 111."},
    ]
  },
  {
    id:"p22", number:"22", title:"Volunteer Expenses & Reimbursement Policy",
    tagline:"Ensuring no one is out of pocket for serving the church",
    category:"Finance", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. What Can Be Claimed", body:"Travel: car mileage at current HMRC approved rate (45p/mile for first 10,000 miles); public transport at actual cost; parking at actual cost with receipt.\n\nSubsistence: meals where the activity requires 4+ hours away from home; maximums of £8 breakfast, £12 lunch, £20 dinner — receipts required for all claims over £5. No alcohol is reimbursable.\n\nMaterials: items purchased for a church activity, pre-approved by the relevant team leader."},
      {heading:"2. How to Claim", body:"1. Complete the Volunteer Expense Claim Form\n2. Attach all original receipts — claims without receipts cannot be processed\n3. Submit to the Operations Manager within 30 days\n4. Claims over £50 must be approved by the Operations Manager before submission\n5. Payment is made by bank transfer within 14 days of an approved claim"},
      {heading:"3. Gift Aid on Donated Expenses", body:"Volunteers may choose to waive reimbursement and donate their expenses to the church. Where they do so and are a UK taxpayer, this may qualify for Gift Aid. A 'waiver and donation' form must be signed."},
    ]
  },
  // ── SET 3: NEW COMPLIANCE POLICIES ─────────────────────────
  {
    id:"p23", number:"23", title:"Equality, Diversity & Inclusion Policy",
    tagline:"Welcoming all people as image-bearers of God, free from unlawful discrimination",
    category:"HR & Employment", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Statement of Commitment", body:"St Francis Mackworth is committed to equality and diversity in all its activities. We will not unlawfully discriminate on the basis of any of the protected characteristics defined in the Equality Act 2010: age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.\n\nThis commitment applies to all aspects of church life: employment, volunteering, ministry, and service delivery."},
      {heading:"2. Legal Framework", body:"• Equality Act 2010\n• Human Rights Act 1998\n• Equality Act 2010 (Specific Exceptions for Religious Organisations — Schedule 9, Part 1)\n\nNote: as a religious organisation, St Francis Mackworth may apply requirements related to religion or belief in certain employment and ministry contexts where this is proportionate and justified."},
      {heading:"3. Our Commitments", body:"• We will not unlawfully discriminate against any person in recruitment, employment, or volunteer engagement\n• We will make reasonable adjustments for people with disabilities to enable full participation in church life\n• We will challenge behaviour that constitutes unlawful discrimination, harassment, or victimisation\n• We will provide equal access to ministry, pastoral care, and community activities\n• We will regularly review our practices to identify and address any barriers to inclusion"},
      {heading:"4. Harassment", body:"Harassment on the basis of a protected characteristic is unlawful and will not be tolerated. This includes:\n• Unwanted conduct that violates a person's dignity\n• Conduct that creates an intimidating, hostile, degrading, humiliating, or offensive environment\n\nAll complaints of harassment will be taken seriously and handled under the Disciplinary & Grievance Policy."},
      {heading:"5. Responsibilities", body:"The PCC is responsible for adopting and reviewing this policy. The Operations Manager is responsible for implementation and for investigating any complaints of discrimination. All staff and volunteers are responsible for upholding this policy."},
    ]
  },
  {
    id:"p24", number:"24", title:"Disciplinary & Grievance Policy",
    tagline:"Resolving workplace concerns fairly, consistently, and with dignity",
    category:"HR & Employment", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose and Scope", body:"This policy applies to all employees of St Francis Mackworth. It sets out the procedures for handling disciplinary matters and employee grievances in a fair, consistent, and legally compliant manner. It is based on the ACAS Code of Practice on Disciplinary and Grievance Procedures (2015)."},
      {heading:"2. Disciplinary Procedure", body:"Minor issues will be addressed informally where possible. For formal matters:\n\n1. Investigation: the Operations Manager (or a nominated independent person) investigates the concern\n2. Notification: the employee is informed in writing of the allegation and the right to be accompanied\n3. Hearing: a formal hearing is held with the employee\n4. Decision and outcome: written decision with reasons\n5. Right of appeal: the employee has the right to appeal within 5 working days\n\nPossible outcomes: no action; written warning; final written warning; dismissal with notice; or summary dismissal (gross misconduct only)."},
      {heading:"3. Gross Misconduct", body:"Gross misconduct may result in summary dismissal without notice or pay in lieu. Examples include: theft or fraud; physical violence; serious safeguarding breach; falsification of records; serious breach of confidentiality; being under the influence of drugs or alcohol on duty."},
      {heading:"4. Grievance Procedure", body:"Employees should first raise concerns informally with their line manager. If unresolved:\n1. Submit a written grievance to the Operations Manager (or to the Vicar if the grievance is against the Operations Manager)\n2. A grievance meeting is arranged within 5 working days\n3. A written decision is issued within 10 working days\n4. The employee has the right to appeal the decision"},
      {heading:"5. Right to be Accompanied", body:"At any formal disciplinary or grievance hearing, the employee has the right to be accompanied by a colleague or a trade union representative."},
    ]
  },
  {
    id:"p25", number:"25", title:"Anti-Bullying & Harassment Policy",
    tagline:"Fostering a community where everyone is treated with dignity and respect",
    category:"HR & Employment", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Our Commitment", body:"St Francis Mackworth is committed to providing an environment — for staff, volunteers, and church members — that is free from bullying, harassment, and victimisation. Such behaviour is contrary to our Christian values and, in the case of employees, may be unlawful under the Equality Act 2010."},
      {heading:"2. Definitions", body:"Bullying is offensive, intimidating, malicious, or insulting behaviour involving the misuse of power that can make a person feel vulnerable, upset, humiliated, undermined, or threatened.\n\nHarassment is any unwanted conduct related to a protected characteristic that has the purpose or effect of violating someone's dignity or creating an intimidating, hostile, degrading, or offensive environment.\n\nVictimisation is treating someone less favourably because they have raised a concern or supported someone who has."},
      {heading:"3. Examples of Unacceptable Behaviour", body:"• Shouting, swearing, or aggressive behaviour\n• Persistent unwarranted criticism or personal attacks\n• Deliberately excluding, ignoring, or isolating someone\n• Making derogatory comments about a person's identity, beliefs, or background\n• Spreading false rumours or gossip\n• Unwanted physical contact\n• Cyber-bullying via social media, email, or messaging"},
      {heading:"4. Reporting", body:"Anyone who experiences or witnesses bullying or harassment should report it to the Operations Manager or, if the Operations Manager is involved, to the Vicar. Reports will be handled confidentially and investigated promptly. Retaliation against anyone who raises a concern will be treated as a serious disciplinary matter."},
    ]
  },
  {
    id:"p26", number:"26", title:"Environmental Sustainability Policy",
    tagline:"Caring for creation as an act of worship and a witness to the gospel",
    category:"Operations", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Statement of Commitment", body:"St Francis Mackworth recognises that caring for creation is an integral part of Christian discipleship. We are committed to the Church of England's target of achieving Net Zero carbon by 2030 and to taking practical action to reduce our environmental impact. The PCC has adopted this policy as part of its stewardship responsibilities."},
      {heading:"2. Energy and Carbon", body:"• We will monitor our energy usage (gas, electricity) and work to reduce consumption year-on-year\n• We will explore opportunities for renewable energy (e.g. solar panels) in consultation with the Diocese and faculty process\n• We will switch to a renewable energy tariff where financially viable\n• We will report our carbon footprint to the Diocese annually using the CofE Energy Footprint Tool"},
      {heading:"3. Waste and Recycling", body:"• We will minimise single-use plastics in all church activities\n• We will provide clearly labelled recycling facilities on all church premises\n• We will audit our waste streams annually and set targets for reduction\n• We will source catering supplies sustainably where possible"},
      {heading:"4. Travel and Transport", body:"• We will encourage walking, cycling, or public transport to church events\n• We will provide bicycle storage at church premises\n• We will offset unavoidable travel for church residentials and away days"},
      {heading:"5. Eco Church Award", body:"St Francis Mackworth is working towards achieving the A Rocha Eco Church Award. The Operations Manager (or a designated Eco Champion) will lead this work and report progress to the PCC annually."},
    ]
  },
  {
    id:"p27", number:"27", title:"Gift Aid & Donor Management Policy",
    tagline:"Maximising giving to God's work through compliant, transparent stewardship",
    category:"Finance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Gift Aid Registration", body:"St Francis Mackworth is registered with HMRC as a charity entitled to claim Gift Aid. The church's Charities Commission number and HMRC reference must be held securely by the Operations Manager and referenced in all Gift Aid submissions."},
      {heading:"2. Gift Aid Declarations", body:"• A valid Gift Aid declaration must be in place before any claim is made on a donation\n• Declarations may be made in writing, online, or verbally (with a written record)\n• Declarations must specify the donor's full name and home address\n• Declarations cover all past, present, and future donations unless limited by the donor\n• Declarations must be updated if the donor's taxpayer status changes\n• All declarations are stored securely in ChurchSuite for a minimum of six years after the last claim"},
      {heading:"3. Claiming Gift Aid", body:"• Gift Aid claims are submitted to HMRC at least quarterly\n• The Operations Manager is responsible for preparing and submitting all claims\n• Claims are verified against the giving records in ChurchSuite before submission\n• Only donations from UK taxpayers who have given a valid declaration may be included"},
      {heading:"4. Small Donations Scheme (GASDS)", body:"Under the Gift Aid Small Donations Scheme, the church can claim top-up payments on small cash and contactless donations up to £30 without a Gift Aid declaration. The Operations Manager will maximise GASDS claims within HMRC rules."},
      {heading:"5. Donor Confidentiality", body:"Individual giving records are confidential. Only the Operations Manager and the independently-appointed examiner may access individual giving data. Aggregate giving summaries (without individual names) may be shared with the PCC."},
    ]
  },
  {
    id:"p28", number:"28", title:"Mental Health & Wellbeing Policy",
    tagline:"Supporting the mental health of staff and volunteers as whole people",
    category:"HR & Employment", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Vicar", status:"active",
    sections:[
      {heading:"1. Statement of Commitment", body:"St Francis Mackworth is committed to the mental health and wellbeing of all its staff and volunteers. We recognise that ministry and church work can be demanding and that people in our team may experience mental health difficulties. We will work to create an environment where people feel able to talk openly and where appropriate support is available."},
      {heading:"2. Our Responsibilities", body:"• The Vicar and Operations Manager will be aware of signs of stress, burnout, or mental health difficulties in staff\n• We will conduct regular one-to-one conversations with staff that include wellbeing as an agenda item\n• We will take reasonable steps to adjust workloads and responsibilities where a person is struggling\n• Staff will be signposted to the Employee Assistance Programme (EAP) if one is in place, or to appropriate NHS or third-sector support"},
      {heading:"3. Boundaries for Volunteers", body:"• Volunteers are encouraged to take regular breaks from ministry and to speak to their team leader if they are struggling\n• Pastoral carers and those in frontline ministry are particularly encouraged to seek supervision and peer support\n• No volunteer will be pressured to continue in a role when they have indicated they need a break"},
      {heading:"4. Mental Health First Aid", body:"St Francis Mackworth will seek to ensure at least one qualified Mental Health First Aider is available to staff and volunteers. The Operations Manager is responsible for identifying and funding this training."},
      {heading:"5. Confidentiality", body:"Conversations about mental health are treated with the highest degree of confidentiality. Information is only shared on a need-to-know basis, except where there is a safeguarding concern."},
    ]
  },
  {
    id:"p29", number:"29", title:"Media & Press Communications Policy",
    tagline:"Representing St Francis Mackworth faithfully and wisely in the public square",
    category:"Communications", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Authorised Spokespersons", body:"Only the following people may speak to the media or press on behalf of St Francis Mackworth:\n• The Vicar — for all theological, pastoral, and church vision matters\n• The Operations Manager — for operational matters (facilities, events, community activities)\n• A PCC member nominated by the Vicar or Churchwardens — in the absence of both of the above\n\nAll other staff and volunteers must refer media enquiries to the Vicar or Operations Manager immediately."},
      {heading:"2. Handling Media Enquiries", body:"• All media enquiries are logged and passed to the Vicar within 24 hours\n• Deadlines are communicated to the Vicar upon receipt\n• No comment will be given 'off the record' — all statements are on the record unless specifically agreed otherwise\n• Statements on sensitive matters (safeguarding, allegations, major incidents) are cleared with the Diocesan Communications team before release"},
      {heading:"3. Crisis Communications", body:"In the event of a major incident, safeguarding matter, or reputational issue:\n1. The Vicar and Operations Manager convene immediately to agree a statement\n2. The Diocese is informed before any public statement is made\n3. A single spokesperson is designated for all media contact\n4. No volunteer or junior staff member speaks to the press under any circumstances"},
      {heading:"4. Social Media and Press Releases", body:"All press releases and formal media statements are approved by the Vicar before release. Social media posts that address sensitive or controversial matters are approved by both the Vicar and Operations Manager."},
    ]
  },
  {
    id:"p30", number:"30", title:"Risk Management Policy",
    tagline:"Identifying, assessing, and managing risk to protect the mission and people of STF",
    category:"Governance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose", body:"The Charity Commission requires all charities to have a risk management policy. This policy sets out how St Francis Mackworth identifies, assesses, monitors, and manages risks that could affect its mission, people, finances, and reputation."},
      {heading:"2. Risk Register", body:"The Operations Manager maintains a Risk Register, reviewed at least annually by the PCC. The register records:\n• A description of each risk\n• The likelihood of the risk occurring (1–5 scale)\n• The potential impact if it occurs (1–5 scale)\n• The overall risk score (likelihood × impact)\n• The existing controls in place\n• Any further actions required\n• The person responsible for managing the risk"},
      {heading:"3. Risk Categories", body:"Key risk categories for St Francis Mackworth:\n• Safeguarding and people — harm to children or vulnerable adults\n• Financial — loss of income, fraud, poor financial management\n• Reputational — media coverage, complaints, leadership conduct\n• Compliance — failure to meet legal or Charity Commission obligations\n• Operational — building failure, loss of key personnel, IT failure\n• Mission — declining congregation, loss of missional focus\n• Environmental — building damage, fire, flood"},
      {heading:"4. PCC Responsibility", body:"The PCC must confirm in the annual Trustees' Report that a risk review has been conducted and that major risks have been reviewed and systems established to manage them. This is a Charity Commission requirement and must not be omitted from the annual report."},
    ]
  },
  {
    id:"p31", number:"31", title:"Trustee Expenses Policy",
    tagline:"Reimbursing PCC members fairly for expenses incurred in their trustee duties",
    category:"Finance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Purpose and Legal Context", body:"PCC members serve as charity trustees. Trustees may not be remunerated for their trustee role without specific Charity Commission authorisation. However, trustees are entitled to be reimbursed for reasonable out-of-pocket expenses incurred in carrying out their trustee duties. This policy sets out what may be claimed and how."},
      {heading:"2. What Can Be Claimed", body:"• Travel to PCC meetings, committee meetings, Deanery Synod, and Diocesan events\n• Travel and accommodation for training or conferences in the trustee role\n• Postage, printing, or other incidental costs incurred in carrying out trustee duties\n• Mileage at the current HMRC approved rate (45p/mile for the first 10,000 miles)"},
      {heading:"3. What Cannot Be Claimed", body:"• Costs that are not directly related to the trustee role\n• Hospitality or entertainment\n• Personal clothing or equipment\n• Expenses incurred more than 3 months prior to the claim"},
      {heading:"4. Approval and Payment", body:"• Claims are submitted using the standard Expense Claim Form to the Operations Manager\n• Claims must be accompanied by receipts (except for mileage)\n• Claims over £100 must be approved by the Vicar before submission\n• Payment is made by bank transfer within 14 days\n• All trustee expense claims are recorded and reported to the full PCC annually"},
    ]
  },
  {
    id:"p32", number:"32", title:"Reserves Policy",
    tagline:"Holding reserves wisely to protect mission continuity and financial resilience",
    category:"Finance", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Charity Commission Requirement", body:"The Charity Commission requires all charities to have a stated reserves policy and to report on their reserves position in the Annual Report. This policy sets out the rationale for the level of reserves St Francis Mackworth aims to hold."},
      {heading:"2. Definition of Reserves", body:"Reserves are the funds held by the church that are freely available to spend — this excludes designated funds (earmarked for specific purposes), restricted funds (given for a specific purpose), and endowment funds. The reserves figure referred to in this policy is the unrestricted, undesignated general fund balance."},
      {heading:"3. Target Level of Reserves", body:"The PCC has determined that it is prudent to hold a minimum of three months' operating expenditure as free reserves at all times. This level is set to:\n• Provide resilience against an unexpected shortfall in income\n• Enable the church to continue operating while responding to a significant unexpected cost\n• Protect the employment of staff if income unexpectedly falls\n\nThe current three-month operating expenditure target is reviewed and restated at each annual budget-setting meeting."},
      {heading:"4. Reporting", body:"The Finance Committee will report the actual reserves position against the target at each quarterly meeting. The reserves position will be disclosed in the Annual Report with an explanation of any material variance from the target. If reserves fall below the minimum target, the Finance Committee will present a recovery plan to the PCC within 30 days."},
    ]
  },
  {
    id:"p33", number:"33", title:"Worship & Theological Boundaries Policy",
    tagline:"Maintaining theological integrity while fostering creative, Spirit-led worship",
    category:"Pastoral", pccRequired:true, version:"1.0", reviewDate:"April 2027",
    owner:"Vicar", status:"active",
    sections:[
      {heading:"1. Purpose", body:"St Francis Mackworth is a Church of England parish in the HTB network. This policy sets out the theological boundaries within which worship, preaching, and ministry take place, and how creative freedom is balanced with accountability and doctrinal integrity."},
      {heading:"2. Doctrinal Foundation", body:"All worship and ministry at St Francis Mackworth is grounded in:\n• The 39 Articles of Religion\n• The Book of Common Prayer\n• The Ordinal\n• The Church of England's Canon Law\n• The Five Marks of Mission\n\nWithin this framework, we embrace the breadth of the Anglican tradition and the renewal emphases of the HTB network."},
      {heading:"3. Preaching and Teaching", body:"• All preaching and teaching must be consistent with the doctrinal standards above\n• Sermon series and major teaching programmes are agreed with the Vicar\n• Guest preachers are approved by the Vicar in advance — see Visiting Speakers Policy\n• Prophecy, words of knowledge, and other charismatic gifts are exercised under the oversight of the Vicar or a designated leader"},
      {heading:"4. Worship Music and Liturgy", body:"• Song choices must be theologically sound and consistent with CofE doctrine\n• The Worship Leader works under the oversight of the Vicar\n• All new liturgical practices are discussed with the Vicar and, where required, the Diocese before introduction\n• The use of Common Worship liturgy is maintained in all sacramental services"},
      {heading:"5. New Practices", body:"Any new worship practice, ministry model, or theological emphasis not previously used at St Francis Mackworth must be discussed with the Vicar before introduction. The Vicar may consult with the Diocese or with HTB leadership as appropriate."},
    ]
  },
  {
    id:"p34", number:"34", title:"Visiting Speakers Policy",
    tagline:"Welcoming guests who build up the body while protecting theological integrity",
    category:"Pastoral", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Vicar", status:"active",
    sections:[
      {heading:"1. Approval", body:"All visiting preachers, speakers, and ministry team guests must be approved by the Vicar before any invitation is confirmed. This includes speakers for Sunday services, midweek teaching, youth and children's events, Alpha, and other church programmes."},
      {heading:"2. Vetting Requirements", body:"Before a visiting speaker is confirmed, the Vicar (or a person delegated by the Vicar) must:\n• Be satisfied as to the speaker's doctrinal soundness and alignment with CofE/HTB theological norms\n• Check that the speaker has no known safeguarding concerns or CDM history\n• Where the speaker will work with children or young people, verify their DBS status\n• Ensure the speaker is aware of and agrees to abide by the church's safeguarding policies"},
      {heading:"3. Safeguarding for Visiting Speakers Working with Children", body:"Any visiting speaker or ministry team member who will work directly with under-18s must:\n• Hold a current Enhanced DBS check (or equivalent, if from another jurisdiction)\n• Be accompanied at all times by a regular church volunteer with a current DBS check\n• Not be left alone with children — the Two-Adult Rule applies to visiting workers"},
      {heading:"4. Financial Arrangements", body:"Agreed speaker fees, travel, and accommodation expenses are agreed in writing by the Operations Manager before the visit. All payments are processed through normal church accounts — no cash payments are made."},
    ]
  },
  {
    id:"p35", number:"35", title:"Events & Crowd Safety Policy",
    tagline:"Running excellent, safe events for congregation and community",
    category:"Health & Safety", pccRequired:false, version:"1.0", reviewDate:"April 2027",
    owner:"Operations Manager", status:"active",
    sections:[
      {heading:"1. Scope", body:"This policy applies to all church-organised events beyond the regular Sunday service — including community events, concerts, fairs, Alpha dinners, holiday clubs, and any event where attendance is expected to exceed 100 people or where members of the public are invited."},
      {heading:"2. Event Risk Assessment", body:"A written risk assessment must be completed for every qualifying event and approved by the Operations Manager at least 7 days before the event. The risk assessment must cover:\n• Maximum expected attendance and venue capacity\n• Entry and exit management\n• First aid provision\n• Fire safety and evacuation\n• Electrical and technical safety\n• Catering and allergen risks (see Allergen & Food Safety Policy)\n• Safeguarding arrangements for children"},
      {heading:"3. Venue Capacity", body:"The maximum capacity of church premises for events is set by the Fire Risk Assessment and must not be exceeded. The event lead is responsible for monitoring attendance and managing entry if capacity is approached."},
      {heading:"4. First Aid", body:"• Events up to 100 people: one qualified first-aider must be present\n• Events of 100–500 people: two first-aiders and a stocked first aid station\n• Events over 500 people: consult the Events Safety Guide and consider engaging a professional first aid provider"},
      {heading:"5. Event Debrief", body:"A brief written debrief is completed for every major event, recording: attendance; any incidents; lessons learned; and any changes required for the next event. Debrief notes are filed by the Operations Manager."},
    ]
  },
];
