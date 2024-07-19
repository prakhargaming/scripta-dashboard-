"use client";

import React, { useState } from 'react';
import { HomeIcon, UserIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/solid';
import { FaFileAlt, FaCheck, FaExclamation, FaTimes } from 'react-icons/fa';
import ItemsCol from '../components/Itemscol';
import { pdfjs } from 'react-pdf';
import Image from 'next/image';
import Sidebar from './Sidebar';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface ResumeItem {
  name: string;
  status: 'green' | 'yellow' | 'red';
  info?: string;
  imageUrl?: string;
  resumePath: string;
}

export default function Dashboard() {
  const resumes: ResumeItem[] = [
    { name: 'Aditya Paul', status: 'green', info: 'Detail info about Aditya Paul', resumePath: '/resumes/paper.pdf' },
    { name: 'Preston Frazier', status: 'green', info: 'Detail info about Preston Frazier', resumePath: '/resumes/paper.pdf' },
    { name: 'Mike Ross', status: 'green', info: 'Detail info about Mike Ross', resumePath: '/resumes/paper.pdf' },
    { name: 'Tim Lewis', status: 'yellow', info: 'Detail info about Tim Lewis', resumePath: '/resumes/paper.pdf' },
    { name: 'Shawn Spencer', status: 'red', info: 'Detail info about Shawn Spencer', resumePath: '/resumes/paper.pdf' },
    { name: 'Cody Bart', status: 'red', info: 'Detail info about Cody Bart', resumePath: '/resumes/paper.pdf' },
    { name: 'Jesse Pinkman', status: 'green', info: 'Detail info about Jesse Pinkman', resumePath: '/resumes/paper.pdf' },
    { name: 'Walter White', status: 'yellow', info: 'Detail info about Walter White', resumePath: '/resumes/paper.pdf' },
    { name: 'Saul Goodman', status: 'red', info: 'Detail info about Saul Goodman', resumePath: '/resumes/paper.pdf' },
  ];

  const [modalInfo, setModalInfo] = useState<ResumeItem | null>(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-tl from-blue-900 via-slate-900 to-blue-900">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 w-20 flex flex-col items-center py-4 space-y-6">
        <Image src={HomeIcon} /> {/* Logo */}
        <HomeIcon className="h-8 w-8 text-white" />
        <UserIcon className="h-8 w-8 text-white" />
        <DocumentTextIcon className="h-8 w-8 text-white" />
        <CogIcon className="h-8 w-8 text-white" />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 p-8">
        <div className="text-5xl text-white mb-8">Dashboard Analytics</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ItemsCol resumes={resumes} showStatus={true} title="Scored Resumes" icon={FaFileAlt} setModalInfo={setModalInfo} />
          <ItemsCol resumes={resumes} title="Qualified Resumes" icon={FaCheck} setModalInfo={setModalInfo} />
          <ItemsCol resumes={resumes} title="Unqualified Resumes" icon={FaTimes} setModalInfo={setModalInfo} />
          <ItemsCol resumes={resumes} title="Unfiltered Resumes (In Progress)" icon={FaFileAlt} setModalInfo={setModalInfo} />
            <Image
                src="/card.svg"
                alt="Description of SVG"
                width={0}
                height={0}
                className="glassCard2"
              />
        </div>
      </div>

      {modalInfo && (
        <div id="default-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-7xl h-5/6">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full flex flex-col">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{modalInfo.name}</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setModalInfo(null)}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex-grow p-4 md:p-5 overflow-auto">
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-2/3 h-full overflow-hidden rounded-lg">
                    <iframe 
                      src={modalInfo.resumePath} 
                      className="w-full h-full border-0 rounded-lg"
                      title={`${modalInfo.name}'s Resume`}
                      style={{ borderRadius: '0.5rem' }}
                    />
                  </div>
                  <div className="w-1/3 h-full overflow-auto">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {modalInfo.info}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  onClick={() => setModalInfo(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}