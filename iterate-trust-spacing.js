const { chromium } = require('playwright');
const fs = require('fs');

async function iterateTrustSpacing() {
    const browser = await chromium.launch({ headless: false });
    
    // Valores a probar (en px)
    const translateValues = [-16, -12, -10, -8, -6, -4];
    const cssFilePath = '/Users/enriczaragozavalero/01-PROYECTOS/IA-Development/Webs/zeta3-robot/src/app/globals.css';
    
    console.log('🔄 Iterando valores de translateY para trust indicators...\n');
    
    for (const value of translateValues) {
        console.log(`\n🧪 Probando translateY(${value}px)...`);
        
        try {
            // Leer el archivo CSS
            let cssContent = fs.readFileSync(cssFilePath, 'utf8');
            
            // Reemplazar el valor de translateY
            cssContent = cssContent.replace(
                /transform: translateY\(-?\d+px\);/,
                `transform: translateY(${value}px);`
            );
            
            // Escribir el archivo
            fs.writeFileSync(cssFilePath, cssContent);
            
            const page = await browser.newPage();
            await page.setViewportSize({ width: 1280, height: 720 });
            
            await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });
            await page.waitForTimeout(1500);
            
            // Medir espacios
            const measurements = await page.evaluate(() => {
                const cta = document.querySelector('.hero-primary-cta');
                const trustIndicators = document.querySelector('.hero-trust-indicators');
                const heroContainer = document.querySelector('.acme-hero-container');
                
                if (!cta || !trustIndicators || !heroContainer) return null;
                
                const ctaRect = cta.getBoundingClientRect();
                const trustRect = trustIndicators.getBoundingClientRect();
                const heroRect = heroContainer.getBoundingClientRect();
                
                return {
                    ctaToTrust: trustRect.top - ctaRect.bottom,
                    trustToBottom: heroRect.bottom - trustRect.bottom,
                    ctaBottom: ctaRect.bottom,
                    trustTop: trustRect.top,
                    trustBottom: trustRect.bottom
                };
            });
            
            if (measurements) {
                console.log(`   CTA → Trust: ${Math.round(measurements.ctaToTrust)}px`);
                console.log(`   Trust → Bottom: ${Math.round(measurements.trustToBottom)}px`);
                console.log(`   CTA bottom: ${Math.round(measurements.ctaBottom)}px`);
                console.log(`   Trust top: ${Math.round(measurements.trustTop)}px`);
                
                // Evaluar si este valor es bueno
                const ctaTrustIdeal = measurements.ctaToTrust >= 12 && measurements.ctaToTrust <= 20;
                const trustBottomIdeal = measurements.trustToBottom >= 20 && measurements.trustToBottom <= 40;
                
                if (ctaTrustIdeal && trustBottomIdeal) {
                    console.log(`   ✅ IDEAL - CTA-Trust: ${Math.round(measurements.ctaToTrust)}px, Trust-Bottom: ${Math.round(measurements.trustToBottom)}px`);
                } else if (ctaTrustIdeal) {
                    console.log(`   ⚠️  PARCIAL - Solo CTA-Trust está bien`);
                } else {
                    console.log(`   ❌ NO IDEAL`);
                }
            }
            
            await page.close();
            
        } catch (error) {
            console.error(`❌ Error con translateY(${value}px):`, error.message);
        }
    }
    
    await browser.close();
    
    console.log(`\n💡 Revisa los resultados y elige el valor translateY() que mejor se adapte.`);
    console.log(`   El archivo CSS mantiene el último valor probado: translateY(${translateValues[translateValues.length - 1]}px)`);
}

iterateTrustSpacing().catch(console.error);