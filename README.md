# Users List and Detail Views App


## General Overview

This app has 2 views - a list view that shows names of teachers and students, and a detail view that shows specific user details and allows editing of their list of hobbies.

This App uses Create-React-App, React-Redux, Redux, Redux-Forms, PropTypes, and Lodash.

Using Redux-forms for adding or removing hobbies, there's form submission validation for name and number.

### to run - 
after cloning/forking/downloading

in console, in directory:
`npm install`
`npm start`
navigate browser to `localhost:3000`

to go to detail view, click on a student or teacher name.
to go to list view, click the button in the upper right
to add a hobby, fill out name and num years, and hit submit
to remove a hobby, click the `remove` button next to the hobby in question.

### Personal notes

I used the project to try out a different style of organization, with most files having 1 default export instead of grouping similar functions on the same file.

I tried to focus on reuseability - the BasicTable and UnorderedList components being for general use.

### Bug with LastPass browser addon

If submitting the AddHobbyForm with the enter key, the console gives an error from `onloadwff.js:71`. After doing some research, I found it comes from having the LastPass addon. I didn't find any easy work-arounds, and the form still submits the information, so fixing it is low priority.
[more info](https://github.com/KillerCodeMonkey/ngx-quill/issues/351?fbclid=IwAR3sBJ86Jel8VV3pYaaK0iOi5qUoTOSfOMFdiz3A7JIcY6UIAYvslCWWjEI)

# Create React App Generic Readme Below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
