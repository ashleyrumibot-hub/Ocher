# The Taste Framework

**By Boz Zou** · v1 · 2026-04-08

> A rigorous, repeatable process for dissecting any visual corpus — a moodboard, a single site, a designer's body of work, a brand campaign — and translating it into a transferable creative system you can actually build from.

**Purpose:** Most "inspiration" is passive. You scroll, you save, you forget. This framework is the opposite — it's the machinery for converting reference material into **knowledge you can operate with**. The output of the framework is not a gallery; it's a *kit of parts* plus a list of *principles* plus a set of *refusals* plus a set of *drills*. With that kit you can go make work at the same calibre as the reference.

---

## Theoretical Grounding

This framework stands on five intellectual shoulders:

1. **Erwin Panofsky's Iconological Method (1932)** — the three-layer model for interpreting images: pre-iconographic (what's literally depicted), iconographic (conventional meaning), iconological (intrinsic cultural/ideological content). Originally for Renaissance painting; applies cleanly to any visual artifact.
2. **Roland Barthes' Semiotic Triad** — denotation, connotation, myth. The literal sign, its cultural associations, and the ideological worldview it naturalizes. Barthes specifically extended this to advertising, photography, and mass-media imagery.
3. **Pierre Bourdieu's Habitus / Taste** — taste is not innate; it is a socially-conditioned grammar. Decoding taste means decoding the audience, class, subculture, and era it's speaking to.
4. **K. Anders Ericsson's Deliberate Practice** — expertise comes from focused, feedback-driven repetition on specific weaknesses, not from volume. Internalizing taste requires drills, not scrolling.
5. **Art-director moodboard practice** — every effective moodboard image answers a specific design question. The image is not "inspiration"; it is *evidence* for a claim.

The framework fuses these: it uses formal analysis for evidence-capture, semiotic/iconological layers for decoding, habitus-thinking for audience-modeling, and deliberate-practice drills for internalization.

---

## The Eight Phases

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ 1 GATHER │→ │ 2 ATOMIZE│→ │ 3 DECODE │→ │ 4 PATTERN│
└──────────┘  └──────────┘  └──────────┘  └──────────┘
                                                 ↓
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ 8 CRITIQUE│← │ 7 DRILL │← │ 6 SYSTEM │← │5 PRINCIPLE│
└──────────┘  └──────────┘  └──────────┘  └──────────┘
       ↺ (loop back to GATHER with refined questions)
```

Phases 1–4 are *analysis*. Phases 5–8 are *synthesis*. Skipping any phase makes the output a moodboard, not a framework.

---

## PHASE 1 — GATHER

**Goal:** Collect raw material with enough resolution to analyze, not just admire.

### Capture rules

- **Capture live state, not just screenshots.** For a website, pull the actual computed CSS (font-family, font-size, color, spacing) via devtools. Screenshots lie about rendering; CSS is ground truth.
- **Capture verbatim text.** Pull headlines, metadata, captions, navigation labels, button copy, footer text. Voice is part of taste.
- **Capture the full hierarchy.** Hero + body + footer, not just the pretty bits. The "boring" parts reveal discipline.
- **Capture the negative space.** Note what's *not* there. No carousel. No hero image. No gradient. Refusals are data.
- **Capture context.** Who is the designer? Who is the client? When was it made? What industry? Taste only makes sense when situated.
- **Wide net before narrow net.** 15–30 references before you start filtering. Pattern recognition needs volume.

### Minimum artifacts for a single-site capture

| Artifact | Why it matters |
|---|---|
| Full-page screenshot (fullPage=true) | Overall rhythm, density, proportion |
| Above-fold viewport screenshot | First-impression composition |
| Computed CSS for `body` and `h1` | Ground-truth typography |
| Verbatim pull quotes (5+) | Voice, tone, diction |
| Image inventory (URLs + count) | Imagery treatment pattern |
| Color swatches sampled from shell + content | Shell/content palette split |
| Navigation text (all labels) | Information architecture |
| Metadata rail (author, date, client) | Situating the work |

### Anti-patterns

- ❌ Saving images to Pinterest without notes — retrieval is impossible
- ❌ Analyzing rendered thumbnails instead of live pages
- ❌ Trusting AI-summarized descriptions of a page (they hallucinate fonts and colors)
- ❌ Stopping at 5 references when 20 would reveal the actual pattern

---

## PHASE 2 — ATOMIZE (Formal Analysis)

**Goal:** Break every reference into its elemental components so you can compare like-for-like across the corpus.

This is **pre-iconographic description** in Panofsky's terms — what is literally there, before any interpretation.

### The 12 Atoms of Visual Taste

For each reference, record the following atoms. Be *specific*. "Minimalist" is not an atom; "JetBrains Mono 12px 400 uppercase #000 on #FFF" is.

**1. TYPOGRAPHY**
- Family/families (exact names, not "sans-serif")
- Size scale (all observed sizes)
- Weight scale (all observed weights)
- Casing (upper/lower/sentence/mixed)
- Tracking & leading
- Hierarchy device — *how* is hierarchy signaled? (size? color? position? weight? rule lines? numbering?)

**2. COLOR**
- Shell palette (frame colors)
- Content palette (imagery/artifact colors)
- Accent discipline — how many colors in how many roles?
- Black & white discipline — pure #000/#FFF or warmed?
- Where does color do emotional work vs structural work?

**3. LAYOUT & GRID**
- Column count & gutter
- Asymmetric or symmetric?
- Left-weighted / centered / right-weighted?
- Fixed-width or fluid?
- Rhythm (how often does content repeat a proportion?)

**4. SPACE**
- Margin generosity (tight / moderate / generous / extreme)
- Whitespace philosophy — is space a design element or just a gap?
- Vertical rhythm — consistent baseline?
- Density (characters per viewport)

**5. IMAGERY**
- Treatment (full-bleed / bordered / rounded / cropped / floating)
- Aspect ratios used
- Subject matter (product / environmental / illustration / 3D / photo / mixed)
- Color treatment (natural / duotone / desaturated / brand-tinted)
- Caption policy (always / never / sparingly)
- Image density (how many images per screen)

**6. MOTION & INTERACTION**
- Entrance reveals (fade / scale / slide / none)
- Easing curves & durations
- Hover behaviors
- Scroll behaviors (native / tracked / jacked)
- "Heartbeat" elements (ticking clocks, typing cursors, status dots)
- Mobile vs desktop motion differences

**7. VOICE & COPY**
- Person (1st / 3rd)
- Casing in prose
- Adjective density (marketing-heavy vs terse)
- Sentence length distribution
- Verb vocabulary (action verbs vs abstraction)
- Signature phrases — pull 5+ verbatim

**8. ICONOGRAPHY & ORNAMENT**
- Icons used? Style? Weight?
- Decorative elements (rules, dots, dashes, borders)
- Logotype treatment
- Repeating motifs derived from brand mark

**9. MATERIALS & TEXTURE**
- Flat / skeuomorphic / glass / paper
- Gradients (if any) — discipline and purpose
- Shadow discipline
- Noise / grain

**10. INFORMATION ARCHITECTURE**
- Navigation pattern (flat / nested / mega-menu / hidden)
- Number of top-level destinations
- Homepage strategy (index / hero / narrative)
- Contact pattern (form / email / copy-to-clipboard / hidden)
- Footer philosophy (sitemap / minimal / footer-as-header)

**11. PACING & NARRATIVE**
- Case-study structure (metadata → summary → images; or hero → problem → solution)
- Ratio of image to text
- One-argument-per-piece vs encyclopedic
- Where are the cuts / transitions?

**12. REFUSALS**
- The negative-space inventory. What is conspicuously absent?
- Carousels? Hero banners? Accent colors? Forms? Captions? Gradients? Illustrations? Animations? Taglines?
- The refusal list is often the most revealing data in the entire analysis.

### Output format per reference

Create a table. One row per atom. One column per reference. When you line up 15 references this way, the signature becomes visible.

---

## PHASE 3 — DECODE (Semantic Layers)

**Goal:** Interpret meaning at three depths, borrowed from Panofsky and Barthes.

Phase 2 was "what's there". Phase 3 is "what does it mean, why does it work, who is it talking to".

### Layer 1 — Denotation / Pre-Iconographic

The literal sign. *"A black square in the top-left corner containing the letters STEVEN HANLEY in JetBrains Mono."* This is just Phase 2 observations re-stated as descriptive sentences.

### Layer 2 — Connotation / Iconographic

The conventional meaning. What visual traditions does this image belong to? What cultural codes is it speaking?

Questions to ask:
- What genre does this work belong to? (Brutalist web, Swiss modernist, Y2K, editorial, cyberpunk, quiet-luxury, etc.)
- What other works does this echo? Trace the lineage.
- What tools, software, and subcultures does this aesthetic live in? (Linear, Vercel, Are.na, Read.cv, Framer's default templates, etc.)
- If I saw this out of context, what era / community / client type would I place it in?
- What does the typeface *connote* independent of the words? (Mono = engineering. Serif = editorial. Neo-grotesk = Swiss. Script = luxury. Display = youth.)

### Layer 3 — Myth / Iconological

The ideological work the design is doing. What worldview is it asserting as natural? Who is it for? Whose taste is it validating? Whose taste is it excluding?

Questions to ask:
- **Audience:** Who is meant to feel recognized here? (Recruiters? Founders? Collectors? Engineers? Gen Z? Boomers?)
- **Taste-class:** What kind of person has "good taste" in this worldview? (Bourdieu's habitus question.)
- **Refusal politics:** The refusals are an ideology. "No hero banner" says "I'm not desperate for attention." "No gradient" says "I'm not chasing trends." What is the refusal list *arguing*?
- **Values asserted:** Seriousness? Play? Craft? Speed? Restraint? Abundance? Status? Accessibility?
- **Values excluded:** What does this work actively dislike? What would feel vulgar *in this world*?
- **Myth:** What story is the design telling about its maker? ("I am a senior. I am booked. I ship. I hand off to dev.")

Every successful design naturalizes a worldview. Making that worldview explicit is the heart of taste analysis.

### Key question for Layer 3

> **"If this design were a person, what would they refuse to wear?"**

Answering that question in one sentence cracks the iconological layer open.

---

## PHASE 4 — PATTERN (Cross-Reference)

**Goal:** Move from individual references to the corpus-level signature.

Take your atomized references (Phase 2) and decoded interpretations (Phase 3) and look across them.

### Four searches

**1. REPETITIONS.** What atoms recur across all references?
- Same typeface family? Same color discipline? Same image treatment?
- Consistent refusals across all pieces?
- A recurring motif (numbered indices, metadata rails, ticking clocks)?
Repetition across a corpus = the actual taste DNA.

**2. REFUSALS.** What is consistently absent across the whole corpus?
- Write a "forbidden list" — every element that never appears.
- This list is often more definitive than the list of things that *do* appear.

**3. TENSIONS.** What surprising contradictions hold the work together?
- A brutalist shell around lush cinematic content.
- Playful copy in a serious frame. Serious copy in a playful frame.
- Tensions are where the work becomes memorable. Without tension, work is merely correct.

**4. SIGNATURE GESTURES.** What 1–3 moves are unique to this maker/corpus?
- Gestures that would identify the work even if you removed every label.
- "Same size for H1 and body." "Two spears form the S." "Ticking clock in the footer."
- Signatures are the fingerprint of taste.

### Output

A single paragraph: "The signature of this corpus is X, achieved through Y, defended by refusing Z." If you cannot write that sentence, go back to Phase 2.

---

## PHASE 5 — PRINCIPLES (Extract Rules)

**Goal:** Convert the corpus-level signature into transferable rules you can apply to new work.

### The Principle Contract

Each principle must be written in this format:

> **[RULE]** — *[WHY]* — *[WHEN TO APPLY]*

- **RULE:** an imperative. "Shell and content never share a color." Not a platitude.
- **WHY:** the reasoning. Without the why, you cannot judge edge cases.
- **WHEN TO APPLY:** the scope. When does this rule kick in? When does it not?

### Rules for writing principles

1. **Aim for 5–10 principles.** Fewer than 5 = you haven't dug. More than 10 = you haven't prioritized.
2. **Each principle must be actionable.** "Be restrained" is not a principle. "One font family, one size, one weight" is.
3. **Pair each positive principle with a refusal.** Positive rules tell you what to do; refusals tell you what never to do. Refusals are half of taste.
4. **Test each principle against an edge case.** If you can break your own rule in 30 seconds, it's not a rule.
5. **Each principle should explain at least one specific reference.** If the principle doesn't map to a real artifact in the corpus, it's speculation.

### The Refusal List

Parallel to your principles, keep an explicit list of things the taste *never does*. A refusal list with 10–20 items is a sharper identity than a mission statement.

---

## PHASE 6 — SYSTEM (Build a Reusable Kit)

**Goal:** Turn the principles into tokens and templates you can hand to yourself (or a team) and get work at the reference calibre.

### The Kit has five parts

**1. TOKENS** — exact values you can copy into code or Figma
- Type scale (families, sizes, weights, line heights, letter-spacing)
- Color palette (roles + hex)
- Spacing scale
- Radius, shadow, border
- Motion durations + easings

**2. COMPONENTS** — the recurring structural pieces
- Metadata rail
- Case-study page template
- Index/list component
- Hero treatment (or the explicit refusal of one)
- Navigation pattern
- Footer pattern

**3. VOICE GUIDE** — how the words work
- Casing rules
- Sentence length targets
- Forbidden adjectives
- Verb vocabulary
- Example sentences (pulled verbatim from the corpus)

**4. IMAGE DIRECTION BRIEF** — how imagery must look
- Subject matter rules
- Treatment rules (bleed, aspect, color, caption policy)
- Example shot list

**5. THE REFUSAL LIST** — every element that is banned
- Keep it visible while working
- When stuck, consult it before adding anything

### The Deliverable

A single document (HTML, PDF, or Figma page) that contains all five parts in one place. Not five separate files. The kit is only useful if it can be opened in one click.

---

## PHASE 7 — DRILL (Deliberate Practice)

**Goal:** Internalize the taste through focused repetition on specific weaknesses.

Ericsson's research on expertise is unambiguous: passive exposure does not build skill. You must practice the specific moves, get feedback, and iterate on your weak points.

### Drill types

**1. COPY EXERCISE.** Redraw one reference from memory. Compare against the original. What did you get wrong? That gap is the drill target.

**2. CONSTRAINT EXERCISE.** Build something in *your* style but forced through the reference's constraints.
- Example: "Build my personal site using only one font, one size, one weight, B&W."
- The constraint reveals what you reflexively reach for that the reference refuses.

**3. REFUSAL DRILL.** Take any recent piece of your work and apply the reference's refusal list to it. What would you cut? Cut it. See if the piece gets stronger.

**4. TRANSLATION DRILL.** Take a piece of work from a totally different category (a startup landing page) and translate it into the reference's visual language. This tests whether you've understood the *principles* vs. just the surface.

**5. ONE-ATOM ISOLATION.** Pick a single atom (say, "hierarchy device") and design five versions of the same content that each use only that atom to create hierarchy. Forces you to master one variable at a time.

**6. VOICE COPY.** Rewrite your most recent client brief in the reference's voice. This reveals your own verbal reflexes and where they diverge.

### Feedback

Every drill needs a comparison point. Without comparison, you cannot see what you're missing. Always pair a drill with:
- The original reference
- A specific question ("Does mine have the same density? The same rhythm? The same refusals?")
- A gap statement ("Mine has gradients; the reference never uses gradients. Cut gradients.")

---

## PHASE 8 — CRITIQUE (Apply & Iterate)

**Goal:** Ship work, compare to reference, note gaps, refine the framework.

### The critique loop

1. **Produce** a new piece using the kit from Phase 6.
2. **Set it beside** two or three reference pieces from the original corpus.
3. **Walk the 12 atoms.** On each atom, rate: *matches the reference / drifts / contradicts.*
4. **Write the delta.** "Mine is looser on spacing; mine borrows color into the shell; mine has captions where the reference would have none."
5. **Choose one delta to close.** Not all of them — just the highest-leverage one.
6. **Iterate.** Ship v2 with that delta closed.
7. **Log the lesson.** Add it to your principles as a new rule or refine an existing one.
8. **Loop back to Phase 1** with sharpened questions. Go gather more references with a better filter.

### When to stop

Not when the work "matches" the reference — that's copying. Stop when you can produce work that *the original maker would recognize as kin without being able to tell you made it.* That's internalization. That's when taste has transferred.

---

## Meta-Principles

A few rules that apply to the whole framework, not any one phase:

1. **Never trust your first impression.** The pre-iconographic phase exists because the brain skips straight to interpretation. Discipline yourself to describe before you judge.
2. **Never trust AI-summarized descriptions of visuals.** They hallucinate fonts, colors, and moods. Always verify from the live artifact.
3. **The refusals are the soul.** If you only capture what the reference *has*, you miss half. What it refuses is the other half.
4. **One sentence beats one paragraph.** If you can't reduce the signature to one sentence, you haven't finished.
5. **Taste is situated.** A design that is brilliant for recruiters at senior product roles is wrong for a community nonprofit. Always hold the audience in mind.
6. **Taste compounds.** Every corpus you fully decode with this framework sharpens the filter for the next one. After 5 corpuses you will see taste the way a sommelier sees wine.
7. **Ship the drill, not the essay.** The point of the framework is to make work, not to have a pretty document. Every phase exists in service of Phase 8.

---

## Quick-reference template

When running the framework on a new corpus, copy this skeleton:

```
CORPUS: [name]
DATE: [date]
REFERENCES GATHERED: [count]

PHASE 1 — GATHER
  Sources: [urls]
  Artifacts: [what was captured]

PHASE 2 — ATOMIZE
  [12-atom table per reference]

PHASE 3 — DECODE
  Denotation: [literal description]
  Connotation: [traditions, codes, genre]
  Myth: [worldview, audience, refusal politics]

PHASE 4 — PATTERN
  Repetitions: [list]
  Refusals: [list]
  Tensions: [list]
  Signature gestures: [list]
  Signature sentence: "The signature of this corpus is X, achieved through Y, defended by refusing Z."

PHASE 5 — PRINCIPLES
  1. [RULE] — [WHY] — [WHEN]
  ...
  Refusal list:
  - Never [X]
  ...

PHASE 6 — SYSTEM
  Tokens: [type, color, space, motion]
  Components: [list]
  Voice guide: [rules + examples]
  Image brief: [rules + shot list]
  Refusal list: [carried from Phase 5]

PHASE 7 — DRILL
  Planned drills: [list]
  Completed drills + gaps found: [log]

PHASE 8 — CRITIQUE
  Work produced: [artifact]
  Deltas from reference: [list]
  Delta closed in next iteration: [one]
  Principle added/refined: [text]
```

---

## When to use this framework

- Decoding a designer's body of work (e.g. Steven Hanley, Massimo Vignelli, Paula Scher)
- Decoding a brand campaign (e.g. Off-White, A24, Aesop)
- Decoding a moodboard for a new project before execution
- Decoding a competitor before a pitch
- Decoding your own past work to discover your own taste signature
- Auditing a design system for hidden rules

## When *not* to use this framework

- When you're sketching for fun (don't overthink play)
- When the reference is a single image with no corpus (not enough volume to pattern)
- When you're under one hour and need to ship (use a lightweight moodboard instead)
- When you need raw novelty (the framework internalizes existing taste; it does not generate new ones)

---

## References & further reading

- Panofsky, Erwin. *Studies in Iconology* (1939) — the source for the three-layer visual interpretation model.
- Barthes, Roland. *Mythologies* (1957) and *Image-Music-Text* (1977) — denotation, connotation, myth applied to mass media imagery.
- Bourdieu, Pierre. *Distinction: A Social Critique of the Judgement of Taste* (1979) — taste as habitus.
- Ericsson, K. Anders. *Peak: Secrets from the New Science of Expertise* (2016) — deliberate practice.
- Neumeier, Marty. *The Brand Gap* — brand as conceptual seed.
- Alexander, Christopher. *A Pattern Language* (1977) — pattern-based design thinking.
- Sontag, Susan. *Notes on "Camp"* (1964) — on how to write about taste as a sensibility.
- Vignelli, Massimo. *The Vignelli Canon* — disciplined typographic thinking.

---

*A framework is not a substitute for taste — it is the scaffolding that lets taste become portable.*
