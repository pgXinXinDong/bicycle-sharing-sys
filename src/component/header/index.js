import React from "react"
import {Row,Col} from "antd"
import util from "../../utils/utils"
import Axios from "axios"
import "./index.less"

export default class HeaderContent extends React.Component{
     state={

     }
    componentWillMount(){
        setInterval(()=>{
            let sysTime  = util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            });
        },1000)
        this.getWeatcherApiData()
    }
    getWeatcherApiData(){
        Axios.get("/weather")
             .then((res)=>{

                 res = res.data.HeWeather6[0];

                 let location =res.basic.location;
                 let cond_txt = res.now.cond_txt;
                 let wind_dir = res.now.wind_dir
                 let weather = location + " : " + cond_txt + wind_dir
                 this.setState({
                     weather:weather
                 })
             })
             .catch(err=>{
                 return
             })

    }



    render(){
        return(
            <div>
                <Row className="p-l-r">
                    <Col span={6} offset={16} className="t-a-r" >
                        欢迎,河畔一角
                    </Col>
                    <Col span={1} push={1}>
                        <a className="quitBtn"> 退出</a>
                    </Col>
                </Row>
                <p className="line"></p>
                <Row className="p-l-r" style={{height:"36px",lineHeight:"36px"}}>
                    <Col span={1} offset={1} className="p-r">
                        <span>首页</span>
                        <span className="arrow-down arrow-pst"></span>
                    </Col>
                    <Col span={6} offset={13} className="t-a-r">
                        {this.state.sysTime}
                    </Col>
                    <Col span={3} push={1} >
                        <span>{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
            )

    }

}

