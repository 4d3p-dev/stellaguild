export default function Home() {
  return (
    <div className="container px-4 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          私たちの<span className="text-primary">Stella Guild</span>へようこそ
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Stella Guildは、共に成長し、冒険する仲間たちのコミュニティです。
        </p>
      </div>
    </div>
  )
}

