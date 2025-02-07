import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from 'components/ui/drawer';
import { Button } from 'components/ui/button';
import { XIcon } from 'lucide-react';

const ResponsiveModal = ({ trigger, title, description, children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  if (isMobile) {
    return (
      <Drawer>
        <DrawerTrigger asChild>
          {trigger}
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex justify-between items-center">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerClose asChild>
              <button aria-label="Close" className="text-gray-500 hover:text-gray-700">
                <XIcon className="w-4 h-4" />
              </button>
            </DrawerClose>
          </DrawerHeader>
          <DrawerDescription>
            {description}
            {children}
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex justify-between items-center">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {description}
          {children}
        </DialogDescription>
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
};

export default ResponsiveModal;
