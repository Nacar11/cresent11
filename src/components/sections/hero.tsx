import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-end justify-center pb-16 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us-1.jpg"
          alt="Masonic Lodge Interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for solemnity and text contrast */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        {/* Title positioned absolutely at the top */}
        <div className="absolute left-0 w-full px-4 flex flex-col items-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white tracking-wide drop-shadow-md">
            CRESCENT MASONIC LODGE NO. 419
          </h1>
        </div>

        {/* Lower text block positioned at the bottom */}
        <div className="flex flex-col items-center gap-6 mt-32 md:mt-48">
          <div className="flex flex-col items-center mt-12">
            <h2 className="text-xl md:text-3xl text-white font-serif tracking-wide drop-shadow-md">
              MASONIC DISTRICT R7 - Cebu
            </h2>
            <p className="text-sm md:text-lg text-accent uppercase tracking-widest font-medium max-w-4xl mt-4 leading-relaxed drop-shadow-md">
              Under the Jurisdiction of the Most Worshipful Grand Lodge<br />
              of Free and Accepted Masons of the Philippines
            </p>
          </div>
        </div>

        <div className="h-2 w-[1px] bg-accent/50 hidden md:block" />

        <a
          href="#about"
          className="mt-8 md:mt-12 inline-flex items-center justify-center px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary bg-accent hover:bg-white transition-colors duration-300 rounded-none shadow-sm"
        >
          Discover Our Lodge
        </a>
      </div>
    </section>
  )
}
