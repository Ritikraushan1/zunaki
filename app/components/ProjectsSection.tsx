"use client";

import Button from "./Button";

export default function ProjectsSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-gray-900 mb-16">Our<br />Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with navigation arrows */}
          <div className="relative">
            <div className="w-full aspect-4/3 bg-gray-300 rounded-[40px] overflow-visible">
              <img 
                src="/placeholder-project.jpg" 
                alt="Project" 
                className="w-full h-full object-cover rounded-[40px]"
              />
            </div>
            
            {/* Navigation arrows - positioned at bottom right overlapping the image */}
            <div className="absolute bottom-4 right-4 flex gap-4">
              <button className="w-16 h-16 bg-[#0a0a1a] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-16 h-16 bg-[#0a0a1a] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-4xl text-gray-900">
              Where Strategy Meets Scale.
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>

            <Button variant="dark">LET'S TALK</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
