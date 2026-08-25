---
name: Rendering strategy
description: Why the site uses static pre-rendering rather than runtime server rendering.
---

Use build-time pre-rendering for every public route and deploy the generated HTML as a static site.

**Why:** The site content is known at build time, and the user chose the simplest option that provides complete crawlable HTML without requiring a Cloudflare Worker.

**How to apply:** Keep new public routes in the pre-render route list and preserve client hydration. Move to runtime SSR only if future pages require request-specific HTML.