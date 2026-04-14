# Profile Card

🔗 [Live site](<https://profile-i14.vercel.app/>)

A responsive, accessible profile card — vanilla HTML, CSS, and JavaScript. No build step, no dependencies.

## What's in it

- Name, bio, avatar, and live epoch time (updates every second)
- GitHub, Twitter, and LinkedIn links
- Hobbies and dislikes lists
- Full keyboard navigation and screen reader support
- Responsive from 320px to 1200px
- `data-testid` attributes on all key elements


## data-testid reference

| Element                | `data-testid`               |
| ---------------------- | --------------------------- |
| Card root              | `test-profile-card`         |
| Name                   | `test-user-name`            |
| Bio                    | `test-user-bio`             |
| Time                   | `test-user-time`            |
| Avatar                 | `test-user-avatar`          |
| Social links container | `test-user-social-links`    |
| GitHub                 | `test-user-social-github`   |
| Twitter                | `test-user-social-twitter`  |
| LinkedIn               | `test-user-social-linkedin` |
| Hobbies list           | `test-user-hobbies`         |
| Dislikes list          | `test-user-dislikes`        |

## Accessibility

- `aria-live="polite"` on the time display
- `aria-label` on the social nav
- Descriptive alt text on the avatar
- WCAG AA contrast throughout
- Visible focus indicators on all interactive elements

## Running Locally

No build step — just open `index.html` in a browser.

```bash
git clone https://github.com/<DevBytes-J>/profile-i14.git
cd profile-i14
open index.html
```
