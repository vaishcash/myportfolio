
import Navbar from '@/components/Navbar'
import Resume from '@/components/ResumePage'
import React from 'react'

function resume() {
  return (
    <div>
      <div className="z-10">
        <Navbar />
      </div>

      <div>
        <Resume />
      </div>
    </div>
  );
}

export default resume;