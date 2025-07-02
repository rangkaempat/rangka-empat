const startProjectFormData = [
  {
    title: "Project Overview & Scope",
    questions: [
      {
        id: "projectType",
        question: "What type of website are you looking to build?",
        subtext:
          "Select the option that best fits your project. You may select more than one if unsure.",
        type: "checkbox",
        options: [
          "Company Website",
          "Portfolio Website",
          "Product / Service Showcase",
          "Online Store (E-Commerce)",
          "Custom Web Application",
          "Landing Page",
          "Website Rebrand / Refresh",
        ],
      },
      {
        id: "projectGoals",
        question: "What are you aiming to achieve with this project?",
        subtext:
          "Select the option that best fits your project. You may select more than one if unsure.",
        type: "checkbox",
        options: [
          "Build brand awareness",
          "Generate leads and sales",
          "Showcase Portfolio / Services",
          "Launch a Product or Campaign",
          "Educate or inform users",
          "Improve UX / Usability",
        ],
      },
      {
        id: "targetAudience",
        question: "Describe your ideal audience.",
        subtext: "Include any of the relevant audience characteristics below.",
        type: "textarea",
        placeholder:
          "> 18 - 35 year olds, male and female, in the Oil & Gas industry...",
        subfields: [
          "Demographics (Age, gender, occupation)",
          "Psychographics (Interests, motivations)",
          "Location / Region focus",
        ],
      },
      {
        id: "primaryCTA",
        question: "What actions should users take on your site?",
        subtext: "Select the option(s) that apply.",
        type: "checkbox",
        options: [
          "Submit a Contact Form",
          "Book an Appointment",
          "Buy a Product / Service",
          "Download content (PDF, app, etc.)",
          "Subscribe to Newsletter",
          "Call / Whatsapp",
          "Other:",
        ],
      },
    ],
  },
  {
    title: "Client Details",
    questions: [
      {
        id: "clientName",
        question: "Contact Person Name",
        type: "text",
        placeholder: "> John Doe",
      },
      {
        id: "clientEmail",
        question: "Email Address",
        type: "email",
        placeholder: "> johndoe@email.com",
      },
      {
        id: "clientPhone",
        question: "Phone",
        type: "tel",
        placeholder: "> 6012-3456789",
      },
      {
        id: "companyName",
        question: "Company Name",
        type: "text",
        placeholder: "> Rangka Empat Studio",
      },
      {
        id: "companyIndustry",
        question: "Industry",
        type: "text",
        placeholder: "> Oil & Gas",
      },
      {
        id: "companyDescription",
        question: "Company Description",
        subtext: "A short description of what your company does.",
        type: "textarea",
        placeholder:
          "> We are an established lubricants manufacturer with over 30 years of experience in the Oil & Gas Industry.",
      },
    ],
  },
  {
    title: "Schedule a Call",
    questions: [
      {
        id: "callTime",
        question: "When is the best time for a call?",
        type: "text",
        placeholder: "e.g. Weekdays after 6PM, or weekend mornings",
      },
      {
        id: "contactMethod",
        question: "How would you prefer we contact you?",
        type: "checkbox",
        options: ["Google Meet", "Zoom", "WhatsApp", "Phone Call", "Other:"],
      },
    ],
  },
];

export default startProjectFormData;
