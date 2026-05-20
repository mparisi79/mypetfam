import type { Metadata } from 'next'
import CompletePetCareClient from './CompletePetCareClient'

export const metadata: Metadata = {
  title: 'Complete Pet Care — MyPetfam',
  description:
    "A lifetime of care. From your first exam through preventive, primary, emergency, specialty, and end-of-life care.",
}

export default function CompletePetCarePage() {
  return <CompletePetCareClient />
}
