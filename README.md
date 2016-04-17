# FlawlessHacks

## We're making Albert better.

Albert is NYU's course planner and registration system. Currently, when you add courses to your shopping cart for the next semester, you see a list of course numbers and the days/times they meet. Once you register for those courses, however, Albert gives you generated calendar with the class times blocked off in green.

This is a helpful feature, but most students want to preview their calendar **before** they register! Students make tentative class events on Google Calendar, iCal, or even Excel so that they can decide which section of a class or recitation fits in best with their schedule without overlapping with another class. This "hack" is the beginning of a Chrome Extension that would scrape class name and meeting times from the student's shopping cart and generate a calendar from it.

For most of us, this was our first experience with JavaScript. And it was made needlessly complicated by the fact that the Albert course planner page is hopelessly outdated and made up of iframes.