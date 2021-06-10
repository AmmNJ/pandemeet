# pandemeet

With covid-19 spreading around the world, you might be in the situation where you need to tell authorities which people you have met the last 14 days. This little web app should help you exactly with that.
It will enable the user to note which persons he/she met on which date.

## Features

- The user can add people that he/she met on a specific day
- Using a geolocation API, the user can add the location where he/she met that person
- The user can search the entries for a specific person with type ahead

## Additional Info

The geolocation API requires permission to access your location. Either you have to allow the request when using the feature or change your settings in case its rejected by default.

## Getting Started

In this project, the yarn package manager is used. [Here](https://yarnpkg.com/) you can find more information and how to get started with yarn.

```zsh
# Install dependencies
yarn

# Run app in development mode
yarn start

# Testing
yarn test # launches test runner in interactive watch mode
```

The dev environment runs on [http://localhost:3000](http://localhost:3000).
