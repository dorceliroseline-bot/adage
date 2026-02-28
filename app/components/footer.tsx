import Link from 'next/link';
import { Youtube, Facebook, Instagram, Mail, Radio, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Radio className="h-6 w-6 text-red-600" />
              <span className="text-xl font-bold tracking-tight">
                DETENTE<span className="text-red-600">SENTINELLE</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Spreading hope and the message of the Gospel to every corner of the digital world. Join our community as we grow together in faith.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://youtube.com/@detentesentinellevivreleva1215" target="_blank" className="hover:text-red-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="/episodes" className="hover:text-white transition-colors">All Broadcasts</Link></li>
              <li><Link href="/prayer" className="hover:text-white transition-colors">Prayer Requests</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sermon Notes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Daily Devotionals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ministry Updates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact/Prayer */}
          <div>
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <p className="text-sm mb-4">Have a prayer request or a question about our ministry?</p>
            <a 
              href="mailto:contact@yourdomain.com" 
              className="flex items-center gap-2 text-sm text-white hover:text-red-500 transition-colors"
            >
              <Mail size={16} />
              contact@yourdomain.com
            </a>
            <div className="mt-6 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
              <p className="text-xs italic flex items-center gap-2">
                <Heart size={12} className="text-red-600" />
                "For where two or three are gathered..."
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Détente Sentinelle Vivre le Vrai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}