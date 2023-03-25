# eslint-config-axenu

This repo exports a shared config for eslint that should be used in all Axenu projects.

## Usage

1) Install the package using command `npm install @axenu/eslint-config-axenu`.
2) Install eslint package using command `npm install eslint`.

### For React Native

Create an .eslintrc.js file in your repo like this:

```js
module.exports = {
  extends: ['@axenu/react-native'],
};
```

### In package.json

Create two scripts like this:

* `"lint": "eslint ."`
* `"lint-fix": "eslint --fix ."`

### Run lint 

`npm run lint`