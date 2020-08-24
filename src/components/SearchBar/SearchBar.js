import React, { Component } from 'react'
import styles from './SearchBar.module.scss'
import {withRouter} from 'react-router-dom'
import axios from '../../Utils/myaxios'
class SearchBar extends Component {
    constructor(props){
        super(props)
        // console.log(props)
    }
    state = {
        data:[],
        keyWords:'',
        keyData:[]
    }
    getsearchList(){
        if(!this.state.keyWords){
            // console.log(this.state.keyData)
            return ''
        }else{
            let newKeyData = []
            this.state.keyData.map((v,i)=>{
                if(v.indexOf(this.state.keyWords)>-1){
                    // console.log(v.indexOf(this.state.keyWords))
                    newKeyData= v.slice(this.state.keyWords)
                    // newKeyData.join('')
                    // console.log(newKeyData.join(''))
                    console.log(newKeyData,i)
                }
            })
            // console.log(this.state.keyData)
            let liList = this.state.keyData.map((v,i)=>{return (<li key={i}>{v}</li>)})
            return (
                <ul className={styles.search_matching_warp}>
                    {liList}
                </ul>
            )
            
        }
    }
    componentDidMount(){
        axios.get('/v1/search/hot-words').then((data)=>{
            // console.log(data.hot)
                      // console.log(this.state.data)
            this.setState({data:data.hot})
            // console.log(this.state.data)
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    render() {
        return (
            <div className={styles.app_warp}>
                <div>
                    <div className={styles.search_input_warp}>
                        <div className={styles.search_inout_inline}>
                            <div className={styles.search_input_form}>
                                <div className={styles.form_item}>
                                    <span className={styles.search_btn}></span>
                                    <input type="text" maxLength="30" 
                                    placeholder="请输入搜索关键字" 
                                    autoFocus 
                                    className={styles.input_box}
                                    value={this.state.keyWords}
                                    onChange={(e)=>{
                                        // console.log(e.target.value)
                                        this.setState({keyWords:e.target.value})
                                        axios.get('/v1/search/suggest?keyword='+this.state.keyWords).then((data)=>{
                                            // console.log(data)
                                            this.setState({keyData:data.data})
                                            // console.log(this.state.keyData)
                                            

                                        })
                                    }}
                                    ></input>
                                </div>
                                <span className={styles.cancle} onClick={()=>{
                                    this.props.history.push('/')
                                }}>取消</span>
                            </div>
                        </div>
                        {
                            this.getsearchList() 
                        }
                    </div>
                    <div className={styles.hot_list}>
                        <h4>热门搜索</h4>
                        <ul>
                            {this.state.data.map((v,i)=>{
                                return (
                                <li key={i}>{v}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}



export default withRouter(SearchBar)
