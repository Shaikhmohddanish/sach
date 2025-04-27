import React from "react";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-16 mb-10 flex flex-col items-center shadow-lg">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">sach</h1>
        <h2 className="text-2xl font-semibold text-blue-100 mb-4">Social Alliance for Change & Harmony</h2>
        <p className="max-w-2xl text-lg text-blue-50 text-center mb-6">
          A non-political, non-profit organization dedicated to justice, support, and empowerment for a better society.
        </p>
      </section>
      <main className="w-full max-w-5xl flex-1 space-y-12 px-2 sm:px-0">
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
    </div>
  );
}
