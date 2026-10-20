# Tesla Roadster: Visual & Interaction Architecture Specification

## 1. Executive Summary & Design Tenets
The official Tesla Roadster page is the benchmark for modern hypercar and cutting-edge product storytelling. It rejects conventional corporate brochure layouts and case-study columns in favor of:
1. **Total Full-Bleed Immersion**: Full-viewport visual plates that establish cinematic scale.
2. **Quantitative Metric Supremacy**: Engineering benchmarks (acceleration, top speed, range, torque) are positioned as central, unmissable hero figures.
3. **Ultra-Refined Editorial Rhythm**: High-contrast dark aesthetics (`#000000`, `#050505`), hairline white borders (`border-white/10`), whisper-light uppercase labels (`text-xs tracking-widest text-neutral-400`), and clean sans-serif typography.
4. **Focused Interactive Touchpoints**: Uncluttered call-to-action pills and streamlined reserve/inquiry flows.

---

## 2. Section-by-Section Anatomy

### Section 1: Hero Stage
- **Visual**: Full-screen cinematic backdrop of the Roadster in radiant red.
- **Top Bar**: Minimalist navigation bar with logo and primary links.
- **Center Headline**: "Roadster" in bold, uppercase typography.
- **Floating HUD (Bottom of Hero)**:
  - Metric 1: **1.9 s** — 0-60 mph
  - Metric 2: **+250 mph** — Top Speed
  - Metric 3: **620 mi** — Range
  - Metric 4: **10,000 Nm** — Wheel Torque
  - Primary Action: White border pill button ("Reserve Now")
  - Scroll indicator: Subtle animated arrow.

### Section 2: Exterior & Aerodynamic Architecture
- **Headline**: "Designed for Performance and Aero Efficiency"
- **Visual**: High-contrast studio angle emphasizing the sculpted rear diffuser and airflow channels.
- **Content**: An all-electric supercar that maximizes aerodynamic engineering down to every millimeter.

### Section 3: Interior & Cockpit Experience
- **Headline**: "Interior"
- **Visual**: Full-width wide-angle interior spread showing the 2+2 seating configuration, yoke steering wheel, and curved center screen.
- **Content**: The first supercar to seat four passengers with uncompromising minimalist aesthetics.

### Section 4: Removable Glass Roof
- **Headline**: "Glass Roof"
- **Visual**: Convertible open-air configuration with the lightweight glass roof stored cleanly in the trunk.
- **Content**: A lightweight, removable glass roof stores in the trunk for an open-air, convertible driving experience.

### Section 5: Engineering & Specs Grid
- **Headline**: "Specs"
- **Visual**: Clean 2-column or 3-column data table.
- **Metrics**:
  - Acceleration 0-60 mph: 1.9 s
  - Acceleration 0-100 mph: 4.2 s
  - 1/4 Mile: 8.8 s
  - Top Speed: Over 250 mph
  - Wheel Torque: 10,000 Nm
  - Mile Range: 620 miles
  - Seating: 4
  - Drive: All-Wheel Drive

### Section 6: Closing Conversion Hero
- **Visual**: Rear profile / track perspective.
- **Action**: "Reserve Now" with immediate reservation process and pricing details ($50,000 reservation deposit / $250,000 Founders Series).

---

## 3. Achtrex System Implementation Mapping
Achtrex applies these exact architectural and visual principles:
1. **Media Experience (`/media/together-towards-new-sustainable-goals`)**: Complete Tesla Roadster digital twin reproducing every section, asset, and specification with zero Wedoo leftovers.
2. **Project Detail Pages (`/projects/[slug]`)**:
   - 100vh Full-Bleed Hero with 3 key client/impact quantitative benchmarks.
   - 21:9 Ultra-Wide Performance spread.
   - Deep-dive technical/interaction section.
   - Comprehensive Engineering & Delivery Specs grid.
   - Minimalist closing conversion hero and concept navigation strip.
3. **Service Detail Pages (`/services/[slug]`)**:
   - Hero: Full-screen capability presentation with delivery metrics.
   - Section 2: Engineering architecture & pipeline.
   - Section 3: Full-width case study media plate.
   - Section 4: Capability & deliverables specification matrix.
   - Section 5: Enterprise partner engagement CTA.
