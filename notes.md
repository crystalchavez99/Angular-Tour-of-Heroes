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

### Create Interface
* `ng generate interface [name]`
* Creates a new, generic interface definition in the given project.
* To apply towards component make sure its important in the TS file and
can be used in the class, which will be displayed for use on HTML

#### Formatting with pipes
* Make you import CommonModules in order to access pipes
  * uppercase pipe displays value in capital letters
  * `{{ value_expression | uppercase }}`
* CommonModule: Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.

### Two-Way Binding
* To automate that data flow, set up a two-way data binding between the input form element and the property.
  * That means data flows from the component class out to the screen and from the screen back to the class.
  * Ex: The text box should both display the hero's name property and update that property as the user types
```
<div>
  <label for="name">Hero name: </label>
  <input id="name" [(ngModel)]="hero.name" placeholder="name">
</div>
```
* [(ngModel)] is Angular's two-way data binding syntax.
  * it binds the hero.name property to the HTML text box so that data can flow in both directions. Data can flow from the hero.name property to the text box and from the text box back to the hero.name
  * Creates a FormControl instance from a domain model and binds it to a form control element.
  * Must import FormModule to use


#### Missing FormsModule When Using ng to bind
* Although ngModel is a valid Angular directive, it isn't available by default.
  * It belongs to the optional FormsModule and you must opt in to using it.

### AppModule or NgModule
*  NgModules are eagerly loaded. This means that as soon as the application loads, so do all the NgModules
*  A module (or @NgModule) in itself is nothing but just a briefcase containing a bunch of components, and really, the components are what actually your application is made of
*  An NgModule is a class marked by the @NgModule decorator
*  takes a metadata object that describes how to compile a component's template and how to create an injector at runtime.
*  It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them.
*   @NgModule can also add service providers to the application dependency injectors.
*   Every component must be declared in exactly one NgModule.
