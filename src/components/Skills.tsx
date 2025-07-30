
import { Card, CardContent } from "@/components/ui/card";
import { Database, BarChart3, Code, TrendingUp } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      level: 90,
      icon: <Code className="w-8 h-8 text-sky-600" />,
      description: "Pandas, NumPy, Matplotlib for data analysis and visualization"
    },
    {
      name: "MySQL & Oracle",
      level: 85,
      icon: <Database className="w-8 h-8 text-sky-600" />,
      description: "Database design, complex queries, and data management"
    },
    {
      name: "Excel & Power BI",
      level: 88,
      icon: <BarChart3 className="w-8 h-8 text-sky-600" />,
      description: "Advanced Excel functions and Power BI dashboard creation"
    },
    {
      name: "Data Visualization",
      level: 85,
      icon: <TrendingUp className="w-8 h-8 text-sky-600" />,
      description: "Python libraries (Matplotlib), Excel, and Power BI visualization"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in modern data analysis tools and technologies with hands-on experience 
            in business intelligence and data-driven decision making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-semibold text-sky-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-sky-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
