# react-ring-chart
a ring-chart based on svg and react

### Documentation

#### Params

```
config
|Key                   | Type     | Default            | Description |
| -------------------- | -------  | ---- ------------- |
|width                 | number   | 300                |                   |
|gap                   | number   | 10                 |     
|titleFontSize         | string   | 14                 |    
|percentageFontSize    | string   | 24                 |                    |
|innerBgDefault        | string   | #cbcbcb            |                    |
|outerBgDefault        | string   | #e8e8e8            |                    |
|innerBgActive         | string   | #99b8f9            |                    |
|outerBgActive         | string   | #d2e0fc            |                    |
|title                 | string   | total              |                    |
|titleFill             | string   | #aaa               |                    |
|percentageFill        | string   | #24bcb4            |                    |
|percentage            | number   | 0                  |                    |
|top                   | object 
|                           active:bool,
|                           imgUrl:string,
|                           text:string,
|                           fontSize:string,
|                           textFill:string            |                  |                    |
|bottom                | object (same as top)
|left                  | object (same as top)
|right                 | object (same as top)
```
### Usage

#### Step 1 - install

```javascript
	npm install react-ring-chart --save
```

#### Step 2 - import and use in project
 ```javascript
import RingChart from "react-ring-chart";

      <RingChart config = {config}/>
    
```
#### Demo
```javascript
    mkdir react-ring-chart
    cd react-ring-chart
    npm i react-ring-chart
    npm i
    npm run start
```    

#### Note
```
    make sure that '@babel/plugin-proposal-class-properties' and 'babel-preset-react-app' are in your devDependencies.
    if you use 'creat-react-app',do the follow steps below:
        1. {
                        test: /\.(js|mjs)$/,
                        exclude: /@babel(?:\/|\\{1,2})runtime/,
                        loader: require.resolve('babel-loader'),
                        options: {
                          babelrc: false,
                          configFile: false,
                          compact: false,
                          presets: [
                            [
                              require.resolve('babel-preset-react-app/dependencies'),
                              { helpers: true },
                            ],
                        +     ***[ "react-app"]***
                          ],
                        +  ***plugins:[ ['@babel/plugin-proposal-class-properties',{'loose':true}]],***
                          cacheDirectory: true,
                          // See #6846 for context on why cacheCompression is disabled
                          cacheCompression: false,
                          
                          // Babel sourcemaps are needed for debugging into node_modules
                          // code.  Without the options below, debuggers like VSCode
                          // show incorrect code and set breakpoints on the wrong lines.
                          sourceMaps: shouldUseSourceMap,
                          inputSourceMap: shouldUseSourceMap,
             },
        2.
    
    
        