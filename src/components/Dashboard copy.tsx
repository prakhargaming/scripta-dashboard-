"use client";

import React, { useState } from 'react';
import { HomeIcon, UserIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/solid';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/Table";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function withResolvers() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

interface ResumeItem {
  name: string;
  status: 'green' | 'yellow' | 'red';
  info?: string;
  resumePath: string;
}

interface ItemsColProps {
  resumes: ResumeItem[];
  showStatus?: boolean;
  title?: string;
  setModalInfo: (info: ResumeItem) => void;
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
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 w-20 flex flex-col items-center py-4">
        <HomeIcon className="h-8 w-8 text-white mb-6" />
        <UserIcon className="h-8 w-8 text-white mb-6" />
        <DocumentTextIcon className="h-8 w-8 text-white mb-6" />
        <CogIcon className="h-8 w-8 text-white mb-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-20 p-8">
        <div className="text-5xl text-white mb-8">Dashboard Analytics</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ItemsCol resumes={resumes} showStatus={true} title="Scored Resumes 1" setModalInfo={setModalInfo} />
          <ItemsCol resumes={resumes} title="Scored Resumes 2" setModalInfo={setModalInfo} />
          <ItemsCol resumes={resumes} title="Scored Resumes 3" setModalInfo={setModalInfo} />
          <ItemsCol resumes={resumes} title="Scored Resumes 4" setModalInfo={setModalInfo} />
          <div className="bg-gray-800 rounded-lg overflow-hidden h-96 glassCard shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-2xl font-light text-white">Settings</span>
            </div>
          </div>
        </div>
      </div>

      {modalInfo && (
        <div id="default-modal" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{modalInfo.name}</h3>
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
              <div className="p-4 md:p-5 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-1/2">
                    <Document file={modalInfo.resumePath}>
                      <Page pageNumber={1} />
                    </Document>
                  </div>
                  <div className="w-1/2">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {modalInfo.info}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

function ItemsCol({ resumes, showStatus = false, title = "", setModalInfo }: ItemsColProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resumes based on search query
  const filteredResumes = resumes.filter(resume => 
    resume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden h-96 glassCard shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-2xl font-light text-white">{title}</span>
      </div>
      <div className="p-4 space-y-2 overflow-y-auto h-full no-scrollbar">
        <input
          type="text"
          placeholder="Search resumes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded glassCard"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Name</TableHead>
              {showStatus && <TableHead>Status</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredResumes.length > 0 ? (
              filteredResumes.map((resume, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-white">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => setModalInfo(resume)}
                    >
                      {resume.name}
                    </button>
                  </TableCell>
                  {showStatus && (
                    <TableCell>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(resume.status)}`}></div>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={showStatus ? 2 : 1} className="text-center text-gray-400">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
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
