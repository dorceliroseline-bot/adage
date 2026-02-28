import Hero from "./components/hero";
import EpisodeCard from "./components/EpisodeCard";

export default function Home() {
  const latestEpisodes = [
    { 
      id: 'J4L6tQgsG4o', 
      title: "Vivre le Vrai - Message de Foi", 
      date: "Oct 24, 2023",
      embedUrl: "https://www.youtube.com/embed/J4L6tQgsG4o?si=Ovpgts16tpZ4Rit3" 
    },
    { 
      id: '_w070aykLT8', 
      title: "Sentinelle de la Foi", 
      date: "Oct 17, 2023",
      embedUrl: "https://www.youtube.com/embed/_w070aykLT8?si=DZShpem0838HCKd7" 
    },
    { 
      id: 'PJRKksyjBHw', 
      title: "Détente Spirituelle", 
      date: "Oct 10, 2023",
      embedUrl: "https://www.youtube.com/embed/PJRKksyjBHw?si=hfGSZYyL84wCLjY7" 
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Latest Episodes Grid */}
      <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Latest Broadcasts
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400">
              Catch up on the messages you might have missed.
            </p>
          </div>
          <button className="text-red-600 font-semibold hover:underline flex items-center gap-1">
            View all episodes →
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestEpisodes.map((episode) => (
            <EpisodeCard 
              key={episode.id}
              title={episode.title}
              date={episode.date}
              embedUrl={episode.embedUrl}
            />
          ))}
        </div>
      </section>


      <section className="bg-red-600 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Live Stream</h2>
          <p className="mb-8 text-red-100">Join our mailing list to receive sermon notes and live notifications directly.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 rounded-lg px-4 py-3 text-black focus:outline-none"
            />
            <button className="bg-black px-6 py-3 rounded-lg font-bold hover:bg-zinc-800 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}