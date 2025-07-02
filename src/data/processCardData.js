import image1 from "/src/assets/processCard/process-discovery-&-strategy.webp";
import image2 from "/src/assets/processCard/process-design-&-development.webp";
import image3 from "/src/assets/processCard/process-launch-&-delivery.webp";
import image4 from "/src/assets/processCard/process-support-&-growth.webp";

const processCardData = [
  {
    id: "01.",
    title: "Discovery & Strategy",
    description:
      "We begin with getting to know you—your story, your goals, and your audience.",
    features: [
      "Brand Research & Competitor Analysis",
      "Clear Project Roadmap",
      "Strategy & Planning",
    ],
    image: image1,
  },
  {
    id: "02.",
    title: "Design & Development",
    description:
      "This is where creativity and tech meet. Expect thoughtful design, smooth functionality, and pixel-perfect execution.",
    features: [
      "Wireframes & Prototypes",
      "UI/UX Design",
      "Front-End & Back-End Development",
      "SEO & Performance Optimization",
    ],
    image: image2,
  },
  {
    id: "03.",
    title: "Launch & Delivery",
    description:
      "We make sure everything’s ready for the spotlight - clean, tested and polished.",
    features: [
      "Cross-Browser & Device Testing",
      "Final Adjustments",
      "Launch & Deployment",
      "Onboarding & Handover",
    ],
    image: image3,
  },
  {
    id: "04.",
    title: "Support & Growth",
    description:
      "We’re still here post-launch, helping you stay sharp and scalable.",
    features: [
      "Monthly Maintenance",
      "Content Updates",
      "Performance Tracking & Reporting",
      "SEO Improvements",
    ],
    image: image4,
  },
];

export default processCardData;
