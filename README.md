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
Both App and Test components re-rendered, as "Test Updated!" & "App Updated!" are printed out.

However, if go to src/App.tsx and comment out line 20, only App component is updated (only "Wrapper Updated!" is printed), which is expected.

## Expect result
"Test Updated!" should never be printed in console log in either case
