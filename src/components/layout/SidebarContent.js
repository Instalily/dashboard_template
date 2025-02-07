import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarSection,
  SidebarSpacer,
  SidebarItem,
  SidebarLabel,
} from 'components/catalyst/sidebar';
import { Divider } from 'components/catalyst/divider';
import { menuItems } from './MenuItems';
import { PanelLeft, Sailboat } from 'lucide-react';

export function SidebarContent({ closeSidebar, isMini = false, toggleMini = () => {} }) {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <Sidebar className={`transition-all duration-300 ease-in-out ${isMini ? 'w-18' : 'w-64'}`}>
      {/* Header Section */}
      <SidebarHeader>
        <SidebarSection>
          <div className="flex w-full items-center justify-between">
            <Link to="/" onClick={closeSidebar}>
              <div className={`${theme === "dark" ? "invert" : ""} ${isMini ? "w-6 h-6" : "w-[60px] h-[60px]"}`}>
                <Sailboat className="w-full h-full" />
              </div>
            </Link>
            <button onClick={toggleMini} className="text-gray-900 hover:text-gray-900 self-start h-full max-lg:hidden">
              <PanelLeft className="w-4 h-4" />
            </button>
          </div>
        </SidebarSection>
      </SidebarHeader>

      {/* Body Section */}
      <SidebarBody>
        <SidebarSection>
          <div className={`${isMini ? 'flex flex-col items-center gap-1' : 'flex flex-col gap-1'}`}>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <SidebarItem
                  as={Link}
                  to={item.path}
                  key={item.path}
                  onClick={closeSidebar}
                  current={isActive}
                >
                 <item.icon style={{ width: '22px', height: '22px' }} />
                  {!isMini && (
                    <SidebarLabel className="text-[14px]">
                      {item.label}
                    </SidebarLabel>
                  )}
                </SidebarItem>
              );
            })}
          </div>
        </SidebarSection>
        <SidebarSpacer />
      </SidebarBody>
    </Sidebar>
  );
}
