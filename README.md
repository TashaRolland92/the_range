# The Range

A responsive product listing app built with React and a PHP headless API. 

## Stack
- React (Vite)
- SASS
- PHP (procedural, no framework)


## Run Locally
This needs two servers running at once, in two separate terminals/tabs. 

### Terminal/Tab 1 - PHP API:

Navigate to the root folder the_range and run: `php -S localhost:8000`

### Terminal/Tab 2 - React App:

Navigate to react_app and run: `npm install && npm run dev`

Then visit the URL Vite prints (usually `http://localhost:5173`).

## Notes

- Prices in the source data are stored in pence and formatted to £ in the UI.
- Products missing a review score or was_price simply omit that element, per the brief.
- Sorting is always ascending; clicking an active sort button again clears it.
- Responsive breakpoints: 1 column below 375px, 2 from 375px, 3 from 700px, 4 from 1200px+.







