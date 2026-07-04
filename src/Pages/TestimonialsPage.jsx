import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function TestimonialsPage() {
  return (
    <div>
      <title>Client Experiences & Testimonials | Ray Visuals Media</title>
      <meta
        name="description"
        content="Discover why top brands and agencies trust Ray Visuals Media. Read testimonials and success stories from our commercial videography and cinematic production clients."
      />
      <main>
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
