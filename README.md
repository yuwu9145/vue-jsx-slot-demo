# jsx-slot-testing

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


## Steps to reproduce
1. Load the project `npm run dev`
2. Type something into the input box
3. Inspect console log

## Result
Both "Test Updated!" & "Wrapper Updated!" are printed out
If go to src/App.tsx and comment out line 15, only "Wrapper Updated!" is printed

## Expect result
"Test Updated!" should never be printed in console log in either case
