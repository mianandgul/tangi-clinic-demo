import { useState, useEffect } from 'react';
import { ClinicInfo } from './types/clinic';
import { DEFAULT_CLINIC_INFO } from './data/clinicData';
import { Header } from './components/Header';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { DoctorProfile } from './components/DoctorProfile';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoCustomizerModal } from './components/DemoCustomizerModal';

const LOCAL_STORAGE_KEY = 'tangi_clinic_demo_info';

export default function App() {
  const [clinicInfo, setClinicInfo] = useState<ClinicInfo>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CLINIC_INFO, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback to default
    }
    return DEFAULT_CLINIC_INFO;
  });

  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleUpdateClinicInfo = (updated: Partial<ClinicInfo>) => {
    setClinicInfo((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
      } catch {
        // LocalStorage fallback
      }
      return next;
    });
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* Demo Notice Banner for Reviewer */}
      <DemoNoticeBanner
        onOpenCustomizer={() => setCustomizerOpen(true)}
        doctorName={clinicInfo.doctorName}
      />

      {/* Top Navigation conforming to Top Bar Contract */}
      <Header onOpenCustomizer={() => setCustomizerOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          clinicInfo={clinicInfo}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />

        {/* 2. Services Section */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 3. About the Doctor & Credentials Section */}
        <DoctorProfile
          clinicInfo={clinicInfo}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />

        {/* 4. Appointment Request Form (Validated Demo) */}
        <AppointmentForm
          clinicInfo={clinicInfo}
          preselectedService={preselectedService}
        />

        {/* 5. Location Section (Near THQ Hospital Tangi) */}
        <LocationSection clinicInfo={clinicInfo} />

        {/* 6. Contact Section with Editable Placeholders */}
        <ContactSection
          clinicInfo={clinicInfo}
          onOpenCustomizer={() => setCustomizerOpen(true)}
        />
      </main>

      {/* 7. Footer */}
      <Footer
        clinicInfo={clinicInfo}
        onOpenCustomizer={() => setCustomizerOpen(true)}
      />

      {/* Interactive Customizer Modal for testing doctor's name, phone, hours live */}
      <DemoCustomizerModal
        isOpen={customizerOpen}
        onClose={() => setCustomizerOpen(false)}
        clinicInfo={clinicInfo}
        onSave={handleUpdateClinicInfo}
      />
    </div>
  );
}
