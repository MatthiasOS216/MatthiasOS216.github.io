# App showcase candidate — 2026-10-17

## Visual thesis

The tour's deep obsidian space becomes a quiet reading surface. The approved app emblem anchors each introduction; large silver typography explains the app before its details. The composition opens into an asymmetric reading column on desktop and a single deliberate sequence on phones. Stable directory rows give the moving tour icons a stationary counterpart. The same Michroma/Hanken typography and blue accents connect both experiences. There are no repeated feature cards, new effects, regenerated marks or decorative animation.

The directory and seven detail pages are static HTML, navigable without JavaScript. Main navigation, next-app links, skip links, visible focus and full-size screenshot links support different reading paths. Intrinsic screenshot dimensions reserve space before lazy loading.

## Canonical standards retrieved and reviewed

- [Visual authorship hard gate](https://app.notion.com/p/3f5be1449e6181259655d441627c3bfe)
- [Design constitution](https://app.notion.com/p/3c3be1449e618111be65df405d96ab5c)
- [Production interface standard](https://app.notion.com/p/3cfbe1449e6181c9be7bc42dab59cefe)
- [Matthew's creative taste and approved identities](https://app.notion.com/p/3efbe1449e618138b275e2e518e33e4c)

Existing tour screenshot and current hosted-source catalog at c9f7bc6 were inspected before implementation. Brand images are existing hosted assets, unchanged. Product names/statuses follow that catalog. The approved Coherence name maps to the standalone human-and-agent communications product per the canonical records; its development screenshot retains the older ELVN Comms working name and is captioned accordingly.

## Content evidence and limits

- Cortex: aegis-os `native-planner/README.md` documents tasks, habit/routine foundation, lists, subtasks, notes, tags and scheduling. Do not equate prototype features with public availability.
- Metona: actual isolated calendar screenshot and `review-metona.cjs` show a calendar view within Cortex. Standalone calendar, booking and expanded views are framed as direction, not delivered capability.
- Matthias: current website status is In use today; private runtime and governed workflow documentation support the coordination role. No blanket all-app integration claim.
- Resonance: aegis-os `elvn-content/README.md` documents business profiles, drafts, approval, graphics, scheduling and conditional provider connections. `elvn-content/scripts/design-review.js` explicitly creates a throwaway in-memory database with fictional Hearth Bakery and a `.example` address. Screenshots `resonance-posts.png` and `resonance-calendar.png` were copied from the isolated review set and visually inspected.
- Synapse: current catalog status remains Planned. The page describes direction; available offline shell images were intentionally not advertised as a finished application.
- Coherence: `elvn-comms/docs/FEATURES.md` and `HANDOFF.md` support messaging, threads, search, follow-through and project-work claims. `coherence-workspace.png` is the existing synthetic demo capture: Matt Demo, Ava Demo, Ben Demo and explicit made-up workspace notice. Calling and phone notifications retain unverified real-device limitations; paid services and shared Matthias access are not implied.
- House of Data: canonical brand record distinguishes approved artwork/product direction from implemented storage/sync/backup/cloud. Page keeps that distinction.

Three actual interface screenshots cover two apps. Other pages use approved brand art and openly state that a presentation screenshot is forthcoming. No fabricated UI or private workspace screenshots. Public app access, signup, launch, installation and private-network links are deliberately absent from this marketing site.

## Validation

`docs/check-app-pages.cjs` exercises all eight pages at 320, 390 and 1440px: no horizontal overflow, one h1 each, images load, local links return successfully, interactive targets reach 44px, skip link focuses main, and no page errors. It also verifies directory-to-detail navigation with JavaScript disabled. All 24 responsive cases and the no-JavaScript check passed with installed Chrome. Reduced motion is set for these captures; pages contain no animation.

Actual rendered directory, Cortex phone, Coherence desktop, House of Data phone and Resonance desktop were visually inspected. Mobile hero placement was corrected after the first inspection. The final screenshots avoid the intentionally visible main-region keyboard-focus outline so the default presentation can be judged separately from focus testing.

No screen-reader certification, real-phone acceptance or Matthew's final visual approval is claimed. This remains a local review candidate; no publication occurs in this workstream.

## Tour integration and independent review

The existing Eleven animation remains the focal point. A quiet text link in the
HUD opens the directory; orbital icons and the current-app caption lead to the
same detail pages. Hover/focus pauses icon positioning, with scroll/resize
revalidation so hidden icons leave the tab order. The static catalog is authored
in HTML for no-script and reduced-motion use. This extends existing interaction
without adding new visual effects or changing approved artwork.

Independent review exercised seven directory/detail/back routes, a real pointer
hover/click on an orbital icon, the skip link, no-script and reduced-motion
navigation, and focus behavior on resize. The parent inspected the actual tour,
directory and representative detail-page captures on desktop and phone. A second
check covered 24 page/viewport cases and nine no-script surfaces without failures.
Actual mobile hardware and assistive-technology acceptance remain unverified.

This candidate starts at hosted-site `c9f7bc6`, on `codex/app-showcase`.
The older aegis-os tour source lives on `claude/tour-status-labels`, not master.
Do not overwrite this reviewed site with an older generated index: any future
source-mirror rebuild must carry the navigation and apps/assets additions too.

## Maintenance

Content source is `docs/build-app-pages.mjs`; run with Node to regenerate all eight static pages. Shared layout is `apps/style.css`. No build step is needed to serve the committed HTML. Preserve evidence and current statuses when editing claims.
