# Property Now - Premium London Property Directory

A modern, sleek property directory website for browsing and discovering premium properties for rent and sale across London.

## Features

- **Modern Design**: Clean, minimalist aesthetic inspired by Treatwell UK
- **Property Browsing**: Browse 25+ curated properties across London
- **Advanced Filtering**: Filter by location, price, bedrooms, property type, and more
- **Property Details**: Detailed property pages with image galleries and enquiry forms
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Smooth Animations**: Elegant animations powered by Framer Motion
- **Form Validation**: Robust form validation using React Hook Form

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation
- **Lucide React** - Modern icon library

## Project Structure

```
property-now/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── PropertyGrid.jsx
│   │   ├── FilterBar.jsx
│   │   ├── ContactForm.jsx
│   │   ├── CTASection.jsx
│   │   ├── AnimationWrapper.jsx
│   │   └── PropertyDetailComponent.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Listings.jsx
│   │   ├── PropertyDetail.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/                # Mock data
│   │   └── properties.js
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed on your machine

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Pages

### Home (`/`)
- Hero section with search functionality
- Featured properties carousel
- Why choose us section
- Property type cards (Rent/Sale)
- Call-to-action sections

### Listings (`/listings`)
- Filterable property grid
- Advanced filter bar (location, price, beds, type)
- Dynamic search functionality
- Results counter

### Property Detail (`/property/:id`)
- Image gallery with navigation
- Property information and features
- Enquiry form
- Related properties section

### About (`/about`)
- Company story and mission
- Core values
- Team member profiles
- Company statistics

### Contact (`/contact`)
- Contact form with validation
- Office location with Google Maps
- Contact information cards
- FAQ section

## Design System

### Colors
- **Primary**: `#1A1A1A` (Dark text/buttons)
- **Accent**: `#00A8E8` (Highlights/CTAs)
- **Background**: `#FFFFFF` (Main background)
- **Neutral**: `#F5F5F5` (Section dividers/cards)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold (600-700 weight)
- **Body**: Regular (400 weight)
- **Consistent hierarchy** with proper spacing

### Buttons
- 8px border radius
- Smooth hover transitions
- Primary, secondary, and accent variants
- Consistent padding (14px 32px)

## Mock Data

The project includes 28 mock properties with:
- Various London locations (Shoreditch, Kensington, Canary Wharf, etc.)
- Mix of rent and sale properties
- Different property types (apartments, houses, penthouses, etc.)
- 1-5 bedroom range
- High-quality Unsplash images

## Customization

### Adding New Properties

Edit `src/data/properties.js` and add new property objects:

```javascript
{
  id: 29,
  title: "Your Property Title",
  price: "£2,500/mo",
  priceValue: 2500,
  type: "Rent", // or "Sale"
  bedrooms: 2,
  bathrooms: 2,
  size: 850,
  location: "Area, London",
  area: "London Region",
  propertyType: "Apartment",
  image: "https://...",
  images: ["https://...", "https://..."],
  description: "Property description...",
  features: ["Feature 1", "Feature 2"],
  available: "Immediately"
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#YOUR_COLOR',
      accent: '#YOUR_COLOR',
      neutral: '#YOUR_COLOR',
    },
  },
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Contact

For questions or support, please contact:
- Email: hello@propertynow.co.uk
- Phone: +44 20 7123 4567

---

Built with ❤️ for Property Now
