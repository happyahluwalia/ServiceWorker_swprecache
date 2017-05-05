# Service worker

## Commit 1 has basic service worker working. 
### Run the following
ng build --prod --aot // To build in production mode and have everything in dist folder
npm run precache // This will run the sw-precache of google to generate a serviceworker.js file in dist
node server.js // This is to actually run the application. When user access it will register the service worker

## Commit 2 used sw-precache with sw-toolbox
Have defined two different cache strategy -- bbc is got from network first
while cnn is cache first

## Commit 3 set manifest.json with icons for the app to be able to install on homescreen
//https://houssein.me/progressive-angular-applications
