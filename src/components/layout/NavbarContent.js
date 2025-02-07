import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from "components/ui/avatar";
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from 'components/catalyst/navbar';
import {
  ArrowRightStartOnRectangleIcon,
  LightBulbIcon,
} from '@heroicons/react/16/solid';
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from 'components/catalyst/dropdown';

export function NavbarContent() {

  return (
    <Navbar className="fixed bottom-0 w-full bg-white shadow-lg p-4 flex justify-around items-center z-50 md:relative md:p-0 md:shadow-none">
    <NavbarSpacer />
    <NavbarSection>
      <Dropdown>
        <DropdownButton as={NavbarItem}>
          <Avatar src="srs.png" />
        </DropdownButton>
        <DropdownMenu className="min-w-64" anchor="bottom end">
          <DropdownDivider />
          <DropdownItem as={Link} to="/feedback">
            <LightBulbIcon />
            <DropdownLabel>Share feedback</DropdownLabel>
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem >
            <ArrowRightStartOnRectangleIcon />
            <DropdownLabel>Sign out</DropdownLabel>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarSection>
  </Navbar>
  );
}