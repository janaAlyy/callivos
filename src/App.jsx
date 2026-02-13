import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Clock3,
  Cpu,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import logo from "../Calivos.png";

const heroSlides = [
  {
    badge: "Omnichannel Support",
    title: "Scalable customer service operations for fast-growth teams",
    text: "Launch multilingual support, retention workflows, and QA governance without building in-house complexity.",
    image:
      "https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg?auto=compress&cs=tinysrgb&w=1920",
    shortLabel: "Support Pods",
  },
  {
    badge: "AI-Enabled Delivery",
    title: "Human-first teams powered by automation and live analytics",
    text: "Agent assist and smart workflows reduce handling time while preserving customer trust.",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920",
    shortLabel: "AI Assist",
  },
  {
    badge: "Performance Governance",
    title: "Operational command center with measurable business outcomes",
    text: "Track customer satisfaction, productivity, and quality from one integrated service model.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920",
    shortLabel: "Command View",
  },
  {
    badge: "Global Coverage",
    title: "24/7 customer experience designed for regional and global brands",
    text: "From Egypt-based operations to multi-market support, we align teams and tooling to growth targets.",
    image:
      "https://images.pexels.com/photos/7709287/pexels-photo-7709287.jpeg?auto=compress&cs=tinysrgb&w=1920",
    shortLabel: "Global Scale",
  },
];

const performanceKpis = [
  { value: "96%", label: "CSAT Stability" },
  { value: "35%", label: "Cost-to-Serve Reduction" },
  { value: "24/7", label: "Service Availability" },
  { value: "20+", label: "Languages Supported" },
];

const capabilities = [
  {
    icon: Headphones,
    title: "Customer Care",
    text: "Inbound and outbound support across voice, chat, email, and social channels.",
  },
  {
    icon: Cpu,
    title: "Automation Layer",
    text: "Workflow automation, ticket triage, and agent assist for faster resolution.",
  },
  {
    icon: BarChart3,
    title: "Performance Intelligence",
    text: "Real-time reporting, SLA tracking, and coaching dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and Compliance",
    text: "Governed quality controls with clear audit trails and policy adherence.",
  },
];

const roadmapSteps = [
  {
    icon: CalendarCheck2,
    title: "Discover",
    text: "Map channels, demand volumes, service levels, and customer journey friction points.",
  },
  {
    icon: Cpu,
    title: "Build",
    text: "Design staffing, workflows, and automation architecture around your support model.",
  },
  {
    icon: Globe2,
    title: "Scale",
    text: "Expand with multilingual coverage, stronger QA loops, and live performance visibility.",
  },
];

const industries = [
  "Banking",
  "Healthcare",
  "Retail",
  "eCommerce",
  "Technology",
  "Travel",
  "Telecom",
  "Public Sector",
];

const visionPrinciples = [
  {
    letter: "T",
    title: "Transparency",
    text: "We operate with complete transparency in communication, performance, and reporting with our clients.",
  },
  {
    letter: "R",
    title: "Reliability",
    text: "We deliver consistent, dependable inbound customer support that businesses can count on every day.",
  },
  {
    letter: "U",
    title: "Understanding",
    text: "We deeply understand our clients' customers, needs, and expectations to provide meaningful support experiences.",
  },
  {
    letter: "S",
    title: "Service Excellence",
    text: "We commit to high-quality service standards that enhance customer satisfaction and brand reputation.",
  },
  {
    letter: "T",
    title: "Timeliness",
    text: "We ensure prompt responses and efficient handling of every customer interaction to meet and exceed service expectations.",
  },
];

const stories = [
  {
    tag: "Featured Story",
    title: "How a retail brand reduced first-response time",
    text: "A blended model of support pods, QA coaching, and ticket-routing automation improved speed at scale.",
    image:
      "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Explore the transformation",
  },
  {
    tag: "Case Study",
    title: "Launching multilingual support for a fintech expansion",
    text: "New market rollout with regional language coverage and compliance controls.",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "View details",
  },
  {
    tag: "Client Impact",
    title: "Elevating first-contact resolution through AI agent guidance",
    text: "Process intelligence and agent prompts improved accuracy and reduced rework.",
    image:
      "https://images.pexels.com/photos/6804070/pexels-photo-6804070.jpeg?auto=compress&cs=tinysrgb&w=1920",
    cta: "Read impact",
  },
];

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
    meta: "Reply within one business day.",
    href: "mailto:hello@callivos.com",
  },
  {
    icon: Clock3,
    label: "Coverage",
    value: "24/7 Operations",
    meta: "Inbound and outbound support.",
  },
  {
    icon: MapPin,
    label: "Operations Hub",
    value: "Egypt",
    meta: "Serving MENA and global teams.",
  },
];

const trackedSections = ["features", "launch", "stories", "contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.07,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const inViewViewport = {
  once: true,
  amount: 0.24,
  margin: "0px 0px -10% 0px",
};

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSection, setActiveSection] = useState("features");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = trackedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.36;
      let current = sections[0].id;
      const nearPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;

      if (nearPageBottom) {
        current = sections[sections.length - 1].id;
      } else {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= activationLine) {
            current = section.id;
          }
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleSectionScroll = (event, targetId) => {
    event.preventDefault();

    if (trackedSections.includes(targetId)) {
      setActiveSection(targetId);
    }

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

    const header = document.querySelector(".site-header");
    const offset = header ? header.getBoundingClientRect().height + 18 : 100;
    const sectionTop = window.scrollY + section.getBoundingClientRect().top - offset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: Math.min(Math.max(0, sectionTop), maxScroll),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${targetId}`);
  };

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

  return (
    <>
      <header className="site-header">
        <div className="page-wrap nav-row">
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
              Model
            </a>
            <a
              className={activeSection === "stories" ? "active" : ""}
              href="#stories"
              onClick={(event) => handleSectionScroll(event, "stories")}
            >
              Stories
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
        <section className="hero-band">
          <div className="hero-bg-frame">
            <AnimatePresence mode="wait">
              <motion.img
                key={heroSlides[currentSlide].image}
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="hero-bg-shade" />
          </div>

          <div className="page-wrap hero-layout">
            <motion.div className="hero-panel" variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <p className="kicker">
                <Sparkles size={14} />
                CUSTOMER OPERATIONS PARTNER
              </p>
              <h1>Build a high-performance call center engine without the overhead.</h1>
              <p>
                Callivos helps startups and growth brands deploy scalable support operations with the right mix of
                people, process, and AI.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="#contact"
                  onClick={(event) => handleSectionScroll(event, "contact")}
                >
                  Contact Us
                  <ArrowRight size={17} />
                </a>
                <a
                  className="btn btn-ghost"
                  href="#features"
                  onClick={(event) => handleSectionScroll(event, "features")}
                >
                  View Solutions
                </a>
              </div>

              <div className="kpi-grid">
                {performanceKpis.map((item) => (
                  <article key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </motion.div>

            <motion.aside className="hero-side-rail" variants={fadeUp} initial="hidden" animate="show" custom={1}>
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  key={slide.shortLabel}
                  className={`rail-item${index === currentSlide ? " active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to ${slide.shortLabel}`}
                >
                  <img src={slide.image} alt={slide.shortLabel} />
                  <div>
                    <p>{slide.badge}</p>
                    <span>{slide.shortLabel}</span>
                  </div>
                </button>
              ))}
            </motion.aside>
          </div>
        </section>

        <section className="section vision-band" id="vision">
          <div className="page-wrap section-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Our Vision</p>
              <h2>
                To become a trusted customer support partner for growing businesses through reliable, human-centered
                inbound communication.
              </h2>
              <p>Our delivery model is built on TRUST.</p>
            </motion.div>

            <div className="vision-grid">
              {visionPrinciples.map((item, index) => (
                <motion.article
                  className="vision-card"
                  key={item.letter + item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                  custom={index}
                >
                  <div className="vision-title">
                    <span>{item.letter}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="page-wrap section-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Solutions Architecture</p>
              <h2>From frontline support to automation, we build the full service ecosystem.</h2>
              <p>
                Designed for startups and scaling companies that need enterprise-level customer service without a heavy
                internal setup.
              </p>
            </motion.div>

            <div className="feature-blocks">
              <motion.article
                className="lead-block"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={0}
              >
                <h3>Built for speed, governed for quality</h3>
                <ul>
                  <li>Omnichannel support with clear SLAs</li>
                  <li>Onboarding for new accounts</li>
                  <li>Structured quality reviews and coaching loops</li>
                </ul>
              </motion.article>

              <motion.figure
                className="feature-image"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={1}
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Support team handling omnichannel workflows"
                />
              </motion.figure>

              <div className="capability-grid">
                {capabilities.map(({ icon: Icon, title, text }, index) => (
                  <motion.article
                    className="capability-card"
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
            </div>
          </div>
        </section>

        <section className="section launch-band" id="launch">
          <div className="page-wrap section-shell launch-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Operating Model</p>
              <h2>Practical roadmap to launch, optimize, and scale your support operations.</h2>
            </motion.div>

            <div className="launch-grid">
              <motion.article
                className="launch-intro"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={0}
              >
                <h3>One partner from planning to daily execution</h3>
                <p>
                  We align the service model to your growth goals, then operate with measurable controls for quality,
                  productivity, and customer outcomes.
                </p>
                <div className="industry-grid">
                  {industries.map((industry) => (
                    <span key={industry}>{industry}</span>
                  ))}
                </div>
              </motion.article>

              <div className="roadmap-stack">
                {roadmapSteps.map(({ icon: Icon, title, text }, index) => (
                  <motion.article
                    className="roadmap-card"
                    key={title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={inViewViewport}
                    custom={index + 1}
                  >
                    <p className="step-id">0{index + 1}</p>
                    <div className="roadmap-title-row">
                      <Icon size={20} />
                      <h3>{title}</h3>
                    </div>
                    <p>{text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="stories">
          <div className="page-wrap section-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Client Stories</p>
              <h2>Transformation outcomes delivered through disciplined service execution.</h2>
            </motion.div>

            <div className="story-lanes">
              {stories.map((story, index) => (
                <motion.article
                  key={story.title}
                  className={`story-row${index % 2 === 0 ? " row-left" : " row-right"}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                  custom={index}
                >
                  <img src={story.image} alt={story.title} />
                  <div className="story-copy">
                    <p>{story.tag}</p>
                    <h3>{story.title}</h3>
                    <span>{story.text}</span>
                    <a href="#contact" onClick={(event) => handleSectionScroll(event, "contact")}>
                      {story.cta}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-band" id="contact">
          <div className="page-wrap section-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Contact Us</p>
              <h2>Tell us your support goals and we will design a tailored call center plan.</h2>
            </motion.div>

            <div className="contact-grid">
              <motion.div
                className="contact-channels"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={0}
              >
                {contactChannels.map(({ icon: Icon, label, value, meta, href }, index) => (
                  <motion.article
                    key={label}
                    className="channel-card"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={inViewViewport}
                    custom={index}
                  >
                    <Icon size={20} />
                    <p className="channel-label">{label}</p>
                    {href ? <a href={href}>{value}</a> : <p className="channel-value">{value}</p>}
                    <span>{meta}</span>
                  </motion.article>
                ))}
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
                    placeholder="Share your channels, expected volumes, and timeline."
                    required
                  />
                </label>
                <button className="btn btn-primary contact-submit" type="submit">
                  Send Message
                  <ArrowRight size={17} />
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-wrap footer-row">
          <p>Callivos</p>
          <p>Connecting voices through high-performance customer operations.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
