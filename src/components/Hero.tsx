import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative mt-16">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-sky-400 to-sky-600 p-1 shadow-xl px-[2px]">
            <div className="w-full h-full bg-white flex items-center justify-center rounded-full">
              <img src="/lovable-uploads/48de4982-3110-41ca-97e8-e9deeb82c05f.png" alt="Najimulla" className="w-44 h-44 rounded-full object-cover" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in md:text-4xl">
          Hi, I'm <span className="text-sky-600">Najimulla</span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 animate-fade-in font-medium md:text-xl">
          Data Analyst turning insights into impact
        </p>
        
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed text-base">
          Passionate and detail-driven Data Analyst with expertise in Python, MySQL, Oracle, Excel, Power BI, and Python libraries (Pandas, NumPy, Matplotlib). 
          Transforming complex data into actionable business insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button onClick={() => scrollToSection('portfolio')} className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105">
            Explore My Work
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg font-medium transition-all duration-300">
            Get In Touch
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-sky-600 mx-auto cursor-pointer hover:text-sky-700 transition-colors" onClick={() => scrollToSection('about')} />
        </div>
      </div>
    </section>;
};
export default Hero;