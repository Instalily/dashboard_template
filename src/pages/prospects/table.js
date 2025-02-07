"use client";

import React, { useState, useContext } from 'react';
import { Badge } from 'components/catalyst/badge';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
  createPaginationItems
} from 'components/ui/pagination';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from 'components/ui/table';
import { Link } from 'react-router-dom';

export function CustomTable({ }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
    <div className="overflow-x-hidden overflow-y-hidden w-full">
        <Table className="min-w-full mt-4">
        <TableCaption></TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-1/3">Customer</TableHead>
            <TableHead>Customer Details</TableHead>
            <TableHead>Insights</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {currentUsers?.map((user) => (
            <TableRow key={user.custcd}>
                <TableCell className="w-1/3">
                    <div className="flex flex-col gap-2">
                        <Link to={`/customer/${user.custcd}`} className="font-semibold text-zinc-900 dark:text-zinc-100 hover:underline transition-all duration-200">
                            {user.custname}
                        </Link>
                    </div>
                </TableCell>
                <TableCell className="w-1/3 text-zinc-500">
                    <div className="flex flex-col gap-1">
                        {user.tags?.map((badge, index) => (
                        <Badge key={index} className="min-w-[200px] max-w-[400px] bg-zinc-600 text-gray-50">
                            {badge}
                        </Badge>
                        ))}
                    </div>
                </TableCell>
                <TableCell className="w-1/3 text-zinc-500">
                    <div className="flex flex-col gap-1">
                        {user.insight_pills?.map((badge, index) => (
                        <Badge key={index} color={getBadgeColor(badge)} className="min-w-[200px] max-w-[400px]">
                            {badge}
                        </Badge>
                        ))}
                    </div>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        <TableFooter>
        </TableFooter>
        </Table>
    </div>
    <Pagination className="mt-6 w-full flex justify-center">
        <PaginationPrevious 
            onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} 
            disabled={currentPage === 1} 
        />
        <PaginationContent className="flex justify-center w-full">
            {createPaginationItems(totalPages, currentPage, setCurrentPage)}
        </PaginationContent>
        <PaginationNext 
            onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} 
            disabled={currentPage === totalPages} 
        />
    </Pagination>
    </>
  );
}

const colorMapBackground = {
    'Tag A': 'blue',
    'Tag B': 'amber',
    'Tag C': 'cyan',
    'Tag D': 'purple',
    'Tag E': 'pink',
    'Tag F': 'red',
    'Tag G': 'orange',
    'Tag H': 'rose',
    'Tag I': 'sky',
    'Tag J': 'green',
  };

const getBadgeColor = (label) => {
  return colorMapBackground[label] || '#FFFFFF';
};

export const data = [
    {
      custcd: "CUST001",
      custname: "Alice Johnson",
      tags: ["Tag A", "Tag B"],
      insight_pills: ["Tag C", "Tag D"]
    },
    {
      custcd: "CUST002",
      custname: "Bob Smith",
      tags: ["Tag C", "Tag D"],
      insight_pills: ["Tag A", "Tag E"]
    },
    {
      custcd: "CUST003",
      custname: "Charlie Brown",
      tags: ["Tag E"],
      insight_pills: ["Tag F", "Tag G"]
    },
    {
      custcd: "CUST004",
      custname: "David Miller",
      tags: ["Tag A", "Tag G", "Tag H"],
      insight_pills: ["Tag I"]
    },
    {
      custcd: "CUST005",
      custname: "Emma Wilson",
      tags: ["Tag J"],
      insight_pills: ["Tag B", "Tag H"]
    },
    {
      custcd: "CUST006",
      custname: "Frank Thomas",
      tags: ["Tag C", "Tag I"],
      insight_pills: ["Tag E", "Tag F"]
    },
    {
      custcd: "CUST007",
      custname: "Grace Lee",
      tags: ["Tag B", "Tag D", "Tag F"],
      insight_pills: ["Tag A", "Tag J"]
    },
    {
      custcd: "CUST008",
      custname: "Hannah White",
      tags: ["Tag G", "Tag J"],
      insight_pills: ["Tag C", "Tag H"]
    },
    {
      custcd: "CUST009",
      custname: "Isaac Kim",
      tags: ["Tag E", "Tag F"],
      insight_pills: ["Tag D", "Tag I"]
    },
    {
      custcd: "CUST010",
      custname: "Jack Carter",
      tags: ["Tag A", "Tag C", "Tag H"],
      insight_pills: ["Tag B", "Tag G"]
    }
  ];
  