'use client';

import { UserContext } from '@/providers/UserProvider';
import React, { FC, useContext } from 'react';
import User from '@/lib/types/User';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import * as icons from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { signOut } from 'next-auth/react';

interface AccountDropdownMenuProps { }

const AccountDropdownMenu: FC<AccountDropdownMenuProps> = () => {
    const user: User = useContext(UserContext) as User;
    const dropdownMenuContent: {
        title: string;
        icon: React.JSX.Element;
        items: {
            title: string;
            icon: React.JSX.Element;
            action: () => void;
        }[];
    } = {
        title: 'Account',
        icon:
            <Avatar>
                <AvatarImage src={ user.images[0].url } />
                <AvatarFallback>
                    <div className="size-8 rounded-full bg-secondary" />
                </AvatarFallback>
            </Avatar>,
        items: [
            {
                title: 'My account',
                icon: <icons.ArrowUpRightFromSquare />,
                action: () => {
                    console.log('My account');
                },
            },
            {
                title: 'Profile',
                icon: <icons.User />,
                action: () => {
                    console.log('Profile');
                },
            },
            {
                title: 'Private session',
                icon: <icons.Lock />,
                action: () => {
                    console.log('Private session');
                },
            },
            {
                title: 'Settings',
                icon: <icons.Settings />,
                action: () => {
                    console.log('Settings');
                },
            },
        ],
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full !p-2 size-[52px] select-none">
                    { dropdownMenuContent.icon }
                </Button>
            </DropdownMenuTrigger >
            <DropdownMenuContent className="w-56 ms-2">
                <DropdownMenuGroup>
                    { dropdownMenuContent.items.map((item: {
                        title: string;
                        icon: React.JSX.Element;
                        action: () => void;
                    }, index: number): React.JSX.Element => (
                        <DropdownMenuItem key={ index } onClick={ item.action } className="gap-3">
                            { item.icon }
                            { item.title }
                        </DropdownMenuItem>
                    )) }
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={ () => signOut({ callbackUrl: 'http://localhost:3000/login' }) }>
                        <icons.LogOut />
                        <span className="ms-3">Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu >
    );
};

export default AccountDropdownMenu;
