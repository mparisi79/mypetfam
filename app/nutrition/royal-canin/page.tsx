import type { Metadata } from 'next'
import RoyalCaninClient from './RoyalCaninClient'

export const metadata: Metadata = {
  title: 'Royal Canin — MyPetfam',
  description: 'Precise, science-backed nutrition from Royal Canin — tailored to your pet\'s breed, size, and health needs.',
}

export default function RoyalCaninPage({
  searchParams,
}: {
  searchParams: { species?: string }
}) {
  // Default to dog if no species or an invalid value is passed.
  const species: 'dog' | 'cat' = searchParams.species === 'cat' ? 'cat' : 'dog'

  return <RoyalCaninClient initialSpecies={species} />
}
