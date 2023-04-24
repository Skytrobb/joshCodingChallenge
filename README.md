# josh.ai Coding Challenge

## To Run:
```
1. clone repo
2. npm install
3. npm run dev
```

### Notes
* The NASA API has a rate-limit that is easy to reach. If you run into it you can either change your IP address with a VPN or use static data in the project. See comments in RoverListing.tsx and RoverDetail.tsx
*  Switching between desktop view and mobile view in chrome dev tools requires a page refresh
* There was a bug with the MUI date-picker where if you picked a date on mobile the calendar would jump out of frame. This bug magically disappeared and I can no longer reproduce it, if it happens again there's an easy fix.
