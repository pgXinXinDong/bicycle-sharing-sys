import React from "react"
import { Layout } from "antd";
import NarMenu from "../../component/bar"
import HeaderContent from "../../component/header"
import "../../component/bar/index.less"
import "./index.less"
import logo from "../../logo.svg"
const {Header,Content,Footer,Sider} =Layout






class Index extends React.Component{
    state={
        collapsed:false,
        logoTrag:true
    }
    onCollapse= collapsed => {
        this.setState({
            collapsed,
            logoTrag : !this.state.logoTrag
        })
    }
    render(){
        return(
            <Layout style={{minHeight:'100vh'}}>
                <Sider collapsible collapsed = {this.state.collapsed} onCollapse={this.onCollapse}>      <div className={  this.state.logoTrag?"logo":"logoHeight"}>
                        <img className="logoImg" src={logo}/>
                       <span
                           className={
                               this.state.logoTrag?"logoShow":"logoHide"
                           }
                       >共享单车系统</span>
                    </div>
                    <NarMenu/>
                </Sider>
                <Layout>
                    <Header>
                        <HeaderContent/>
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Index
