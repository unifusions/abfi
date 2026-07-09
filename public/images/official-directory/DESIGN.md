# Design System Document: The Administrative Athlete

## 1. Overview & Creative North Star
### Creative North Star: "The Digital Diamond"
This design system moves beyond the "standard dashboard" by treating the interface as a high-performance athletic environment. We reject the cluttered, line-heavy spreadsheets of the past in favor of a **Digital Diamond** approach: expansive, structured, and hyper-efficient. 

The aesthetic is **"Athletic Editorial."** It combines the unwavering authority of a national governing body with the kinetic energy of a live game. We achieve this through **intentional asymmetry**, where heavy headlines (`display-lg`) are balanced against precise, data-dense `label-sm` elements. By utilizing wide tracking and generous negative space, we create a layout that feels as organized as a box score but as premium as a luxury skybox.

---

## 2. Colors & Surface Philosophy
The palette utilizes high-contrast Navy (`primary`) and Red (`secondary`) to anchor the identity, but the "soul" of the system lives in the neutral transitions.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
*   **Definition:** Boundaries must be defined solely through background color shifts. A `surface-container-low` section sitting on a `surface` background provides enough contrast to guide the eye without creating "visual noise."
*   **Nesting:** Use the hierarchy of `surface-container-lowest` (pure white) for high-priority interactive cards, placed atop `surface-container` or `surface-dim` backgrounds. This creates a tactile, layered feel—like a pristine jersey resting on the turf.

### Glass & Gradient (The Polish)
To avoid a "flat" corporate look:
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` at 80% opacity with a `20px` backdrop-blur. This ensures the vibrant `primary` or `secondary` elements underneath bleed through softly.
*   **Signature Gradients:** Use a subtle linear gradient (from `primary` to `primary_container`) for main Action Buttons and Hero Metric Cards. This mimics the slight sheen of a polished wooden bat or a leather glove.

---

## 3. Typography
We utilize a dual-typeface system to balance "The Game" and "The Office."

*   **Public Sans (Display & Headlines):** Used for all `display` and `headline` roles. Its geometric rigors convey the "National Federation" authority. Use `display-lg` (3.5rem) with `-0.02em` letter spacing for hero stats to create an "Editorial" impact.
*   **Inter (UI & Data):** Used for `title`, `body`, and `label` roles. Inter is optimized for the high-density data required for player registries and financial tables.
*   **The Hierarchy:** Pair a `headline-sm` title in Navy (`primary`) with a `label-md` uppercase subtitle in Red (`secondary_container`) to create an immediate sense of importance and "Official Record" status.

---

## 4. Elevation & Depth
In this system, depth is a function of light and layering, not "boxes."

*   **Tonal Layering:** Stack surfaces. For example:
    *   **Level 0 (Base):** `surface` (#f8f9fa)
    *   **Level 1 (Section):** `surface_container_low` (#f3f4f5)
    *   **Level 2 (Active Card):** `surface_container_lowest` (#ffffff)
*   **Ambient Shadows:** For floating elements, use a "Stadium Light" shadow. `on_surface` color at 4% opacity, with a `32px` blur and `16px` Y-offset. It should feel like a soft glow, not a dark edge.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use `outline_variant` at **15% opacity**. It must be barely perceptible—a "whisper" of a boundary.

---

## 5. Components

### High-Level Metric Cards
Forbid standard boxes. Use a `surface_container_lowest` background. 
*   **The Signature Element:** A 4px vertical "accent stripe" on the left edge using `secondary` (Red) or `primary` (Navy).
*   **Content:** Large `display-sm` value in `on_surface`, paired with a `label-sm` title in `on_surface_variant`.

### Data Tables (The "Stat-Sheet" Style)
*   **No Dividers:** Remove all horizontal and vertical lines.
*   **Alternating Tones:** Use `surface_container_low` for zebra-striping.
*   **Header:** `primary` background with `on_primary` text. Use `label-md` in all-caps for column headers to imply a professional scouting report.

### Status Badges (Pills)
Use the `full` roundedness token.
*   **'Registered' (Active):** `primary_fixed` background with `on_primary_fixed` text.
*   **'Pending':** `surface_variant` background with `on_surface_variant` text.
*   **'Alert/High-Action':** `secondary_fixed` background with `on_secondary_fixed_variant` text.

### Buttons
*   **Primary:** `primary` fill, `on_primary` text. Radius: `md` (0.375rem). Add a subtle `primary_container` inner-shadow on the bottom 2px for "weight."
*   **Tertiary:** No background. Use `primary` text with an icon. On hover, apply a `surface_variant` background at 50% opacity.

---

## 6. Do’s and Don'ts

### Do
*   **DO** use whitespace as a separator. If elements feel too close, increase the spacing from `8` (1.75rem) to `10` (2.25rem).
*   **DO** use `secondary` (Red) sparingly as a "heat" color—for critical alerts or primary calls to action.
*   **DO** ensure all data-heavy labels use the `inter` font for maximum legibility at small sizes.

### Don't
*   **DON'T** use 100% black. Use `on_surface` (#191c1d) for text to maintain a premium, ink-like feel.
*   **DON'T** use shadows on every card. Only shadow the "Active" or "Floating" state; keep the rest of the dashboard grounded in Tonal Layering.
*   **DON'T** use standard blue links. Use `primary` with a 2px `surface_tint` underline for a bespoke, authoritative feel.