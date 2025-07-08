
import { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Settings } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Globe,
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Settings,
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack'],
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold font-display mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
          }`}>
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-[30px]'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass rounded-2xl p-6 hover-glow transition-all duration-1000 ${
                isVisible 
                  ? 'animate-fade-in' 
                  : 'opacity-0 translate-y-[30px]'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} p-3 mb-4 mx-auto`}>
                <category.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4 text-foreground">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="text-center py-1 px-3 rounded-full bg-secondary/50 text-sm text-muted-foreground transition-all duration-300 hover:bg-secondary/80 hover:text-foreground"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
