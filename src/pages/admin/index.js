import React from "react"
import { Layout } from "antd";
import NarMenu from "../../component/bar"
const {Header,Content,Footer,Sider} =Layout




class Index extends React.Component{
    state={
        collapsed:true
    }
    onCollapse= collapsed => {
        this.setState({
            collapsed
        })
    }
    render(){
        return(
            <Layout style={{minHeight:'100vh'}}>
                <Sider collapsible collapsed = {this.state.collapsed} onCollapse={this.onCollapse}>     <div className="logo" />
                    <NarMenu/>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Index
