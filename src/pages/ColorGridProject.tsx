
import React from "react";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ColorGridProject = () => {
  const tags = ["React", "Node.js", "Express", "Socket.IO", "MongoDB", "Tailwind CSS"];

  return (
    <div className="bg-white min-h-screen relative">
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-0 right-0 h-96 w-96 bg-portfolio-highlight/10 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 bg-portfolio-navy/10 rounded-tr-full"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container-custom py-16">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-portfolio-highlight hover:text-portfolio-highlight/80 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-mono text-sm">Back to Home</span>
          </Link>

          {/* Project Header */}
          <div className="mb-16">
            <h1 className="heading-lg">ColorGrid Multiplayer Game</h1>
            <p className="text-portfolio-slate text-lg mb-6">
              A real-time multiplayer 5×5 board game built with the MERN stack
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map(tag => (
                <Badge key={tag} className="bg-transparent text-portfolio-slate border border-portfolio-highlight text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <a 
              href="https://github.com/Razahamid2003/LUMS-Projects/tree/main/LUMS%20Projects/Advanced%20Programming%20(CS-300)" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 text-portfolio-slate hover:text-portfolio-highlight transition-colors"
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Project Content */}
          <div className="grid md:grid-cols-1 gap-16">
            {/* Project Overview */}
            <section>
              <h2 className="heading-md mb-6 gold-accent">Project Overview</h2>
              <div className="marble-card p-8">
                <p className="text-portfolio-slate leading-relaxed">
                  I built a full-stack, real-time multiplayer 5×5 board game that matches two players into a shared room and lets them take turns "claiming" squares by coloring them. At the end of the match an efficient "max-area" algorithm determines the winner, and players' scores feed into a dynamic leaderboard that persists across sessions.
                </p>
              </div>
            </section>

            {/* Technical Architecture */}
            <section>
              <h2 className="heading-md mb-6 gold-accent">Technical Architecture</h2>
              <div className="marble-card p-8">
                <p className="text-portfolio-slate leading-relaxed">
                  On the client side you'll find a React app (hooks, React Router, Tailwind CSS) that renders the game board, lobby and leaderboard without ever refreshing the page. All live updates are delivered over Socket.IO, with an Express.js server managing matchmaking, room lifecycle and authoritative game state. Behind the scenes, MongoDB holds user profiles, game histories and score records—its schemas and indexes tuned to support thousands of quick reads and writes per minute.
                </p>
              </div>
            </section>

            {/* Performance & Optimization */}
            <section>
              <h2 className="heading-md mb-6 gold-accent">Performance & Optimization</h2>
              <div className="marble-card p-8">
                <p className="text-portfolio-slate leading-relaxed">
                  Early prototypes suffered from laggy moves and slow API calls. By batching socket emits, indexing game_id and user_id in MongoDB, and fine-tuning event handlers, I drove per-move latency below 100 ms and cut average REST response times in half. These optimizations ensure near-instant feedback for both players, even under moderate load.
                </p>
              </div>
            </section>

            {/* Testing, Deployment & DevOps */}
            <section>
              <h2 className="heading-md mb-6 gold-accent">Testing, Deployment & DevOps</h2>
              <div className="marble-card p-8">
                <p className="text-portfolio-slate leading-relaxed">
                  Every core function—from the "max-area" flood-fill routine to the socket room join/leave flows—is covered by Jest unit tests and end-to-end Cypress scripts that simulate real gameplay. I containerized client and server in Docker, wired up GitHub Actions to build, test and deploy on every push, and now use a simple CI/CD pipeline to keep staging and production fully in sync.
                </p>
              </div>
            </section>

            {/* Key Takeaways */}
            <section>
              <h2 className="heading-md mb-6 gold-accent">Key Takeaways</h2>
              <div className="marble-card p-8">
                <p className="text-portfolio-slate leading-relaxed">
                  This project sharpened my skills in low-latency real-time systems, database indexing for high-throughput apps, and full-stack automation. Handling simultaneous clicks and avoiding race conditions in a turn-based environment taught me the value of optimistic UI updates reconciled by a server-authoritative state machine.
                </p>
              </div>
            </section>
          </div>

          {/* Back to projects link */}
          <div className="mt-16 text-center">
            <Link 
              to="/" 
              className="btn-primary"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorGridProject;
