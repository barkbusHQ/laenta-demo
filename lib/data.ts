export interface Message {
  id: number;
  content: string;
  sender: string;
  senderType: "patient" | "staff" | "ai";
  timestamp: string;
}

export interface Appointment {
  title: string;
  doctor: string;
  date: string;
  time: string;
  duration: string;
  status: "upcoming" | "scheduled";
}

export interface Patient {
  id: number;
  name: string;
  location: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  urgent: boolean;
  vip: boolean;
  age: number;
  gender: string;
  patientId: string;
  phone: string;
  email: string;
  lastVisit: string;
  diagnosis: string;
  contextNotes: string;
  bulletPoints: string[];
  recentTests: { name: string; date: string }[];
  treatmentPlan: string;
  appointments: Appointment[];
  messages: Message[];
}

export const patients: Patient[] = [
  {
    id: 2,
    name: "Marcus Chen",
    location: "El Segundo",
    lastMessage: "Thanks! The hearing aids are working great.",
    timestamp: "3m ago",
    unread: true,
    urgent: false,
    vip: true,
    age: 42,
    gender: "Male",
    patientId: "#45821",
    phone: "(310) 555-0182",
    email: "marcus.chen@email.com",
    lastVisit: "Nov 12, 2024",
    diagnosis: "Bilateral high-frequency sensorineural hearing loss",
    contextNotes: "Patient presented with progressive hearing loss over the past 2 years. Works in tech industry, concerned about communication in meetings.",
    bulletPoints: [
      "Recent audiometry shows mild high-frequency hearing loss",
      "No significant medical history affecting ENT",
      "Prefers discreet hearing aid options",
    ],
    recentTests: [
      { name: "Pure Tone Audiometry", date: "Nov 12, 2024" },
      { name: "Tympanometry", date: "Nov 12, 2024" },
    ],
    treatmentPlan: "Hearing aid fitting and adjustment, followed by regular follow-ups to ensure optimal performance.",
    appointments: [
      { title: "Hearing Aid Fitting", doctor: "Dr. Martinez", date: "Thu, Nov 23", time: "11:00 AM", duration: "60 min", status: "upcoming" },
      { title: "Follow-up Consultation", doctor: "Dr. Martinez", date: "Mon, Dec 4", time: "2:30 PM", duration: "30 min", status: "scheduled" },
    ],
    messages: [
      { id: 1, content: "Hi, I wanted to follow up on my hearing test results from last week.", sender: "Marcus Chen", senderType: "patient", timestamp: "10:23 AM" },
      { id: 2, content: "Good morning Marcus! I can help you with that. Dr. Martinez reviewed your results - you have mild high-frequency hearing loss, which is common and very treatable with modern hearing aids.", sender: "AI Chatbot", senderType: "ai", timestamp: "10:23 AM" },
      { id: 3, content: "What are my treatment options?", sender: "Marcus Chen", senderType: "patient", timestamp: "10:26 AM" },
      { id: 4, content: "Based on your audiometry results, Dr. Martinez recommends starting with hearing aids. We have several discreet options that would work well for your lifestyle. Would you like me to show you available appointment times for a fitting?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:26 AM" },
      { id: 5, content: "Yes, that would be great. What days do you have available next week?", sender: "Marcus Chen", senderType: "patient", timestamp: "10:30 AM" },
      { id: 6, content: "I found two openings with Dr. Martinez: Tuesday at 2pm or Thursday at 11am. Which works better for you?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:30 AM" },
      { id: 7, content: "Thursday at 11am works perfectly!", sender: "Marcus Chen", senderType: "patient", timestamp: "10:32 AM" },
      { id: 8, content: "I've scheduled your hearing aid fitting for Thursday, November 23rd at 11:00 AM with Dr. Martinez. You'll receive a confirmation email shortly. Is there anything else I can help you with?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:32 AM" },
      { id: 9, content: "Will my insurance cover the hearing aids?", sender: "Marcus Chen", senderType: "patient", timestamp: "10:35 AM" },
      { id: 10, content: "That's a great question! Let me connect you with our billing team who can verify your specific coverage. Mike will call you this afternoon to explain your options.", sender: "Sara K, Glendale", senderType: "staff", timestamp: "10:37 AM" },
      { id: 11, content: "That's very helpful, thank you!", sender: "Marcus Chen", senderType: "patient", timestamp: "10:38 AM" },
      { id: 12, content: "You're welcome! We'll see you Thursday.", sender: "Sara K, Glendale", senderType: "staff", timestamp: "10:39 AM" },
      { id: 13, content: "Thanks! The hearing aids are working great.", sender: "Marcus Chen", senderType: "patient", timestamp: "10:40 AM" },
    ],
  },
  {
    id: 1,
    name: "Maya Rodriguez",
    location: "Glendale",
    lastMessage: "Perfect, see you tomorrow!",
    timestamp: "12m ago",
    unread: true,
    urgent: false,
    vip: false,
    age: 34,
    gender: "Female",
    patientId: "#45822",
    phone: "(818) 555-0193",
    email: "sara.klarna@email.com",
    lastVisit: "Nov 8, 2024",
    diagnosis: "Seasonal allergic rhinitis with suspected food allergies",
    contextNotes: "Patient booked via last-minute cancellation. Pre-screening completed by AI assistant.",
    bulletPoints: [
      "No antihistamines taken in past 7 days (confirmed)",
      "No current skin rashes or irritation",
      "Fasted for 4+ hours before appointment",
      "Suspected triggers: shellfish, tree pollen, dust mites",
      "Severity: moderate-severe (hives, respiratory symptoms)",
    ],
    recentTests: [
      { name: "Skin Prick Test", date: "Nov 8, 2024" },
      { name: "IgE Blood Panel", date: "Nov 8, 2024" },
    ],
    treatmentPlan: "Complete allergy testing panel followed by immunotherapy if indicated. Avoid suspected allergens until results confirmed.",
    appointments: [
      { title: "Allergy Panel Testing", doctor: "Dr. Patel", date: "Tomorrow", time: "2:30 PM", duration: "90 min", status: "upcoming" },
    ],
    messages: [
      { id: 1, content: "Hi Sara! Good news - we just had a cancellation for tomorrow at 2:30 PM with Dr. Patel for your allergy panel testing. Would you like to come in earlier than your scheduled appointment?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:05 AM" },
      { id: 2, content: "Oh that would be great! Yes please, I'd love to get in sooner.", sender: "Maya Rodriguez", senderType: "patient", timestamp: "10:08 AM" },
      { id: 3, content: "Wonderful! I've booked you for tomorrow at 2:30 PM. Before your visit, I need to ask a few pre-screening questions to ensure accurate test results. Have you taken any antihistamines in the past 7 days?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:08 AM" },
      { id: 4, content: "No, I stopped taking them last week when I scheduled the original appointment.", sender: "Maya Rodriguez", senderType: "patient", timestamp: "10:10 AM" },
      { id: 5, content: "Perfect. Do you currently have any skin rashes, hives, or irritation on your forearms? That's where we'll do the skin prick test.", sender: "AI Chatbot", senderType: "ai", timestamp: "10:10 AM" },
      { id: 6, content: "No, my skin is clear right now.", sender: "Maya Rodriguez", senderType: "patient", timestamp: "10:12 AM" },
      { id: 7, content: "Great. Please avoid eating for 4 hours before your appointment. Can you tell me what you suspect might be triggering your allergies?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:12 AM" },
      { id: 8, content: "I think shellfish for sure after the hives incident. Also tree pollen in spring and maybe dust mites - I sneeze a lot when cleaning.", sender: "Maya Rodriguez", senderType: "patient", timestamp: "10:15 AM" },
      { id: 9, content: "Thank you. On a scale of mild, moderate, or severe, how would you rate your allergy symptoms overall?", sender: "AI Chatbot", senderType: "ai", timestamp: "10:15 AM" },
      { id: 10, content: "I'd say moderate to severe. The hives were scary and I sometimes have trouble breathing during pollen season.", sender: "Maya Rodriguez", senderType: "patient", timestamp: "10:17 AM" },
      { id: 11, content: "I've noted all of this for Dr. Patel. You're all set for tomorrow at 2:30 PM. Remember: no antihistamines, no food 4 hours before, and wear a short-sleeved shirt. We'll send a reminder in the morning!", sender: "AI Chatbot", senderType: "ai", timestamp: "10:17 AM" },
      { id: 12, content: "Perfect, see you tomorrow!", sender: "Maya Rodriguez", senderType: "patient", timestamp: "10:18 AM" },
    ],
  },
  {
    id: 3,
    name: "Jeff Smith",
    location: "Torrance",
    lastMessage: "The sinus rinse has been helping a lot, thank you!",
    timestamp: "45m ago",
    unread: false,
    urgent: false,
    vip: false,
    age: 51,
    gender: "Male",
    patientId: "#45823",
    phone: "(310) 555-0204",
    email: "jeff.smith@email.com",
    lastVisit: "Nov 5, 2024",
    diagnosis: "Chronic sinusitis with deviated septum",
    contextNotes: "Long-term sinus issues, trying conservative treatment before considering surgery. Responds well to nasal irrigation.",
    bulletPoints: [
      "Chronic sinus pressure and congestion for 3+ years",
      "CT scan shows deviated septum to the left",
      "Currently managing with saline rinse and nasal steroids",
    ],
    recentTests: [
      { name: "Sinus CT Scan", date: "Oct 28, 2024" },
      { name: "Nasal Endoscopy", date: "Nov 5, 2024" },
    ],
    treatmentPlan: "Continue conservative management with saline irrigation and Flonase. Re-evaluate in 6 weeks for possible septoplasty referral.",
    appointments: [
      { title: "Sinus Follow-up", doctor: "Dr. Martinez", date: "Wed, Dec 13", time: "3:00 PM", duration: "30 min", status: "scheduled" },
    ],
    messages: [
      { id: 1, content: "Dr. Martinez, I wanted to let you know how the treatment is going.", sender: "Jeff Smith", senderType: "patient", timestamp: "2:10 PM" },
      { id: 2, content: "Hi Jeff! Thanks for reaching out. How are you feeling with the treatment plan?", sender: "Jeff S, El Segundo", senderType: "staff", timestamp: "2:15 PM" },
      { id: 3, content: "The sinus rinse has been helping a lot, thank you! My congestion is much better.", sender: "Jeff Smith", senderType: "patient", timestamp: "2:18 PM" },
      { id: 4, content: "That's wonderful to hear! Are you doing the rinse twice daily as recommended?", sender: "Jeff S, El Segundo", senderType: "staff", timestamp: "2:20 PM" },
      { id: 5, content: "Yes, morning and night. The Flonase is helping too.", sender: "Jeff Smith", senderType: "patient", timestamp: "2:22 PM" },
      { id: 6, content: "Excellent! Keep up the routine. Dr. Martinez will reassess at your December appointment whether we need to discuss surgical options.", sender: "Jeff S, El Segundo", senderType: "staff", timestamp: "2:25 PM" },
    ],
  },
  {
    id: 4,
    name: "Emily Nguyen",
    location: "Pasadena",
    lastMessage: "I'm still experiencing some dizziness after the procedure",
    timestamp: "1h ago",
    unread: true,
    urgent: true,
    vip: false,
    age: 38,
    gender: "Female",
    patientId: "#45824",
    phone: "(626) 555-0215",
    email: "emily.nguyen@email.com",
    lastVisit: "Nov 15, 2024",
    diagnosis: "Benign paroxysmal positional vertigo (BPPV)",
    contextNotes: "Post Epley maneuver patient experiencing residual dizziness. May need repeat procedure or vestibular rehabilitation.",
    bulletPoints: [
      "Severe vertigo episodes started 2 weeks ago",
      "Positive Dix-Hallpike test on right side",
      "Epley maneuver performed Nov 15",
    ],
    recentTests: [
      { name: "Dix-Hallpike Test", date: "Nov 15, 2024" },
      { name: "VNG Testing", date: "Nov 15, 2024" },
    ],
    treatmentPlan: "Epley maneuver completed. If symptoms persist beyond 1 week, repeat maneuver or begin vestibular rehabilitation therapy.",
    appointments: [
      { title: "Vertigo Follow-up", doctor: "Dr. Chen", date: "Mon, Nov 20", time: "10:30 AM", duration: "30 min", status: "upcoming" },
    ],
    messages: [
      { id: 1, content: "Hi, I had the Epley maneuver done last week for my vertigo.", sender: "Emily Nguyen", senderType: "patient", timestamp: "11:05 AM" },
      { id: 2, content: "Hi Emily! I can see your procedure was on November 15th. How are you feeling now?", sender: "AI Chatbot", senderType: "ai", timestamp: "11:05 AM" },
      { id: 3, content: "Better than before, but I'm still experiencing some dizziness after the procedure", sender: "Emily Nguyen", senderType: "patient", timestamp: "11:10 AM" },
      { id: 4, content: "Some residual dizziness is normal for a few days after the Epley maneuver. Is it constant or only with certain movements?", sender: "AI Chatbot", senderType: "ai", timestamp: "11:10 AM" },
      { id: 5, content: "Mostly when I turn my head quickly or look up.", sender: "Emily Nguyen", senderType: "patient", timestamp: "11:15 AM" },
      { id: 6, content: "That's a common post-procedure symptom. I recommend avoiding quick head movements for now. You have a follow-up with Dr. Chen on Monday. If symptoms worsen before then, please call us immediately.", sender: "AI Chatbot", senderType: "ai", timestamp: "11:15 AM" },
    ],
  },
  {
    id: 5,
    name: "David Park",
    location: "Manhattan Beach",
    lastMessage: "Confirming my 2pm appointment tomorrow",
    timestamp: "2h ago",
    unread: false,
    urgent: false,
    vip: true,
    age: 67,
    gender: "Male",
    patientId: "#45825",
    phone: "(310) 555-0226",
    email: "david.park@email.com",
    lastVisit: "Oct 30, 2024",
    diagnosis: "Age-related hearing loss (presbycusis)",
    contextNotes: "Long-term patient, very engaged in his care. Uses bilateral hearing aids, due for annual hearing check and device adjustment.",
    bulletPoints: [
      "Bilateral hearing aids since 2019",
      "Progressive age-related hearing loss",
      "Excellent hearing aid compliance",
    ],
    recentTests: [
      { name: "Annual Audiometry", date: "Oct 30, 2024" },
      { name: "Hearing Aid Function Check", date: "Oct 30, 2024" },
    ],
    treatmentPlan: "Annual monitoring with audiometry. Current hearing aids performing well. Consider upgrade in 1-2 years as technology improves.",
    appointments: [
      { title: "Hearing Aid Adjustment", doctor: "Dr. Martinez", date: "Tue, Nov 21", time: "2:00 PM", duration: "45 min", status: "upcoming" },
    ],
    messages: [
      { id: 1, content: "Good morning! Just wanted to confirm my appointment.", sender: "David Park", senderType: "patient", timestamp: "8:00 AM" },
      { id: 2, content: "Good morning, Mr. Park! Let me check that for you. Yes, you're confirmed for tomorrow, Tuesday at 2pm with Dr. Martinez.", sender: "AI Chatbot", senderType: "ai", timestamp: "8:00 AM" },
      { id: 3, content: "Perfect. Should I bring anything specific?", sender: "David Park", senderType: "patient", timestamp: "8:08 AM" },
      { id: 4, content: "Please bring both hearing aids and your insurance card. Also any notes about issues you've been experiencing with the devices.", sender: "AI Chatbot", senderType: "ai", timestamp: "8:08 AM" },
      { id: 5, content: "Confirming my 2pm appointment tomorrow", sender: "David Park", senderType: "patient", timestamp: "8:12 AM" },
      { id: 6, content: "All confirmed! We'll see you then. Don't forget - free parking validation is available at the front desk.", sender: "AI Chatbot", senderType: "ai", timestamp: "8:12 AM" },
    ],
  },
  {
    id: 6,
    name: "Jennifer Okonkwo",
    location: "Culver City",
    lastMessage: "Question about the post-op care instructions",
    timestamp: "3h ago",
    unread: true,
    urgent: false,
    vip: false,
    age: 29,
    gender: "Female",
    patientId: "#45826",
    phone: "(310) 555-0237",
    email: "jennifer.okonkwo@email.com",
    lastVisit: "Nov 14, 2024",
    diagnosis: "Chronic tonsillitis - post tonsillectomy",
    contextNotes: "Recent tonsillectomy patient, day 5 post-op. Following recovery protocol, some questions about diet progression.",
    bulletPoints: [
      "Tonsillectomy performed Nov 14, 2024",
      "History of recurrent strep throat (6+ episodes/year)",
      "Recovery progressing normally",
    ],
    recentTests: [
      { name: "Pre-op Blood Work", date: "Nov 10, 2024" },
      { name: "Throat Culture", date: "Nov 1, 2024" },
    ],
    treatmentPlan: "Post-tonsillectomy recovery. Soft diet for 2 weeks, pain management with prescribed medications. Follow-up at 2 weeks post-op.",
    appointments: [
      { title: "Post-Op Check", doctor: "Dr. Williams", date: "Tue, Nov 28", time: "11:00 AM", duration: "20 min", status: "scheduled" },
    ],
    messages: [
      { id: 1, content: "Hi, I'm on day 5 after my tonsillectomy.", sender: "Jennifer Okonkwo", senderType: "patient", timestamp: "1:00 PM" },
      { id: 2, content: "Hi Jennifer! How are you feeling? Any concerns with your recovery?", sender: "Sara K, Glendale", senderType: "staff", timestamp: "1:05 PM" },
      { id: 3, content: "Pain is manageable with the medication. Question about the post-op care instructions", sender: "Jennifer Okonkwo", senderType: "patient", timestamp: "1:08 PM" },
      { id: 4, content: "Of course! What would you like to know?", sender: "Sara K, Glendale", senderType: "staff", timestamp: "1:10 PM" },
      { id: 5, content: "When can I start eating normal food again? I'm tired of ice cream and soup.", sender: "Jennifer Okonkwo", senderType: "patient", timestamp: "1:12 PM" },
      { id: 6, content: "We recommend soft foods for the full 2 weeks. You can try scrambled eggs, mashed potatoes, pasta. Avoid anything crunchy, spicy, or acidic until your follow-up appointment.", sender: "Sara K, Glendale", senderType: "staff", timestamp: "1:15 PM" },
    ],
  },
  {
    id: 7,
    name: "Michael Rivera",
    location: "Redondo Beach",
    lastMessage: "The tinnitus has improved since starting treatment",
    timestamp: "5h ago",
    unread: false,
    urgent: false,
    vip: false,
    age: 45,
    gender: "Male",
    patientId: "#45827",
    phone: "(310) 555-0248",
    email: "michael.rivera@email.com",
    lastVisit: "Nov 1, 2024",
    diagnosis: "Subjective tinnitus with mild hearing loss",
    contextNotes: "Tinnitus patient responding well to sound therapy and cognitive behavioral techniques. Works in loud environment, using hearing protection now.",
    bulletPoints: [
      "Bilateral tinnitus for 8 months",
      "Works in construction - noise exposure history",
      "Started sound therapy Nov 1",
    ],
    recentTests: [
      { name: "Audiometry", date: "Nov 1, 2024" },
      { name: "Tinnitus Matching Test", date: "Nov 1, 2024" },
    ],
    treatmentPlan: "Sound therapy with white noise generators. Cognitive behavioral techniques for tinnitus management. Strict hearing protection at work.",
    appointments: [
      { title: "Tinnitus Follow-up", doctor: "Dr. Martinez", date: "Fri, Dec 1", time: "9:30 AM", duration: "30 min", status: "scheduled" },
    ],
    messages: [
      { id: 1, content: "Dr. Martinez, wanted to give you an update on my tinnitus.", sender: "Michael Rivera", senderType: "patient", timestamp: "7:30 AM" },
      { id: 2, content: "Hi Michael! Thanks for the update. How are things going with the treatment plan?", sender: "AI Chatbot", senderType: "ai", timestamp: "7:30 AM" },
      { id: 3, content: "The tinnitus has improved since starting treatment. The white noise machine at night has been a game changer.", sender: "Michael Rivera", senderType: "patient", timestamp: "7:48 AM" },
      { id: 4, content: "That's wonderful to hear! Consistent use of sound therapy often shows great results. Are you using the hearing protection at work?", sender: "AI Chatbot", senderType: "ai", timestamp: "7:48 AM" },
      { id: 5, content: "Yes, every day without fail. My coworkers are starting to do the same!", sender: "Michael Rivera", senderType: "patient", timestamp: "7:55 AM" },
      { id: 6, content: "That's excellent - you're setting a great example! Dr. Martinez will do a full reassessment at your December appointment. Keep up the great work!", sender: "AI Chatbot", senderType: "ai", timestamp: "7:55 AM" },
    ],
  },
  {
    id: 8,
    name: "Lisa Wong",
    location: "Santa Monica",
    lastMessage: "Need to cancel Friday's appointment - will reschedule",
    timestamp: "Yesterday",
    unread: false,
    urgent: false,
    vip: true,
    age: 55,
    gender: "Female",
    patientId: "#45828",
    phone: "(310) 555-0259",
    email: "lisa.wong@email.com",
    lastVisit: "Oct 25, 2024",
    diagnosis: "Meniere's disease - stable",
    contextNotes: "Long-term Meniere's patient, well-controlled on current regimen. Diuretic and low-sodium diet maintaining symptom control.",
    bulletPoints: [
      "Meniere's disease diagnosed 2018",
      "On hydrochlorothiazide and low-sodium diet",
      "Last vertigo episode was 4 months ago",
    ],
    recentTests: [
      { name: "Electrocochleography", date: "Oct 25, 2024" },
      { name: "Caloric Testing", date: "Oct 25, 2024" },
    ],
    treatmentPlan: "Continue current medication regimen. Strict low-sodium diet. Quarterly monitoring with hearing tests. Rescue medication for acute episodes.",
    appointments: [
      { title: "Quarterly Check-up", doctor: "Dr. Chen", date: "Fri, Jan 19", time: "10:00 AM", duration: "45 min", status: "scheduled" },
    ],
    messages: [
      { id: 1, content: "Hi, I need to make a change to my appointment.", sender: "Lisa Wong", senderType: "patient", timestamp: "Yesterday 4:30 PM" },
      { id: 2, content: "Of course, Mrs. Wong. How can I help you today?", sender: "Jeff S, El Segundo", senderType: "staff", timestamp: "Yesterday 4:35 PM" },
      { id: 3, content: "Need to cancel Friday's appointment - will reschedule", sender: "Lisa Wong", senderType: "patient", timestamp: "Yesterday 4:38 PM" },
      { id: 4, content: "No problem at all. Would you like me to find a new date now, or would you prefer to call back?", sender: "Jeff S, El Segundo", senderType: "staff", timestamp: "Yesterday 4:40 PM" },
      { id: 5, content: "I'll call back next week once I know my schedule better. Is that okay?", sender: "Lisa Wong", senderType: "patient", timestamp: "Yesterday 4:42 PM" },
      { id: 6, content: "Absolutely! I've cancelled Friday's appointment. Just give us a call whenever you're ready. Have a great evening!", sender: "Jeff S, El Segundo", senderType: "staff", timestamp: "Yesterday 4:45 PM" },
    ],
  },
];
