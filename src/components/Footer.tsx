import { MapPin, Calendar, Heart } from 'lucide-react';
import { ClinicInfo } from '../types/clinic';

interface FooterProps {
  clinicInfo: ClinicInfo;
  onOpenCustomizer: () => void;
}

export function Footer({ clinicInfo, onOpenCustomizer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Practice identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-base font-bold text-white tracking-tight block">
                Children &amp; Family Physician
              </span>
              <p className="text-xs text-teal-400 font-medium">
                {clinicInfo.doctorName}
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Dedicated primary care for newborns, growing children, and family members. Practicing near Tehsil Headquarter Hospital, Tangi, Charsadda.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-slate-400 text-xs pt-1">
              {clinicInfo.qualifications.map((q, idx) => (
                <span key={q} className="inline-flex items-center gap-2">
                  <span className="text-slate-200 font-medium">{q}</span>
                  {idx < clinicInfo.qualifications.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Clinical Services
                </a>
              </li>
              <li>
                <a href="#qualifications" className="hover:text-white transition-colors">
                  Doctor Credentials (MBBS, MPH, RMP, MCPS)
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-white transition-colors">
                  Schedule Appointment (Demo)
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Clinic Timings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic Location & Emergency Reference */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Clinic Address
            </span>
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">
                  {clinicInfo.locationHeadline}
                </p>
                <p className="text-slate-400 mt-0.5">
                  Hospital Road, Tangi, Tehsil Tangi, District Charsadda, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-medium"
              >
                <span>Edit Demo Details for Doctor Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            © {currentYear} Children &amp; Family Physician Clinic · Tangi, Charsadda. Demo prepared for client &amp; doctor review.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#appointment" className="text-slate-400 hover:text-white transition-colors">
              Book Demo
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="#location" className="text-slate-400 hover:text-white transition-colors">
              Tangi, Charsadda
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
