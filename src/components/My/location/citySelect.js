import React, { Component } from 'react'
import styles from "./citySelect.module.scss"
// import axios from "../../../Utils/myaxios"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cities:["请选择"],   //选项
      city:"请选择"   // 默认选项
     }
  }
  componentDidMount(){
    
  }
 
  render() { 
    return (
      <div className={styles.cityChoose}>
        {/* value放在select里 select框也要onChcange*/}
        <select value={this.state.city} onChange={(e)=>this.getValue(e)}>
          {
            // 遍历option
            this.state.cities.map((ele,index)=>{
              return(
                <option key={index}>{ele}</option>
              )
            })
          }
        </select>
      </div>
     );
  }
  getValue=(event)=>{
    //获取被选中的值
    console.log(event.target.value);
    this.setState({
      //默认值改变
      city:event.target.value
    })

  }
}
 
export default App;
