import React from 'react'

const reviews = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content: "OneForAll has completely transformed how I organize my thoughts and ideas. It's like having a second brain that actually works.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Software Engineer",
    content: "The simplicity and power of this app is unmatched. Everything I need is in one place, beautifully organized.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Writer",
    content: "As someone who juggles multiple projects, OneForAll keeps me sane. It's elegant, intuitive, and just works.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Entrepreneur",
    content: "This is the productivity tool I've been waiting for. Clean interface, powerful features, zero clutter.",
    rating: 5
  },
  {
    name: "Lisa Anderson",
    role: "Researcher",
    content: "The glass effect UI is stunning, and the functionality is even better. My workflow has never been smoother.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    content: "Finally, a tool that understands how I think. The organization features are intuitive and the design is absolutely beautiful.",
    rating: 5
  },
  {
    name: "Maria Garcia",
    role: "Project Manager",
    content: "OneForAll has streamlined my entire workflow. I can't imagine going back to my old scattered system of notes and tasks.",
    rating: 5
  },
  {
    name: "Alex Thompson",
    role: "Developer",
    content: "The search functionality is incredible. I can find anything in seconds, even from months ago. This is a game-changer.",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Content Creator",
    content: "As a content creator, I manage hundreds of ideas daily. OneForAll keeps everything organized and accessible. Love it!",
    rating: 5
  },
  {
    name: "Ryan Park",
    role: "Consultant",
    content: "The sync across devices is flawless. I can start a note on my phone and finish it on my laptop seamlessly.",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Student",
    content: "Perfect for managing my studies and personal projects. The clean interface helps me focus without distractions.",
    rating: 5
  },
  {
    name: "Chris Lee",
    role: "Marketing Lead",
    content: "OneForAll has become essential to my daily routine. It's like having a personal assistant that never forgets anything.",
    rating: 5
  }
]

function Reviews() {
  return (
    <section className="py-32">
      <div className="px-[20vw] mb-16">
        <h2 className="text-5xl font-light text-center">What People Say</h2>
      </div>
      
      <div className="w-screen overflow-hidden">
        <div className="flex gap-6 animate-scroll items-center">
          {/* First set of reviews - starts from left edge */}
          <div className="flex gap-6 flex-shrink-0 items-center">
            {reviews.map((review, index) => (
              <div
                key={`first-${index}`}
                className="glass-strong w-[400px] p-4 rounded-2xl flex-shrink-0 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  "{review.content}"
                </p>
                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Second set for seamless loop */}
          <div className="flex gap-6 flex-shrink-0 items-center">
            {reviews.map((review, index) => (
              <div
                key={`second-${index}`}
                className="glass-strong w-[400px] p-4 rounded-2xl flex-shrink-0 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  "{review.content}"
                </p>
                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Third set to ensure smooth loop */}
          <div className="flex gap-6 flex-shrink-0 items-center">
            {reviews.map((review, index) => (
              <div
                key={`third-${index}`}
                className="glass-strong w-[400px] p-4 rounded-2xl flex-shrink-0 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-3 leading-relaxed text-sm">
                  "{review.content}"
                </p>
                <div>
                  <p className="font-medium text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
