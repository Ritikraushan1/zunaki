import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] overflow-hidden">
      {/* Gradient blur at top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-to-b from-[#5454D4] via-[#AB51FF] to-transparent opacity-40 blur-[150px]"></div>

      {/* Background circular patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full border border-white/5 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full border border-white/5 -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/2 w-[1000px] h-[1000px] rounded-full border border-white/5 -translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32 max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight">
          Digital Marketing<br />Made Simple
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
          If You're Aiming For Exceptional Growth Higher Sales And Boosted<br />
          Profitability Through Paid In Advertising You've Come To The Right Place
        </p>

        <Button className="px-12">LET'S TALK</Button>
      </main>
    </div>
  );
}
