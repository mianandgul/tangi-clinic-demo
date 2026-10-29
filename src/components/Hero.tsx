import { Calendar, ArrowRight, ShieldCheck, MapPin, HeartPulse, Edit3 } from 'lucide-react';
import { ClinicInfo } from '../types/clinic';

interface HeroProps {
  clinicInfo: ClinicInfo;
  onOpenCustomizer: () => void;
}

export function Hero({ clinicInfo, onOpenCustomizer }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/60 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Zero-pill metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-teal-800 tracking-wide uppercase">
              <span>Children &amp; Family Practice</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Tangi, Charsadda</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Near THQ Hospital</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Compassionate Care for Children &amp; Families
            </h1>

            {/* Doctor & Location Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Providing patient-centered family medical consultations and dedicated pediatric health monitoring. Practicing near Tehsil Headquarter (THQ) Hospital, Tangi, Charsadda to deliver accessible, trusted healthcare for every stage of life.
            </p>

            {/* Doctor credentials teaser with editable placeholder */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Attending Physician
                </span>
                <button
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1 text-xs text-teal-700 hover:text-teal-900 font-medium"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit Name</span>
                </button>
              </div>

              <div className="text-lg font-bold text-slate-900">
                {clinicInfo.doctorName}
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                <span className="font-semibold text-teal-900">MBBS</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-semibold text-teal-900">MPH</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-semibold text-teal-900">RMP</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-semibold text-teal-900">MCPS</span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span className="text-slate-500">Registered Medical Practitioner</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book Consultation (Demo)</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                <span>View Clinical Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Micro proof info */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Location: Near THQ Hospital, Tangi, Charsadda, Khyber Pakhtunkhwa</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Clinic Interior Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
              <img
                src="/src/assets/images/clinic_hero_interior_1793281595776.jpg"
                alt="Children and Family Physician Consultation Clinic Interior near THQ Hospital Tangi"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-[1.01] transition-transform duration-500"
                onError={(e) => {
                  // Fallback container if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              {/* Resilient fallback if image fails */}
              <div
                style={{ display: 'none' }}
                className="w-full h-[360px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-slate-100 to-teal-50/40"
              >
                <HeartPulse className="w-12 h-12 text-teal-700 mb-3" />
                <h3 className="font-semibold text-slate-900 text-lg">Children &amp; Family Physician</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  Modern, child-friendly outpatient clinic situated near THQ Hospital, Tangi, Charsadda
                </p>
              </div>

              {/* Quiet caption bar */}
              <div className="p-3.5 bg-white/95 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-800">Child-Friendly Clinical Environment</span>
                <span className="text-slate-400">Tangi Clinic Facility</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Pillar Highlight Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200/80">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <HeartPulse className="w-4 h-4 text-teal-600" />
              <span>Children &amp; Family Focus</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Tailored medical consultations addressing neonatal care, pediatric growth, and common family health conditions under one roof.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Credentialed Qualifications</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              MBBS, Master of Public Health (MPH), Registered Medical Practitioner (RMP), and MCPS postgraduate clinical qualification.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>Accessible THQ Location</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Conveniently located near Tehsil Headquarter Hospital, Tangi, providing rapid proximity to diagnostic and emergency facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
