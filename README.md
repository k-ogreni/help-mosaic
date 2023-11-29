
## Getting Started

### Link to see the app live: https://main--lambent-creponne-8f62e2.netlify.app/

First, run the development server if you want to run the app locally:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Project description

Starting with the main page, it is a simple landing page for the volunteering site. Clicking on "Get started" will redirect you to the signup page. The rest of the buttons are static. Once in the signup page, you can choose to log in instead, which will redirect you to the login page. Currently there is no check for the user since I did not connect the app to a database, so any user will work. Logging in or signing up will then redirect you to the dashboard, where there is a menu (everything clickable except for the icons on the right), cards that show different things you can do, some graphs with statistics, etc. The profile page is editable and you can make changes, however, after refreshing or coming back again there will be no information saved as there is no backend support for this. The about page has some information and displays "team members". Contact page contains a simple form that you can fill and submit, which will display an alert with the information entered. Blog page shows the latest blogs which you can read more/read less, and are sorted by latest date, and also includes previous posts (cannot be expanded). Volunteering opportunities has various cards with some opportunities, to which you can apply to. Clicking on apply will open up a dialog with a short form to fill, once submitted, it will alert you that it was submitted.

### Technologies used
Next.js was used as a "template" for the web application. This is a React framework, which is quite useful as it gives you "building blocks" to start with that you can then expand. The characteristic of this Next.js version used, is that the src folder contains another folder named pages, which, as the name suggests, contains all the files that "index" your page. As such, you create a specific folder that references the page you want to make, e.g. dashboard, and in it, you must have a file named "index" that will contain the components for your page. I have also created a component folder, in which I have a few components I have used in some of my pages. 

React.js is a JS library, widely used due to its component-based architecture, considered so as one can build various reusable components that can be implemented anywhere in the codebase. I have utilized various concepts from React, and not just components, such as React hooks and state. I have used the three most common hooks (useState, useEffect, and useRouter) to help me throughout the project.

Typescript was utilized when building interfaces to pass as props to components and in places where I needed to put some logic. 

MaterialUI was used throughout the project to build the UI. I have used various components from it, as well as created new ones with the help of React and by combining many MUI components together.
Another thing to note is that I established the CI (github actions) for my project, which, once you push your changes to remote, will run the checks specified and let you know if they pass or not and where the issue lies.

Lastly, the app was deployed using Netlify, thus establishing the full CI/CD.
