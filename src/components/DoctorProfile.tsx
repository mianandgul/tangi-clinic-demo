import { GraduationCap, Award, ShieldCheck, Stethoscope, Edit3 } from 'lucide-react';
import { QUALIFICATION_DETAILS } from '../data/clinicData';
import { ClinicInfo } from '../types/clinic';

interface DoctorProfileProps {
  clinicInfo: ClinicInfo;
  onOpenCustomizer: () => void;
}

export function DoctorProfile({ clinicInfo, onOpenCustomizer }: DoctorProfileProps) {
  const getIconForAcronym = (acronym: string) => {
    switch (acronym) {
      case 'MBBS':
        return <GraduationCap className="w-5 h-5 text-teal-600" />;
      case 'MPH':
        return <Award className="w-5 h-5 text-teal-600" />;
      case 'RMP':
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 'MCPS':
        return <Stethoscope className="w-5 h-5 text-teal-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="qualifications" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Stethoscope/Equipment Asset & Doctor Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/src/assets/images/preventive_care_equipment_1793281613317.jpg"
                alt="Clinical diagnostic tools and patient records at Children & Family clinic Tangi"
                referrerPolicy="no-referrer"
                className="w-full h-[280px] sm:h-[320px] object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                    Physician In-Charge
                  </span>
                  <button
                    onClick={onOpenCustomizer}
                    className="inline-flex items-center gap-1 text-xs text-teal-700 hover:text-teal-900 font-medium"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Change Name</span>
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {clinicInfo.doctorName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Children &amp; Family Physician · Tangi, Charsadda
                  </p>
                </div>

                {/* Clean unboxed credentials tags */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-700 font-medium">
                  {clinicInfo.qualifications.map((q, idx) => (
                    <span key={q} className="inline-flex items-center gap-2">
                      <span className="text-slate-900 font-semibold">{q}</span>
                      {idx < clinicInfo.qualifications.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </span>
                  ))}
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  Note: Doctor&apos;s legal name will appear here upon completion of the official agreement.
                </p>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-semibold text-slate-900 block">
                Statutory PMDC Compliance &amp; Credentials Notice
              </span>
              <p>
                This practice operates under Registered Medical Practitioner (RMP) statutory licensure, adhering strictly to recognized clinical standards in Khyber Pakhtunkhwa.
              </p>
            </div>
          </div>

          {/* Right Column: Qualifications Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
                <span>Medical Qualifications</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Verified Credentials</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Academic &amp; Postgraduate Qualifications
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The practice is led by a medical doctor holding verified credentials in clinical medicine, public health epidemiology, and formal postgraduate medical examination:
              </p>
            </div>

            {/* List of 4 exact qualifications */}
            <div className="space-y-4">
              {QUALIFICATION_DETAILS.map((item) => (
                <div
                  key={item.acronym}
                  className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors space-y-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                        {getIconForAcronym(item.acronym)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-slate-900">
                            {item.acronym}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">·</span>
                          <span className="text-xs font-semibold text-teal-900">
                            {item.fullName}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 block">
                          {item.issuingAuthority}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pl-12">
                    {item.scopeAndSignificance}
                  </p>
                </div>
              ))}
            </div>

            {/* Practice Philosophy */}
            <div className="bg-slate-900 text-white rounded-xl p-5 space-y-2">
              <h4 className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
                Clinical Philosophy &amp; Community Care
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Combining bedside clinical medicine (MBBS, MCPS) with public health preventive frameworks (MPH) ensures every family receives both timely symptom relief and long-term preventive education against recurrent regional illnesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
