---
name: Technical Noir
colors:
  surface: '#0d1515'
  surface-dim: '#0d1515'
  surface-bright: '#333b3b'
  surface-container-lowest: '#080f10'
  surface-container-low: '#151d1e'
  surface-container: '#192122'
  surface-container-high: '#232b2c'
  surface-container-highest: '#2e3637'
  on-surface: '#dce4e5'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce4e5'
  inverse-on-surface: '#2a3233'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#fff5de'
  on-tertiary: '#3b2f00'
  tertiary-container: '#fed639'
  on-tertiary-container: '#715d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffe179'
  tertiary-fixed-dim: '#eac324'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#554500'
  background: '#0d1515'
  on-background: '#dce4e5'
  surface-variant: '#2e3637'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 120%
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  code-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 150%
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style
The design system is a fusion of **Brutalist Minimalism** and **High-Tech Elegance**, specifically tailored for a senior developer who balances raw architectural logic with sophisticated execution. The brand personality is authoritative, precise, and avant-garde.

The aesthetic prioritizes "blackspace"—intentional voids of #0A0A0A that command focus toward high-resolution imagery and sharp, technical details. It evokes the feeling of a premium, late-night IDE session transformed into a digital gallery. Interactive elements should feel like precision instruments: responsive, high-contrast, and glowing with electric energy.

## Colors
The palette is built on a foundation of absolute darkness to maximize contrast and reduce visual noise.

*   **Background (#0A0A0A):** A deep charcoal that provides the "blackspace" foundation.
*   **Primary Accent (Electric Cyan):** Used for primary calls-to-action, active states, and critical technical indicators. It represents logic and clarity.
*   **Secondary Accent (Vibrant Violet):** Used for depth, hover states, and subtle gradients. It adds a layer of creative sophistication.
*   **Typography (#F5F5F5):** An off-white that ensures high readability without the harshness of pure #FFFFFF against the dark background.

## Typography
The typographic hierarchy creates a tension between the classic elegance of **Playfair Display** and the futuristic, geometric nature of **Space Grotesk**.

Headlines should be used at massive scales to create "editorial" impact. Display-XL is reserved for hero sections and project titles. Space Grotesk is used for all functional text, maintaining a technical, "monospaced-adjacent" feel that reinforces the developer persona. Text alignment should often be intentional and asymmetrical to break the traditional grid.

## Layout & Spacing
The layout follows a **12-column asymmetric grid**. While the structure is rigid, content should be placed with "intentional imbalance"—for example, a headline spanning 8 columns on the left, with body text occupying the last 4 columns on the right.

*   **Generous Margins:** Desktop layouts utilize 80px margins to allow the "blackspace" to breathe.
*   **Verticality:** Section gaps are expansive (160px) to ensure each project or concept feels like an individual gallery installation.
*   **Adaptive Flow:** On mobile, the grid collapses to a single column, but the oversized typography remains scaled to the maximum readable width to maintain the bold brand voice.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Tonal Layers** and **Luminous Accents**.

*   **The Depth Model:** Since the background is nearly black, depth is achieved through "light-leaks" and 1px borders. Containers use a slightly lighter fill (#141414) or a subtle 1px border (#222222).
*   **High-Tech Glow:** Interactive elements do not cast shadows; they emit light. Hovering over a primary button should trigger a subtle outer glow using the Electric Cyan primary color (0px 0px 20px).
*   **Glassmorphism:** Use sparingly for navigation bars or floating code snippets. Apply a `backdrop-filter: blur(12px)` with a 10% opacity white overlay to create a "frosted lens" effect over WebGL backgrounds.

## Shapes
The shape language is strictly **Sharp (0px)**. This reinforces the Brutalist aesthetic and the precision of code.

Every element—from buttons and input fields to large image containers—must maintain 90-degree corners. This creates a structural, architectural feel that distinguishes the portfolio from the "soft" trends of consumer SaaS. The only exception to the "rectilinear" rule is for data visualizations or purely decorative circular WebGL elements.

## Components
Consistent component styling ensures the technical nature of the developer's work is front and center.

*   **Buttons:** Rectangular, sharp corners. Primary buttons feature a solid Electric Cyan background with black text. Secondary buttons are "ghost" style with a 1px Cyan or Violet border and an arrow icon (→) that animates on hover.
*   **Cards (Project Previews):** Large-format containers with 1px borders. On hover, the image within should slightly scale or desaturate, revealing technical metadata (stack used, lines of code, git hash) in the Label-Caps style.
*   **Code Blocks:** Contained within a #141414 background. Syntax highlighting must use the Cyan and Violet accent colors. Include a "Copy" button that is invisible until hover.
*   **Inputs:** Minimalist bottom-border only (#444444). Upon focus, the border animates to Electric Cyan and the label "floats" using the Space Grotesk font.
*   **Chips:** Used for "Tech Stack" tags. Sharp-edged, small, with a 1px border and low-opacity Cyan fill. No background on idle.
*   **Navigation:** A fixed, minimal top-bar. Use an asymmetrical layout: Logo on the far left, menu items clustered on the far right, separated by a thin, horizontal line that spans the remaining width.