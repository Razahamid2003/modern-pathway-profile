
import React, { useEffect } from "react";
import { ArrowLeft, Github, BarChart3, Zap, Settings, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const NewsSentimentProject = () => {
  const tags = ["Python", "Scrapy", "BeautifulSoup", "NLTK", "Matplotlib", "Data Analysis", "Automation"];

  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen relative animate-fade-in">
      {/* Enhanced decorative elements matching main site */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-0 right-0 h-96 w-96 bg-portfolio-highlight rounded-bl-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-portfolio-navy rounded-tr-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 h-32 w-32 bg-portfolio-highlight/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/4 h-24 w-24 bg-portfolio-navy/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="container-custom py-12">
          {/* Back button with enhanced animation */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-portfolio-highlight hover:text-portfolio-highlight/80 mb-8 transition-all duration-500 hover:translate-x-2 hover:scale-105 group"
          >
            <ArrowLeft size={20} className="group-hover:animate-pulse" />
            <span className="font-mono text-sm">Back to Home</span>
          </Link>

          {/* Enhanced Project Header with staggered animations */}
          <div className="mb-20 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-portfolio-highlight/20 to-portfolio-navy/20 rounded-2xl mb-6 animate-scale-in hover:scale-105 transition-transform duration-300">
              <h1 className="heading-lg bg-white px-8 py-4 rounded-xl shadow-lg">
                News Sentiment Analysis Pipeline
              </h1>
            </div>
            <p className="text-portfolio-slate text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A fully automated Python pipeline that scrapes 500+ news articles daily, analyzes sentiment with NLTK VADER, 
              and generates real-time trend charts. Experience the power of automated media intelligence with 90% time savings.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {tags.map((tag, index) => (
                <Badge 
                  key={tag} 
                  className="bg-portfolio-highlight/10 text-portfolio-slate border border-portfolio-highlight/30 px-4 py-2 text-sm hover:bg-portfolio-highlight/20 transition-all duration-300 hover:scale-110 hover:shadow-md"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <a 
              href="https://github.com/Razahamid2003/LUMS-Projects/tree/main/LUMS%20Projects/Machine%20Learning%20(CS-438)/News%20Sentiment%20Analysis" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-portfolio-navy text-white px-8 py-4 rounded-xl hover:bg-portfolio-navy/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">Explore the Code</span>
            </a>
          </div>

          {/* Enhanced Project Content with flowing sections and personality */}
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Project Overview with enhanced styling */}
            <section className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <BarChart3 className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Project Overview</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight">
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  I developed a fully automated Python pipeline that scrapes over 500 news articles each morning, analyzes their tone with NLTK's VADER sentiment analyzer, and generates daily trend charts with Matplotlib. By orchestrating the workflow end-to-end—from web crawling through to chart generation—the system delivers real-time media sentiment insights without any manual intervention.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → 500+ daily articles • Automated analysis • Real-time insights
                </div>
              </div>
            </section>

            {/* Pipeline Architecture with enhanced visual appeal */}
            <section className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl hover:bg-portfolio-navy/20 transition-colors duration-300 hover:rotate-6">
                  <Settings className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Pipeline Architecture</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-navy/5 rounded-full -translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed mb-6 font-sans">
                  At the core, Scrapy handles distributed crawling across multiple news sites, while BeautifulSoup's parser cleans and extracts article text. Each article is then fed into a VADER-based sentiment module that assigns polarity scores. Once scoring completes, a Matplotlib script compiles the day's results into interactive line and bar charts, which are automatically saved and emailed to stakeholders.
                </p>
                <div className="mt-6 text-sm text-portfolio-navy font-mono">
                  → Scrapy + BeautifulSoup • VADER sentiment analysis • Matplotlib visualization
                </div>
              </div>
            </section>

            {/* Efficiency & Impact with dynamic elements */}
            <section className="relative animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Zap className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Efficiency & Impact</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-portfolio-highlight/5 rounded-full translate-y-12 -translate-x-12"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  Before automation, compiling and plotting sentiment over dozens of outlets took several hours of manual effort each day. Automating the entire process cut reporting time by <span className="text-portfolio-highlight font-bold">90%</span>, ensuring executives receive up-to-the-minute media-tone dashboards every morning and enabling faster, data-driven decisions.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → 90% time reduction • Daily automation • Executive dashboards
                </div>
              </div>
            </section>

            {/* Reliability & Deployment with professional touch */}
            <section className="relative animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl hover:bg-portfolio-navy/20 transition-colors duration-300 hover:rotate-6">
                  <Settings className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Reliability & Deployment</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-portfolio-navy/5 rounded-full -translate-y-10 translate-x-10"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  Robust error handling and logging are built into each stage—failed requests are retried, malformed HTML is skipped, and exceptions in the sentiment pipeline are caught and reported. The entire solution runs in a Docker container, scheduled via cron (with plans to migrate to Airflow), guaranteeing consistent daily execution and easy scaling.
                </p>
                <div className="mt-6 text-sm text-portfolio-navy font-mono">
                  → Docker containerization • Robust error handling • Scheduled execution
                </div>
              </div>
            </section>

            {/* Key Takeaways with impact emphasis */}
            <section className="relative animate-fade-in" style={{ animationDelay: '1.6s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Lightbulb className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Key Takeaways</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden bg-gradient-to-br from-white to-portfolio-highlight/5">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-portfolio-highlight/5 rounded-full translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  This project deepened my expertise in large-scale web scraping, natural language sentiment analysis, and automated reporting. It also reinforced the importance of resilient, maintainable pipelines that bridge raw data collection and actionable business intelligence—all developed in alignment with rigorous documentation standards.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → Web scraping mastery • NLP expertise • Business intelligence automation
                </div>
              </div>
            </section>
          </div>

          {/* Enhanced back to projects link with style */}
          <div className="mt-24 text-center animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 bg-white border-2 border-portfolio-highlight text-portfolio-highlight px-8 py-4 rounded-xl hover:bg-portfolio-highlight hover:text-white transition-all duration-500 hover:scale-105 shadow-lg font-medium group"
            >
              <ArrowLeft size={20} className="group-hover:animate-pulse" />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSentimentProject;
