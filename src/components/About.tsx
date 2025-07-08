
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl font-bold">
                      AM
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full animate-glow" />
              </div>
            </div>

            {/* About Content */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with experience in building 
                  responsive, high-performance web applications using technologies like 
                  React, Node.js, Express, MongoDB, and more.
                </p>
                
                <p>
                  I focus on writing clean, maintainable code and designing intuitive 
                  interfaces that provide exceptional user experiences. My goal is to 
                  bridge the gap between design and functionality, creating digital 
                  solutions that are both beautiful and practical.
                </p>
                
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying a good cup of coffee 
                  while planning my next creative project.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="px-4 py-2 rounded-full glass">
                  <span className="text-primary font-semibold">3+ Years Experience</span>
                </div>
                <div className="px-4 py-2 rounded-full glass">
                  <span className="text-primary font-semibold">50+ Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
