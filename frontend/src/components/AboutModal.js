import React, { useState } from 'react';
import './AboutModal.css';

function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="aboutButton" onClick={() => setIsOpen(true)}>ABOUT</button>
      {isOpen && (
        <div className="modal">
          <button className="closeButton" onClick={() => setIsOpen(false)}>X</button>
          <div>
            <p><strong>Introducing Our Easy-to-Use Information Entry System</strong></p>

            <p>Our information entry system is designed with simplicity and accessibility in mind, making it incredibly easy for anyone to use without the need for specialized equipment or technical expertise. Whether you are at home, in the office, or on the go, our system is engineered to be fully operational from any personal electronic device, ensuring you can enter and modify data whenever and wherever necessary.</p>

            <p>The system ensures that all entered data adheres to a standardized format, guaranteeing that all essential information is captured accurately. This uniformity is crucial for streamlining data processing and enhancing future data analysis capabilities.</p>

            <p>Looking ahead, our system is built with scalability in mind. It can be further developed to integrate with other data platforms, such as Salesforce, enhancing its utility with additional features like AI analytics and graphical data visualizations. This adaptability makes it an excellent investment for organizations looking to expand their data management tools and capabilities in the future.</p>
          </div>
          <button className="closeButton" onClick={() => setIsOpen(false)}>CLOSE</button>
        </div>
      )}
    </>
  );
}

export default AboutModal;
