
import React, { useEffect } from "react";
import { ArrowLeft, Github, Brain, Zap, Code, BarChart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const GPTLanguageModelProject = () => {
  const tags = ["Python", "NLP", "GPT", "Language Models", "Machine Learning"];

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
                N-Gram Language Model with GPT Principles
              </h1>
            </div>
            <p className="text-portfolio-slate text-xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              A sophisticated Bigram-based language model inspired by GPT architecture principles, 
              featuring Transformer blocks, self-attention mechanisms, and character-level text generation 
              with advanced training optimization and interactive deployment.
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
              href="https://github.com/Razahamid2003/LMKR-Projects" 
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
                  <Brain className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Project Overview</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight">
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  I designed and implemented a Bigram-based language model inspired by core principles of the GPT architecture. Trained on "Alice in Wonderland," the model learns to predict the next token in a sequence using a stack of Transformer blocks, enabling coherent, character-level text generation that captures complex language patterns and produces meaningful, contextually relevant output.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → GPT-inspired architecture • Character-level generation • Transformer blocks
                </div>
              </div>
            </section>

            {/* Model Architecture & Training with enhanced visual appeal */}
            <section className="relative animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl hover:bg-portfolio-navy/20 transition-colors duration-300 hover:rotate-6">
                  <Code className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Model Architecture & Training</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-portfolio-navy/5 rounded-full -translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed mb-6 font-sans">
                  At its heart, the BigramLanguageModel embeds input tokens and positional indices before passing them through multiple self-attention and feed-forward layers. I experimented with both SGD (with high momentum) and AdamW optimizers, logging hyperparameters and loss curves via MLflow to iteratively refine learning rate, block size and network depth.
                </p>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  During training, batches of context windows are sampled at random to balance performance and convergence speed, ensuring the model learns robust representations of language patterns.
                </p>
                <div className="mt-6 text-sm text-portfolio-navy font-mono">
                  → Self-attention layers • MLflow tracking • Optimized hyperparameters
                </div>
              </div>
            </section>

            {/* Data Encoding & Pipeline with dynamic elements */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <BarChart className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Data Encoding & Pipeline</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-portfolio-highlight/5 rounded-full translate-y-12 -translate-x-12"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  The text corpus is first encoded either with a custom character-to-index mapping or using the GPT-2 BPE tokenizer provided by tiktoken. After splitting into training and validation sets, the pipeline continuously feeds fixed-length token sequences into the model, computes cross-entropy loss, and checkpoints the best weights to disk. This <span className="text-portfolio-highlight font-bold">dual-encoding approach</span> highlights trade-offs between vocabulary size and modeling granularity.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → Custom tokenization • GPT-2 BPE integration • Automated checkpointing
                </div>
              </div>
            </section>

            {/* Performance Optimization with professional touch */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.4s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-navy/10 rounded-xl hover:bg-portfolio-navy/20 transition-colors duration-300 hover:rotate-6">
                  <Zap className="w-6 h-6 text-portfolio-navy" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Performance Optimization</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-navy relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-portfolio-navy/5 rounded-full -translate-y-10 translate-x-10"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  To achieve fast iteration, I tuned key hyperparameters—embedding dimension, number of heads, block size and dropout—and leveraged periodic loss evaluation to detect overfitting. Checkpointing every few hundred steps and batching socket-style mini-batches ensured stable GPU utilization and reproducible results. The final configuration yields a high-fidelity generative model capable of producing hundreds of tokens in seconds.
                </p>
                <div className="mt-6 text-sm text-portfolio-navy font-mono">
                  → Hyperparameter tuning • GPU optimization • High-speed generation
                </div>
              </div>
            </section>

            {/* Interactive Deployment with impact emphasis */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.6s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Code className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Interactive Deployment</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-portfolio-highlight/5 rounded-full translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  For demonstration, I wrapped the model in a Streamlit app that lets users supply a prompt and slider-controlled token length; the app loads existing checkpoints or trains from scratch on demand, then streams generated text back in real time. This interface underscores the model's readiness for prototyping conversational or storytelling applications.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → Streamlit interface • Real-time generation • Interactive controls
                </div>
              </div>
            </section>

            {/* Key Takeaways */}
            <section className="relative animate-fade-in" style={{animationDelay: '1.8s'}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-portfolio-highlight/10 rounded-xl hover:bg-portfolio-highlight/20 transition-colors duration-300 hover:rotate-6">
                  <Lightbulb className="w-6 h-6 text-portfolio-highlight" />
                </div>
                <h2 className="heading-md text-portfolio-navy gold-accent">Key Takeaways</h2>
              </div>
              <div className="marble-card p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-portfolio-highlight relative overflow-hidden bg-gradient-to-br from-white to-portfolio-highlight/5">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-portfolio-highlight/5 rounded-full translate-y-16 translate-x-16"></div>
                <p className="text-portfolio-slate text-lg leading-relaxed font-sans">
                  Building this N-gram–inspired GPT clone deepened my understanding of self-attention mechanics, custom tokenization strategies and the importance of experiment tracking. Integrating MLflow and Streamlit rounded out my skills in reproducible research and rapid deployment of machine-learning prototypes, bridging the gap between theoretical understanding and practical implementation.
                </p>
                <div className="mt-6 text-sm text-portfolio-highlight font-mono">
                  → Self-attention mastery • Experiment tracking • Rapid prototyping
                </div>
              </div>
            </section>
          </div>

          {/* Enhanced back to projects link with style */}
          <div className="mt-24 text-center animate-fade-in" style={{animationDelay: '2s'}}>
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

export default GPTLanguageModelProject;
