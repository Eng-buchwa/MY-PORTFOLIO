import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionIntro({ number, eyebrow, title, description }) {
  return (
    <Reveal className="section-intro">
      <div className="section-kicker">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-intro-copy">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </Reveal>
  )
}

export function TextLink({ href, children, external = false, className = '' }) {
  return (
    <a
      className={`text-link ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  )
}

export function TechList({ items }) {
  return (
    <ul className="tech-list" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
