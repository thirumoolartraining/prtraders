import React from 'react';
import { Shield, Award, CheckCircle, Globe } from 'lucide-react';

const QualityStrip = () => {
  const certifications = [
    {
      icon: Shield,
      name: "ISO 9001:2015",
      description: "Quality Management"
    },
    {
      icon: CheckCircle,
      name: "GMP Certified",
      description: "Good Manufacturing Practice"
    },
    {
      icon: Award,
      name: "Quality Assured",
      description: "Temple-Grade Standards"
    },
    {
      icon: Globe,
      name: "Export License",
      description: "Global Trade Approved"
    }
  ];

  return (
    <section id="quality" className="py-12 sm:py-16 lg:py-20 bg-camphor-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-charcoal mb-3 sm:mb-4">
            Quality Assurance
          </h2>
          <p className="font-inter text-base sm:text-lg xl:text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Our commitment to purity is backed by international certifications and rigorous quality control processes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-mint-tint rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-forest-green transition-colors duration-300">
                <cert.icon className="text-forest-green group-hover:text-camphor-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-inter font-bold text-lg sm:text-xl text-charcoal mb-2">
                {cert.name}
              </h3>
              <p className="text-charcoal/70 text-sm sm:text-base">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-mint-tint rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <h3 className="font-inter font-bold text-2xl sm:text-3xl xl:text-4xl text-forest-green mb-2">99.9%</h3>
              <p className="text-charcoal/80 text-sm sm:text-base">Purity Guarantee</p>
            </div>
            <div>
              <h3 className="font-inter font-bold text-2xl sm:text-3xl xl:text-4xl text-forest-green mb-2">30+</h3>
              <p className="text-charcoal/80 text-sm sm:text-base">Years Experience</p>
            </div>
            <div>
              <h3 className="font-inter font-bold text-2xl sm:text-3xl xl:text-4xl text-forest-green mb-2">25+</h3>
              <p className="text-charcoal/80 text-sm sm:text-base">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityStrip;