import EpisodeCard from "./../components/EpisodeCard";

export default function EpisodesPage() {
  // In a real app, this would be fetched from the YouTube API
  const allEpisodes = [
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
    // Add more video objects here as your library grows
  ];

  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Video Library</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our full collection of messages, teachings, and spiritual broadcasts.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar (UI Only for now) */}
      <section className="sticky top-16 z-30 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-4 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2">
            {["All", "Sermons", "Shorts", "Live"].map((filter) => (
              <button 
                key={filter}
                className="px-4 py-2 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-red-600 hover:text-white transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 focus:ring-2 focus:ring-red-600 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-12 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {allEpisodes.map((episode) => (
            <EpisodeCard 
              key={episode.id}
              title={episode.title}
              date={episode.date}
              embedUrl={episode.embedUrl}
            />
          ))}
        </div>
      </section>

      {/* Pagination Placeholder */}
      <section className="py-12 text-center">
        <button className="px-8 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-xl font-bold hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all">
          Load More Episodes
        </button>
      </section>
    </div>
  );
}