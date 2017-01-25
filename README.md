# React_WeatherApp

1. Install Node 6. Need to run multiple versions of Node? Use nvm or nvm-windows

2. Clone this repository. - git clone https://github.com/bensezio/React_WeatherApp.git or download the zip

3. Make sure you're in the project root directory - cd ReactApp_Weather

4   Install Node Packages. - npm install

5.  Run the app. - npm start -s Starts the application in dev mode

This will run the automated build process, start up a webserver, and open the application in your default browser. 
- During development, this command will continue watching files all your files. 
- Code is rebuilt, linting runs, and tests run automatically. 
- Note: The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
    
Development Notes:
------------------

I have a installed quite a lot of Node Modules because I wanted to use Redux, Thunk etc. ( still on a learning curve )

I also have an actions.js file which I would have loved to use for the ajax call but wanted to simplify things.

** I have included a screenshot/screen capture of how the page should look (as I noticed it does take sometime for the API call to load ). I could do with a promise and a timeout function :-()


Production Build:
------------------

1: npm run build  - should run the build for production code using the dist folder. 
** Issues with es-lint-watch were resolved following some investigations and debugging