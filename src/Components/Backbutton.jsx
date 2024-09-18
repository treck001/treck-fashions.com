import React from 'react'
import { useNavigate } from 'react-router-dom';

const Backbutton = ({path}) => {

    const navigate = useNavigate();

    const handleBack = () => {
      navigate(`${path}`);
    };

  return (
    <>
      <button   
        className="bg-[#ff4cb5] text-white hover:opacity-90 hover:text-white font-bold py-2 px-4 rounded m-2"
        onClick={handleBack}
      >
        Back
      </button>
    </>
  )
}

export default Backbutton