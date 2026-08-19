You are a senior UI/UX designer, frontend architect, and website engineer specializing in premium portfolio experiences.

Your task is to DESIGN AND DEVELOP an end-to-end, production-ready personal portfolio website for a UI/UX Website Engineer and Frontend Developer.

Do not create a generic developer portfolio or simply assemble common template sections. Approach this as a real client project: establish a coherent visual system, information hierarchy, responsive behavior, interaction language, and implementation architecture before building the final experience.

Refer to all the markdown files provided for clarity.

Incorporate all the open design skills and MCP servers required to design and code the website in first place.

==================================================

1. # BUSINESS OBJECTIVES

The portfolio has four primary goals:

1. Help me get hired for UI/UX Website Engineer and Frontend Developer roles.
2. Generate qualified freelance inquiries.
3. Showcase my best projects and demonstrate how I think and work.
4. Establish a memorable and credible personal brand.

Primary audiences:

- Employers
- Technical and design hiring managers
- Recruiters
- Potential freelance clients

The website should quickly communicate:

- Who I am
- What I specialize in
- What value I provide
- The quality of my work
- My technical and design capabilities
- How to hire or contact me

Optimize the experience for visitors who may initially spend only 30–60 seconds evaluating the portfolio.

# ================================================== 2. CREATIVE DIRECTION

Create a visual identity that feels:

- Minimal
- Premium
- Professional
- Modern/futuristic
- Highly polished
- Clean rather than sterile
- Distinctive without being distracting

Use a LIGHT visual theme.

I currently have no predefined brand colors, typography, or design system. Create an appropriate visual identity for me.

Develop:

- Primary and secondary color palette
- Neutral/background palette
- Accent color
- Typography system
- Type scale
- Spacing system
- Border and radius system
- Button styles
- Card styles
- Icon treatment
- Grid/layout rules
- Motion principles
- Interactive states

Avoid:

- Generic portfolio-template aesthetics
- Excessive gradients
- Excessive glassmorphism
- Overuse of floating cards
- Unnecessary 3D effects
- Excessive shadows
- Distracting animations
- Visual clutter
- Gimmicky interactions
- Poorly justified trendy UI patterns

Use whitespace, typography, composition, subtle depth, restrained color, and purposeful motion to create a premium experience.

# ================================================== 3. INFORMATION ARCHITECTURE

Build the following sections in a logical storytelling order:

1. Navigation
2. Hero
3. About
4. Skills / Capabilities
5. Experience
6. Featured Projects
7. Services
8. Testimonials
9. Resume / CV
10. Contact
11. Footer

NAVIGATION
Create a polished responsive navigation with:

- Personal logo/wordmark
- Section navigation
- Resume access
- Primary contact CTA
- Mobile navigation

HERO
The hero should immediately establish:

- My role
- My specialization
- A concise value proposition
- Primary CTA
- Secondary CTA
- Relevant social/professional links

Do not use vague copy such as:
"I create amazing digital experiences."

Write specific, credible positioning appropriate for a UI/UX Website Engineer and Frontend Developer.

ABOUT
Communicate:

- Professional background
- Design + engineering mindset
- What differentiates me
- How I approach creating digital products
- Professional photo where appropriate

SKILLS
Present capabilities in a structured and readable way.

Potential categories:

- UI/UX
- Frontend Engineering
- Frameworks
- Styling
- Motion / Interaction
- Design Tools
- Developer Tools
- Performance / Accessibility

Avoid meaningless progress bars or arbitrary percentages.

EXPERIENCE
Design a clear professional experience section showing:

- Position
- Organization
- Dates
- Responsibilities
- Outcomes / impact
- Technologies or capabilities used

PROJECTS
Projects are one of the highest-priority parts of the website.

Support:

- Featured projects
- Project thumbnails
- Project category
- Role
- Short project overview
- Technology stack
- Key results where available
- Project filtering
- Live project link
- Repository link when applicable
- Case study/details

Project filters might include:

- All
- UI/UX
- Frontend
- Web Applications
- Websites

Structure projects as mini case studies where enough information is available:
Problem → Role → Approach → Solution → Outcome.

SERVICES
Present freelance services clearly, such as:

- UI/UX Design
- Frontend Development
- Responsive Website Development
- Design-to-Code Implementation
- Website Redesign
- Interaction / Motion Design
- Performance and Accessibility Improvements

TESTIMONIALS
Design a credible testimonial area containing:

- Quote
- Person
- Position
- Company
- Optional photo

Never fabricate testimonials.

RESUME
Include:

- Resume summary
- Relevant experience/credentials
- Prominent downloadable CV/resume action

CONTACT
Create a high-conversion contact experience for both hiring and freelance opportunities.

Include:

- Concise CTA
- Email
- Contact form
- Social links

Contact form fields:

- Name
- Email
- Company (optional)
- Project / inquiry type
- Message

Include validation, loading, success, and error states.

FOOTER
Include:

- Name/brand
- Short positioning statement
- Relevant navigation
- Social profiles
- Contact
- Copyright

# ================================================== 4. CONTENT STRATEGY

I have:

- A professional bio
- Project descriptions
- Resume/CV
- Photos

Create the architecture so my real content can be inserted cleanly.

If actual information has not been supplied:

- Use clearly identifiable placeholder content.
- Do NOT invent employment history, clients, awards, metrics, testimonials, qualifications, or project outcomes.
- Keep placeholder copy realistic enough to demonstrate the design.
- Make content easy to replace later.

Write concise, confident, professional copy.

Prioritize outcomes and value over buzzwords.

# ================================================== 5. UX REQUIREMENTS

The portfolio must be:

- Mobile-first
- Fully responsive
- Easy to scan
- Keyboard accessible
- Touch friendly
- Visually hierarchical
- Conversion focused

Create intentional experiences for:

- Mobile
- Tablet
- Laptop
- Large desktop

Do not merely shrink the desktop layout for mobile.

Account for:

- Navigation changes
- Content reordering
- Text wrapping
- Grid changes
- Touch target sizes
- Image sizing
- Project-card behavior
- Form usability

# ================================================== 6. ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Implement:

- Semantic HTML
- Logical heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible navigation
- Proper form labels
- Useful alt text architecture
- ARIA only when necessary
- Sufficient color contrast
- Accessible error messaging
- Screen-reader-friendly interactions
- Minimum appropriate touch targets

Respect:
prefers-reduced-motion

The site must remain usable when animation is reduced or disabled.

# ================================================== 7. MOTION AND INTERACTION

Use Framer Motion for purposeful, restrained animation.

Potential interactions:

- Hero entrance
- Scroll reveals
- Navigation transitions
- Button interactions
- Project hover states
- Filtering transitions
- Section transitions
- Image reveals
- Micro-interactions

Motion should reinforce hierarchy and feedback rather than exist purely for decoration.

Avoid:

- Excessive parallax
- Scroll hijacking
- Long intro animations
- Custom cursors that reduce usability
- Animating every element
- Effects that harm performance

# ================================================== 8. TECHNICAL STACK

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion

Use the current stable Next.js architecture and modern best practices.

Prefer:

- App Router
- React Server Components where appropriate
- Client Components only when interactivity requires them
- Reusable TypeScript components
- Strong typing
- Data-driven repeated content
- Clean component boundaries
- Maintainable folder structure
- Minimal dependencies

Avoid unnecessary packages.

# ================================================== 9. COMPONENT ARCHITECTURE

Build reusable components where appropriate, including concepts such as:

- Navbar
- MobileMenu
- SectionContainer
- SectionHeading
- Button
- ProjectCard
- ProjectFilter
- ExperienceItem
- SkillGroup
- ServiceCard
- TestimonialCard
- ContactForm
- SocialLinks
- Footer
- Motion wrappers/utilities

Keep project, experience, service, skill, testimonial, and social data separate from presentational UI when practical.

Do not create unnecessary abstraction for tiny one-off elements.

# ================================================== 10. SEO

Implement strong technical and on-page SEO.

Include:

- Page title strategy
- Meta description
- Canonical URL architecture
- Open Graph metadata
- Twitter/X metadata
- Semantic HTML
- Correct heading hierarchy
- Search-friendly content structure
- robots.txt
- sitemap.xml
- Appropriate structured data/schema

Consider relevant schema such as:

- Person
- WebSite
- CreativeWork / SoftwareSourceCode when appropriate

Do not add inaccurate structured data.

# ================================================== 11. PERFORMANCE

Target excellent Core Web Vitals and Lighthouse results.

Optimize:

- Images
- Fonts
- JavaScript
- CSS
- Animation
- Component loading
- Third-party scripts

Use:

- next/image where appropriate
- next/font where appropriate
- Proper image dimensions
- Modern image formats
- Sensible lazy loading
- Server Components where beneficial

Avoid introducing unnecessary JavaScript purely for presentation.

Prevent:

- Layout shift
- Large bundles
- Hydration problems
- Unoptimized media
- Animation-related jank

# ================================================== 12. CONTACT FORM

Create a production-ready form architecture.

Include:

- Client and server-side validation where appropriate
- Accessible validation feedback
- Spam mitigation
- Loading state
- Success state
- Failure state
- Secure handling

Never expose secrets or API keys in client code.

If an email/form provider must be selected, recommend a practical production option and explain the required environment variables.

# ================================================== 13. SECURITY AND QUALITY

Follow production-level frontend practices.

Avoid:

- Hardcoded secrets
- Dangerous unsanitized HTML
- Invalid links
- Console errors
- TypeScript errors
- Broken responsive states
- Hydration warnings
- Accessibility regressions

Use defensive handling for external data and user input.

# ================================================== 14. ANALYTICS

Prepare the website for privacy-conscious analytics.

Track useful conversions such as:

- Resume download
- Contact submission
- Project visits
- Primary CTA clicks

Do not add intrusive tracking unnecessarily.

# ================================================== 15. DELIVERABLES

Deliver an END-TO-END production-ready implementation.

Provide:

1. Brief design rationale
2. Visual/design-system direction
3. Information architecture
4. Technical architecture
5. Project/file structure
6. Complete implementation
7. Reusable components
8. Responsive states
9. Accessibility implementation
10. SEO implementation
11. Functional project filtering
12. Functional contact form architecture
13. Resume download implementation
14. Social links implementation
15. Performance optimization
16. Environment variable example if needed
17. README
18. Local development instructions
19. Build instructions
20. Deployment instructions
21. Final QA checklist

The project should be deployable to a platform such as Vercel.

# ================================================== 16. IMPLEMENTATION RULES

Before coding:

1. Analyze the requirements.
2. Define the visual direction.
3. Establish the design system.
4. Define information hierarchy.
5. Determine component architecture.
6. Identify missing assets/content.

Then implement systematically.

When making design decisions, prioritize in this order:

1. Usability
2. Accessibility
3. Content clarity
4. Visual hierarchy
5. Responsiveness
6. Performance
7. Aesthetics
8. Animation

Do not sacrifice usability or performance for visual effects.

Do not leave major sections as pseudocode or describe what should be implemented instead of implementing it.

Ensure the final result feels intentionally designed for a UI/UX Website Engineer and Frontend Developer—not generated from a generic portfolio template.

# ================================================== 17. FINAL QA

Before considering the project complete, verify:

- All navigation links work
- Mobile navigation works
- Project filtering works
- Contact form states work
- Resume download works
- External links are handled correctly
- Keyboard navigation works
- Focus states are visible
- Reduced-motion preferences work
- Contrast is accessible
- Images are optimized
- Layout works at common screen sizes
- There is no horizontal overflow
- There are no obvious layout shifts
- There are no console errors
- There are no TypeScript errors
- There are no obvious hydration errors
- Metadata is complete
- Sitemap and robots configuration are present
- Production build succeeds

If information required for final production deployment is unavailable, implement the functionality with clearly labeled placeholders and tell me exactly what I need to replace.

Start by presenting the proposed design direction, design system, page architecture, and implementation plan. Then proceed to building the production-ready website.
