import React from 'react'

const features = [
  {
    title: "Unified Workspace",
    description: "All your notes, tasks, and ideas in one beautifully organized space. No more switching between apps.",
    icon: "📝"
  },
  {
    title: "Smart Organization",
    description: "AI-powered tagging and categorization that learns from your habits. Find anything in seconds.",
    icon: "🧠"
  },
  {
    title: "Seamless Sync",
    description: "Your data syncs across all devices instantly. Access your second brain anywhere, anytime.",
    icon: "☁️"
  },
  {
    title: "Privacy First",
    description: "End-to-end encryption ensures your thoughts stay private. Your data belongs to you, always.",
    icon: "🔒"
  },
  {
    title: "Beautiful Design",
    description: "A minimalist interface that gets out of your way. Focus on what matters, not the tool.",
    icon: "✨"
  },
  {
    title: "Powerful Search",
    description: "Find anything instantly with our advanced search. Your memories are just a query away.",
    icon: "🔍"
  }
]

function Features() {
  return (
    <section className="py-32 px-[20vw]">
      <h2 className="text-5xl font-light mb-20 text-center">Everything You Need</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="glass p-8 rounded-3xl hover:glass-strong transition-all duration-300 group"
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-light mb-4">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
