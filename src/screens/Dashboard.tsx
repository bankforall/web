import React, { FC } from "react"

const Dashboard: FC = () => {
  return (
<div className="max-w-sm w-full mx-auto rounded overflow-hidden shadow-lg font-sans">
    <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-4 mx-auto my-5">
            <div>You</div>
            <div>01</div>
        </div>
        <div className="grid grid-cols-1 gap-4 mx-auto">
            <div className="bg-[#7165E3] text-white font-bold rounded text-center px-20 py-10 ">
                <div className="font-thin text-l">Total Saving</div>
                <p className="font-bold text-3xl my-">Baht 10,000</p>
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-100 dark:text-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <span className="sr-only">Open dropdown</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                </button>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mx-7 my-7">
        <button className="bg-[#10b981] hover:bg-[#15803d] text-black py-2 px-3 rounded bg-opacity-50">Add money</button>
        <button className="bg-[#fbbf24] hover:bg-[#d97706] text-black py-2 px-4 rounded bg-opacity-50">Withdraw</button>
    </div>
    <div className="mx-3 my-7">
        <p className="mx-3 font-semibold text-l">Get your money working for you</p>
        <div>
            <div className="border-solid border-2 border-#a1a1aa text-left mx-3 mt-3 py-2 px-4 rounded">
                Save for an emergency

            </div>
        </div>
        
        <div className="border-solid border-2 border-#a1a1aa text-left mx-3 mt-3 py-2 px-4 rounded">Invest your money</div>
    </div>
    <div className="mx-3 my-7">
        <p className="mx-3 font-semibold text-l">Ways to earn tour money</p>
        <button className="border-solid border-2 border-#a1a1aa text-left mx-3 mt-3 py-2 px-12 rounded  bg-white hover:bg-gray-300">Invite your friends and get a bonus</button>
    </div>
        
</div>


  )
}
export default Dashboard;