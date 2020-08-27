import React from 'react'
import style from './TitleBar.module.scss'
import {withRouter} from 'react-router-dom'

function TitleBar(props) {
    return (
        <div className={style.title_bar}> 
            <div onClick={
                ()=>{
                    props.history.goBack()
                }
            } className={style.nav_back}>返回</div>
    <div className={style.nav_edit} onClick={props.edit}>{props.isedit?'完成':'编辑'}</div>
            <h1 className={style.nav_title}> 购物车 </h1> 
        </div>
    )
}
export default withRouter(TitleBar)
