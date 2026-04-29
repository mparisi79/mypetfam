export default function MainTakeaways({ takeaways }: { takeaways: string[] }) {
  return (
    <div className="rounded-[40px] md:rounded-[60px] lg:rounded-[80px] border-[3px] border-paper-5 p-8 md:p-12 lg:p-[60px] flex flex-col gap-8 lg:gap-10 bg-transparent">
      <h2 className="relative inline-block self-start font-display font-bold text-ink text-[26px] md:text-[30px] lg:text-[32px] leading-[1.2]">
        <span aria-hidden="true" className="absolute left-[-6px] right-[-6px] top-[14%] bottom-[10%] bg-accent-pink rounded-[8px] -z-10" />
        <span className="relative">Main takeaways</span>
      </h2>
      <ul className="flex flex-col gap-4 lg:gap-5 list-disc pl-6 marker:text-ink">
        {takeaways.map((t, i) => (
          <li key={i} className="font-body font-medium text-ink text-[18px] lg:text-[20px] leading-[1.4]">
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
