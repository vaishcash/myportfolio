import ContactPage from '@/components/ContactPage'
import Navbar from '@/components/Navbar'
import React from 'react'

function contact() {
  return (
    <div>
      <div className="z-50">
        <Navbar />
      </div>  

      <div>
        <ContactPage />
      </div>
    </div>
  );
}

export default contact