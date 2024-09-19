import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange, faExternalLink, faAngleRight, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { Noto_Sans } from 'next/font/google';

// Define types for the components
type TabProps = {
  tabs: TabType[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
};

type TabType = {
  id: string;
  label: string;
};

type InnerTabProps = {
  innerTabs: InnerTabType[];
  activeInnerTab: string;
  onInnerTabClick: (tabId: string) => void;
};

type InnerTabType = TabType & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  external?: boolean;
};

type InputGroupProps = {
  id: string;
  type: 'radio' | 'checkbox';
  label: string;
};

const noto = Noto_Sans({ subsets: ['latin'] });

// Tab Navigation Component
const TabNavigation: React.FC<TabProps> = ({ tabs, activeTab, onTabClick }) => (
  <ul className="flex justify-between">
    {tabs.map((tab, index) => (
      <li
        key={tab.id}
        className={`w-1/4 flex justify-center ${activeTab === tab.id ? '' : 'bg-primary text-white'} ${
          index === 0 ? 'rounded-tl-lg' : ''
        } ${index === tabs.length - 1 ? 'rounded-tr-lg' : ''}`}
      >
        <button
          className="px-2 py-4 focus:underline w-full border-e-white border-e-2"
          onClick={() => onTabClick(tab.id)}
        >
          {tab.label}
        </button>
      </li>
    ))}
  </ul>
);

// Inner Tab Navigation Component
const InnerTabNavigation: React.FC<InnerTabProps> = ({ innerTabs, activeInnerTab, onInnerTabClick }) => (
  <ul className="flex border-b mb-4 text-xs font-bold">
    {innerTabs.map((tab) => (
      <li
        key={tab.id}
        className={`mr-4 ${activeInnerTab === tab.id ? 'border-b-2 border-black' : 'text-gray-400'}`}
      >
        <button className="px-4 py-2" onClick={() => onInnerTabClick(tab.id)}>
          <label className={tab.external ? 'text-secondary' : ''}>{tab.label}</label>
          {tab.external && <FontAwesomeIcon icon={tab.icon} className="ml-2 text-secondary" />}
        </button>
      </li>
    ))}
  </ul>
);

// Input Group Component (for radios and checkboxes)
const InputGroup: React.FC<InputGroupProps> = ({ id, type, label }) => (
  <div className="flex items-center mb-4">
    <input
      id={id}
      type={type}
      className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 hover:border-secondary accent-secondary"
    />
    <label htmlFor={id} className="ms-2 text-sm font-medium text-black dark:text-gray-300">
      {label}
    </label>
  </div>
);

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [activeInnerTab, setActiveInnerTab] = useState<string>('Flight');

  const tabs: TabType[] = [
    { id: 'tab1', label: 'Book' },
    { id: 'tab2', label: 'Flight status' },
    { id: 'tab3', label: 'Check-in' },
    { id: 'tab4', label: 'My trips' },
  ];

  const innerTabs: InnerTabType[] = [
    { id: 'Flight', label: 'Flight' },
    { id: 'Packages', label: 'Packages' },
    { id: 'Hotel', label: 'Hotel' },
    { id: 'Car', label: 'Car' },
    { id: 'Cruise', label: 'Cruise', icon: faExternalLink, external: true },
  ];

  return (
    <div className={`min-h-screen bg-gray-200 py-10 text-sm leading-4 ${noto.className}`}>
      <div className="max-w-xl mx-auto shadow-lg bg-white rounded-lg">
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

        <div className="p-6">
          {activeTab === 'tab1' && (
            <div className="space-y-4">
              <InnerTabNavigation
                innerTabs={innerTabs}
                activeInnerTab={activeInnerTab}
                onInnerTabClick={setActiveInnerTab}
              />

              <form>
                <div className="flex justify-between">
                  <InputGroup id="roundtrip" type="radio" label="Roundtrip" />
                  <InputGroup id="one-way" type="radio" label="One-way" />
                  <InputGroup id="checkbox1" type="checkbox" label="Default checkbox" />
                  <InputGroup id="checkbox2" type="checkbox" label="Default checkbox" />
                </div>

                <div className="flex justify-between">
                  <div className="w-5/12">
                    <label className="block font-medium">From*</label>
                    <input
                      type="text"
                      placeholder="Source"
                      className="mt-2 w-full p-3 border rounded-lg border-black focus:outline-secondary"
                    />
                  </div>
                  <div className="flex items-center justify-center align-middle">
                    <FontAwesomeIcon icon={faExchange} className="text-secondary text-lg p-8" />
                  </div>
                  <div className="w-5/12">
                    <label className="block font-medium">To*</label>
                    <input
                      type="text"
                      placeholder="Destination"
                      className="mt-2 w-full p-3 border border-black focus:outline-secondary rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="w-5/12">
                    <label className="block font-medium">Dates*</label>
                    <input
                      type="date"
                      className="mt-2 w-full p-3 border border-black focus:outline-secondary rounded-lg accent-secondary"
                    />
                  </div>
                  <div className="w-5/12">
                    <label className="block font-medium">Travelers</label>
                    <input
                      type="text"
                      placeholder="1 Adult"
                      className="mt-2 w-full p-3 border border-black focus:outline-secondary rounded-lg"
                    />
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
                    <a href="#" className="text-secondary text-lg">
                      Advanced search <FontAwesomeIcon icon={faAngleRight} className="text-lg" />
                    </a>
                    <p className="text-xs mt-1">(Certificates, multi-city and upgrades)</p>
                    <div className="mt-2 text-xs">
                      <p>
                        <a href="#" className="text-secondary underline underline-offset-4 text-xs">
                          Changed bag rules
                        </a>{' '}
                        and
                      </p>
                      <a
                        href="#"
                        className="text-secondary mt-4 underline underline-offset-4 text-xs"
                      >
                        fees for optional services
                      </a>
                    </div>
                  </div>
                  <div className="w-5/12">
                    <button className="bg-secondary text-white px-2 py-3 rounded-full border-secondary w-full">
                      Find Flights
                    </button>
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
};

export default Home;
