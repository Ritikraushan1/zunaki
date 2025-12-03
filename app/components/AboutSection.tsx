export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden">
            <img 
              src="/placeholder-person.jpg" 
              alt="About Zunaki Plus" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <p className="text-gray-600 text-lg mb-2">About</p>
            <h2 className="text-4xl md:text-5xl text-gray-900">
              ZUNAKI PLUS
            </h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Integer Nec Odio. Praesent Libero. Sed Cursus Ante Dapibus Diam. Sed Nisi. Nulla Quis Sem At Nibh Elementum Imperdiet. Duis Sagittis Ipsum. Praesent Mauris. Fusce Nec Tellus Sed.
          </p>
        </div>
      </div>
    </section>
  );
}
