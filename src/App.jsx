import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Answer1 from "./components/Answer_1.jsx"
import Answer2 from "./components/Answer_2.jsx"
import Answer3 from "./components/Answer_3.jsx"
import Answer4 from "./components/Answer_4.jsx"
import Answer5 from "./components/Answer_5.jsx"
import Answer6 from "./components/Answer_6.jsx"
import Answer7 from "./components/Answer_7.jsx"
import Answer8 from "./components/Answer_8.jsx"
import Answer9 from "./components/Answer_9.jsx"

const navigation = [
  { name: 'Question 1', id: 'answer1' },
  { name: 'Question 2', id: 'answer2' },
  { name: 'Question 3', id: 'answer3' },
  { name: 'Question 4', id: 'answer4' },
  { name: 'Question 5', id: 'answer5' },
  { name: 'Question 6', id: 'answer6' },
  { name: 'Question 7', id: 'answer7' },
  { name: 'Question 8', id: 'answer8' },
  { name: 'Question 9', id: 'answer9' },
 
]

function App() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const [activeSection, setActiveSection] = useState('');

      const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth',block: 'center' });
        setActiveSection(id); 
        setMobileMenuOpen(false)
      };

  return (
    <>
      <div className="bg-white ">
        <header className="fixed bg-slate-200 inset-x-0 top-0 z-50">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1 space-x-3">
              <a href="#" className="-m-1.5 p-1.5">
                
                <img
                  alt=""
                  src={reactLogo}
                  className="h-8 w-auto"
                />
              </a>
              <span className=" text-2xl">My Sample Site</span>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 mr-[10%]">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold ${
                  activeSection === item.id ? 'text-blue-500' : 'text-gray-900'
                }`}
              >
                {item.name}
              </button>
              ))}
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <img
                    alt=""
                    src={reactLogo}
                    className="h-8 w-auto"
                  /> 
                </a>
                <span className=" text-2xl">My Sample Site</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (

                      <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-gray-50 ${
                        activeSection === item.id ? 'text-blue-500' : 'text-gray-900'
                      }`}
                      >
                
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div className='space-y-12 sm:space-y-6'>
          <Answer1  />
          <Answer2  />
          <Answer3 />
          <Answer4  />
          <Answer5  />
          <Answer6  />
          <Answer7  />
          <Answer8  />
          <Answer9  />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
