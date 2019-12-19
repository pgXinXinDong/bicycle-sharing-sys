import React from "react"

export default  class ContentAdmin extends React.Component{

        render(){
            console.log(this.props)
            return(
                <div>{ this.props.children }</div>
           )
        }
}
