const { chromium } = require('playwright');

async function debugCSS() {
    const browser = await chromium.launch({ headless: false });
    
    // Probar con iPhone SE como ejemplo
    const device = { name: 'iPhone SE', width: 375, height: 667 };
    console.log(`🔍 Depurando CSS en ${device.name} (${device.width}x${device.height})`);
    
    const page = await browser.newPage();
    await page.setViewportSize({ width: device.width, height: device.height });
    
    try {
        await page.goto('http://localhost:3002', { waitUntil: 'networkidle' });
        await page.waitForTimeout(3000);
        
        // Obtener información detallada del header
        const headerInfo = await page.evaluate(() => {
            const header = document.querySelector('.header');
            if (!header) return null;
            
            const computedStyle = window.getComputedStyle(header);
            const rect = header.getBoundingClientRect();
            
            return {
                height: rect.height,
                minHeight: computedStyle.minHeight,
                padding: computedStyle.padding,
                paddingTop: computedStyle.paddingTop,
                paddingBottom: computedStyle.paddingBottom,
                position: computedStyle.position,
                top: computedStyle.top,
                zIndex: computedStyle.zIndex
            };
        });
        
        console.log('📏 Header Info:', headerInfo);
        
        // Obtener información del hero
        const heroInfo = await page.evaluate(() => {
            const hero = document.querySelector('.acme-hero-container .relative');
            if (!hero) return null;
            
            const computedStyle = window.getComputedStyle(hero);
            const rect = hero.getBoundingClientRect();
            
            return {
                paddingTop: computedStyle.paddingTop,
                paddingBottom: computedStyle.paddingBottom,
                top: rect.top,
                height: rect.height
            };
        });
        
        console.log('🎯 Hero Info:', heroInfo);
        
        // Obtener información del badge
        const badgeInfo = await page.evaluate(() => {
            const badge = document.querySelector('.hero-badge');
            if (!badge) return null;
            
            const rect = badge.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(badge);
            
            return {
                top: rect.top,
                bottom: rect.bottom,
                marginBottom: computedStyle.marginBottom,
                visible: rect.top >= 0 && rect.bottom <= window.innerHeight
            };
        });
        
        console.log('🏷️ Badge Info:', badgeInfo);
        
        // Verificar qué reglas CSS se están aplicando realmente
        const appliedRules = await page.evaluate(() => {
            const width = window.innerWidth;
            const mediaQueries = [];
            
            // Simular las media queries que deberían aplicarse
            if (width <= 320) mediaQueries.push('320px');
            else if (width <= 480) mediaQueries.push('480px');
            else if (width <= 768) mediaQueries.push('768px');
            else if (width <= 1024) mediaQueries.push('1024px');
            else mediaQueries.push('desktop');
            
            return {
                viewportWidth: width,
                viewportHeight: window.innerHeight,
                expectedMediaQueries: mediaQueries
            };
        });
        
        console.log('📐 Applied Rules:', appliedRules);
        
        // Verificar superposición
        const overlap = await page.evaluate(() => {
            const header = document.querySelector('.header');
            const badge = document.querySelector('.hero-badge');
            
            if (!header || !badge) return null;
            
            const headerRect = header.getBoundingClientRect();
            const badgeRect = badge.getBoundingClientRect();
            
            return {
                headerBottom: headerRect.bottom,
                badgeTop: badgeRect.top,
                overlapping: headerRect.bottom > badgeRect.top,
                gap: badgeRect.top - headerRect.bottom
            };
        });
        
        console.log('⚠️ Overlap Check:', overlap);
        
        // Capturar screenshot para análisis visual
        await page.screenshot({ 
            path: `debug-${device.name.toLowerCase().replace(' ', '-')}.png`,
            fullPage: false
        });
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await page.close();
    }
    
    await browser.close();
}

debugCSS().catch(console.error);