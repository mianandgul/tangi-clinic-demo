import { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, FileText, CheckCircle2, AlertCircle, Printer, RefreshCw } from 'lucide-react';
import { AppointmentFormData, SubmittedAppointment, ClinicInfo } from '../types/clinic';

interface AppointmentFormProps {
  clinicInfo: ClinicInfo;
  preselectedService?: string;
}

export function AppointmentForm({ clinicInfo, preselectedService }: AppointmentFormProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    guardianName: '',
    patientAgeCategory: 'child',
    phoneNumber: '',
    preferredDate: '',
    preferredTimeSlot: 'evening',
    reasonForVisit: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedAppointment, setSubmittedAppointment] = useState<SubmittedAppointment | null>(null);
  const [pastDemoBookings, setPastDemoBookings] = useState<SubmittedAppointment[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Sync preselected service from Services section
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        reasonForVisit: `Consultation regarding: ${preselectedService}`,
      }));
    }
  }, [preselectedService]);

  // Set default preferred date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => (prev.preferredDate ? prev : { ...prev, preferredDate: dateStr }));
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient or child name is required.';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters.';
    }

    // Phone validation (flexible for Pakistan formats e.g. 03001234567, 0300-1234567, +923001234567)
    const cleanedPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Contact phone number is required.';
    } else if (!/^(03\d{9}|\+923\d{9}|00923\d{9}|\d{10,11})$/.test(cleanedPhone)) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g. 0300-1234567).';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred consultation date.';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Appointment date cannot be in the past.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newAppointment: SubmittedAppointment = {
      ...formData,
      id: `DEMO-TNG-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'demo_received',
    };

    setSubmittedAppointment(newAppointment);
    setPastDemoBookings((prev) => [newAppointment, ...prev]);
  };

  const handleResetForAnother = () => {
    setSubmittedAppointment(null);
    setFormData({
      patientName: '',
      guardianName: '',
      patientAgeCategory: 'child',
      phoneNumber: '',
      preferredDate: '',
      preferredTimeSlot: 'evening',
      reasonForVisit: '',
    });
    setErrors({});
  };

  // Min date helper for date input
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider">
            <span>Consultation Request</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Schedule an Appointment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Request an outpatient consultation slot for your child or family member.
          </p>
        </div>

        {/* DEMO NOTICE BADGE (Explicit and compliant) */}
        <div className="max-w-2xl mx-auto mb-8 bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-950">
              Interactive Website Demo Form
            </p>
            <p className="text-amber-800/90 leading-relaxed">
              This form is an interactive preview designed to demonstrate the appointment booking flow for the doctor&apos;s review. No live server or SMS service is currently connected; submitted requests generate a local preview consultation slip in this browser.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {submittedAppointment ? (
            /* DEMO CONFIRMATION & SLIP VIEW */
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Demo Request Generated
                    </h3>
                    <p className="text-xs text-slate-500">
                      Sample Token #{submittedAppointment.id} (Local Preview Only)
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded">
                  Demo Preview
                </span>
              </div>

              {/* Consultation Slip Card */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-4 shadow-2xs font-sans">
                <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Children &amp; Family Physician
                    </p>
                    <p className="text-xs text-slate-500">
                      {clinicInfo.doctorName} · {clinicInfo.qualifications.join(', ')}
                    </p>
                    <p className="text-xs text-teal-800 font-medium mt-0.5">
                      Near THQ Hospital, Tangi, Charsadda, KP
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Requested At</span>
                    <span className="text-xs font-mono font-semibold text-slate-700">
                      {submittedAppointment.createdAt}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Patient Name</span>
                    <span className="font-semibold text-slate-900 text-sm">
                      {submittedAppointment.patientName}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block">Category</span>
                    <span className="font-medium text-slate-800 capitalize">
                      {submittedAppointment.patientAgeCategory}
                    </span>
                  </div>

                  {submittedAppointment.guardianName && (
                    <div>
                      <span className="text-slate-400 block">Guardian / Parent</span>
                      <span className="font-medium text-slate-800">
                        {submittedAppointment.guardianName}
                      </span>
                    </div>
                  )}

                  <div>
                    <span className="text-slate-400 block">Contact Phone</span>
                    <span className="font-medium text-slate-800 font-mono">
                      {submittedAppointment.phoneNumber}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block">Preferred Date</span>
                    <span className="font-medium text-slate-800">
                      {submittedAppointment.preferredDate}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 block">Preferred Slot</span>
                    <span className="font-medium text-slate-800 capitalize">
                      {submittedAppointment.preferredTimeSlot} Slot
                    </span>
                  </div>
                </div>

                {submittedAppointment.reasonForVisit && (
                  <div className="pt-2 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 block mb-0.5">Reason for Consultation:</span>
                    <p className="text-slate-700 italic">
                      &quot;{submittedAppointment.reasonForVisit}&quot;
                    </p>
                  </div>
                )}

                <div className="p-3 bg-slate-50 rounded-lg text-[11px] text-slate-500 border border-slate-100 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Presentation Notice:</strong> In the finalized website, this slip will be automatically delivered to the patient via SMS or WhatsApp, and forwarded to the clinic assistant&apos;s desk.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-500" />
                  <span>Print Slip</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetForAnother}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-teal-400" />
                  <span>Book Another Demo Request</span>
                </button>
              </div>
            </div>
          ) : (
            /* FORM INPUT FIELDS */
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs"
            >
              {/* Patient Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  Patient / Child Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  placeholder="e.g. Usman Khan / Baby Fatima"
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.patientName
                      ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                      : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                  }`}
                />
                {errors.patientName && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Guardian Name & Age Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Guardian / Father Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    placeholder="e.g. Tariq Ahmad"
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Patient Age Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.patientAgeCategory}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        patientAgeCategory: e.target.value as AppointmentFormData['patientAgeCategory'],
                      })
                    }
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="infant">Infant / Newborn (0 – 12 months)</option>
                    <option value="child">Child (1 – 12 years)</option>
                    <option value="adult">Adolescent / Adult</option>
                    <option value="senior">Elderly Family Member</option>
                  </select>
                </div>
              </div>

              {/* Contact Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  Contact Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="0300-1234567 or +92 3XX XXXXXXX"
                  className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.phoneNumber
                      ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                      : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                  }`}
                />
                {errors.phoneNumber ? (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-1">
                    Used to confirm consultation timing or send appointment slip reminder.
                  </p>
                )}
              </div>

              {/* Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-600" />
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full px-4 py-2.5 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 transition-colors ${
                      errors.preferredDate
                        ? 'border-red-400 focus:ring-red-400 bg-red-50/20'
                        : 'border-slate-300 focus:ring-teal-500 focus:border-teal-500'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="afternoon">Afternoon (3:00 PM – 5:00 PM)</option>
                    <option value="evening">Evening (5:00 PM – 7:30 PM)</option>
                    <option value="night">Late Evening (7:30 PM – 9:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Reason for Visit (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-teal-600" />
                  Optional Reason for Consultation / Symptoms
                </label>
                <textarea
                  rows={3}
                  value={formData.reasonForVisit}
                  onChange={(e) => setFormData({ ...formData, reasonForVisit: e.target.value })}
                  placeholder="e.g. Routine 6-month checkup, persistent cough, child fever for 2 days, or blood pressure review..."
                  className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <span>Submit Demo Appointment Request</span>
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Demonstration Mode: Data will not be sent to an external server.
                </p>
              </div>
            </form>
          )}

          {/* Past Demo Bookings Drawer (Helpful for doctor evaluation) */}
          {pastDemoBookings.length > 0 && !submittedAppointment && (
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="text-xs text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1.5"
              >
                <span>{showHistory ? 'Hide' : 'View'} Demo Test Bookings ({pastDemoBookings.length})</span>
              </button>

              {showHistory && (
                <div className="mt-3 space-y-2">
                  {pastDemoBookings.map((bk) => (
                    <div
                      key={bk.id}
                      className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs flex items-center justify-between"
                    >
                      <div>
                        <span className="font-semibold text-slate-900">{bk.patientName}</span>
                        <span className="text-slate-400 ml-2">({bk.patientAgeCategory})</span>
                        <p className="text-slate-500 text-[11px]">
                          {bk.preferredDate} · {bk.preferredTimeSlot} · Phone: {bk.phoneNumber}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono bg-teal-100 text-teal-900 px-2 py-0.5 rounded">
                        {bk.id}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
