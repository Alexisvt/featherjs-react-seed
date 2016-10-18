# feathers react redux webpack flux seed

> a real-time react redux app

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

The motivation behind it, is to provide a seed to start coding without worries about configuration.

This seed uses the [quick start sample in featherjs](https://docs.feathersjs.com/getting-started/quick-start.html).

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies
    
    ```
    cd path/to/feathers-seed; npm install
    ```

3. Start your app
    
    ```
    npm start
    ```
4. Then open your browser to [http://localhost:3030](http://localhost:3030) and try to insert some data to the message service like this:

    ```
    curl 'http://localhost:3030/messages/' -H 'Content-Type: application/json' --data-binary '{ "text": "Hello world" }'
    ```
5. If everything went well you should see the message on the page
## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
