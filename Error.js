import React, { Component } from "react";
// import Framework from "./ErrorHandling/Framework";
// import ErrorBoundary from "./ErrorHandling/ErrorBoundary";
// import EventHandlers from "./ErrorHandling/EventHandlers";
// import SetTimeOut from "./ErrorHandling/SetTimeOut";
// import ExternalPackage2 from "./ErrorHandling/ExternalPackage2";
import ReactErrorBoundary from "./ErrorHandling/EventHandler2";

class Error extends Component{
  render(){
    return(
      <div>
        {/* <ErrorBoundary>
          <Framework name='MERN'></Framework>
        </ErrorBoundary>
        <ErrorBoundary>
          <Framework name='JAM'></Framework>
        </ErrorBoundary>
        <ErrorBoundary>
          <Framework name='React'></Framework>
        </ErrorBoundary> */}
        {/* <EventHandlers /> */}
        {/* <SetTimeOut /> */}
        {/* <ExternalPackage2 /> */}
        <ReactErrorBoundary />
      </div>
    );
  }
}

export default Error;