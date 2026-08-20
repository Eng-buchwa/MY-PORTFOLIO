import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowRight,
  AtSign,
  Braces,
  Code2,
  Database,
  Download,
  Globe2,
  LoaderCircle,
  Mail,
  MessageCircle,
  Menu,
  Network,
  Phone,
  Server,
  Terminal,
  Wrench,
  X,
} from 'lucide-react'
import {
  earlierProject,
  experience,
  navigation,
  profile,
  projects,
  repositories,
  services,
  skills,
} from './data/portfolio.js'
import ProjectVisual from './components/ProjectVisual.jsx'
import { Reveal, SectionIntro, TechList, TextLink } from './components/ui.jsx'

const skillIcons = {
  frontend: Code2,
  backend: Server,
  databases: Database,
  tools: Wrench,
  support: Network,
}

function GitHubIcon({ size = 18 }) {
  return <Terminal size={size} aria-hidden="true" />
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Nicolaus Buchwa Gilbert, home">
        <span>N</span><i />BG
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>
      <a className="header-cta" href="#contact">Let's talk <ArrowRight size={15} /></a>
      <button
        className="menu-button"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeroVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="portrait-stage"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2 }}
    >
      <div className="portrait-grid" />
      <div className="portrait-outline" />
      <div className="portrait-frame">
        <img src={profile.avatar} alt="Nicolaus Buchwa Gilbert" />
        <div className="portrait-shade" />
      </div>
      <div className="floating-code code-one"><span>frontend</span><strong>React.jsx</strong></div>
      <div className="floating-code code-two"><span>backend</span><strong>FastAPI.py</strong></div>
      <div className="portrait-status"><i /><span>Available for projects</span></div>
      <div className="portrait-index">NBG / 2026</div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <i /> Full-stack engineering · Tanzania
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Nicolaus<br /><span>Buchwa Gilbert.</span>
        </motion.h1>
        <motion.div
          className="hero-role"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Braces size={22} /> Full-Stack Software Engineer
        </motion.div>
        <motion.p
          className="hero-statement"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {profile.statement}
        </motion.p>
        <motion.div
          className="core-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <span>React</span><i /><span>Python</span><i /><span>FastAPI</span><i /><span>PostgreSQL</span><i /><span>SQLite3</span>
        </motion.div>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a className="button primary-button" href="#projects">View projects <ArrowDown size={17} /></a>
          <a className="button secondary-button" href="#contact">Contact me <ArrowRight size={17} /></a>
        </motion.div>
        <motion.div className="hero-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon size={16} /> GitHub</a>
          <span className="muted-link"><AtSign size={16} /> {profile.socialHandle}</span>
          {profile.cv ? (
            <a href={profile.cv} download><Download size={16} /> Download CV</a>
          ) : (
            <a href="#contact"><Download size={16} /> Request CV</a>
          )}
        </motion.div>
      </div>
      <HeroVisual />
      <div className="scroll-marker"><span>Scroll to explore</span><i /></div>
    </section>
  )
}

function About() {
  return (
    <section className="section shell" id="about">
      <SectionIntro
        number="01"
        eyebrow="About"
        title={<>Engineering useful<br />digital products.</>}
        description="I work across interface, application logic, and data to turn practical requirements into maintainable web software."
      />
      <div className="about-grid">
        <Reveal className="about-lead">
          <span className="large-bracket">{'{'}</span>
          <p>
            My primary focus is <strong>full-stack software engineering</strong>: building clear React experiences,
            structured Python and FastAPI backends, and relational databases that support real workflows.
          </p>
        </Reveal>
        <Reveal className="about-detail" delay={0.1}>
          <p>
            I bring additional experience in ICT support, networking, and computer maintenance. That systems
            foundation helps me think beyond the screen and build software with deployment, reliability, and users in mind.
          </p>
          <div className="discipline-list">
            <span><i>01</i>Interface craft</span>
            <span><i>02</i>Backend systems</span>
            <span><i>03</i>Relational data</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <SectionIntro
          number="02"
          eyebrow="Technical stack"
          title={<>Tools chosen for<br />the work at hand.</>}
          description="A practical stack spanning product interfaces, backend services, and reliable data foundations."
        />
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.id]
            return (
              <Reveal className={`skill-card ${skill.id === 'support' ? 'support-card' : ''}`} delay={index * 0.05} key={skill.id}>
                <div className="skill-card-top"><Icon size={22} /><span>{skill.eyebrow}</span></div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <TechList items={skill.items} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectShowcase({ project, index }) {
  const reversed = index % 2 === 1

  return (
    <article className={`project-showcase ${reversed ? 'project-reversed' : ''}`}>
      <Reveal className="project-copy">
        <div className="project-meta">
          <span className="project-number">PROJECT / {project.number}</span>
          <span className={`status ${project.statusTone}`}><i />{project.status}</span>
        </div>
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-detail">{project.detail}</p>
        <TechList items={project.technologies} />
        <div className="project-links">
          <TextLink href={project.github} external>View GitHub</TextLink>
          {project.live && <TextLink href={project.live} external>Live project</TextLink>}
          <span className="future-link">Case study planned</span>
        </div>
      </Reveal>
      <Reveal className="project-visual-wrap" delay={0.12}>
        <div className="visual-corner top-left" /><div className="visual-corner bottom-right" />
        <ProjectVisual type={project.visual} />
      </Reveal>
    </article>
  )
}

function Projects() {
  return (
    <section className="section shell" id="projects">
      <SectionIntro
        number="03"
        eyebrow="Selected work"
        title={<>Real projects.<br />Different challenges.</>}
        description="Selected public work across business interfaces, backend engineering, and full-stack product development."
      />
      <div className="projects-list">
        {projects.map((project, index) => <ProjectShowcase project={project} index={index} key={project.slug} />)}
      </div>
      <Reveal className="earlier-project">
        <div><span>EARLIER PROJECT / 04</span><h3>{earlierProject.title}</h3></div>
        <p>{earlierProject.description}</p>
        <TextLink href={earlierProject.github} external>View repository</TextLink>
      </Reveal>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="shell">
        <SectionIntro
          number="04"
          eyebrow="Experience"
          title={<>Software thinking,<br />systems grounding.</>}
          description="Experience across business web work, technical operations, telecommunications, and public-sector ICT support."
        />
        <div className="experience-list">
          {experience.map((item, index) => (
            <Reveal className="experience-item" delay={index * 0.06} key={item.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-company"><h3>{item.company}</h3><span>{item.focus}</span></div>
              <p>{item.description}</p>
              <ArrowRight size={20} aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section shell" id="services">
      <SectionIntro
        number="05"
        eyebrow="Services"
        title={<>From requirement<br />to working software.</>}
        description="Focused development services for useful, maintainable business software."
      />
      <div className="services-grid">
        {services.map((service, index) => (
          <Reveal className={`service-card ${service.secondary ? 'secondary-service' : ''}`} delay={index * 0.04} key={service.title}>
            <div><span>{service.number}</span><ArrowRight size={19} /></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function GitHubSection() {
  return (
    <section className="section github-section" id="github">
      <div className="shell github-grid">
        <Reveal className="github-profile">
          <div className="github-mark"><GitHubIcon size={34} /></div>
          <span className="mono-label">OPEN SOURCE / PUBLIC WORK</span>
          <h2>Follow the work<br />as it develops.</h2>
          <p>
            The public repositories show the current implementation directly. No invented contribution totals or activity metrics.
          </p>
          <a className="button primary-button" href={profile.github} target="_blank" rel="noreferrer">
            View {profile.githubHandle} <ArrowRight size={17} />
          </a>
        </Reveal>
        <Reveal className="repo-list" delay={0.1}>
          <div className="repo-list-head"><span>SELECTED REPOSITORIES</span><span>{repositories.length} PUBLIC</span></div>
          {repositories.map((repo) => (
            <a href={repo.href} target="_blank" rel="noreferrer" key={repo.name}>
              <GitHubIcon size={18} />
              <strong>{repo.name}</strong>
              <span><i />{repo.language}</span>
              <ArrowRight size={18} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function ContactForm() {
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setSubmitState({ status: 'sending', message: 'Sending your message...' })

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || result.success === 'false') {
        throw new Error(result.message || 'The message could not be sent.')
      }

      form.reset()
      setSubmitState({
        status: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
    } catch {
      setSubmitState({
        status: 'error',
        message: `Message failed to send. Please email me directly at ${profile.email}.`,
      })
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New portfolio project enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" />
      <div className="field-row">
        <label><span>Your name</span><input type="text" name="name" placeholder="Name" required /></label>
        <label><span>Email address</span><input type="email" name="email" placeholder="you@example.com" required /></label>
      </div>
      <label><span>Project type</span><input type="text" name="subject" placeholder="Web application, API, website..." /></label>
      <label><span>Tell me about it</span><textarea name="message" rows="5" placeholder="A short outline of your project or challenge" required /></label>
      <button className="button primary-button" type="submit" disabled={submitState.status === 'sending'}>
        {submitState.status === 'sending' ? (
          <>Sending <LoaderCircle className="submit-spinner" size={17} /></>
        ) : (
          <>Send message <ArrowRight size={17} /></>
        )}
      </button>
      <div
        className={`form-status ${submitState.status}`}
        role={submitState.status === 'error' ? 'alert' : 'status'}
        aria-live="polite"
      >
        {submitState.message || 'Your details are sent securely through the contact form.'}
      </div>
    </form>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div className="contact-heading">
          <Reveal>
            <span className="mono-label">06 / START A CONVERSATION</span>
            <h2>Have a project<br />in mind?</h2>
          </Reveal>
          <Reveal className="contact-side" delay={0.1}>
            <p>Let’s build something useful together.</p>
            <span>Available for full-stack projects, backend systems, and business web applications.</span>
          </Reveal>
        </div>
        <div className="contact-grid">
          <Reveal className="contact-channels">
            <h3>Contact channels</h3>
            <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /><span><small>GitHub</small>@{profile.githubHandle}</span><ArrowRight /></a>
            <a href={`mailto:${profile.email}`}><Mail /><span><small>Email</small>{profile.email}</span><ArrowRight /></a>
            <a href={`tel:${profile.phoneHref}`}><Phone /><span><small>Phone</small>{profile.phone}</span><ArrowRight /></a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small>{profile.phone}</span><ArrowRight /></a>
            <div className="social-channel"><AtSign /><span><small>Social media</small>@{profile.socialHandle}</span></div>
            <div className="contact-location"><Globe2 size={17} /><span>{profile.location} · Open to remote collaboration</span></div>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><span>N</span><i />BG</div>
        <p>Full-Stack Software Engineer building reliable, useful digital products.</p>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Nicolaus Buchwa Gilbert</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="site-noise" aria-hidden="true" />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
