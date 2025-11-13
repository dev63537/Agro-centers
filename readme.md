# AGRO CENTER - Complete Agricultural E-commerce Website

## 📁 Project Structure

```
agro/
├── index.html              # Home page with slider & featured products
├── assets/
│   ├── css/
│   │   ├── style.css       # Main responsive CSS & utilities
│   │   ├── home.css        # Home page specific styles
│   │   ├── products.css    # Products page styles
│   │   ├── cart.css        # Shopping cart styles
│   │   └── pages.css       # Other pages shared styles
│   ├── js/
│   │   ├── script.js       # Navigation, forms, cart utilities
│   │   ├── home.js         # Home page slider & newsletter
│   │   ├── products.js     # Product search & filters
│   │   └── cart.js         # Shopping cart functionality
│   └── images/             # Product and content images (placeholder folder)
└── pages/
    ├── products.html       # Products listing with filters & search
    ├── services.html       # Services page with pricing packages
    ├── about.html          # Company info, team, achievements
    ├── blog.html           # Blog articles & farming tips
    ├── contact.html        # Contact form & info
    └── cart.html           # Shopping cart & checkout
```

## 🌟 Features Included

### 1. **Home Page**
- Auto-sliding hero carousel (3 slides)
- 6 featured products with ratings & pricing
- Services showcase (4 main services)
- Why choose us section
- Customer testimonials
- Latest blog articles preview
- Newsletter subscription form

### 2. **Products Page**
- Product grid layout (responsive)
- Search functionality
- Category filters
- Price range slider
- Product sorting options
- Add to cart buttons
- Product ratings & reviews count

### 3. **Services Page**
- Detailed service descriptions
- Service benefits list
- Premium pricing packages (Basic, Professional, Enterprise)
- Package comparison

### 4. **About Page**
- Company history & story
- Core values section
- Team members showcase
- Key achievements & statistics

### 5. **Blog Page**
- Multiple article cards
- Article metadata (date, author, category)
- Article categories & tags
- Read more links

### 6. **Contact Page**
- Contact form with validation
- Business hours & address
- Phone & email information
- Multiple office locations

### 7. **Shopping Cart**
- Add/remove items
- Update quantities
- Cart summary with totals
- Shipping options
- Order calculation (subtotal, tax, shipping)

## 🎨 Design Features

- **Mobile-First Responsive Design**
  - Mobile (0px - 599px)
  - Tablet (600px - 1023px)
  - Desktop (1024px - 1399px)
  - Extra Large (1400px+)

- **Interactive Elements**
  - Hamburger mobile menu
  - Product filters & search
  - Shopping cart system
  - Form validation
  - Auto-scrolling hero slider
  - Smooth animations & transitions

- **Color Scheme**
  - Primary: Red (#DC143C)
  - Secondary: Blue (#1E40AF)
  - Success Green: (#10b981)
  - Light backgrounds & contrasting text

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with flexbox & grid
- **Vanilla JavaScript** - No dependencies required
- **localStorage** - Client-side shopping cart storage

## 🚀 Getting Started

1. **Open in Browser**: Navigate to `http://localhost/agro/index.html`
2. **View Pages**: Click navigation links to explore different sections
3. **Test Cart**: Add items to cart, view in cart page
4. **Responsive**: Test on mobile, tablet, and desktop sizes

## 📝 Customization

### Add More Products
Edit `pages/products.html` and add product cards:
```html
<div class="card product-card" data-category="seeds" data-price="1999">
    <!-- Product details -->
</div>
```

### Update Colors
Modify CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #DC143C;
    --secondary-color: #1E40AF;
    /* ... more variables ... */
}
```

### Add Blog Articles
Edit `pages/blog.html` and add new article blocks

### Replace Images
Replace placeholder images with actual agricultural product photos

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 599px
- **Tablet**: 600px - 1023px  
- **Desktop**: 1024px - 1399px
- **Extra Large**: 1400px+

## 🔧 Features to Implement (Future)

- Product detail/single product pages
- User account system & wishlist
- Payment gateway integration
- Order tracking system
- Admin dashboard
- Product reviews & ratings (backend)
- Live chat support
- Email notifications

## 📞 Contact & Support

- **Phone**: +91 98765 43210
- **Email**: info@agrocenter.com
- **Address**: 123 Agricultural Road, Farm City, 12345

## 📄 License

© 2024 AGRO CENTER. All rights reserved.

---

**Last Updated**: November 13, 2024
**Version**: 1.0 - Complete Multi-Page Website