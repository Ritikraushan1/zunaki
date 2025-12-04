export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a1a] text-white py-16 px-8 overflow-hidden">
      {/* Decorative circles in background */}
      <svg className="absolute bottom-0 left-0 w-[479px] h-[365px]" viewBox="0 0 479 365" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.25"/>
          </filter>
          <linearGradient id="paint0_linear_0_1" x1="224.761" y1="153.027" x2="-21" y2="240.367" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A9A9A9"/>
            <stop offset="1" stopColor="#393939"/>
          </linearGradient>
          <linearGradient id="paint1_linear_0_1" x1="257.529" y1="106.765" x2="-21" y2="205.75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A9A9A9"/>
            <stop offset="1" stopColor="#393939"/>
          </linearGradient>
          <linearGradient id="paint2_linear_0_1" x1="159.225" y1="245.554" x2="-20.9999" y2="309.603" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A9A9A9"/>
            <stop offset="1" stopColor="#393939"/>
          </linearGradient>
          <linearGradient id="paint3_linear_0_1" x1="191.993" y1="199.291" x2="-21" y2="274.986" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A9A9A9"/>
            <stop offset="1" stopColor="#393939"/>
          </linearGradient>
        </defs>
        <circle cx="-21" cy="500" r="439.177" stroke="url(#paint0_linear_0_1)" strokeOpacity="0.4" strokeWidth="4" filter="url(#dropShadow)"/>
        <circle cx="-21" cy="500" r="498" stroke="url(#paint1_linear_0_1)" strokeOpacity="0.4" strokeWidth="4" filter="url(#dropShadow)"/>
        <circle cx="-20.9999" cy="500" r="321.529" stroke="url(#paint2_linear_0_1)" strokeOpacity="0.4" strokeWidth="4" filter="url(#dropShadow)"/>
        <circle cx="-21" cy="500" r="380.353" stroke="url(#paint3_linear_0_1)" strokeOpacity="0.4" strokeWidth="4" filter="url(#dropShadow)"/>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section with heading */}
        <div className="text-center mb-16 pb-12 border-b border-gray-300 flex justify-between items-center">
          <div className="text-4xl font-bold mb-4">ZP</div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold inline-block"
            style={{
              filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
            }}
          >
            Lets Grow Together
          </h2>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-400 leading-relaxed">
              We believe the best success is always shared success, which is why we commit to a true partnership with every client, move past traditional benchmarks and redefine what's possible for your business. Let's combine your ambitious vision with our strategic expertise to achieve exponential growth together.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
