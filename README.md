# Welcome to CarHunter

React Web application used for car search in Lithuania.

It works by pulling together multiple car market site results in one place in parallel for an easier search of a new (used) car.

# Tools used

* Web scraping section is accomplished using Scraping Ant and their headless browser integration for gathering site html.
* Giphy for cool car pictures/gifs (obviously).
* Cheerio for extracting the needed information from gathered html.

# How to use

After opening the site you are prompted with the search section:

![carhunter1](https://github.com/jusadocode/CarHunter/assets/77744027/74855e51-7e32-496f-a7bb-ef4eb3b8276f)

You can fill in the needed filters for the car of your choice:

![carhunter22](https://github.com/jusadocode/CarHunter/assets/77744027/344f1c3d-04e2-44a0-8991-cc1bb6c47f3f)

You can initiate the scraping process by clicking the search button (Ieškoti)

The time from the start of scraping to results on your screen depend on the filters and the chuck of data extracted (3-15 secs on average).

![carhunter 2](https://github.com/jusadocode/CarHunter/assets/77744027/dc13a306-fb84-4105-b9ee-1cff9b0b1115)

After the search operation, there is a small cooldown on the search initiation to avoid the overload of requests for the ScrapingAnt.

After the process finishes, you can see the results portrayed in parallel:

![carhunter 3](https://github.com/jusadocode/CarHunter/assets/77744027/e2a57ac8-d446-46d3-96f5-333983547d60)

for now the info is gathered using autoplius and autogidas results.



The project is still in development and there is quite a bit of features to be implemented in the future, such as:
* Support for more variety of car sites
* Sorting of results
* Advanced search
* Price trend of the car in question


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
