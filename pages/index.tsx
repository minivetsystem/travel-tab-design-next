import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange, faExternalLink, faAngleRight, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Noto_Sans } from 'next/font/google'

const noto = Noto_Sans({ subsets: ['latin'] })

export default function Home() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeInnerTab, setActiveInnerTab] = useState('Flight');

  const handleTabClick = (tabId: string) => setActiveTab(tabId);
  const handleInnerTabClick = (innerTab: string) => setActiveInnerTab(innerTab);

  return (
    <div className={`min-h-screen bg-gray-200 py-10 text-sm leading-4 ${noto.className}`}>
      <div className="max-w-xl mx-auto shadow-lg bg-white rounded-lg">
        <ul className="flex justify-between">
          <li className={`w-1/4 outline-black flex justify-center ${activeTab === 'tab1' ? '' : 'bg-primary text-white rounded-tl-lg'}`}>
            <button className="px-2 py-4 focus:underline rounded-tl-lg w-full border-solid border-e-white border-e-2" onClick={() => handleTabClick('tab1')}>Book</button>
          </li>
          <li className={`w-1/4 flex justify-center ${activeTab === 'tab2' ? '' : 'bg-primary text-white'}`}>
            <button className="px-2 py-4 focus:underline w-full border-solid border-e-white border-e-2" onClick={() => handleTabClick('tab2')}>Flight status</button>
          </li>
          <li className={`w-1/4 flex justify-center ${activeTab === 'tab3' ? '' : 'bg-primary text-white'}`}>
            <button className="px-2 py-4 focus:underline w-full border-e-white border-e-2" onClick={() => handleTabClick('tab3')}>Check-in</button>
          </li>
          <li className={`w-1/4 flex justify-center ${activeTab === 'tab4' ? '' : 'bg-primary text-white rounded-tr-lg'}`}>
            <button className="px-2 py-4 focus:underline rounded-tr-lg w-full" onClick={() => handleTabClick('tab4')}>My trips</button>
          </li>
        </ul>

        <div className="p-6">
          {activeTab === 'tab1' && (
            <div className="space-y-4">
              <ul className="flex border-b mb-4 text-xs font-bold">
                <li className={`mr-4 ${activeInnerTab === 'Flight' ? 'border-b-2 border-black' : 'text-gray-400'}`}>
                  <button className="px-4 py-2" onClick={() => handleInnerTabClick('Flight')}>Flight</button>
                </li>
                <li className={`mr-4 ${activeInnerTab === 'Packages' ? 'border-b-2 border-black' : 'text-gray-400'}`}>
                  <button className="px-4 py-2" onClick={() => handleInnerTabClick('Packages')}>Packages</button>
                </li>
                <li className={`mr-4 ${activeInnerTab === 'Hotel' ? 'border-b-2 border-black' : 'text-gray-400'}`}>
                  <button className="px-4 py-2" onClick={() => handleInnerTabClick('Hotel')}>Hotel</button>
                </li>
                <li className={`mr-4 ${activeInnerTab === 'Car' ? 'border-b-2 border-black' : 'text-gray-400'}`}>
                  <button className="px-4 py-2" onClick={() => handleInnerTabClick('Car')}>Car</button>
                </li>
                <li className="mr-4">
                  <button className="px-4 py-2 flex items-center text-secondary" onClick={() => handleInnerTabClick('Cruise')}>
                    Cruise <FontAwesomeIcon icon={faExternalLink} className="ml-2" />
                  </button>
                </li>
              </ul>

              <form>
                <div className='flex justify-between'>
                <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 hover:border-secondary accent-secondary"/>
                    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-black dark:text-gray-300">Roundtrip</label>
                </div>

                <div className="flex items-center mb-4">
                    <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 hover:border-secondary accent-secondary"/>
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-black dark:text-gray-300">One-way</label>
                </div>


                <div className="flex items-center mb-4">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded hover:border-secondary accent-secondary" />
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-black dark:text-gray-300">Default checkbox</label>
                </div>

                <div className="flex items-center mb-4">
                    <input id="default-checkbox-1" type="checkbox" value="" className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded hover:border-secondary accent-secondary" />
                    <label htmlFor="default-checkbox-1" className="ms-2 text-sm font-medium text-black dark:text-gray-300">Default checkbox</label>
                </div>
                </div>

                <div className="flex justify-between">
                  <div className='w-5/12'>
                    <label className="block font-medium">From*</label>
                    <input type="text" placeholder="Source" className="mt-2 w-full p-3 border rounded-lg border-black focus:outline-secondary" />
                  </div>
                  <div className="flex items-center justify-center align-middle">
                    <FontAwesomeIcon icon={faExchange} className="text-secondary text-lg p-8" />
                  </div>
                  <div className='w-5/12'>
                    <label className="block font-medium">To*</label>
                    <input type="text" placeholder="Destination" className="mt-2 w-full p-3 border border-black focus:outline-secondary rounded-lg" />
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className='w-5/12'>
                    <label className="block font-medium">Dates*</label>
                    <input type="date" className="mt-2 w-full p-3 border border-black focus:outline-secondary rounded-lg accent-secondary" />
                  </div>
                  <div className='w-5/12'>
                    <label className="block font-medium">Travelers</label>
                    <input type="text" placeholder="1 Adult" className="mt-2 w-full p-3 border border-black focus:outline-secondary rounded-lg" />
                  </div>
                </div>

                <div className="flex justify-start mt-8">
                  <select className="w-5/12 p-3 border border-black focus:outline-secondary rounded-lg bg-white">
                    <option>Economy</option>
                    <option>Business</option>
                  </select>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="w-5/12">
                    <a href="#" className='text-secondary text-lg'>Advanced search <FontAwesomeIcon icon={faAngleRight} className='text-lg'/></a>
                    <p className='text-xs mt-1'>(Certificates, multi-city and upgrades)</p>

                    <div className='mt-2 text-xs'>
                      <p><a href="#" className='text-secondary underline underline-offset-4 text-xs'>Changed bag rules</a> and</p>
                      <a href="#" className='text-secondary mt-4 underline underline-offset-4 text-xs'>fees for optional services</a> 
                    </div>
                  </div>
                  <div className="w-5/12">
                    <button className="bg-secondary text-white px-2 py-3 rounded-full border-secondary w-full">Find Flights</button>
                    <button className="border border-secondary text-secondary px-2 py-3 rounded-full w-full mt-4">
                      <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                      Find your travel credits
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'tab2' && <div>Flight status content...</div>}
          {activeTab === 'tab3' && <div>Check-in content...</div>}
          {activeTab === 'tab4' && <div>My trips content...</div>}
        </div>
      </div>
    </div>
  );
}
