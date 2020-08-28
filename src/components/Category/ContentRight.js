import React, { Component } from 'react'
import rightStyle from './ContentRight.module.scss'

export default class ContentRight extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={rightStyle.contentWarp}>
                <div className={rightStyle.banner+' '+(!this.props.contentRightData.banner?rightStyle.bannerNone:'')}>
                    <img className={rightStyle.bannerImg} src={this.props.contentRightData.banner?this.props.contentRightData.banner[0].image+'?x-oss-process=image/resize,w_828/format,webp':''}/>
                </div>
                {
                    this.props.contentRightData.second?this.props.contentRightData.second.map(
                        (item)=>{
                            return <div className={rightStyle.kinds} key={item.classifyId}>
                                        <h2 className={rightStyle.title}>{item.classifyName}</h2>
                                        <ul className={rightStyle.kindList}>
                                            {item.third.map(
                                                (every)=>{
                                                    return <li className={rightStyle.kind} key={every.classifyId}>
                                                            <img src={every.image+'?x-oss-process=image/resize,w_160/format,webp'} className={rightStyle.kindImage}/>
                                                            <p className={rightStyle.kindTitle}>{every.classifyName}</p>
                                                        </li>
                                                        
                                                }
                                            )}
                                        </ul>
                                    </div>
                        }
                    ):''
                }
            </div>
        )
    }

    
}
