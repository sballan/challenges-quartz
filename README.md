# Quiz Challenge
This is the host app I used to run the quiz module.  The quiz module has no external dependencies, and should run in any Angular2 app made with the angular-cli.

The quiz can be styled however you like from the host app, using the provided ":host /deep/" css selectors.

### Use it with a simple import
To use the quiz, simply import the QuizModule to your AppModule.  That's it!

### State is kept in three services: Quiz, Question, and Answers.  

Quiz keeps track of the quizes you've made (multiple quizes are supported).

Question keeps track of relevent metadata for a particular question, without touching the actual Quiz or Question objects.

Answers keeps track of answers provided for particular questions, without touching the Quiz or Question objects.

The QuizPanel provides an easy to use interface for the QuizQuestion and QuizAnswers components, but these components can be used in isolation (with the help of the services) to easily construct your own custom Quiz.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
