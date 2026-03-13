export interface CaseStudy {
  id: string;
  industry: string;
  businessType: string;
  headline: string;
  challenge: string;
  strategy: string;
  results: {
    metric: string;
    value: string;
    context: string;
  }[];
  timeline: string;
  adSpend: string;
  quote?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "dental-implants",
    industry: "Medical",
    businessType: "Dental Implant Center",
    headline: "From $0 in Digital Ads to 47 Implant Consultations in 30 Days",
    challenge:
      "A dental implant center in Phoenix had relied entirely on word-of-mouth referrals for 8 years. Their competitors were running Meta and Google campaigns and stealing market share. They had zero ad accounts, no pixel data, and no creative assets.",
    strategy:
      "We built their Meta and Google ad accounts from scratch, created custom audiences based on age demographics and income brackets in their service area, designed 12 ad creatives featuring before-and-after results, and launched a lead generation campaign targeting people actively searching for dental implant alternatives.",
    results: [
      { metric: "Consultations Booked", value: "47", context: "in the first 30 days" },
      { metric: "Cost Per Lead", value: "$34", context: "down from industry avg of $85+" },
      { metric: "Revenue Generated", value: "$127,000", context: "from implant procedures booked" },
      { metric: "Return on Ad Spend", value: "14.1x", context: "on $9,000 monthly ad budget" },
    ],
    timeline: "30 days",
    adSpend: "$9,000/month",
    quote: "We went from hoping the phone would ring to turning patients away because we were booked solid.",
  },
  {
    id: "roofing-leads",
    industry: "Home Services",
    businessType: "Roofing Contractor",
    headline: "211 Qualified Roofing Leads in 90 Days at $22 Per Lead",
    challenge:
      "A roofing company in Dallas was paying $150+ per lead through Angi and HomeAdvisor. The leads were shared with 3-4 other contractors, conversion rates were terrible, and they were bleeding money. They needed exclusive leads at a price that actually made sense for their margins.",
    strategy:
      "We launched hyper-local Google Ads targeting storm damage and roof replacement keywords within a 25-mile radius. Built custom landing pages for each service type. Ran Meta retargeting campaigns to website visitors who didn't convert on the first visit. Set up call tracking to measure every lead source.",
    results: [
      { metric: "Total Leads", value: "211", context: "exclusive, not shared with competitors" },
      { metric: "Cost Per Lead", value: "$22", context: "down from $150+ on lead gen platforms" },
      { metric: "Closed Jobs", value: "38", context: "at an average ticket of $12,400" },
      { metric: "Revenue Generated", value: "$471,200", context: "in 90 days of campaigns" },
    ],
    timeline: "90 days",
    adSpend: "$4,700/month",
    quote: "I cancelled Angi the same week. These leads actually answer the phone.",
  },
  {
    id: "medspa-botox",
    industry: "Medical",
    businessType: "Med Spa / Aesthetics",
    headline: "Botox Appointments Booked at $19 Per Lead for a Med Spa Chain",
    challenge:
      "A 3-location med spa in Southern California was running their own Facebook ads with boosted posts. They were spending $3,000/month and getting maybe 10-15 leads, most of which were price shoppers who never booked. Their cost per acquisition was over $200 for a $400 service.",
    strategy:
      "We replaced their boosted posts with a structured Meta campaign using custom audiences, lookalike audiences based on their existing patient list, and a 3-step retargeting funnel. Created video ads featuring real patient testimonials and results. Built dedicated booking landing pages for each location.",
    results: [
      { metric: "Leads Per Month", value: "89", context: "up from 10-15 with boosted posts" },
      { metric: "Cost Per Lead", value: "$19", context: "down from $200+ cost per acquisition" },
      { metric: "Booking Rate", value: "41%", context: "of leads booked an appointment" },
      { metric: "Monthly Revenue Increase", value: "$28,000", context: "across all 3 locations" },
    ],
    timeline: "60 days",
    adSpend: "$5,100/month across 3 locations",
    quote: "Our front desk went from idle to overwhelmed. We had to hire two more people.",
  },
  {
    id: "solar-installs",
    industry: "Home Services",
    businessType: "Solar Installation Company",
    headline: "94 Solar Installation Leads in 60 Days for a Regional Installer",
    challenge:
      "A solar company in Florida was buying leads from third-party aggregators at $80-120 each. Homeowners were getting 4-5 calls from different companies. Close rates were under 5%. They needed a way to generate their own exclusive leads and build a brand in their market.",
    strategy:
      "We built a Google Ads campaign targeting high-intent keywords like 'solar panel installation near me' and 'solar panel cost Florida'. Created Meta campaigns targeting homeowners in specific zip codes with household income over $75K. Developed a solar savings calculator landing page that captured leads in exchange for a custom savings estimate.",
    results: [
      { metric: "Total Leads", value: "94", context: "100% exclusive to this company" },
      { metric: "Cost Per Lead", value: "$41", context: "vs $80-120 from aggregators" },
      { metric: "Close Rate", value: "12%", context: "up from under 5% with shared leads" },
      { metric: "Installations Booked", value: "11", context: "at avg $22,000 per install" },
    ],
    timeline: "60 days",
    adSpend: "$3,850/month",
    quote: "For the first time, the homeowner wasn't comparing us to four other companies on the same call.",
  },
  {
    id: "plumbing-emergency",
    industry: "Home Services",
    businessType: "Plumbing Company",
    headline: "Emergency Plumbing Calls at $17 Per Lead Using Google Ads",
    challenge:
      "A plumbing company in Atlanta was relying on yard signs and truck wraps. They had no online presence and their competitors were dominating the top Google results. When someone searched 'emergency plumber near me', they were invisible.",
    strategy:
      "We launched Google Ads campaigns targeting emergency and high-intent plumbing keywords. Set up call-only ads for mobile users. Built a fast-loading landing page with click-to-call functionality. Implemented call tracking with recorded calls so the owner could monitor lead quality.",
    results: [
      { metric: "Calls Per Month", value: "143", context: "from zero organic/paid calls" },
      { metric: "Cost Per Call", value: "$17", context: "for emergency plumbing leads" },
      { metric: "Average Job Value", value: "$890", context: "emergency calls converted highest" },
      { metric: "Monthly Revenue", value: "$68,000", context: "directly from ad-generated calls" },
    ],
    timeline: "30 days",
    adSpend: "$2,400/month",
  },
  {
    id: "chiropractor-new-patients",
    industry: "Medical",
    businessType: "Chiropractic Practice",
    headline: "32 New Patient Appointments Per Month for a Solo Chiropractor",
    challenge:
      "A solo chiropractor in Denver was maxing out at 8-10 new patients per month, all from referrals. He had capacity for 30+ but no way to fill the schedule. Previous agency spent $2,000/month on Google Ads with nothing to show for it.",
    strategy:
      "We audited the previous agency's campaigns and found they were targeting broad keywords with no negative keyword strategy, sending traffic to the homepage instead of a dedicated landing page, and had no conversion tracking set up. We rebuilt everything: tight keyword groups, dedicated landing pages for each service (back pain, neck pain, sports injury), proper conversion tracking, and a Meta campaign targeting local gym members and fitness enthusiasts.",
    results: [
      { metric: "New Patients/Month", value: "32", context: "up from 8-10 via referrals only" },
      { metric: "Cost Per New Patient", value: "$28", context: "lifetime value of $1,800+" },
      { metric: "Google Ads CTR", value: "8.7%", context: "vs 2.1% under previous agency" },
      { metric: "Revenue Increase", value: "$43,000/mo", context: "net increase in monthly revenue" },
    ],
    timeline: "45 days",
    adSpend: "$1,800/month",
    quote: "My last agency showed me impressions and clicks. These guys showed me patients in chairs.",
  },
  {
    id: "naturopath-patients",
    industry: "Medical",
    businessType: "Naturopathic Practice",
    headline: "From 6 New Patients a Month to 28 for a Naturopathic Clinic",
    challenge:
      "A naturopathic practice in Portland was relying on word-of-mouth and a basic website. They specialized in hormone optimization and gut health but had no way to reach people actively searching for these services. Their only 'marketing' was an Instagram account with 400 followers.",
    strategy:
      "We launched Google Ads campaigns targeting high-intent keywords like 'naturopath near me', 'hormone balance doctor', and 'functional medicine practitioner'. Built dedicated landing pages for each specialty (hormones, gut health, thyroid). Ran Meta campaigns targeting women 35-55 in their service area interested in holistic health, wellness, and hormone topics. Set up a lead nurture sequence for consultation requests.",
    results: [
      { metric: "New Patients/Month", value: "28", context: "up from 6 via referrals only" },
      { metric: "Cost Per Patient", value: "$42", context: "avg patient lifetime value of $3,200+" },
      { metric: "Google Ads Conversions", value: "76%", context: "of leads came from Google Search" },
      { metric: "Monthly Revenue Increase", value: "$31,000", context: "within first 60 days" },
    ],
    timeline: "60 days",
    adSpend: "$2,200/month",
    quote: "I went from wondering if I'd need to close to hiring a second practitioner.",
  },
  {
    id: "trt-clinic",
    industry: "Medical",
    businessType: "TRT / HRT Clinic",
    headline: "41 Consultation Bookings in 30 Days for a TRT Clinic",
    challenge:
      "A testosterone replacement therapy clinic in Houston was struggling with ad platform restrictions. Their previous agency got their Facebook ad account shut down twice for policy violations. They were stuck buying leads from aggregators at $90+ each, shared with 3-4 other clinics. They needed someone who understood the compliance side of advertising hormone therapy.",
    strategy:
      "We built compliant ad campaigns that passed Meta and Google review by focusing on symptom-based messaging rather than treatment-specific claims. Targeted men 35-60 searching for symptoms like 'low energy', 'fatigue after 40', and 'low testosterone symptoms'. Created a symptom assessment landing page that pre-qualified leads before they booked a consultation. Ran retargeting campaigns to assessment completers who didn't book.",
    results: [
      { metric: "Consultations Booked", value: "41", context: "in the first 30 days" },
      { metric: "Cost Per Consultation", value: "$52", context: "down from $90+ via aggregators" },
      { metric: "Assessment Completions", value: "118", context: "34.7% converted to bookings" },
      { metric: "Revenue Generated", value: "$82,000", context: "avg patient value of $2,000/yr" },
    ],
    timeline: "30 days",
    adSpend: "$3,600/month",
    quote: "Every other agency got our account banned. These guys got us 41 consultations in a month without a single policy strike.",
  },
];

export const industryCategories = [
  { name: "All", count: caseStudies.length },
  { name: "Medical", count: caseStudies.filter((c) => c.industry === "Medical").length },
  { name: "Home Services", count: caseStudies.filter((c) => c.industry === "Home Services").length },
  { name: "B2B", count: caseStudies.filter((c) => c.industry === "B2B").length },
];
