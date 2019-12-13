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
                return<SubMenu key={item.title} title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
            }
            return<Menu.Item key={item.key}>{item.title}</Menu.Item>
        })

    }
    render(){
        console.log(111,this.state.menuTreeNode)
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