# Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Personal information and statistics
- **Skills Section**: Visual skill bars with proficiency levels
- **Projects Section**: Showcase of projects with images and tech stacks
- **Contact Section**: Functional contact form
- **Responsive Design**: Mobile-friendly with smooth scrolling
- **Modern UI**: Clean, professional design with Tailwind CSS

## Setup Instructions

### Option 1: Using PowerShell (Recommended)

If you have PowerShell execution policy restrictions, you can temporarily bypass them:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
npm run dev
```

### Option 2: Using Command Prompt

Open Command Prompt (cmd) instead of PowerShell and run:

```cmd
npm install
npm run dev
```

### Option 3: Using the provided batch file

Double-click `install.bat` to install dependencies, then double-click `start.bat` to run the development server.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Customization

### Update Personal Information

Edit the following files to customize your portfolio:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the tagline
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Update the bio text
   - Adjust statistics (years of experience, projects, etc.)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Adjust proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update project descriptions, images, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, location, and phone number
   - The form currently logs to console - integrate with a backend service for actual email sending

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect and deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## License

This project is open source and available for personal use.
