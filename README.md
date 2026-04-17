# 🏡 Real Estate Next.js Template

A modern, high-performance real estate website built with **Next.js 14**, **Sanity (optional CMS)**, and fully customizable UI components.

---

## 🚀 Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Clean, modern UI (fully customizable)
- 🧩 Component-based architecture
- 📝 Blog system (Sanity CMS optional)
- 🏠 Property listing & details pages
- 📩 Contact & agent email integration (Resend)
- 🔄 Works with or without CMS
- 📦 Includes dummy/demo data out of the box

---

## 📦 Installation

```bash
npm install
npm run dev
```

---
## App will run on:
```bash
http://localhost:3000
```
---

## ⚙️ Environment Variables (Optional)

```bash
# Sanity (Optional CMS)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Email (Resend)
RESEND_API_KEY=your_api_key
RESEND_FROM_EMAIL=onboarding@resend.dev
CONTACT_EMAIL=your@gmail.com

# Site URL (for SEO & sharing)
NEXT_PUBLIC_SITE_URL=http://yoursite.com

# Google map integration
NEXT_PUBLIC_MAP_KEY=google_map_api_key

```
---

# 🧠 How This Template Works
This template is designed to work in two modes:

## 🧪 Demo Mode (Default)
No environment variables required
- Uses local dummy data (/Data folder)
- Perfect for preview after installation
## 🔌 Production Mode (With CMS)
- Uses Sanity for dynamic content
- Requires environment variables

# 🗂️ Project Structure

```base
/app
  /(frontend)
  /(backend)
  /(core)

/components
/Data          → Dummy/demo data
/sanity        → Sanity config (optional)
/types         → TypeScript types
```

## 📝 Data System
### Blogs
- Uses /Data/blog.ts by default
- Automatically switches to Sanity if configured

### Properties
- Uses /Data/property.ts
- Falls back to demo data if CMS is not connected
---

# 🧩 Sanity CMS Setup (Optional)
If you want dynamic content:
- Create a Sanity project
- Add your project ID & dataset
- Configure schemas
- Add environment variables <br>
If not configured → the template still works with demo data
---

# 📩 Email Setup (Agent Contact)
This template uses Resend for email functionality.

#### Steps:
- Create a Resend account
- Add your API key to .env.local

```bash
RESEND_API_KEY=
CONTACT_EMAIL=
RESEND_FROM_EMAIL=
```

# 🧪 Build for Production

```bash
npm run build
npm start
```
---
# 🚀 Deployment

- Vercel (best for Next.js)
- After deployment:
- Add environment variables in Vercel dashboard

---
## ⚠️ Common Issues
- Either add .env.local
- Or rely on demo data (default)
## ❌ Sanity dataset not found
- Check project ID and dataset
- Or remove env variables to fallback to demo mode

## 💡 Customization
You can easily customize:
- Colors → Tailwind config
- Components → /components
- Data → /Data
- Layout → /app

## 📄 License
This template is licensed for personal and commercial use.
You are NOT allowed to:
- Resell
- Redistribute
- Repackage as your own product

## 🙌 Support

If you face any issues:
- Check environment variables
- Confirm CMS setup (if used)
- Verify fallback demo data

# Enjoy building 🚀