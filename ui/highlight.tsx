import React from 'react'

export const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden italic bg-lightblue rounded-xl px-3 py-2 md:px-8 md:py-6">
    <div className="w-1.5 h-full absolute top-0 left-0 bg-primary" />
    <blockquote>{children}</blockquote>
  </div>
)
