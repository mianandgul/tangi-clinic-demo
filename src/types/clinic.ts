export interface ClinicInfo {
  doctorName: string;
  practiceTitle: string;
  qualifications: string[];
  locationHeadline: string;
  locationDetails: string;
  phoneNumber: string;
  clinicTimings: string;
  emergencyNote: string;
}

export interface AppointmentFormData {
  patientName: string;
  guardianName?: string;
  patientAgeCategory: 'child' | 'infant' | 'adult' | 'senior';
  phoneNumber: string;
  preferredDate: string;
  preferredTimeSlot: string;
  reasonForVisit: string;
}

export interface SubmittedAppointment extends AppointmentFormData {
  id: string;
  createdAt: string;
  status: 'demo_received';
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  audience: string;
  description: string;
  keyPoints: string[];
  focusAreas: string[];
}

export interface QualificationDetail {
  acronym: string;
  fullName: string;
  issuingAuthority: string;
  scopeAndSignificance: string;
}
