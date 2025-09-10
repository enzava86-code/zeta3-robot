const { chromium } = require('playwright');

async function testResponsiveDesign() {
    const browser = await chromium.launch({ headless: false });
    
    // Dispositivos a probar
    const devices = [
        { name: 'iPhone SE', width: 375, height: 667 },
        { name: 'iPhone 12', width: 390, height: 844 },
        { name: 'iPhone 13 Pro', width: 390, height: 844 },
        { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
        { name: 'iPad Mini', width: 768, height: 1024 },
        { name: 'iPad', width: 820, height: 1180 },
        { name: 'iPad Pro', width: 1024, height: 1366 },
        { name: 'Desktop Small', width: 1280, height: 720 }
    ];

    const results = [];

    for (const device of devices) {
        console.log(`\n🧪 Probando ${device.name} (${device.width}x${device.height})`);
        
        const page = await browser.newPage();
        await page.setViewportSize({ width: device.width, height: device.height });
        
        try {
            // Navegar a la página
            await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });
            await page.waitForTimeout(2000);
            
            // Verificar que el header existe
            const header = await page.$('.header');
            if (!header) {
                results.push(`❌ ${device.name}: Header no encontrado`);
                continue;
            }
            
            // Obtener altura del header
            const headerHeight = await page.evaluate(() => {
                const header = document.querySelector('.header');
                return header ? header.getBoundingClientRect().height : 0;
            });
            
            // Verificar que el hero badge es visible y no está tapado
            const badgeVisible = await page.evaluate((headerHeight) => {
                const badge = document.querySelector('.hero-badge');
                if (!badge) return false;
                
                const badgeRect = badge.getBoundingClientRect();
                // El badge debería estar completamente debajo del header
                return badgeRect.top >= headerHeight;
            }, headerHeight);
            
            // Verificar que el título principal es visible
            const titleVisible = await page.evaluate((headerHeight) => {
                const title = document.querySelector('.hero-main-title');
                if (!title) return false;
                
                const titleRect = title.getBoundingClientRect();
                return titleRect.top >= headerHeight;
            }, headerHeight);
            
            // Verificar que el botón CTA es visible
            const ctaVisible = await page.evaluate((headerHeight) => {
                const cta = document.querySelector('.hero-primary-cta');
                if (!cta) return false;
                
                const ctaRect = cta.getBoundingClientRect();
                return ctaRect.top >= headerHeight && ctaRect.bottom <= window.innerHeight;
            }, headerHeight);
            
            // Verificar que los trust indicators son visibles
            const trustVisible = await page.evaluate((headerHeight) => {
                const trust = document.querySelector('.hero-trust-indicators');
                if (!trust) return false;
                
                const trustRect = trust.getBoundingClientRect();
                return trustRect.top >= headerHeight;
            }, headerHeight);
            
            // Capturar screenshot
            await page.screenshot({ 
                path: `screenshot-${device.name.toLowerCase().replace(' ', '-')}.png`,
                fullPage: false
            });
            
            const status = badgeVisible && titleVisible && ctaVisible && trustVisible ? '✅' : '❌';
            const issues = [];
            if (!badgeVisible) issues.push('Badge tapado');
            if (!titleVisible) issues.push('Título tapado');
            if (!ctaVisible) issues.push('CTA no visible');
            if (!trustVisible) issues.push('Trust indicators tapados');
            
            results.push(`${status} ${device.name} (h:${Math.round(headerHeight)}px): ${issues.length ? issues.join(', ') : 'OK'}`);
            
        } catch (error) {
            results.push(`❌ ${device.name}: Error - ${error.message}`);
        } finally {
            await page.close();
        }
    }
    
    await browser.close();
    
    console.log('\n📊 RESULTADOS FINALES:');
    results.forEach(result => console.log(result));
    
    const passed = results.filter(r => r.startsWith('✅')).length;
    const total = results.length;
    
    console.log(`\n🎯 RESUMEN: ${passed}/${total} dispositivos OK`);
    
    return { passed, total, results };
}

// Ejecutar las pruebas
testResponsiveDesign().catch(console.error);