import React from "react"
import MenuConfig from "../../config/menuConfig"
import  {Menu,Icon,Layout} from "antd"
import logo from "../../logo.svg"
import { Link } from "react-router-dom"
import "./index.less"
const { SubMenu } = Menu
const { Sider } = Layout



class NarMenu extends React.Component{
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
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }


    renderMenu=(data)=> {
        return data.map(item=>{
            if(item.children){
                return<SubMenu key={item.title}
                  title={
                     <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                     </span>
                               }
                >

                    {this.renderMenu(item.children)}
                </SubMenu>
            }
            return<Menu.Item key={item.key}>
                   <Link to={item.key}>
                        <Icon type={item.icon} />
                        <span>{item.title}</span>
                   </Link>
                </Menu.Item>
        })

    }


    render(){
        return(
            <Sider collapsible collapsed = {this.state.collapsed} onCollapse={this.onCollapse}>
                <div className={  this.state.logoTrag?"logo":"logoHeight"}>
                    <img className="logoImg" src={logo}/>
                    <span
                        className={
                            this.state.logoTrag?"logoShow":"logoHide"
                        }
                    >共享单车系统</span>
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </Sider>
        )
    }
}







export default NarMenu