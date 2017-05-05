# Service worker

## Commit 1 has basic service worker working. 
### Run the following
ng build --prod --aot // To build in production mode and have everything in dist folder
node run precache // This will run the sw-precache of google to generate a serviceworker.js file in dist
node server.js // This is to actually run the application. When user access it will register the service worker
