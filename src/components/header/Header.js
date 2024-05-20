import React from "react";
import { ModeToggle } from "../ButtonToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "../ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export function HeaderPrivate() {
  return (
    <header className="flex justify-center pb-4 pt-5 ml-5 mr-5">
      <div className="flex justify-between w-full max-w-screen-lg">
        <div>
          <ItemsNavbar />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export function HeaderPrivateUser() {
  return (
    <header className="flex justify-center pb-4 pt-5 ml-5 mr-5">
      <div className="flex justify-between w-full max-w-screen-lg">
        <div>
          <ItemsNavbar />
        </div>
        <div className="flex justify-between-center gap-10">
          <Button className="bg-red-600"
            variant="ghost">
            Logout
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <header className="flex justify-center pb-4 pt-5 ml-5 mr-5">
      <div className="flex justify-end w-full max-w-screen-lg">
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function ItemsNavbar() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-orange-800">
            <BreadcrumbLink href="/main">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-orange-800">
            <Popover>
              <PopoverTrigger>Perfil</PopoverTrigger>
              <PopoverContent className="flex gap-3 items-center">
                <BreadcrumbLink href="/profile">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@avatarMND" />
                    <AvatarFallback>TMU</AvatarFallback>
                  </Avatar>
                  <Label>
                    {localStorage.getItem('username') ? localStorage.getItem('username') : 'NPC'}
                  </Label>
                </BreadcrumbLink>
              </PopoverContent>
            </Popover>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-orange-800">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <span className="">Estructura de datos</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem className="text-orange-800">Lineales</DropdownMenuItem>
                <DropdownMenuItem className="text-orange-800">No lineales</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-orange-800">
            <BreadcrumbLink href="/poo">POO</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}