import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ExternalPackage from "./ExternalPackage";

function ExternalPackage2(){

    const FallBackUI = ({error}) => {
        return(
            <div>
                <h2>I'm a FallbackComponent from react error boundary</h2>
                {error.message && <p>This is the error message: {error.message}</p>}
            </div>
        );
    }

    return(
        <div>
            <ErrorBoundary FallbackComponent={FallBackUI}
            onError={(error) => console.log(error)}>
                <ExternalPackage name='Rubhini'/>
                <ExternalPackage name='React' />
            </ErrorBoundary>
        </div>
    );
}

export default ExternalPackage2;