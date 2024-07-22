// Dashboard.tsx

"use client";

import React, { useState } from 'react';
import { FaFileAlt, FaCheck, FaExclamation, FaTimes } from 'react-icons/fa';
import ItemsCol from '../components/Itemscol';
import Sidebar from './Sidebar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/Table";

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
  const [showAllResumes, setShowAllResumes] = useState(false);

  const handleTitleClick = () => {
    setShowAllResumes(true);
  };

  return (
    <div className="flex min-h-screen globalBackground">
      {/* Sidebar */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-[130.466px] p-8 relative">
        <div className="title-container relative h-60 pl-8">
          <div className="dashboardAnal3 absolute inset-0">Dashboard Analytics</div>
          <div className="dashboardAnal2 absolute inset-0">Dashboard Analytics</div>
          <div className="dashboardAnal1 absolute inset-0">Dashboard Analytics</div>
          <div className="dashboardAnal4 absolute inset-0">Dashboard Analytics</div>
        </div>
        {/* Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          <ItemsCol resumes={resumes} showStatus={true} title="Scored Resumes" numero={5} icon={FaFileAlt} setModalInfo={setModalInfo} onTitleClick={handleTitleClick} />
          <ItemsCol resumes={resumes} title="Qualified Resumes" numero={5} icon={FaCheck} setModalInfo={setModalInfo} onTitleClick={handleTitleClick} />
          <ItemsCol resumes={resumes} title="Unqualified Resumes" numero={5} icon={FaTimes} setModalInfo={setModalInfo} onTitleClick={handleTitleClick} />
        </div>
        <div className="h-6"></div>
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-2 gap-6">
          <ItemsCol resumes={resumes} title="Unfiltered Resumes (In Progress)" numero={3} icon={FaExclamation} setModalInfo={setModalInfo} onTitleClick={handleTitleClick} />
          <div className='glassCard2' />
        </div>
      </div>

      {/* Existing modal for resume details */}
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

     {/* New modal for all resumes */}
     {showAllResumes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  All Resumes
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setShowAllResumes(false)}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Name</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {resumes.map((resume, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-big text-lg text-white">
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() => {
                              setModalInfo(resume);
                              setShowAllResumes(false);
                            }}
                          >
                            {resume.name}
                          </button>
                        </TableCell>
                        <TableCell>
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(resume.status)}`}></div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => setShowAllResumes(false)}
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

function getStatusColor(status: ResumeItem['status']) {
  switch (status) {
    case 'green': return 'bg-green-500';
    case 'yellow': return 'bg-yellow-500';
    case 'red': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
}