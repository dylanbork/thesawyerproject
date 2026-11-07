# The Sawyer Project

Six accessible, responsive pages with a vintage cream and evergreen design, supplied memorial artwork, and external Givebutter donation links. Uses static HTML, CSS, and small JavaScript enhancements. No runtime dependencies, account system, tracking, or submission database.

## Run locally

Requires Node 18 or newer. No package installation required.

```sh
npm run build
npm run check
npm run dev
```

Open http://127.0.0.1:4173. Edit page copy in `src/content.mjs`, layout in `build.mjs`, styles in `src/styles.css`, and interactions in `src/app.js`. Rebuild after edits. `dist/` is the deployable website.

## Hosting

The initial review deployment uses private Sites hosting. Keep that access until ready for launch. For independent public hosting, this site also fits Cloudflare Pages: build command `npm run build`, output `dist`, with a domain owned by the organization. Cloudflare documents static HTML hosting at https://developers.cloudflare.com/pages/framework-guides/deploy-anything/ . Keep website hosting and domain access in an account controlled by the nonprofit. This architecture can gain a CMS, contact backend, and private sponsorship applications as requirements develop; those are not implemented here.

The default Vinext starter requires Node 22.13+, while this environment provides Node 18. The unused starter is retained outside this checkout in `../starter-reference`; the delivered website deliberately uses a dependency-free static build suited to this initial public-information site.

## Before public launch

- Founder and families should approve the wording and supplied memorial imagery. Individual biographies have not been invented, and the artwork’s portrait order is not assigned to individual names.
- Confirm Givebutter checkout, organization identity, and payment readiness. All donation buttons use the exact supplied campaign URL; no tax-deductibility claims are made. The campaign could not be inspected through the web checker.
- Add the organization’s public email when established. Contact is honestly marked as coming soon; no form pretends to send messages.
- Confirm sponsorship timing, selection criteria, and partner details. The four sponsorships are described as a goal, not already delivered results.
- Create a new QR code for the verified campaign or public domain before printing. The reference inserts contain unverified codes and a proposed domain, so the site does not use those codes for donations.
- Google Fonts loads the two typefaces externally. System serif and sans-serif fallbacks keep the site usable if unavailable. Self-host font files if preferred.

## Resources

Support links were checked November 7, 2026. Review them periodically.

- US 988 information and exact phone, SMS, and chat destinations were supplied by the connected hotline tool.
- https://headsupguys.org/
- https://www.nami.org/support-groups/nami-family-support-group/
- https://afsp.org/ive-lost-someone/

No clinical outcomes are claimed for the fitness sponsorships; professional support is addressed separately. Public story submissions and personal-data collection are intentionally pending future requirements.
