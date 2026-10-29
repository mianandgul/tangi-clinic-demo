import { ClinicInfo, QualificationDetail, ServiceDetail } from '../types/clinic';

export const DEFAULT_CLINIC_INFO: ClinicInfo = {
  doctorName: '[Doctor Name to be Provided]',
  practiceTitle: 'Children & Family Physician',
  qualifications: ['MBBS', 'MPH', 'RMP', 'MCPS'],
  locationHeadline: 'Near THQ Hospital, Tangi, Charsadda, Pakistan',
  locationDetails: 'Hospital Road, adjacent to Tehsil Headquarter Hospital, Tangi, District Charsadda, Khyber Pakhtunkhwa',
  phoneNumber: '[Phone Number to be Provided]',
  clinicTimings: '[Clinic Timings to be Provided]',
  emergencyNote: 'For critical trauma, severe dehydration, or emergency pediatric care, please visit THQ Hospital Tangi Emergency Department nearby immediately.',
};

export const QUALIFICATION_DETAILS: QualificationDetail[] = [
  {
    acronym: 'MBBS',
    fullName: 'Bachelor of Medicine & Bachelor of Surgery',
    issuingAuthority: 'Recognized Medical University / PMDC',
    scopeAndSignificance:
      'The foundational professional medical degree providing rigorous training across internal medicine, pediatric healthcare, surgery, and clinical diagnostics.',
  },
  {
    acronym: 'MPH',
    fullName: 'Master of Public Health',
    issuingAuthority: 'Accredited Postgraduate Institute of Public Health',
    scopeAndSignificance:
      'Advanced postgraduate expertise in community health, epidemiology, preventive medicine, maternal-child disease prevention, and community health strategies.',
  },
  {
    acronym: 'RMP',
    fullName: 'Registered Medical Practitioner',
    issuingAuthority: 'Pakistan Medical & Dental Council (PMDC)',
    scopeAndSignificance:
      'Official statutory licensure granting full legal authorization to evaluate, diagnose, treat, and prescribe medications for patients across Pakistan.',
  },
  {
    acronym: 'MCPS',
    fullName: 'Member of College of Physicians & Surgeons Pakistan',
    issuingAuthority: 'College of Physicians and Surgeons Pakistan (CPSP)',
    scopeAndSignificance:
      'Prestigious postgraduate diploma representing formal specialized clinical training and board assessment in clinical practice.',
  },
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'general-family',
    title: 'General Family Consultation',
    subtitle: 'Comprehensive primary care for all generations',
    audience: 'Adults, Adolescents & Elderly Family Members',
    description:
      'Evidence-based diagnosis, management, and continuous care for acute illnesses and chronic health conditions affecting family members of all age brackets.',
    keyPoints: [
      'Diagnosis and medical management of seasonal infections, respiratory illnesses, and gastrointestinal conditions',
      'Long-term management and monitoring of hypertension, diabetes, and cardiovascular wellness',
      'Personalized medication review, diagnostic test interpretation, and therapeutic counseling',
      'Holistic health guidance tailored to household lifestyle and local environmental factors in Charsadda',
    ],
    focusAreas: ['Acute Illnesses', 'Chronic Conditions', 'Family Health Reviews', 'Lifestyle Counseling'],
  },
  {
    id: 'children-health',
    title: "Children's Health Consultation",
    subtitle: 'Specialized clinical assessment for infants and children',
    audience: 'Newborns, Infants, Toddlers & School-Age Children',
    description:
      'Gentle, child-centered clinical evaluations addressing common and complex pediatric ailments, growth concerns, and childhood health challenges.',
    keyPoints: [
      'Comprehensive evaluation of childhood fever, cough, chest infections, and acute ear-nose-throat symptoms',
      'Pediatric digestive wellness: management of diarrhea, dehydration, colic, and appetite difficulties',
      'Neonatal and infant health monitoring including jaundice, weight trajectory, and feeding difficulties',
      'Comfortable, child-friendly examination atmosphere designed to reduce anxiety for young patients',
    ],
    focusAreas: ['Pediatric Fevers', 'Respiratory Illnesses', 'Infant Care', 'Nutritional Assessment'],
  },
  {
    id: 'routine-checkups',
    title: 'Routine Checkups & Screenings',
    subtitle: 'Regular clinical monitoring for lifelong wellbeing',
    audience: 'Individuals & Families Seeking Periodic Reviews',
    description:
      'Structured physical examinations and clinical screenings designed to detect potential health concerns early and maintain optimal vitality.',
    keyPoints: [
      'Vital signs evaluation (blood pressure, oxygen saturation, heart rate, temperature, body mass index)',
      'Pediatric growth charting (weight-for-age, height-for-age, head circumference tracking)',
      'Developmental milestones screening in early childhood to support timely developmental progress',
      'Systematic review of systems to identify early indicators of metabolic or respiratory disorders',
    ],
    focusAreas: ['Growth Tracking', 'Vital Monitoring', 'Developmental Milestones', 'Early Detection'],
  },
  {
    id: 'preventive-guidance',
    title: 'Preventive Healthcare Guidance',
    subtitle: 'Proactive community & maternal-child disease prevention',
    audience: 'Parents, Expectant Families & Community Members',
    description:
      'Applying Master of Public Health (MPH) principles to provide family education on immunization, seasonal epidemic prevention, and hygiene practices.',
    keyPoints: [
      'Routine childhood EPI vaccination counseling and catch-up immunization guidance',
      'Seasonal infection prevention strategies (malaria, typhoid, dengue, water-borne enteritis in KP)',
      'Childhood nutrition education, weaning diets, and micronutrient supplementation (iron, vitamin D, zinc)',
      'Clean water hygiene, sanitation, and household preventive measures for healthy family living',
    ],
    focusAreas: ['Vaccination Guidance', 'Water & Food Safety', 'Seasonal Epidemics', 'Child Nutrition'],
  },
];
