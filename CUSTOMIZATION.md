# 🚀 Portfolio Usage Guide

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your portfolio.

### Build for Production
```bash
npm run build
npm start
```

---

## 📝 Customization Guide

### 1. Update Personal Information

#### In `layout.js`:
- Update metadata title and description
- Change OpenGraph image

#### In `Header.jsx`:
- Update name and title
- Modify profile image (replace `/public/images/profile.png`)

#### In `data/navLinks.json`:
- Add/remove navigation items
- Update section links

### 2. Modify Experience Section

Edit `src/data/education.json`:
```json
[
  {
    "id": 1,
    "title": "Education/Title",
    "content": "Your info",
    "delay": 0.2
  }
]
```

Update `Experience.jsx` with your actual job history:
```jsx
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    duration: 'Start - End',
    description: 'Your work description',
    skills: ['Skill1', 'Skill2']
  }
]
```

### 3. Update Projects

Edit `src/data/projects.json`:
```json
{
  "title": "Project Name",
  "desc": "Project description",
  "tech": ["Tech1", "Tech2"],
  "link": "https://project-link.com"
}
```

### 4. Customize Skills

Modify `src/data/skills.json` or update the Skills component directly in `src/components/Skills.jsx`:

```jsx
const skillCategories = {
  'Frontend': ['Your', 'Skills'],
  'Backend': ['Your', 'Skills'],
  'Tools': ['Your', 'Skills']
}
```

### 5. Update Testimonials

In `Testimonials.jsx`, modify the testimonials array:
```jsx
const testimonials = [
  {
    name: 'Person Name',
    role: 'Job Title',
    company: 'Company',
    message: 'Their feedback about you',
    rating: 5
  }
]
```

### 6. Add Articles

Update `Articles.jsx`:
```jsx
const articles = [
  {
    title: 'Article Title',
    excerpt: 'Article preview',
    author: 'Author Name',
    date: 'Date',
    readTime: '5 min read',
    category: 'Category'
  }
]
```

### 7. Update FAQ

In `FAQ.jsx`, modify the faqs array:
```jsx
const faqs = [
  {
    question: 'Your question?',
    answer: 'Your answer'
  }
]
```

### 8. Contact Information

Update email address in:
- `Hero.jsx`
- `Contact.jsx`
- `CTA.jsx`
- `Footer.jsx`

Update in `Contact.jsx`:
```jsx
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com'
  }
]
```

---

## 🎨 Styling Customization

### Change Primary Color

Update `tailwind.config.js`:
```js
colors: {
  brand: {
    50: '#your-50',
    100: '#your-100',
    300: '#your-300',
    500: '#your-500'
  }
}
```

Then search and replace `green-` and `emerald-` classes throughout components.

### Modify Animations

In `tailwind.config.js`, update keyframes and animation configurations.

### Global Styles

Edit `src/app/globals.css` to modify:
- Background gradients
- Font sizes
- Spacing
- Custom component classes

---

## 📱 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
# Build locally
npm run build

# Deploy the 'out' or '.next' folder
```

### Deploy to GitHub Pages
```bash
npm run build
# Use GitHub Actions for deployment
```

---

## 🔧 Advanced Customization

### Add Dark Mode
Install `next-themes`:
```bash
npm install next-themes
```

Add to `layout.js` and create a theme toggle component.

### Add Blog Integration
- Connect to Strapi CMS
- Use Contentful API
- Or use MDX for static blogs

### Add Contact Form Backend
- Implement with Formspree
- Use Emailjs
- Create a backend API

### Add Analytics
- Google Analytics
- Hotjar
- Plausible

---

## 📋 File Structure

```
src/
├── app/
│   ├── layout.js (Metadata)
│   ├── page.js (Main page)
│   └── globals.css (Global styles)
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   ├── Articles.jsx
│   ├── FAQ.jsx
│   ├── CTA.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── data/
    ├── navLinks.json
    ├── education.json
    ├── projects.json
    └── skills.json
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `/public/images/`
- Check image paths in components
- Verify image sizes for optimization

---

## 💡 Tips

1. **Update frequently** - Keep content fresh
2. **Use real links** - Don't leave placeholder links
3. **Test on mobile** - Ensure responsive design
4. **SEO optimization** - Use proper meta tags
5. **Performance** - Optimize images and reduce bundle size
6. **Backup** - Use Git for version control

---

## 📞 Support

For issues or questions:
- Check Next.js documentation: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

Happy customizing! 🎉
