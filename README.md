# K Explore — Complete College Project

A responsive event management and discovery website built with HTML5, CSS3 and vanilla JavaScript.

## Features
- Responsive homepage with featured and upcoming events
- Event explorer with live text search, category filters and sorting
- Individual event details pages using URL query parameters
- Registration form with client-side validation
- LocalStorage-based demo registration saving
- Dark/light mode preference saved in LocalStorage
- Mobile navigation
- Confirmation message and registration reference

## Project structure
```text
k-explore/
├── index.html
├── events.html
├── event-details.html
├── register.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── pages.css
├── js/
│   ├── events.js
│   ├── main.js
│   ├── theme.js
│   ├── explorer.js
│   ├── details.js
│   └── registration.js
├── assets/
│   └── images/
└── README.md
```

## Run locally
1. Extract this ZIP file.
2. Open the `k-explore` folder in VS Code or Antigravity.
3. Open `index.html`.
4. Start Live Server (right-click → Open with Live Server).
5. Use the navigation to explore events and register.

## Important demo note
This is a front-end college project. Event information is sample data. Registration records are stored in the browser's LocalStorage and are not sent to a real server. A production registration platform would require a backend, database, server-side validation, privacy controls and deployment configuration.

## Test checklist
- [ ] Homepage loads and shows featured/upcoming event cards
- [ ] Explore events page shows all sample events
- [ ] Search filters by event title, category, venue and description
- [ ] Category filter and sort dropdown work
- [ ] Event card opens its matching details page
- [ ] Register button preselects the event
- [ ] Invalid form values show validation messages
- [ ] Successful registration shows confirmation
- [ ] Refreshing does not erase saved registrations in the same browser
- [ ] Dark/light theme persists after refresh
- [ ] Mobile menu opens and closes
