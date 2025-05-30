
import React from "react";
import { ArrowLeft, Github, Users, Zap, TestTube, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ColorGridProject = () => {
  const tags = ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"];

  return (
    <div className="bg-white min-h-screen relative">
      {/* Enhanced decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute top-0 right-0 h-96 w-96 bg-portfolio-highlight rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-portfolio-navy rounded-tr-full"></div>
        <div className="absolute top-1/3 left-1/4 h-32 w-32 bg-portfolio-highlight/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 h-24 w-24 bg-portfolio-navy/20 rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container-custom py-12">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-portfolio-highlight hover:text-portfolio-highlight/80 mb-8 transition-all duration-300 hover:translate-x-1"
          >
            <ArrowLeft size={20} />
            <span className="font-mono text-sm">Back to Home</span>
          </Link>

          {/* Enhanced Project Header */}
          <div className="mb-20 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-portfolio-highlight/20 to-portfolio-navy/20 rounded-2xl mb-6">
              <h1 className="heading-lg bg-white px-8 py-4 rounded-xl">ColorGrid Multiplayer Game</h1>
            </div>
            <p className="text-portfolio-slate text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              A real-time multiplayer 5×5 board game built with the MERN stack, featuring live matchmaking, 
              dynamic scoring, and persistent leaderboards
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {tags.map(tag => (
                <Badge key={tag} className="bg-portfolio-highlight/10 text-portfolio-slate border border-portfolio-highlight/30 px-4 py-2 text-sm hover:bg-portfolio-highlight/20 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
            <a 
              href="https://github.com/Razahamid2003/LUMS-Projects/tree/main/LUMS%20Projects/Advanced%20Programming%20(CS-300)" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-portfolio-navy text-white px-6 py-3 rounded-lg hover:bg-portfolio-navy/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Enhanced Project Content with flowing sections */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Project Overview with icon */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl">
                  <Users className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy">Project Overview</h2>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-portfolio-slate text-lg leading-relaxed">
                  I built a full-stack, real-time multiplayer 5×5 board game that matches two players into a shared room and lets them take turns "claiming" squares by coloring them. At the end of the match an efficient "max-area" algorithm determines the winner, and players' scores feed into a dynamic leaderboard that persists across sessions.
                </p>
              </div>
            </section>

            {/* Technical Architecture */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl">
                  <Zap className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy">Technical Architecture</h2>
              </div>
              <div className="bg-gradient-to-br from-portfolio-navy/5 to-white border border-portfolio-navy/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-portfolio-slate text-lg leading-relaxed mb-6">
                  On the client side you'll find a React app (hooks, React Router, Tailwind CSS) that renders the game board, lobby and leaderboard without ever refreshing the page. All live updates are delivered over Socket.IO, with an Express.js server managing matchmaking, room lifecycle and authoritative game state.
                </p>
                <p className="text-portfolio-slate text-lg leading-relaxed">
                  Behind the scenes, MongoDB holds user profiles, game histories and score records—its schemas and indexes tuned to support thousands of quick reads and writes per minute.
                </p>
              </div>
            </section>

            {/* Performance & Optimization */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl">
                  <Zap className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy">Performance & Optimization</h2>
              </div>
              <div className="bg-gradient-to-br from-portfolio-highlight/5 to-white border border-portfolio-highlight/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-portfolio-slate text-lg leading-relaxed">
                  Early prototypes suffered from laggy moves and slow API calls. By batching socket emits, indexing game_id and user_id in MongoDB, and fine-tuning event handlers, I drove per-move latency below 100 ms and cut average REST response times in half. These optimizations ensure near-instant feedback for both players, even under moderate load.
                </p>
              </div>
            </section>

            {/* Testing & DevOps */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl">
                  <TestTube className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy">Testing, Deployment & DevOps</h2>
              </div>
              <div className="bg-gradient-to-br from-portfolio-navy/5 to-white border border-portfolio-navy/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-portfolio-slate text-lg leading-relaxed">
                  Every core function—from the "max-area" flood-fill routine to the socket room join/leave flows—is covered by Jest unit tests and end-to-end Cypress scripts that simulate real gameplay. I containerized client and server in Docker, wired up GitHub Actions to build, test and deploy on every push, and now use a simple CI/CD pipeline to keep staging and production fully in sync.
                </p>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl">
                  <Lightbulb className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy">Key Takeaways</h2>
              </div>
              <div className="bg-gradient-to-br from-portfolio-highlight/5 to-white border border-portfolio-highlight/20 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-portfolio-slate text-lg leading-relaxed">
                  This project sharpened my skills in low-latency real-time systems, database indexing for high-throughput apps, and full-stack automation. Handling simultaneous clicks and avoiding race conditions in a turn-based environment taught me the value of optimistic UI updates reconciled by a server-authoritative state machine.
                </p>
              </div>
            </section>
          </div>

          {/* Enhanced back to projects link */}
          <div className="mt-20 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 bg-white border-2 border-portfolio-highlight text-portfolio-highlight px-8 py-4 rounded-xl hover:bg-portfolio-highlight hover:text-white transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorGridProject;
