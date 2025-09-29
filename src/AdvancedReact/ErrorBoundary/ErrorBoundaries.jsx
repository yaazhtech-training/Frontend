import React, { Component } from 'react';
export default class ErrorBoundaries extends Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }

    static getDerivedStateFromError(error){
        return {hasError:true};
    }

    componentDidCatch(error,info){
        console.log("ErrorBoundary caught an error",error,info);
    }

   render() {
    if (this.state.hasError) {
        return (
            <div>
                <h1>Something went wrong.</h1>
            </div>
        );
    }
    return this.props.children;
}
}
