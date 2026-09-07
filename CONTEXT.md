# AI Alchemist Portfolio

A dark, cinematic static portfolio ("Digital Noir Alchemist") for Youssef Abdulaziz, a frontend engineer. Renders his identity, experience, skills, and projects as a single-page scroll experience with structural scroll-reveal animations. It exists to present his craft and lead visitors to contact him.

## Language

**Portfolio**:
A single-page, presentational site presenting Youssef's work. The product itself — not a collection of projects.
_Avoid_: Website, app

**Section**:
One of the five stacked screen-blocks of the portfolio (Hero, About, Skills, Work, Contact). Each is a scroll target with a numbered monospace marker.
_Avoid_: Page, Route

**Hero**:
The first full-viewport section. Holds the name, the "Crafting Interfaces That Think." headline, a rule label, CTA buttons, and the abstract animated visual.
_Avoid_: Header, Top section

**Rule**:
A faint monospace, uppercase, letter-spaced label that brands a section (e.g. `FRONTEND ENGINEER`, `— Frontend Developer & Product Thinker`).
_Avoid_: Label, Tag

**Profile**:
The set of public facts about Youssef rendered in the portfolio: contact (email, GitHub, LinkedIn), experience entries, skills/tools, and projects.
_Avoid_: Data, Content, Resume

**Experience Entry**:
One employer stint shown in the About/Philosophy section — company, role, dates, and a summary of work.
_Avoid_: Job, Employer, Work history

**Skill**:
A single capability or tool displayed as a pill-shaped tag in the Skills section. Grouped into clusters.
_Avoid_: Tag (when used broadly), Technology, Stack item

**Tool Cluster**:
One visually-grouped set of skills in the Skills section, headed by a faint monospace label (e.g. "Frontend Core", "Ecosystem").
_Avoid_: Category, Group

**Project**:
A real shipped or featured piece of work showcased in the Work section as a card, with a name, one-line description, tech-stack pills, a status, and an optional link.
_Avoid_: Case study, Portfolio item

**Status**:
A project's lifecycle indicator color-coded as Shipped / In Progress / Concept.
_Avoid_: State, Phase, Badge

**CTA**:
A call-to-action button in the Hero ("View Work", "Contact Me").
_Avoid_: Button, Link

**Reveal**:
A scroll-triggered animation state — an element starts hidden and gains a class when it enters the viewport via Intersection Observer.
_Avoid_: Animation, Transition, Fade-in
