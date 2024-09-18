import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto px-4">
        {/* Email Subscription */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none border border-gray-300"
              />
              <button className="bg-orange-500 p-2 rounded-r-md hover:bg-orange-600 transition">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500 transition">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500 transition">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Menu</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">About</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Shop</a></li>
              <li><a href="blog.html" className="hover:text-orange-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <ul className="space-y-1">
              <li className="flex items-center text-gray-600">
                <i className="fa fa-map-marker mr-2" aria-hidden="true" />
                <span>123 Street, City</span>
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fa fa-phone mr-2" aria-hidden="true" />
                <span>+01 1234567890</span>
              </li>
              <li className="flex items-center text-gray-600">
                <i className="fa fa-envelope mr-2" aria-hidden="true" />
                <span>demo@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-orange-500 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-4 text-center">
          <img src="/src/assets/images/Logo_01.jpg" alt="Logo" className="h-8 mx-auto mb-2" />
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
