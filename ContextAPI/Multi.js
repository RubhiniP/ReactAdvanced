import React, { Component } from "react";
import { ThemeConsumer, UserConsumer } from "./UserContext";

class Multi extends Component{
    render(){
        return(
            <div>
                <ThemeConsumer>
                    {(theme) => (
                        <UserConsumer>
                            {(username) => (
                                <div>username = {username} theme={theme}</div>
                            )}
                        </UserConsumer>
                    )}
                </ThemeConsumer>
            </div>
        );
    }
}

export default Multi;