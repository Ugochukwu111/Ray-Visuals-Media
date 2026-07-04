import './Footer.css'
import logo from '/favicon-32x32.png'

export default function Footer() {
  return (
    <footer className="bg-primary text-inverse border">
      <div className="container  text-secondary  w-full">
        <div className="flex justify-between upper-container">
          <div>
            <figure>
              <img style={{
                width: 40,
                height:40,
                borderRadius: '.25rem',
              }} src={logo} alt="Ray Visuals Media Logo" />
            </figure>
            <h5 className="text-inverse">we capture reality</h5>
          </div>

          <div className="flex justify-between gap-2">
            <div className="">
              <h6 className="text-inverse">Services</h6>
              <ul>
                <li className='fw600'>Videography</li>
                <li className='fw600'>Acting</li>
                <li className='fw600'>Photography</li>
              </ul>
            </div>

            <div className="">
              <h6 className="text-inverse">Our Socials</h6>
              <ul>
                <li className='fw600'>X</li>
                <li className='fw600'>Instagram</li>
                <li className='fw600'>Whatsapp</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-inverse text-center large-text">Ray Visuals Media</h6>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Ray Visuals Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
