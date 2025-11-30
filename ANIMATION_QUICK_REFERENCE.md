# 🎨 Animation System - Quick Reference Guide

## 🎯 Color Palette

### Primary Colors
```javascript
// Green Gradient Theme
green-400   #22c55e  (Primary Green)
green-500   #16a34a  (Dark Green)
green-600   #15803d  (Darkest Green)

emerald-400 #34d399  (Emerald)
emerald-500 #10b981  (Secondary Green)
teal-500    #14b8a6  (Tertiary)

// Accents
yellow-300  #fbbf24  (Highlight)
blue-300    #93c5fd  (Secondary)
pink-400    #f472b6  (Accent)
```

### Dark Base
```javascript
slate-900   #0f172a  (Dark Background)
slate-800   #1e293b  (Lighter Dark)
slate-700   #334155  (Card Background)
```

---

## 🎬 Animation Keyframes

### Available Animations in Tailwind

```javascript
// In tailwind.config.js - already configured
animation: {
  floatSlow: 'floatSlow 8s ease-in-out infinite',
  glow: 'glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  slideInRight: 'slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
  scaleIn: 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
  rotateInGradient: 'rotateInGradient 1.2s ease-out',
  gradientShift: 'gradientShift 8s ease-in-out infinite',
}
```

### Using Animations
```jsx
// In Tailwind classes
className="animate-floatSlow"
className="animate-glow"
className="animate-slideInRight"

// In Framer Motion
animate={{ y: [0, -10, 0] }}
transition={{ duration: 3, repeat: Infinity }}
```

---

## 🎪 Framer Motion Patterns

### Standard Component Animation Structure

```jsx
import { motion } from 'framer-motion'

export default function Component() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={itemVariants}>
        Content
      </motion.div>
    </motion.section>
  )
}
```

---

## ⚙️ Spring Physics Settings

```javascript
// Light Spring (bouncy)
{ type: 'spring', stiffness: 300, damping: 10 }

// Medium Spring (balanced) - RECOMMENDED
{ type: 'spring', stiffness: 100, damping: 15 }

// Stiff Spring (fast)
{ type: 'spring', stiffness: 200, damping: 25 }

// Heavy Spring (smooth)
{ type: 'spring', stiffness: 50, damping: 20 }
```

---

## 🎯 Common Animation Patterns

### 1. **Entrance Animation with Stagger**
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### 2. **Hover Effects**
```jsx
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)',
  }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### 3. **Floating Animation**
```jsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  Floating Element
</motion.div>
```

### 4. **Color Animation**
```jsx
<motion.span
  animate={{ color: ['#22c55e', '#60a5fa', '#fbbf24'] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Animated Text
</motion.span>
```

### 5. **Scroll-Triggered Animation**
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### 6. **Continuous Loop Animation**
```jsx
<motion.div
  animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  Orbiting Element
</motion.div>
```

---

## 💎 Glass-Morphism Effect

### CSS Classes
```css
/* In globals.css */
.glass-effect {
  background-color: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-effect:hover {
  border-color: rgba(34, 197, 94, 0.3);
  background-color: rgba(17, 24, 39, 0.9);
}
```

### Using in Components
```jsx
<div className="glass-effect rounded-2xl p-8">
  {content}
</div>
```

---

## 📱 Responsive Animation Tips

### Mobile Considerations
```jsx
// Reduce animation duration on mobile
const duration = window.innerWidth < 768 ? 0.3 : 0.6

// Disable hover animations on touch devices
const isTouch = () => {
  return (
    window.matchMedia('(hover: none) and (pointer: coarse)').matches
  )
}
```

### Viewport Settings
```jsx
// Execute animation only once on first scroll
viewport={{ once: true }}

// Trigger animation when 20% visible
viewport={{ amount: 0.2 }}

// Trigger animation when 80% visible
viewport={{ amount: 0.8 }}
```

---

## 🎪 Component-Specific Animations

### Header
```jsx
// Scroll-responsive background
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > 50)
  })
}, [])

// Changes class based on scrolled state
className={scrolled ? 'glass-effect' : 'bg-slate-900/80'}
```

### Stats/Counter
```jsx
// AnimatedCounter pattern
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (!isInView) return
    const increment = target / 60
    const interval = setInterval(() => {
      setCount(prev => Math.min(prev + increment, target))
    }, 16)
    return () => clearInterval(interval)
  }, [isInView, target])

  return <span ref={ref}>{Math.floor(count)}</span>
}
```

### Form Fields
```jsx
// Dynamic glow effect on focus
const [hoveredField, setHoveredField] = useState(null)

<motion.input
  onHoverStart={() => setHoveredField('name')}
  onHoverEnd={() => setHoveredField(null)}
  whileFocus={{ scale: 1.02 }}
/>

{hoveredField === 'name' && (
  <motion.div className="glow-background" />
)}
```

---

## 🔧 Debugging Animations

### Check Animation Properties
```javascript
// In browser console
// Verify animation is defined
console.log(getComputedStyle(element).animation)

// Check if element has animation class
console.log(element.classList)
```

### Performance Monitoring
```javascript
// Check frame rate
let frameCount = 0
const countFrames = () => {
  frameCount++
  requestAnimationFrame(countFrames)
  if (frameCount % 60 === 0) {
    console.log('FPS:', frameCount / 60)
  }
}
countFrames()
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Animation jittery | Increase damping (15-25) |
| Animation too slow | Increase stiffness (100-200) |
| Animation too fast | Decrease stiffness (50-100) |
| Lag on mobile | Reduce animation count/complexity |
| Scroll animation not triggering | Check viewport={{ once: true }} |
| Stagger looks wrong | Adjust delayChildren and staggerChildren |

---

## 📦 File Organization

```
portfolio/
├── src/
│   ├── app/
│   │   └── globals.css (Animation classes + dark gradient)
│   └── components/
│       ├── Header.jsx (Scroll-responsive animations)
│       ├── Hero.jsx (Spring physics + floating elements)
│       ├── Stats.jsx (AnimatedCounter component)
│       ├── Skills.jsx (Stagger animations)
│       ├── Projects.jsx (Card hover effects)
│       ├── Contact.jsx (Form field animations)
│       ├── CTA.jsx (Dramatic animations)
│       └── Footer.jsx (Professional design)
├── tailwind.config.js (Animation keyframes)
└── ANIMATION_ENHANCEMENTS.md (Documentation)
```

---

## 🚀 Performance Optimization

### Best Practices
- ✅ Use hardware-accelerated properties (transform, opacity)
- ✅ Avoid animating layout properties (width, height)
- ✅ Use will-change sparingly
- ✅ Clean up intervals and timeouts
- ✅ Test on actual devices

### Avoid
- ❌ Animating too many elements simultaneously
- ❌ Changing box-shadow on every frame
- ❌ Complex box-shadow calculations
- ❌ Animating blur filter continuously

### Optimized Properties
```css
/* Fast - GPU accelerated */
transform: translate, scale, rotate
opacity: change

/* Slow - avoid animating */
width, height, left, right, top, bottom
box-shadow, filter, backdrop-filter
```

---

## 🎨 Adding New Animations

### Step 1: Add Keyframe to Tailwind
```javascript
// tailwind.config.js
extend: {
  keyframes: {
    myAnimation: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '50%': { opacity: '0.5' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    myAnimation: 'myAnimation 1s ease-out',
  },
}
```

### Step 2: Use in Component
```jsx
// Option 1: Tailwind class
<div className="animate-myAnimation">Content</div>

// Option 2: Framer Motion
<motion.div
  animate={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 20 }}
  transition={{ duration: 1 }}
>
  Content
</motion.div>
```

---

## 📚 Resources

### Framer Motion
- [Official Docs](https://www.framer.com/motion/)
- [Spring Physics Guide](https://www.framer.com/motion/guide-animation/)
- [whileInView Examples](https://www.framer.com/motion/scroll/)

### Tailwind CSS
- [Animation Docs](https://tailwindcss.com/docs/animation)
- [Custom Keyframes](https://tailwindcss.com/docs/configuring-theme#extending-the-default-theme)

### Performance
- [Web.dev Animation Guide](https://web.dev/animations-guide/)
- [CSS Triggers](https://csstriggers.com/)

---

## ✅ Checklist for New Components

When adding animations to new components:

- [ ] Import `motion` from 'framer-motion'
- [ ] Define `containerVariants` with staggerChildren
- [ ] Define `itemVariants` with spring physics
- [ ] Wrap container in `motion.div` with variants
- [ ] Use `whileInView` for scroll triggers
- [ ] Add `viewport={{ once: true }}` to optimize
- [ ] Apply green color scheme (#22c55e, #10b981, etc.)
- [ ] Test on mobile devices
- [ ] Verify 60fps performance
- [ ] Clean up intervals/timeouts in useEffect

---

**Last Updated**: Phase 3 Animation Enhancement
**Status**: ✅ Complete and Production Ready
