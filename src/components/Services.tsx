import { useState } from 'react';
import { Users, Baby, Activity, ShieldCheck, CheckCircle2, ChevronRight, Stethoscope } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import { ServiceDetail } from '../types/clinic';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export function Services({ onSelectServiceForBooking }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_LIST[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'general-family':
        return <Users className="w-5 h-5 text-teal-600" />;
      case 'children-health':
        return <Baby className="w-5 h-5 text-teal-600" />;
      case 'routine-checkups':
        return <Activity className="w-5 h-5 text-teal-600" />;
      case 'preventive-guidance':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      default:
        return <Stethoscope className="w-5 h-5 text-teal-600" />;
    }
  };

  const activeService: ServiceDetail =
    SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Primary Care Scope</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Tangi, Charsadda</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Clinical Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Focused outpatient medical care structured for neonates, growing children, adolescents, and adult family members in the Tangi tehsil.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_LIST.map((service, index) => {
            const isSelected = service.id === selectedServiceId;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-teal-600 bg-teal-50/20 shadow-sm ring-1 ring-teal-600/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div className="space-y-4">
                  {/* Top row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-teal-800 mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Clean unboxed target audience metadata */}
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="font-medium text-slate-700">Patient Scope:</span>
                    <span>{service.audience}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Clinical Scope Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.keyPoints.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Focus: {service.focusAreas.slice(0, 2).join(', ')}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectServiceForBooking(service.title);
                      const el = document.getElementById('appointment');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>Request for this Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Clinical Focus Deep-Dive Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-teal-300 font-medium uppercase tracking-wider">
              <span>Detailed Clinical Information</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{activeService.title}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              What to Expect During Your {activeService.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Every consultation at our Tangi practice begins with a thorough medical history, systematic physical assessment, and clear explanations in local Pashto or Urdu. We prioritize unhurried conversations so guardians and patients feel fully informed.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                <h4 className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
                  Key Evaluation Points
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeService.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-teal-400 font-bold shrink-0">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/60">
                <h4 className="text-xs font-semibold text-teal-300 uppercase tracking-wider mb-2">
                  What to Bring With You
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold shrink-0">›</span>
                    <span>Previous doctor prescription slips or hospital discharge summaries</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold shrink-0">›</span>
                    <span>Child vaccination (EPI) card or pediatric milestone card</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold shrink-0">›</span>
                    <span>Current medications, syrups, or ongoing dosage packs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-teal-400 font-bold shrink-0">›</span>
                    <span>Recent lab reports or ultrasound/X-ray tests (if any)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Need consultation for your child or elder? Book a slot through our demo form below.
              </p>
              <button
                onClick={() => {
                  onSelectServiceForBooking(activeService.title);
                  const el = document.getElementById('appointment');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors whitespace-nowrap"
              >
                Schedule Demo Visit for {activeService.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
