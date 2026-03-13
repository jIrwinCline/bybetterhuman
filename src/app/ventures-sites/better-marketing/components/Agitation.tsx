"use client";

import { motion } from "framer-motion";

const defaultScenarios = [
  {
    situation: "You hired a marketing agency.",
    consequence:
      "They showed you impressions and clicks, but your phone never rang. Six months and $15,000 later, you were told 'brand awareness takes time.' You cancelled and went back to relying on referrals.",
  },
  {
    situation: "You tried running ads yourself.",
    consequence:
      "You spent $3,000 over three months boosting posts and running Google Ads you set up from a YouTube tutorial. You got 4 leads, none of which converted. The platforms kept suggesting you increase your budget.",
  },
  {
    situation: "You hired a freelancer from a marketplace.",
    consequence:
      "They were cheap, responsive for the first two weeks, and then communication dropped off. When you asked about results, you got a spreadsheet full of impressions. Your campaigns ran unchanged for months.",
  },
  {
    situation: "You signed up for a 'done-for-you' program.",
    consequence:
      "The sales call was incredible — projections, case studies, guarantees. Then you onboarded with a junior account manager who had 30 other clients. Your 'custom strategy' was a template they used for everyone.",
  },
];

export const medicalScenarios = [
  {
    situation: "You hired an agency that didn't understand healthcare.",
    consequence:
      "They ran the same generic campaigns they run for everyone else. No understanding of patient psychology, compliance, or ad platform restrictions for medical services. Your Facebook account got flagged. Your Google Ads targeted the wrong keywords. And you paid $2,000/month for it.",
  },
  {
    situation: "You tried boosting posts on social media.",
    consequence:
      "You spent $500/month boosting your practice's posts. You got likes from people 3 states away and comments from friends. Zero new patient bookings. Meanwhile, the clinic down the street was running real campaigns and filling their schedule.",
  },
  {
    situation: "You bought leads from an aggregator.",
    consequence:
      "The leads were shared with 3-4 other practices. By the time you called, they'd already booked somewhere else. You paid $80-120 per lead for people who didn't even remember filling out a form. Half the phone numbers were wrong.",
  },
  {
    situation: "You relied entirely on referrals.",
    consequence:
      "Referrals are great until they're not enough. You have empty chair time, capacity for 30+ patients a month, but you're stuck at 8-10. You know you need marketing, but every option feels like a gamble you can't afford to lose.",
  },
];

interface AgitationProps {
  scenarios?: { situation: string; consequence: string }[];
}

export default function Agitation({ scenarios = defaultScenarios }: AgitationProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-bm-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-label text-bm-cyan-dark tracking-[0.2em] block mb-4">
            Sound Familiar?
          </span>
          <h2 className="text-display text-bm-gray-900 text-3xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto mb-6">
            You Already Know{" "}
            <span className="text-editorial text-bm-cyan-dark">
              You Need to Grow
            </span>
          </h2>
          <p className="text-bm-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            The problem isn&apos;t a lack of ambition. It&apos;s that every path
            to paid growth seems to end in the same frustrating place — burned
            budget, broken promises, and back to square one.
          </p>
        </motion.div>

        {/* Scenario cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-elevated p-5 sm:p-8 lg:p-10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-display text-bm-gray-900 text-xl lg:text-2xl leading-tight">
                  {scenario.situation}
                </h3>
              </div>
              <p className="text-bm-gray-600 leading-relaxed ml-0 sm:ml-12">
                {scenario.consequence}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="accent-line max-w-xs mx-auto mb-8" />
          <p className="text-editorial text-2xl lg:text-3xl text-bm-gray-700 max-w-2xl mx-auto leading-relaxed">
            &ldquo;The definition of insanity is doing the same thing over and
            over and expecting different results.&rdquo;
          </p>
          <p className="text-label text-bm-gray-400 mt-4">
            What if there was a simpler way?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
