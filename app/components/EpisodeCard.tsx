interface EpisodeProps {
  title: string;
  embedUrl: string;
  date: string;
}

export default function EpisodeCard({ title, embedUrl, date }: EpisodeProps) {
  return (
    <div className="group flex flex-col">
      {/* Video Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-lg">
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>

      {/* Content */}
      <div className="mt-4">
        <p className="text-sm text-red-600 font-bold mb-1 uppercase tracking-wider">
          {date}
        </p>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
}