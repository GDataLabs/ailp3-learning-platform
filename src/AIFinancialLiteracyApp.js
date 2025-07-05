import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, DollarSign, Brain, Shield, TrendingUp, Users, Star, Clock, Send, BarChart3, Zap, Target, Award, ArrowRight, Sparkles, Globe, Heart, Briefcase, Car, Scale, PiggyBank, Gamepad2, Handshake, Eye, FileText, Video, Music } from 'lucide-react';

const TitlePageBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.offsetWidth;
        let height = canvas.height = canvas.offsetHeight;
        let circles = [];

        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };

        class Circle {
            constructor() {
                this.pos = { x: Math.random() * width, y: Math.random() * height };
                this.size = Math.random() * 400 + 200;
                this.speed = { x: (Math.random() - 0.5) * 0.2, y: (Math.random() - 0.5) * 0.2 };
                const colors = [
                    'hsla(210, 100%, 85%, 0.5)', 
                    'hsla(190, 100%, 80%, 0.5)',
                    'hsla(260, 100%, 90%, 0.5)',
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.filter = 'blur(100px)';
                ctx.fill();
            }

            update() {
                this.pos.x += this.speed.x;
                this.pos.y += this.speed.y;

                if (this.pos.x > width + this.size || this.pos.x < -this.size) {
                    this.speed.x *= -1;
                }
                if (this.pos.y > height + this.size || this.pos.y < -this.size) {
                    this.speed.y *= -1;
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            circles.forEach(circle => {
                circle.update();
                circle.draw();
            });
            requestAnimationFrame(animate);
        };

        for (let i = 0; i < 3; i++) {
            circles.push(new Circle());
        }

        window.addEventListener('resize', resize);
        animate();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10"></canvas>;
};


const AIFinancialLiteracyApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pollResponses, setPollResponses] = useState([]);
  const [userDataValue, setUserDataValue] = useState(0);
  const [wordCloudWords, setWordCloudWords] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [partnerActivityTime, setPartnerActivityTime] = useState(600);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [pledgeData, setPledgeData] = useState({ tool: '', goal: '', teach: '' });
  const [biasScenario, setBiasScenario] = useState(null);
  const [finalWords, setFinalWords] = useState([]);

  // Timer countdown
  useEffect(() => {
    if (isTimerRunning && partnerActivityTime > 0) {
      const timer = setTimeout(() => setPartnerActivityTime(partnerActivityTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (partnerActivityTime === 0 && isTimerRunning) {
        setIsTimerRunning(false);
    }
  }, [isTimerRunning, partnerActivityTime]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const slides = [
    // Title Page
    {
      id: 'title-page',
      title: 'Welcome',
      component: <TitleSlide onStart={nextSlide} />
    },
    // Opening Hook
    {
      id: 'opening',
      title: 'How Many Apps Did You Use Yesterday?',
      component: <OpeningPoll responses={pollResponses} setPollResponses={setPollResponses} />
    },
    // Module 2: AI Economy
    {
      id: 'data-dollars',
      title: "Your Data's Value",
      component: <DataDollarsModule setUserDataValue={setUserDataValue} userDataValue={userDataValue} />
    },
    // Module 3: Responsible AI
    {
      id: 'bias-reality',
      title: 'AI Bias in Financial Services',
      component: <BiasModule />
    },
    // Module 4: AI Tools Demo
    {
      id: 'ai-tools',
      title: 'AI Financial Planning Tools',
      component: <AIToolsDemo selectedPrompt={selectedPrompt} setSelectedPrompt={setSelectedPrompt} aiResponse={aiResponse} setAiResponse={setAiResponse} />
    },
    // Module 5: Partner Activity
    {
      id: 'partner-activity',
      title: 'Design Your AI Financial Solution',
      component: <PartnerActivity time={partnerActivityTime} isRunning={isTimerRunning} setIsRunning={setIsTimerRunning} setPartnerActivityTime={setPartnerActivityTime} />
    },
    // Closing
    {
      id: 'closing',
      title: 'Your Financial Dignity Action Plan',
      component: <ClosingModule pledgeData={pledgeData} setPledgeData={setPledgeData} finalWords={finalWords} setFinalWords={setFinalWords} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 text-slate-800 overflow-hidden font-sans relative">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50 px-4 sm:px-6 py-3 border-b border-slate-200 shadow-sm">
        {/* Main container: stacks vertically on small screens, becomes a row on larger screens */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          
          {/* Group 1: Logos, Title, Subtitle. This will be the top element on mobile. */}
          <div className="flex items-center gap-3">
            <img src="logos/gdatalogo_regular.webp" alt="G-Data Labs" className="h-8 sm:h-10 w-auto" />
            <img src="logos/ailp3_logo.png" alt="AILP3" className="h-8 sm:h-10 w-auto" />
            <img src="logos/op_hope_logo.png" alt="Operation Hope" className="h-8 sm:h-10 w-auto" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                AI Financial Literacy
              </h1>
              <p className="text-xs text-slate-500">Your Data, Your Dollars, Your Dignity</p>
            </div>
          </div>
          
          {/* Group 2: Edition, Progress Dots. This will be the bottom element on mobile. */}
          <div className="flex items-center self-end sm:self-center gap-4">
            <div className="text-sm text-slate-500 hidden md:block">Atlanta High School Edition</div>
            <div className="flex gap-1.5">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-xl min-h-[600px] border border-slate-200 ${currentSlide === 0 ? 'bg-transparent shadow-none border-none' : ''}`}>
             {currentSlide > 0 && (
                <h2 className="text-4xl font-bold mb-8 text-center text-slate-800">
                {slides[currentSlide].title}
                </h2>
            )}
            {currentSlide === 1 && (
              <>
                <div className="max-w-md mx-auto mb-8">
                  <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
                      <Music className="w-5 h-5 text-blue-500" />
                      Listen to Our Introduction
                    </h3>
                    <audio 
                      src="podcasts/intro_podcast.wav"
                      controls
                      className="w-full"
                      preload="metadata"
                    >
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>

                {/* Phone Screen Time Demo */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
                    <h3 className="text-lg font-bold mb-4 text-slate-800 text-center">
                      📱 Check Your Phone's App Usage
                    </h3>
                    <p className="text-sm text-slate-600 mb-4 text-center">
                      Learn how to find your screen time before we start counting apps!
                    </p>
                    <div className="bg-slate-100 rounded-lg p-4">
                      <iframe 
                        src="phone-screentime.html"
                        width="100%"
                        height="700"
                        frameBorder="0"
                        className="rounded-lg"
                        title="Phone Screen Time Demo"
                      >
                        Your browser does not support iframes.
                      </iframe>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className="slide-content">
              {slides[currentSlide].component}
            </div>
          </div>
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 w-full bg-white px-4 sm:px-6 py-3 border-t border-slate-200 shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-slate-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-slate-300 text-slate-600"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <div className="text-center">
            <p className="text-sm text-slate-600">Module {currentSlide} of {slides.length -1}</p>
            <p className="text-xs text-slate-400">{slides[currentSlide].id}</p>
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-md"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </div>
  );
};

// Title Slide Component
const TitleSlide = ({ onStart }) => {
    const logos = [
        { name: 'G-Data Labs', src: 'logos/gdatalogo_regular.webp' },
        { name: 'AILP3', src: 'logos/ailp3_logo.png' },
        { name: 'Operation Hope', src: 'logos/op_hope_logo.png' },
        { name: 'Georgia State University', src: 'logos/gsu_logo.jpg' },
        { name: 'Atlanta Public Schools', src: 'logos/aps_logo.jpeg' },
        { name: 'Clark Atlanta University', src: 'logos/cau_logo.jpg' },
        { name: 'City of Atlanta', src: 'logos/camo_logo.png' },
    ];

    return (
        <div className="relative flex flex-col items-center justify-center h-full text-center -mt-16 overflow-hidden rounded-3xl">
            <TitlePageBackground />
            <div className="z-10">
                <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">AI Financial Literacy</h1>
                <p className="mt-4 text-2xl text-blue-800/80">Your Data, Your Dollars, Your Dignity</p>
                <p className="mt-12 text-lg text-slate-600">Presented in partnership with</p>
                
                <div className="w-full max-w-4xl mt-6 overflow-hidden relative bg-white rounded-2xl p-6 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 z-10"></div>
                    <div className="flex animate-scroll">
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 w-48 mx-8">
                                <img src={logo.src} alt={logo.name} className="h-16 object-contain mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg max-w-2xl mx-auto">
                    <h3 className="text-lg font-bold mb-4 text-slate-800">Welcome to AI Financial Literacy</h3>
                    <video 
                        src="AILP3_intro.mp4"
                        controls
                        className="w-full rounded-lg"
                        preload="metadata"
                    >
                        Your browser does not support the video element.
                    </video>
                </div>

                <button
                    onClick={onStart}
                    className="mt-8 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                    Start Session
                </button>
            </div>
        </div>
    );
};


// Component for Opening Poll
const OpeningPoll = ({ responses, setPollResponses }) => {
  const [inputApps, setInputApps] = useState('');
  const [inputHours, setInputHours] = useState('');
  const [studentCount, setStudentCount] = useState(0);
  const [lastAdded, setLastAdded] = useState(null);
  
  const handleAddResponse = () => {
    const apps = parseInt(inputApps);
    const hours = parseFloat(inputHours);
    if (!isNaN(apps) && apps >= 0 && apps <= 50 && !isNaN(hours) && hours >= 0 && hours <= 24) {
      setPollResponses(prev => [...prev, { apps, hours, id: Date.now() }]);
      setStudentCount(prev => prev + 1);
      setLastAdded({ apps, hours });
      setInputApps('');
      setInputHours('');
      
      // Reset highlight after animation
      setTimeout(() => setLastAdded(null), 1500);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddResponse();
    }
  };
  
  // Calculate stats
  const totalResponses = responses.length;
  const totalApps = responses.reduce((sum, r) => sum + r.apps, 0);
  const totalHours = responses.reduce((sum, r) => sum + r.hours, 0);
  const averageApps = totalResponses > 0 ? (totalApps / totalResponses).toFixed(1) : 0;
  const averageHours = totalResponses > 0 ? (totalHours / totalResponses).toFixed(1) : 0;
  
  // Find correlations
  const highUsageStudents = responses.filter(r => r.hours > 5).length;
  const multiAppUsers = responses.filter(r => r.apps > 15).length;
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-2xl mb-4 text-slate-700">📱 Let's map the relationship between apps and screen time.</p>
        <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="text-lg text-slate-700">Real-time class data visualization</span>
        </div>
      </div>
      
      {/* Input Section */}
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-white p-6 rounded-2xl space-y-4 border border-slate-200 shadow-lg">
          <h3 className="text-lg font-bold text-slate-900">Ask Each Student:</h3>
          <p className="text-slate-600">"How many apps did you use AND how many hours on your phone yesterday?"</p>
          
          <div className="space-y-3">
            <div>
              <label className="text-sm text-slate-600 block mb-1">Number of Apps Used:</label>
              <input
                type="number"
                value={inputApps}
                onChange={(e) => setInputApps(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0-50 apps"
                min="0"
                max="50"
                className="w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none text-xl font-mono text-center text-slate-800"
              />
            </div>
            
            <div>
              <label className="text-sm text-slate-600 block mb-1">Hours on Phone:</label>
              <input
                type="number"
                value={inputHours}
                onChange={(e) => setInputHours(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0-24 hours"
                min="0"
                max="24"
                step="0.5"
                className="w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none text-xl font-mono text-center text-slate-800"
              />
            </div>
            
            <button
              onClick={handleAddResponse}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all font-semibold"
            >
              Add Student Data
            </button>
          </div>
          
          <div className="text-sm text-slate-600">
            Students surveyed: <span className="text-blue-600 font-bold">{studentCount}</span>
            {studentCount === 10 && <span className="ml-2 text-green-600">🎉 First milestone!</span>}
            {studentCount === 25 && <span className="ml-2 text-green-600">🎉 Half the class!</span>}
            {studentCount === 30 && <span className="ml-2 text-green-600">🎉 Full house!</span>}
          </div>
          
          {/* Quick input suggestions */}
          <div className="text-xs text-slate-500 space-y-1">
            <p>Common combinations:</p>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => { setInputApps('10'); setInputHours('3'); }}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200"
              >
                10 apps, 3h
              </button>
              <button
                onClick={() => { setInputApps('20'); setInputHours('5'); }}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200"
              >
                20 apps, 5h
              </button>
              <button
                onClick={() => { setInputApps('30'); setInputHours('8'); }}
                className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200"
              >
                30 apps, 8h
              </button>
            </div>
          </div>
          
          {studentCount > 0 && (
            <button
              onClick={() => {
                setPollResponses([]);
                setStudentCount(0);
                setLastAdded(null);
              }}
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              Clear all responses
            </button>
          )}
        </div>
      </div>
      
      {/* Scatter Plot */}
      <div className={`bg-white p-6 rounded-2xl transition-all duration-500 border border-slate-200 shadow-lg ${
        totalResponses > 0 ? 'opacity-100' : 'opacity-60'
      }`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Apps vs. Screen Time Analysis</h3>
            <p className="text-xs text-slate-500 mt-1">Each dot represents a student's app count and daily phone usage</p>
          </div>
          <div className="text-xs text-slate-500 space-y-1">
            <p className="font-semibold mb-1">Insight Zones:</p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Low usage (< 3h)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Moderate (3-6h)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>High usage (> 6h)</span>
            </div>
          </div>
        </div>
        <div className="relative h-96 mt-4">
          {/* Y-axis labels (Hours) */}
          <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-slate-500 text-right pr-2">
            {[24, 20, 16, 12, 8, 4, 0].map(hour => (
              <span key={hour}>{hour}h</span>
            ))}
          </div>
          
          {/* Scatter plot area */}
          <div className="ml-12 mb-8 relative h-full bg-slate-50 rounded-lg border border-slate-200">
            {/* Grid lines */}
            {[0, 4, 8, 12, 16, 20, 24].map(hour => (
              <div
                key={hour}
                className="absolute w-full border-t border-slate-200"
                style={{ bottom: `${(hour / 24) * 100}%` }}
              />
            ))}
            {[0, 10, 20, 30, 40, 50].map(apps => (
              <div
                key={apps}
                className="absolute h-full border-l border-slate-200"
                style={{ left: `${(apps / 50) * 100}%` }}
              />
            ))}
            
            {/* Plot points */}
            {responses.map((response, index) => {
              const x = (response.apps / 50) * 100;
              const y = (response.hours / 24) * 100;
              const isNew = lastAdded && lastAdded.apps === response.apps && lastAdded.hours === response.hours;
              const color = response.hours < 3 ? 'bg-green-500' : response.hours < 6 ? 'bg-yellow-500' : 'bg-red-500';
              
              return (
                <div
                  key={response.id}
                  className={`absolute w-3 h-3 rounded-full ${color} transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-150 cursor-pointer ${
                    isNew ? 'animate-pulse scale-150 ring-4 ring-offset-2 ring-blue-400' : ''
                  }`}
                  style={{
                    left: `${x}%`,
                    bottom: `${y}%`,
                    zIndex: isNew ? 20 : 10
                  }}
                  title={`Apps: ${response.apps}, Hours: ${response.hours}`}
                />
              );
            })}
            
            {/* Insight zones overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-1/4 bg-red-500 opacity-5" />
              <div className="absolute top-1/4 left-0 right-0 h-1/4 bg-yellow-500 opacity-5" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-green-500 opacity-5" />
            </div>
            
            {totalResponses === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded">
                <p className="text-slate-500 text-lg font-semibold">Start adding student data to see the correlation!</p>
              </div>
            )}
          </div>
          
          {/* X-axis labels (Apps) */}
          <div className="ml-12 flex justify-between text-xs text-slate-500 mt-2">
            {[0, 10, 20, 30, 40, 50].map(apps => (
              <span key={apps}>{apps}</span>
            ))}
          </div>
          <div className="text-center mt-2 text-sm text-slate-500">Number of Apps Used</div>
          <div className="absolute -left-8 top-1/2 transform -rotate-90 text-sm text-slate-500">Hours on Phone</div>
        </div>
      </div>
      
      {/* Stats Cards */}
      {totalResponses > 0 && (
        <div className="space-y-4">
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl text-center border border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-blue-600">{averageApps}</p>
              <p className="text-sm text-slate-600">Avg Apps/Student</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-purple-600">{averageHours}h</p>
              <p className="text-sm text-slate-600">Avg Screen Time</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-red-600">{highUsageStudents}</p>
              <p className="text-sm text-slate-600">Heavy Users (>5h)</p>
            </div>
            <div className="bg-white p-4 rounded-xl text-center border border-slate-200 shadow-sm">
              <p className="text-3xl font-bold text-green-600">{multiAppUsers}</p>
              <p className="text-sm text-slate-600">Multi-App Users (>15)</p>
            </div>
          </div>
          
          {totalResponses >= 10 && (
            <div className="text-center space-y-2">
              <p className="text-sm text-slate-500">
                💡 Insight: {Math.round((highUsageStudents/totalResponses)*100)}% of students spend over 5 hours daily on their phones!
              </p>
              {averageHours > 5 && (
                <p className="text-xs text-red-600 font-semibold">
                  ⚠️ Class average exceeds recommended screen time limits
                </p>
              )}
            </div>
          )}
        </div>
      )}
      
      <div className="text-center mt-8 space-y-4">
        <div className="bg-white p-6 rounded-2xl max-w-2xl mx-auto border border-slate-200 shadow-lg">
          <Quote text="Moving from civil rights to silver rights" author="John Hope Bryant" />
          <p className="mt-4 text-lg text-slate-700">Every app collects data. Every tap has value. It's time you understood YOUR worth in the digital economy!</p>
        </div>
      </div>
    </div>
  );
};

// Data Dollars Module
const DataDollarsModule = ({ setUserDataValue, userDataValue }) => {
  const [appUsage, setAppUsage] = useState({ facebook: 2, tiktok: 3, instagram: 2, snapchat: 1 });
  const [flippedPrinciple, setFlippedPrinciple] = useState(null);
  
  useEffect(() => {
    const total = Object.values(appUsage).reduce((sum, hours) => sum + hours, 0);
    setUserDataValue(total * 15); // $15 per hour of usage estimate
  }, [appUsage, setUserDataValue]);

  const dataForDollarsPrinciples = [
    {
      icon: <Handshake className="w-10 h-10 mx-auto text-green-500" />,
      title: "Consent",
      description: "You have the absolute right to control your data. Nothing is shared without your informed, explicit, and ongoing permission.",
      details: "This means no hidden clauses or confusing terms. You get to decide exactly what data is used, how it's used, and for how long. It's about putting you in the driver's seat of your digital life."
    },
    {
      icon: <Eye className="w-10 h-10 mx-auto text-blue-500" />,
      title: "Transparency",
      description: "No more black boxes. You deserve to see exactly how your data creates value and how that value is shared.",
      details: "This includes clear reports on which companies are using your data, what they're using it for, and how the compensation you receive is calculated. Full transparency builds trust."
    },
    {
      icon: <Scale className="w-10 h-10 mx-auto text-yellow-500" />,
      title: "Fairness",
      description: "The value you create should be recognized and shared equitably. This model ensures the system isn't rigged against you.",
      details: "Fairness means the economic benefits of AI are distributed broadly, not just concentrated at the top. It ensures that as the digital economy grows, everyone has the opportunity to prosper from it."
    },
    {
      icon: <DollarSign className="w-10 h-10 mx-auto text-red-500" />,
      title: "Compensation",
      description: "Your data has real economic value. You should be compensated for it, creating a new potential income stream.",
      details: "This isn't just about pocket change. As AI becomes more integrated into the economy, compensating users for their data can create a sustainable economic model that bridges the wage gap created by job displacement."
    }
  ];
  
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center text-slate-800">See How Your Data Creates Value</h3>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
            <h4 className="text-lg font-bold mb-4 text-slate-700 text-center">Understanding App Value & The Data Economy</h4>
            <video 
              src="app_value_videos/app_value_combined.mp4"
              controls
              className="w-full rounded-lg"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      {/* Data Dignity Calculator */}
      <div className="max-w-2xl mx-auto space-y-6">
        <h3 className="text-2xl font-bold flex items-center gap-2 text-slate-800 text-center justify-center">
          <DollarSign className="w-8 h-8 text-blue-500" />
          Data Dignity Calculator
        </h3>
        
        <div className="space-y-4">
          {Object.entries(appUsage).map(([app, hours]) => (
            <div key={app} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-lg text-slate-700">{app}</span>
                <span className="text-blue-600 font-mono">{hours}h/day</span>
              </div>
              <input
                type="range"
                min="0"
                max="8"
                value={hours}
                onChange={(e) => setAppUsage({...appUsage, [app]: parseInt(e.target.value)})}
                className="w-full h-3 bg-slate-300 rounded-lg appearance-none cursor-pointer slider border border-slate-400"
              />
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg">
          <p className="text-sm font-semibold uppercase">Your Annual Data Value</p>
          <p className="text-4xl font-bold">${(userDataValue * 365).toLocaleString()}</p>
          <p className="text-sm mt-2">But companies make billions from collective data!</p>
        </div>
      </div>

      {/* The Reality Check */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-2xl font-bold text-slate-800 text-center">The Reality Check</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard
            icon={<Globe className="w-6 h-6" />}
            title="The Creator Economy"
            value="$250 Billion Market"
            description="AI uses your creative data (art, music, videos) to generate new content, fueling a massive market."
            tooltipText="The creator economy is projected to nearly double to $480 billion by 2027. Generative AI is a key driver, trained on vast datasets of existing content. Source: Goldman Sachs Research."
          />
          <StatCard
            icon={<Target className="w-6 h-6" />}
            title="TikTok Strategy"
            value="Teens are 'most susceptible'"
            description="To engagement algorithms"
            tooltipText="TikTok's algorithm is famously powerful, creating a personalized 'For You' page that keeps users engaged for long periods. Critics argue this design can be addictive and may expose teens to harmful content. Source: The Wall Street Journal."
          />
          <StatCard
            icon={<Shield className="w-6 h-6" />}
            title="Your Digital Worth"
            value="$100-300 annually"
            description="Per platform you actively use"
            tooltipText="While your individual data's value varies, data brokers sell aggregated profiles for anywhere from less than a dollar to over $1,000. Your worth increases based on specific, valuable traits. Source: 'The Price of Your Data,' Financial Times."
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl max-w-5xl mx-auto border border-slate-200 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">A New Framework: The Data-For-Dollars Model</h3>
        <p className="text-center mb-6 text-slate-600">Instead of letting companies take your data for free, this model proposes a system where you are compensated for the value you create. It's built on four key principles. Click each one to learn more.</p>
        <div className="grid md:grid-cols-4 gap-4">
          {dataForDollarsPrinciples.map((item, index) => (
            <div key={index} className="perspective-1000" onClick={() => setFlippedPrinciple(flippedPrinciple === index ? null : index)}>
              <div className={`relative w-full h-56 transition-transform duration-700 transform-style-preserve-3d ${flippedPrinciple === index ? 'rotate-y-180' : ''}`}>
                <div className="absolute w-full h-full backface-hidden bg-slate-50 rounded-xl flex flex-col items-center justify-center p-4 text-center cursor-pointer border border-slate-200">
                  {item.icon}
                  <h4 className="font-bold mt-4 text-slate-800">{item.title}</h4>
                  <p className="text-xs mt-2 text-slate-500">{item.description}</p>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-xl flex flex-col items-center justify-center p-4 text-center cursor-pointer rotate-y-180">
                   <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="text-center mt-12">
         <Quote text="You are the new asset class. Your data is your property." author="John Hope Bryant" />
      </div>

    </div>
  );
};

// Bias Module
const BiasModule = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [flippedScenario, setFlippedScenario] = useState(null);

  const biasScenarios = [
    {
      icon: <Briefcase className="w-10 h-10 mx-auto text-yellow-500" />,
      title: "The Biased Resume Scanner",
      story: "Leo, a talented graphic designer, applies for a job. The company's AI, trained on past applicants, prefers candidates from certain zip codes and penalizes his non-traditional education, overlooking his strong portfolio. He doesn't get the interview.",
      image: "bias_images/bias_1.png"
    },
    {
      icon: <Car className="w-10 h-10 mx-auto text-red-500" />,
      title: "The Unfair Insurance Quote",
      story: "Maria needs car insurance. She has a perfect driving record. Because she lives in a low-income, predominantly minority neighborhood, an AI model quotes her a premium 40% higher than someone with a similar record in a wealthier neighborhood. The algorithm has learned to associate zip code with risk.",
      image: "bias_images/bias_2.png"
    },
    {
      icon: <Scale className="w-10 h-10 mx-auto text-blue-500" />,
      title: "The Predictive Justice System",
      story: "An AI model used by a court system to predict the likelihood of a defendant re-offending consistently gives higher risk scores to Black defendants than to white defendants with similar histories. This leads to higher bail amounts and harsher sentences, creating a vicious cycle of inequality.",
      image: "bias_images/bias_3.png"
    }
  ];

  const truthItems = [
    { 
      text: "📊 Black and Hispanic borrowers are 2x more likely to be denied loans",
      tooltip: "Studies by institutions like the National Bureau of Economic Research have consistently found significant racial disparities in mortgage approval rates, even when controlling for financial factors. Source: NBER Working Paper No. 29054."
    },
    {
      text: "🤖 A simple AI fix can reduce discrimination significantly",
      tooltip: "Researchers have shown that by explicitly programming 'fairness constraints' into lending algorithms—for example, requiring that approval rates be similar across demographic groups—it's possible to reduce discriminatory outcomes without a major drop in profitability. Source: 'Fairness and Machine Learning' by Barocas, Hardt, and Narayanan."
    },
    {
      text: "💡 Financial dignity means equal opportunity for all",
      tooltip: "This principle asserts that everyone, regardless of their background, deserves the chance to build wealth and participate fully in the economy. AI can either be a barrier or a bridge to this goal, depending on how we design and regulate it."
    }
  ];
  
  return (
    <div className="space-y-10">
      <div className="text-center">
        <p className="text-xl mb-6 text-slate-700">AI doesn't just grant loans. It's making decisions everywhere. Let's see how hidden bias can have a huge impact.</p>
        
        {/* Add AI Bias Podcast */}
        <div className="max-w-md mx-auto mb-8">
          <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
              <Music className="w-5 h-5 text-blue-500" />
              AI Bias in Financial Services
            </h3>
            <audio 
              src="podcasts/ai_bias.wav"
              controls
              className="w-full"
              preload="metadata"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {biasScenarios.map((scenario, index) => (
            <div key={index} className="space-y-4">
              {/* Title above the card */}
              <div className="text-center">
                {scenario.icon}
                <h4 className="text-xl font-bold mt-2 text-slate-800">{scenario.title}</h4>
              </div>
              
              {/* Flippable card with image first */}
              <div className="perspective-1000" onClick={() => setFlippedScenario(flippedScenario === index ? null : index)}>
                <div className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${flippedScenario === index ? 'rotate-y-180' : ''}`}>
                  {/* Front face - now shows the image */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl border border-slate-200 shadow-md cursor-pointer overflow-hidden">
                    <img 
                      src={scenario.image} 
                      alt={scenario.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-3">
                      <p className="text-xs text-center">Click to read the story →</p>
                    </div>
                  </div>
                  {/* Back face - now shows the story */}
                  <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-2xl space-y-4 border border-slate-200 shadow-md cursor-pointer rotate-y-180 flex flex-col justify-center">
                    <p className="text-slate-600 text-sm leading-relaxed">{scenario.story}</p>
                    <p className="text-xs text-blue-500 mt-4 text-center">Click to see the image again →</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl max-w-4xl mx-auto border border-slate-200 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-center text-slate-800">The Shocking Truth: Click to Reveal</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {truthItems.map((item, index) => (
            <div key={index} className="perspective-1000" onClick={() => setFlippedCard(flippedCard === index ? null : index)}>
              <div className={`relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                {/* Front of the card */}
                <div className="absolute w-full h-full backface-hidden bg-slate-100 rounded-xl flex items-center justify-center p-4 text-center cursor-pointer border border-slate-200">
                  <p className="font-semibold text-slate-700">{item.text}</p>
                </div>
                {/* Back of the card */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-400 text-white rounded-xl flex items-center justify-center p-4 text-center cursor-pointer rotate-y-180">
                  <p className="text-xs">{item.tooltip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-12">
         <Quote text="In the age of AI, algorithmic bias is the new frontier of civil rights." author="John Hope Bryant" />
      </div>
    </div>
  );
};

// AI Tools Demo
const AIToolsDemo = ({ selectedPrompt, setSelectedPrompt, aiResponse, setAiResponse }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [flippedTool, setFlippedTool] = useState(null);
  
  const prompts = [
    "Explain compound interest like I'm 15",
    "Create a budget for a high school student with a part-time job",
    "Write a short video script about saving money",
    "How do I start investing with just $50?",
    "Explain credit scores in simple terms"
  ];
  
  const tools = [
    { name: "AI Tutors & Explainers", icon: <Brain className="w-8 h-8" />, color: "from-blue-500 to-blue-400", description: "Get complex financial topics explained in simple terms.", video: "planning_tools_videos/planning_tool_1.mp4" },
    { name: "Smart Budgeting Apps", icon: <PiggyBank className="w-8 h-8" />, color: "from-green-500 to-green-400", description: "AI automatically tracks spending and finds savings opportunities.", video: "planning_tools_videos/planning_tool_2.mp4" },
    { name: "AI Content Creation", icon: <Video className="w-8 h-8" />, color: "from-red-500 to-red-400", description: "Generate scripts, social media posts, and creative ideas.", video: "planning_tools_videos/planning_tool_3.mp4" }
  ];
  
  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
    setIsLoading(true);
    setAiResponse('');

    // Simulate AI response with a delay
    setTimeout(() => {
      const responses = {
        "Explain compound interest like I'm 15": "Think of compound interest like a snowball rolling down a hill. As it rolls, it picks up more snow, getting bigger and bigger. Your money works the same way - you earn interest on your initial money, then earn interest on that interest too! 📈",
        "Create a budget for a high school student with a part-time job": "Here's a simple 50-30-20 budget: 50% for needs (lunch, transport), 30% for wants (entertainment, clothes), 20% for savings. If you earn $400/month, that's $200 for needs, $120 for fun, and $80 straight to savings! 💰",
        "Write a short video script about saving money": "Scene: A piggy bank on a desk. Upbeat music.\n\nVO: 'Tired of being broke? Try the 24-hour rule! Before you buy something you want, wait a day. If you still want it, go for it. You'll be surprised how much you save!'\n\nText on screen: Save smarter, not harder. ✨",
        "How do I start investing with just $50?": "With $50, you can start with micro-investing apps that let you buy fractional shares of stocks or ETFs. It's a great way to learn the market without needing a lot of cash upfront. The key is to start early and be consistent!",
        "Explain credit scores in simple terms": "A credit score is like a financial report card. It's a number between 300 and 850 that tells lenders how likely you are to pay back borrowed money. A higher score means you're a lower risk, which can get you better interest rates on loans for things like cars or a house."
      };
      setAiResponse(responses[prompt] || "Great question! Let me help you understand that better...");
      setIsLoading(false);
    }, 1200);
  };
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <p className="text-xl text-slate-700">🎯 AI can be your personal financial guide. Let's see it in action!</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {tools.map((tool, index) => (
          <div key={tool.name} className="perspective-1000" onClick={() => setFlippedTool(flippedTool === index ? null : index)}>
            <div className={`relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d ${flippedTool === index ? 'rotate-y-180' : ''}`}>
              <div className={`absolute w-full h-full backface-hidden bg-gradient-to-r ${tool.color} p-0.5 rounded-2xl shadow-md cursor-pointer`}>
                <div className="bg-white p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center space-y-3">
                  <div className={`p-3 bg-gradient-to-br ${tool.color} rounded-full text-white`}>
                    {tool.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">{tool.name}</h4>
                  <p className="text-xs text-slate-500">{tool.description}</p>
                  <p className="text-xs text-blue-500 mt-2">Click to watch demo →</p>
                </div>
              </div>
              <div className="absolute w-full h-full backface-hidden bg-black rounded-2xl shadow-md cursor-pointer rotate-y-180 overflow-hidden">
                <video 
                  src={tool.video}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-2xl space-y-4 border border-slate-200 shadow-lg">
        <h3 className="text-xl font-bold text-slate-900">Select a Student Prompt:</h3>
        <div className="space-y-2">
          {prompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => handlePromptSelect(prompt)}
              className={`w-full text-left p-3 rounded-lg transition-all ${
                selectedPrompt === prompt 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg min-h-[120px] flex items-center justify-center">
        {isLoading && (
          <div className="flex items-center gap-3 text-blue-500">
            <div className="w-5 h-5 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            <span>Thinking...</span>
          </div>
        )}
        {!isLoading && aiResponse && (
          <div>
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-slate-800">
              <Sparkles className="w-5 h-5 text-blue-500" />
              AI Response:
            </h4>
            <p className="text-lg leading-relaxed text-slate-700">{aiResponse}</p>
          </div>
        )}
         {!isLoading && !aiResponse && (
            <p className="text-slate-500">Select a prompt above to see what the AI says!</p>
        )}
      </div>
       <div className="text-center mt-12">
         <Quote text="The best investment you can make is in your own knowledge." author="Warren Buffett" />
      </div>
    </div>
  );
};

// Partner Activity
const PartnerActivity = ({ time, isRunning, setIsRunning, setPartnerActivityTime }) => {
  const [inputMinutes, setInputMinutes] = useState(time / 60);

  const handleTimeChange = (e) => {
    setInputMinutes(e.target.value);
  };

  const handleSetTime = () => {
    const newTimeInSeconds = parseInt(inputMinutes, 10) * 60;
    if (!isNaN(newTimeInSeconds) && newTimeInSeconds > 0) {
      setPartnerActivityTime(newTimeInSeconds);
    }
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  const ideas = [
    { name: "AI Social Media Agency", desc: "Use AI to generate video scripts and content for local businesses.", icon: <Video /> },
    { name: "AI Music Composer", desc: "Use AI to create financial literacy jingles", icon: <Music /> },
    { name: "ScholarshipBot", desc: "AI matches students with personalized scholarships", icon: <Award /> },
    { name: "TeenCredit", desc: "Gamified credit building for high schoolers", icon: <TrendingUp /> },
    { name: "DataDignity", desc: "Platform where teens control and monetize their data", icon: <Shield /> },
    { name: "GigGuardian", desc: "AI financial advisor for young gig workers", icon: <Users /> }
  ];
  
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <p className="text-xl text-slate-700">Create an AI-powered financial solution for your generation!</p>
        
        <div className="inline-flex items-center justify-center">
          <div className="relative w-48 h-48">
            <svg className="transform -rotate-90 w-48 h-48">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-slate-200"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="url(#gradient-timer)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={553}
                strokeDashoffset={553 - (553 * (time / (inputMinutes * 60))) / 1}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient-timer">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Clock className="w-8 h-8 mb-2 text-blue-500" />
              <span className="text-3xl font-bold font-mono text-slate-800">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 items-center justify-center">
                <input
                type="number"
                value={inputMinutes}
                onChange={handleTimeChange}
                disabled={isRunning}
                className="w-24 px-3 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg font-mono text-center"
                placeholder="Mins"
                />
                <button onClick={handleSetTime} disabled={isRunning} className="px-4 py-2 bg-white rounded-lg hover:bg-slate-100 transition-all disabled:opacity-50 border border-slate-300">
                Set Time
                </button>
            </div>
        
            <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-8 py-3 rounded-full font-semibold transition-all w-48 text-white shadow-md ${
                isRunning 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
            >
            {isRunning ? 'Pause Timer' : 'Start Timer'}
            </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <div key={idea.name} className="bg-white p-6 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group border border-slate-200 shadow-md">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg text-white group-hover:scale-110 transition-transform">
                {idea.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1 text-slate-800">{idea.name}</h4>
                <p className="text-sm text-slate-600">{idea.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-slate-900">Requirements for Your Solution:</h3>
        <div className="grid md:grid-cols-2 gap-4 text-slate-700">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>How does AI improve the service?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>What data is collected and how is privacy protected?</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>How does it promote financial dignity?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>What's the business model?</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Teen Finance Game */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-slate-800 text-center">
            💰 Money Moves: Teen Finance Quest
          </h3>
          <div className="bg-slate-100 rounded-lg p-4">
            <iframe 
              src="teen-finance-game.html"
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-lg"
              title="Teen Finance Game"
            >
              Your browser does not support iframes.
            </iframe>
          </div>
        </div>
      </div>
      
       <div className="text-center mt-12">
         <Quote text="The best way to predict the future is to create it." author="Peter Drucker" />
      </div>
    </div>
  );
};

// Closing Module
const ClosingModule = ({ pledgeData, setPledgeData, finalWords, setFinalWords }) => {
  const [newWord, setNewWord] = useState('');
  
  const handleAddWord = () => {
    if (newWord.trim()) {
      setFinalWords([...finalWords, newWord.trim()]);
      setNewWord('');
    }
  };
  
  const sampleWords = ['Empowerment', 'Knowledge', 'Future', 'Dignity', 'Success', 'Innovation', 'Community', 'Growth'];
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl mb-4 text-slate-800">Make Your Financial Dignity Pledge</h3>
        <p className="text-lg text-slate-600">Three commitments to transform your financial future</p>
      </div>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-2xl space-y-4 border border-slate-200 shadow-lg">
          <label className="block">
            <span className="text-sm text-slate-600">1. One AI tool I'll explore this week:</span>
            <input
              type="text"
              value={pledgeData.tool}
              onChange={(e) => setPledgeData({...pledgeData, tool: e.target.value})}
              className="mt-2 w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="e.g., ChatGPT for budgeting"
            />
          </label>
          
          <label className="block">
            <span className="text-sm text-slate-600">2. One financial goal I'll set using AI assistance:</span>
            <input
              type="text"
              value={pledgeData.goal}
              onChange={(e) => setPledgeData({...pledgeData, goal: e.target.value})}
              className="mt-2 w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="e.g., Save $500 by summer"
            />
          </label>
          
          <label className="block">
            <span className="text-sm text-slate-600">3. One person I'll teach about data dignity:</span>
            <input
              type="text"
              value={pledgeData.teach}
              onChange={(e) => setPledgeData({...pledgeData, teach: e.target.value})}
              className="mt-2 w-full px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="e.g., My younger sibling"
            />
          </label>
        </div>
        
        {Object.values(pledgeData).every(val => val.trim()) && (
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-0.5 rounded-2xl shadow-md">
            <div className="bg-white p-4 rounded-2xl">
              <p className="text-center text-lg font-semibold text-slate-800">
                🎉 Your pledge is complete! You're on your way to financial dignity!
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-12 space-y-6">
        <h3 className="text-2xl font-bold text-center text-slate-800">Financial Dignity Declaration</h3>
        <p className="text-center text-slate-600">Add your word to our collective vision</p>
        
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddWord()}
            className="flex-1 px-4 py-2 bg-slate-100 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none"
            placeholder="Your word for financial dignity..."
          />
          <button
            onClick={handleAddWord}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all font-semibold"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {[...sampleWords, ...finalWords].map((word, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-slate-700"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center space-y-4">
        <div className="bg-white p-6 rounded-2xl max-w-3xl mx-auto border border-slate-200 shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-slate-900">Continue Your Journey</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="space-y-2">
              <Heart className="w-8 h-8 mx-auto text-blue-500" />
              <p className="font-semibold">AILP3 Program</p>
              <p>AI Literacy, Purpose & Power</p>
            </div>
            <div className="space-y-2">
              <Target className="w-8 h-8 mx-auto text-blue-500" />
              <p className="font-semibold">Operation HOPE Atlanta</p>
              <p>Local programs for teens</p>
            </div>
            <div className="space-y-2">
              <Award className="w-8 h-8 mx-auto text-blue-500" />
              <p className="font-semibold">Georgia State Partnership</p>
              <p>College & career pathways</p>
            </div>
          </div>
        </div>
        
        <Quote text="The future depends on what you do today." author="Mahatma Gandhi" />

        <div className="mt-12 bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto border border-slate-200">
          <h3 className="text-lg font-bold mb-4 text-slate-800 flex items-center gap-2">
            <Music className="w-5 h-5 text-blue-500" />
            Session Recap Podcast
          </h3>
          <audio 
            src="podcasts/recap_podcast.wav"
            controls
            className="w-full"
            preload="metadata"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const Quote = ({ text, author }) => (
  <blockquote className="text-center">
    <p className="text-2xl font-semibold italic mb-2 text-slate-800">"{text}"</p>
    <cite className="text-lg text-blue-600">- {author}</cite>
  </blockquote>
);

const StatCard = ({ icon, title, value, description, tooltipText }) => (
  <div className="bg-white p-4 rounded-xl flex items-start gap-4 hover:bg-slate-50 transition-all relative group border border-slate-300 shadow-md">
    <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg text-white">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-2xl font-bold text-blue-700">{value}</p>
      <p className="text-sm text-slate-700 mt-1">{description}</p>
    </div>
    {tooltipText && (
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-white text-slate-900 text-sm rounded-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 shadow-2xl border-2 border-slate-300">
        {tooltipText}
      </div>
    )}
  </div>
);

const SuccessCard = ({ title, description, icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-slate-200 hover:scale-105 hover:border-blue-300 transition-all duration-300 shadow-md"
  >
    <div className="text-green-500 mb-3">{icon}</div>
    <h4 className="text-lg font-bold mb-2 text-slate-800">{title}</h4>
    <p className="text-sm text-slate-600">{description}</p>
  </a>
);

// Add custom styles
const style = document.createElement('style');
style.textContent = `
  .slider {
    background: #cbd5e1;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
  }
  
  .slider::-webkit-slider-track {
    background: #cbd5e1;
    height: 12px;
    border-radius: 6px;
    border: 1px solid #94a3b8;
  }
  
  .slider::-webkit-slider-thumb {
    appearance: none;
    width: 24px;
    height: 24px;
    background: #3b82f6;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .slider::-moz-range-track {
    background: #cbd5e1;
    height: 12px;
    border-radius: 6px;
    border: 1px solid #94a3b8;
  }
  
  .slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: #3b82f6;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  .animate-scroll {
    animation: scroll 40s linear infinite;
  }

  .perspective-1000 { perspective: 1000px; }
  .transform-style-preserve-3d { transform-style: preserve-3d; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .backface-hidden { backface-visibility: hidden; }
`;
document.head.appendChild(style);

export default AIFinancialLiteracyApp;
