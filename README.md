# Laiba — Digital Service Provider Portfolio

A modern, dark-themed professional portfolio website for Laiba, a digital service provider specializing in web development, Meta ads management, AI chatbots, and design & editing services.

## Features

### Design & Aesthetics
- **Dark Theme**: Sleek dark gradient background (#0B0F19) with premium feel
- **Neon Accents**: Purple (#7A3EF0) and blue (#3AA0FF) gradient elements throughout
- **Animated Background**: Gently moving glowing dots creating an "alive" effect
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Fade-in effects, hover glow effects, and smooth transitions

### Key Sections

1. **Navigation Menu**
   - Sticky header that appears on scroll with backdrop blur
   - Desktop navigation with gradient underlines on hover
   - Mobile-responsive hamburger menu
   - Quick links to all sections

2. **Hero Section**
   - Compelling headline with gradient text
   - Professional subheading
   - Call-to-action button with gradient and hover effects
   - Professional stock photography

3. **About Me**
   - Personal introduction highlighting expertise
   - Four skill highlights with animated glowing icons
   - Web Development, Meta Ads Management, AI Chatbots, Design & Editing

4. **Services**
   - Four glassmorphism cards
   - Web Development
   - Meta Ads Management
   - AI Chatbots
   - Design & Editing (Canva & CapCut)
   - Hover animations with glow effects

5. **Portfolio**
   - Four featured project cards
   - Gradient backgrounds for visual appeal
   - Hover animations revealing call-to-action
   - Space for live links and project previews

6. **Testimonials**
   - Two client testimonial cards
   - Star ratings
   - Client avatars and credentials
   - Glowing glassmorphism design

7. **Contact**
   - Functional contact form with fields for name, email, and message
   - Email contact information
   - Social media links (Facebook, Instagram, LinkedIn)
   - Smooth form interactions

8. **Back to Top Button**
   - Appears after scrolling 300px
   - Smooth scroll animation to top
   - Gradient design with hover effects
   - Enhanced user experience

9. **Footer**
   - Credit attribution to Web Wise Agency
   - Gradient text styling
   - Top border separation

## Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Animations**: Custom CSS animations and transitions
- **Font**: Poppins (Google Fonts)

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.tsx    # Canvas-based animated background with glowing dots
│   ├── About.tsx                 # About section with skills
│   ├── BackToTop.tsx             # Scroll-to-top button
│   ├── Contact.tsx               # Contact form and information
│   ├── Footer.tsx                # Footer section
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── Navigation.tsx            # Sticky navigation menu
│   ├── Portfolio.tsx             # Featured projects showcase
│   ├── Services.tsx              # Services cards
│   └── Testimonials.tsx          # Client testimonials
├── App.tsx                       # Main App component
├── main.tsx                      # React entry point
├── index.css                     # Global styles and animations
└── vite-env.d.ts                # Vite environment types
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run typecheck` - Run TypeScript type checking

## Customization

### Colors
The portfolio uses a neon gradient color scheme. To modify colors, update the hex values in components:
- Primary Purple: `#7A3EF0`
- Primary Blue: `#3AA0FF`
- Background: `#0B0F19`

### Content
Edit individual component files to update:
- Hero headline and subtext
- About section biography
- Service descriptions
- Portfolio projects
- Testimonials and client information
- Contact information

### Typography
The project uses the Poppins font family. To change, modify the font import in `src/index.css` and update the font-family utility.

## Performance Optimizations

- Optimized image loading with Pexels stock photos
- CSS animations using GPU acceleration
- Responsive breakpoints for faster mobile rendering
- Minimal bundle size with tree-shaking
- Canvas-based animations for smooth performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG standards
- Smooth scroll behavior for better UX

## Future Enhancements

- Integration with email service for contact form submissions
- Blog section for portfolio and insights
- Dark/Light theme toggle
- Multi-language support
- Analytics integration
- CMS integration for dynamic content

## Credits

- **Design Inspiration**: Modern portfolio best practices
- **Icons**: Lucide React
- **Stock Photos**: Pexels
- **Font**: Google Fonts (Poppins)
- **Developed by**: Web Wise Agency

## License

This project is proprietary and owned by Laiba. Unauthorized copying or distribution is prohibited.

## Contact

For inquiries or project customization:
- Email: contact@laiba.com
- LIVE DEMO: https://laiba-portfolio-phi.vercel.app/


---

**Last Updated**: November 2025
