# Neeraali - Premium Digital Marketing Agency Website

A modern, professional, and iconic website for **Neeraali**, a premium digital marketing agency that specializes in crafting digital experiences that elevate brand presence across multiple platforms.

## 🚀 Features

- **Modern Design**: Latest UI/UX trends with glassmorphism and gradient effects
- **Responsive**: Mobile-first approach with full responsiveness
- **Animations**: Smooth transitions and micro-animations throughout
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Technology Stack

- **Framework**: Angular 17+ (Standalone Components)
- **Styling**: Tailwind CSS
- **Icons**: Google Material Icons
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Angular CLI

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v17 or higher)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neeraali-0.1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Angular CLI globally (if not already installed)**
   ```bash
   npm install -g @angular/cli@latest
   ```

4. **Install Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

## 🚀 Development

1. **Start the development server**
   ```bash
   ng serve
   ```
   or
   ```bash
   npm start
   ```

2. **Open your browser**
   Navigate to `http://localhost:4200/`

3. **Live reload**
   The application will automatically reload when you make changes to the source files.

## 🏗️ Build

1. **Production build**
   ```bash
   ng build --configuration production
   ```

2. **Build output**
   The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section
│   │   ├── services/        # Services showcase
│   │   ├── about/           # About company
│   │   ├── portfolio/       # Portfolio & testimonials
│   │   ├── process/         # Work process
│   │   ├── contact/         # Contact form
│   │   └── footer/          # Footer section
│   └── app.component.ts     # Main app component
├── assets/                  # Static assets
├── styles.scss             # Global styles
└── index.html              # Main HTML file
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6, #2563eb, #1d4ed8)
- **Accent**: Orange (#f59e0b, #d97706)
- **Neutral**: Grays for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (48px+ for hero)
- **Body**: 16px-18px for readability

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Rounded corners with shadows
- **Forms**: Clean, accessible inputs
- **Animations**: Fade-in, slide-up, float effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators

## 🚀 Deployment

### Netlify
1. Build the project: `ng build --configuration production`
2. Deploy the `dist/neeraali-website` folder to Netlify

### Vercel
1. Connect your repository to Vercel
2. Set build command: `ng build --configuration production`
3. Set output directory: `dist/neeraali-website`

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Build and deploy: `ng build --configuration production && firebase deploy`

## 📊 Performance Optimization

- Lazy loading for routes
- OnPush change detection strategy
- Optimized images and assets
- Minified CSS and JavaScript
- Service worker for caching

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ }
    }
  }
}
```

### Content
Update component templates and TypeScript files to modify:
- Company information
- Service offerings
- Portfolio projects
- Contact details

### Animations
Modify animation classes in `styles.scss` or add new ones:
```scss
.custom-animation {
  /* your animation styles */
}
```

## 📞 Support

For support and questions:
- Email: hello@neeraali.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ by the Neeraali Team**