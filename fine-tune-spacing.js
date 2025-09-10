const { chromium } = require('playwright');
const fs = require('fs');

async function fineTuneSpacing() {
    const browser = await chromium.launch({ headless: false });
    
    // Valores más finos a probar (en px) 
    const translateValues = [-12, -10, -8, -6, -4, -3, -2];
    const cssFilePath = '/Users/enriczaragozavalero/01-PROYECTOS/IA-Development/Webs/zeta3-robot/src/app/globals.css';
    
    console.log('🔄 Ajuste fino de translateY para trust indicators...\n');
    
    for (const value of translateValues) {
        console.log(`\n🧪 Probando translateY(${value}px)...`);
        
        try {
            // Leer el archivo CSS
            let cssContent = fs.readFileSync(cssFilePath, 'utf8');
            
            // Reemplazar el valor de translateY - buscar la línea específica de trust indicators
            cssContent = cssContent.replace(
                /(\.hero-trust-indicators \{[\s\S]*?)transform: translateY\(-?\d+px\);/,
                `$1transform: translateY(${value}px);`
            );
            
            // Escribir el archivo
            fs.writeFileSync(cssFilePath, cssContent);
            
            const page = await browser.newPage();
            await page.setViewportSize({ width: 1280, height: 720 });
            
            await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });
            await page.waitForTimeout(1000);
            
            // Medir espacios visualmente
            const measurements = await page.evaluate(() => {
                const cta = document.querySelector('.hero-primary-cta');
                const trustIndicators = document.querySelector('.hero-trust-indicators');
                const heroSection = document.querySelector('#inicio');
                
                if (!cta || !trustIndicators || !heroSection) return null;
                
                const ctaRect = cta.getBoundingClientRect();
                const trustRect = trustIndicators.getBoundingClientRect();
                const heroRect = heroSection.getBoundingClientRect();
                
                return {
                    // Medidas visuales (lo que realmente ve el usuario)
                    visualGapCtaToTrust: trustRect.top - ctaRect.bottom,
                    visualGapTrustToBottom: heroRect.bottom - trustRect.bottom,
                    ctaBottom: Math.round(ctaRect.bottom),
                    trustTop: Math.round(trustRect.top),
                    trustBottom: Math.round(trustRect.bottom),
                    heroBottom: Math.round(heroRect.bottom)
                };
            });
            
            if (measurements) {
                const visualCtaTrust = measurements.visualGapCtaToTrust;
                const visualTrustBottom = measurements.visualGapTrustToBottom;
                
                console.log(`   📐 Visual CTA → Trust: ${Math.round(visualCtaTrust)}px`);
                console.log(`   📐 Visual Trust → Bottom: ${Math.round(visualTrustBottom)}px`);
                
                // Criterios de evaluación visual
                const goodCtaGap = visualCtaTrust >= 8 && visualCtaTrust <= 16; // Ideal: 12px
                const goodBottomGap = visualTrustBottom >= 24 && visualTrustBottom <= 48; // Ideal: 32px
                
                let status = "❌ NO";
                if (goodCtaGap && goodBottomGap) {
                    status = "✅ PERFECTO";
                } else if (goodCtaGap) {
                    status = "⚠️  CTA-GAP OK";
                } else if (goodBottomGap) {
                    status = "⚠️  BOTTOM-GAP OK";
                }
                
                console.log(`   ${status} - translateY(${value}px)`);
            }
            
            await page.close();
            
        } catch (error) {
            console.error(`❌ Error con translateY(${value}px):`, error.message);
        }
        
        // Pausa para que puedas ver el resultado
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    await browser.close();
    console.log(`\n🎯 Proceso completado. El CSS mantiene el último valor: translateY(${translateValues[translateValues.length - 1]}px)`);
}

fineTuneSpacing().catch(console.error);