
## Getting Started

### Link to see the app live: https://main--lambent-creponne-8f62e2.netlify.app/

First, run the development server if you want to run the app locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Project description

Starting with the main page, it is a simple landing page for the volunteering site. Clicking on "Get started" will redirect you to the signup page. The rest of the buttons are static. Once in the signup page, you can choose to log in instead, which will redirect you to the login page. Currently there is no check for the user since I did not connect the app to a database, so any user will work. Logging in or signing up will then redirect you to the dashboard, where there is a menu (everything clickable except for the icons on the right), cards that show different things you can do, some graphs with statistics, etc. The profile page is editable and you can make changes, however, after refreshing or coming back again there will be no information saved as there is no backend support for this. The about page has some information and displays "team members". Contact page contains a simple form that you can fill and submit, which will display an alert with the information entered. Volunteering opportunities has various cards with some opportunities, to which you can apply to. Clicking on apply will open up a dialog with a short form to fill, once submitted, it will alert you that it was submitted.
