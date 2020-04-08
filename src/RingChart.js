import React from 'react';
import PropTypes from 'prop-types';
const blockShape = {
    active:PropTypes.bool,
    text:PropTypes.string,
    imgUrl:PropTypes.string,
    fontSize:PropTypes.number,
    textFill:PropTypes.string,
};
class RingChart extends React.Component {
    static propTypes = {
            config:PropTypes.shape({
                width: PropTypes.number,
                gap: PropTypes.number,
                titleFontSize:PropTypes.number,
                percentageFontSize:PropTypes.number,
                innerBgDefault:PropTypes.string,
                outerBgDefault:PropTypes.string,
                innerBgActive: PropTypes.string,
                outerBgActive: PropTypes.string,
                title:PropTypes.string,
                titleFill:PropTypes.string,
                percentageFill: PropTypes.string,
                percentage: PropTypes.number,
                top:PropTypes.shape(blockShape),
                bottom:PropTypes.shape(blockShape),
                left:PropTypes.shape(blockShape),
                right:PropTypes.shape(blockShape),
            }),
    };
    static defaultProps = {
        config:{
            width:300, // svg width
            gap:10,
            titleFontSize:14,
            percentageFontSize:24,
            innerBgDefault:'#cbcbcb',
            outerBgDefault:'#e8e8e8',
            innerBgActive:'#99b8f9',
            outerBgActive:'#d2e0fc',
            title:'total',
            titleFill:'#aaa',
            percentageFill:'#24bcb4',
            percentage:0,
            top:{
                active:false,
                text:'top',
                imgUrl:'',
                fontSize:14,
                textFill:'#aaa'

            },
            right:{
                active:false,
                text:'right',
                imgUrl:'',
                fontSize:14,
                textFill:'#aaa'
            },
            bottom:{
                active:false,
                text:'bottom',
                imgUrl:'',
                fontSize:14,
                textFill:'#aaa'
            },
            left:{
                active:false,
                text:'left',
                imgUrl:'',
                fontSize:14,
                textFill:'#aaa'
            },
        }
    };
    constructor(props) {
        super(props);
        this.defaultConfig = {...RingChart.defaultProps.config};
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(JSON.stringify(this.props.config) === JSON.stringify(nextProps.config)){
            return false;
        } else {
            console.log('ring-chart did render')
            return true;
        }
    }

    //画图
    draw = (config) => {
        const {width,gap} = config;
        const scale = Number((width/300).toFixed(4));
        const height = width;
        const center = {x: width / 2, y: height / 2};//center of svg
        const SquareDiagonal = Math.sqrt(gap * gap);
        const R = width / 2 - gap / 2;//big circle radius
        const r = width/6;// inner circle radius
        const rr = width/5;// middle circle radius
        const holeR = width/12;//mosaic circle


        const angel = 45 / 180 * Math.PI;
        //top
        const PointT1 = {x: center.x - r * Math.cos(angel), y: center.y - SquareDiagonal / 2 - r * Math.sin(angel)}; //small arc left beginPoint
        const PointT2 = {x: center.x - rr * Math.cos(angel), y: center.y - SquareDiagonal / 2 - rr * Math.sin(angel)};//middle arc left beginPoint
        const PointT3 = {x: center.x + rr * Math.cos(angel), y: center.y - SquareDiagonal / 2 - rr * Math.sin(angel)};//small arc right beginPoint
        const PointT4 = {x: center.x + r * Math.cos(angel), y: center.y - SquareDiagonal / 2 - r * Math.sin(angel)};//middle arc right beginPoint
        const PointT5 = {x: center.x - R * Math.cos(angel), y: center.y - SquareDiagonal / 2 - R * Math.sin(angel)};//large arc left beginPoint
        const PointT6 = {x: center.x + R * Math.cos(angel), y: center.y - SquareDiagonal / 2 - R * Math.sin(angel)};//large arc right beginPoint

        //bottom
        const PointB1 = {x: center.x - r * Math.cos(angel), y: center.y + SquareDiagonal / 2 + r * Math.sin(angel)};
        const PointB2 = {x: center.x - rr * Math.cos(angel), y: center.y + SquareDiagonal / 2 + rr * Math.sin(angel)};
        const PointB3 = {x: center.x + rr * Math.cos(angel), y: center.y + SquareDiagonal / 2 + rr * Math.sin(angel)};
        const PointB4 = {x: center.x + r * Math.cos(angel), y: center.y + SquareDiagonal / 2 + r * Math.sin(angel)};
        const PointB5 = {x: center.x - R * Math.cos(angel), y: center.y + SquareDiagonal / 2 + R * Math.sin(angel)};
        const PointB6 = {x: center.x + R * Math.cos(angel), y: center.y + SquareDiagonal / 2 + R * Math.sin(angel)};

        //left
        const PointL1 = {x: center.x - SquareDiagonal / 2 - r * Math.cos(angel), y: center.y + r * Math.sin(angel)};
        const PointL2 = {x: center.x - SquareDiagonal / 2 - rr * Math.cos(angel), y: center.y + rr * Math.sin(angel)};
        const PointL3 = {x: center.x - SquareDiagonal / 2 - rr * Math.cos(angel), y: center.y - rr * Math.sin(angel)};
        const PointL4 = {x: center.x - SquareDiagonal / 2 - r * Math.cos(angel), y: center.y - r * Math.sin(angel)};
        const PointL5 = {x: center.x - SquareDiagonal / 2 - R * Math.cos(angel), y: center.y + R * Math.sin(angel)};
        const PointL6 = {x: center.x - SquareDiagonal / 2 - R * Math.cos(angel), y: center.y - R * Math.sin(angel)};

        //right
        const PointR1 = {x: center.x + SquareDiagonal / 2 + r * Math.cos(angel), y: center.y + r * Math.sin(angel)};
        const PointR2 = {x: center.x + SquareDiagonal / 2 + rr * Math.cos(angel), y: center.y + rr * Math.sin(angel)};
        const PointR3 = {x: center.x + SquareDiagonal / 2 + rr * Math.cos(angel), y: center.y - rr * Math.sin(angel)};
        const PointR4 = {x: center.x + SquareDiagonal / 2 + r * Math.cos(angel), y: center.y - r * Math.sin(angel)};
        const PointR5 = {x: center.x + SquareDiagonal / 2 + R * Math.cos(angel), y: center.y + R * Math.sin(angel)};
        const PointR6 = {x: center.x + SquareDiagonal / 2 + R * Math.cos(angel), y: center.y - R * Math.sin(angel)};
        return (
            <div style={{position:'relative', width: width, height: height}}>
                <svg height={height} width={width}  xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink">
                    {/**********top**********/}
                    <g >
                        <path
                            d={`M${PointT1.x} ${PointT1.y} L${PointT2.x}
                    ${PointT2.y} A${rr} ${rr}  0 0 1  ${PointT3.x} ${PointT3.y} L${PointT4.x} ${PointT4.y} A${r} ${r} 0 0 0 ${PointT1.x} ${PointT1.y} Z`}
                            fill={config.top.active ? config.innerBgActive : config.innerBgDefault}
                        />
                        <path
                            d={`M${PointT2.x} ${PointT2.y} L${PointT5.x}
                    ${PointT5.y} A${R} ${R}  0 0 1  ${PointT6.x} ${PointT6.y} L${PointT3.x} ${PointT3.y} A${rr} ${rr} 0 0 0 ${PointT2.x} ${PointT2.y} Z`}
                            fill={config.top.active ? config.outerBgActive : config.outerBgDefault}
                        />
                        <circle cx={center.x} cy={(R - rr) / 2} r={holeR} fill="#fff"/>
                        <text
                            x={center.x}
                            y={(R - rr) / 2 + holeR + config.top.fontSize * 1.1}
                            textAnchor="middle"
                            fontSize={config.top.fontSize}
                            fill={config.top.textFill}
                        >{config.top.text}</text>

                    </g>

                    {/**********bottom**********/}
                    <g >
                        <path
                            d={`M${PointB1.x} ${PointB1.y} L${PointB2.x}
                    ${PointB2.y} A${rr} ${rr}  0 0 0  ${PointB3.x} ${PointB3.y} L${PointB4.x} ${PointB4.y} A${r} ${r} 0 0 1 ${PointB1.x} ${PointB1.y} Z`}
                            fill={config.bottom.active ? config.innerBgActive : config.innerBgDefault}
                        />
                        <path
                            d={`M${PointB2.x} ${PointB2.y} L${PointB5.x}
                    ${PointB5.y} A${R} ${R}  0 0 0  ${PointB6.x} ${PointB6.y} L${PointB3.x} ${PointB3.y} A${rr} ${rr} 0 0 1 ${PointB2.x} ${PointB2.y} Z`}
                            fill={config.bottom.active ? config.outerBgActive : config.outerBgDefault}
                        />
                        <circle cx={center.x} cy={height - (R - rr) / 2} r={holeR} fill="#fff"/>
                        <text
                            x={center.x}
                            y={height - (R - rr) / 2 + holeR + config.bottom.fontSize * 1.1}
                            textAnchor="middle"
                            fontSize={config.bottom.fontSize}
                            fill={config.bottom.textFill}
                        >{config.bottom.text}</text>
                    </g>
                    {/**********left**********/}
                    <g >
                        <path
                            d={`M${PointL1.x} ${PointL1.y} L${PointL2.x}
                    ${PointL2.y} A${rr} ${rr}  0 0 1  ${PointL3.x} ${PointL3.y} L${PointL4.x} ${PointL4.y} A${r} ${r} 0 0 0 ${PointL1.x} ${PointL1.y} Z`}
                            fill={config.left.active? config.innerBgActive : config.innerBgDefault}
                        />
                        <path
                            d={`M${PointL2.x} ${PointL2.y} L${PointL5.x}
                    ${PointL5.y} A${R} ${R}  0 0 1  ${PointL6.x} ${PointL6.y} L${PointL3.x} ${PointL3.y} A${rr} ${rr} 0 0 0 ${PointL2.x} ${PointL2.y} Z`}
                            fill={config.left.active ? config.outerBgActive : config.outerBgDefault}
                        />
                        <circle cx={(R - rr) / 2} cy={center.y} r={holeR} fill="#fff"/>
                        <text
                            x={(R - rr) / 2}
                            y={center.y + holeR + config.left.fontSize * 1.1 }
                            textAnchor="middle"
                            fontSize={config.left.fontSize}
                            fill={config.left.textFill}
                        >{config.left.text}</text>
                    </g>
                    {/**********right**********/}
                    <g >
                        <path
                            d={`M${PointR1.x} ${PointR1.y} L${PointR2.x}
                    ${PointR2.y} A${rr} ${rr}  0 0 0  ${PointR3.x} ${PointR3.y} L${PointR4.x} ${PointR4.y} A${r} ${r} 0 0 1 ${PointR1.x} ${PointR1.y} Z`}
                            fill={config.right.active ? config.innerBgActive : config.innerBgDefault}
                        />
                        <path
                            d={`M${PointR2.x} ${PointR2.y} L${PointR5.x}
                    ${PointR5.y} A${R} ${R}  0 0 0  ${PointR6.x} ${PointR6.y} L${PointR3.x} ${PointR3.y} A${rr} ${rr} 0 0 1 ${PointR2.x} ${PointR2.y} Z`}
                            fill={config.right.active ? config.outerBgActive : config.outerBgDefault}
                        />
                        <circle cx={width - (R - rr) / 2} cy={center.y} r={holeR} fill="#fff"/>
                        <text
                            x={width - (R - rr) / 2}
                            y={center.y + holeR + config.right.fontSize * 1.1}
                            textAnchor="middle"
                            fontSize={config.right.fontSize}
                            fill={config.right.textFill}
                        >{config.right.text}</text>
                    </g>
                    {/******middle percentage*****/}
                    <text
                        x={center.x}
                        y={center.y+ r*1/3}
                        textAnchor="middle"
                        fontSize={config.titleFontSize}
                        fill={config.titleFill}
                    >{config.title}</text>
                    <text
                        x={center.x}
                        y={center.y }
                        textAnchor="middle"
                        fontSize={config.percentageFontSize}
                        fill={config.percentageFill}
                    >{config.percentage}%</text>
                </svg>
                {/********image-top********/}
                {
                    config.top.imgUrl &&   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox={`0 0 ${holeR} ${holeR}`}
                        width={holeR}
                        height={holeR}

                        style={{position: 'absolute', top: (R - rr) / 2 - holeR/2, left: center.x -  holeR/2}}
                    >
                        <image
                            href={config.top.imgUrl}
                        />
                    </svg>
                }

                {/********image--bottom********/}
                {
                    config.bottom.imgUrl &&   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox={`0 0 ${holeR} ${holeR}`}
                        width={holeR}
                        height={holeR}

                        style={{position: 'absolute', top: height - ((R - rr) / 2 + holeR/2), left: center.x - holeR/2}}
                    >
                        <image

                            href={config.bottom.imgUrl}
                        />
                    </svg>
                }

                {/********image--left********/}
                {
                    config.left.imgUrl &&  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox={`0 0 ${holeR} ${holeR}`}
                        width={holeR}
                        height={holeR}

                        style={{position: 'absolute', top: center.y - holeR/2, left: (R - rr) / 2 - holeR/2}}
                    >
                        <image

                            href={config.left.imgUrl}
                        />
                    </svg>
                }

                {/********image--right********/}
                {
                    config.right.imgUrl &&  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox={`0 0 ${holeR} ${holeR}`}
                        width={holeR}
                        height={holeR}
                        style={{position: 'absolute', top: center.y - holeR/2, left: width - ((R - rr) / 2 + holeR/2)}}
                    >
                        <image
                            href={config.right.imgUrl}
                        />
                    </svg>
                }
            </div>
        );
    };


    getConfig = (config={},pro=null)=>{
        for(let [key,value] of Object.entries(config)){
            if(Object.prototype.toString.call(value)==='[object Object]'){
                this.getConfig(value,key);
            } else {
                if(pro){
                    this.defaultConfig[pro][key] = value;

                } else {
                    this.defaultConfig[key] = value;
                }
            }
        }

        return {...this.defaultConfig};


    };

    render() {
        const config = this.getConfig(this.props.config);
        return (
            <div >
                {this.draw(config)}
            </div>

        );
    }

}

export default RingChart
