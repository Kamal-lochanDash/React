import React from 'react';

const  ProfileCard=({onCloseCard})=> {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Card Title</h2>
        <p className="mb-4">This is a card.</p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          onClick={onCloseCard}
          
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
