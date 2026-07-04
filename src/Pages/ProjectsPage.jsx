import ProjectSection from "../components/ProjectSection";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div>
      <title>
        Selected Projects | Premium Videography Portfolio | Ray Visuals Media
      </title>
      <meta
        name="description"
        content="Explore a curated portfolio of high-end commercial, editorial, and cinematic brand films by Ray Visuals Media. See how we bring bold concepts to life on screen."
      />
      <main>
        <ProjectSection />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
