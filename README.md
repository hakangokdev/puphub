# 🐕 PupHub - Premium Pet Care Services

A modern, responsive landing page for a premium pet care service, built with Next.js 15 and featuring beautiful animations, glassmorphism UI design, and comprehensive pet care solutions.

## ✨ Features

### 🏠 Landing Page
- **Hero Section**: Eye-catching hero with call-to-action buttons
- **About Section**: Company story with animated dog images and decorative elements
- **Products Section**: Featured pet products with promotional offers (25% OFF)
- **Services Preview**: Overview of premium pet care services
- **Contact Information**: Easy-to-find contact details and location

### 📱 Complete Page Structure
- **Home**: Main landing page with all key sections
- **About Us**: Detailed company information, team members, and values
- **Services**: Comprehensive service packages with pricing
- **Products**: Product catalog with filtering and sorting capabilities
- **Pet Care**: Pet care tips, guides, and resources
- **Contact**: Contact form and business information
- **Authentication**: Sign in and register pages with modern UI

### 🎨 Design Features
- **Glassmorphism UI**: Modern glass-effect design elements
- **Framer Motion Animations**: Smooth, engaging animations throughout
- **Responsive Design**: Optimized for all device sizes
- **Custom Color Palette**: Warm, pet-friendly color scheme
- **Typography**: Multiple font families (Pangolin, Roboto, Rubik)

### 🛍️ Product Features
- **Product Catalog**: Categorized pet products (Food, Treats, Toys, etc.)
- **Filtering System**: Filter by category (Dog Food, Treats, Toys, Accessories, Healthcare)
- **Sorting Options**: Sort by name, price, and ratings
- **Product Cards**: Detailed cards with ratings, stock status, and badges
- **Shopping Features**: "Buy Now" buttons and product details

### 🔐 Authentication
- **Sign In Page**: Email/password login with social login options
- **Register Page**: User registration with form validation
- **Modern UI**: Glassmorphism design with loading states
- **Social Login**: Google and Facebook integration ready

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Runtime**: React 19
- **Development**: ESLint, PostCSS

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/hakangokdev/puphub.git
   cd puphub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
puphub/
├── public/                 # Static assets
│   ├── images/            # Image assets (logos, icons)
│   └── *.svg             # SVG icons and graphics
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── about/        # About Us page
│   │   ├── contact/      # Contact page
│   │   ├── pet-care/     # Pet Care page
│   │   ├── products/     # Products catalog page
│   │   ├── services/     # Services page
│   │   ├── signin/       # Authentication - Sign In
│   │   ├── register/     # Authentication - Register
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # Reusable React components
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with main call-to-action
- About preview with animated dog images
- Featured products section (25% OFF promotion)
- Services overview
- Contact information

### ℹ️ About Page (`/about`)
- Company history and founding story
- Key statistics (5000+ happy pets, 10+ years experience)
- Mission, vision, and core values
- Team member profiles with photos and roles

### 🛍️ Products Page (`/products`)
- Product catalog with 6+ featured items
- Category filtering (All, Dog Food, Treats, Toys, Accessories, Healthcare)
- Sorting options (Name, Price, Ratings)
- Product cards with ratings, stock status, and promotional badges

### 🎯 Services Page (`/services`)
- Service packages with detailed pricing
- Basic Grooming ($45/session)
- Premium Care ($149/month) - Most Popular
- Daycare ($35/day)
- Training Program ($89/week)
- "Why Choose Us" section with key benefits

### 🐾 Pet Care Page (`/pet-care`)
- Pet care tips and guides
- Health and wellness information
- Educational resources for pet owners

### 📞 Contact Page (`/contact`)
- Contact form for inquiries
- Business location and hours
- Phone and email contact information

### 🔐 Authentication Pages
- **Sign In** (`/signin`): Login form with email/password and social options
- **Register** (`/register`): Registration form with validation

## 🎨 Design System

### Colors
- **Primary Pink**: #FFC6DA
- **Primary Yellow**: #FFF1A6  
- **Primary Blue**: #BAD8EB
- **Text Colors**: Various shades of gray and dark colors
- **Background**: Clean whites and subtle gradients

### Typography
- **Pangolin**: Playful headings and decorative text
- **Roboto**: Body text and content
- **Rubik**: UI elements and buttons

### Animations
- Smooth fade-in effects on scroll
- Hover animations on interactive elements
- Page transitions with Framer Motion
- Decorative element animations

## 🔧 Development

### Customization
- Modify colors in Tailwind CSS configuration
- Add new components in the `src/components` directory
- Create new pages in the `src/app` directory
- Update animations in component files using Framer Motion

### Adding New Features
1. Create new components in appropriate directories
2. Add routing in the App Router structure
3. Update navigation in header component
4. Test responsive design across devices

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

