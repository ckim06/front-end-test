# Fender Front End Engineering Challenge

## Setup
I wasn't sure if you had a server run the code, and for simplicity's sake, I made the code able to run directly in the browser, without a server.  In other words, using the file:// protocol.

However, in doing so, ajax requests are considered cross domain requests and get blocked.  The get around this, I put products.json directly into the function call, and wrapped it in a promise to simulate a proper ajax call.  This is done in productService.js in a function called getAllIfRunLocal().

Another issue that I ran into from running it from file:// is that html templates could not be loaded.  To get around this, I placed the templates directly into index.html.


## Data Issues
Some of the images from products.json came back with access denied errors.  I'm not sure how to fix that from the front-end, I would usually go to the person that set up those images for a fix.

Some of the products are also missing a productDisplayName_en property.  I wasn't exactly sure what properties to use, so I picked that one and series. 
