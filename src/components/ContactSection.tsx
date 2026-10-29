import { Phone, Clock, MapPin, AlertTriangle, Edit3, MessageSquare, ShieldAlert } from 'lucide-react';
import { ClinicInfo } from '../types/clinic';

interface ContactSectionProps {
  clinicInfo: ClinicInfo;
  onOpenCustomizer: () => void;
}

export function ContactSection({ clinicInfo, onOpenCustomizer }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
              <span>Contact &amp; Clinic Hours</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Information Placeholders</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get in Touch &amp; Visit Us
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Key practice contact coordinates. The placeholders below will be updated with the doctor&apos;s verified telephone numbers and operating schedule.
            </p>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <Edit3 className="w-3.5 h-3.5 text-teal-600" />
            <span>Customize Contact Demo</span>
          </button>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Phone / WhatsApp */}
          <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Contact Number
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {clinicInfo.phoneNumber}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct phone line for scheduling inquiries, routine follow-ups, and pediatric checkup slots.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-400 italic">Status: Placeholder</span>
              <button
                onClick={onOpenCustomizer}
                className="text-teal-700 hover:text-teal-900 font-medium inline-flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Provide Number</span>
              </button>
            </div>
          </div>

          {/* Card 2: Clinic Timings */}
          <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Consultation Timings
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {clinicInfo.clinicTimings}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard outpatient schedule will reflect afternoon and evening family consultation slots.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-400 italic">Status: Placeholder</span>
              <button
                onClick={onOpenCustomizer}
                className="text-teal-700 hover:text-teal-900 font-medium inline-flex items-center gap-1"
              >
                <Edit3 className="w-3 h-3" />
                <span>Set Hours</span>
              </button>
            </div>
          </div>

          {/* Card 3: Clinic Location */}
          <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Clinic Location
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Near THQ Hospital, Tangi
                </h3>
                <p className="text-xs text-slate-500">Charsadda, Khyber Pakhtunkhwa</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tehsil Headquarter Hospital Road, accessible from Tangi Bazar and surrounding villages.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <a
                href="#location"
                className="text-teal-700 hover:text-teal-900 font-medium"
              >
                View Directions
              </a>
              <span className="text-slate-400">Confirmed Location</span>
            </div>
          </div>
        </div>

        {/* Critical Emergency Protocol Callout */}
        <div className="mt-8 bg-red-50/60 border border-red-200/80 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0 text-red-700">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-red-950">
                Urgent Medical Emergency Notice
              </h4>
              <p className="text-xs text-red-900/80 leading-relaxed max-w-3xl">
                {clinicInfo.emergencyNote}
              </p>
            </div>
          </div>

          <a
            href="tel:1122"
            className="px-4 py-2 text-xs font-bold text-red-700 bg-white border border-red-300 rounded-lg hover:bg-red-50 transition-colors whitespace-nowrap shrink-0 shadow-2xs"
          >
            Rescue 1122 Pakistan
          </a>
        </div>
      </div>
    </section>
  );
}
