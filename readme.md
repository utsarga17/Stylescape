StyleScape – A Simple Clothing Brand

StyleScape is a lightweight online clothing store built with Node.js, Express, MongoDB, and Handlebars. It allows users to browse products, authenticate via GitHub, and purchase items using PayPal.


This final submission combines both the In-Class Exercise  and the Demo Application into a single, fully functional project. The features, structure, and implementation were developed by extending the initial in-class work and integrating it with the requirements of the full demo application. Therefore, this repository serves as the complete assignment for both components.

Live link: https://stylescape.onrender.com/
Repository link:  https://github.com/utsarga17/Stylescape.git



StyleScape – Project Development Steps
Idea & Planning

a.Decided to create a simple clothing e-commerce website with GitHub login, PayPal checkout, and admin panel.

b.Setup & Configuration
Initialized the Node.js project with Express and Handlebars.
Installed all required packages and set up folder structure.

c.Frontend Design
Designed pages using Bootstrap and Handlebars.

d.Authentication
Integrated GitHub login using Passport.js.

e.Database Connection
Created MongoDB collections (products, users) on Railway.
Connected the app to MongoDB using Mongoose.

f.PayPal Integration
Set up PayPal SDK for "Buy Now" functionality with live test credentials.

g.Deployment
Hosted the full-stack app on Render and connected to Railway MongoDB.



Features:

1.Product Listing (with image, name, price, and description)
2.GitHub Authentication using Passport.js
3.PayPal Checkout Integration
4.MongoDB database for storing product data
5.Clean responsive design using Bootstrap
6.Handlebars (HBS) for templating

Tech Stack:
Node.js + Express.js
MongoDB + Mongoose
Passport.js (GitHub OAuth)
PayPal REST SDK
Handlebars (HBS)
Bootstrap 5

Help and reference:
This project used the help of ChatGPT for implementing the PayPal JS SDK integration and the hbs.registerHelper('json').
Reference source: https://developer.paypal.com/sdk/js/configuration/
Bootstrap link: https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css

Other than this, ChatGPT has been very slightly used for basic clarifications and minor bug fixes throughout the project/


VS Code Extensions Used
MongoDB for VS Code
DotENV
ESLint
