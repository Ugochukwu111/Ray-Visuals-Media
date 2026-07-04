import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppIcon.css";

export default function WhatsAppIcon() {
  return (
    <a
      className="whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
      href="https://api.whatsapp.com/send/?phone=2348123486338"
      title="whats app"
    >
      <FaWhatsapp size={50} />
    </a>
  );
}
