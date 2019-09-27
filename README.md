# Users List and Detail Views App

## Overview

This application has 2 views. The first view is a list view that shows names of teachers and students. The second is a detail view that shows specific user details and allows editing of their list of hobbies.

This application uses the following libraries: Create-React-App, React-Redux, Redux, Redux-Forms, PropTypes, and Lodash.

It uses Redux-forms for adding or removing hobbies which also has a form submission validation for name of hobbie and number of years practiced.

### Installation

1. Clone the repo to desired directory.
    a. Running the application requires a local installation of NPM.
2. In terminal of desired directory run the following commands:
    a. `npm install`
    b. `npm start`
    c. This should download all the dependencies and start the application running locally on your system.
3. Within a web browser navigate browser to `localhost:3000` which will have the main view of the application.

### Usage and Features

The application shoud initially load into the main view which has lists of students and teachers.

1. To see the detail view of any student or teacher click their name.
    a. To return to the listing of people view click the "Return to List" button in the upper right corner.
2. While in the detail view you can add a hobby to the hobby table by filling out name and number years practiced in the form below the hobbies table. To add this hobby to the table click the "Submit" button.
3. To remove a hobby from the hobbies table click the "Remove" button next to the hobby in the table you wish to remove.

### Personal notes

I used the project to try out a different style of organization with most files having one default export instead of grouping similar functions on the same file. I wanted to see if it was easier to use and navigate, as I had seen this method in a lot of tutorials for Javascript. In some aspects it is, assuming good naming conventions. If I want to import a function, then I can juse get the file named that fuction. However, it also means that at the top of certain files there would be a lot of lines of import, instead of a few condensed lines. This can make it harder to see if you have all the things you need, and which things are extra, without a good linter. It also just makes the top a bit harder to read.

I focused my efforts on reuseability of components such as the BasicTable and UnorderedList components which can be repurposed anywhere for general use. 

For example the student and teacher list are the same component reused with different data, titles, and onClick functions.
Also the BasicTable component is used twice on the User Detail page, even though one table is 2 columns and the other is 3 - it can generate any number of columns from the data based on how long the row arrays are.

### Bug with LastPass browser addon

When submitting the AddHobbyForm with the enter key on the details view, the console gives an error from `onloadwff.js:71` when the Lastpass Browser is installed and enabled. This error comes from  the LastPass addon itself. I didn't find any easy work-arounds and this issue has official details in the link below.
[more info](https://github.com/KillerCodeMonkey/ngx-quill/issues/351?fbclid=IwAR3sBJ86Jel8VV3pYaaK0iOi5qUoTOSfOMFdiz3A7JIcY6UIAYvslCWWjEI)

You may encounter this error as well if you also have a Lastpass browser add on extension installed and enabled. However, it doesn't actually prevent the correct behavior of the application and is an internal error in the code of the Lastpass add on.
