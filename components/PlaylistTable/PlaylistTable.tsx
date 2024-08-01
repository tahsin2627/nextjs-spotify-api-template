'use client';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { icons } from "lucide-react";
import React from "react";

interface PlaylistTableProps { }

const PlaylistTable: React.FC<PlaylistTableProps> = ({ }) => {
    const playlistItems = [
        {
            title: "Title 1",
            artist: "Artist 1",
            album: "Album 1",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 2",
            artist: "Artist 2",
            album: "Album 2",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 3",
            artist: "Artist 3",
            album: "Album 3",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 4",
            artist: "Artist 4",
            album: "Album 4",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 5",
            artist: "Artist 5",
            album: "Album 5",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 6",
            artist: "Artist 6",
            album: "Album 6",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 7",
            artist: "Artist 7",
            album: "Album 7",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 8",
            artist: "Artist 8",
            album: "Album 8",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 9",
            artist: "Artist 9",
            album: "Album 9",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 10",
            artist: "Artist 10",
            album: "Album 10",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 11",
            artist: "Artist 11",
            album: "Album 11",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 12",
            artist: "Artist 12",
            album: "Album 12",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 13",
            artist: "Artist 13",
            album: "Album 13",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 14",
            artist: "Artist 14",
            album: "Album 14",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 15",
            artist: "Artist 15",
            album: "Album 15",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 16",
            artist: "Artist 16",
            album: "Album 16",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 17",
            artist: "Artist 17",
            album: "Album 17",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 18",
            artist: "Artist 18",
            album: "Album 18",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 19",
            artist: "Artist 19",
            album: "Album 19",
            added_at: "Added at",
            duration_ms: "0:00",
        },
        {
            title: "Title 20",
            artist: "Artist 20",
            album: "Album 20",
            added_at: "Added at",
            duration_ms: "0:00",
        },
    ];
    const columns: ColumnDef<{
        title: string,
        artist: string,
        album: string,
        added_at: string,
        duration_ms: string;
    }>[] = [
            {
                accessorKey: "title",
                header: ({ column }): React.JSX.Element => {
                    return (
                        <Button
                            variant="ghost"
                            onClick={ (): void => column.toggleSorting(column.getIsSorted() === "asc") }
                        >
                            Title
                            <icons.ChevronsUpDown className="ml-2 size-4" />
                        </Button>
                    );
                },
                cell: ({ row }): React.JSX.Element => (
                    <div className="flex items-center gap-2">
                        <div className="bg-secondary rounded-lg size-10"></div>
                        <div className="font-medium w-40">
                            <p>{ row.getValue("title") }</p>
                            <p className="text-muted-foreground">{ row.original?.artist }</p>
                        </div>
                    </div>
                ),
            },
            {
                accessorKey: "album",
                header: ({ column }): React.JSX.Element => {
                    return (
                        <Button
                            variant="ghost"
                            onClick={ (): void => column.toggleSorting(column.getIsSorted() === "asc") }
                        >
                            Album
                            <icons.ChevronsUpDown className="ml-2 size-4" />
                        </Button>
                    );
                },
                cell: ({ row }): React.JSX.Element => <p className="ml-4">{ row.getValue("album") }</p>,
            },
            {
                accessorKey: "added_at",
                header: ({ column }): React.JSX.Element => {
                    return (
                        <Button
                            variant="ghost"
                            onClick={ (): void => column.toggleSorting(column.getIsSorted() === "asc") }
                        >
                            Added at
                            <icons.ChevronsUpDown className="ml-2 size-4" />
                        </Button>
                    );
                },
                cell: ({ row }): React.JSX.Element => <p className="ml-4">{ row.getValue("added_at") }</p>,
            },
            {
                accessorKey: "duration_ms",
                header: ({ column }): React.JSX.Element => {
                    return (
                        <Button
                            variant="ghost"
                            onClick={ (): void => column.toggleSorting(column.getIsSorted() === "asc") }
                        >
                            Duration
                            <icons.ChevronsUpDown className="ml-2 size-4" />
                        </Button>
                    );
                },
                cell: ({ row }): React.JSX.Element => <p className="ml-4">{ row.getValue('duration_ms') }</p>,
            },
        ];
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [pagination, setPagination] = React.useState({
        pageIndex: 0, //initial page index
        pageSize: 500, //default page size
    });
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const table = useReactTable({
        data: playlistItems,
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
            pagination
        },
    });
    return (
        <Table>
            <TableHeader className="sticky">
                { table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={ headerGroup.id }>
                        <TableHead>
                            <p className="ml-6">#</p>
                        </TableHead>
                        { headerGroup.headers.map((header) => (
                            <TableHead key={ header.id }>
                                { header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext()) }
                            </TableHead>
                        )) }
                    </TableRow>
                )) }
            </TableHeader>
            <TableBody>
                { table.getRowModel().rows.map((row, index) => (
                    <TableRow key={ row.id } className="hover:bg-muted/50">
                        <TableCell>
                            <p className="ml-6">{ index + 1 }</p>
                        </TableCell>
                        { row.getVisibleCells().map((cell) => (
                            <TableCell key={ cell.id }>
                                { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                            </TableCell>
                        )) }
                    </TableRow>
                )) }
            </TableBody>
        </Table>
    );
};

export default PlaylistTable;