import { useState } from 'react';
import { X, RotateCcw, Check, User, Phone, Clock } from 'lucide-react';
import { ClinicInfo } from '../types/clinic';
import { DEFAULT_CLINIC_INFO } from '../data/clinicData';

interface DemoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  clinicInfo: ClinicInfo;
  onSave: (updated: Partial<ClinicInfo>) => void;
}

export function DemoCustomizerModal({
  isOpen,
  onClose,
  clinicInfo,
  onSave,
}: DemoCustomizerModalProps) {
  const [name, setName] = useState(clinicInfo.doctorName);
  const [phone, setPhone] = useState(clinicInfo.phoneNumber);
  const [timings, setTimings] = useState(clinicInfo.clinicTimings);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      doctorName: name.trim() || DEFAULT_CLINIC_INFO.doctorName,
      phoneNumber: phone.trim() || DEFAULT_CLINIC_INFO.phoneNumber,
      clinicTimings: timings.trim() || DEFAULT_CLINIC_INFO.clinicTimings,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  const handleReset = () => {
    setName(DEFAULT_CLINIC_INFO.doctorName);
    setPhone(DEFAULT_CLINIC_INFO.phoneNumber);
    setTimings(DEFAULT_CLINIC_INFO.clinicTimings);
    onSave({
      doctorName: DEFAULT_CLINIC_INFO.doctorName,
      phoneNumber: DEFAULT_CLINIC_INFO.phoneNumber,
      clinicTimings: DEFAULT_CLINIC_INFO.clinicTimings,
    });
  };

  const handleLoadSampleData = () => {
    setName('Dr. Ahmad Ali Khan');
    setPhone('+92 301 9876543');
    setTimings('Monday to Saturday: 3:00 PM – 8:30 PM (Sunday Closed)');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-base text-white">Interactive Demo Customizer</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Preview how the doctor’s details will look live on this site
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleApply} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-teal-600" />
              Doctor&apos;s Name (Placeholder)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Dr. [Name to be Provided]"
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Currently using placeholder. Type the doctor’s name to preview.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              Clinic Contact / Phone (Placeholder)
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. [Phone Number to be Provided]"
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              Clinic Timings / Consultation Hours
            </label>
            <input
              type="text"
              value={timings}
              onChange={(e) => setTimings(e.target.value)}
              placeholder="e.g. [Clinic Timings to be Provided]"
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleLoadSampleData}
                className="text-xs text-teal-700 hover:text-teal-900 font-medium underline underline-offset-2"
              >
                Fill Sample Data
              </button>
              <span className="text-slate-300">·</span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-700 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Placeholders
              </button>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-teal-400" />
                    Applied
                  </>
                ) : (
                  'Apply Preview'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
