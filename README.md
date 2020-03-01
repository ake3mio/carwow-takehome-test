# Akeem's Front-end tech test for carwow

[View the site here](https://quiet-retreat-24860.herokuapp.com/)

In this tech test I have built a car list view and a car detail view. Everything is responsive.

I have integrated with the provided apis hosted on heroku for each of the views using client-side ajax requests.
As the apis on heroku take a bit of time to warm up, I have added fallback loading for some of the content.
Also, there is some basic offline support functionality provided from a service worker (if supported in a browser)

## Home Page  
On the home page a responsive grid list has been implemented with product card components that have fallback loading content.

When you click on to a product image or a "read review" button, the window history api is used to push state to a new path.  

## Product Details Page  
As the page is waiting for a response from the product api a full page loader is displayed to let the user know something is happening.

When the content is loaded you are able to see:

- the details of the selected car
- breadcrumbs so you can easily navigate to the home page
- the product grid list to help promote cross selling of products

If I was to do these feature for production purposes, I would:

- Add unit tests and bdd tests
- Prefetch some of the assets
- Improve the offline support on the product detail view
- CI/CD for deployments
- Better structure for the global css
