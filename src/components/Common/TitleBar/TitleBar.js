import React from 'react'
import style from './TitleBar.module.scss'

export default function TitleBar(props) {
    return (
        <div className={style.title_bar}> 
            <div className={style.nav_back}>返回</div>
            <div className={style.nav_edit}>编辑</div>
            <h1 className={style.nav_title}> 购物车 </h1> 
        </div>
    )
}
