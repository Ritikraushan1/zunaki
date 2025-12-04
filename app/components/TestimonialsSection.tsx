"use client";

import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const testimonials = [
    {
      name: "Zoe Mantis",
      title: "Founder, Alpha Group",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
      name: "Don Joe",
      title: "Founder, Alpha Group",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
      name: "Sarah Johnson",
      title: "CEO, Tech Solutions",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
      name: "Michael Chen",
      title: "Director, Innovation Labs",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
      name: "Emily Rodriguez",
      title: "VP Marketing, Digital Corp",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
      name: "James Wilson",
      title: "Founder, StartUp Inc",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    },
    {
      name: "Lisa Anderson",
      title: "COO, Growth Partners",
      image: "/placeholder-avatar.jpg",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - cardsPerView : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - cardsPerView ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#0a0a1a] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">Testimonials</h2>
          
          {/* Navigation arrows */}
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial cards carousel */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 md:gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-6 space-y-4 shrink-0"
                style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)` }}
              >
                {/* Avatar and info */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
