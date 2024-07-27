"use client";

import React, { FC } from 'react';
import Menu from '@/components/Menu/Menu';
import { Button } from '@/components/ui/button';
import * as icons from "lucide-react";

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

    return (
        <header className="flex justify-between items-center w-full h-fit !mt-0 [&_>div]:flex">
            <div>
                <Menu />
                <Button variant="ghost">
                    <icons.ChevronLeft />
                </Button>
                <Button variant="ghost">
                    <icons.ChevronRight />
                </Button>
            </div>
            <div>
                <Button variant="ghost">
                    <icons.Search />
                </Button>
                <Button variant="ghost">
                    <icons.Home />
                </Button>
            </div>
            <div>
                <Button variant="ghost">
                    <icons.Bell />
                </Button>
                <Button variant="ghost">
                    <icons.Users />
                </Button>
                <Button variant="ghost">
                    <icons.User />
                </Button>
            </div>
        </header>
    );
};

export default Header;
