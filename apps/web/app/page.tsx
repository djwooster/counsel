import Nav from '@/components/nav'
import Hero from '@/components/hero'
import SocialProof from '@/components/social-proof'
import PainPoints from '@/components/pain-points'
import Features from '@/components/features'
import Pricing from '@/components/pricing'
import Comparison from '@/components/comparison'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <SocialProof />
      <PainPoints />
      <Features />
      <Pricing />
      <Comparison />
      <Testimonials />
      <Footer />
    </>
  )
}
