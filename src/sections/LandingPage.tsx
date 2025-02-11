import Hero from './components/Hero'

const LandingPage = () => {
  return (
    <section className="min-h-screen bg-pink-400 relative overflow-hidden" id='landing-page'>
      <div className="absolute top-0 left-0 w-[45%] h-[45%] bg-mint rounded-br-[100%] -translate-x-1/4 -translate-y-1/4">
        <span className="absolute bottom-8 right-8 text-[120px] font-bold text-navy">20</span>
      </div>
      <div className="absolute bottom-0 right-0 w-[45%] h-[45%] bg-mint rounded-tl-[100%] translate-x-1/4 translate-y-1/4">
        <span className="absolute top-8 left-8 text-[120px] font-bold text-navy">25</span>
      </div>
      <Hero />
    </section>
  )
}

export default LandingPage;