import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500" /> by Abhijeet Kudo
          </p>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
