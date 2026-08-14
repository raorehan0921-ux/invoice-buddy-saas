import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DashboardPreview from '@/components/DashboardPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Nav />
      <HeroSection />
      <FeaturesSection />
      <DashboardPreview />
      <Footer />
    </main>
  );
}
