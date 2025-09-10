'use client';

import { useCallback, useEffect, useState, memo } from 'react';
import SparklesCore from '@/components/ui/sparkles';
import { NAV_LINKS, EXPERIENCE_ITEMS, AUDIT_BENEFITS, ANIMATION_CONFIG } from '@/lib/constants';

interface ExperienceItem {
  title: string;
  description: string;
}

function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      {/* HEADER MINIMALISTA */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">
              <svg className="icon" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#5b21b6'}}/>
                    <stop offset="100%" style={{stopColor:'#7c3aed'}}/>
                  </linearGradient>
                </defs>
                <polygon points="12,3 21,19 3,19" fill="url(#logoGradient)" stroke="none"/>
              </svg>
              Zeta3
            </a>
            
            <ul className="nav-links">
              {NAV_LINKS.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contacto" 
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
            >
              Auditoría Gratuita
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION CON ESTILO ELEGANTE */}
      <section id="inicio" className="acme-hero">
        <div className="acme-hero-container">
          {/* Background Starfield */}
          <div className="absolute inset-0">
            {isClient && (
              <SparklesCore
                id="acme-starfield"
                background="transparent"
                minSize={ANIMATION_CONFIG.sparkles.minSize}
                maxSize={ANIMATION_CONFIG.sparkles.maxSize}
                particleDensity={ANIMATION_CONFIG.sparkles.particleDensity}
                className="w-full h-full absolute inset-0"
                particleColor={ANIMATION_CONFIG.sparkles.particleColor}
              />
            )}
          </div>
          
          {/* Subtle overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center h-full text-center max-w-5xl mx-auto px-8">
            
            {/* Trust Badge - visible debajo del header */}
            <div className="hero-badge mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Director de IT en activo • 40M€ facturación</span>
              </div>
            </div>
            
            {/* Main Headline - título completo con subtítulo */}
            <div className="mb-8">
              <h1 className="hero-main-title mb-2">
                Liberamos <span className="text-highlight">20+ horas semanales</span><br />
                con IA y automatización
              </h1>
              
              {/* Subtitle - parte del título principal */}
              <p className="hero-subtitle">
                (sin contratar más personal)
              </p>
            </div>
            
            {/* Elegant line - separador visual */}
            <div className="acme-line mb-12"></div>
            
            {/* Value proposition - párrafo independiente */}
            <p className="hero-description">
              Como Director de Organización & IT en una empresa de 40M€ de facturación anual,<br />
              <strong>replico estos sistemas probados</strong> en negocios que quieren crecer sin contratar más personal.
            </p>

            {/* CTA Section */}
            <div className="hero-cta-container mb-6">
              <button
                onClick={() => scrollToSection('contacto')}
                className="hero-primary-cta"
              >
                <span>Auditoría Gratuita de Procesos</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            
            {/* Trust indicators - con respiración del fondo */}
            <div className="hero-trust-indicators">
              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>30 min • Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                  <span>Máximo 3 proyectos simultáneos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS SECTION */}
      <section id="problemas" className="section section-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Si te reconoces aquí, tu empresa tiene fugas de rentabilidad.</h2>
            <p className="text-lg" style={{ color: '#475569' }}>
              Estos no son los problemas reales. Son los síntomas de un caos operativo que no puedes ver.
            </p>
          </div>

          <div className="grid grid-3 mb-16">
            <div className="card card-light text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div style={{ padding: 'var(--space-4)', borderRadius: '50%', background: '#ddd6fe', color: 'var(--accent-primary)' }}>
                    <svg className="icon-lg" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-2)' }}>Pierdes clientes</h3>
              </div>
              
              <h4 className="mb-4">Respondes cuando ya contrató a tu competencia</h4>
              <p style={{ color: '#475569' }}>
                Un lead llega el viernes, lo ves el lunes, respondes el martes. Mientras tanto, contrató a tu competencia que respondió en 10 minutos.
              </p>
            </div>

            <div className="card card-light text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div style={{ padding: 'var(--space-4)', borderRadius: '50%', background: '#e9d5ff', color: 'var(--accent-secondary)' }}>
                    <svg className="icon-lg" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10,9 9,9 8,9"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{ color: 'var(--accent-secondary)', marginBottom: 'var(--space-2)' }}>Cash flow roto</h3>
              </div>
              
              <h4 className="mb-4">Facturas cuando te acuerdas, no cuando deberías</h4>
              <p style={{ color: '#475569' }}>
                Terminas un trabajo y la factura sale 1-2 semanas después. Cash flow roto porque facturas cuando te acordás, no cuando deberías.
              </p>
            </div>

            <div className="card card-light text-center">
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <div style={{ padding: 'var(--space-4)', borderRadius: '50%', background: '#fed7aa', color: 'var(--accent-gold)' }}>
                    <svg className="icon-lg" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      <path d="M13 8H7"/>
                      <path d="M17 12H7"/>
                    </svg>
                  </div>
                </div>
                <h3 style={{ color: 'var(--accent-gold)', marginBottom: 'var(--space-2)' }}>Eres el cuello de botella</h3>
              </div>
              
              <h4 className="mb-4">Tu equipo te pregunta lo mismo 20 veces</h4>
              <p style={{ color: '#475569' }}>
                Cada empleado te interrumpe 5 veces al día con preguntas que ya respondiste. Eres el cuello de botella de tu propia empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUCION SECTION */}
      <section id="solucion" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6">No vendo software ni horas. Construyo tu &apos;empleado perfecto&apos; que trabaja 24/7</h2>
            <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
              Tu negocio ya realiza cientos de acciones cada día: enviar emails, generar facturas, contactar leads, crear informes. El problema es que las haces TÚ o tu equipo, robándote tiempo para lo que realmente mueve la aguja.
            </p>
            <p className="text-lg" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-primary)', marginBottom: 'var(--space-8)', fontWeight: '600' }}>
              Mi enfoque es simple: antes de automatizar nada, identifico cuál es LA única tarea que más haría crecer tu negocio. Después automatizo el resto para que puedas dedicar 100% de tu tiempo y energía a esa tarea crítica.
            </p>
          </div>
          
          <div className="fases-container">
            <div className="fase-card fase1">
              <div className="fase-header">
                <div className="fase-icon">1</div>
                <h3 className="fase-title">DIAGNÓSTICO ESTRATÉGICO</h3>
              </div>
              <p className="fase-description">
                Mapeo cada proceso repetitivo en tu empresa. Encuentro esos &apos;puntos ciegos&apos; que te cuestan el equivalente a varios salarios al año.
              </p>
            </div>
            
            <div className="arrow-connector">
              <div className="arrow">→</div>
            </div>
            
            <div className="fase-card fase2">
              <div className="fase-header">
                <div className="fase-icon">2</div>
                <h3 className="fase-title">AUTOMATIZACIÓN CON IA</h3>
              </div>
              <p className="fase-description">
                Construyo e implemento los sistemas que conectan todo usando IA y automatización para crear una operación que trabaje 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO SECTION */}
      <section id="proceso" className="section section-light proceso">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Tu hoja de ruta hacia la autonomía operativa.</h2>
          </div>

          <div className="timeline-container">
            {/* FASE 1 */}
            <div className="fase-section fase1">
              <div className="fase-section-header">
                <div className="fase-badge">Fase 1: Diagnóstico Estratégico</div>
              </div>
              
              <div className="pasos-grid">
                <div className="card card-light text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="paso-number">1</div>
                    </div>
                    <h3 className="mb-4">Mapa de Fugas de Rentabilidad</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>(30 min - Gratis)</p>
                  </div>
                  
                  <div className="paso-result">
                    <strong>Proceso:</strong> Identifico LA única tarea que más haría crecer tu negocio y mapeo qué procesos te roban tiempo para hacerla.<br /><br />
                    <strong>Resultado:</strong> Los 3 procesos que más te cuestan + estimación de horas recuperables
                  </div>
                </div>

                <div className="card card-light text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="paso-number">2</div>
                    </div>
                    <h3 className="mb-4">Ingeniería de Procesos</h3>
                  </div>
                  
                  <div className="paso-result">
                    <strong>Resultado:</strong> Diseño técnico de cada automatización con ROI proyectado
                  </div>
                </div>
              </div>
            </div>

            {/* FASE 2 */}
            <div className="fase-section fase2">
              <div className="fase-section-header">
                <div className="fase-badge">Fase 2: Automatización con IA</div>
              </div>
              
              <div className="pasos-grid">
                <div className="card card-light text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="paso-number">3</div>
                    </div>
                    <h3 className="mb-4">Construcción de Sistema Nervioso</h3>
                  </div>
                  
                  <div className="paso-result">
                    <strong>Resultado:</strong> Automatizaciones funcionando que ahorran 20+ horas semanales
                  </div>
                </div>

                <div className="card card-light text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="paso-number">4</div>
                    </div>
                    <h3 className="mb-4">Integración y Entrenamiento</h3>
                  </div>
                  
                  <div className="paso-result">
                    <strong>Resultado:</strong> Tu equipo dominando los nuevos sistemas sin resistencia al cambio
                  </div>
                </div>

                <div className="card card-light text-center">
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="paso-number">5</div>
                    </div>
                    <h3 className="mb-4">Optimización Continua</h3>
                  </div>
                  
                  <div className="paso-result">
                    <strong>Resultado:</strong> Métricas de rendimiento y nuevas automatizaciones identificadas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ SECTION */}
      <section id="sobre-mi" className="section">
        <div className="container">
          <div className="sobre-mi-grid">
            <div className="sobre-mi-left">
              <h2 className="mb-6">Mi laboratorio es una empresa de 40M€. Tú te quedas con los resultados probados.</h2>
              
              <div className="main-content">
                <p>
                  <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>Director de Organización e IT</strong> en empresa de 40M€. Combino estrategia empresarial con transformación digital: reestructuro procesos, gestiono equipos, implemento tecnología y automatizo operaciones. Desde el comité de dirección, aplico mejora continua en ambos frentes - organizacional y tecnológico.
                </p>
                
                <p>
                  Ejemplo concreto: con una automatización de facturas usando IA, 2 personas de administración se liberaron completamente (80h semanales), 1 persona redujo su dedicación del 80% al 70%, y 15 jefes de obra pasaron de 10h semanales en tareas administrativas a solo 3h. <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>Total: 189 horas semanales liberadas</strong> con una sola implementación.
                </p>
                
                <p>
                  La diferencia: no tienes que explicarme cómo funciona un negocio real. Vivo estos problemas cada día - cuando los procesos fallan, cuando el equipo no sabe qué hacer, cuando tu tiempo se va en <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>apagar fuegos en lugar de hacer crecer</strong> la empresa.
                </p>
                
                <p className="mb-8">
                  Por eso no necesitas convencerme. Veo tu problema, entiendo qué se puede arreglar y sé cómo hacerlo. <strong style={{ color: 'var(--text-primary)', fontWeight: '700' }}>Te replico lo que funciona</strong> en mi empresa cada día.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="btn btn-primary"
                  style={{ padding: 'var(--space-3) var(--space-6)', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  Hablemos de tu proyecto
                </button>
              </div>
            </div>

            <div className="sobre-mi-right">
              <div className="photo-container">
                <div className="photo-placeholder">
                  [Tu foto aquí]
                </div>
              </div>
              
              <div className="experience-card">
                <h4 className="mb-6">Mi experiencia se traduce en esto para ti:</h4>
                
                <div className="mb-6">
                  {EXPERIENCE_ITEMS.map((exp, index) => (
                    <div key={index} className="flex items-start gap-4 mb-6">
                      <div style={{
                        width: '1.2rem',
                        height: '1.2rem',
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '0.2rem',
                        flexShrink: 0,
                        boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)'
                      }}>
                        <svg style={{ width: '0.7rem', height: '0.7rem', color: 'white' }} viewBox="0 0 24 24" fill="none">
                          <polyline points="20,6 9,17 4,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p style={{ color: 'var(--text-secondary)' }}><strong>{exp.title}</strong></p>
                        <p style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="section section-light" style={{ paddingTop: 'calc(61px + var(--space-16))' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-16)' }}>
            <div className="card card-light">
              <div style={{ width: '100%', minHeight: '450px', position: 'relative', overflow: 'hidden' }}>
                <iframe
                  src="https://link.apisystem.tech/widget/form/3I4sPFRNXatz6LGwtDry"
                  style={{ width: '100%', height: '450px', border: 'none', borderRadius: '8px', marginTop: '-30px' }}
                  id="inline-3I4sPFRNXatz6LGwtDry" 
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Formulario Zeta3"
                  data-height="432"
                  data-layout-iframe-id="inline-3I4sPFRNXatz6LGwtDry"
                  data-form-id="3I4sPFRNXatz6LGwtDry"
                  title="Formulario Zeta3"
                />
              </div>
            </div>
            
            <div>
              <h3 className="mb-8">En 30 minutos sabrás exactamente:</h3>
              
              <div className="mb-8">
                {AUDIT_BENEFITS.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 mb-4">
                    <svg className="icon" style={{ color: '#10b981', marginTop: '0.125rem' }} viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="card card-light mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="icon" style={{ color: 'var(--accent-primary)' }} viewBox="0 0 24 24">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                  <span style={{ fontWeight: '600' }}>Trabajo con máximo 3 proyectos simultáneamente</span>
                </div>
                <p style={{ color: '#475569', fontSize: '0.875rem' }}>
                  Para garantizar la máxima atención y resultados excepcionales
                </p>
              </div>

              <div className="card card-light mb-8" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', border: '2px solid #f59e0b' }}>
                <div className="text-center">
                  <h4 style={{ color: '#92400e', marginBottom: 'var(--space-2)', fontWeight: '700' }}>Mi Compromiso</h4>
                  <p style={{ color: '#92400e', fontWeight: '600', fontSize: '1rem' }}>
                    Si no veo potencial real de liberar 20+ horas semanales en tu negocio, te lo digo honestamente en la auditoría gratuita. No pierdes tiempo ni dinero en algo que no va a funcionar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: 'var(--bg-secondary)', padding: 'var(--space-8) 0 var(--space-8) 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: 'var(--space-16)', marginBottom: 'var(--space-12)' }}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <svg className="icon-lg text-gradient" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#5b21b6'}}/>
                      <stop offset="100%" style={{stopColor:'#7c3aed'}}/>
                    </linearGradient>
                  </defs>
                  <polygon points="12,3 21,19 3,19" fill="url(#logoGradientFooter)" stroke="none"/>
                </svg>
                <span className="text-gradient" style={{ fontWeight: '700', fontSize: '1.5rem' }}>Zeta3</span>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Director de IT en activo que aplica estrategias probadas en gran empresa para transformar operaciones en PYMEs.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">Contacto</h4>
              <div className="flex items-center gap-3 mb-2">
                <svg className="icon" style={{ color: 'var(--text-muted)' }} viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span style={{ color: 'var(--text-secondary)' }}>contacto@zeta3.es</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="icon" style={{ color: 'var(--text-muted)' }} viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ color: 'var(--text-secondary)' }}>Valencia, España</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--space-6)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)' }}>
              © 2024 Zeta3 Consultoría. Director de IT que automatiza empresas como la tuya.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default memo(Home);