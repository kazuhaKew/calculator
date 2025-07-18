# Enhanced Age Calculator

A modern, feature-rich web application that calculates your age with incredible detail and provides fascinating insights about your life journey.

## 🌟 Features

### Core Functionality
- **Precise Age Calculation**: Calculate exact age in years, months, and days
- **Real-time Updates**: See calculations update as you type
- **Input Validation**: Prevents future dates and invalid inputs
- **Responsive Design**: Works perfectly on all devices

### Enhanced Insights
- **Detailed Breakdown**: View your age in years, months, weeks, days, hours, and minutes
- **Next Birthday Countdown**: See exactly when you'll turn another year older
- **Zodiac Sign**: Automatically determines your astrological sign
- **Birth Day Information**: Find out what day of the week you were born
- **Generation Classification**: Discover which generation you belong to
- **Life Statistics**: Fun calculations including estimated heartbeats and breaths

### User Experience
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Local Storage**: Remembers your last calculation
- **Share Results**: Share your age calculation with friends
- **Print Functionality**: Print your complete age report
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kazuhakew/calculator.git
   cd calculator
   ```

2. Open `index.html` in your web browser.

## 📁 Project Structure

```
age-calculator/
├── index.html              # Main HTML file
├── styles/
│   └── main.css            # Comprehensive styling
├── scripts/
│   └── calculator.js       # Core JavaScript functionality
└── README.md              # Project documentation
```

## 🎯 Usage

1. **Enter Birth Date**: Use the date picker to select your birth date
2. **Automatic Calculation**: Results appear instantly as you select a date
3. **Explore Insights**: Scroll through various sections to see detailed information
4. **Customize Experience**: Toggle between light and dark themes
5. **Share or Print**: Use the action buttons to share or print your results

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript (ES6+)**: Vanilla JavaScript with modern features
- **Local Storage**: Persistent data storage
- **Web APIs**: Share API, Print API

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized calculations with efficient algorithms
- Smooth animations and transitions
- Lazy loading of non-critical features
- Minimal bundle size (no external dependencies)

## 🎨 Customization

### Themes
The application supports light and dark themes with CSS custom properties. Themes are automatically saved to localStorage.

### Styling
Customize the appearance by modifying CSS custom properties in `styles/main.css`:

```css
:root {
    --primary-color: #3b82f6;     /* Main accent color */
    --border-radius: 12px;        /* Border radius for elements */
    --transition: all 0.3s ease;  /* Animation timing */
}
```

### Features
Add new calculations or insights by extending the `AgeCalculator` class in `scripts/calculator.js`.

## 📱 Mobile Experience

The application is fully responsive and provides an excellent mobile experience:
- Touch-friendly interface
- Optimized layouts for small screens
- Fast loading and smooth interactions
- PWA-ready architecture

## 🔒 Privacy

- **No Data Collection**: All calculations are performed locally
- **No External Requests**: Works completely offline
- **Local Storage Only**: Only saves your birth date locally for convenience
- **No Analytics**: No tracking or analytics services

## 🚀 Future Enhancements

- [ ] Age comparison with famous people
- [ ] Historical events on your birth date
- [ ] Biorhythm calculations
- [ ] Multiple person age comparison
- [ ] Calendar integration
- [ ] Social media sharing with custom graphics
- [ ] PWA installation support
- [ ] Internationalization (i18n)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kazuhakew**
- GitHub: [@kazuhakew](https://github.com/kazuhakew)

## 🙏 Acknowledgments

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Icons: Emoji characters for universal compatibility
- Inspiration: Modern web design principles and user experience best practices

---

Made with ❤️ for everyone curious about their age!