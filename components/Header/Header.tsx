import React from 'react'

const Header = () => {
  return (
    <div className='bg-black m-2 rounded-2xl'>
        <div className="flex justify-between items-center  text-white p-2">
            <div>
                <p>Ramos Logo</p>
            </div>
            <div className='flex space-x-6 bg-gray-700 m-3'>
                <p>Dashboard</p>
                <p>Reports</p>
                <p>Documents</p>
                <p>History</p>
                <p>Settings</p>
            </div>
            <div>
                <button className="bg-white text-black py-3 px-8 rounded-lg">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header