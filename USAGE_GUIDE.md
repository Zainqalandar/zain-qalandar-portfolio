# Usage Guide for New Components & Hooks

## New Components

### 1. ScrollProgressBar
```jsx
// Already integrated in page.js at the root level
// Shows a gradient progress bar at the very top of the page
import ScrollProgressBar from '@/components/ScrollProgressBar';

// Usage in page.js:
<ScrollProgressBar />
```

**Props:** None (uses window scroll automatically)

**Customization:**
- Edit gradient colors in component: `from-green-500 via-emerald-500 to-teal-500`
- Adjust height: Change `h-1` class
- Position: Always fixed at top with `z-50`

---

### 2. ScrollToTopButton
```jsx
// Already integrated in page.js at the root level
import ScrollToTopButton from '@/components/ScrollToTopButton';

// Usage in page.js:
<ScrollToTopButton />
```

**Props:** None (uses window scroll automatically)

**Customization:**
- Show threshold: Change `window.scrollY > 400` to show at different scroll position
- Position: Edit `bottom-8 right-8` classes for placement
- Size: Adjust `w-12 h-12` for button dimensions
- Colors: Edit gradient classes `from-green-500 to-emerald-600`

---

### 3. ActiveSectionHighlight
```jsx
// Already integrated in page.js at the root level
import ActiveSectionHighlight from '@/components/ActiveSectionHighlight';

// Usage in page.js:
<ActiveSectionHighlight />
```

**Props:** None (auto-detects sections by ID)

**Required Setup:**
- All sections must have `id` attributes matching section names
- Current sections detected: `hero`, `about`, `services`, `experience`, `skills`, `projects`, `testimonials`, `faq`, `contact`
- To add new sections: Update the `sections` array in component

**Customization:**
- Visibility: Hidden on mobile, only shows on `lg` breakpoint
- Position: Edit `left-4 top-1/2` for positioning
- Indicator colors: Change `bg-green-500` for active/inactive states
- Threshold: Edit `window.innerHeight / 2` to change when section becomes active

---

## Custom Hooks

### useScrollAnimation
```jsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MyComponent() {
  const { scrollY, parallaxY, fadeOpacity } = useScrollAnimation();

  return (
    <motion.div style={{ y: parallaxY }}>
      {/* Element moves up as you scroll down */}
    </motion.div>
  );
}
```

**Returns:**
- `scrollY` - Current scroll position value
- `parallaxY` - Parallax offset (0-300px range)
- `fadeOpacity` - Opacity based on scroll (0.5-1 range)

---

### useInViewAnimation
```jsx
import { useInViewAnimation } from '@/hooks/useScrollAnimation';
import { useRef } from 'react';

export default function MyComponent() {
  const ref = useRef(null);
  const isInView = useInViewAnimation(ref);

  return (
    <div ref={ref}>
      {isInView && <p>Element is visible!</p>}
    </div>
  );
}
```

**Parameters:**
- `ref` - React ref pointing to element to observe
- `options` (optional) - IntersectionObserver options
  - `threshold` - When to trigger (0-1, default 0.1)

**Returns:**
- `isInView` - Boolean, true when element enters viewport

---

## Animation Variants Library

Pre-built Framer Motion variants available from `useScrollAnimation`:

```jsx
import { scrollAnimationVariants } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

// Fade in from bottom
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={scrollAnimationVariants.fadeInUp}
  viewport={{ once: true }}
>
  Content
</motion.div>

// Scale in animation
<motion.div
  variants={scrollAnimationVariants.scaleIn}
  initial="hidden"
  whileInView="visible"
>
  Content
</motion.div>

// Container with staggered children
<motion.div
  variants={scrollAnimationVariants.staggerContainer}
  initial="hidden"
  whileInView="visible"
>
  {items.map(item => (
    <motion.div key={item} variants={scrollAnimationVariants.fadeInUp}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

**Available Variants:**
- `fadeInUp` - Fade in while sliding up
- `fadeInDown` - Fade in while sliding down
- `fadeInLeft` - Fade in while sliding left
- `fadeInRight` - Fade in while sliding right
- `scaleIn` - Fade and scale from 0.8 to 1
- `slideInUp` - Slide up with cubic-bezier easing
- `staggerContainer` - Container for staggered children

---

## New CSS Classes

### Hover Effects
```html
<!-- Lift effect on hover -->
<div class="hover-lift">Lifts up on hover</div>

<!-- Glow effect -->
<div class="hover-glow">Glows on hover</div>

<!-- Brightness effect -->
<div class="hover-dim">Gets brighter on hover</div>

<!-- Smooth transitions -->
<div class="smooth-transition">Smooth all transitions</div>
```

### Animation Classes
```html
<!-- Staggered list items (auto-stagger with delays) -->
<ul>
  <li class="stagger-item">Item 1 (delay 0.1s)</li>
  <li class="stagger-item">Item 2 (delay 0.2s)</li>
  <li class="stagger-item">Item 3 (delay 0.3s)</li>
</ul>

<!-- Page transitions -->
<div class="page-enter">Fades in with scale</div>
```

### New Keyframe Animations
```css
/* In custom CSS */
.my-element {
  animation: slideInFromLeft 0.6s ease-out;
  /* or slideInFromRight, slideInFromTop, slideInFromBottom */
  /* or fadeInScale, bounceInDown, shimmerWave, textGlow, revealLineH, revealLineV */
}
```

---

## Header Active Section Tracking

The Header component now automatically highlights the active section:

```jsx
// Desktop Navigation
// Links show green color and animated underline when their section is active

// Mobile Navigation
// Active nav items show:
// - Green background color with border
// - Text color in green

// Implementation uses:
const [activeSection, setActiveSection] = useState('hero');
const isLinkActive = (href) => {
  const sectionId = href.replace('#', '');
  return activeSection === sectionId;
};
```

**Customization:**
- Threshold for active detection: Edit `window.innerHeight / 3` (currently 33% from top)
- Active link colors: Edit color classes in render
- Border radius: Adjust `rounded-lg` class

---

## Example: Adding New Scroll-Triggered Animation

```jsx
// 1. Import the hook and variant
import { useInViewAnimation, scrollAnimationVariants } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function MyComponent() {
  const ref = useRef(null);
  const isInView = useInViewAnimation(ref);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollAnimationVariants.fadeInUp}
    >
      <h2>This animates when visible!</h2>
    </motion.section>
  );
}
```

---

## Performance Tips

1. **Use `viewport={{ once: true }}`** to prevent re-animations
2. **Lazy load heavy animations** using `useInViewAnimation`
3. **Limit stagger children** to avoid too many simultaneous animations
4. **Use `transform` and `opacity`** for GPU-accelerated animations
5. **Test on mobile** to ensure animations run smoothly

---

## Browser Support

All enhancements support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

Gracefully degrades in older browsers that don't support CSS animations.

---

## Troubleshooting

**Animations not showing?**
- Check browser DevTools for animation performance
- Verify `viewport={{ once: true }}` isn't preventing re-animation
- Check z-index stacking if elements are hidden

**Performance issues?**
- Reduce number of staggered items
- Use `will-change: transform` for heavy animations
- Profile with DevTools Performance tab

**Mobile animations janky?**
- Reduce animation duration
- Use `type: 'spring'` for smoother feel
- Test with `prefers-reduced-motion` media query

---

For questions or modifications, refer to the individual component files in `/src/components/` and `/src/hooks/`.
