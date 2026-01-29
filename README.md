# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features a clean dark theme design with sections for showcasing projects, experience, education, and contact information.

## Features

- **Dark Theme UI** - Modern styling with a sleek dark theme
- **Fully Responsive** - Works seamlessly across all devices with mobile-friendly navigation
- **Dynamic Routing** - Individual project pages with dynamic routing
- **Project Showcase** - Featured projects section on homepage
- **About Section** - Experience and education cards
- **Contact Form** - Contact page with form and social links
- **Fast Performance** - Built with Next.js for optimal performance

## Technologies

- **Next.js 16.1.1** - React framework for production
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Geist Font** - Modern font family

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/im24a-mendolag/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects pages
│   │   └── [slug]/       # Dynamic project pages
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # React components
│   ├── EducationCard.js
│   ├── ExperienceCard.js
│   ├── Footer.js
│   ├── Header.js
│   └── ProjectCard.js
├── data/                  # Data files
│   ├── contact.js
│   ├── projects.js
│   └── skills.js
└── public/                # Static assets
    └── leetcode_logo.png
```

## Customization

### Update Contact Information

Edit `data/contact.js` to update your contact details:
- Email
- GitHub profile
- LinkedIn profile
- LeetCode profile

### Add/Edit Projects

Edit `data/projects.js` to add or modify projects:
- Set `featured: true` to display on homepage
- Add project details, technologies, features, and GitHub URL

### Update Skills

Edit `data/skills.js` to modify the skills displayed on the homepage and about page.

### Modify Styling

The project uses Tailwind CSS. Edit `app/globals.css` for global styles or modify component classes directly.

## Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project is private and all rights reserved.

## Contact

- Email: giovanni.mendola28@gmail.com
- GitHub: [@im24a-mendolag](https://github.com/im24a-mendolag)

---

Built with Next.js and Tailwind CSS
