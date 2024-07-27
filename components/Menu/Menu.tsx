import React, { FC } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import * as icons from "lucide-react";
import { Button } from "@/components/ui/button";


interface MenuProps { }

const Menu: FC<MenuProps> = (): React.JSX.Element => {

    const dropdownMenuContent: {
        title: string;
        icon: React.JSX.Element;
        items: {
            title: string;
            icon: React.JSX.Element;
            items: {
                title: string;
                icon: React.JSX.Element;
                action: () => void;
                shortkey: string;
            }[][];
        }[];
    } = {
        title: 'Manage',
        icon: <icons.MoreHorizontal />,
        items: [
            {
                title: 'File',
                icon: <icons.LucideFileAudio2 />,
                items: [
                    [
                        {
                            title: 'New playlist',
                            icon: <icons.LucidePlus />,
                            action: () => {
                                console.log('New playlist');
                            },
                            shortkey: 'Ctrl+N',
                        },
                        {
                            title: 'New playlists folder',
                            icon: <icons.LucideFolderPlus />,
                            action: () => {
                                console.log('New playlists folder');
                            },
                            shortkey: 'Ctrl+Shift+N',
                        }
                    ],
                    [
                        {
                            title: 'Private session',
                            icon: <icons.LucideLock />,
                            action: () => {
                                console.log('Private session');
                            },
                            shortkey: '',
                        },
                        {
                            title: 'Offline mode',
                            icon: <icons.LucideWifiOff />,
                            action: () => {
                                console.log('Offline mode');
                            },
                            shortkey: '',
                        }
                    ],
                    [
                        {
                            title: 'Logout',
                            icon: <icons.LucideLogOut />,
                            action: () => {
                                console.log('Logout');
                            },
                            shortkey: 'Ctrl+Shift+W',
                        }
                    ]
                ],
            },
            {
                title: 'Edit',
                icon: <icons.LucideEdit />,
                items: [
                    [
                        {
                            title: 'Undo',
                            icon: <icons.LucideUndo />,
                            action: () => {
                                console.log('Undo');
                            },
                            shortkey: 'Ctrl+Z',
                        },
                        {
                            title: 'Redo',
                            icon: <icons.LucideRedo />,
                            action: () => {
                                console.log('Redo');
                            },
                            shortkey: 'Ctrl+Y',
                        }
                    ],
                    [
                        {
                            title: 'Cut',
                            icon: <icons.LucideScissors />,
                            action: () => {
                                console.log('Cut');
                            },
                            shortkey: 'Ctrl+X',
                        },
                        {
                            title: 'Copy',
                            icon: <icons.LucideCopy />,
                            action: () => {
                                console.log('Copy');
                            },
                            shortkey: 'Ctrl+C',
                        },
                        {
                            title: 'Paste',
                            icon: <icons.LucideClipboard />,
                            action: () => {
                                console.log('Paste');
                            },
                            shortkey: 'Ctrl+V',
                        },
                        {
                            title: 'Delete',
                            icon: <icons.LucideTrash />,
                            action: () => {
                                console.log('Delete');
                            },
                            shortkey: 'Del',
                        }
                    ],
                    [
                        {
                            title: 'Select all',
                            icon: <icons.LucideCheckSquare />,
                            action: () => {
                                console.log('Select all');
                            },
                            shortkey: 'Ctrl+A',
                        },
                    ],
                    [
                        {
                            title: 'Search',
                            icon: <icons.LucideSearch />,
                            action: () => {
                                console.log('Search');
                            },
                            shortkey: 'Ctrl+L',
                        },
                        {
                            title: 'Find',
                            icon: <icons.LucideFilter />,
                            action: () => {
                                console.log('Find');
                            },
                            shortkey: 'Ctrl+F',
                        }
                    ],
                    [
                        {
                            title: 'Settings',
                            icon: <icons.LucideSettings />,
                            action: () => {
                                console.log('Settings');
                            },
                            shortkey: 'Ctrl+P',
                        }
                    ]
                ],
            },
            {
                title: 'View',
                icon: <icons.LucideEye />,
                items: [
                    [
                        {
                            title: 'Zoom In',
                            icon: <icons.LucideZoomIn />,
                            action: () => {
                                console.log('Zoom In');
                            },
                            shortkey: 'Ctrl+Plus',
                        },
                        {
                            title: 'Zoom Out',
                            icon: <icons.LucideZoomOut />,
                            action: () => {
                                console.log('Zoom Out');
                            },
                            shortkey: 'Ctrl+Minus',
                        }
                    ],
                    [
                        {
                            title: 'Reset Zoom',
                            icon: <icons.LucideSearch />,
                            action: () => {
                                console.log('Reset Zoom');
                            },
                            shortkey: 'Ctrl+0',
                        }
                    ],
                ],
            },
            {
                title: 'Play',
                icon: <icons.LucidePlayCircle />,
                items: [
                    [
                        {
                            title: 'Play/Pause',
                            icon: <icons.LucidePlay />,
                            action: () => {
                                console.log('Play');
                            },
                            shortkey: 'Space',
                        }
                    ],
                    [
                        {
                            title: 'Next',
                            icon: <icons.LucideSkipForward />,
                            action: () => {
                                console.log('Next');
                            },
                            shortkey: 'Ctrl+Right',
                        },
                        {
                            title: 'Previous',
                            icon: <icons.LucideSkipBack />,
                            action: () => {
                                console.log('Previous');
                            },
                            shortkey: 'Ctrl+Left',
                        },
                        {
                            title: 'Seek forward',
                            icon: <icons.LucideFastForward />,
                            action: () => {
                                console.log('Seek forward');
                            },
                            shortkey: 'Ctrl+Alt+Right',
                        },
                        {
                            title: 'Seek backward',
                            icon: <icons.LucideFastForward direction='rtl' />,
                            action: () => {
                                console.log('Seek backward');
                            },
                            shortkey: 'Ctrl+Alt+Left',
                        }
                    ],
                    [
                        {
                            title: 'Shuffle',
                            icon: <icons.LucideShuffle />,
                            action: () => {
                                console.log('Shuffle');
                            },
                            shortkey: 'Ctrl+S',
                        },
                        {
                            title: 'Repeat',
                            icon: <icons.LucideRepeat />,
                            action: () => {
                                console.log('Repeat');
                            },
                            shortkey: 'Ctrl+R',
                        }
                    ],
                    [
                        {
                            title: 'Volume Up',
                            icon: <icons.LucideVolume2 />,
                            action: () => {
                                console.log('Volume Up');
                            },
                            shortkey: 'Ctrl+Up',
                        },
                        {
                            title: 'Volume Down',
                            icon: <icons.LucideVolume1 />,
                            action: () => {
                                console.log('Volume Down');
                            },
                            shortkey: 'Ctrl+Down',
                        },
                        {
                            title: 'Mute',
                            icon: <icons.LucideVolumeX />,
                            action: () => {
                                console.log('Mute');
                            },
                            shortkey: 'Ctrl+M',
                        }
                    ]
                ]
            },
            {
                title: 'Help',
                icon: <icons.LucideHelpCircle />,
                items: [
                    [
                        {
                            title: 'Support',
                            icon: <icons.LucideHelpingHand />,
                            action: () => {
                                console.log('Help');
                            },
                            shortkey: 'F1',
                        },
                        {
                            title: 'Community',
                            icon: <icons.LucideUsers />,
                            action: () => {
                                console.log('Community');
                            },
                            shortkey: '',
                        },
                        {
                            title: 'My account',
                            icon: <icons.LucideUser />,
                            action: () => {
                                console.log('My account');
                            },
                            shortkey: '',
                        },
                    ],
                    [
                        {
                            title: 'Reload',
                            icon: <icons.LucideRefreshCcw />,
                            action: () => {
                                console.log('Reload');
                            },
                            shortkey: 'Ctrl+Maj+R',
                        }
                    ],
                    [
                        {
                            title: 'About',
                            icon: <icons.LucideInfo />,
                            action: () => {
                                console.log('About');
                            },
                            shortkey: '',
                        }
                    ]
                ]
            }
        ],
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                    { dropdownMenuContent.icon }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ms-2">
                <DropdownMenuLabel>Manage</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    { dropdownMenuContent.items.map((item: {
                        title: string;
                        icon: React.JSX.Element;
                        items: {
                            title: string;
                            icon: React.JSX.Element;
                            action: () => void;
                            shortkey: string;
                        }[][];
                    }, index: number): React.JSX.Element => (
                        <DropdownMenuSub key={ index }>
                            <DropdownMenuSubTrigger>
                                <p className="flex gap-3 items-center">
                                    { item.icon }
                                    <span>{ item.title }</span>
                                </p>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                    { item.items.map((itemGroup: {
                                        title: string;
                                        icon: React.JSX.Element;
                                        action: () => void;
                                        shortkey: string;
                                    }[], subindex: number): React.JSX.Element => (
                                        <>
                                            { itemGroup.map((subitem: {
                                                title: string;
                                                icon: React.JSX.Element;
                                                action: () => void;
                                                shortkey: string;
                                            }, subsubindex: number): React.JSX.Element => (
                                                <>
                                                    <DropdownMenuItem key={ item.title + subsubindex } onClick={ subitem.action } className="flex gap-6">
                                                        <p className="flex gap-3 items-center">
                                                            { subitem.icon }
                                                            <span>{ subitem.title }</span>
                                                        </p>
                                                        <DropdownMenuShortcut className="text-sm">{ subitem.shortkey }</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                </>
                                            )) }
                                            { subindex !== item.items.length - 1 && <DropdownMenuSeparator /> }
                                        </>
                                    )) }
                                </DropdownMenuSubContent >
                            </DropdownMenuPortal>
                        </DropdownMenuSub>
                    )) }
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Menu;
