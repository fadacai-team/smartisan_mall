import React, { Component } from 'react'
import bannerStyle from './ProductBanner.module.scss'


export default class ProductBanner extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
            <div className={bannerStyle.proBanner}>
                <ul className={bannerStyle.bannerLists}>
                    {this.props.bannerData?this.props.bannerData.map((item,index) => {
                        return <li className={bannerStyle.bannerList} key={item}><img src={item+"?x-oss-process=image/resize,w_576/format,webp"}/></li>
                    }
                    ):''}
                </ul>
            </div>
        )
    }
}
