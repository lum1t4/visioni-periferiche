# Visioni Periferiche WordPress Theme

A modern block-based WordPress theme for Visioni Periferiche Festival, featuring custom Gutenberg blocks and Full Site Editing support.

## Features

- **Block-based theme** with Full Site Editing support
- **Custom Gutenberg blocks**:
  - Hero Section with video background
  - Introduction section with Swiper carousel
  - Program/Events section
  - Artists Gallery
  - Sponsors section
  - Contact form section
- **Dark theme** with gold accents
- **Responsive design**
- **Performance optimized**

## Installation

1. Upload the `visioni-periferiche-theme` folder to `/wp-content/themes/`
2. Activate the theme through the WordPress admin panel
3. The theme will automatically register custom blocks

## Usage

### Creating a Landing Page

1. Create a new page in WordPress
2. Select the "Landing Page" template
3. Use the custom blocks from the "Visioni Periferiche Blocks" category:
   - **Hero Section**: Full-screen video header
   - **Introduction Section**: Text + image carousel
   - **Program Section**: Event cards grid
   - **Artists Gallery**: Team/speakers grid
   - **Sponsors Section**: Logo grids by tier
   - **Contact Section**: Contact form

### Customization

- Colors can be modified in `theme.json`
- Block styles are in `/blocks/[block-name]/style-index.css`
- Global styles are in `/assets/style.min.css`

## Block Development

To develop blocks with build tools:

```bash
npm install
npm run start  # Development mode
npm run build  # Production build
```

Note: The theme includes pre-built block files that work without npm.

## Assets

- Images: `/assets/img/`
- Videos: `/assets/video/`
- Scripts: `/assets/script.js`
- Styles: `/assets/style.min.css`

## Requirements

- WordPress 6.0+
- PHP 7.4+

## License

GPL v3.0