import { useState } from 'react';
import { SlidersHorizontal, X, Info } from 'lucide-react';

interface DemoNoticeBannerProps {
  onOpenCustomizer: () => void;
  doctorName: string;
}

export function DemoNoticeBanner({ onOpenCustomizer, doctorName }: DemoNoticeBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <button
        onClick={() => setDismissed(false)}
        className="fixed bottom-4 right-4 z-40 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-slate-800 transition-colors"
        title="View Demo Information"
      >
        <SlidersHorizontal className="w-3.5 h-3.5 text-teal-400" />
        <span>Demo Controls</span>
      </button>
    );
  }

  return (
    <div className="bg-slate-900 text-slate-100 text-xs px-4 py-2.5 border-b border-slate-800 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-teal-400 shrink-0 hidden sm:inline" />
          <p className="text-slate-300">
            <strong className="text-white font-medium">Demo Website Preview</strong> for review with doctor before launch
            <span className="hidden md:inline text-slate-400"> · Location: Near THQ Hospital, Tangi, Charsadda</span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold rounded text-xs transition-colors"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span>Customize Placeholders</span>
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
