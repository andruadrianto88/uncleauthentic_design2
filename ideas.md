# Uncle Authentic — Design Brainstorm

## Design Approach Options

<response>
<text>
**Approach A: "Hawker Modernism"**

- **Design Movement:** New Asian Minimalism — inspired by Singapore/HK hawker culture elevated through Scandinavian restraint
- **Core Principles:** Asymmetric editorial layouts; generous negative space; photography-first hierarchy; tactile warmth through texture
- **Color Philosophy:** Warm cream (#F5F0E8) canvas with deep charcoal (#2A2A2A) type, Signature Orange (#FF5E00) as the single energetic accent, and Plate Blue (#BCE3E8) as a calm, deliberate framing device. Palette evokes a well-worn wooden counter with clean ceramic plates.
- **Layout Paradigm:** Offset editorial grid — hero image bleeds edge-to-edge, text blocks sit asymmetrically over subtle wood-grain texture panels. Menu section uses a two-column split on desktop (tabs left, content right). Story section is a cinematic 60/40 split.
- **Signature Elements:** (1) Thin horizontal rule lines in orange as section dividers; (2) Circular blue plate "halos" behind food photography; (3) Subtle wood-grain SVG texture in storytelling sections
- **Interaction Philosophy:** Deliberate and unhurried — hover states lift cards with a soft shadow, tab transitions use a 200ms ease-in-out slide, accordion opens with a smooth height animation
- **Animation:** Fade-up entrance animations (opacity 0→1, translateY 20px→0) triggered by IntersectionObserver. No bouncing. Smooth 300ms ease-out.
- **Typography System:** Playfair Display (700, italic for hero headline) + DM Sans (400/500 for body). Headline tracking: -0.02em. Body line-height: 1.7.
</text>
<probability>0.08</probability>
</response>

<response>
<text>
**Approach B: "Ceramic & Craft" (SELECTED)**

- **Design Movement:** Contemporary Heritage — the visual language of artisan food studios (think Momofuku, Hawker Chan) applied to a local Adelaide institution
- **Core Principles:** (1) Photography is the hero — every layout decision serves the food image; (2) Restraint in decoration, richness in texture; (3) Warm-cool contrast between wood tones and the signature blue plate; (4) Mobile-first editorial rhythm that expands cinematically on desktop
- **Color Philosophy:** Off-white parchment (#FAF7F2) as the base — warmer than pure white, evoking aged recipe paper. Charcoal (#2A2A2A) for all type. Signature Orange (#FF5E00) reserved exclusively for CTAs and the logo mark. Plate Blue (#BCE3E8) as a recurring motif — circular backdrops, thin borders, and section accents. This warm-cool tension is the brand's visual heartbeat.
- **Layout Paradigm:** Full-bleed cinematic hero → contained editorial blocks with intentional asymmetry → desktop expands to multi-column with wide negative space. Avoids centered-everything syndrome by anchoring text to left rails.
- **Signature Elements:** (1) The "Blue Plate Circle" — a soft pale blue circular element that frames food photography throughout; (2) Lora italic for pull-quotes and subheadings, creating a handwritten-recipe feel; (3) Thin orange hairline borders on CTA buttons
- **Interaction Philosophy:** Tactile and considered — buttons have a subtle press-down effect (scale 0.98), menu tabs slide with an orange underline indicator, accordion items reveal with a smooth 250ms ease
- **Animation:** Entrance: fade-up (translateY 24px → 0, opacity 0 → 1, 400ms ease-out). Staggered children in menu cards. No auto-playing carousels. Parallax on hero image (subtle, 20% rate).
- **Typography System:** Lora (600, italic) for section headlines + DM Sans (400/500) for body. Hero headline in Playfair Display 700. Consistent scale: 48px hero → 32px section → 20px sub → 16px body.
</text>
<probability>0.09</probability>
</response>

<response>
<text>
**Approach C: "Night Market Glow"**

- **Design Movement:** Dark Luxe Street Food — the atmosphere of a premium late-night hawker stall, all deep charcoal surfaces and warm amber lighting
- **Core Principles:** Dark background makes food photography pop; amber/orange glow creates warmth; high contrast typography; neon-adjacent but restrained
- **Color Philosophy:** Deep charcoal (#1A1A1A) base, warm amber (#FF5E00) glows, cream (#F5F0E8) text, Plate Blue (#BCE3E8) as a cool counterpoint accent
- **Layout Paradigm:** Full-dark editorial with glowing orange CTAs; hero uses a dark overlay on the food image; menu cards have a subtle warm glow on hover
- **Signature Elements:** (1) Amber glow halos on section headers; (2) Dark card surfaces with warm borders; (3) Grain/noise texture overlay on hero
- **Interaction Philosophy:** Warm and inviting — hover states emit a soft orange glow, transitions are smooth and atmospheric
- **Animation:** Slow fade-ins (600ms), subtle scale on hover (1.02), glow pulse on CTA button
- **Typography System:** Playfair Display (700) for headlines + Inter (400) for body. White/cream text on dark backgrounds.
</text>
<probability>0.07</probability>
</response>

---

## Selected Approach: **B — "Ceramic & Craft"**

This approach best honors the brief's "Artisan Heritage" aesthetic while delivering a premium, mobile-first experience that converts visitors to direct orders. The warm-cool tension between wood tones and the blue plate motif is the brand's most distinctive visual asset.
