# AngularStatic

This is a project to attempt to create an environemt similar to Gatsby in Angular.

## Goals
* To build an Angular app that could then be shipped as a single page application but could also be 
shipped as a completely static site with no need for javascript at all. Or a hybrid, you can create
the static files then bootstrap the application from there.
* Write in markdown
* Get data from api endpoints

## Reasons
I love static sites and generators. I working with Angular. 
You never know how scope of a project may change. First you may need
only a few static files, then it turns into a fully featured SPA.

## Building 

To build the complete app you will need to run a server for your assets. This is so we can
access them during the prerender process. `npm run asset:server`
In a separate process run `npm run build:prerender`, once finished you can serve the `dist` directory.
You should now have only the static files. No need for js anymore!
