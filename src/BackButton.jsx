// src/components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//   -> Help user to naviagte

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-blue-400 text-black hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center fixed"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
      Back
    </button>
  );
};

export default BackButton;
