# Service worker

The code here uses 5 different caching strategies for 5 different urls. Its a demo of how each cache strategy works in the service worker.
## Strategies -
* networkFirst 
    Any request made to bbc for news is first sent to the network and then cached. This way we always gets the most current information.
    This strategy can be used for scenarios where you would like to get the number of quantity of an item. This is useful for scenarios where you want the freshest data but would be okay with cached data if network is not available.
    
* cacheFirst
    Any request made to cnn would be from the cache first. This is very fast as data is received from cache (if present). If its not present in cache then a request to server is made. This option is good for resources that don’t change, or have some other update mechanism

* fastest
    Any request made to mashable link will actually fire out two request, one for the cache and other to the network. In all cases the cache would respond first (if present), the response received from Network would be cached for future.

* cacheOnly
    Requests made to fortune would be cacheOnly, if not present in cache then it would fail. Ideally this kind of caching is used for static resources like images, icons etc.

* networkOnly
    Requests made to cnbc is networkOnly. If network connection is not available then it would fail. This is same as not creating any routing strategy.

## Commit 1 has basic service worker working. 
### Run the following
* ng build --prod --aot (use --base-href=URL if deploying to ghpages with context root")// To build in production mode and have everything in dist folder
* npm run precache // This will run the sw-precache of google to generate a serviceworker.js file in dist
* node server.js // This is to actually run the application. When user access it will register the service worker

## Commit 2 used sw-precache with sw-toolbox
Have defined two different cache strategy -- 
* bbc is got from network first
* cnn is cache first

## Commit 3 set manifest.json with icons for the app to be able to install on homescreen

