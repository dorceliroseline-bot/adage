"use client";

import { useState } from "react";
import { Send, ShieldCheck, Heart } from "lucide-react";

export default function PrayerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a service like Formspree or a custom API
    setSubmitted(true);
  };

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">
            Prayer <span className="text-red-600">Requests</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg italic">
            "For where two or three are gathered together in my name, there am I in the midst of them." — Matthew 18:20
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Information Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="h-10 w-10 bg-red-100 dark:bg-red-950/30 rounded-lg flex items-center justify-center text-red-600 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Confidential</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Your requests are handled with the utmost care and privacy by our prayer team.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
              <div className="h-10 w-10 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">We Pray Daily</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400">
                Every request submitted is prayed over by our community during our morning devotions.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl border border-zinc-200 dark:border-zinc-800">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h2 className="text-2xl font-bold dark:text-white mb-2">Request Received</h2>
                  <p className="text-slate-600 dark:text-zinc-400">
                    Thank you for sharing your heart with us. Our team will be praying for you.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-red-600 font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold dark:text-zinc-300">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 dark:bg-black focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold dark:text-zinc-300">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 dark:bg-black focus:ring-2 focus:ring-red-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold dark:text-zinc-300">Your Prayer Request</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="How can we pray for you today?"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 dark:bg-black focus:ring-2 focus:ring-red-600 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-zinc-800/50 rounded-xl">
                    <input type="checkbox" id="anon" className="h-5 w-5 rounded border-zinc-300 accent-red-600" />
                    <label htmlFor="anon" className="text-sm dark:text-zinc-300 cursor-pointer">
                      Keep this request anonymous (Hide my name from the public list)
                    </label>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Submit Prayer Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}