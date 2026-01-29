# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features a clean dark theme design with sections for showcasing projects, experience, education, and contact information.

## Features

- **Dark Theme UI** - Modern styling with a sleek dark theme
- **Fully Responsive** - Works seamlessly across all devices with mobile-friendly navigation
- **Dynamic Routing** - Individual project pages with dynamic routing
- **Project Showcase** - Featured projects section on homepage
- **About Section** - Experience and education cards
- **Working Contact Form** - Functional contact form with email integration using Resend
- **Email Notifications** - Receive contact form submissions via email
- **Fast Performance** - Built with Next.js for optimal performance

## Technologies

- **Next.js 16.1.1** - React framework for production
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Resend** - Email API for sending contact form submissions
- **React Email** - React components for email templates
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

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
   - Get your API key from [Resend](https://resend.com/api-keys)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/                # API routes
│   │   └── contact/        # Contact form API endpoint
│   │       └── route.js
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects pages
│   │   └── [slug]/         # Dynamic project pages
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/             # React components
│   ├── EducationCard.js
│   ├── ExperienceCard.js
│   ├── email-template.jsx  # Email template for Resend
│   ├── Footer.js
│   ├── Header.js
│   └── ProjectCard.js
├── data/                   # Data files
│   ├── contact.js
│   ├── projects.js
│   └── skills.js
└── public/                 # Static assets
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
3. **Add Environment Variables:**
   - Go to your project settings in Vercel
   - Navigate to **Settings** → **Environment Variables**
   - Add `RESEND_API_KEY` with your Resend API key value
   - Select all environments (Production, Preview, Development)
   - Click **Save**
4. Deploy with one click

**Important:** After adding environment variables, you need to redeploy your project for the changes to take effect.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contact Form Setup

The contact form uses [Resend](https://resend.com) to send emails. To set it up:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Add the API key to your `.env.local` file (for local development)
4. Add the API key to Vercel environment variables (for production)

The contact form will send emails to the address specified in `data/contact.js`.

## License

This project is private and all rights reserved.

## Contact

- Email: giovanni.mendola288@gmail.com
- GitHub: [@im24a-mendolag](https://github.com/im24a-mendolag)

---

Built with Next.js and Tailwind CSS
