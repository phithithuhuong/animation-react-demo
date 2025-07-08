import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Get In Touch</h1>
          <p className="text-xl opacity-90 animate-fade-in animation-delay-200">
            Have questions or want to collaborate? Let's connect!
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Contact Information</h2>
              
              <div className="flex items-start gap-4 mb-8 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-2xl">
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-2xl">
                  📱
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-8 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-2xl">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Location</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
                <div className="flex gap-3 flex-wrap">
                  <button className="flex items-center gap-2 text-primary-500 font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-primary-200 hover:bg-primary-500 hover:text-white hover:transform hover:-translate-y-1 hover:shadow-lg">
                    🐦 Twitter
                  </button>
                  <button className="flex items-center gap-2 text-primary-500 font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-primary-200 hover:bg-primary-500 hover:text-white hover:transform hover:-translate-y-1 hover:shadow-lg">
                    💼 LinkedIn
                  </button>
                  <button className="flex items-center gap-2 text-primary-500 font-medium px-4 py-2 rounded-lg transition-all duration-300 border border-primary-200 hover:bg-primary-500 hover:text-white hover:transform hover:-translate-y-1 hover:shadow-lg">
                    🐙 GitHub
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg transition-all duration-300 border border-gray-50 hover:transform hover:-translate-y-2 hover:shadow-2xl animate-fade-in animation-delay-200">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">Send a Message</h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-semibold text-gray-800">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-semibold text-gray-800">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-semibold text-gray-800">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold text-gray-800">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    className="px-4 py-3 border-2 border-gray-200 rounded-lg resize-vertical min-h-[120px] transition-all duration-300 focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-100"
                  />
                </div>

                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-none px-8 py-4 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 mt-4 hover:transform hover:-translate-y-1 hover:shadow-xl active:transform active:translate-y-0"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 