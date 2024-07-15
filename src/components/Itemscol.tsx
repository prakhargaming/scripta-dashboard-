"use client";

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/Table";
import { IconType } from 'react-icons';

interface ResumeItem {
  name: string;
  status: 'green' | 'yellow' | 'red';
  info?: string;
  imageUrl?: string;
  resumePath: string;
}

interface ItemsColProps {
  resumes: ResumeItem[];
  showStatus?: boolean;
  title?: string;
  icon: IconType; // Add an icon prop
  setModalInfo: (info: ResumeItem) => void;
}

function ItemsCol({ resumes, showStatus = false, title = "", icon: Icon, setModalInfo }: ItemsColProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resumes based on search query
  const filteredResumes = resumes.filter(resume =>
    resume.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden h-96 glassCard shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Icon className="text-white mr-2" /> {/* Add the icon before the title */}
          <span className="text-2xl font-light text-white">{title}</span>
        </div>
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

export default ItemsCol;
