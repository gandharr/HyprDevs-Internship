# Design System Showcase

A comprehensive design system showcasing reusable UI components, color palettes, typography, and interactive elements.

## 🎨 Features

### Color Palette
- Primary colors (blue shades)
- Neutral colors (grayscale)
- Semantic colors (success, error, warning)
- Each color has multiple shades for flexibility

### Typography
- Font Family: Inter
- Multiple heading levels (h1-h3)
- Various text sizes (xs to 4xl)
- Consistent line heights and weights

### Components
1. **Buttons**
   - Primary
   - Secondary
   - Success
   - Error
   - All with icon support

2. **Input Fields**
   - Default state
   - Success state
   - Error state
   - With icon support

3. **Cards**
   - Basic card
   - Card with footer
   - Hover effects
   - Icon integration

4. **Modal**
   - Animated entrance
   - Close button
   - Backdrop click to close
   - ESC key support

## 🚀 Getting Started

### Prerequisites
- Python 3.x (for local server)
- Modern web browser

### Installation

1. Clone or download this repository
2. Navigate to the project directory

### Running the Project

#### Method 1: Using Python Server
```bash
# Start the server
python -m http.server 8000

# Access the project
# Open your browser and go to:
http://localhost:8000
```

#### Method 2: Using VS Code Live Server
1. Install VS Code
2. Install "Live Server" extension
3. Right-click `index.html`
4. Select "Open with Live Server"

#### Method 3: Direct File Opening
- Simply double-click `index.html` to open in your default browser

## 📁 Project Structure

```
design-system/
├── index.html          # Main HTML file
├── design-system.css   # Styles and design tokens
├── design-system.js    # Interactive components
└── README.md          # This file
```

## 🎯 Design Tokens

### Colors
```css
--primary-500: #0066CC;
--neutral-500: #9E9E9E;
--success-500: #00C853;
--error-500: #FF3D00;
--warning-500: #FFC107;
```

### Typography
```css
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
```

### Spacing
```css
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
```

## 💻 Usage

### Buttons
```html
<button class="btn btn-primary">
    <span class="material-icons icon">add</span>
    Primary Button
</button>
```

### Input Fields
```html
<div class="input-group">
    <input type="text" class="input" placeholder="Default Input">
</div>
```

### Cards
```html
<div class="card">
    <div class="card-header">
        <h3>Card Title</h3>
    </div>
    <p>Card content</p>
</div>
```

## 🛠️ Customization

1. **Colors**: Modify the color variables in `design-system.css`
2. **Typography**: Adjust font sizes and weights in the CSS variables
3. **Components**: Extend or modify component styles as needed

## 📱 Responsive Design

The design system is fully responsive and works on:
- Desktop
- Tablet
- Mobile devices

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📫 Contact

For any questions or suggestions, please open an issue in the repository. 