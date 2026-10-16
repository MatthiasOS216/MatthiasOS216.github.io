# House of Data website identity

The planned Files product now appears as **House of Data**, with the approved
Architectural Data emblem and original HOD / House of Data wordmark. Its
`files` technical key, role, description, order and **Planned** status remain intact.
No standalone Files app was found in the inspected application branches; this
change does not create one or change file storage, uploads, APIs or app manifests.

The source body and generated `index.html` change together. The hosted repository
receives the identical index and selected assets. This work is based on Claude's
`claude/tour-status-labels` branch (aegis-os PR #29; hosted-copy PR #1), preserving
its status labels. Review this branding diff separately from those dependencies.
Other product identities are unchanged. The separately staged Coherence website
patch has not been discarded or silently included; integrate it deliberately when
its own publication is approved.

## Artwork and visual intent

Approved pack: [House of Data Architectural Data](https://drive.google.com/file/d/1uwzG7CoFnV1720aWwYDFAhKoodHYVZxy/view).
ZIP SHA256: `012d26ce02f8e8abc30d386034ee9de3adedd2caaf9ee614a5d9347476c56362`.
All 14 manifest checksums verified. The two deployed exports are byte-for-byte
copies, recorded in `assets/house-of-data/manifest.json`.

The uncropped transparent dragon/pyramid is the compact product identifier in the
orbital tiles and readable list. The wordmark gives the detail and list headings
the approved HOD hierarchy without redrawing its lettering. Sizing is scoped to
this product; the emblem is not forced into the placeholder's rounded mask.
Selection follows the existing tour interaction; product status remains separate
readable text. Decorative repeated emblems have empty alt text; heading artwork
has the accessible name “HOD — House of Data.” No recoloring or raster editing.

## Validation and limits

Checked build wrapping parity, source/hosted index equality, exact asset hashes,
JavaScript syntax, preserved catalog/status fields and Git whitespace. Desktop
1440×900 and phone 390×844 are checked in reduced-motion and animated modes with
the existing pinned GSAP/Three versions. Browser checks use local vendor copies
and fallback fonts, not a production deployment.

The baseline has oversized unrelated product images in the reduced-motion list;
this scoped change sizes House of Data correctly without redesigning other apps.
The final scene's label coincides with its fade-out; inspect the preceding visible
interval after progressing through earlier app scenes. The complete timeline through EOF is identical to the Claude baseline. Desktop
labelsDirectional snapping can land at that fade boundary; the final four-case
render run passed after progressing through prior scenes. Earlier direct jumps
were intermittent, so no timeline repair or broad animation acceptance is claimed.
No broad UI acceptance, screen-reader certification, production hosting validation
or trademark clearance is claimed. No merge, deployment or service restart.
