# 🚀 Quick Start Guide - Neeraali Website

## Instant Setup (Windows)

1. **Run the setup script**
   ```bash
   setup.bat
   ```

2. **Start development**
   ```bash
   ng serve
   ```

3. **Open browser**
   Go to `http://localhost:4200`

## Manual Setup

1. **Install dependencies**
   ```bash
   npm install
   npm install -g @angular/cli@latest
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Start development server**
   ```bash
   ng serve
   ```

## 📁 Key Files to Customize

### Content & Branding
- `src/app/components/hero/hero.component.ts` - Main headline and messaging
- `src/app/components/services/services.component.ts` - Service offerings
- `src/app/components/about/about.component.ts` - Company information
- `src/app/components/contact/contact.component.ts` - Contact details

### Styling & Design
- `tailwind.config.js` - Colors and design tokens
- `src/styles.scss` - Global styles and animations
- Component templates - Individual section styling

### Configuration
- `src/index.html` - Meta tags and SEO
- `package.json` - Dependencies and scripts

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color'
  }
}
```

### Update Content
Each component has its content in the TypeScript file. Look for:
- `title`, `description` properties
- Array data for services, testimonials, etc.
- Contact information

### Add New Sections
1. Create new component: `ng generate component components/new-section`
2. Add to `app.component.ts` imports and template
3. Style with Tailwind CSS classes

## 🚀 Deployment Ready

The website is production-ready with:
- ✅ SEO optimization
- ✅ Mobile responsiveness  
- ✅ Performance optimization
- ✅ Accessibility compliance
- ✅ Modern animations

## 📞 Need Help?

Check the full README.md for detailed documentation and troubleshooting.