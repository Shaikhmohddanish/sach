"use client";

import { useState } from "react";

const values = [
  {
    title: "Justice",
    description: "Standing with truth and fairness. We actively intervene to support the weak and vulnerable, ensuring that every individual receives fair treatment and protection from injustice. Our team regularly monitors community issues and provides legal and moral support where needed.",
    icon: "🕊️",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Compassion",
    description: "Supporting those in need without discrimination. We believe in empathy and kindness, offering help to anyone facing hardship, regardless of background, faith, or status. Our volunteers are trained to listen and respond with care.",
    icon: "🤝",
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Integrity",
    description: "Acting with honesty and transparency. All our operations, from fundraising to aid distribution, are conducted openly. We maintain clear records and encourage community feedback to ensure trust.",
    icon: "🛡️",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Empowerment",
    description: "Enabling individuals and communities to grow and succeed. We run workshops, mentorship programs, and provide resources to help people become self-reliant and confident.",
    icon: "🚀",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Safety",
    description: "Promoting a drug-free, peaceful environment. We organize awareness campaigns, collaborate with local authorities, and provide counseling to prevent drug abuse and violence.",
    icon: "🛑",
    color: "bg-purple-100 text-purple-700",
  },
];

const activities = [
  {
    title: "Financial Aid",
    description: "We provide timely financial assistance for emergencies, education, healthcare, and daily sustenance. Our support reaches individuals, families, and institutions in crisis, ensuring no one is left behind.",
    icon: "💸",
  },
  {
    title: "Justice & Fairness",
    description: "We stand with the oppressed, offering legal aid, advocacy, and a voice to those who cannot speak for themselves. Our team works with local leaders to resolve disputes and promote harmony.",
    icon: "⚖️",
  },
  {
    title: "Anti-Drugs & Safety",
    description: "Through workshops, school programs, and public events, we educate about the dangers of drugs and violence. We also support rehabilitation and safe spaces for youth.",
    icon: "🚫",
  },
  {
    title: "Youth Empowerment",
    description: "We focus on building morally upright, educated, and healthy youth. Our programs include tutoring, sports, leadership training, and character development.",
    icon: "🌱",
  },
  {
    title: "Structured Organization",
    description: "Our Shura (main body) sets the vision and strategy, while area-wise subgroups, each led by two Zimmedaars, ensure local needs are met. This structure allows us to be both unified and responsive.",
    icon: "🏢",
  },
];

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-16 mb-10 flex flex-col items-center shadow-lg px-2 sm:px-0">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg text-center">About Us</h1>
        <h2 className="text-2xl font-semibold text-blue-100 mb-4 text-center w-full">Social Alliance for Change & Harmony</h2>
        <p className="max-w-2xl text-lg text-blue-50 text-center mb-6 w-full">
          <span className="font-bold">S.A.C.H</span> is a non-political, non-religious, non-profit organization dedicated to justice, support, and empowerment for a better society.
        </p>
      </section>
      <main className="w-full max-w-5xl flex-1 space-y-12 px-2 sm:px-0">
        {/* Who We Are & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-xl shadow p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Who We Are</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">S.A.C.H</span> (Social Alliance for Change & Harmony) is a non-political, non-religious, non-profit organization dedicated to the betterment of society through justice, support, and empowerment.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-2">
              <li>Founded to address social injustices and empower communities at the grassroots level.</li>
              <li>Operates with a transparent, accountable, and inclusive approach.</li>
              <li>Driven by volunteers and community leaders who share our vision.</li>
            </ul>
            <p className="text-gray-700">We operate with a vision to create a just, safe, and harmonious community for all.</p>
          </section>
          <section className="bg-white rounded-xl shadow p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Our Vision</h3>
            <p className="text-gray-700 mb-2">
              To stand as a beacon of hope and support for the weak and vulnerable, to reduce injustice, and to foster a society where every individual can thrive with dignity and safety.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Promote unity and harmony across all communities.</li>
              <li>Ensure every person has access to basic rights and opportunities.</li>
              <li>Encourage proactive engagement in social welfare and justice.</li>
            </ul>
          </section>
        </div>
        {/* What We Do Cards */}
        <section>
          <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">What We Do</h3>
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {activities.map((act, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{act.icon}</div>
                <h4 className="font-bold text-lg mb-1 text-blue-700">{act.title}</h4>
                <p className="text-gray-600 text-center text-sm">{act.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Our Values Cards */}
        <section>
          <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">Our Values</h3>
          <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {values.map((val, idx) => (
              <div key={idx} className={`rounded-xl shadow p-6 flex flex-col items-center hover:shadow-xl transition-shadow ${val.color}`}>
                <div className="text-4xl mb-3">{val.icon}</div>
                <h4 className="font-bold text-lg mb-1">{val.title}</h4>
                <p className="text-center text-sm">{val.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Organizational Structure & Principles Expanded */}
        <section className="bg-white rounded-xl shadow p-8 mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Organizational Structure</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><span className="font-bold">Shura (Main Body):</span> The core decision-making group, responsible for strategy, approving initiatives, and ensuring alignment with our values. Members are selected for their integrity and commitment.</li>
            <li><span className="font-bold">Area-wise Subgroups:</span> Local teams operate under Shura guidance. Each subgroup has two Zimmedaars (responsible persons) who coordinate local projects, events, and outreach, ensuring our mission is implemented at the grassroots level.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 mt-8">Organizational Nature and Ideology</h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><span className="font-bold">Non-Political:</span> We have no political agenda or involvement. Our focus is solely on social welfare, and we do not participate in political debates or campaigns.</li>
            <li><span className="font-bold">Non-Religious:</span> We are not affiliated with any religion or religious ideology. Our work is inclusive and serves all individuals and communities, regardless of faith or belief.</li>
            <li><span className="font-bold">Social Welfare Focus:</span> Every activity is geared toward serving people and communities in need, from food drives to educational support and emergency relief.</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 mt-8">Core Principles</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li><span className="font-bold">Justice:</span> We stand firmly with truth and fairness, supporting and protecting the weak and vulnerable against any form of injustice. Our presence in the community is proactive and visible.</li>
            <li><span className="font-bold">Financial Support:</span> We provide financial aid to needy individuals, places, or institutions, including emergency relief, education aid, healthcare, and sustenance support.</li>
            <li><span className="font-bold">Anti-Drugs and Safety:</span> We create awareness and take action against drug abuse and violence, promoting a drug-free, safe, and peaceful environment through education and intervention.</li>
            <li><span className="font-bold">Youth Improvement:</span> We focus on building morally upright, educated, and healthy youth, encouraging participation in education, fitness, and character development programs.</li>
          </ul>
        </section>
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
  );
}
