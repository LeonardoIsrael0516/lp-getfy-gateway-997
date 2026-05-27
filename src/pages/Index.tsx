import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import PaymentMethodsSection from "@/components/landing/PaymentMethodsSection";
import FeaturesShowcaseSection from "@/components/landing/FeaturesShowcaseSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import ModulesSection from "@/components/landing/ModulesSection";
import GatewaysSection from "@/components/landing/GatewaysSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import ApiSection from "@/components/landing/ApiSection";
import StackSecuritySection from "@/components/landing/StackSecuritySection";
import AchievementSystemSection from "@/components/landing/AchievementSystemSection";
import DecisionSection from "@/components/landing/DecisionSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import GroupSection from "@/components/landing/GroupSection";
import CureSection from "@/components/landing/CureSection";
import ForWhoCheckoutSection from "@/components/landing/ForWhoCheckoutSection";
import PremiumIncludedSection from "@/components/landing/PremiumIncludedSection";

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip bg-background">
      <div className="relative w-full overflow-x-clip">
        <Navbar />
        <HeroSection />
      </div>
      <GroupSection />
      <div className="line-gradient" />
      <ProblemSection />
      <div className="line-gradient" />
      <CureSection />
      <PremiumIncludedSection />
      <ModulesSection />
      <ForWhoCheckoutSection />
      <div className="line-gradient" />
      <PaymentMethodsSection />
      <FeaturesShowcaseSection />
      <CTASection />
      <div className="line-gradient" />
      <FeaturesGrid />
      <div className="line-gradient" />
      <GatewaysSection />
      <IntegrationsSection />
      <div className="line-gradient" />
      <ApiSection />
      <div className="line-gradient" />
      <StackSecuritySection />
      <AchievementSystemSection />
      <DecisionSection />
      <CTASection showIntro={false} />
      <div className="line-gradient" />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
