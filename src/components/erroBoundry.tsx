import { Component, ReactNode } from "react";

type T_states={
    hasError:boolean;
}
type T_props={
    children:ReactNode
}

class ErrorBoundry extends Component<T_props,T_states>{
    constructor(props:T_props){
        super(props)
        this.state={
            hasError:false,
        }
    }
    render(): ReactNode {
        const {hasError}=this.state
        if(hasError){
            return <h1>Oooops. That is not good!</h1>
        }
        else{
            return <div>{this.props.children}</div>
        }
    }
}

export default ErrorBoundry;