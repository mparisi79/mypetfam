'use client'

import Image from 'next/image'
import { useState } from 'react'

const BRANDS = ['All brands', 'Banfield', 'BluePearl', 'VCA'] as const
const CARE_TYPES = ['All care', 'Urgent', 'Emergency', 'Preventive', 'Primary', 'Specialty'] as const

export default function FindCarePage() {
  const [zip, setZip] = useState('')
  const [brand, setBrand] = useState('All brands')
  const [careType, setCareType] = useState('All care')

  return (
    <>
      <section style={{ background: 'var(--navy)' }} className="text-center px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.1em] uppercase mb-4 block" style={{ color: 'var(--teal-bright)' }}>
            Find Care
          </span>
          <h1 className="font-serif text-[clamp(36px,5vw,56px)] text-white leading-[1.1] mb-4">
            Find the right care<br />from vets you can trust.
          </h1>
          <p className="text-lg font-light leading-[1.7]" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Over 2,000 locations working together to care for your pet.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-16 items-start">

            <div>
              <div className="rounded-2xl p-6 mb-6 border" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
                <span className="block text-[12px] font-semibold tracking-[0.06em] uppercase mb-3" style={{ color: 'var(--gray-500)' }}>
                  Find a location
                </span>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Enter ZIP code or city..."
                    className="flex-1 bg-white border rounded-xl px-4 py-3 text-[15px] outline-none transition-all focus:ring-2"
                    style={{ borderColor: 'var(--gray-200)', color: 'var(--gray-800)' }}
                  />
                  <button
                    className="text-white rounded-xl px-5 text-xl hover:opacity-90 transition-opacity"
                    style={{ background: 'var(--teal)' }}
                  >
                    →
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap mt-4">
                  {BRANDS.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBrand(b)}
                      className="text-[13px] font-medium px-4 py-2 rounded-full border transition-all"
                      style={{
                        borderColor: brand === b ? 'var(--teal)' : 'var(--gray-200)',
                        background: brand === b ? 'var(--teal-light)' : 'white',
                        color: brand === b ? 'var(--teal)' : 'var(--gray-800)',
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6 border" style={{ background: 'var(--cream)', borderColor: 'var(--gray-200)' }}>
                <span className="block text-[12px] font-semibold tracking-[0.06em] uppercase mb-3" style={{ color: 'var(--gray-500)' }}>
                  Filter by care type
                </span>
                <div className="flex gap-2 flex-wrap">
                  {CARE_TYPES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setCareType(t)}
                      className="text-[13px] font-medium px-4 py-2 rounded-full border transition-all"
                      style={{
                        borderColor: careType === t ? 'var(--teal)' : 'var(--gray-200)',
                        background: careType === t ? 'var(--teal-light)' : 'white',
                        color: careType === t ? 'var(--teal)' : 'var(--gray-800)',
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="rounded-2xl overflow-hidden border relative flex items-end"
              style={{ height: 500, borderColor: 'var(--gray-200)', background: 'var(--gray-100)' }}
            >
              <Image
                src="https://www.mypetfam.com/_next/image?url=%2Fimages%2Flocation-module%2Ffallback-dog.png&w=640&q=85"
                alt="Find care"
                fill
                className="object-cover object-top opacity-70"
              />
              <div className="relative z-10 m-5 bg-white rounded-xl p-4 flex items-center gap-4 shadow-lg w-[calc(100%-40px)]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0" style={{ background: 'var(--teal-light)' }}>
                  📍
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold" style={{ color: 'var(--navy)' }}>2,000+ hospitals in our network</h4>
                  <p className="text-[13px]" style={{ color: 'var(--gray-500)' }}>Search above to find your nearest location</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
