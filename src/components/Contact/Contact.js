import React, { useEffect } from "react";
import Aos from "aos";

let ContactSection = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      className="Contact-section-wrapper"
      data-aos="fade"
      data-aos-duration="1300"
      data-aos-delay="350"
      data-aos-easing="ease-out"
    >
      <p id="Contact-dest">h</p>
      <h1 className="What-next">
        <span>04-</span> Now! What Next?
      </h1>
      <p className="Hesitate">
        Hopefully you are satisfied! <br /> Don't hesitate to hire a friendly
        expert for your work. Whether you want to Hire me or just want to
        discuss your project, my inbox is always open for my dear clients.
        <br></br> <span>Thanks!</span>
      </p>
      <div className="contactBtns__cont">
        <a
          className="contactBtns contactBtn1"
          href="mailto:azharzaman.001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </a>
        <a
          className="contactBtns contactBtn2"
          href="https://api.whatsapp.com/send?phone=923107538437&text=&source=&data=&app_absent="
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
