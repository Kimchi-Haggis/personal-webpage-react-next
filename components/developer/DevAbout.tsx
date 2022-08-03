import Col2Box from '@components/common/box/Col2Box';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { Element } from 'react-scroll';

type Props = {}

const DevAbout = (props: Props) => {
  return (
    <Element name="devAbout">
        <SectionBox className="section-1 flex">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl text-right uppercase font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                    I'm dreaming of people's dreaming
                  </h1>
                  <div className="max-w-2xl mb-6 font-light my-40 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    <p>I believe that the world will be even better when people works for their dreams.</p>
                  </div>
                  {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Get started
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      Speak to Sales
                  </a>  */}
              </div>
              <div className="hidden opacity-80 lg:mt-0 lg:col-span-5 lg:flex lg:ml-10">
                  {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lssqtJJ0soQnXUcbYsjRz6uGQtleThME1Q&usqp=CAU" alt="dreams" />
              </div>                
          </div>
        </SectionBox>
    </Element>
  )
}

export default DevAbout;