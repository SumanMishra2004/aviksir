"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const data: BlogDatatype[] = [
  {
    id: "bhqecj4p",
    name: "abcde",
    status: "pending",
    desc: "carmella@hotmail.com",
    ratting: 4.75,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "pending",
    desc: "carmella@hotmail.com",
    ratting: 4.3,
    PostingDate: "2023-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "pending",
    desc: "carmella@hotmail.com",
    ratting: 4.3,
    PostingDate: "2022-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-10-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,

    PostingDate: "2021-11-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-13",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "failed",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "failed",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "Iconix",
    status: "success",
    desc: "carmella@hotmail.com",
    ratting: 4.2,
    PostingDate: "2021-09-01",
  },
  {
    id: "bhqecj4p",
    name: "teri mai",
    status: "failed",
    desc: "carmella@hotmail.com",
    ratting: 4.12,
    PostingDate: "2021-09-01",
  },
];

export type BlogDatatype = {
  id: string;
  desc: string;
  status: "pending" | "success" | "failed";
  name: string;
  ratting: number;
  PostingDate?: string;
};
export const columns: ColumnDef<BlogDatatype>[] = [
   
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        className="capitalize font-bold"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <>
        <Link href={`/blog/${row.original.id}`}>
          
        <div className="lowercase text-end text-ellipsis underline text-blue-500" >
          {row.getValue("name")}
        </div>
        </Link>
      </>
    ),
  },
  {
    accessorKey: "desc",
    header: () => <div className="text-right">Desc</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right text-ellipsis px-3">
          {row.getValue("desc")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        className="capitalize font-bold"
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Status
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return (
        <div className="text-right">
          <span
            className={`px-2 border border-black py-1 rounded-full ${
              row.getValue("status") === "success"
                ? "bg-green-500 text-white"
                : row.getValue("status") === "failed"
                ? "bg-red-500 text-white"
                : row.getValue("status") === "pending"
                ? "bg-yellow-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {row.getValue("status")}
          </span>
        </div>
      );
    },
    // Custom sorting logic
    sortingFn: (rowA, rowB) => {
      const statusOrder: Record<string, number> = {
        success: 2,
        pending: 1,
        failed: 3,
      };

      const statusA = rowA.getValue("status") as keyof typeof statusOrder;
      const statusB = rowB.getValue("status") as keyof typeof statusOrder;

      return (statusOrder[statusA] || 4) - (statusOrder[statusB] || 4);
    },
  },
  {
    accessorKey: "ratting",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="capitalize font-bold"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Rattings
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      return <div className="text-right">{row.getValue("ratting")}</div>;
    },
  },
  {
    accessorKey: "PostingDate",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="capitalize font-bold"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Posted At
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("PostingDate"));
      return (
        <div className="text-right">{date.toISOString().split("T")[0]}</div>
      );
    },
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center p-4 gap-6 border-b border-black">
        <Input
          placeholder="Filter names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border-b border-black">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className=" border-black border-b border-r text-lg font-bold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-black border-b"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border-r border-black text-lg"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="lg"
            className="border border-black"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border border-black"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
