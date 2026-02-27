import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  FileCheck, 
  Briefcase, 
  TrendingUp, 
  MapPin, 
  Globe, 
  MessageSquare, 
  ChevronRight, 
  Menu, 
  X, 
  Linkedin, 
  ExternalLink,
  CheckCircle2,
  Clock,
  LayoutDashboard
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  badge?: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'consultation',
    title: 'In-Office Consultation',
    description: 'Direct, one-to-one Chartered Consultation at our Baramulla or Srinagar office. Get professional guidance on business setup, compliance, and taxation.',
    icon: <MapPin className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq/1787788',
    badge: 'Popular'
  },
  {
    id: 'registration',
    title: 'Company / LLP Registration',
    description: 'Get your business registered with the right legal structure and expert support. Includes PAN, TAN, DSC, DIN, and more.',
    icon: <Building2 className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq/1884594'
  },
  {
    id: 'gst',
    title: 'GST Registrations',
    description: 'Get your GST registration done accurately and hassle-free with expert Chartered Accountant support.',
    icon: <FileCheck className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq'
  },
  {
    id: 'producer',
    title: 'Producer Company Registration',
    description: 'End-to-end Producer Company registration services for farmers, artisans, and FPOs across India.',
    icon: <Briefcase className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq'
  },
  {
    id: 'startup',
    title: 'Startup India Recognition',
    description: 'Get recognized by Startup India to avail tax benefits, schemes, and funding access via DPIIT recognition.',
    icon: <TrendingUp className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq'
  },
  {
    id: 'package',
    title: 'Complete Startup Package',
    description: 'Private Limited/LLP Incorporation + GST Registration + Startup DPIIT Recognition in one smooth process.',
    icon: <CheckCircle2 className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq/1890830',
    badge: 'Best Value'
  },
  {
    id: 'zoho',
    title: 'ZOHO Cloud Accounting',
    description: 'End-to-end setup & implementation for modern digital finance. Modernize your accounting workflow.',
    icon: <LayoutDashboard className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq/1891473'
  },
  {
    id: 'compliance',
    title: 'Post Incorporation Compliance',
    description: 'Stay compliant with ROC, Income Tax, and other regulatory filings after your business is incorporated.',
    icon: <MessageSquare className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq/1806623'
  },
  {
    id: 'online',
    title: 'Online Consultation',
    description: 'Expert advice from the comfort of your home via Zoom or Google Meet. Flexible scheduling.',
    icon: <Globe className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq/1463591'
  },
  {
    id: 'complementary',
    title: 'Complementary Consultation',
    description: 'Not sure where to start? Let\'s have a brief 10-minute discussion to map out your needs.',
    icon: <Clock className="w-6 h-6" />,
    link: 'https://topmate.io/camirishfaq'
  }
];

const TESTIMONIALS = [
  {
    name: "Aadil Bhat",
    role: "Founder, TechKashmir",
    text: "Ishfaq's expertise in startup registration was invaluable. He handled everything from DPIIT to GST seamlessly."
  },
  {
    name: "Sajad Ahmad",
    role: "Director, GreenAgro FPO",
    text: "The best service for Producer Company registration. Very professional and thorough with compliance."
  },
  {
    name: "Mehak Jan",
    role: "E-commerce Entrepreneur",
    text: "Transitioning to ZOHO Books with Ishfaq's help saved us hours of manual work every week."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">
            IM
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-serif font-bold leading-tight">CA Ishfaq A. Mir</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Chartered Accountant</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-slate-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-slate-600 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-slate-600 transition-colors">Testimonials</a>
          <a 
            href="https://topmate.io/camirishfaq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all"
          >
            Book Consultation
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">About</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Testimonials</a>
            <a 
              href="https://topmate.io/camirishfaq" 
              className="bg-slate-900 text-white px-5 py-3 rounded-xl text-center font-medium"
            >
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ service, index }: { service: Service; index: number; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full"
  >
    {service.badge && (
      <span className="absolute top-4 right-4 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
        {service.badge}
      </span>
    )}
    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
      {service.icon}
    </div>
    <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
      {service.description}
    </p>
    <a 
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
    >
      Learn More <ChevronRight className="w-4 h-4" />
    </a>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Financial Growth Partner
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.1] mb-8"
          >
            Elevate Your <br />
            <span className="italic">Financial Future</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed"
          >
            Expert Chartered Accountant empowering businesses with seamless Registrations, Tax Advisory, and Cloud Accounting.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#services" 
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
            >
              Explore Services
            </a>
            <a 
              href="https://topmate.io/camirishfaq" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Schedule Call <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats/Logos Section */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Experience", value: "8+ Years" },
              { label: "Clients Served", value: "500+" },
              { label: "Registrations", value: "200+" },
              { label: "Compliance Rate", value: "100%" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Professional Services</h2>
              <p className="text-slate-500 text-lg">
                Choose from a wide range of specialized services tailored for startups, MSMEs, and established businesses.
              </p>
            </div>
            <a 
              href="https://topmate.io/camirishfaq" 
              className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:gap-3 transition-all"
            >
              View All Services <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-slate-100">
                <img 
                  src="https://picsum.photos/seed/accountant/800/1000" 
                  alt="CA Ishfaq Ahmad Mir" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-3xl max-w-xs hidden md:block">
                <p className="text-slate-900 font-serif text-xl font-bold mb-2">Strategic Partner</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  "My goal is to simplify complex financial regulations so you can focus on what you do best: growing your business."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">A Strategic Partner for Your Business Growth</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  I am <span className="text-slate-900 font-bold">CA Ishfaq A. Mir</span>, a Chartered Accountant specializing in business registrations including Private Limited, LLP, and Section 8 companies.
                </p>
                <p>
                  I provide expert support in statutory audits, GST, Income Tax, TDS, ROC compliance, and regulatory filings. My services are tailored for startups, MSMEs, and established businesses, ensuring smooth operations and complete compliance with Indian tax and corporate laws.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <a 
                    href="https://in.linkedin.com/in/camirishfaq" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all"
                  >
                    <Linkedin className="w-5 h-5" /> Connect on LinkedIn
                  </a>
                  <a 
                    href="https://topmate.io/camirishfaq" 
                    className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-all"
                  >
                    View Credentials
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Client Stories</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Don't just take my word for it. Here's what founders and businesses say about my services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col"
              >
                <div className="flex gap-1 text-emerald-400 mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg italic mb-8 flex-grow">"{t.text}"</p>
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-slate-50 border border-slate-100 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -z-10" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">Ready to scale your business?</h2>
          <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto">
            Get professional guidance on business setup, compliance, and taxation from an expert Chartered Accountant.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://topmate.io/camirishfaq" 
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
            >
              Book Your Consultation
            </a>
            <a 
              href="mailto:contact@camirishfaq.com" 
              className="w-full sm:w-auto text-slate-900 font-bold px-10 py-5 hover:bg-slate-100 rounded-full transition-all"
            >
              Contact via Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-serif text-lg font-bold">
              IM
            </div>
            <p className="font-serif font-bold text-slate-900">CA Ishfaq A. Mir</p>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="https://topmate.io/camirishfaq" className="hover:text-slate-900 transition-colors">Topmate</a>
            <a href="https://in.linkedin.com/in/camirishfaq" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} CA Ishfaq Ahmad Mir. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
