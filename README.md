# Password Generator App

## Overview

This is a simple password generator app built using React. The app allows users to generate a random password based on specified criteria, such as length, inclusion of numbers, and special characters. Additionally, users can easily copy the generated password to their clipboard for convenient use.

## Hooks Usage

The following React hooks are utilized in this app:

- **useState**: Manages the state variables for password length (`length`), inclusion of numbers (`numbersAllowed`), inclusion of special characters (`specialCharsAllowed`), and the generated password (`password`).

- **useRef**: Creates a ref (`passRef`) to access the password input element.

- **useCallback**: Memoizes the `passwordGenerator` and `copyPassToClip` functions to avoid unnecessary re-renders when their dependencies change.

- **useEffect**: Triggers the `passwordGenerator` function when any of its dependencies (`length`, `numbersAllowed`, `specialCharsAllowed`) change.

## Features

- **Random Password Generation**: The app generates a random password based on user-defined criteria, including length, numbers, and special characters.

- **Copy to Clipboard**: Users can easily copy the generated password to their clipboard with the click of a button, making it convenient for use in various applications.

- **Adjustable Length**: Users can customize the length of the generated password using a slider, providing flexibility according to their security requirements.

- **Toggleable Options**: Users can choose to include numbers and special characters in the generated password by toggling corresponding checkboxes.

<br />

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-rePact/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
