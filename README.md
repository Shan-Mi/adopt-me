## Follow Brian Holt's course from Frontendmasters, and this is so far the best than all the others.

Some notes about setting
1.  `npm init -y`
2.  `npm install -D prettier` (or `npm i -D`)
3.   make a new file, prettierrc at root folder (.prettierrc)
4.   `npm i -D eslint eslint-config-prettier`
5.   make a new file, eslintrc at root folder (.eslintrc.json)
6.   create `.gitignore` under your root folder.
7.   (we use parcel for now) `npm i -D parcel-bundler`
8.   `npm run dev` (parcel works and we can have a live server now)
9.   `npm i react react-dom` (install two packages of the npm registrate)
10.  `npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react` (then eslint know how to handle with React and tell you if you make any mistakes)
11.  `npm i -D eslint-plugin-react-hooks`
12.  `npm i -D cross-env`
13.  `npm install @emotion/core @emotion/babel-preset-css-prop`(for Emotion)
14. `vscode-styled-components` this extension helps you to auto complete inline-css
    
15. SSR Rationale & Initial Setup `npm i babel-cli express`
16. in package.json file, add`"build": "parcel build --public-url ./dist/ src/index.html",` under "scripts" (build my code for production, public-url: it will searve everything from /dist) `"start": "npm run build && babel-node server/index.js",`
17. ` npm install express @babel/node`
18. change src in index.html file -> `npm run start`
> Cannot get this server part work for now

19. `npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react` put .babelrc under the root folder
20. `npm install -D typescript` Use typescript now!
21. `npx tsc --init `  npx: a tool that's going to run npm binaries for you. This is going to start a typescript project for you.
22. `npm install -D @types/react @types/react-dom @types/reach__router` although React is not written in typescript, we can still get **types** out of it by installing this package. 
23. `npm uninstall eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`install TSLint ` npm i -D tslint tslint-react tslint-config-prettier `
24. package.json: `"lint": "tslint --project",` --project: it tells that there is a tsconfig, and read everything from that config, which it's getting from TypeScript.

#### TIPS:
```js
//eslint-disable-next-line
```
We can put it in front of these codes that remind you you might have made some mistakes, then it stops warning you.
