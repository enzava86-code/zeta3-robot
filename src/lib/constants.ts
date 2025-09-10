// Site configuration constants
export const SITE_CONFIG = {
  name: 'Zeta3',
  title: 'Zeta3 - Consultoría IA y Automatización',
  description: 'Liberamos 20+ horas semanales con IA y automatización',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zeta3.es',
  contact: {
    email: 'contacto@zeta3.es',
    location: 'Valencia, España',
  },
} as const;

// Company data constants
export const COMPANY_DATA = {
  revenue: '40M€',
  hoursSaved: '20+',
  maxSimultaneousProjects: 3,
  auditDuration: '30 min',
} as const;

// Navigation links
export const NAV_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'solucion', label: 'Solución' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'sobre-mi', label: 'Mi Historia' },
  { id: 'contacto', label: 'Contacto' },
] as const;

// Experience items for about section
export const EXPERIENCE_ITEMS = [
  {
    title: 'Visión estratégica empresarial:',
    description: 'Desde el comité de dirección, implemento mejoras operativas que el resto adopta porque funcionan',
  },
  {
    title: 'Conocimiento técnico real:',
    description: 'Implemento IA, APIs y sistemas complejos cada día en empresa real',
  },
  {
    title: 'Maestría en mejora de procesos:',
    description: 'Reestructuro operaciones que "siempre se habían hecho así" y obtengo resultados medibles',
  },
  {
    title: 'Experiencia en gestión financiera:',
    description: 'Como ex-Controller Financiero, sé exactamente dónde están los costes ocultos',
  },
] as const;

// Benefits list for contact section
export const AUDIT_BENEFITS = [
  'Cuántas horas semanales puedes liberar inmediatamente',
  'El proceso específico que te dará ROI más rápido',
  'Qué automatizaciones podrías implementar primero',
  'Si necesitas ayuda externa o puedes hacerlo internamente',
  'Los próximos pasos específicos para tu situación',
] as const;

// Animation constants
export const ANIMATION_CONFIG = {
  scrollBehavior: 'smooth' as const,
  transitionDuration: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
  },
  sparkles: {
    minSize: 0.3,
    maxSize: 1.0,
    particleDensity: 60,
    particleColor: '#ffffff',
  },
} as const;