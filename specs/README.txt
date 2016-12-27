In order to complete this challenge you need to consume the review API created for you. Before using the api, you need to create an API_KEY to make the calls with.

Use this to get an api key.

API Url: vngrs-challenge.herokuapp.com

Registering an Application 
==========================
POST request to /api/applications endpoint with url-encoded form parameters or JSON request body.
Example request body should look like;
{
  “client”: { “email”: “email@email.com” }
}

Getting The List of Reviews
===========================
GET request to /api/reviews

Making helpful/not_helpful Request 
==================================
POST request to /api/reviews/:id/vote with appropriate JSON data.
Example request body should look like;
{
  "type": "helpful"
}
Whitelist values for type key are “helpful” and “not_helpful”

Making Request With Client ID
=============================
You can send client_id with either url-encoded form data or request header.
* Sending with url-encoded form data
  Please use “client_id” parameter.
* Sending in header
  Please use “X-client_id” to send Client ID in headers.


The tasks for this project is as follows,

Non-Functional 
==============

* Convert the design into a web page using HTML and CSS. The design is attached as a PSD.

* Buttons on the page shouldn't use images if possible.

* Fonts used in the design can be found in the PSD. Proprietary fonts are attached as "font.css" and "typekit.css" files.

* Navbar should be always visible.

Functional
==========

* Reviews must be pulled from the review API provided.

* "See Reviews From" buttons should filter out the reviews without a reload.

* Counts under user types in "See Reviews From" part, should reflect the actual values from the reviews data.

* "Sort by" should sort the reviews by "Most Helpful", "Highest Rating", "Newest First"

* All rating values should reflect what is found in the data. This includes the rating and review counts on top, and on right.

* Upon clicking Helpful or Not Helpful, a vote for that review must be sent to the server, and the review should be updated reflecting the change. This includes changing the order of the reviews if necessary.

Notes
=====

* Rest of the buttons and links should not work.

* As a bonus you can implement infinite scroll.

Required Technologies to Use
* HTML
* CSS3
* JS
* Any client side MVC/MVVM libraries. For example: Backbone.js Knockout AngularJS
* Any JS testing framework. For example: QUnit Sinon Jasmine
* Any build tool. For example: GruntJS, GulpJS
