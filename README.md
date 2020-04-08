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
 ```import RingChart from "react-ring-chart";

      <RingChart config = {config}/>
    
```
#### Demo
    ```npm install react-ring-chart
    
        npm run start
    ```    
        