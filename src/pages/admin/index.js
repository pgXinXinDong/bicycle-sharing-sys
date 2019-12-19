import React from "react"
import { Layout } from "antd";
import { BrowserRouter as Router,Route} from "react-router-dom"
import NarMenu from "../../component/bar"
import HeaderContent from "../../component/header"
import ContentAdmin from "../../component/content";
import "./index.less"
const {Header,Content,Footer} =Layout

class Admin extends React.Component{
    render(){
        return(
            <Router>
                <Layout style={{minHeight:'100vh'}}>
                    <NarMenu/>
                    <Layout>
                        <Header>
                            <HeaderContent/>
                        </Header>
                        <Content>
                           <Route path={["/admin/:minId","/admin/:minId/:id"]} component={ContentAdmin}></Route>
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}

export default Admin
