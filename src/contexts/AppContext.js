import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import axios from 'axios'

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    return (
        <AppContext.Provider
        value={{
        }}
        >
        {children}
        </AppContext.Provider>
    );
};

