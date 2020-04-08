import React from 'react';
import ReactDOM from 'react-dom';
 import RingChart from "./index.js";

class App extends React.Component {
 constructor(props, context) {
  super(props, context);
  this.state = {
   config: {
    width:300,
    gap:10,
    text:'total',
    total:75,
    top:{active:true,text:'student',imgUrl:'http://121.89.196.17:5000/xueji.jpg',},
    right:{active:true,text:'photo',imgUrl:'http://121.89.196.17:5000/pz.jpg'},
    left:{active:true,text:'person',imgUrl:'http://121.89.196.17:5000/grxx.jpg'},
    bottom:{active:false,text:'contact',imgUrl:'http://121.89.196.17:5000/lxrxx.jpg'}
   }}
 }


 componentDidMount() {
  setTimeout(()=>{
   this.setState({
    config:{...this.state.config,width:400}
   });
      }
  ,3000)

 }


 render () {
  const {config} = this.state;
  return <div>
    <RingChart config = {config}/>
  </div>
 }
}


ReactDOM.render(
 <App/>,
    document.getElementById('root')
);

