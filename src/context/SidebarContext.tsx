// src/context/SidebarContext.tsx
import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

// 1. Define the context type
interface SidebarContextType {
  collapsed: boolean;
  toggleSidebar: () => void;
}

// 2. Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// 3. Create the provider
export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// 4. Custom hook for easy access
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
