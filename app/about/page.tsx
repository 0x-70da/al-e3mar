import type { Metadata } from "next";
import { HardHat, HeartHandshake, Ruler, ShieldCheck } from "lucide-react";
import HeroSection from "./sections/HeroSection";
import AboutCompanySection from "./sections/AboutCompanySection";
import CompanyAcheivmentsSection from "./sections/CompanyAcheivmentsSection";
import MissionVisionSection from "./sections/MissionVisionSection";
import GuideSection from "./sections/GuideSection";
import ApproachSection from "./sections/ApproachSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet the people and principles behind our considered approach to construction.",
};

const values = [
  {
    icon: Ruler,
    title: "Quality",
    text: "Maintaining high standards throughout every stage of construction.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    text: "Building relationships through honesty, transparency, and accountability.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    text: "Prioritizing safe working practices and responsible execution.",
  },
  {
    icon: HardHat,
    title: "Commitment",
    text: "Working closely with clients to meet agreed expectations and goals.",
  },
];
const approach = [
  [
    "01",
    "Understand",
    "We listen carefully to your needs, ambitions, and the conditions around your project.",
  ],
  [
    "02",
    "Plan",
    "We turn the brief into a clear, considered plan with the right people and sequence.",
  ],
  [
    "03",
    "Build",
    "Skilled teams execute with precision, communication, and respect for the details.",
  ],
  [
    "04",
    "Deliver",
    "We inspect, refine, and hand over work that meets the agreed standard.",
  ],
];
const projects = [
  {
    image: "/home.jpg",
    title: "Modern residential villa",
    category: "Residential",
    text: "A calm, light-filled home shaped around everyday living.",
  },
  {
    image: "/highBuilding.jpg",
    title: "Commercial landmark",
    category: "Commercial",
    text: "A confident workplace designed for a changing city.",
  },
  {
    image: "/insidehouse.jpg",
    title: "Quietly detailed interiors",
    category: "Interior finishing",
    text: "Material, craft, and proportion brought together with intent.",
  },
];

export default function AboutPage(): React.ReactNode {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutCompanySection />
      <CompanyAcheivmentsSection />
      <MissionVisionSection />
      <GuideSection values={values} />
      <ApproachSection approach={approach} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </main>
  );
}
