import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

import { cn } from '@/lib/utils';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded-md border bg-white p-4 text-black shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };

interface ItemsColProps {
  resumes: { name: string; status: string }[];
  showStatus?: boolean;
  title?: string;
}

const ItemsCol: React.FC<ItemsColProps> = ({ resumes, showStatus = false, title = 'Scored Resumes' }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden h-96 glassCard">
    <div className="flex items-center justify-between px-4 py-3">
      <span className="font-semibold text-white">{title}</span>
      <span className="text-blue-400">&gt;</span>
    </div>
    <div className="p-4 space-y-2 overflow-y-auto h-full">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th className="w-[200px]">Name</th>
            {showStatus && <th></th>}
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume, index) => (
            <tr key={index}>
              <td className="font-medium text-white">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span>{resume.name}</span>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div>
                      <p>{resume.name}</p>
                      <p>{resume.status}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </td>
              {showStatus && (
                <td>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(resume.status)}`}></div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ItemsCol;

function getStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-500';
    case 'inactive':
      return 'bg-red-500';
    case 'pending':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
}
