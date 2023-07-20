import React from "react";
// import ComponentC from "./ContextAPI/ComponentC";
// import { DefaultProvider } from "./ContextAPI/UserContext";
import { UserProvider } from "./ContextAPI/UserContext";
// import ClassA from "./ContextAPI/ClassA";
// import Multi from "./ContextAPI/Multi";
// import { ThemeProvider } from "./ContextAPI/UserContext";
import FunctionA from "./ContextAPI/FunctionA";

function Context(){
  return(
    <div>
    {/* <UserProvider value="Rubhini">
      <ComponentC />
    </UserProvider> */}
    {/* <DefaultProvider>
      <ComponentC />
    </DefaultProvider> */}
    {/* <ClassA />     */}
    {/* <ThemeProvider value="dark">
      <UserProvider value="Rubhini">
        <Multi />
      </UserProvider>
    </ThemeProvider> */}
    <UserProvider value="Prakash">
      <FunctionA />
    </UserProvider>
    </div>
  );
}

export default Context;