# AGENTS.md

## Project Mission

This project exists to improve sleep behavior through persuasive design.

The website is not a generic educational resource and not a wellness product. It is a behavioral intervention system designed to influence late-night decision making.

Primary success metric:

**User goes to sleep earlier and more consistently.**

Secondary success metric:

**User willingly revisits the page every night.**

Every design, engineering, content, and UX decision should support these goals.

---

# Product Philosophy

The site should feel like:

> “A calm but brutally honest mirror.”

The experience must feel:

- intelligent
- emotionally precise
- scientific
- psychologically persuasive
- premium
- minimal
- calm
- serious

The experience must NOT feel:

- corporate wellness
- productivity guru content
- motivational poster
- life coaching
- childish gamification
- anxiety-inducing fear tactics
- overly emotional or melodramatic

Avoid visual clichés:

- moons
- stars
- sleeping mascots
- stock photography
- smiling wellness people
- exaggerated gradients
- excessive glow effects

Restraint is preferred.

---

# Design Principles

## 1. Midnight-first UX

Design for the exhausted user at 12:30 AM.

Assume:

- reduced attention span
- emotional fatigue
- lower cognitive energy
- tendency toward rationalization
- desire for low friction

Interactions should require minimal effort.

No cognitive overload.

---

## 2. High readability

Typography is the primary visual language.

Requirements:

- strong hierarchy
- generous spacing
- short readable sections
- large headings
- comfortable line lengths
- high contrast
- mobile readability prioritized

Avoid:

- dense text walls
- visual clutter
- cramped layouts

---

## 3. Minimal motion

Motion exists to support focus.

Allowed:

- subtle fades
- smooth transitions
- gentle number updates
- soft parallax (minimal)

Avoid:

- bouncing animations
- flashy transitions
- distracting motion
- motion fatigue

If animation attracts attention to itself, remove it.

---

## 4. Emotionally precise writing

Writing must be:

- concise
- evidence-based
- emotionally sharp
- difficult to dismiss
- non-judgmental

Avoid:

- clichés
- motivational fluff
- guilt language
- fake inspiration
- toxic productivity

Bad:
"Rise and grind."

Bad:
"Dream big."

Good:
"You are borrowing from tomorrow again."

Good:
"Potential disappears quietly."

---

# SEO Requirements

SEO matters because discoverability matters.

Every page MUST include:

## Metadata

- title
- meta description
- canonical URL
- OpenGraph tags
- Twitter cards

## Semantic HTML

Use proper structure:

- header
- nav
- main
- section
- article
- footer

Use heading hierarchy correctly:

- one H1 only
- logical H2/H3 nesting

## Structured Content

Content must be crawlable.

Avoid:

- text rendered only through animation
- inaccessible hidden content

## Performance

Target:

- excellent Core Web Vitals
- minimal CLS
- fast LCP
- minimal JS blocking

Optimize:

- bundle size
- fonts
- image loading
- script execution

---

# Responsive Requirements

Mobile is priority.

Breakpoints should feel intentional.

Requirements:

## Mobile

- thumb-friendly spacing
- large tap targets
- readable typography
- compact but breathable layouts

## Tablet

- balanced spacing
- adaptive grids

## Desktop

- cinematic whitespace
- editorial layout rhythm
- premium feel

Never design desktop-first.

---

# Accessibility Requirements

Must support:

- keyboard navigation
- semantic labels
- sufficient contrast
- screen readers
- reduced motion preferences

Never sacrifice accessibility for aesthetics.

---

# Visual System

Preferred visual tone:

- near-black backgrounds
- muted neutrals
- restrained accent colors
- premium typography
- editorial spacing
- quiet confidence

The interface should feel:

> expensive, calm, serious, intentional

Not flashy.

---

# Engineering Rules

Before implementation:

1. Scan repository architecture.
2. Reuse established patterns.
3. Avoid unnecessary abstractions.
4. Avoid overengineering.
5. Prefer maintainability.

Code standards:

- modular
- composable
- readable
- production quality
- accessible

Avoid:

- large monolithic files
- unnecessary dependencies
- premature optimization
- duplicated UI logic

---

# UX Success Test

Before shipping, ask:

1. Would someone willingly revisit this every night?

2. Does this feel emotionally believable?

3. Does this quietly make staying awake feel irrational?

4. Would an exhausted developer still engage with this?

5. Does this feel premium and calm?

If the answer is "no" to any of these:

Refactor.

---

# Golden Rule

Do not build a page that motivates.

Build a page that changes the midnight decision.
