import { Target, Heart, Users, Globe, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function MissionPage() {
  const values = [
    {
      title: "Biblical Truth",
      description: "We are committed to the uncompromised Word of God as the foundation for everything we do.",
      icon: <Target className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Community First",
      description: "Building a digital and physical home where everyone feels seen, heard, and loved.",
      icon: <Users className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Global Reach",
      description: "Using technology to cross borders and share the Gospel with the ends of the earth.",
      icon: <Globe className="h-6 w-6 text-red-600" />,
    },
    {
      title: "Radical Love",
      description: "Reflecting Christ's heart through prayer, support, and active kindness to all.",
      icon: <Heart className="h-6 w-6 text-red-600" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* 1. Header Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Mission</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            To empower believers and reach the seeking by broadcasting the transformative power of the Gospel through every digital screen.
          </p>
        </div>
      </section>

      {/* 2. The Vision / Story Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
             {/* Use a real photo of your ministry/team here */}
             <Image 
                src="/detente.jpg" 
                alt="Ministry Team" 
                fill 
                className="object-cover"
             />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why We Broadcast</h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Started as a small vision on YouTube, <strong>Détente Sentinelle Vivre le Vrai</strong> has grown into a global community. We believe that the message of hope shouldn't be confined to four walls.
              </p>
              <p>
                In a world filled with noise, we strive to be a voice of clarity, providing biblically-centered teaching that is accessible to anyone, anywhere, at any time.
              </p>
              <ul className="mt-8 space-y-3">
                {["Reaching 100+ nations", "Daily prayer support", "Weekly scripture-based broadcasts"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-600 h-5 w-5" />
                    <span className="text-slate-900 dark:text-zinc-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-slate-50 dark:bg-zinc-900/50 py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What We Stand For</h2>
            <p className="text-slate-600 dark:text-zinc-400 mt-4">The pillars of our digital ministry.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-zinc-800 transition-hover hover:shadow-md">
                <div className="mb-4 inline-block p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-8">Ready to be part of the story?</h2>
        <a 
          href="https://www.youtube.com/@detentesentinellevivreleva1215" 
          target="_blank"
          className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all inline-block shadow-xl shadow-red-600/30"
        >
          Subscribe to the Mission
        </a>
      </section>
    </div>
  );
}