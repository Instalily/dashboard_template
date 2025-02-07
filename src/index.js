import React from 'react';
import ReactDOM from 'react-dom/client';

// UI & Routers
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import "./globals.css";

// Sidebar
import { SidebarLayout } from "components/catalyst/sidebar-layout";
import { SidebarContent } from "components/layout/SidebarContent";
import { NavbarContent } from "components/layout/NavbarContent";
import { Header } from "components/layout/Header";

// Contexts 
import { AppProvider } from 'contexts/AppContext';

// Pages
import HomePage from "pages/home/Index";
import Prospects from "pages/prospects/Index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <BrowserRouter>
      <AppProvider>
        <SidebarLayout navbar={<NavbarContent />} sidebar={<SidebarContent />}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prospects" element={<Prospects />} />
          </Routes>
        </SidebarLayout>
      </AppProvider>
    </BrowserRouter>
  </ThemeProvider>
);
