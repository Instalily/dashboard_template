import React, { useState, useEffect } from 'react'
import { CustomTable } from './table';

export default function Index() {
  return (
    <div className="w-full border-b border-zinc-950/10 pb-6 dark:border-white/10">
      <div className="flex flex-wrap w-full pt-4">
        <div className="w-full">
            <CustomTable/>
        </div>
      </div>
    </div>
  );
}