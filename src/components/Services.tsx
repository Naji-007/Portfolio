
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Database, Code, Presentation, TrendingUp, FileSpreadsheet } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-sky-600" />,
      title: "Data Reporting & Dashboard Creation",
      description: "Design and develop interactive Power BI dashboards with advanced DAX functions for real-time business insights and KPI monitoring.",
      tools: ["Power BI", "DAX", "Excel"]
    },
    {
      icon: <Database className="w-12 h-12 text-sky-600" />,
      title: "SQL-Based Business Insights",
      description: "Complex query development, database optimization, and data exploration to extract meaningful patterns and trends from large datasets.",
      tools: ["SQL", "PostgreSQL", "Query Optimization"]
    },
    {
      icon: <Code className="w-12 h-12 text-sky-600" />,
      title: "Data Cleaning & Exploration",
      description: "Comprehensive data preprocessing, cleaning, and exploratory analysis using Python libraries to ensure data quality and reliability.",
      tools: ["Python", "Pandas", "NumPy"]
    },
    {
      icon: <Presentation className="w-12 h-12 text-sky-600" />,
      title: "Visualization Storytelling",
      description: "Create compelling data narratives through advanced visualization techniques that communicate insights effectively to stakeholders.",
      tools: ["Tableau", "Power BI", "Excel"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive data analysis services designed to transform your raw data into 
            actionable business intelligence and strategic insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center pt-4">
                  {service.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-sky-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <TrendingUp className="w-16 h-16 text-sky-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Data?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's collaborate to unlock the hidden insights in your data and drive informed business decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <FileSpreadsheet className="w-4 h-4 mr-2 text-sky-600" />
                Data Analysis
              </span>
              <span className="flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-sky-600" />
                Business Intelligence
              </span>
              <span className="flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-sky-600" />
                Predictive Analytics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
