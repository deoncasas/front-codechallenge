# Data Table Component Code Challenge

This is a customize dynamic data table that is capable of displaying data upon user interactions like sorting, filtering, pagination, real time search, changable theme (dark/light) & clickable auto scroll up on the lower right

## Project Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Download and install Node.js](https://nodejs.org/) (version 21.4.0).
- **npm**: npm is included with Node.js. Verify installation by running `npm -v` in your terminal.
- **Git** (optional): [Download and install Git](https://git-scm.com/).

## Getting Started

Follow these steps to set up your project locally.

1. Download the repository to your local machine.
2. Open Command Prompt (CMD)
3. Navigate to the Project Directory EX: cd ~/Downloads/my-project
4. Install Project Dependencies -> npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. coverage

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Features

### Search Key:

Search functionality where one input box can search multiple fields simultaneously

### Sortable Headers:

Allow users to click on them to sort the data in ascending or descending order based on the column values

### Change Theme

The application supports a changeable theme between dark and white

### Pagination

- Navigate to the next and previous pages.
- See the total number of pages available.
- Enter a specific page number to jump to.
- Select how many items to view per page
- If select show page are more than 5 - top pagination will be displayed

### Clickable scroll to top

The application includes a clickable "scroll to top" button that appears when the page is scrolled down, allowing users to quickly return to the top of the page with ease

### CODE Documentation

- src
- |----> assets ==================> `resources that are used in and styling a website`
- |----> components ==============> `independent UI and reusable pieces`
- | |----> component =====> `files available are UI, test, CSS & dataStates`
- |----> pages ===================> `independent UI combination of the reusable components`
- | |----> component =====> `files available are UI, test, CSS & dataStates`
- |----> mockData =====> `Artificially generated data that simulates real data for testing`


Write a data table component with these features:

`Support TypeScript. - Status Done`
`Support pagination. - Status Done`
`Support page size. - Status Done`
`Support simple search (so we can just type a query and filter rows). - Status Done`
`Support column customization. - Status Done`
`Support sort fields. - Status Done`
`Support dark mode. - Status Done`
`Write some examples to show your component’s features. - Status Done`

General Requirements
`Use ReactJS - Status Done`
`Write necessary tests, but not with high coverage. - Status Done`
`Remove all unused codes if you use a boilerplate or framework. - Status Done`
`Write an instruction to run the project. - Status Done`
`All pages and components should be responsive. - Status Done`
`Do anything else that can impress us, but don’t overwork. - Status Done`
`You should use a linter like PrettierJS or any others. - Status Done`
`Don’t commit the .vscode or .idea directory. - Status Done`
`Mention the required NodeJS version - Status Done`
