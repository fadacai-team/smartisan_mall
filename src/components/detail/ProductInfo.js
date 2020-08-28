import React, { Component } from 'react'
import ProductInfoStyle from './ProductInfo.module.scss'

export default class ProductInfo extends Component {
    render() {
        return (
            <div className={ProductInfoStyle.productInfo}>
                <div className={ProductInfoStyle.productInfoTop}>
                    <div className={ProductInfoStyle.product}>
                        <div className={ProductInfoStyle.productPrice}>
                            <p className={ProductInfoStyle.productPriceLeft}>
                                <span className={ProductInfoStyle.nowPrice}>￥161.10</span>
                                <span className={ProductInfoStyle.realityPrice}>￥{this.props.productInfo.price+'.00'}</span>
                            </p>
                            <p className={ProductInfoStyle.freeShipping}>满99元包邮</p>
                        </div>
                        <h2 className={ProductInfoStyle.productName}>{this.props.productInfo.shop_info?this.props.productInfo.shop_info.sku_mobile_title:''}</h2>
                        <p className={ProductInfoStyle.productPoint}>{this.props.productInfo.shop_info?this.props.productInfo.shop_info.sub_title:''}</p>
                    </div>
                    <div className={ProductInfoStyle.discountInfo}>
                        <h3 className={ProductInfoStyle.discountTitle}>优惠信息</h3>
                        <div className={ProductInfoStyle.discountContent}>
                            <span>直降</span>
                            <em>官方自营配件 限时直降</em>
                        </div>
                    </div>
                </div>
                <div className={ProductInfoStyle.productModel} onClick={() => {
                    this.props.activeProps(null,null,'div')
                }
                }>
                    <h3 className={ProductInfoStyle.modelTitle}>已选版本</h3>
                    <div className={ProductInfoStyle.productType}>
                        <p className={ProductInfoStyle.productKind}>
                            <span className={ProductInfoStyle.kindChoose}>颜色：</span>
                            <span className={ProductInfoStyle.choose}>红色</span>
                        </p>

                        <p className={ProductInfoStyle.productKind}>
                            <span className={ProductInfoStyle.kindChoose}>数量：</span>
                            <span className={ProductInfoStyle.choose}>1</span>
                        </p>
                    </div>
                </div>
                <div className={ProductInfoStyle.serviceNote}>
                    <h3 className={ProductInfoStyle.serviceTitle}>服务说明</h3>
                    <ul className={ProductInfoStyle.serviceLists}>
                        <li className={ProductInfoStyle.serviceList}>7天无理由换货</li>
                        <li className={ProductInfoStyle.serviceList}>15天质量问题换货</li>
                    </ul>
                </div>
            </div>
        )
    }
}
