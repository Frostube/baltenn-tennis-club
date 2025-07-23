import HeroSection from '../components/HeroSection'
import ProgramsPreview from '../components/ProgramsPreview'
import ShopPreview from '../components/ShopPreview'
import NewsPreview from '../components/NewsPreview'
import SEOHead from '../components/SEOHead'

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title="Baltenn Tennis Club - Premier Tennis Club | Professional Coaching & Programs"
        description="Join Baltenn Official Tennis Club! Professional coaching, modern facilities, junior & adult programs, tournaments, and tennis equipment. Elevate your game with our expert coaches and vibrant tennis community."
        keywords="tennis club, tennis coaching, tennis lessons, junior tennis, adult tennis, tennis programs, tennis equipment, tennis courts, professional tennis coach, tennis community, tennis tournaments"
        url="https://baltenn.com/"
        image="https://baltenn.com/og-image.jpg"
        type="website"
      />
      <div className="section-padding">
        <HeroSection />
        <ProgramsPreview />
        <ShopPreview />
        <NewsPreview />
      </div>
    </div>
  )
}

export default HomePage 