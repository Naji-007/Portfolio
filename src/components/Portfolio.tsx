
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "ZOMATO-DATA ANALYTICS",
      description: "Built a dashboard to analyze the data  trends using Power Query and DAX. Automated data cleaning reduced manual work by 40%.",
      tech: ["PowerBI", "DAX", "SQL"],
      image: "https://i.postimg.cc/0Q5hdtCR/image.jpg",
      githubUrl: "https://github.com/Naji-007/Zomato.Data_Analyst.git",
      liveUrl: "https://github.com/Naji-007/Zomato.Data_Analyst.git"
    },
    {
      title: "COVID-19 Data Exploration",
      description: "Performed exploratory data analysis on COVID-19 datasets using SQL. Improved data quality by 35% through cleaning, joins, and aggregations.",
      tech: ["SQL", "EDA", "DataCleaning"],
      image: "https://i.postimg.cc/sgzdBFC1/istockphoto-1217649829-640x640.jpg",
      githubUrl: "https://github.com/Durai-Murugan-DA/Covid-Data-Exploration",
      liveUrl: "https://github.com/Durai-Murugan-DA/Covid-Data-Exploration"
    },
    {
      title: "Retail Data Analysis",
      description: "Developed a model with Pandas and NumPy to analyse the retail trends. Achieved 73% accuracy with improved feature engineering.",
      tech: ["Python", "SQL", "NumPy"],
      image: "https://i.postimg.cc/xTMVTf7W/gettyimages-1380018401-640x640.jpg",
      githubUrl: "https://github.com/Naji-007/Retail.Sql.Data_Analyst.git",
      liveUrl: "https://github.com/Naji-007/Retail.Sql.Data_Analyst.git"
    },
    {
      title: "Airbnb Data Analysis",
      description: "Created an interactive analysis dashboard for airbnb customer reviews by region, time, and service metrics.",
      tech: ["Tableau", "Excel", "DataViz"],
      image: "https://i.postimg.cc/RC244BRW/airbnb-statistics.jpg",
      githubUrl: "https://github.com/Naji-007/Airbnb.python_project.git",
      liveUrl: "https://github.com/Naji-007/Airbnb.python_project.git"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my data analysis projects demonstrating practical application of 
            business intelligence, data visualization, and machine learning techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-sky-100 to-sky-200 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-sky-900/40 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-gray-600 text-gray-600 hover:bg-gray-50"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button 
                    size="sm"
                    className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
