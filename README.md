Generate it without having it ask any questions:
npm init -y

Setup typescript globaly:
npm i -g typescript

Create typescrip.json file
tsc --init

The html-webpack-plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags

style-loader - inject CSS into the DOM.

Loaders arrays applies from right to left

For children props is better use type React.ReactNode because JSX.Element is not good enough since a valid React children could be a string, a boolean, null...
