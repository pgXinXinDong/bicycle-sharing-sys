import React from "react"
import MenuConfig from "../../config/menuConfig"
import  {Menu,Icon,Button} from "antd"
const { SubMenu } = Menu


class NarMenu extends React.Component{
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
                    <Icon type={item.icon} />
                    <span>{item.title}</span>
                </Menu.Item>
        })

    }
    render(){
        return(
            <Menu
                mode="inline"
                theme="dark"
            >
                {this.state.menuTreeNode}
            </Menu>
        )
    }
}

export default NarMenu