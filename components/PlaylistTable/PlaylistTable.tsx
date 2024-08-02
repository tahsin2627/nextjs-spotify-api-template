'use client';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { icons } from "lucide-react";
import React from "react";
import { PlaylistContext } from "@/providers/PlaylistProvider";
import { Playlist } from "@/lib/types/Playlist";
import Track from "@/lib/types/Track";
import PublicUser from "@/lib/types/PublicUser";
import Image from "next/image";
import { calcDuration } from "@/lib/utils";

interface PlaylistTableProps { }

const PlaylistTable: React.FC<PlaylistTableProps> = ({ }) => {
    const playlist: Playlist = React.useContext(PlaylistContext) as Playlist;
    const playlistItems = playlist.tracks.items;
    const columns: ColumnDef<{
        added_at: string;
        added_by: PublicUser;
        is_local: boolean;
        track: Track;
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
                        <Image src={ row.original.track.album.images[0].url } height={ 44 } width={ 44 } className="rounded-lg" alt={ `${row.original.track.album.name} album cover` } />
                        <div className="[&>p]:text-nowrap [&>p]:text-ellipsis [&>p]:overflow-hidden">
                            <p className="font-medium">{ row.original.track.name.slice(0, 30) }</p>
                            <p className="text-muted-foreground">
                                { row.original.track.artists.map((artist) => artist.name).join(", ").slice(0, 30) }
                            </p>
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
                cell: ({ row }): React.JSX.Element => <p className="ml-4 text-nowrap text-ellipsis overflow-hidden">{ row.original.track.album.name.slice(0, 30) }</p>,
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
                cell: ({ row }): React.JSX.Element => <p className="ml-4">{ row.original.added_at.slice(0, 10) }</p>,
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
                cell: ({ row }): React.JSX.Element => <p className="ml-4">{ calcDuration(row.original.track.duration_ms) }</p>,
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
                        <TableHead className="font-md text-lg text-center px-0">
                            <p>#</p>
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
                        <TableCell className="!max-w-6 px-0">
                            <p className="text-lg font-md text-muted-foreground text-center">{ index + 1 }</p>
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