import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Clock3,
  Cpu,
  Globe2,
  Headphones,
  Landmark,
  Mail,
  MapPin,
  PhoneCall,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Zap,
} from "lucide-react";
import logo from "../Calivos.png";

const heroSlides = [
  {
    image:
      "https://images.pexels.com/photos/8866775/pexels-photo-8866775.jpeg?cs=srgb&dl=pexels-yankrukov-8866775.jpg&fm=jpg",
    title: "Customer Support Teams That Scale Fast",
    subtitle: "Dedicated agents aligned to your scripts, tone, and service standards.",
  },
  {
    image:
      "https://images.pexels.com/photos/8191956/pexels-photo-8191956.jpeg?cs=srgb&dl=pexels-shkrabaanthony-8191956.jpg&fm=jpg",
    title: "Operational Discipline Across Every Shift",
    subtitle: "Structured QA, monitoring, and reporting for consistent customer outcomes.",
  },
  {
    image:
      "https://images.pexels.com/photos/8192014/pexels-photo-8192014.jpeg?cs=srgb&dl=pexels-shkrabaanthony-8192014.jpg&fm=jpg",
    title: "Technology-Enabled Service Delivery",
    subtitle: "Integrated workflows for inbound care, outbound campaigns, and retention calls.",
  },
  {
    image:
      "https://images.pexels.com/photos/8866749/pexels-photo-8866749.jpeg?cs=srgb&dl=pexels-yankrukov-8866749.jpg&fm=jpg",
    title: "Human-First Customer Experience",
    subtitle: "Empathetic communication with measurable performance improvement.",
  },
];

const solutionCards = [
  {
    icon: Headphones,
    title: "Customer Care Operations",
    text: "Inbound support, issue resolution, and escalations delivered through trained multilingual teams.",
  },
  {
    icon: PhoneCall,
    title: "Revenue and Retention Calls",
    text: "Outbound programs for renewals, win-backs, payment reminders, and proactive service updates.",
  },
  {
    icon: BarChart3,
    title: "QA and Performance Management",
    text: "Structured monitoring, coaching loops, and reporting dashboards to improve every customer conversation.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance and Process Control",
    text: "Secure operations with auditable workflows, script adherence, and documented quality governance.",
  },
];

const industryCards = [
  {
    icon: Landmark,
    title: "Banking and FinTech",
    text: "Secure support flows for onboarding, account services, and collections.",
  },
  {
    icon: ShoppingBag,
    title: "Retail and E-commerce",
    text: "Fast support for orders, returns, and customer loyalty operations.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Services",
    text: "Patient-friendly communication with privacy-first operating standards.",
  },
  {
    icon: Plane,
    title: "Travel and Hospitality",
    text: "Booking assistance and disruption management with consistent service quality.",
  },
  {
    icon: Cpu,
    title: "Technology Brands",
    text: "Technical support tiers and expert escalation for complex user journeys.",
  },
  {
    icon: Building2,
    title: "Public Services",
    text: "Citizen-centric call handling with clear service levels and accountability.",
  },
];

const insightsCards = [
  {
    label: "Case Study",
    title: "How a retail brand reduced first-response time by 42% in 8 weeks",
    text: "A phased launch model across inbound queues, QA governance, and workforce planning.",
  },
  {
    label: "Playbook",
    title: "Building scalable customer operations without growing internal overhead",
    text: "Frameworks for outsourcing support while preserving brand tone and customer trust.",
  },
  {
    label: "Operations Note",
    title: "From reactive support to proactive retention: an outbound strategy guide",
    text: "Designing outbound touchpoints that improve CSAT and reduce churn risk.",
  },
];

const visualCards = [
  {
    title: "Support Command Center",
    text: "Unified visibility across teams, queues, and service levels.",
    image:
      "https://images.pexels.com/photos/8192249/pexels-photo-8192249.jpeg?cs=srgb&dl=pexels-shkrabaanthony-8192249.jpg&fm=jpg",
  },
  {
    title: "Routing and Channel Management",
    text: "Coordinated inbound and outbound workflows across operations.",
    image:
      "https://images.pexels.com/photos/7709268/pexels-photo-7709268.jpeg?cs=srgb&dl=pexels-mart-production-7709268.jpg&fm=jpg",
  },
  {
    title: "Quality Intelligence Layer",
    text: "Continuous QA insights driving measurable service improvement.",
    image:
      "https://images.pexels.com/photos/8866775/pexels-photo-8866775.jpeg?cs=srgb&dl=pexels-yankrukov-8866775.jpg&fm=jpg",
  },
];

const showcaseImage =
  "https://images.pexels.com/photos/8191956/pexels-photo-8191956.jpeg?cs=srgb&dl=pexels-shkrabaanthony-8191956.jpg&fm=jpg";

const globalImage =
  "https://images.pexels.com/photos/8866775/pexels-photo-8866775.jpeg?cs=srgb&dl=pexels-yankrukov-8866775.jpg&fm=jpg";

const contactChannels = [
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+20 10 0000 0000",
    meta: "Mon-Sat, 9:00 AM - 11:00 PM",
    href: "tel:+201000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@callivos.com",
    meta: "We respond within one business day.",
    href: "mailto:hello@callivos.com",
  },
  {
    icon: Clock3,
    label: "Coverage",
    value: "24/7 Customer Support",
    meta: "Inbound and outbound operations.",
  },
  {
    icon: MapPin,
    label: "Operations",
    value: "Cairo, Egypt",
    meta: "Serving local and regional brands.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.08,
      duration: 0.68,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const trackedSections = ["features", "launch", "stories", "contact"];
const inViewViewport = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };

function App() {
  const [activeSection, setActiveSection] = useState("features");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.34;
      let currentSection = "features";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        }
      }

      setActiveSection((prev) => (prev === currentSection ? prev : currentSection));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Callivos Inquiry - ${contactForm.company.trim() || contactForm.name.trim()}`,
    );

    const body = encodeURIComponent(`Name: ${contactForm.name.trim()}
Email: ${contactForm.email.trim()}
Company: ${contactForm.company.trim() || "N/A"}

Message:
${contactForm.message.trim()}`);

    window.location.href = `mailto:hello@callivos.com?subject=${subject}&body=${body}`;
  };

  const handleSectionScroll = (event, targetId) => {
    event.preventDefault();

    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const cleanUrl = `${window.location.pathname}${window.location.search}`;
      window.history.replaceState(null, "", cleanUrl);
      return;
    }

    const section = document.getElementById(targetId);
    if (!section) {
      return;
    }

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const topOffset = targetId === "contact" ? 108 : window.innerHeight * 0.26;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: Math.min(Math.max(0, sectionTop - topOffset), maxScroll),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <>
      <header className="site-header">
        <div className="shell nav-row">
          <a className="brand" href="#top" onClick={(event) => handleSectionScroll(event, "top")}>
            <img src={logo} alt="Callivos logo" />
            <span>Callivos</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <a
              className={activeSection === "features" ? "active" : ""}
              href="#features"
              onClick={(event) => handleSectionScroll(event, "features")}
            >
              Solutions
            </a>
            <a
              className={activeSection === "launch" ? "active" : ""}
              href="#launch"
              onClick={(event) => handleSectionScroll(event, "launch")}
            >
              Industries
            </a>
            <a
              className={activeSection === "stories" ? "active" : ""}
              href="#stories"
              onClick={(event) => handleSectionScroll(event, "stories")}
            >
              Insights
            </a>
          </nav>

          <a
            className={`btn btn-small${activeSection === "contact" ? " active" : ""}`}
            href="#contact"
            onClick={(event) => handleSectionScroll(event, "contact")}
          >
            Contact Us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="shell hero">
          <motion.div className="hero-copy" variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <p className="eyebrow">
              <Sparkles size={14} />
              DYNAMIC SERVICE EXPERIENCE
            </p>
            <h1>Enterprise-grade customer operations designed for modern service brands.</h1>
            <p className="subtext">
              Inspired by global outsourcing leaders, Callivos combines operational discipline, technology-enabled support, and human expertise to deliver measurable customer experience outcomes.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="#contact"
                onClick={(event) => handleSectionScroll(event, "contact")}
              >
                Contact Us
                <ArrowRight size={18} />
              </a>
              <a
                className="btn btn-ghost"
                href="#features"
                onClick={(event) => handleSectionScroll(event, "features")}
              >
                View Solutions
              </a>
            </div>
          </motion.div>

          <motion.aside className="hero-panel hero-media" variants={fadeUp} initial="hidden" animate="show" custom={1}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={heroSlides[currentSlide].image}
                className="hero-slide"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <img src={heroSlides[currentSlide].image} alt={heroSlides[currentSlide].title} />
                <figcaption className="hero-overlay">
                  <p>{heroSlides[currentSlide].title}</p>
                  <span>{heroSlides[currentSlide].subtitle}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="hero-dots" role="tablist" aria-label="Hero Slides">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.image}
                  className={`hero-dot${index === currentSlide ? " active" : ""}`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <motion.div
              className="float-card card-one"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap size={16} />
              <span>96% CSAT</span>
            </motion.div>
            <motion.div
              className="float-card card-two"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <Globe2 size={16} />
              <span>Global-ready Teams</span>
            </motion.div>
          </motion.aside>
        </section>

        <section className="shell impact-strip">
          {[
            "50K+ monthly interactions managed",
            "Dedicated multilingual agent teams",
            "Structured QA and governance framework",
            "Rapid onboarding for new accounts",
          ].map((item, index) => (
            <motion.article
              className="impact-item"
              key={item}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              custom={index}
            >
              <p>{item}</p>
            </motion.article>
          ))}
        </section>

        <section className="shell section" id="features">
          <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <p className="eyebrow">Our Solutions and Services</p>
            <h2>Modular support capabilities built to scale with your business goals.</h2>
          </motion.div>

          <div className="solution-layout">
            <div className="solution-grid">
              {solutionCards.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  className="solution-card"
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                  custom={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22 }}
                >
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </div>

            <motion.aside
              className="showcase-panel"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              custom={2}
            >
              <img src={showcaseImage} alt="Quality and analytics dashboard visual" />
              <div>
                <h3>Operational intelligence for every call journey</h3>
                <ul>
                  <li>Call quality monitoring and calibration</li>
                  <li>Supervisor-level performance dashboards</li>
                  <li>Weekly optimization and coaching loops</li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="shell section" id="launch">
          <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <p className="eyebrow">Industry Expertise</p>
            <h2>Specialized delivery models across high-demand customer service sectors.</h2>
          </motion.div>

          <div className="industry-grid">
            {industryCards.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                className="industry-card"
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
              >
                <Icon size={20} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>

          <motion.div className="global-band" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <img src={globalImage} alt="Global operations and routing visual" />
            <div className="global-metrics">
              <article>
                <strong>17+</strong>
                <p>Target markets ready for expansion</p>
              </article>
              <article>
                <strong>3</strong>
                <p>Phased onboarding model from pilot to scale</p>
              </article>
              <article>
                <strong>100%</strong>
                <p>Dedicated account governance and reporting cadence</p>
              </article>
            </div>
          </motion.div>
        </section>

        <section className="shell section" id="stories">
          <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <p className="eyebrow">Insights and Client Stories</p>
            <h2>Thought leadership and practical operating playbooks for customer experience growth.</h2>
          </motion.div>

          <div className="insight-grid">
            {insightsCards.map((item, index) => (
              <motion.article
                className="insight-card"
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
              >
                <p className="insight-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact" onClick={(event) => handleSectionScroll(event, "contact")}>
                  Learn more <ArrowRight size={14} />
                </a>
              </motion.article>
            ))}
          </div>

          <div className="gallery-grid">
            {visualCards.map((card, index) => (
              <motion.article
                className="gallery-card"
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <img src={card.image} alt={card.title} />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="shell section" id="contact">
          <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <p className="eyebrow">Contact Us</p>
            <h2>Share your current support model and we will map a tailored operating plan.</h2>
          </motion.div>

          <div className="contact-layout">
            <motion.div
              className="contact-info"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              custom={0}
            >
              <p className="contact-note">Reach us directly and our team will get back to you quickly.</p>
              <div className="contact-grid">
                {contactChannels.map(({ icon: Icon, label, value, meta, href }, index) => (
                  <motion.article
                    className="contact-card"
                    key={label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={inViewViewport}
                    custom={index}
                  >
                    <Icon size={20} />
                    <p className="contact-label">{label}</p>
                    {href ? <a href={href}>{value}</a> : <p className="contact-value">{value}</p>}
                    <p className="contact-meta">{meta}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleContactSubmit}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              custom={1}
            >
              <label className="field">
                <span>Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="field">
                <span>Work Email</span>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label className="field">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  value={contactForm.company}
                  onChange={handleContactChange}
                  placeholder="Company name"
                />
              </label>
              <label className="field">
                <span>How can we help?</span>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={5}
                  placeholder="Share your volume, channels, and support priorities."
                  required
                />
              </label>
              <button className="btn btn-ghost contact-submit" type="submit">
                Send Message
                <ArrowRight size={18} />
              </button>
            </motion.form>
          </div>
        </section>

        <section className="shell cta">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
            <h2>Ready to modernize your customer service operations?</h2>
            <p>
              Callivos provides the people, process, and performance structure to scale support with confidence.
            </p>
            <a className="btn btn-primary" href="mailto:hello@callivos.com">
              Request a Consultation
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <p>Callivos</p>
          <p>Customer operations partner for growth-focused businesses.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
