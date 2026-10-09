import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import '../styles.css';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1];
const CONTACT_EMAIL = `mailto:ayusheditor1503@gmail.com?subject=${encodeURIComponent('Portfolio inquiry')}&body=${encodeURIComponent('Hi Ayush,\n\nI found your portfolio and would like to get in touch.\n\nBest,')}`;
const ThreeHeroScene = lazy(() => import('./ThreeHeroScene.jsx'));

const projects = [
  {
    number: '01',
    kind: 'MAGAZINE CATALOGUE',
    name: 'THE PASHA ATELIER',
    stack: 'React · Next.js',
    image: '/assets/project-pasha.webp',
    alt: 'Screenshot of The Pasha Atelier live magazine catalogue and customization site',
    href: 'https://thepashaatelier.vercel.app/'
  },
  {
    number: '02',
    kind: 'GAME-STUDIO CMS',
    name: 'BRAINCHILD GAMES',
    stack: 'React · Vite · Supabase',
    image: '/assets/project-brainchild.webp',
    alt: 'Screenshot of the live Brainchild Games studio website',
    href: 'https://games-studio-smoky.vercel.app/'
  },
  {
    number: '03',
    kind: 'COMMERCE CONCEPT',
    name: 'ARCHIVE N°9',
    stack: 'React · TypeScript · Vite',
    image: '/assets/project-archive.webp',
    alt: 'Screenshot of the live Archive N°9 storefront homepage',
    href: 'https://frontented-e-commerce-website-desig.vercel.app/'
  },
  {
    number: '04',
    kind: 'CREATIVE MEDIA',
    name: 'EDITING BOX',
    stack: 'React · Motion',
    image: '/assets/project-editing-box.webp',
    alt: 'Screenshot of Editing Box selected work with the video edit thumbnails',
    href: 'https://editing-box-j3as.vercel.app/'
  }
];

function Reveal({ children, className = '', delay = 0, as = 'div', ...rest }) {
  const reduceMotion = useReducedMotion();
  const Element = motion[as] ?? motion.div;
  return (
    <Element
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 38 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.82, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </Element>
  );
}

function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const smoothX = useSpring(x, { stiffness: 520, damping: 40, mass: 0.18 });
  const smoothY = useSpring(y, { stiffness: 520, damping: 40, mass: 0.18 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return undefined;
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event) => setHovering(Boolean(event.target.closest('a,button,.tool')));
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion) return null;
  return (
    <motion.div
      className="cursor"
      aria-hidden="true"
      style={{ left: smoothX, top: smoothY, x: '-50%', y: '-50%' }}
      animate={{ scale: hovering ? 2.1 : 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    />
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.querySelector('.menu-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);
  return (
    <header>
      <a className="mark" href="#top" aria-label="Ayush Thakur, back to top">AT<span>®</span></a>
      <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#arsenal" onClick={closeMenu}>Arsenal</a>
        <a href="https://www.linkedin.com/in/ayush-thakur-a91827419/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LinkedIn ↗</a>
      </nav>
      <a className="status" href={CONTACT_EMAIL} title="Opens a pre-filled email draft"><i aria-hidden="true"></i> Available for ideas ↗</a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span><span></span>
      </button>
    </header>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const [showThree, setShowThree] = useState(() => typeof window !== 'undefined' && window.matchMedia('(min-width: 461px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 461px)');
    const update = (event) => setShowThree(event.matches);
    setShowThree(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.p
        className="kicker"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        WELCOME TO THE WORLD OF
      </motion.p>
      <motion.h1
        id="hero-title"
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease: easeOut, delay: 0.08 }}
      >
        <span>AYUSH</span><span><em>THAKUR</em></span>
      </motion.h1>
      <motion.div
        className="hero-art"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: easeOut, delay: 0.12 }}
      >
        <img src="/assets/hero-anime.webp" alt="Anime heroes from Ayush’s existing portfolio artwork" fetchPriority="high" />
        {showThree && <Suspense fallback={null}><ThreeHeroScene /></Suspense>}
        <motion.div
          className="stamp"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.75, rotate: -22 }}
          animate={{ opacity: 1, scale: 1, rotate: -11 }}
          transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 0.55 }}
        >
          FULL-STACK<br />DEVELOPER<br /><b>DELHI / 2026</b>
        </motion.div>
        <motion.div
          className="scribble"
          initial={reduceMotion ? false : { opacity: 0, y: 16, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 7 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.7 }}
        >
          code is my<br />superpower ↗
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-bottom"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: easeOut, delay: 0.7 }}
      >
        <p>I engineer expressive digital products,<br />interactive 3D worlds and useful systems.</p>
        <div>
          <a href="#work">EXPLORE THE WORK ↓</a>
          <a href="https://www.linkedin.com/in/ayush-thakur-a91827419/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
          <a href={CONTACT_EMAIL} title="Opens a pre-filled email draft">START A PROJECT ↗</a>
        </div>
      </motion.div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <div className="chapter">CHAPTER 01 — THE ORIGIN STORY</div>
      <Reveal className="portrait" style={{ rotate: -2 }}>
        <img src="/assets/anime-sketch.webp" alt="Anime-style portrait artwork from Ayush’s existing portfolio" loading="lazy" decoding="async" />
        <span>FIG. 01<br />CREATIVE<br />TECHNOLOGIST</span>
      </Reveal>
      <Reveal className="bio" delay={0.12}>
        <h2>Developer mind.<br /><em>Artist instinct.</em></h2>
        <p className="lead">I make pixels and code get along.</p>
        <p>I’m Ayush, a full-stack developer from Delhi. I care about the technical details you can measure and the creative details you can feel — speed, rhythm, clarity and delight.</p>
        <p>When I’m not shipping a production build, I’m probably exploring WebGL, editing a story, or convincing myself that one more interaction will only take ten minutes.</p>
        <blockquote>“Build it fast. Make it useful.<br />Give it a little soul.”</blockquote>
      </Reveal>
    </section>
  );
}

function WorldSection() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [42, -42]);
  const smoothY = useSpring(imageY, { stiffness: 90, damping: 26, mass: 0.4 });
  return (
    <section className="world" ref={ref}>
      <Reveal className="world-copy">
        <span>MY DIGITAL WORLD / SCROLL TO TRAVEL</span>
        <h2>From sketchbook<br />to <em>shipping.</em></h2>
      </Reveal>
      <motion.img
        src="/assets/world-panorama.webp"
        alt="Hand-drawn panorama of a train crossing a bridge toward a city between mountains"
        style={{ y: smoothY }}
        loading="lazy"
        decoding="async"
      />
      <div className="route" aria-label="From idea to shipped build">
        <span>01 IDEA</span><i aria-hidden="true"></i><span>02 PROTOTYPE</span><i aria-hidden="true"></i><span>03 BUILD</span><i aria-hidden="true"></i><span>04 SHIP</span>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useTransform(py, [0, 1], [3, -3]);
  const rotateY = useTransform(px, [0, 1], [-4.5, 4.5]);
  const handlePointerMove = (event) => {
    if (reduceMotion || !window.matchMedia('(pointer:fine)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - bounds.left) / bounds.width);
    py.set((event.clientY - bounds.top) / bounds.height);
  };
  const resetTilt = () => {
    px.set(0.5);
    py.set(0.5);
  };
  return (
    <motion.a
      href={project.href}
      className="project reveal"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name}, ${project.kind}. Open project.`}
      initial={reduceMotion ? false : { opacity: 0, y: 38 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.78, ease: easeOut, delay: index % 2 ? 0.08 : 0 }}
      whileHover={reduceMotion ? undefined : { y: -7, scale: 1.008 }}
      whileTap={reduceMotion ? undefined : { scale: 0.992 }}
      style={{ rotateX, rotateY, transformPerspective: 1100, transformStyle: 'preserve-3d' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className={`visual v${index + 1}`}>
        <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
        <span className="visual-tag">{project.number} / {project.kind}</span>
      </div>
      <div className="meta">
        <span>{project.number} / {project.kind}</span>
        <b>{project.name}</b>
        <i>{project.stack}</i>
      </div>
      <div className="arrow" aria-hidden="true">↗</div>
    </motion.a>
  );
}

function WorkSection() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <Reveal className="section-title">
        <div>
          <span>CHAPTER 02 / SELECTED MISSIONS</span>
          <h2 id="work-heading">Real work,<br /><em>drawn differently.</em></h2>
        </div>
        <p>Four selected builds across editorial commerce, content systems and creative media. Each card opens a current project preview.</p>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}
      </div>
    </section>
  );
}

function Arsenal() {
  const reduceMotion = useReducedMotion();
  const skills = [
    ['REACT', 'Interface engine'],
    ['THREE.JS', 'World builder'],
    ['NEXT.JS', 'Speed boost'],
    ['NODE', 'Backend fuel'],
    ['PYTHON', 'Automation spell'],
    ['MOTION', 'Extra life']
  ];
  return (
    <section className="arsenal" id="arsenal">
      <Reveal className="section-title">
        <div><span>CHAPTER 03 / INVENTORY</span><h2>What’s in<br /><em>my toolkit?</em></h2></div>
        <p>Everything needed for a journey from first sketch to a polished production deployment.</p>
      </Reveal>
      <div className="tools">
        {skills.map(([name, detail], index) => (
          <motion.div
            className="tool"
            key={name}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: easeOut, delay: index * 0.045 }}
            whileHover={reduceMotion ? undefined : { rotate: index % 2 ? 1.2 : -1.2, y: -5 }}
          >
            <strong>{name}</strong><span>{detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const reduceMotion = useReducedMotion();
  return (
    <footer>
      <div className="chapter">FINAL CHAPTER — OR THE FIRST?</div>
      <Reveal as="h2">Have an idea<br />with <em>some spark?</em></Reveal>
      <motion.a
        className="mail"
        href={CONTACT_EMAIL}
        aria-label="Email Ayush with a pre-filled project inquiry"
        title="Opens a ready-to-send email draft"
        whileHover={reduceMotion ? undefined : { x: 6 }}
        transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      >
        LET’S BUILD IT <span>↗</span>
      </motion.a>
      <div className="contact">
        <span>AYUSH THAKUR © {new Date().getFullYear()}</span>
        <a href="https://www.linkedin.com/in/ayush-thakur-a91827419/" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
        <a href="mailto:ayusheditor1503@gmail.com">EMAIL ↗</a>
        <a href="https://wa.me/919599648246" target="_blank" rel="noopener noreferrer">WHATSAPP ↗</a>
        <a href="tel:+919599648246">+91 95996 48246</a>
        <span>DELHI, INDIA</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <div className="grain" aria-hidden="true"></div>
      <CustomCursor />
      <Header />
      <main id="top" tabIndex="-1">
        <Hero />
        <Manifesto />
        <WorldSection />
        <WorkSection />
        <Arsenal />
        <Footer />
      </main>
    </>
  );
}
