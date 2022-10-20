import React from 'react';
import Image from 'next/image';
import IncomeTracker from '../public/assets/income_tracker.png';

const Projects = () => {
  return (
    <div className="flex flex-col ml-[120px]">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-3xl font-bold mb-10">Latest Work</h2>
      </div>

        {/* Grid row starts here */}
        <div className="grid items-center grid-cols-4 gap-5 font-inter">
            {/* One project card starts here */}
            <div className="w-[350px] h-[590px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
                <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
                    <Image
                    src={IncomeTracker}
                    alt="React-Ecommerce"
                    width={480}
                    height={400}
                    />

                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            React Income & Expense Tracker
                        </div>

                        <p className="text-sm text-gray-500">
                            This WPA application is developed with React.JS, and has the functionality of using voice commands 
                            to interact with the applications.
                        </p>
                    </div>

                    <div className="px-6 pt-2 pb-2 text-sm">
                        <button className="p-2 pb-3 pt-3">View Details</button>
                    </div>
                </div>
            </div>
            {/* One project card ends here */}
            
            {/* One project card starts here */}
            <div className="w-[350px] h-[590px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
                <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
                    <Image
                    src={IncomeTracker}
                    alt="React-Ecommerce"
                    width={480}
                    height={400}
                    />

                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            React Income & Expense Tracker
                        </div>

                        <p className="text-sm text-gray-500">
                            This WPA application is developed with React.JS, and has the functionality of using voice commands 
                            to interact with the applications.
                        </p>
                    </div>

                    <div className="px-6 pt-2 pb-2 text-sm">
                        <button className="p-2 pb-3 pt-3">View Details</button>
                    </div>
                </div>
            </div>
            {/* One project card ends here */}

            {/* One project card starts here */}
            <div className="w-[350px] h-[590px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
                <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
                    <Image
                    src={IncomeTracker}
                    alt="React-Ecommerce"
                    width={480}
                    height={400}
                    />

                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            React Income & Expense Tracker
                        </div>

                        <p className="text-sm text-gray-500">
                            This WPA application is developed with React.JS, and has the functionality of using voice commands 
                            to interact with the applications.
                        </p>
                    </div>

                    <div className="px-6 pt-2 pb-2 text-sm">
                        <button className="p-2 pb-3 pt-3">View Details</button>
                    </div>
                </div>
            </div>
            {/* One project card ends here */}

            {/* One project card starts here */}
            <div className="w-[350px] h-[590px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
                <div className="max-w-sm pt-[30px] overflow-hidden rounded shadow-lg">
                    <Image
                    src={IncomeTracker}
                    alt="React-Ecommerce"
                    width={480}
                    height={400}
                    />

                    <div className="px-6 py-2">
                        <div className="mb-2 text-xl font-bold">
                            React Income & Expense Tracker
                        </div>

                        <p className="text-sm text-gray-500">
                            This WPA application is developed with React.JS, and has the functionality of using voice commands 
                            to interact with the applications.
                        </p>
                    </div>

                    <div className="px-6 pt-2 pb-2 text-sm">
                        <button className="p-2 pb-3 pt-3">View Details</button>
                    </div>
                </div>
            </div>
            {/* One project card ends here */}

        </div>
        {/* Grid row starts here */}

        
    </div>
  )
}

export default Projects
