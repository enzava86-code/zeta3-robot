const { chromium } = require('playwright');

async function testTrustIndicatorSpacing() {
    const browser = await chromium.launch({ headless: false });
    
    // Dispositivos a probar
    const devices = [
        { name: 'Desktop', width: 1280, height: 720 },
        { name: 'iPad', width: 820, height: 1180 },
        { name: 'iPhone 12', width: 390, height: 844 },
        { name: 'iPhone SE', width: 375, height: 667 }
    ];

    for (const device of devices) {
        console.log(`\n🧪 Probando ${device.name} (${device.width}x${device.height})`);
        
        const page = await browser.newPage();
        await page.setViewportSize({ width: device.width, height: device.height });
        
        try {
            await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });
            await page.waitForTimeout(2000);
            
            // Obtener medidas de todos los elementos
            const measurements = await page.evaluate(() => {
                const header = document.querySelector('.header');
                const badge = document.querySelector('.hero-badge');
                const cta = document.querySelector('.hero-primary-cta');
                const trustIndicators = document.querySelector('.hero-trust-indicators');
                const heroContainer = document.querySelector('.acme-hero-container');
                
                if (!header || !badge || !cta || !trustIndicators || !heroContainer) {
                    return null;
                }
                
                const headerRect = header.getBoundingClientRect();
                const badgeRect = badge.getBoundingClientRect();
                const ctaRect = cta.getBoundingClientRect();
                const trustRect = trustIndicators.getBoundingClientRect();
                const heroRect = heroContainer.getBoundingClientRect();
                
                return {
                    header: {
                        bottom: headerRect.bottom,
                        height: headerRect.height
                    },
                    badge: {
                        top: badgeRect.top,
                        bottom: badgeRect.bottom
                    },
                    cta: {
                        bottom: ctaRect.bottom
                    },
                    trustIndicators: {
                        top: trustRect.top,
                        bottom: trustRect.bottom
                    },
                    hero: {
                        bottom: heroRect.bottom
                    },
                    // Calcular espacios
                    spaces: {
                        headerToBadge: badgeRect.top - headerRect.bottom,
                        ctaToTrust: trustRect.top - ctaRect.bottom,
                        trustToBottom: heroRect.bottom - trustRect.bottom
                    },
                    overlaps: {
                        headerOverlapsBadge: headerRect.bottom > badgeRect.top,
                        trustBelowViewport: trustRect.bottom > window.innerHeight
                    }
                };
            });
            
            if (measurements) {
                console.log(`📏 Espacios:`);
                console.log(`   Header → Badge: ${Math.round(measurements.spaces.headerToBadge)}px`);
                console.log(`   CTA → Trust: ${Math.round(measurements.spaces.ctaToTrust)}px`);
                console.log(`   Trust → Bottom: ${Math.round(measurements.spaces.trustToBottom)}px`);
                
                console.log(`⚠️  Problemas:`);
                if (measurements.overlaps.headerOverlapsBadge) {
                    console.log(`   ❌ Header overlap badge (gap: ${Math.round(measurements.spaces.headerToBadge)}px)`);
                }
                if (measurements.overlaps.trustBelowViewport) {
                    console.log(`   ❌ Trust indicators fuera del viewport`);
                }
                if (measurements.spaces.ctaToTrust < 8) {
                    console.log(`   ⚠️  CTA-Trust muy cerca (${Math.round(measurements.spaces.ctaToTrust)}px)`);
                }
                if (measurements.spaces.trustToBottom < 20) {
                    console.log(`   ⚠️  Trust-Bottom muy cerca (${Math.round(measurements.spaces.trustToBottom)}px)`);
                }
                
                // Recomendaciones
                const idealCtaToTrust = 16; // ~1rem
                const idealTrustToBottom = 32; // ~2rem
                
                const ctaTrustDiff = measurements.spaces.ctaToTrust - idealCtaToTrust;
                const trustBottomDiff = measurements.spaces.trustToBottom - idealTrustToBottom;
                
                console.log(`💡 Recomendaciones:`);
                if (Math.abs(ctaTrustDiff) > 4) {
                    console.log(`   CTA-Trust: ${ctaTrustDiff > 0 ? 'Reducir' : 'Aumentar'} ${Math.abs(Math.round(ctaTrustDiff))}px`);
                }
                if (Math.abs(trustBottomDiff) > 8) {
                    console.log(`   Trust-Bottom: ${trustBottomDiff > 0 ? 'Reducir' : 'Aumentar'} ${Math.abs(Math.round(trustBottomDiff))}px`);
                }
            }
            
            // Capturar screenshot
            await page.screenshot({ 
                path: `trust-spacing-${device.name.toLowerCase()}.png`,
                fullPage: false
            });
            
        } catch (error) {
            console.error(`❌ Error en ${device.name}:`, error.message);
        } finally {
            await page.close();
        }
    }
    
    await browser.close();
}

testTrustIndicatorSpacing().catch(console.error);