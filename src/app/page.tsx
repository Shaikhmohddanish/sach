"use client";

import { useState } from "react";
import React from "react";
import Head from "next/head";

const sections = [
  {
    id: "structure",
    title: "Organizational Structure",
    items: [
      {
        label: "Shura (Main Body):",
        description:
          "Core decision-making members responsible for strategies, approving initiatives, and ensuring alignment with values.",
        icon: "🏛️",
        color: "bg-blue-100 text-blue-700",
      },
      {
        label: "Area-wise Subgroups:",
        description:
          "Local groups under Shura guidance, each with two Zimmedaars (responsible persons) for local activities.",
        icon: "🌐",
        color: "bg-green-100 text-green-700",
      },
    ],
  },
  {
    id: "ideology",
    title: "Organizational Nature and Ideology",
    items: [
      {
        label: "Non-Political:",
        description:
          "No political involvement, agenda, or ideology. No participation in political issues or debates.",
        icon: "🚫",
        color: "bg-pink-100 text-pink-700",
      },
      {
        label: "Non-Religious:",
        description:
          "We are not affiliated with any religion or religious ideology. Our work is inclusive and serves all individuals and communities, regardless of faith or belief.",
        icon: "🌍",
        color: "bg-indigo-100 text-indigo-700",
      },
      {
        label: "Social Welfare Focus:",
        description:
          "Exists solely for societal betterment through support, justice, and empowerment. Activities serve people and communities in need.",
        icon: "🤲",
        color: "bg-yellow-100 text-yellow-700",
      },
    ],
  },
  {
    id: "principles",
    title: "Core Principles",
    items: [
      {
        label: "Justice:",
        description:
          "Stand with truth and fairness. Support and protect the weak and vulnerable. Proactively reduce injustice in the community.",
        icon: "⚖️",
        color: "bg-blue-100 text-blue-700",
      },
      {
        label: "Financial Support:",
        description:
          "Provide financial aid for emergencies, education, healthcare, and sustenance to those in need.",
        icon: "💸",
        color: "bg-green-100 text-green-700",
      },
      {
        label: "Anti-Drugs and Safety:",
        description:
          "Create awareness and take action against drug abuse and violence. Promote a safe, peaceful environment.",
        icon: "🚫",
        color: "bg-pink-100 text-pink-700",
      },
      {
        label: "Youth Improvement:",
        description:
          "Build morally upright, educated, and healthy youth. Encourage education, fitness, and character development.",
        icon: "🌱",
        color: "bg-yellow-100 text-yellow-700",
      },
    ],
  },
];

function Section({ id, title, items }: { id: string; title: string; items: { label: string; description: string; icon: string; color: string }[] }) {
  return (
    <section id={id} className="mb-12 scroll-mt-24">
      <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">{title}</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, idx) => (
          <div key={idx} className={`rounded-xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-shadow ${item.color}`}>
            <div className="text-4xl mb-3">{item.icon}</div>
            <h4 className="font-bold text-lg mb-1">{item.label}</h4>
            <p className="text-center text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer, children }: { question: string; answer?: string; children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="w-full text-left py-4 flex items-center justify-between focus:outline-none"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-bold text-blue-700">{question}</span>
        <span className="ml-2 text-xl">{open ? "-" : "+"}</span>
      </button>
      {open && (
        <div className="pb-4 pl-2 text-gray-700 text-sm animate-fade-in">
          {answer && <p className="mb-2">{answer}</p>}
          {children}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>S.A.C.H - Social Alliance for Change & Harmony</title>
        <meta name="description" content="S.A.C.H (Social Alliance for Change & Harmony) is a non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society." />
        <meta name="keywords" content="S.A.C.H, Social Alliance for Change & Harmony, non-political, non-religious, social welfare, justice, empowerment, youth, anti-drugs, financial support, community, NGO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="S.A.C.H - Social Alliance for Change & Harmony" />
        <meta property="og:description" content="A non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sach.org" />
        <meta property="og:image" content="/public/next.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="S.A.C.H - Social Alliance for Change & Harmony" />
        <meta name="twitter:description" content="A non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society." />
        <meta name="twitter:image" content="/public/next.svg" />
        <link rel="canonical" href="https://sach.org" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the main goal of this organization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our organization is dedicated to social welfare — providing support, justice, and empowerment to communities and individuals in need. We have no political affiliations or agendas."
                }
              },
              {
                "@type": "Question",
                "name": "How is the organization structured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are structured into two main components: Shura (Main Body): The core decision-making body that formulates strategies and ensures alignment with our values. Area-wise Subgroups: Local operational teams led by two Zimmedaars (responsible persons) in each area to implement activities on the ground."
                }
              },
              {
                "@type": "Question",
                "name": "What activities does the organization engage in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our activities focus on: Providing financial support for emergencies, education, healthcare, and basic sustenance. Promoting justice and protecting the weak against injustice. Raising awareness against drug abuse and violence. Fostering youth development through education, fitness, and character-building initiatives."
                }
              },
              {
                "@type": "Question",
                "name": "Is the organization involved in politics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. We are strictly a non-political organization. We do not engage in political discussions, movements, or affiliations."
                }
              },
              {
                "@type": "Question",
                "name": "Who makes the major decisions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Major decisions are made by the Shura, a group of core members committed to upholding the organization’s principles and vision."
                }
              },
              {
                "@type": "Question",
                "name": "What is a 'Zimmedaar'?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Zimmedaar is a trusted responsible person appointed to manage the activities of a local subgroup. Each subgroup has two Zimmedaars to ensure effective leadership and accountability."
                }
              },
              {
                "@type": "Question",
                "name": "How does the organization promote justice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We actively stand with the truth, protect the vulnerable, and engage in efforts to reduce injustice in the community through advocacy, support, and proactive initiatives."
                }
              },
              {
                "@type": "Question",
                "name": "What type of financial aid does the organization provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide financial aid in several areas, including: Emergency relief for those in immediate distress. Educational support for students in need. Healthcare assistance for medical treatments. Sustenance support for individuals and families struggling with basic needs."
                }
              },
              {
                "@type": "Question",
                "name": "How does the organization work against drug abuse?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We organize awareness campaigns, educational programs, and community action initiatives aimed at creating a drug-free and safe environment."
                }
              },
              {
                "@type": "Question",
                "name": "What programs are there for youth?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our youth programs focus on: Moral development and character building. Educational enrichment and tutoring. Physical fitness initiatives to promote health and wellness. Leadership training to nurture responsible future citizens."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get involved or support the organization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can support us by volunteering, participating in local activities. For more information, please contact your nearest Area Zimmedaars or reach out via our Contact Us page."
                }
              }
            ]
          })
        }} />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-16 mb-10 flex flex-col items-center shadow-lg px-2 sm:px-0">
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg text-center">S.A.C.H</h1>
          <h2 className="text-2xl font-semibold text-blue-100 mb-4 text-center w-full">Social Alliance for Change & Harmony</h2>
          <p className="max-w-2xl text-lg text-blue-50 text-center mb-6 w-full">
            A non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society.
          </p>
        </section>
        <main className="w-full max-w-5xl flex-1 space-y-12 px-2 sm:px-0">
          {sections.map((section) => (
            <Section key={section.id} {...section} />
          ))}
        </main>
        {/* FAQ Section */}
        <section className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800 text-center">FAQ (Frequently Asked Questions)</h3>
          <div className="divide-y">
            <FAQItem question="1. What is the main goal of this organization?" answer="Our organization is dedicated to social welfare — providing support, justice, and empowerment to communities and individuals in need. We have no political affiliations or agendas." />
            <FAQItem question="2. How is the organization structured?">
              <p>We are structured into two main components:</p>
              <ul className="list-disc pl-6">
                <li><span className="font-semibold">Shura (Main Body):</span> The core decision-making body that formulates strategies and ensures alignment with our values.</li>
                <li><span className="font-semibold">Area-wise Subgroups:</span> Local operational teams led by two Zimmedaars (responsible persons) in each area to implement activities on the ground.</li>
              </ul>
            </FAQItem>
            <FAQItem question="3. What activities does the organization engage in?">
              <ul className="list-disc pl-6">
                <li>Providing financial support for emergencies, education, healthcare, and basic sustenance.</li>
                <li>Promoting justice and protecting the weak against injustice.</li>
                <li>Raising awareness against drug abuse and violence.</li>
                <li>Fostering youth development through education, fitness, and character-building initiatives.</li>
              </ul>
            </FAQItem>
            <FAQItem question="4. Is the organization involved in politics?" answer="No. We are strictly a non-political organization. We do not engage in political discussions, movements, or affiliations." />
            <FAQItem question="5. Who makes the major decisions?" answer="Major decisions are made by the Shura, a group of core members committed to upholding the organization’s principles and vision." />
            <FAQItem question="6. What is a 'Zimmedaar'?" answer="A Zimmedaar is a trusted responsible person appointed to manage the activities of a local subgroup. Each subgroup has two Zimmedaars to ensure effective leadership and accountability." />
            <FAQItem question="7. How does the organization promote justice?" answer="We actively stand with the truth, protect the vulnerable, and engage in efforts to reduce injustice in the community through advocacy, support, and proactive initiatives." />
            <FAQItem question="8. What type of financial aid does the organization provide?">
              <p>We provide financial aid in several areas, including:</p>
              <ul className="list-disc pl-6">
                <li>Emergency relief for those in immediate distress.</li>
                <li>Educational support for students in need.</li>
                <li>Healthcare assistance for medical treatments.</li>
                <li>Sustenance support for individuals and families struggling with basic needs.</li>
              </ul>
            </FAQItem>
            <FAQItem question="9. How does the organization work against drug abuse?" answer="We organize awareness campaigns, educational programs, and community action initiatives aimed at creating a drug-free and safe environment." />
            <FAQItem question="10. What programs are there for youth?">
              <p>Our youth programs focus on:</p>
              <ul className="list-disc pl-6">
                <li>Moral development and character building.</li>
                <li>Educational enrichment and tutoring.</li>
                <li>Physical fitness initiatives to promote health and wellness.</li>
                <li>Leadership training to nurture responsible future citizens.</li>
              </ul>
            </FAQItem>
            <FAQItem question="11. How can I get involved or support the organization?" answer="You can support us by volunteering, participating in local activities. For more information, please contact your nearest Area Zimmedaars or reach out via our Contact Us page." />
          </div>
        </section>
      </div>
    </>
  );
}
