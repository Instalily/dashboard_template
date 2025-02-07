import React, { useState, useEffect, useContext } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "components/ui/breadcrumb";
import { HomeIcon } from "lucide-react";
import { Heading } from "components/catalyst/heading";
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./MenuItems";

export const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  const currentMenuItem = menuItems.find((item) => item.path === location.pathname) || {};

  useEffect(() => {
    setTitle(currentMenuItem.page_title || "");
  }, [location.pathname]);

  return (
    <header>
      <div>
        <Breadcrumb>
          <BreadcrumbList className="flex items-center">
            <Link to="/">
              <BreadcrumbItem className="flex items-center">
                <HomeIcon className="w-3.5" />
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </Link>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex w-full flex-wrap items-end justify-between gap-4 border-b border-zinc-950/10 pb-6 dark:border-white/10">
        <Heading>{title}</Heading>
      </div>
    </header>
  );
};
