# Angular Training Journey

## Create new project

* `ng new <name>`
  * ng new prompts you for information about features to include in the initial project. Accept the defaults by pressing the Enter or Return key.
  *  installs the necessary npm packages and other dependencies that Angular requires
* creates the following workspace and starter project files:
  * A new workspace, with a root directory named angular-tour-of-heroes
  * An initial skeleton application project in the src/app subdirectory
  * Related configuration files

## Serve App

* cd into new app
* `ng serve --open`
  * Builds the application
  * Starts the development server
  * Watches src file
  * Rebuilds apps every change
* `--open` opens a browser

## Angular Component
* Components are the fundamental building blocks of Angular applications.
* They display data on the screen, listen for user input, and take action based on that input.
* There are mainly 3 files to keep out for to make changes
  * component.ts: component class code TS
  * component.html: component template HTML
  * component.css: component private CSS

* The double curly braces are Angular's interpolation binding syntax. This interpolation binding presents the component's title property value inside the HTML header tag.
```
//.ts
title = 'Tour of Heroes';
//.html
<h1>{{title}}</h1>
```

### Create component
* `ng generate component <name>`
* creates a new directory after name of component and generates three files with a test file
* You always import the Component symbol from the Angular core library and annotate the component class with `@Component`.
* `@Component` is a decorator function that specifies the Angular metadata for the component.
* `ng generate` created three metadata properties:
  * `selector`: component css element selector
    * matches the name of the HTML element that identifies this component within a parent component's template
  * `templateUrl`: location of template file
  * `styleUrls`: location of css files

### Show Component View
* To display component, must add to template of the shell app
* add <app-name> to the AppComponentHTL
* import component to AppComponentTS and apply to imports property
