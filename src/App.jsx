import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Cpu,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

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
  { value: "24/7", label: "Service Availability" },
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

const socialProofHighlights = [
  {
    title: "3 Industries Served",
    text: "Aviation, E-commerce, and Logistics.",
  },
  {
    title: "Local & International Operations",
    text: "Support model built for domestic and cross-border coverage.",
  },
  {
    title: "Scalable Teams for Peak Seasons",
    text: "Rapid staffing expansion for campaigns and demand spikes.",
  },
];

const socialProofMetrics = [
  {
    value: "400,000+",
    label: "Monthly Customer Interactions",
  },
  {
    value: "24/7",
    label: "Omnichannel Support",
  },
  {
    value: "90%",
    label: "Average Customer Satisfaction (CSAT)",
  },
  {
    value: "45%",
    label: "Faster Response Time",
  },
];

const operatingModelIndustries = [
  {
    name: "Banking",
    detail: "Secure inbound support for account, card, and transaction-related customer requests.",
  },
  {
    name: "Healthcare",
    detail: "Patient-centered communication with privacy-aware handling and reliable follow-up.",
  },
  {
    name: "Retail",
    detail: "Fast order, return, and product support to protect customer loyalty.",
  },
  {
    name: "E-commerce",
    detail: "Always-on support for checkout, delivery, and post-purchase journeys.",
  },
  {
    name: "Technology",
    detail: "Tiered assistance for onboarding, access, and usage-related issues.",
  },
  {
    name: "Travel",
    detail: "Responsive support for bookings, schedules, and service disruptions.",
  },
];

const operatingModelSteps = [
  {
    icon: Headphones,
    title: "Discover",
    text: "Map channels, expected volumes, service levels, and customer journey friction points.",
  },
  {
    icon: Cpu,
    title: "Build",
    text: "Design staffing plans, workflows, and automation around your support operating model.",
  },
  {
    icon: Globe2,
    title: "Operate",
    text: "Launch with clear SLAs, quality controls, and live visibility across all active channels.",
  },
  {
    icon: BarChart3,
    title: "Scale",
    text: "Expand coverage with KPI-driven optimization and flexible staffing for seasonal peaks.",
  },
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

const caseStudies = [
  {
    tag: "Aviation Training Academy - International",
    title: "High-volume student support operations with seasonal demand spikes.",
    volume: [
      "20,000+ inbound calls monthly",
      "90,000-150,000 digital inquiries (email and social)",
      "Seasonal outbound campaigns",
    ],
    actions: [
      "High-volume inbound handling",
      "Omnichannel support",
      "Seasonal scaling",
      "International service standards",
    ],
    results: [
      "45-55% faster response time",
      "85-88% CSAT",
      "95% call answer rate",
      "Zero downtime during peak seasons",
    ],
    image:
      "https://images.pexels.com/photos/5816283/pexels-photo-5816283.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    tag: "Automotive Accessories Brand - Local Startup",
    title: "Conversion-focused customer support for digital-first commerce.",
    volume: [
      "8,000-10,000 calls monthly",
      "40,000-70,000 digital inquiries monthly",
    ],
    actions: [
      "WhatsApp and Instagram support",
      "Order confirmation and inquiry handling",
      "After-sales support",
    ],
    results: [
      "45% faster first response",
      "30% higher order confirmation rate",
      "20-25% increase in repeat purchases",
      "Reduced cart-abandonment inquiries",
    ],
    image:
      "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    tag: "Logistics Company - International",
    title: "SLA-driven shipment support across large digital volumes.",
    volume: [
      "25,000+ calls monthly",
      "120,000-180,000 digital interactions monthly",
    ],
    actions: [
      "Shipment tracking support",
      "Escalation handling",
      "SLA-driven operations",
    ],
    results: [
      "35% faster issue resolution",
      "50% fewer escalations",
      "87% CSAT",
      "97% SLA compliance",
    ],
    image:
      "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

const howWeWorkSteps = [
  {
    icon: Headphones,
    title: "Dedicated support teams",
    text: "Assigned teams operate as an extension of your business with clear ownership and accountability.",
  },
  {
    icon: Mail,
    title: "Omnichannel setup",
    text: "Calls, email, WhatsApp, and social channels are configured into one seamless support workflow.",
  },
  {
    icon: Globe2,
    title: "Scalable workforce",
    text: "Staffing flexes for promotions, seasonality, and growth phases without impacting service continuity.",
  },
  {
    icon: BarChart3,
    title: "KPI-driven reviews",
    text: "Weekly performance tracking keeps response time, CSAT, and SLA targets under continuous control.",
  },
];

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "info@callivos.com",
    meta: "Reply within one business day.",
    href: "mailto:info@callivos.com",
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

const trackedSections = ["features", "operating-model", "case-studies", "how-we-work", "contact"];

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

    window.location.href = `mailto:info@callivos.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="site-header">
        <div className="page-wrap nav-row">
          <a className="brand" href="#top" onClick={(event) => handleSectionScroll(event, "top")}>
            <span className="brand-wordmark" aria-label="Callivos">
              <span className="brand-mark">C</span>alli<span className="brand-mark">V</span>os
            </span>
            <span className="brand-slogan">Connecting Voices</span>
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
              className={activeSection === "operating-model" ? "active" : ""}
              href="#operating-model"
              onClick={(event) => handleSectionScroll(event, "operating-model")}
            >
              Operating Model
            </a>
            <a
              className={activeSection === "case-studies" ? "active" : ""}
              href="#case-studies"
              onClick={(event) => handleSectionScroll(event, "case-studies")}
            >
              Case Studies
            </a>
            <a
              className={activeSection === "how-we-work" ? "active" : ""}
              href="#how-we-work"
              onClick={(event) => handleSectionScroll(event, "how-we-work")}
            >
              How We Work
            </a>
            <a
              className={activeSection === "contact" ? "active" : ""}
              href="#contact"
              onClick={(event) => handleSectionScroll(event, "contact")}
            >
              Contact Us
            </a>
          </nav>
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
                Callivos helps startups and growing brands deploy scalable support operations with the right mix of
                people, process, and AI.
              </p>
              <div className="hero-actions">
                <a
                  className="hero-action-link hero-action-primary"
                  href="#contact"
                  onClick={(event) => handleSectionScroll(event, "contact")}
                >
                  Contact Us
                  <ArrowRight size={17} />
                </a>
                <a
                  className="hero-action-link hero-action-secondary"
                  href="#features"
                  onClick={(event) => handleSectionScroll(event, "features")}
                >
                  View Solutions
                  <ArrowRight size={17} />
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
          </div>
        </section>

        <section className="section proof-band">
          <div className="page-wrap section-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Why Clients Trust Callivos</p>
              <h2>Trusted customer support delivery across high-volume local and international operations.</h2>
            </motion.div>

            <div className="proof-layout">
              <motion.article
                className="proof-summary"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={0}
              >
                <h3>Operational credibility you can show clients immediately</h3>
                <ul className="proof-list">
                  {socialProofHighlights.map((item) => (
                    <li key={item.title}>
                      <span>{item.title}</span>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </motion.article>

              <div className="proof-stat-grid">
                {socialProofMetrics.map((metric, index) => (
                  <motion.article
                    className="proof-metric"
                    key={metric.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={inViewViewport}
                    custom={index + 1}
                  >
                    <strong>{metric.value}</strong>
                    <p>{metric.label}</p>
                  </motion.article>
                ))}
              </div>
            </div>
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

        <section className="section launch-band" id="operating-model">
          <div className="page-wrap section-shell launch-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Operating Model</p>
              <h2>Practical structure to launch, govern, and scale your customer support operations.</h2>
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
                  We align delivery to your business goals, then run day-to-day support with measurable controls for
                  quality, productivity, and customer outcomes.
                </p>
                <div className="industry-grid">
                  {operatingModelIndustries.map((industry) => (
                    <article className="industry-card" key={industry.name}>
                      <h4>{industry.name}</h4>
                      <p>{industry.detail}</p>
                    </article>
                  ))}
                </div>
              </motion.article>

              <div className="roadmap-stack">
                {operatingModelSteps.map(({ icon: Icon, title, text }, index) => (
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

        <section className="section" id="case-studies">
          <div className="page-wrap section-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">Case Studies</p>
              <h2>Three delivery models that prove measurable support outcomes across industries.</h2>
            </motion.div>

            <div className="case-study-stack">
              {caseStudies.map((study, index) => (
                <motion.article
                  className="case-study-card"
                  key={study.tag}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                  custom={index}
                >
                  <div className="case-study-cover">
                    <img src={study.image} alt={study.tag} />
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-head">
                      <p>{study.tag}</p>
                      <h3>{study.title}</h3>
                    </div>

                    <div className="case-study-grid">
                      <article className="case-study-block">
                        <h4>Volume</h4>
                        <ul>
                          {study.volume.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>

                      <article className="case-study-block">
                        <h4>What We Did</h4>
                        <ul>
                          {study.actions.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>

                      <article className="case-study-block">
                        <h4>Results</h4>
                        <ul>
                          {study.results.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section launch-band" id="how-we-work">
          <div className="page-wrap section-shell launch-shell">
            <motion.div className="section-head" variants={fadeUp} initial="hidden" whileInView="show" viewport={inViewViewport}>
              <p className="kicker">How We Work</p>
              <h2>Operational structure designed for stable quality and scalable growth.</h2>
            </motion.div>

            <div className="work-grid">
              {howWeWorkSteps.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  className="work-card"
                  key={title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                  custom={index}
                >
                  <div className="work-title">
                    <Icon size={20} />
                    <h3>{title}</h3>
                  </div>
                  <p>{text}</p>
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
                <button className="hero-action-link hero-action-primary contact-submit-link" type="submit">
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
          <p>Connecting Voices for high-performance customer operations.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
