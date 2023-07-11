"use client";
import AppHeader from "@/components/header";
import Projects from "@/components/projects";
import Services from "@/components/services";
import ContactUs from "@/components/contactUs";
import AppFooter from "@/components/footer";
import AboutUs from "@/components/aboutUs";
import Theory from "@/components/theory";
import Testimonials from "@/components/testimonials";

export default function Home() {
  
  return (
    <main>
      <AppHeader />
      <Theory />
      <AboutUs />
      <Projects />
      <Services />
      <Testimonials/>
      <ContactUs />
      <AppFooter />
    </main>
  );
}
