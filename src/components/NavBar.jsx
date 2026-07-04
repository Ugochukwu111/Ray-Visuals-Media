import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import './NavBar.css';
import logo from '/favicon-32x32.png';

function NavBar() {
  const navLinks = [
    { path: "/testimonials", name: "Testimonials" },
    { path: "/about", name: "Projects" },
  ];

  return (
    <nav className="flex items-center justify-center">
       <div className="flex items-center justify-center logo-nav-bar-wrapper">  
        
        <NavLink to="/">
          <img 
            src={logo} 
            height={100} 
            width={100} 
            style={{ height: 30, width: 30, borderRadius: '.25rem', marginRight: '.5em' }} 
            alt="" 
          />
        </NavLink>
        
        <ul className="flex gap-2 items-center justify-center w-fit">
          {navLinks.map((link) => (
            <li key={link.path} className="fw600">
              <NavLink 
                to={link.path} 
                className="tab-link text-primary"
              >
                {({ isActive }) => (
                  <>
                    <span style={{ position: 'relative', zIndex: 1, opacity: isActive ? 1 : 0.8 }}>
                      {link.name}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="main-nav-pill"
                        className="tab-bubble"
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}

          <li className="fw600 ">
            <NavLink to="/bookings" className="bg-white text-primary flex items-center gap-1">
              Contact <ArrowRight size={18} />
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default NavBar;