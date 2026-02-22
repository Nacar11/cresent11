---
trigger: always_on
---

# Magic UI Integration Standard - Masonic Lodge Project

You are a **Senior Front-End Developer** and **Senior UI/UX Designer**. This rule establishes the strict subset of Magic UI components allowed in the Masonic Lodge project.

---

## Core Philosophy

> **Minimalism & Solemnity**: This project requires a professional, sharp, and highly solemn aesthetic. You must NOT use playful, erratic, or wild animations. Magic UI is used **only** for the most elegant, subtle, and sophisticated effects. 

### Integration Hierarchy

1. **shadcn/ui Components** → Primary choice for strict, sharp, standardized UI.
2. **RESTRICTED Magic UI Elements** → Used sparingly for subtle, high-end polish (e.g., slow fades, elegant text reveals).
3. **Custom Framer Motion** → Strict linear/ease fades.

---

## STRICTLY BANNED Magic UI Components

Do **NOT** use any of the following playful or wild components under any circumstances:

❌ **BANNED**:
- `Confetti` (Playful)
- `Meteors` (Wild/Fantasy)
- `ScratchToReveal` (Gimmicky)
- `CoolMode` (Distracting)
- `NeonGradientCard` (Too loud/modern)
- `HyperText` (Hacker/Cyberpunk vibe)
- `PulsatingButton` (Too aggressive)
- `WarpBackground` (Sci-Fi)

---

## ALLOWED Magic UI Components

The following components may be used, provided their duration is slowed down and their easing is configured to be smooth and non-bouncy.

### 1. Text Animations (Subtle Only)

| Component | Use Case | Dalestaycation Application |
|-----------|----------|----------------------------|
| `BlurFade`| Elegant text reveals | Hero title, section headers (configured slow) |
| `TextAnimate`| Gentle fades | Welcome messages (must use `fade` or `blurIn` ONLY. No bounce) |
| `AnimatedShinyText`| Subtle highlight | "Contact Us", Lodge Name (use gold sheen) |

**Standard Reveal Animation (Slow & Solemn):**
```typescript
import { BlurFade } from "@/components/ui/blur-fade"

// Use for section content with very slow, respectful reveals
<BlurFade delay={0.2} duration={0.8} inView>
  <h2 className="font-serif text-3xl">Our History</h2>
</BlurFade>
```

### 2. Buttons & Cards

| Component | Use Case | Masonic Application |
|-----------|----------|---------------------|
| `MagicCard` | Spotlight effect | Used for Officer/Member cards (subtle gold or slate gradient only) |
| `ShinyButton` | Form submission | Simple glass/shine over a dark navy button |

**Amenity / Member Card Standard:**
```typescript
import { MagicCard } from "@/components/ui/magic-card"

<MagicCard 
  className="bg-white rounded-none border-slate-200"
  gradientColor="rgba(212, 175, 55, 0.05)" // extremely faint Masonic Gold
>
  {/* Content */}
</MagicCard>
```

### 3. Background Effects (Minimal)

| Component | Use Case | Masonic Application |
|-----------|----------|---------------------|
| `DotPattern` | Very faint structure | Used on About Us section at 5% opacity |
| `GridPattern` | Classic geometry | Used for landing background if no image is present |

---

## Animation Refinement Rules

When using any allowed Magic UI component:

1. **Zero Bounce**: Set any inherent spring settings to basic ease-out.
2. **Slow Down**: Multiply all default durations by 1.5x or 2x to ensure gravity and weight.
3. **Sharp Corners**: Override any `rounded-xl` or `rounded-full` defaults in Magic UI to `rounded-none` or `rounded-sm`.

---

## Quality Checklist

- [ ] I have verified NO banned components (Confetti, Meteors, etc.) are used.
- [ ] All `BlurFade` and `TextAnimate` instances are configured to be slow and solemn.
- [ ] Magic UI elements use strict colors (Navy, Gold, Slate, White).
- [ ] Element corners are sharp, not heavily rounded.
