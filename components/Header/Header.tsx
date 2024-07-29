import React, { FC } from 'react';
import Menu from '@/components/Menu/Menu';
import { Button } from '@/components/ui/button';
import * as icons from "lucide-react";
import { Input } from '../ui/input';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {

    return (
        <header className="flex justify-between items-center w-full !mt-0 [&_>div]:flex [&_>div]:gap-1">
            <div>
                <Menu />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.ChevronLeft />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Back</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.ChevronRight />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Forward</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.Home />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Home</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <Input placeholder="Search..." className="w-80" />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.Search />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Search</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.Folders />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Explore</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.Bell />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Notifications</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.Users />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Friend activity</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant="ghost">
                                <icons.User />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Account</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </header>
    );
};

export default Header;
