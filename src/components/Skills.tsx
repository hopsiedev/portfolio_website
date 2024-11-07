import React from 'react';

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "SQL"] },
    { category: "Herramientas", items: ["Git", "VS Code", "Docker", "Postman"] },
    { category: "Soft Skills", items: ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Adaptabilidad"] }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Mis <span className="text-primary">Habilidades</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}