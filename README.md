# Rangka Empat Studio Website

## 📖 Project Overview

Rangka Empat Studio is a creative studio specializing in Branding, Web Design & Development, and SEO. This repository contains the source code for our official website, designed to showcase our work, connect with potential clients, and serve as a central hub for our digital presence.

## 📂 Project Structure

This project is organized for scalability and maintainability, with a focus on clean, consistent code and a unified design language. The main directories include:

- **components/** – Reusable UI components (e.g., navigation, cards, buttons)
- **pages/** – Page-specific components and layouts (e.g., Home, About, Services)
- **styles/** – Custom CSS for global styles, variables, and section-specific standards (index.scss)
- **assets/** – Images, videos, and other media files
- **functions/** – Utility functions and data processing scripts
- **public/** – Static files for direct serving

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following tools installed:

- Node.js (v18+)
- npm (v9+)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/rangkaempatstudio/rangka-empat.git
cd rangka-empat

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

This command will start the development server, typically at `http://localhost:5173`.

### Building for Production

```bash
npm run deploy
```

## 🎨 Styling and Design Standards

To ensure a cohesive and professional design, we have established the following styling guidelines in index.scss:

- **Typography:** Use a consistent font (Poppins) hierarchy for headings, paragraphs, and buttons.
- **Color Palette:** Maintain a fixed color scheme for brand consistency (e.g., primary, secondary, accent, background colors).
- **Spacing:** Use consistent padding and margin values for uniform section spacing.
- **Component Styles:** Create modular, reusable components with clear naming conventions.
- **Responsive Design:** Ensure all pages are fully responsive, optimized for mobile and desktop devices.

### File Organization

- **Global Styles:** Base styles, resets, and utility classes.
- **Section Styles:** Unique styles for each section (e.g., Hero, Services, Contact).
- **Component Styles:** Styles for reusable components (e.g., buttons, cards, modals).

## 🗂️ Components and Section Standards

### Components

- **Buttons:** Consistent size, color, and hover effects across all pages.
- **Cards:** Use for service highlights, case studies, and testimonials.
- **Forms:** Standardized input fields, labels, and error messages.

### Section Structure

For each page, follow a consistent structure:

- **Header:** Clear, impactful section titles.
- **Content:** Engaging, concise copy with a focus on user experience.
- **Call to Action:** Encourage visitors to take the next step (e.g., contact, book a free consultation).

### Environment Variables

Ensure all sensitive keys and API URLs are stored in a `.env` file (not committed to the repository).

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Submit a pull request

## 📧 Contact

For support, collaboration, or general inquiries, reach out to us at [rangkaempatstudio@gmail.com](mailto:rangkaempatstudio@gmail.com).

## 📅 Future Roadmap

- Project showcase section
- Blog integration
- Client testimonials
- SEO optimization

## 📝 License

This project is licensed under the MIT License. See the LICENSE file for more details.
