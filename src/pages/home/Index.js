import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "components/ui/card";

export default function Index() {
  return (
    <div className="w-full border-b border-zinc-950/10 pb-6 dark:border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        
        {/* First Row - Two Smaller Cards */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Card 1</CardTitle>
            <CardDescription className="text-sm mt-2">Description.</CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Card 2</CardTitle>
            <CardDescription className="text-sm mt-2">Description.</CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>

        {/* Second Row - One Large Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Card 3</CardTitle>
            <CardDescription className="text-sm mt-2">Description.</CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
