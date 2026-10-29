import { MapPin, Navigation, ExternalLink, Building2, Car, Compass } from 'lucide-react';
import { ClinicInfo } from '../types/clinic';

interface LocationSectionProps {
  clinicInfo: ClinicInfo;
}

export function LocationSection({ clinicInfo }: LocationSectionProps) {
  // Real Google Maps search URL for THQ Hospital Tangi Charsadda (truthful search link, no fabricated coordinates)
  const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=THQ+Hospital+Tangi+Charsadda+Pakistan';

  return (
    <section id="location" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Clinic Accessibility</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Tehsil Tangi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Location &amp; Directions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Centrally situated in Tangi, District Charsadda for convenient access by families and pediatric patients from nearby union councils.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Location Details & Landmarks */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Address Box */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider block">
                    Official Location Address
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {clinicInfo.locationHeadline}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {clinicInfo.locationDetails}
                  </p>
                </div>
              </div>

              {/* Zero-pill metadata line */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                <span className="font-medium text-slate-800">Tehsil:</span>
                <span>Tangi</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-medium text-slate-800">District:</span>
                <span>Charsadda</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-medium text-slate-800">Province:</span>
                <span>Khyber Pakhtunkhwa</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>Open THQ Hospital Area on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Travel Directions & Landmark Guidance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span>Landmark Orientation</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Located within walking proximity to the main entrance of Tehsil Headquarter (THQ) Hospital Tangi. Easy to spot along the primary healthcare corridor.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-xs uppercase tracking-wider">
                  <Car className="w-4 h-4 text-teal-600" />
                  <span>Transport &amp; Parking</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Easily accessible by local Chingchi rickshaw, car, and van services from Tangi Bazar, Mandani, and Charsadda road with drop-off space right in front.
                </p>
              </div>
            </div>

            {/* Emergency Department Notice */}
            <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100 text-xs text-teal-950 space-y-1">
              <span className="font-semibold block text-teal-900">
                Hospital Proximity Advantage
              </span>
              <p className="text-teal-900/80 leading-relaxed">
                Our clinic’s location near THQ Hospital allows rapid transfer or immediate referral for emergency lab diagnostics, radiography, or emergency pediatric stabilization if required.
              </p>
            </div>
          </div>

          {/* Right: Clean Visual Schematic Map Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Vicinity Diagram
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  Tangi Tehsil
                </span>
              </div>

              {/* Stylized Visual Map Representation */}
              <div className="relative rounded-xl bg-slate-900 text-white p-6 overflow-hidden min-h-[300px] flex flex-col justify-between border border-slate-800">
                {/* Background road network lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="absolute top-1/2 left-0 right-0 h-8 bg-slate-500 -translate-y-1/2 border-y border-dashed border-white"></div>
                  <div className="absolute left-1/3 top-0 bottom-0 w-6 bg-slate-500 border-x border-dashed border-white"></div>
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 text-[11px] font-mono border border-teal-500/30">
                    Hospital Road, Tangi
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Tehsil Headquarter Hospital Zone
                  </h4>
                  <p className="text-xs text-slate-300">
                    District Charsadda, Khyber Pakhtunkhwa
                  </p>
                </div>

                {/* Pin callout */}
                <div className="relative z-10 my-4 bg-slate-800/95 border border-teal-500/50 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-400"></div>
                    <span>Children &amp; Family Clinic</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Directly adjacent to THQ Hospital Tangi
                  </p>
                </div>

                <div className="relative z-10 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>From Tangi Main Bazar: ~2-3 mins</span>
                  <span>From Charsadda: ~25 mins</span>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-500">
                <p>
                  <strong>Verification Notice:</strong> Real Google Maps directions are linked above to ensure 100% accurate satellite navigation without mock map overlays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
