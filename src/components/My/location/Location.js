import React, { Component } from 'react'
import Title from "../order/Title"
import {withRouter} from "react-router-dom"
import "./Location.scss"
 class Location extends Component {
    constructor(props){
        super(props)
    }
    HandleAddAddress(){
        this.props.history.push("/my/address")
    }
    render() {
        return (
            <div className="details">
                <Title title={"地址列表"}></Title>
                <div className="content">
                    <div className="address">
                        <div className="addressInfo">
                            <div className="infoTop">
                                <div className="name">
                                    木子李
                                </div>
                                <div className="number">
                                    15797841029
                                </div>
                                <em className="iconWrite">
                                    默认地址
                                </em>
                            </div>
                            <div className="addressDetails">
                                北京市直辖区长安路389号
                            </div>
                        </div>
                       
                            <i class="changeAddress">
                           
                            </i>
       
                    </div>
                    <div className="address">
                        <div className="addressInfo">
                            <div className="infoTop">
                                <div className="name">
                                    木子李
                                </div>
                                <div className="number">
                                    15797841029
                                </div>
                               
                            </div>
                            <div className="addressDetails">
                                北京市直辖区长安路389号
                            </div>
                        </div>
                       
                            <i class="changeAddress">
                           
                            </i>
       
                    </div>

                    
                    <div className="addAddress" onClick={this.HandleAddAddress.bind(this)}>
                        添加地址
                    </div>
                </div>
                
            </div>
        )
    }
}
export default withRouter(Location)