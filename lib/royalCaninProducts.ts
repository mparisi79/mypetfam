// Royal Canin product catalog — v1 representative sample (14 products).
// Source: royalcanin.com/us via May 2026 web research.
//
// To expand: add rows below. The filter UI on /nutrition/royal-canin
// derives its options from the union of values present in this array,
// so no UI changes are needed when adding products with the existing
// taxonomy. New healthConcern slugs should be added to HEALTH_CONCERN_LABELS.
 
export type RoyalCaninProduct = {
  slug: string
  name: string
  productLine: 'Size Health Nutrition' | 'Breed Health Nutrition' | 'Feline Health Nutrition' | 'Veterinary Diet'
  species: 'dog' | 'cat'
  lifeStage: 'puppy' | 'kitten' | 'adult' | 'senior'
  breedSize: 'extra-small' | 'small' | 'medium' | 'large' | 'giant' | 'all-sizes'
  healthConcerns: HealthConcern[]
  isVeterinary: boolean
  description: string  // one-line shop card description
  productUrl: string   // royalcanin.com link
}
 
export type HealthConcern =
  | 'general-wellness'
  | 'digestive'
  | 'urinary'
  | 'skin-coat'
  | 'joint-mobility'
  | 'weight'
  | 'dental'
  | 'food-sensitivity'
  | 'hairball'
  | 'breed-specific'
 
export const HEALTH_CONCERN_LABELS: Record<HealthConcern, string> = {
  'general-wellness': 'General wellness',
  'digestive': 'Digestive health',
  'urinary': 'Urinary health',
  'skin-coat': 'Skin & coat',
  'joint-mobility': 'Joint & mobility',
  'weight': 'Weight management',
  'dental': 'Dental health',
  'food-sensitivity': 'Food sensitivity',
  'hairball': 'Hairball control',
  'breed-specific': 'Breed-specific',
}
 
export const LIFE_STAGE_LABELS: Record<RoyalCaninProduct['lifeStage'], string> = {
  'puppy': 'Puppy',
  'kitten': 'Kitten',
  'adult': 'Adult',
  'senior': 'Senior',
}
 
export const BREED_SIZE_LABELS: Record<RoyalCaninProduct['breedSize'], string> = {
  'extra-small': 'Extra small',
  'small': 'Small',
  'medium': 'Medium',
  'large': 'Large',
  'giant': 'Giant',
  'all-sizes': 'All sizes',
}
 
// Product line color treatments for the placeholder image area.
// Replace with real product photography when assets are available.
export const PRODUCT_LINE_STYLES: Record<RoyalCaninProduct['productLine'], { bg: string; accent: string }> = {
  'Size Health Nutrition':   { bg: '#FFF7ED', accent: '#E2231A' },
  'Breed Health Nutrition':  { bg: '#FEF3E8', accent: '#B91C1C' },
  'Feline Health Nutrition': { bg: '#FDF2F8', accent: '#9D174D' },
  'Veterinary Diet':         { bg: '#EFF6FF', accent: '#1E3A8A' },
}
 
export const ROYAL_CANIN_PRODUCTS: RoyalCaninProduct[] = [
  // ─── Dogs · Retail (Size Health Nutrition) ──────────────────────────────────
  {
    slug: 'small-puppy',
    name: 'Small Puppy',
    productLine: 'Size Health Nutrition',
    species: 'dog',
    lifeStage: 'puppy',
    breedSize: 'small',
    healthConcerns: ['general-wellness'],
    isVeterinary: false,
    description: 'Tailored nutrition for small breed puppies up to 22 lbs, supporting healthy growth and digestion.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/retail-products',
  },
  {
    slug: 'medium-adult',
    name: 'Medium Adult',
    productLine: 'Size Health Nutrition',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'medium',
    healthConcerns: ['general-wellness'],
    isVeterinary: false,
    description: 'Complete adult nutrition for medium breed dogs 23 to 55 lbs, with high-quality protein for lean muscle.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/retail-products',
  },
  {
    slug: 'large-adult',
    name: 'Large Adult',
    productLine: 'Size Health Nutrition',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'large',
    healthConcerns: ['general-wellness', 'joint-mobility'],
    isVeterinary: false,
    description: 'Adult nutrition for large breed dogs 56 to 100 lbs, supporting bone and joint health.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/size-health-nutrition/large-and-giant-range',
  },
  {
    slug: 'giant-adult',
    name: 'Giant Adult',
    productLine: 'Size Health Nutrition',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'giant',
    healthConcerns: ['general-wellness', 'joint-mobility', 'digestive'],
    isVeterinary: false,
    description: 'Daily nutrition for giant breed dogs over 100 lbs, with adapted kibble for jaw structure.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/size-health-nutrition/large-and-giant-range',
  },
  {
    slug: 'medium-mature-8plus',
    name: 'Medium Mature 8+',
    productLine: 'Size Health Nutrition',
    species: 'dog',
    lifeStage: 'senior',
    breedSize: 'medium',
    healthConcerns: ['general-wellness', 'joint-mobility'],
    isVeterinary: false,
    description: 'Senior nutrition for medium breed dogs 8 and older, supporting vitality and joint comfort.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/retail-products',
  },
 
  // ─── Dogs · Breed Health Nutrition ──────────────────────────────────────────
  {
    slug: 'yorkshire-terrier-adult',
    name: 'Yorkshire Terrier Adult',
    productLine: 'Breed Health Nutrition',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'extra-small',
    healthConcerns: ['breed-specific', 'skin-coat'],
    isVeterinary: false,
    description: 'Breed-specific nutrition for adult Yorkshire Terriers, supporting long coat and digestive health.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/bhn',
  },
  {
    slug: 'labrador-retriever-adult',
    name: 'Labrador Retriever Adult',
    productLine: 'Breed Health Nutrition',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'large',
    healthConcerns: ['breed-specific', 'weight', 'joint-mobility'],
    isVeterinary: false,
    description: 'Breed-specific nutrition for adult Labradors, supporting ideal weight and joint health.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products/bhn',
  },
 
  // ─── Dogs · Veterinary Diets ────────────────────────────────────────────────
  {
    slug: 'gastrointestinal-dog',
    name: 'Gastrointestinal',
    productLine: 'Veterinary Diet',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'all-sizes',
    healthConcerns: ['digestive'],
    isVeterinary: true,
    description: 'Therapeutic diet for adult dogs with acute or chronic digestive issues. Prescription required.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products',
  },
  {
    slug: 'urinary-so-dog',
    name: 'Urinary SO',
    productLine: 'Veterinary Diet',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'all-sizes',
    healthConcerns: ['urinary'],
    isVeterinary: true,
    description: 'Therapeutic diet that supports a urinary environment unfavorable to stone formation. Prescription required.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products',
  },
  {
    slug: 'hydrolyzed-protein-dog',
    name: 'Hydrolyzed Protein',
    productLine: 'Veterinary Diet',
    species: 'dog',
    lifeStage: 'adult',
    breedSize: 'all-sizes',
    healthConcerns: ['food-sensitivity', 'skin-coat', 'digestive'],
    isVeterinary: true,
    description: 'Hydrolyzed protein diet for dogs with food sensitivities or adverse food reactions. Prescription required.',
    productUrl: 'https://www.royalcanin.com/us/dogs/products',
  },
 
  // ─── Cats · Feline Health Nutrition (Retail) ────────────────────────────────
  {
    slug: 'kitten-feline',
    name: 'Kitten',
    productLine: 'Feline Health Nutrition',
    species: 'cat',
    lifeStage: 'kitten',
    breedSize: 'all-sizes',
    healthConcerns: ['general-wellness'],
    isVeterinary: false,
    description: 'Complete nutrition for kittens up to 12 months, supporting healthy growth and immune development.',
    productUrl: 'https://www.royalcanin.com/us/cats/products',
  },
  {
    slug: 'indoor-adult-feline',
    name: 'Indoor Adult',
    productLine: 'Feline Health Nutrition',
    species: 'cat',
    lifeStage: 'adult',
    breedSize: 'all-sizes',
    healthConcerns: ['general-wellness', 'hairball', 'weight'],
    isVeterinary: false,
    description: 'Tailored nutrition for indoor adult cats, with moderate calories and natural hairball reduction.',
    productUrl: 'https://www.royalcanin.com/us/cats/products',
  },
  {
    slug: 'aging-12plus-feline',
    name: 'Aging 12+',
    productLine: 'Feline Health Nutrition',
    species: 'cat',
    lifeStage: 'senior',
    breedSize: 'all-sizes',
    healthConcerns: ['general-wellness', 'joint-mobility'],
    isVeterinary: false,
    description: 'Senior cat nutrition for cats 12 and older, with adapted kibble and antioxidant complex.',
    productUrl: 'https://www.royalcanin.com/us/cats/products',
  },
 
  // ─── Cats · Veterinary Diets ────────────────────────────────────────────────
  {
    slug: 'urinary-so-feline',
    name: 'Urinary SO',
    productLine: 'Veterinary Diet',
    species: 'cat',
    lifeStage: 'adult',
    breedSize: 'all-sizes',
    healthConcerns: ['urinary'],
    isVeterinary: true,
    description: 'Therapeutic diet to support feline urinary health and dissolve struvite stones. Prescription required.',
    productUrl: 'https://www.royalcanin.com/us/cats/products',
  },
]
