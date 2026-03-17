export default function Footer() {
    return (
        <div className="w-full">
      <footer className="bg-white-900 text-black py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About Truvia</h3>
            <p className="text-gray-400 text-sm">
              AI-powered image analysis and emotion-based recommendations to enhance well-being.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact & Socials */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">Email: support@truvia.com</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
  
        </div>
  
        {/* Bottom Section */}
        <div className="border-t border-gray-700 text-center text-sm text-gray-500 mt-6 pt-4">
          © 2026 truvia. All rights reserved.
        </div>
      </footer>
      </div>
    );
  }
  