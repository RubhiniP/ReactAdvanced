import React from "react";

const UserContext = React.createContext({
    name: 'Rubhini'
});

const UserDefault = React.createContext('Default value');
const ThemeContext = React.createContext('light');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

const DefaultProvider = UserDefault.Provider;
const DefaultConsumer = UserDefault.Consumer;

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { UserProvider, UserConsumer, DefaultProvider, DefaultConsumer, ThemeProvider, ThemeConsumer };
export default UserContext;