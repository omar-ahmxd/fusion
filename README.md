# Fusion Print & Design - Premium Dark Theme Website

A stunning, dark-themed professional website for Fusion Print & Design featuring premium animations, split-path design, and enterprise-level functionality.

## 🚀 Features

### Design & Theme
- **Dark Premium Aesthetic**: Deep blacks with vibrant accent colors
- **Two-Path Homepage**: Innovative split design for Printing vs Design services
- **Glass-morphism Effects**: Modern UI with backdrop blur and transparency
- **Gradient Accents**: Primary blue to cyan gradients throughout

### Advanced Animations
- **Framer Motion**: Smooth page transitions and micro-interactions
- **React Spring**: Physics-based animations for natural movement
- **GSAP Integration**: Complex scroll-triggered animations
- **AOS (Animate On Scroll)**: Reveal animations on scroll
- **Typed.js**: Dynamic text animations
- **3D Mouse Effects**: Interactive card movements

### Key Pages
1. **Home**: Split-path hero with service selection
2. **Services Hub**: Overview of all services
3. **Printing Services**: Detailed printing capabilities with interactive cards
4. **Design Services**: Creative services with process visualization
5. **Portfolio**: Filterable gallery with lightbox views
6. **About**: Company story with timeline and stats
7. **Contact**: Multi-step quote builder with instant estimates

### Technical Features
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for responsive styling
- **React Router** for navigation
- **CountUp** for animated statistics
- **Intersection Observer** for performance

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Glass-morphism navigation
│   ├── Hero.tsx           # Two-path split hero
│   ├── Footer.tsx         # Dark theme footer
│   ├── PageTransition.tsx # Smooth page transitions
│   └── Preloader.tsx      # Loading animation
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── PrintingServices.tsx
│   ├── DesignServices.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── animations/
│   └── variants.ts        # Framer Motion animations
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useMouseAnimation.ts
└── App.tsx
```

## 🎨 Color System

- **Deep Black**: #0a0a0a (backgrounds)
- **Rich Charcoal**: #1a1a1a (cards)
- **Electric Blue**: #0066ff (primary CTAs)
- **Neon Cyan**: #00d4ff (accents)
- **Gold**: #ffd700 (premium indicators)

## 📱 Responsive Design

- Mobile-first approach
- Touch-optimized interactions
- Smooth mobile menu with animations
- Optimized performance on all devices

## 🚀 Performance

- Code splitting by routes
- Lazy loading for images
- Hardware-accelerated animations
- Optimized bundle size
- Progressive enhancement

## 🔧 Customization

### Update Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  dark: {
    base: '#0a0a0a',
    card: '#1a1a1a',
    // ...
  }
}
```

### Modify Animations
Edit `src/animations/variants.ts` for animation presets

### Add New Pages
1. Create component in `src/pages/`
2. Add route in `App.tsx`
3. Update navigation in `Header.tsx`

## 📄 License

This project is created for Fusion Print & Design. All rights reserved.

## 🌟 Key Highlights

- **Premium Feel**: Luxury tech company aesthetic
- **User Experience**: Intuitive navigation and interactions
- **Performance**: 60fps animations and fast load times
- **SEO Ready**: Proper meta tags and semantic HTML
- **Conversion Focused**: Multiple CTAs and quote builder
- **Professional**: Enterprise-level appearance and functionality

---

Built with ❤️ using React, TypeScript, and modern web technologies.