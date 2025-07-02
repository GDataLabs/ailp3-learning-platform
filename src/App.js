import React, { useState, useEffect } from 'react';
import { ChevronRight, Brain, DollarSign, Briefcase, BookOpen, Check, Menu, X, ExternalLink, TrendingUp, Shield, Users, Target, Zap, Award, Clock, Globe, AlertCircle, Lock, Eye } from 'lucide-react';

const AIEconomyHub = () => {
  const [progress, setProgress] = useState(0);
  const [checkedItems, setCheckedItems] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [earnings, setEarnings] = useState({
    brave: 2,
    swash: 20,
    culture: 5
  });

  // Load saved progress on mount
  useEffect(() => {
    const savedChecks = {};
    for (let i = 0; i < 5; i++) {
      const saved = localStorage.getItem(`check${i}`);
      if (saved === 'true') {
        savedChecks[i] = true;
      }
    }
    setCheckedItems(savedChecks);
    updateProgress(savedChecks);
  }, []);

  const updateProgress = (checks) => {
    const total = Object.keys(checks).filter(key => checks[key]).length;
    setProgress((total / 5) * 100);
  };

  const handleCheckChange = (index) => {
    const newChecks = { ...checkedItems, [index]: !checkedItems[index] };
    setCheckedItems(newChecks);
    localStorage.setItem(`check${index}`, newChecks[index]);
    updateProgress(newChecks);
  };

  const calculateTotalEarnings = () => {
    const braveEarnings = earnings.brave * 0.25 * 30;
    const swashEarnings = earnings.swash * 2;
    const cultureEarnings = earnings.culture * 30;
    return Math.round(braveEarnings + swashEarnings + cultureEarnings);
  };

  // G-Data Labs Logo Component
  const GDataLabsLogo = () => (
    <div className="flex items-center gap-3">
      <img src="light_logo_1024.png" alt="G-Data Labs" className="h-12 w-auto" />
      <div>
        <h1 className="text-xl font-bold text-gray-800">G-Data Labs</h1>
        <p className="text-xs text-gray-600">AI Economy Education</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <GDataLabsLogo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a>
              <a href="#learn" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Learn AI</a>
              <a href="#earn" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Earn Money</a>
              <a href="#careers" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Careers</a>
              <a href="#resources" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Resources</a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                <a href="#learn" className="text-gray-700 hover:text-indigo-600 font-medium">Learn AI</a>
                <a href="#earn" className="text-gray-700 hover:text-indigo-600 font-medium">Earn Money</a>
                <a href="#careers" className="text-gray-700 hover:text-indigo-600 font-medium">Careers</a>
                <a href="#resources" className="text-gray-700 hover:text-indigo-600 font-medium">Resources</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Partner Logos Section */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-600">In Partnership With</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* G-Data Labs Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="light_logo_1024.png" alt="G-Data Labs" className="h-12 w-auto" />
              <span className="text-sm font-medium text-gray-700">G-Data Labs</span>
            </div>

            {/* AILP3 Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="ailp3_logo.png" alt="AILP3" className="h-12 w-auto" />
              <span className="text-sm font-medium text-gray-700">AILP3</span>
            </div>

            {/* Operation Hope Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="h-10 w-auto" dangerouslySetInnerHTML={{
                __html: `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="37.144" viewBox="0 0 400 123.813"><defs><clipPath id="clip-path"><path fill="none" d="M0 0h400v123.813H0z"/></clipPath></defs><g clip-path="url(#clip-path)"><path d="M138.027 17.639v-.1a17.779 17.779 0 0135.553-.1v.1a17.779 17.779 0 01-35.553.1m26.217 0v-.1c0-4.869-3.445-9.109-8.488-9.109-5 0-8.345 4.145-8.345 9.011v.1c0 4.869 3.441 9.109 8.44 9.109 5.045 0 8.393-4.145 8.393-9.014" transform="translate(-27.714)" fill="#002554"/><path d="M187.869.844h14.145c8.345 0 13.72 4.385 13.72 11.857v.1c0 7.953-5.988 12.146-14.191 12.146h-4.528v9.639h-9.146zm13.485 16.771c3.252 0 5.234-1.734 5.234-4.385v-.1c0-2.892-1.982-4.436-5.282-4.436h-4.291v8.916z" transform="translate(-37.722 -.169)" fill="#002554"/><path d="M227.839.844h26.545V8.8h-17.492v5.1h15.843v7.375h-15.843v5.35h17.728v7.953h-26.781z" transform="translate(-45.747 -.169)" fill="#002554"/><path d="M268.752.843h15.605c5.047 0 8.537 1.351 10.753 3.664a10.6 10.6 0 012.922 7.856v.1a10.672 10.672 0 01-6.789 10.363l7.873 11.76h-10.561l-6.648-10.218H277.9v10.213h-9.146zm15.182 16.2c3.111 0 4.9-1.543 4.9-4v-.1c0-2.651-1.886-4-4.952-4H277.9v8.1z" transform="translate(-53.962 -.169)" fill="#002554"/><path d="M322.986.543h8.814l14.052 33.979h-9.807l-2.4-6.024h-12.734l-2.358 6.024h-9.62zM331 21.219l-3.678-9.59-3.724 9.59z" transform="translate(-62.03 -.109)" fill="#002554"/><path d="M361.273 9.038h-9.9V.844h28.952v8.194h-9.9v25.544h-9.147z" transform="translate(-70.55 -.17)" fill="#002554"/><rect transform="translate(315.375 .675)" fill="#002554" width="9.197" height="33.738"/><path d="M411.655 17.639v-.1a17.779 17.779 0 0135.552-.1v.1a17.779 17.779 0 01-35.552.1m26.217 0v-.1c0-4.869-3.444-9.109-8.489-9.109-5 0-8.345 4.145-8.345 9.011v.1c0 4.869 3.441 9.109 8.441 9.109 5.045 0 8.393-4.145 8.393-9.014" transform="translate(-82.655)" fill="#002554"/><path d="M461.5.844h8.534l13.578 17.834V.844h9.054v33.738h-8.014l-14.1-18.507v18.507H461.5z" transform="translate(-92.662 -.169)" fill="#002554"/><path d="M138.658 62.723h19.5v27.039h25.027V62.723h19.5v72.239h-19.5v-27.451h-25.027v27.451h-19.5z" transform="translate(-27.841 -12.594)" fill="#002554"/><path d="M232.614 98.686v-.206c0-20.744 16.281-37.565 37.991-37.565S308.4 77.531 308.4 98.273v.207c0 20.742-16.283 37.564-37.994 37.564s-37.789-16.615-37.789-37.358m55.882 0v-.206c0-10.424-7.336-19.5-18.093-19.5-10.652 0-17.788 8.874-17.788 19.3v.207c0 10.423 7.336 19.5 17.99 19.5 10.754 0 17.89-8.875 17.89-19.3" transform="translate(-46.706 -12.231)" fill="#002554"/><path d="M341.409 62.723h30.154c17.791 0 29.248 9.392 29.248 25.389v.205c0 17.026-12.765 26.006-30.254 26.006h-9.649v20.639h-19.5zm28.747 35.913c6.934 0 11.156-3.715 11.156-9.39v-.206c0-6.192-4.222-9.495-11.256-9.495h-9.147v19.091z" transform="translate(-68.55 -12.594)" fill="#002554"/><path d="M429.06 62.723h56.587v17.029h-37.29v10.94h33.1v15.787h-33.1v11.457h37.391v17.027H429.06z" transform="translate(-86.15 -12.594)" fill="#002554"/><path d="M0 37.974v45.947h19.84v38.6l75.6-62.033L19.84.759v37.25z" transform="translate(0 -.152)" fill="#ca2b30"/></g></svg>`
              }} />
            </div>

            {/* Atlanta Public Schools Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="aps_logo.jpeg" alt="Atlanta Public Schools" className="h-12 w-auto" />
              <span className="text-sm font-medium text-gray-700">Atlanta Public Schools</span>
            </div>

            {/* Georgia State University Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="gsu_logo.jpg" alt="Georgia State University" className="h-12 w-auto" />
              <span className="text-sm font-medium text-gray-700">Georgia State University</span>
            </div>

            {/* Clark Atlanta University Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="cau_logo.jpg" alt="Clark Atlanta University" className="h-12 w-auto" />
              <span className="text-sm font-medium text-gray-700">Clark Atlanta University</span>
            </div>

            {/* City of Atlanta Mayor's Office Logo */}
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="camo_logo.png" alt="City of Atlanta Mayor's Office" className="h-12 w-auto" />
              <span className="text-sm font-medium text-gray-700">City of Atlanta Mayor's Office</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Your AI Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Learn to create with AI, monetize your data, and discover high-paying careers in the AI economy
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a href="#earn" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg">
                Start Earning Now <ChevronRight className="inline ml-2" size={20} />
              </a>
              <a href="#learn" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-indigo-600 transform hover:scale-105 transition-all">
                Explore AI Tools
              </a>
            </div>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up animation-delay-600">
              <div className="text-4xl font-bold mb-2">$220+</div>
              <div className="text-lg opacity-90">Monthly Earning Potential</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-700">
              <div className="text-4xl font-bold mb-2">$80K+</div>
              <div className="text-lg opacity-90">Entry-Level AI Salaries</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-800">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-lg opacity-90">Free AI Tools to Master</div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-600">
              Progress: {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>

      {/* Learn AI Section */}
      <section id="learn" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Master AI Creation Tools</h2>
            <p className="text-xl text-gray-600">Start creating with AI in minutes, not months</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Text Generation Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Text Generation</h3>
              <p className="text-gray-600 mb-6">Create content, code, and ideas with AI chatbots</p>
              <div className="space-y-3">
                <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">ChatGPT</span>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Claude</span>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              </div>
            </div>

            {/* Image Creation Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-3">Image Creation</h3>
              <p className="text-gray-600 mb-6">Generate art, logos, and designs instantly</p>
              <div className="space-y-3">
                <a href="https://www.bing.com/create" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">DALL-E 3</span>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
                <a href="https://www.canva.com/magic-write/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Canva AI</span>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              </div>
            </div>

            {/* Audio & Music Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold mb-3">Audio & Music</h3>
              <p className="text-gray-600 mb-6">Clone voices and create original music</p>
              <div className="space-y-3">
                <a href="https://elevenlabs.io" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">ElevenLabs</span>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
                <a href="https://suno.ai" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="font-medium">Suno AI</span>
                  <ExternalLink size={16} className="text-gray-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Try It Now Box */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Try It Now: Your First AI Creation</h3>
            <p className="text-gray-600 mb-4">Copy this prompt and try it in ChatGPT:</p>
            <div className="bg-white p-4 rounded-lg shadow-inner max-w-2xl mx-auto mb-6">
              <code className="text-lg text-gray-800">
                "Create a business name and tagline for a teen-run AI tutoring service that helps students with homework using AI tools"
              </code>
            </div>
            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer"
               className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
              Open ChatGPT <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Earn Money Section - Updated with Data Dashboard */}
      <section id="earn" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Your Data Dashboard</h2>
            <p className="text-xl text-gray-600">Discover how 5,000+ companies use your data and how to get paid for it</p>
          </div>

          {/* Interactive Data Sources Dashboard */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6">Who's Using Your Data Right Now?</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">52,000</div>
                <div className="text-sm">Data points Facebook tracks per user</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">$235</div>
                <div className="text-sm">Your annual value to Meta</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">1,500</div>
                <div className="text-sm">Info pieces data brokers have on you</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">$0.11</div>
                <div className="text-sm">Value of pregnancy data (highest)</div>
              </div>
            </div>

            {/* Data Usage Visualization */}
            <div className="mb-8">
              <h4 className="text-lg font-bold mb-4">Your Data Across Platforms</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm">Social Media</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-sm font-bold">95%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm">Search Engines</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600" style={{width: '88%'}}></div>
                  </div>
                  <span className="text-sm font-bold">88%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm">Shopping Apps</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{width: '82%'}}></div>
                  </div>
                  <span className="text-sm font-bold">82%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm">Streaming</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-600" style={{width: '76%'}}></div>
                  </div>
                  <span className="text-sm font-bold">76%</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-32 text-sm">Gaming</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-yellow-600" style={{width: '65%'}}></div>
                  </div>
                  <span className="text-sm font-bold">65%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Monetization Platforms */}
          <h3 className="text-2xl font-bold text-center mb-8">💰 Turn Your Data Into Income</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Survey Platforms */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-indigo-600">📝 Survey & Research</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>YouGov</span>
                  <span className="text-green-600 font-bold">$1-3/survey</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DataWallet</span>
                  <span className="text-green-600 font-bold">$10-50/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Digi.me</span>
                  <span className="text-green-600 font-bold">Varies</span>
                </div>
              </div>
            </div>

            {/* Blockchain Platforms */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-purple-600">⛓️ Blockchain Data</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Ocean Protocol</span>
                  <span className="text-green-600 font-bold">OCEAN tokens</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ProRata.ai</span>
                  <span className="text-green-600 font-bold">50% revenue</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Itheum</span>
                  <span className="text-green-600 font-bold">P2P trading</span>
                </div>
              </div>
            </div>

            {/* Fitness & Health */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-green-600">🏃 Fitness Data</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>MetaGym</span>
                  <span className="text-green-600 font-bold">10-100 tokens</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sweatcoin</span>
                  <span className="text-green-600 font-bold">Steps = coins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Achievement</span>
                  <span className="text-green-600 font-bold">$10/week</span>
                </div>
              </div>
            </div>

            {/* Browser Data */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-orange-600">🌐 Browsing Data</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Brave (BAT)</span>
                  <span className="text-green-600 font-bold">$5-20/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Swash</span>
                  <span className="text-green-600 font-bold">$30-50/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Gener8</span>
                  <span className="text-green-600 font-bold">Points system</span>
                </div>
              </div>
            </div>

            {/* Shopping Data */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-red-600">🛍️ Shopping Data</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Nielsen Panel</span>
                  <span className="text-green-600 font-bold">$50/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Receipt Hog</span>
                  <span className="text-green-600 font-bold">$5-15/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Culture.io</span>
                  <span className="text-green-600 font-bold">$100-200/mo</span>
                </div>
              </div>
            </div>

            {/* Location Data */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-bold mb-3 text-blue-600">📍 Location Data</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Panel App</span>
                  <span className="text-green-600 font-bold">$25/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Premise</span>
                  <span className="text-green-600 font-bold">$5-20/task</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mobee</span>
                  <span className="text-green-600 font-bold">$1-3/mission</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Value Calculator */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-6">Calculate Your Total Data Value</h3>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold mb-3">Your Current Data Value</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Facebook/Instagram:</span>
                      <span className="font-bold">$235/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Google Search:</span>
                      <span className="font-bold">$182/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Amazon Shopping:</span>
                      <span className="font-bold">$158/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TikTok/Snapchat:</span>
                      <span className="font-bold">$92/year</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Potential Monthly Earnings</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Basic Tier (3 platforms):</span>
                      <span className="font-bold">$50-100/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Active Tier (5-6 platforms):</span>
                      <span className="font-bold">$150-250/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Power User (8+ platforms):</span>
                      <span className="font-bold">$300-500/mo</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Total Annual Value to Companies: $667+</div>
                <div className="text-lg mt-2">You could be earning: $1,800-6,000/year instead!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🛡️ Responsible AI Usage</h2>
            <p className="text-xl text-gray-600">Learn to use AI ethically and protect your privacy</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Privacy Protection */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Lock size={32} />
                <h3 className="text-2xl font-bold">Protect Your Privacy</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Never Share Personal Info</h4>
                    <p className="text-sm opacity-90">Don't input SSN, passwords, or private details into AI tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Use Privacy-Focused Tools</h4>
                    <p className="text-sm opacity-90">Choose AI services that don't store or sell your data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Regular Privacy Audits</h4>
                    <p className="text-sm opacity-90">Check your digital footprint and data permissions monthly</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">VPN for Sensitive Work</h4>
                    <p className="text-sm opacity-90">Use a VPN when working with confidential AI projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ethical AI Use */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye size={32} />
                <h3 className="text-2xl font-bold">Use AI Ethically</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Cite AI Assistance</h4>
                    <p className="text-sm opacity-90">Always disclose when AI helped create your work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Verify AI Information</h4>
                    <p className="text-sm opacity-90">Fact-check AI outputs - they can be wrong or biased</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">Respect Copyrights</h4>
                    <p className="text-sm opacity-90">Don't use AI to copy others' work or bypass licenses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold mb-1">No Harmful Content</h4>
                    <p className="text-sm opacity-90">Never create deepfakes or content that could hurt others</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Ethics Checklist */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-center mb-6">Before You Create with AI, Ask Yourself:</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">🤔</div>
                <p className="font-medium">Is this content truthful and accurate?</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">👥</div>
                <p className="font-medium">Could this harm someone's reputation?</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <p className="font-medium">Am I respecting copyright and ownership?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Financial Planning Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🤖 AI-Powered Financial Planning</h2>
            <p className="text-xl text-gray-600">67% of Gen Z already uses AI for finances - here's how to start</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* AI Tools */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Top AI Financial Tools for Teens</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">C</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Cleo</h4>
                      <p className="text-gray-600 text-sm mb-2">AI budgeting assistant with personality</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Roasts your overspending habits</li>
                        <li>• Automatic expense categorization</li>
                        <li>• Free tier available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">W</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Wally (WallyGPT)</h4>
                      <p className="text-gray-600 text-sm mb-2">World's first GPT-powered finance app</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Conversational AI advisor</li>
                        <li>• 200+ currency support</li>
                        <li>• Personalized insights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">AI</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">ChatGPT/Claude</h4>
                      <p className="text-gray-600 text-sm mb-2">Free AI assistants for custom advice</p>
                      <ul className="text-sm space-y-1 text-gray-600">
                        <li>• Create custom budgets</li>
                        <li>• Investment education</li>
                        <li>• Financial planning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Prompts */}
            <div className="bg-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Copy These AI Prompts</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sm text-indigo-600 mb-2">For Budgeting:</h4>
                  <code className="text-sm text-gray-700 block">
                    "Act as a financial advisor. Help me create a zero-based budget for a high school student earning $800/month. Include categories for: transportation, meals, clothing, entertainment, savings, and emergency fund."
                  </code>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sm text-indigo-600 mb-2">For Saving:</h4>
                  <code className="text-sm text-gray-700 block">
                    "I spend $5 daily on coffee ($150/month). Show me how much I could save by investing this money instead, with compound interest calculations over 10, 20, and 40 years."
                  </code>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sm text-indigo-600 mb-2">For Investing:</h4>
                  <code className="text-sm text-gray-700 block">
                    "Explain index funds vs individual stocks to a 17-year-old beginner. Include pros, cons, and which is better for someone starting with $500."
                  </code>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-sm text-indigo-600 mb-2">For Goals:</h4>
                  <code className="text-sm text-gray-700 block">
                    "Create a savings plan to buy a $1,200 laptop in 6 months. I can work 10 hours/week at $12/hour. Include a week-by-week breakdown."
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Impact Visualization */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">💡 Small Changes, Big Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl mb-2">☕</div>
                <h4 className="font-bold mb-2">Skip Daily Coffee</h4>
                <p className="text-gray-600 mb-4">Save $150/month</p>
                <div className="text-2xl font-bold text-green-600">$50,000+</div>
                <p className="text-sm text-gray-600">by retirement</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-bold mb-2">Cancel Unused Subs</h4>
                <p className="text-gray-600 mb-4">Average $45/month</p>
                <div className="text-2xl font-bold text-green-600">$540</div>
                <p className="text-sm text-gray-600">emergency fund/year</p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-3xl mb-2">🎮</div>
                <h4 className="font-bold mb-2">Game Less, Earn More</h4>
                <p className="text-gray-600 mb-4">Work 5 hrs/week extra</p>
                <div className="text-2xl font-bold text-green-600">$3,120</div>
                <p className="text-sm text-gray-600">extra per year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investment Growth Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📈 AI Investment Growth Calculator</h2>
            <p className="text-xl text-gray-600">See how investing in AI today could grow your wealth</p>
          </div>

          {/* Market Growth Stats */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">AI Market Explosion: Your Opportunity</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600">$184B</div>
                <div className="text-gray-600">Current AI Market (2024)</div>
                <div className="text-sm text-gray-500 mt-2">Where we are today</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600">$3.68T</div>
                <div className="text-gray-600">Projected by 2034</div>
                <div className="text-sm text-gray-500 mt-2">20x growth potential</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">36.6%</div>
                <div className="text-gray-600">Annual Growth Rate</div>
                <div className="text-sm text-gray-500 mt-2">Faster than internet boom</div>
              </div>
            </div>

            {/* Growth Visualization */}
            <div className="relative h-64 bg-gray-50 rounded-lg p-4">
              {/* Y-axis labels */}
              <div className="absolute left-2 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>$3.68T</span>
                <span>$2.95T</span>
                <span>$2.21T</span>
                <span>$1.47T</span>
                <span>$0.74T</span>
                <span>$0.18T</span>
              </div>
              <div className="absolute bottom-0 left-12 right-0 flex items-end justify-between h-full">
                <div className="flex-1 flex flex-col items-center justify-end">
                  <div className="w-12 bg-gradient-to-t from-indigo-500 to-indigo-600 rounded-t shadow-md" style={{height: '10%'}}>
                    <div className="text-xs text-white font-bold p-1 text-center">$184B</div>
                  </div>
                  <span className="text-xs mt-2 font-medium">2024</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end">
                  <div className="w-12 bg-gradient-to-t from-indigo-500 to-indigo-600 rounded-t shadow-md" style={{height: '25%'}}>
                    <div className="text-xs text-white font-bold p-1 text-center">$461B</div>
                  </div>
                  <span className="text-xs mt-2 font-medium">2026</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end">
                  <div className="w-12 bg-gradient-to-t from-purple-500 to-purple-600 rounded-t shadow-md" style={{height: '45%'}}>
                    <div className="text-xs text-white font-bold p-1 text-center">$1.1T</div>
                  </div>
                  <span className="text-xs mt-2 font-medium">2028</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end">
                  <div className="w-12 bg-gradient-to-t from-purple-500 to-purple-600 rounded-t shadow-md" style={{height: '70%'}}>
                    <div className="text-xs text-white font-bold p-1 text-center">$1.8T</div>
                  </div>
                  <span className="text-xs mt-2 font-medium">2030</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end">
                  <div className="w-12 bg-gradient-to-t from-green-500 to-green-600 rounded-t shadow-md" style={{height: '90%'}}>
                    <div className="text-xs text-white font-bold p-1 text-center">$2.7T</div>
                  </div>
                  <span className="text-xs mt-2 font-medium">2032</span>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end">
                  <div className="w-12 bg-gradient-to-t from-green-500 to-green-600 rounded-t shadow-md" style={{height: '100%'}}>
                    <div className="text-xs text-white font-bold p-1 text-center">$3.7T</div>
                  </div>
                  <span className="text-xs mt-2 font-medium">2034</span>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Calculator */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-2xl mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Your AI Investment Growth Scenarios</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">Conservative (10% annual)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Start with $100:</span>
                    <span className="font-bold">$673 in 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start with $500:</span>
                    <span className="font-bold">$3,364 in 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start with $1,000:</span>
                    <span className="font-bold">$6,728 in 20 years</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">Moderate (15% annual)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Start with $100:</span>
                    <span className="font-bold">$1,637 in 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start with $500:</span>
                    <span className="font-bold">$8,184 in 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start with $1,000:</span>
                    <span className="font-bold">$16,367 in 20 years</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-lg font-bold mb-4">AI Sector Avg (25% annual)</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Start with $100:</span>
                    <span className="font-bold">$8,674 in 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start with $500:</span>
                    <span className="font-bold">$43,368 in 20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Start with $1,000:</span>
                    <span className="font-bold">$86,736 in 20 years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Youth Investment Platforms */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">🎯 Start Investing in AI Today</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4">For Ages 13-17 (with parent)</h4>
                <div className="space-y-4">
                  <div className="border-2 border-indigo-500 rounded-lg p-4">
                    <h5 className="font-bold text-indigo-600">Fidelity Youth Account</h5>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>✓ Teen-owned account (not custodial)</li>
                      <li>✓ $1 minimum investment</li>
                      <li>✓ Commission-free trades</li>
                      <li>✓ Fractional shares of AI stocks</li>
                    </ul>
                  </div>
                  <div className="border-2 border-green-500 rounded-lg p-4">
                    <h5 className="font-bold text-green-600">Greenlight</h5>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>✓ Parent-approved investing</li>
                      <li>✓ $1 fractional shares</li>
                      <li>✓ Educational games</li>
                      <li>✓ Real-time notifications</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Practice First (Free Simulators)</h4>
                <div className="space-y-4">
                  <div className="border-2 border-purple-500 rounded-lg p-4">
                    <h5 className="font-bold text-purple-600">Stock Market Game</h5>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>✓ $100,000 virtual cash</li>
                      <li>✓ Real market prices</li>
                      <li>✓ 500,000+ students use it</li>
                      <li>✓ Teacher resources included</li>
                    </ul>
                  </div>
                  <div className="border-2 border-orange-500 rounded-lg p-4">
                    <h5 className="font-bold text-orange-600">Investopedia Simulator</h5>
                    <ul className="text-sm space-y-1 mt-2">
                      <li>✓ Professional-level tools</li>
                      <li>✓ Options & short selling</li>
                      <li>✓ Rankings & competitions</li>
                      <li>✓ Educational articles</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Investment Options */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4">Top AI Investment Options for Beginners</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold text-sm text-gray-600 mb-2">AI ETFs (Lower Risk)</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">BOTZ (Robotics & AI)</span>
                      <span className="text-green-600 font-bold text-sm">+35.4% (2024)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">AIQ (AI & Technology)</span>
                      <span className="text-green-600 font-bold text-sm">+31.8% (2024)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">ROBO (Global Robotics)</span>
                      <span className="text-green-600 font-bold text-sm">+28.5% (2024)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-gray-600 mb-2">Individual AI Stocks (Higher Risk)</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">NVIDIA (AI chips)</span>
                      <span className="text-green-600 font-bold text-sm">+171% (2024)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Palantir (AI software)</span>
                      <span className="text-green-600 font-bold text-sm">+340% (2024)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Microsoft (OpenAI)</span>
                      <span className="text-green-600 font-bold text-sm">+61% (2024)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🎯 AI Career Paths</h2>
            <p className="text-xl text-gray-600">Join the fastest-growing job market in history</p>
          </div>

          {/* AI Career Stats */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12 shadow-2xl border">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 text-gray-800">The AI Job Boom is Real</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="text-3xl font-bold text-orange-600">2.4M</div>
                  <div className="text-sm text-gray-600">AI jobs by 2025</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="text-3xl font-bold text-red-600">74%</div>
                  <div className="text-sm text-gray-600">Annual job growth</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="text-3xl font-bold text-green-600">$146K</div>
                  <div className="text-sm text-gray-600">Average AI salary</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border">
                  <div className="text-3xl font-bold text-blue-600">45%</div>
                  <div className="text-sm text-gray-600">No degree required</div>
                </div>
              </div>
              <p className="mt-6 text-xl text-gray-700">Entry-level positions starting at $60K+ with just certificates!</p>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Start Today (No Experience)</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Data Annotator</span>
                    <span className="font-bold text-green-600">$30-50k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Content Creator</span>
                    <span className="font-bold text-green-600">$40-60k</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-gray-400 hidden md:block" size={32} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="text-xl font-bold">6 Months (With Learning)</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Prompt Engineer</span>
                    <span className="font-bold text-green-600">$60-80k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Assistant Trainer</span>
                    <span className="font-bold text-green-600">$50-70k</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-gray-400 hidden md:block" size={32} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    <Zap size={24} />
                  </div>
                  <h4 className="text-xl font-bold">1-2 Years (With Skills)</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Junior AI Developer</span>
                    <span className="font-bold text-green-600">$80-120k</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Product Manager</span>
                    <span className="font-bold text-green-600">$90-130k</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="text-gray-400 hidden md:block" size={32} />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Award className="text-purple-500" size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Future You</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>AI Ethics Consultant</span>
                    <span className="font-bold">$150-500/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AI Startup Founder</span>
                    <span className="font-bold">Sky's the limit!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Free Learning Resources */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">📚 Free Learning Paths</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-2">Google AI Essentials</h4>
                <p className="text-gray-600 mb-4">10-hour course, free certificate</p>
                <a href="https://grow.google/ai/" target="_blank" rel="noopener noreferrer"
                   className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2">
                  Start Learning <ExternalLink size={16} />
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-2">IBM AI Professional</h4>
                <p className="text-gray-600 mb-4">6-month program, job-ready skills</p>
                <a href="https://www.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai" 
                   target="_blank" rel="noopener noreferrer"
                   className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2">
                  Enroll Free <ExternalLink size={16} />
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-bold mb-2">Python Basics</h4>
                <p className="text-gray-600 mb-4">Essential for AI development</p>
                <a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer"
                   className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-2">
                  Code Now <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📋 Your AI Economy Action Plan</h2>
            <p className="text-xl text-gray-600">Track your progress and take action today</p>
          </div>

          {/* Action Checklist */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Complete Your Checklist</h3>
            <div className="space-y-4">
              {[
                { label: "Tonight:", task: "Install Brave browser or Swash extension", time: "clock" },
                { label: "This Week:", task: "Create AI art, story, or music", time: "zap" },
                { label: "This Month:", task: "Complete one free AI course", time: "book" },
                { label: "This Summer:", task: "Build a portfolio project", time: "briefcase" },
                { label: "This Year:", task: "Apply for AI internships", time: "award" }
              ].map((item, index) => (
                <div key={index} 
                     className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                     onClick={() => handleCheckChange(index)}>
                  <input 
                    type="checkbox" 
                    checked={checkedItems[index] || false}
                    onChange={() => {}}
                    className="w-6 h-6 text-indigo-600 rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <span className="font-bold text-indigo-600">{item.label}</span>
                    <span className="ml-2">{item.task}</span>
                  </div>
                  {checkedItems[index] && <Check className="text-green-500" size={24} />}
                </div>
              ))}
            </div>
          </div>

          {/* AI Business Ideas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">💡 AI Business Ideas for Teens</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-colors">
                <h4 className="text-lg font-bold mb-2">AI Tutoring Service</h4>
                <p className="text-gray-600 mb-3">Help classmates use AI tools for homework (ethically!)</p>
                <p className="text-2xl font-bold text-green-600">$20-50/hour</p>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-colors">
                <h4 className="text-lg font-bold mb-2">Social Media AI Content</h4>
                <p className="text-gray-600 mb-3">Create AI-powered content for local businesses</p>
                <p className="text-2xl font-bold text-green-600">$500-2000/month</p>
              </div>
              <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-indigo-500 transition-colors">
                <h4 className="text-lg font-bold mb-2">AI Art Commissions</h4>
                <p className="text-gray-600 mb-3">Design logos, profile pics, and digital art</p>
                <p className="text-2xl font-bold text-green-600">$25-200/piece</p>
              </div>
            </div>
          </div>

          {/* Essential Links Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold mb-4">🤖 AI Tools Directory</h4>
              <ul className="space-y-2">
                <li><a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" 
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  📝 ChatGPT <ExternalLink size={14} />
                </a></li>
                <li><a href="https://claude.ai" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🤖 Claude <ExternalLink size={14} />
                </a></li>
                <li><a href="https://www.bing.com/create" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🎨 DALL-E 3 <ExternalLink size={14} />
                </a></li>
                <li><a href="https://suno.ai" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🎵 Suno AI <ExternalLink size={14} />
                </a></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold mb-4">💰 Earning Platforms</h4>
              <ul className="space-y-2">
                <li><a href="https://brave.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🦁 Brave Rewards <ExternalLink size={14} />
                </a></li>
                <li><a href="https://swashapp.io" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🌊 Swash Data <ExternalLink size={14} />
                </a></li>
                <li><span className="text-gray-500">📊 Culture.io (Coming Soon)</span></li>
                <li><a href="https://app.streamr.network" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🔍 Streamr <ExternalLink size={14} />
                </a></li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold mb-4">📚 Learning Resources</h4>
              <ul className="space-y-2">
                <li><a href="https://grow.google/ai/" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  📘 Google AI Course <ExternalLink size={14} />
                </a></li>
                <li><a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🎓 Coursera AI <ExternalLink size={14} />
                </a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  💻 GitHub Portfolio <ExternalLink size={14} />
                </a></li>
                <li><a href="https://kaggle.com" target="_blank" rel="noopener noreferrer"
                       className="text-gray-700 hover:text-indigo-600 flex items-center gap-2">
                  🏆 Kaggle Competitions <ExternalLink size={14} />
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <GDataLabsLogo />
              </div>
              <p className="text-gray-400 text-sm">
                Part of AILP3 Summer Program<br />
                Robinson College of Business<br />
                Georgia State University
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#learn" className="text-gray-400 hover:text-white transition-colors">AI Tools</a></li>
                <li><a href="#earn" className="text-gray-400 hover:text-white transition-colors">Earn Money</a></li>
                <li><a href="#careers" className="text-gray-400 hover:text-white transition-colors">Career Paths</a></li>
                <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <p className="text-gray-400 mb-2">Share your AI creations:</p>
              <p className="text-indigo-400">#AILP3Summer2025</p>
              <p className="text-indigo-400">#AIEconomy101</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get Started</h4>
              <p className="text-gray-400 mb-4">Ready to begin your AI journey?</p>
              <a href="#earn" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors inline-block">
                Start Earning Now
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 G-Data Labs & AILP3 Program. Empowering the next generation of AI innovators.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
          animation-fill-mode: both;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default AIEconomyHub;