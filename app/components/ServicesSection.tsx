export default function ServicesSection() {
  const services = [
    {
      icon: '</>',
      title: 'Website\nDevelopment',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-[#F5F3B3]'
    },
    {
      icon: 'CMS',
      title: 'Custom ERP\nDevelopment',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-[#E8E5F5]',
      isBox: true
    },
    {
      icon: '📱',
      title: 'Mobile App\nDevelopment',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-[#E8E5F5]'
    },
    {
      icon: '💻',
      title: 'Business\nAutomation',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-[#E8E5F5]'
    },
    {
      icon: '👍',
      title: 'Digital\nBranding',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-[#E8E5F5]'
    },
    {
      icon: '🔍',
      title: 'SEO\nOptimization',
      description: 'Maecenas elementum sapien in metus placerat finibus. Maecenas elementum.',
      bgColor: 'bg-[#E8E5F5]'
    }
  ];

  return (
    <section className="bg-[#0a0a1a] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-white mb-16">Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-3xl p-8 space-y-4`}>
              {service.isBox ? (
                <div className="text-sm font-bold border-2 border-gray-900 rounded-lg w-fit px-3 py-1">
                  {service.icon}
                </div>
              ) : (
                <div className="text-4xl mb-4">{service.icon}</div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 whitespace-pre-line">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
