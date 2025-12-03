export default function CommitmentsSection() {
  const stats = [
    {
      label: 'Project that Have been successfully completed',
      value: '245%'
    },
    {
      label: 'Audiences reached',
      value: '130K+'
    },
    {
      label: 'Businesses Trust Us',
      value: '50+'
    }
  ];

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-gray-900 mb-4">Commitments</h2>
        <p className="text-gray-500 mb-12 max-w-2xl">
          We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative bg-[#EEEEFF] rounded-3xl p-8 overflow-hidden min-h-[240px] flex flex-col justify-between"
            >
              {/* Label at top */}
              <p className="text-gray-600 text-base leading-relaxed">
                {stat.label}
              </p>
              
              {/* Decorative circles from bottom-left corner */}
              <svg className="absolute bottom-0 left-0 w-40 h-32" viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="150" r="130.353" stroke="url(#paint0_linear_0_1)" strokeOpacity="0.4" strokeWidth="4"/>
                <circle cx="10" cy="150" r="148" stroke="url(#paint1_linear_0_1)" strokeOpacity="0.4" strokeWidth="4"/>
                <circle cx="10" cy="150" r="95.0588" stroke="url(#paint2_linear_0_1)" strokeOpacity="0.4" strokeWidth="4"/>
                <circle cx="9.99998" cy="150" r="112.706" stroke="url(#paint3_linear_0_1)" strokeOpacity="0.4" strokeWidth="4"/>
                <defs>
                  <linearGradient id="paint0_linear_0_1" x1="83.7284" y1="45.9082" x2="10" y2="72.1102" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3030FF"/>
                    <stop offset="1" stopColor="#00C4FF"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_0_1" x1="93.5588" y1="32.0294" x2="10" y2="61.725" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3030FF"/>
                    <stop offset="1" stopColor="#00C4FF"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_0_1" x1="64.0675" y1="73.6661" x2="10" y2="92.8809" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3030FF"/>
                    <stop offset="1" stopColor="#00C4FF"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_0_1" x1="73.8979" y1="59.7873" x2="9.99999" y2="82.4957" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3030FF"/>
                    <stop offset="1" stopColor="#00C4FF"/>
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Value at bottom right */}
              <div className="relative z-10 text-right">
                <h3 className="text-6xl text-gray-900">
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
