import React from "react"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Admin from "../admin"




class Index extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" render={()=><div>login</div>}></Route>
                        <Route path="/admin" component={Admin}></Route>
                        <Route path="/register" render={()=><div>register</div>}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Index