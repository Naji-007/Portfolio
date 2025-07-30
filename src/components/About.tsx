
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Novi Tech",
      period: "Aug 2024 – Sep 2024",
      description: "Hands-on experience in data analysis and business intelligence solutions"
    },
    
  ];

  const education = [
   
    {
      degree: "Bachelor of Computer Science and Engineering (B.E.)",
      status: "Completed",
      year: "2025",
      icon: <GraduationCap className="w-6 h-6 text-sky-600" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate and detail-driven Data Analyst with expertise in transforming complex datasets 
              into actionable business insights. My journey began in customer operations at Asian Paints, 
              where I developed a keen understanding of business processes and customer needs.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My transition into data analytics through a hands-on internship at Novi Tech has equipped me 
              with practical skills in Python, MySQL, Oracle, Excel, Power BI, and Python libraries including Pandas, NumPy, and Matplotlib. 
              I specialize in creating clean, actionable analytics that drive real business impact. 
              I'm committed to continuous learning and applying cutting-edge analytical methods to 
              solve complex business challenges.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-sky-600 mr-3" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-sky-600 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-sky-600 font-medium">{edu.status}</p>
                        </div>
                        <span className="text-gray-500 font-medium">{edu.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 text-sky-600 mr-3" />
                Experience
              </h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-l-sky-600 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                          <p className="text-sky-600 font-medium">{exp.company}</p>
                        </div>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-600">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
