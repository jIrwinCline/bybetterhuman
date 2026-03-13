export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  source?: string;
}

export const heroStats: Stat[] = [
  { value: 3000, suffix: "+", label: "Client Campaigns Managed" },
  { value: 20, suffix: "M+", prefix: "$", label: "In Managed Ad Spend" },
  { value: 100, suffix: "+", label: "Industries Served" },
  { value: 820, suffix: "+", label: "Active Ad Campaigns" },
];

export const problemStats: Stat[] = [
  { value: 72, suffix: "%", label: "of small businesses say marketing is their biggest challenge", source: "Constant Contact, 2024" },
  { value: 45, suffix: "%", label: "of ad agency clients leave within the first 6 months", source: "HubSpot Agency Report" },
  { value: 68, suffix: "%", label: "of small business ad spend is wasted on poorly targeted campaigns", source: "WordStream" },
  { value: 3, suffix: "x", label: "more expensive to acquire a customer through cold outreach vs. paid ads", source: "Salesforce" },
];

export const processSteps = [
  {
    number: 1,
    title: "Lock In Your Spot",
    subtitle: "Get Started",
    description:
      "Sign up and get instant access to 14 playbooks, guide videos, and done-for-you templates. We only take on a limited number of new clients each month to ensure every campaign gets the attention it deserves.",
    days: "Day 0",
    details: [
      "Instant access to 14 playbooks and guide videos (70+ chapters)",
      "Limited spots - we cap new clients each month",
      "Dedicated account manager assigned immediately",
      "Changed your mind? We'll cancel - you keep the digital product suite",
    ],
  },
  {
    number: 2,
    title: "Onboarding & Strategy",
    subtitle: "Days 1-3",
    description:
      "We get access to your ad accounts, learn your business inside and out - your customers, your goals, your competitive landscape. Our strategists craft an offer and campaign blueprint custom to your business.",
    days: "Days 1-3",
    details: [
      "Deep dive into your business, market, and competitors",
      "Ad account audit (or new account creation)",
      "Custom campaign blueprint and offer strategy",
      "Target audience research and segmentation",
      "Landing page recommendations",
    ],
  },
  {
    number: 3,
    title: "Campaign Build & Launch",
    subtitle: "Days 3-7",
    description:
      "Our copywriters write your ad copy. Our designers build your creatives. Our media buyers structure your campaigns. Everything is presented to you for approval before going live.",
    days: "Days 3-7",
    details: [
      "Professional ad copy written by our copywriters",
      "Custom creative assets designed for your brand",
      "Campaign structure built by certified media buyers",
      "Full review and approval before anything goes live",
      "Conversion tracking and analytics configured",
    ],
  },
  {
    number: 4,
    title: "Optimization & Scaling",
    subtitle: "Ongoing",
    description:
      "Once live, we monitor performance daily. We test new creatives, adjust targeting, kill what's not working, and scale what is. You get weekly reports with real numbers - not vanity metrics.",
    days: "Ongoing",
    details: [
      "Daily campaign monitoring and adjustments",
      "A/B testing of creatives, copy, and audiences",
      "Weekly performance reports with actionable insights",
      "Monthly strategy calls to review results and plan ahead",
      "Continuous scaling of winning campaigns",
    ],
  },
];

export const faqItems = [
  {
    question: "What's the total cost?",
    answer:
      "It's $600/month, and that includes everything - 14 complete playbooks (70+ chapters), step-by-step guide videos, done-for-you templates, swipe files, plus full done-for-you campaign management with a dedicated team, custom strategy, creative assets, ongoing optimization, and weekly reporting. There's a 3-month minimum commitment, then you can cancel anytime. Ad spend is separate and paid directly to Google/Meta/TikTok - we recommend a minimum of $1,500/month depending on your market.",
  },
  {
    question: "Why a 3-month commitment?",
    answer:
      "Month-to-month agency models fail for a reason. It takes 2-4 weeks to build campaigns, gather data, and start optimizing. By month 2, you're seeing what works. By month 3, we're scaling the winners. Agencies that let you quit after 30 days are the same ones showing you vanity metrics because they know you'll leave before seeing real results.",
  },
  {
    question: "What if I already have ad accounts running?",
    answer:
      "Even better. We'll audit your existing campaigns, identify what's working and what's wasting money, and rebuild your strategy from there. Most clients we onboard with existing accounts see a 40-60% reduction in cost per lead within the first 30 days just from fixing targeting and creative issues.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in service-based businesses with high customer lifetime values: medical practices (dental, chiropractic, aesthetics, med spas), home services (roofing, solar, HVAC, plumbing, remodeling), and B2B services. We've run campaigns across 100+ industries, but these three verticals are where we consistently deliver the highest ROI.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Your campaigns are managed by a 100% U.S.-based team. No freelancers. No offshore contractors. No outsourcing. You get a dedicated media buyer, copywriter, and strategist assigned to your account. These are the same people who have managed over $20M in ad spend across 3,000+ campaigns.",
  },
  {
    question: "How do I know it's working?",
    answer:
      "Every campaign we run has full conversion tracking, call tracking, and analytics configured from day one. You'll get a weekly report showing exactly how many leads came in, what they cost, and where they came from. No vanity metrics. No 'brand awareness' hand-waving. Just leads, costs, and results.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "In 3,000+ campaigns, we've built a deep understanding of what works across different industries and markets. But advertising is never guaranteed - anyone who tells you otherwise is lying. What we can guarantee is that you'll work with experienced professionals who will do everything strategically possible to generate results. And you'll see exactly what's happening with your money every step of the way.",
  },
  {
    question: "Can I see my ads before they go live?",
    answer:
      "Absolutely. Nothing goes live without your approval. We present all creative assets, ad copy, and targeting strategy for your review before we spend a single dollar. This is your business - you should know exactly what's running and why.",
  },
];

export const leadGenFaqItems = [
  {
    question: "How do I know if my practice qualifies?",
    answer:
      "We work best with service-based businesses that have high customer lifetime values and clear local markets. If you're a chiropractor, naturopath, TRT clinic, dentist, med spa, roofer, solar installer, plumber, or B2B service provider, you're likely a strong fit. If you're situation is a bit different, leave as much detail as you can and our team will confirm it's a fit. In the extremely rare case it's not you're entitled to your money back, obviously.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "Our strongest results come from medical practices (chiropractors, naturopaths, TRT/HRT clinics, dental, med spas), home services (roofing, solar, HVAC, plumbing, remodeling), and B2B services. We've run campaigns across 100+ industries, but these verticals are where we consistently deliver the highest ROI because of the high customer lifetime value.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "After your purchase someone from our team is immediately assigned and will be your main point of contact, we schedule a strategy call to learn your business inside and out. Days 1-3: we audit your existing accounts (or set up new ones), research your market and competitors, and build a custom campaign blueprint. Days 3-7: our team writes your ad copy, designs your creatives, and structures your campaigns. Everything gets presented for your approval before we spend a dollar. Your ads are typically live within 7 days.",
  },
  {
    question: "What if I already have ad accounts running?",
    answer:
      "Even better. We'll audit your existing campaigns, identify what's working and what's wasting money, and rebuild your strategy from there. Most clients we onboard with existing accounts see a 40-60% reduction in cost per lead within the first 30 days just from fixing targeting and creative issues.",
  },
  {
    question: "Who actually does the work?",
    answer:
      "Your campaigns are managed by a 100% U.S.-based team. No freelancers. No offshore call centers. You get a dedicated media buyer, copywriter, and strategist assigned to your account. These are the same people who have managed over $20M in ad spend across 3,000+ campaigns.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see their first leads within the first 7 days of campaigns going live. But real optimization takes time. We gather data in weeks 1-2, optimize in weeks 2-4, and scale what's working in month 2 and beyond. The practices that see the biggest returns are the ones that give us the runway to test, learn, and scale.",
  },
  {
    question: "How do I know it's working?",
    answer:
      "Every campaign we run has full conversion tracking, call tracking, and analytics configured from day one. You'll get a weekly report showing exactly how many leads came in, what they cost, and where they came from. No vanity metrics. No 'brand awareness' hand-waving. Just leads, costs, and results.",
  },
  {
    question: "Do you work with practices in my area?",
    answer:
      "We work with practices across North America. Our campaigns are hyper-local by design. We target your specific service area, adjust for your local competition, and build campaigns that bring in patients and clients from your market. We limit the number of clients we take per market to avoid internal competition.",
  },
  {
    question: "What if I want to cancel the ad campaign before it starts?",
    answer:
      "We will refund the full campaign up 'til when the onboarding process starts. If you decide you have enough materials to do your marketing in-house with our digital product suite, we can cancel your campaign and refund you for that portion. The access to our digital product suite is already paid for and yours to keep regardless of your decision to move forward with the campaign or not!",
  },
  {
    question: "Why don't you do a sales pitch?",
    answer:
      "Most companies will do a high-pressure sales call to convince you to buy. Our approach is different. We give you the information up front to make the decision on your own. We want to work with clients who are excited about the value we provide, not ones we have to convince. This grants us less overhead, and keeps our prices affordable, even with a premium done-for-you service.",
  },
];

export const leadGenProcessSteps = [
  {
    number: 1,
    title: "Apply",
    subtitle: "2 Minutes",
    description:
      "Fill out a quick application so we know about your business, your market, and your goals. We review every application personally and respond within 1 business day.",
    days: "Today",
    details: [
      "Tell us about your practice and goals",
      "We review and confirm you're a good fit",
      "Schedule your strategy call",
    ],
  },
  {
    number: 2,
    title: "Onboard",
    subtitle: "Days 1-3",
    description:
      "Your dedicated account manager dives into your business. We audit your existing accounts, research your market and competitors, and build a custom campaign strategy tailored to your practice.",
    days: "Days 1-3",
    details: [
      "Deep dive into your business and local market",
      "Ad account audit or new account setup",
      "Custom campaign blueprint and strategy",
    ],
  },
  {
    number: 3,
    title: "Launch",
    subtitle: "Days 3-7",
    description:
      "Our team writes your ad copy, designs your creatives, and builds your campaigns. Everything gets approved by you before going live. Then we monitor, optimize, and report every week.",
    days: "Days 3-7",
    details: [
      "Professional ad copy and creative assets",
      "Campaign build on Google, Meta, or TikTok",
      "Daily monitoring and weekly reporting from day one",
    ],
  },
];
