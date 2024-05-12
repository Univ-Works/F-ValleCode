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
          <BreadcrumbItem>
            <BreadcrumbLink href="/main">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Popover>
              <PopoverTrigger>Perfil</PopoverTrigger>
              <PopoverContent className="flex gap-3 items-center">
                <BreadcrumbLink href="/profile">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@avatarMND" />
                    <AvatarFallback>TMU</AvatarFallback>
                  </Avatar>
                  <Label>Name User</Label>
                </BreadcrumbLink>
              </PopoverContent>
            </Popover>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <span className="">Estructura de datos</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Lineales</DropdownMenuItem>
                <DropdownMenuItem>No lineales</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/poo">POO</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}