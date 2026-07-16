import React from 'react'

export function Star({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`text-indigo-500 font-bold select-none glow-text ${className}`} {...props}>*</span>
  )
}
