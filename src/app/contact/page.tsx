"use client";

import Link from "next/link";
import { useState } from "react";

export default function JoinUsPage() {
  const [accepted, setAccepted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", age: "", occupation: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (accepted) {
      setSubmitted(true);
      // Here you would send the form data to your backend or email service
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-12 px-2">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">Join S.A.C.H</h1>
        <p className="mb-8 text-center text-gray-600 text-lg">Become a part of S.A.C.H and help us make a difference in society. Fill out the form below to join our mission.</p>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold text-lg py-8">Thank you for joining S.A.C.H! We will contact you soon.</div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="block font-semibold mb-2 text-blue-700" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.name} onChange={handleChange} placeholder="Your Name" />
              </div>
              <div className="flex flex-col">
                <label className="block font-semibold mb-2 text-blue-700" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.email} onChange={handleChange} placeholder="you@email.com" />
              </div>
              <div className="flex flex-col">
                <label className="block font-semibold mb-2 text-blue-700" htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
              </div>
              <div className="flex flex-col">
                <label className="block font-semibold mb-2 text-blue-700" htmlFor="city">City</label>
                <input type="text" id="city" name="city" className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.city} onChange={handleChange} placeholder="Your City" />
              </div>
              <div className="flex flex-col">
                <label className="block font-semibold mb-2 text-blue-700" htmlFor="age">Age</label>
                <input type="number" id="age" name="age" min="10" max="100" className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.age} onChange={handleChange} placeholder="Your Age" />
              </div>
              <div className="flex flex-col">
                <label className="block font-semibold mb-2 text-blue-700" htmlFor="occupation">Occupation</label>
                <input type="text" id="occupation" name="occupation" className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.occupation} onChange={handleChange} placeholder="Your Occupation" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block font-semibold mb-2 text-blue-700" htmlFor="message">Why do you want to join S.A.C.H?</label>
              <textarea id="message" name="message" rows={3} className="w-full border-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition" value={form.message} onChange={handleChange} placeholder="Share your motivation..." />
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" id="terms" checked={accepted} onChange={e => setAccepted(e.target.checked)} className="mr-2 accent-blue-600" required />
              <label htmlFor="terms" className="text-sm">I accept the <Link href="/terms" className="text-blue-600 underline">Terms and Conditions</Link></label>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow transition disabled:opacity-50 text-lg" disabled={!accepted}>Join S.A.C.H</button>
          </form>
        )}
      </section>
    </div>
  );
}