# Claude Code Instructions for Zeta3 Robot Project

## Project Overview
This is a professional landing page for **Zeta3**, an AI and automation consulting company that helps businesses save 20+ hours per week through intelligent process automation. Built with Next.js 15, TypeScript, and modern web technologies.

## 🎯 Project Goals
- **Primary**: Convert visitors into consultation leads
- **Secondary**: Demonstrate technical expertise and credibility
- **Target**: Spanish-speaking business owners looking to automate operations

## 🏗️ Architecture & Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animation**: Framer Motion + tsparticles
- **Deployment**: Vercel-ready

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles + responsive design
├── components/
│   └── ui/
│       └── sparkles.tsx    # Interactive particle system
└── lib/
    ├── constants.ts        # Configuration constants
    └── utils.ts            # Utility functions (cn helper)
```

## 🛠️ Development Guidelines

### Code Quality Standards
```bash
# Always run before completing tasks:
npm run lint        # ESLint validation
npm run build       # Production build test
```

### Performance Optimizations Applied
- **React.memo**: All components memoized to prevent unnecessary re-renders
- **useCallback**: Event handlers memoized
- **useMemo**: Heavy computations (particle config) memoized
- **Code splitting**: Dynamic imports where appropriate
- **Image optimization**: Next.js Image component

### TypeScript Best Practices
- Strict mode enabled
- Proper interface definitions
- `as const` assertions for string literals
- No `any` types allowed
- Comprehensive type coverage

## 🎨 Design System

### CSS Variables (globals.css)
```css
:root {
  /* Colors */
  --bg-primary: #0d0d0d;
  --text-primary: #ffffff;
  --accent-primary: #5b21b6;
  
  /* Spacing */
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%);
}
```

### Responsive Breakpoints
- **Desktop**: Default (1200px max-width)
- **Large Tablet**: ≤1024px
- **Small Tablet**: ≤768px
- **Phone**: ≤480px
- **Small Phone**: ≤375px
- **Mini Phone**: ≤320px

### Component Patterns
- Mobile-first responsive design
- Dark theme with purple accents
- Glass morphism effects
- Smooth scroll navigation
- Interactive particle backgrounds

## 📝 Content Strategy

### Messaging Hierarchy
1. **Hero**: Value proposition (20+ hours saved)
2. **Problems**: Pain points (lost clients, broken cash flow, bottlenecks)
3. **Solution**: AI automation approach
4. **Process**: Clear 5-step methodology
5. **Credibility**: Real experience (40M€ company)
6. **CTA**: Free 30-minute audit

### Key Conversion Elements
- Trust indicators (company revenue, experience)
- Social proof (current role as IT Director)
- Risk reduction (free audit, limited availability)
- Urgency (max 3 simultaneous projects)

## 🚀 Optimization Tasks

### Priority 1: Performance
```bash
# Commands to run:
npm run build          # Check bundle size
npm run lint          # Code quality
```

**Target Metrics**:
- First Load JS: <200KB ✅ (Currently 196KB)
- Lighthouse Score: 90+ (all categories)
- Core Web Vitals: Green across all metrics

### Priority 2: SEO Optimization
```typescript
// Update metadata in layout.tsx
export const metadata: Metadata = {
  title: 'Zeta3 - Consultoría IA y Automatización | Libera 20+ horas semanales',
  description: 'Liberamos 20+ horas semanales con IA y automatización sin contratar más personal. Director de IT en empresa de 40M€ replicas sistemas probados.',
  keywords: 'IA, automatización, consultoría, procesos, ahorro tiempo, productividad',
  openGraph: {
    title: 'Zeta3 - Automatización con IA para Empresas',
    description: 'Liberamos 20+ horas semanales con IA y automatización',
    url: 'https://zeta3.es',
    siteName: 'Zeta3',
    locale: 'es_ES',
    type: 'website',
  }
}
```

### Priority 3: Conversion Optimization
- **A/B Test**: Hero CTA button text
- **Analytics**: Add Google Analytics/Mixpanel
- **Forms**: Optimize contact form UX
- **Loading**: Add skeleton loaders

## 🔧 Claude Code Commands

### Development Workflow
```bash
# Start development
npm run dev

# Quality checks
npm run lint
npm run build

# Deploy
npx vercel --prod
```

### When Making Changes
1. **Read** existing code first to understand patterns
2. **Follow** established conventions (constants.ts, TypeScript interfaces)
3. **Test** responsive design on all breakpoints
4. **Validate** with ESLint and build process
5. **Maintain** performance optimizations

### File Modification Priorities
1. **High Impact**: `src/app/page.tsx` (main content)
2. **Medium Impact**: `src/app/globals.css` (styling)
3. **Low Impact**: `src/lib/constants.ts` (configuration)

## 📊 Analytics & Monitoring

### Key Metrics to Track
- **Conversion Rate**: Contact form submissions
- **Engagement**: Scroll depth, time on page
- **Performance**: Core Web Vitals, page load speed
- **Traffic Sources**: Direct, referral, search

### Success Indicators
- Contact form completion rate: >5%
- Average session duration: >2 minutes
- Bounce rate: <60%
- Mobile performance score: >90

## 🎯 Business Context

### Target Audience
- **Primary**: Spanish business owners (30-55 years)
- **Company Size**: 10-100 employees
- **Revenue**: €1M-€20M annually
- **Pain Points**: Manual processes, time management, scaling issues

### Competitive Advantages
1. **Real Experience**: Active IT Director in 40M€ company
2. **Proven Results**: 189 hours saved in one implementation
3. **Strategic Approach**: Focus on identifying THE critical task first
4. **Limited Availability**: Exclusivity (max 3 projects)

## 🚀 Future Enhancements

### Phase 1: Foundation (Current)
- ✅ Responsive landing page
- ✅ Performance optimization
- ✅ Clean code architecture

### Phase 2: Conversion (Next)
- [ ] A/B testing framework
- [ ] Analytics implementation
- [ ] Form optimization
- [ ] Case studies section

### Phase 3: Scale (Future)
- [ ] Blog/content system
- [ ] Client portal
- [ ] Automated lead nurturing
- [ ] Multi-language support

## 📋 Common Tasks

### Adding New Sections
1. Add content to `constants.ts`
2. Create component in `page.tsx`
3. Add responsive styles in `globals.css`
4. Update navigation in `NAV_LINKS`

### Performance Improvements
1. Use `useCallback` for event handlers
2. Add `memo` to components
3. Optimize images with Next.js Image
4. Minimize bundle size

### Content Updates
1. Modify `constants.ts` for data changes
2. Update `page.tsx` for structure changes
3. Adjust `globals.css` for styling updates

## ⚠️ Important Notes

### Never Change
- Mobile-first responsive approach
- Performance optimizations (memo, useCallback)
- TypeScript strict mode
- Component architecture patterns

### Always Maintain
- Spanish language consistency
- Professional tone
- Trust indicators
- Clear value proposition
- Conversion-focused design

---

**Last Updated**: September 2024
**Repository**: https://github.com/enzava86-code/zeta3-robot
**Live Demo**: [Add deployment URL when available]