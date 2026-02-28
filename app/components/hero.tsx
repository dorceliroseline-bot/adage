import { Play, Calendar, ArrowRight, MessageCircle } from 'lucide-react'; // Added MessageCircle
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 lg:py-24">
      {/* Subtle Background Pattern/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-red-600 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 ring-1 ring-inset ring-red-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              New Episode Every Sunday
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6 leading-[1.1]">
              Spreading the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Word</span> Across the Digital Globe.
            </h1>
            
            <p className="text-lg leading-8 text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0">
              Join our community as we dive deep into faith, scripture, and modern Christian life. 
              New broadcasts streaming live from our YouTube channel.
            </p>

            {/* Button Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link 
                href="https://www.youtube.com/@detentesentinellevivreleva1215/videos" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-bold text-white hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                <Play fill="currentColor" size={20} />
                Watch Latest
              </Link>

              {/* Added WhatsApp Channel Button */}
              <Link 
                href="https://whatsapp.com/channel/0029Vb9XQry6mYPTjoAeR801" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle size={20} />
                Join WhatsApp
              </Link>
              
              <Link 
                href="/about" 
                className="flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-lg font-bold text-white hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10"
              >
                Our Mission
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Featured Video / Visual Section */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-video w-full rounded-2xl border border-white/10 bg-black shadow-2xl overflow-hidden group">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/6WFd0zrtZ74?si=3IYUXl48c4mwXxQn" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Quick Stats / Info under Video */}
            <div className="mt-6 flex justify-between px-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Calendar size={16} />
                <span>Next Live: Sunday @ 10:00 AM</span>
              </div>
              <div className="text-red-500 text-sm font-bold flex items-center gap-1">
                 Check our channel for more
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}