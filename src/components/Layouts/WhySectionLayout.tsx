import React from 'react'

export default function WhySectionLayout({ children }: any) {
  return (
    <section className="relative max-w-screen h-[75vh] overflow-hidden bg-[#F5F1FF]">
      <div className="w-full h-full absolute bg-[url('/whysection.png')] bg-cover"></div>
        {children}
    </section>
  )
}
