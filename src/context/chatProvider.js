import {  createContext, useContext, useState } from "react";

const chatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <chatContext.Provider value={(user, setUser)}>
      {children}
    </chatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(chatContext);
};

export default ChatContextProvider;