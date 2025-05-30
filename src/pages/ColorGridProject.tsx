
import React, { useEffect } from "react";
import { ArrowLeft, Github, Users, Zap, TestTube, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ColorGridProject = () => {
  const tags = ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"];

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
        <div className="absolute bottom-1/3 right-1/4 h-24 w-24 bg-portfolio-navy/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
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
                ColorGrid Multiplayer Game
              </h1>
            </div>
            <p className="text-portfolio-slate text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              A real-time multiplayer 5×5 board game built with the MERN stack, featuring live matchmaking, 
              dynamic scoring, and persistent leaderboards. Experience the thrill of strategic gameplay 
              with millisecond precision.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              {tags.map((tag, index) => (
                <Badge 
                  key={tag} 
                  className="bg-portfolio-highlight/10 text-portfolio-slate border border-portfolio-highlight/30 px-4 py-2 text-sm hover:bg-portfolio-highlight/20 transition-all duration-300 hover:scale-110 hover:shadow-md"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <a 
              href="https://github.com/Razahamid2003/LUMS-Projects/tree/main/LUMS%20Projects/Advanced%20Programming%20(CS-300)" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-portfolio-navy text-white px-8 py-4 rounded-xl hover:bg-portfolio-navy/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group animate-fade-in"
              style={{animationDelay: '0.6s'}}
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">Explore the Code</span>
            </a>
          </div>

          {/* Enhanced Project Content with flowing sections and personality */}
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Project Overview with enhanced styling */}
            <section className="relative animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Users className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Project Overview</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight">
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  I built a full-stack, real-time multiplayer 5×5 board game that matches two players into a shared room and lets them take turns "claiming" squares by coloring them. At the end of the match an efficient "max-area" algorithm determines the winner, and players' scores feed into a dynamic leaderboard that persists across sessions.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → Real-time gameplay • Strategic depth • Persistent competition
                </div>
              </div>
            </section>

            {/* Technical Architecture with enhanced visual appeal */}
            <section className="relative animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl hover:bg-portfolio-navy/20 transition-colors duration-300 hover:rotate-6">
                  <Zap className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Technical Architecture</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-navy/5 rounded-full -translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed mb-6 font-sans">
                  On the client side you'll find a React app (hooks, React Router, Tailwind CSS) that renders the game board, lobby and leaderboard without ever refreshing the page. All live updates are delivered over Socket.IO, with an Express.js server managing matchmaking, room lifecycle and authoritative game state.
                </p>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  Behind the scenes, MongoDB holds user profiles, game histories and score records—its schemas and indexes tuned to support thousands of quick reads and writes per minute.
                </p>
                <div className="mt-6 text-sm text-portfolio-navy font-mono">
                  → React + Socket.IO • Express.js backend • MongoDB optimization
                </div>
              </div>
            </section>

            {/* Performance & Optimization with dynamic elements */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Zap className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Performance & Optimization</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-portfolio-highlight/5 rounded-full translate-y-12 -translate-x-12"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  Early prototypes suffered from laggy moves and slow API calls. By batching socket emits, indexing game_id and user_id in MongoDB, and fine-tuning event handlers, I drove per-move latency below <span className="text-portfolio-highlight font-bold">100 ms</span> and cut average REST response times in <span className="text-portfolio-highlight font-bold">half</span>. These optimizations ensure near-instant feedback for both players, even under moderate load.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → <100ms latency • 50% faster APIs • Real-time responsiveness
                </div>
              </div>
            </section>

            {/* Testing & DevOps with professional touch */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.4s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl hover:bg-portfolio-navy/20 transition-colors duration-300 hover:rotate-6">
                  <TestTube className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Testing, Deployment & DevOps</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-portfolio-navy/5 rounded-full -translate-y-10 translate-x-10"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  Every core function—from the "max-area" flood-fill routine to the socket room join/leave flows—is covered by Jest unit tests and end-to-end Cypress scripts that simulate real gameplay. I containerized client and server in Docker, wired up GitHub Actions to build, test and deploy on every push, and now use a simple CI/CD pipeline to keep staging and production fully in sync.
                </p>
                <div className="mt-6 text-sm text-portfolio-navy font-mono">
                  → Jest + Cypress testing • Docker containers • GitHub Actions CI/CD
                </div>
              </div>
            </section>

            {/* Key Takeaways with impact emphasis */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.6s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Lightbulb className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Key Takeaways</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden bg-gradient-to-br from-white to-portfolio-highlight/5">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-portfolio-highlight/5 rounded-full translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  This project sharpened my skills in low-latency real-time systems, database indexing for high-throughput apps, and full-stack automation. Handling simultaneous clicks and avoiding race conditions in a turn-based environment taught me the value of optimistic UI updates reconciled by a server-authoritative state machine.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → Real-time systems mastery • Race condition handling • Full-stack expertise
                </div>
              </div>
            </section>
          </div>

          {/* Enhanced back to projects link with style */}
          <div className="mt-24 text-center animate-fade-in" style={{animationDelay: '1.8s'}}>
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

export default ColorGridProject;
