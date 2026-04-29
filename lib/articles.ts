// Article schema for Complete Pet Care educational articles.
// Articles are populated from Mars-affiliated source publications (Kinship, Royal Canin,
// IAMS, WALTHAM, VCA, etc.) for internal design-system stress testing.

export type ArticleBlock =
  | { type: 'h2'; text: string; id: string }
  | { type: 'paragraph'; html: string }
  | { type: 'pullQuote'; quote: string; attribution: string; avatarSrc?: string; placeholder?: boolean }
  | { type: 'qualityOfCareCard'; eyebrow: string; title: string; body: string; imageSide: 'left' | 'right'; imageAccent: 'mint' | 'pink' | 'lavender'; placeholder?: boolean }
  | { type: 'darkSection'; blocks: ArticleBlock[] }

export type ArticlePhase = 'all' | 'puppy' | 'adult' | 'senior' | 'end-of-life'

export type CareTypeId =
  | 'getting-started'
  | 'healthy'
  | 'ongoing'
  | 'emergency'
  | 'specialized'
  | 'end-of-life'
  | 'nutrition'

export type Article = {
  slug: string
  phase: ArticlePhase
  careType: CareTypeId
  title: string
  accentWordIndex?: number // 0-based index of word in title to highlight
  heroAccent?: 'pink' | 'mint' | 'lavender' // placeholder hero block color
  subtitle: string
  readMinutes: number
  sourceUrl: string
  sourcePublication: string
  mainTakeaways?: string[]
  body: ArticleBlock[]
  faqs?: { question: string; answer: string; placeholder?: boolean }[]
  relatedResources?: {
    kind: 'find-care' | 'related-guide'
    title: string
    description: string
    href: string
    placeholder?: boolean
  }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'is-grain-free-diet-good-for-dogs',
    phase: 'all',
    careType: 'nutrition',
    title: 'Is a Grain-Free Diet Good For Dogs?',
    accentWordIndex: 4, // "Good"
    heroAccent: 'lavender',
    subtitle:
      'We detail everything you need to know. Find out the scoop on whether a grain-free diet is the right choice for your pup.',
    readMinutes: 7,
    sourceUrl: 'https://www.kinship.com/dog-nutrition/is-grain-free-good-dogs',
    sourcePublication: 'Kinship',
    mainTakeaways: [
      'Grain-free diets have increased in popularity due to some clever marketing ploys.',
      'Because dogs are omnivores, they can get valuable nutrition from grains that need to be replaced by other ingredients in a grain-free diet to be complete and balanced.',
      'Dogs with grain allergies or intolerances are the only pups who truly require a grain-free diet, and these conditions are fairly rare.',
      "If you're considering a grain-free diet, speak to your veterinarian first to make sure it's right for your pup.",
    ],
    body: [
      {
        type: 'h2',
        text: 'Dog nutrition is a hot topic for dog parents.',
        id: 'dog-nutrition-hot-topic',
      },
      {
        type: 'paragraph',
        html: 'Dog nutrition is a hot topic for dog parents. They want to feed the best option to keep their pup as healthy and happy for as long as possible, which comes with a lot of questions. Is organic or natural food better? Do you feed kibble, fresh, or raw diets?',
      },
      {
        type: 'paragraph',
        html: "And then, of course, there's the grain free conundrum. Is grain-free the best food for dogs? The truth is that grain-free diets aren't necessary for the vast majority of dogs as grains provide many essential nutrients.",
      },
      {
        type: 'h2',
        text: 'What are grain-free dog foods?',
        id: 'what-are-grain-free-dog-foods',
      },
      {
        type: 'paragraph',
        html: 'Dog food that is considered grain-free doesn\'t include any grain. That means no wheat, corn, barley, oats, <a href="#">rice</a>, rye, or any of their byproducts. These are typically added to dog foods as sources of carbohydrates, protein, and fiber, so grain-free dog foods have to use other ingredients, such as potatoes, <a href="#">sweet potatoes</a>, lentils, and peas to replace them.',
      },
      {
        type: 'h2',
        text: 'Nutritional Aspects',
        id: 'nutritional-aspects',
      },
      {
        type: 'paragraph',
        html: "The big reason that dog parents switch their dogs to a grain-free diet is the belief that it is more nutritious and healthier than those that contain grains. This is such a broad statement that it can't be evaluated except on an individual basis. This means that some grain-free diets may be healthier when compared to some diets that contain grain and vice versa; it comes down to what exactly you're comparing.",
      },
      {
        type: 'paragraph',
        html: "Overall, grain-free diets aren't necessarily healthier as grains provide many benefits to a dog's diet, including being a carbohydrate, protein, and fiber source. However, either diet can be very nutritious if it is complete and balanced and contains whole food ingredients.",
      },
      {
        type: 'pullQuote',
        quote:
          "We can usually diagnose a cruciate tear in the exam room. The drawer test is very reliable — if the joint moves forward when we apply pressure, we know what we're dealing with.",
        attribution: 'Dr. Sarah Chen, Primary Care, BluePearl – Chicago',
        placeholder: true,
      },
      {
        type: 'h2',
        text: 'Popularity and marketing of grain-free dog foods',
        id: 'popularity-and-marketing',
      },
      {
        type: 'paragraph',
        html: "So, if grain-free dog foods aren't necessarily healthier than the alternatives, how did they get so much hype? It all boils down to marketing. With more and more people learning about gluten intolerance and other issues with the digestion of grains in humans, they tend to translate this to their dog's health as well. But the fact of the matter is dogs are omnivores. They require both meat and plant sources in their diet and are typically able to digest grains without issue.",
      },
      {
        type: 'paragraph',
        html: "With all of the dog food brands out there, it can be hard to stand out, so some brands have taken to producing grain-free diets as something they feel is new and different and sure to trigger some dog parents' sensitivities. If you ask most veterinarians, a grain-free diet is more of a marketing strategy than a healthier alternative for most dogs.",
      },
      {
        type: 'qualityOfCareCard',
        eyebrow: 'Quality of care',
        title: 'Unified teams, elevating care everywhere',
        body: "Our commitment to advancing care guides how we support our teams and shape the future of the veterinary profession. With the global strength of Mars Petcare behind us, we're able to raise clinical standards and drive meaningful innovation. Reaching more pets in more places than any other veterinary organization, Mars Veterinary Health is helping strengthen veterinary medicine and build a brighter future for pets and the people who care for them.",
        imageSide: 'left',
        imageAccent: 'mint',
        placeholder: true,
      },
      {
        type: 'qualityOfCareCard',
        eyebrow: 'Quality of care',
        title: 'Unified teams, elevating care everywhere',
        body: "Our commitment to advancing care guides how we support our teams and shape the future of the veterinary profession. With the global strength of Mars Petcare behind us, we're able to raise clinical standards and drive meaningful innovation. Reaching more pets in more places than any other veterinary organization, Mars Veterinary Health is helping strengthen veterinary medicine and build a brighter future for pets and the people who care for them.",
        imageSide: 'right',
        imageAccent: 'mint',
        placeholder: true,
      },
    ],
    faqs: [
      {
        question: 'Should I give my dog pain medication at home?',
        answer:
          'Always check with your veterinarian first. Many human pain medications are toxic to dogs, even in small doses. Your vet can recommend safe, dog-specific options if pain relief is needed.',
        placeholder: true,
      },
      {
        question: "How do I know if it's a sprain vs a break?",
        answer:
          "It can be hard to tell at home. Both can cause limping, swelling, and pain. If your dog won't bear weight on the leg or the limb looks deformed, see a vet promptly.",
        placeholder: true,
      },
      {
        question: 'Can limping wait until tomorrow?',
        answer:
          "Mild limping that improves with rest is usually safe to monitor overnight. Severe limping, refusal to bear weight, or visible injury warrant same-day care — don't wait.",
        placeholder: true,
      },
      {
        question: 'What will the vet actually do?',
        answer:
          'The vet will examine the leg, check range of motion, and may recommend X-rays. Treatment depends on the cause — rest and medication for sprains, sometimes surgery for fractures or ligament tears.',
        placeholder: true,
      },
    ],
    relatedResources: [
      {
        kind: 'find-care',
        title: 'Find care',
        description: 'Locate an orthopaedic specialist near you',
        href: '/find-care',
        placeholder: true,
      },
      {
        kind: 'related-guide',
        title: 'Related guide',
        description: 'What to expect after orthopaedic surgery',
        href: '#',
        placeholder: true,
      },
      {
        kind: 'related-guide',
        title: 'Related guide',
        description: 'My dog is limping — what do I do?',
        href: '#',
        placeholder: true,
      },
    ],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug)
}

export function getArticlesByPhase(phase: ArticlePhase): Article[] {
  return ARTICLES.filter((a) => a.phase === phase)
}

export function getArticlesByCareType(careType: CareTypeId): Article[] {
  return ARTICLES.filter((a) => a.careType === careType)
}
