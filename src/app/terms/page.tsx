"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-12 px-2">
      <section className="w-full max-w-2xl bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Terms and Conditions</h1>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700 text-sm">
          <li>
            <span className="font-semibold">Non-Political & Non-Religious:</span> S.A.C.H is strictly non-political and non-religious. Members must not use the organization for political or religious promotion.
          </li>
          <li>
            <span className="font-semibold">Respect & Inclusivity:</span> All members must treat others with respect, regardless of background, faith, or beliefs. Discrimination or harassment is not tolerated.
          </li>
          <li>
            <span className="font-semibold">Community Welfare:</span> Activities and participation must align with the mission of social welfare, justice, and empowerment.
          </li>
          <li>
            <span className="font-semibold">No Political Activities:</span> Members must not engage in political campaigns, debates, or use S.A.C.H for political gain.
          </li>
          <li>
            <span className="font-semibold">No Religious Activities:</span> Members must not use S.A.C.H for religious propagation or exclusive religious events.
          </li>
          <li>
            <span className="font-semibold">Data & Privacy:</span> Personal information provided will be used only for organizational purposes and will not be shared without consent.
          </li>
          <li>
            <span className="font-semibold">Code of Conduct:</span> Members must act with integrity, honesty, and uphold the values of S.A.C.H at all times.
          </li>
          <li>
            <span className="font-semibold">Changes to Terms:</span> S.A.C.H reserves the right to update these terms. Continued participation implies acceptance of any changes.
          </li>
        </ol>
        <div className="mt-8 text-center">
          <Link href="/contact" className="text-blue-600 underline">Back to Join S.A.C.H</Link>
        </div>
      </section>
    </div>
  );
}