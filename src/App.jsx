import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck2,
  Clock3,
  Globe2,
  Headphones,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import logo from "../Calivos.png";

const featureCards = [
  {
    icon: Headphones,
    title: "24/7 Inbound Customer Support",
    text: "Dedicated agents answer calls, resolve issues, and keep your SLAs on track day and night.",
  },
  {
    icon: Globe2,
    title: "Bilingual and Multilingual Teams",
    text: "Serve customers in Arabic, English, and more with trained agents who match your brand tone.",
  },
  {
    icon: PhoneCall,
    title: "Outbound Follow-Up Campaigns",
    text: "Run proactive callbacks for order updates, renewals, collections, and customer feedback.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance and Compliance",
    text: "Recorded calls, scorecards, and regular QA audits keep service quality consistent.",
  },
];

const launchSteps = [
  {
    icon: CalendarCheck2,
    title: "1. Discovery and Setup",
    text: "We map your workflows, tone guide, escalation paths, and service-level targets.",
  },
  {
    icon: Headphones,
    title: "2. Team Training and Pilot",
    text: "Your dedicated agents train on your product and start with a controlled launch.",
  },
  {
    icon: BarChart3,
    title: "3. Full Go-Live and Reporting",
    text: "Scale support coverage with weekly performance reports and continuous optimization.",
  },
];

const customerQuotes = [
  {
    quote:
      "Callivos became an extension of our team. Customer wait times dropped fast and our satisfaction score improved in the first month.",
    author: "Customer Experience Manager, Novexa Retail",
  },
  {
    quote:
      "We needed reliable bilingual support without hiring an internal call center. Callivos delivered structure, quality, and clear reporting.",
    author: "Operations Director, Almera Services",
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
    meta: "We respond within one business day.",
    href: "mailto:hello@callivos.com",
  },
  {
    icon: Clock3,
    label: "Coverage",
    value: "24/7 Customer Support",
    meta: "Inbound and outbound campaigns.",
  },
  {
    icon: MapPin,
    label: "Operations",
    value: "Cairo, Egypt",
    meta: "Remote-ready team for global brands.",
  },
];

const liftIn = {
  hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const trackedSections = ["features", "launch", "stories", "contact"];
const inViewViewport = { once: true, amount: 0.24, margin: "0px 0px -10% 0px" };

function App() {
  const [activeSection, setActiveSection] = useState("features");
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
      const activationLine = window.innerHeight * 0.38;
      let currentSection = "features";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        }
      }

      setActiveSection((prev) =>
        prev === currentSection ? prev : currentSection,
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
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
    const body = encodeURIComponent(
      `Name: ${contactForm.name.trim()}
Email: ${contactForm.email.trim()}
Company: ${contactForm.company.trim() || "N/A"}

Message:
${contactForm.message.trim()}`,
    );

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
    if (targetId === "contact") {
      const contactTop = sectionTop - 20;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      window.scrollTo({
        top: Math.min(Math.max(0, contactTop), maxScroll),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${targetId}`);
      return;
    }

    const headingAnchor = section.querySelector("h2, h1");
    const anchorElement = headingAnchor || section;
    const anchorTop = window.scrollY + anchorElement.getBoundingClientRect().top;
    const targetTop = anchorTop - window.innerHeight * 0.42;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: Math.min(Math.max(0, targetTop), maxScroll),
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
              Features
            </a>
            <a
              className={activeSection === "launch" ? "active" : ""}
              href="#launch"
              onClick={(event) => handleSectionScroll(event, "launch")}
            >
              How It Works
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
        <section className="shell hero">
          <motion.div
            className="hero-copy"
            variants={liftIn}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <p className="eyebrow">Customer Service Call Center Partner</p>
            <h1>
              Professional customer support that feels like your in-house team.
            </h1>
            <p className="subtext">
              Callivos helps startups and growing businesses handle inbound and
              outbound customer conversations with trained agents, fast response
              times, and clear reporting.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="#contact"
                onClick={(event) => handleSectionScroll(event, "contact")}
              >
                Book a Consultation
                <ArrowRight size={18} />
              </a>
              <a
                className="btn btn-ghost"
                href="#features"
                onClick={(event) => handleSectionScroll(event, "features")}
              >
                See Services
              </a>
            </div>
          </motion.div>

          <motion.aside
            className="hero-panel"
            variants={liftIn}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <p className="panel-title">Service Snapshot</p>
            <ul>
              <li>
                <span>First Response Time</span>
                <strong>23s</strong>
              </li>
              <li>
                <span>Average CSAT</span>
                <strong>96%</strong>
              </li>
              <li>
                <span>Calls Handled Monthly</span>
                <strong>50,000+</strong>
              </li>
            </ul>
            <div className="panel-note">
              <p>Inbound and outbound coverage</p>
              <p>Dedicated account manager</p>
            </div>
          </motion.aside>
        </section>

        <section className="shell stats">
          {["50K+ monthly calls handled", "96% average CSAT", "24/7 support coverage"].map(
            (item, index) => (
              <motion.article
                className="stat-card"
                key={item}
                variants={liftIn}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
              >
                <p>{item}</p>
              </motion.article>
            ),
          )}
        </section>

        <section className="shell section" id="features">
          <motion.div
            className="section-head"
            variants={liftIn}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <p className="eyebrow">Built for Customer Experience Teams</p>
            <h2>
              All the support operations your business needs in one call center
              partner.
            </h2>
          </motion.div>
          <div className="feature-grid">
            {featureCards.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                className="feature-card"
                key={title}
                variants={liftIn}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
              >
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="shell section" id="launch">
          <motion.div
            className="section-head"
            variants={liftIn}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <p className="eyebrow">Simple Onboarding</p>
            <h2>Go live with a trained support team in days, not months.</h2>
          </motion.div>
          <div className="steps-grid">
            {launchSteps.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                className="step-card"
                key={title}
                variants={liftIn}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
              >
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="shell section" id="stories">
          <motion.div
            className="section-head"
            variants={liftIn}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <p className="eyebrow">Customer Stories</p>
            <h2>
              Growing companies trust Callivos to improve customer satisfaction
              and retention.
            </h2>
          </motion.div>
          <div className="quote-grid">
            {customerQuotes.map(({ quote, author }, index) => (
              <motion.blockquote
                className="quote-card"
                key={author}
                variants={liftIn}
                initial="hidden"
                whileInView="show"
                viewport={inViewViewport}
                custom={index}
              >
                <p>{quote}</p>
                <cite>{author}</cite>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section className="shell section contact-section" id="contact">
          <motion.div
            className="section-head"
            variants={liftIn}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <p className="eyebrow">Contact Us</p>
            <h2>Tell us your support goals and we will build a tailored call center plan.</h2>
          </motion.div>
          <div className="contact-layout">
            <motion.div
              className="contact-info"
              variants={liftIn}
              initial="hidden"
              whileInView="show"
              viewport={inViewViewport}
              custom={0}
            >
              <p className="contact-note">
                Need quick answers? Reach us directly using any channel below.
              </p>
              <div className="contact-grid">
                {contactChannels.map(({ icon: Icon, label, value, meta, href }, index) => (
                  <motion.article
                    className="contact-card"
                    key={label}
                    variants={liftIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={inViewViewport}
                    custom={index}
                  >
                    <Icon size={20} />
                    <p className="contact-label">{label}</p>
                    {href ? (
                      <a href={href}>{value}</a>
                    ) : (
                      <p className="contact-value">{value}</p>
                    )}
                    <p className="contact-meta">{meta}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="contact-form"
              onSubmit={handleContactSubmit}
              variants={liftIn}
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
                  placeholder="Share your call volume, channels, and support goals."
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
          <motion.div
            variants={liftIn}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
          >
            <h2>Need a reliable customer service team?</h2>
            <p>
              Share your call volume, channels, and support goals. We will
              build a tailored call center plan for your business.
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
          <p>Customer service and call center solutions for growing businesses.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
