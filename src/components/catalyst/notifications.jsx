import React, {useEffect, useContext} from "react";
import { BellRing, Check } from "lucide-react";

import { cn } from "utils/utils";
import { Button } from "components/ui/button";
import { Text } from "components/catalyst/text"
import { Switch } from "components/ui/switch";
import { Link } from 'components/catalyst/link'
import { AppContext } from 'contexts/AppContext'

const notifications = [
  {
    title: "Price Increase",
    description: 
      <>
      Price increase (Mar 31, 2025) 6-10% increase on all residential products. For more details, visit 
      <Link className="text-blue-500" href="https://www.srsdistribution.com/siteassets/srs/news-and-events/price-increase-letters/march-31-2025-price-increase-announcement-final.pdf" target="_blank" rel="noopener noreferrer"> this link</Link>.
      </>,
  },
  {
    title: "Price Increase",
    description: 
      <>
      Price increase (Jan 2, 2025) 5-6% increase on all siding and trim products. For more details, visit 
      <Link className="text-blue-500" href="https://www.srsdistribution.com/siteassets/srs/news-and-events/price-increase-letters/siding-jan-2025-price-increase-announcement-v2.pdf" target="_blank" rel="noopener noreferrer"> this link</Link>.
      </>,
  },
];

export function NotificationDropdown({ className, ...props }) {
  const { logEvent } = useContext(AppContext)


  useEffect(() => {
    logEvent('Cosailor', 'Notifications Viewed',null )
  }, []);

  return (
    <div className={cn("w-full", className)} {...props}>
      <div className="mb-4 mr-">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="text-sm text-muted-foreground">You have {notifications.length} new messages.</p>
      </div>
      <div className="grid gap-4">
        {/* <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
            <p className="text-sm text-muted-foreground">Send notifications via email.</p>
          </div>
          <Switch />
        </div> */}
        <div>
          {notifications.map((notification, index) => (
            <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Button className="w-full mt-4">
        <Check className="mr-2 h-4 w-4" /> Mark all as read
      </Button> */}
    </div>
  );
}