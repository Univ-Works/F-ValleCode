import React from "react";
import { ModeToggle } from "../ButtonToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "../ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { HoverCardCustom } from "../HoverCard";

export function HeaderPrivate() {
  return (
    <header className="flex justify-center pb-4 pt-10 ml-5 mr-5">
      <div className="flex justify-between w-full max-w-screen-xl">
        <div>
          <ItemsNavbar />
        </div>
        <div className="flex justify-center gap-5">
          <BreadcrumbLink href={`/profile/${localStorage.getItem('username')}`}>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@avatarMND" />
              <AvatarFallback>TMU</AvatarFallback>
            </Avatar>
          </BreadcrumbLink>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export function HeaderPrivateUser() {
  const username = localStorage.getItem('username');
  const usernameFromURL = localStorage.getItem('usernameFromURL');

  const removeLocalData = () => {
    localStorage.clear();
    Cookies.remove('token', { path: '/', domain: 'localhost' });

    window.location.href = '/';
  }

  return (
    <header className="flex justify-center pb-4 pt-10 ml-5 mr-5">
      <div className="flex justify-between w-full max-w-screen-xl">
        <div className="flex justify-start">
          <ItemsNavbar />
        </div>
        <div className="flex justify-end gap-10">
          {username === usernameFromURL ? (
            <Button className="bg-red-600"
              variant="ghost"
              onClick={removeLocalData}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd">
                </path>
              </svg>
            </Button>
          ) :
            (
              <></>
            )}

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
          <BreadcrumbItem className="text-red-700">
            <BreadcrumbLink href="/main" className="text-base">
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z"
                  fill="currentColor"
                  fillRule="evenodd" clipRule="evenodd">
                </path>
              </svg>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-red-700">
            <BreadcrumbLink className="text-base" href="/quiz">
              <HoverCardCustom
                trigger={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M15.75 13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75m0 4a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 .75-.75" />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7 2.25A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V7.968c0-.381-.124-.751-.354-1.055l-2.998-3.968a1.75 1.75 0 0 0-1.396-.695zM5.75 5c0-.69.56-1.25 1.25-1.25h7.25v4.397c0 .414.336.75.75.75h3.25V19c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25z"
                      clipRule="evenodd" />
                  </svg>
                }
                content={"Quiz"}
              />
            </BreadcrumbLink>

          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-red-700">
            <BreadcrumbLink className="text-base" href="/podio">
              <HoverCardCustom trigger={
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="currentColor" d="M439 32v165h18V32zm-18 12.99L327.6 80l93.4 35zM165.9 103c-5 0-10.2 2.3-15.3 7c-6.2 5.8-11.5 15.1-13.8 26.3c-2.3 11.3-1 22 2.5 29.7c3.5 7.8 8.6 12.3 14.6 13.5c6 1.3 12.4-.9 18.7-6.6c6.1-5.8 11.5-15.1 13.8-26.4c2.2-11.3.9-22-2.5-29.7c-3.5-7.8-8.6-12.2-14.6-13.5c-1.1-.2-2.3-.3-3.4-.3m-38.4 78.5c-3.4 1.2-6.9 2.5-10.7 4.1c-24.85 15.7-42.2 31.2-59.84 55.7c-11.19 15.5-11.74 42-12.58 61.5l20.8 9.2c.87-27.8.36-39.3 13.27-55.3c9.83-12.2 19.33-25 37.55-28.9c1.6 28.9-2.6 73.7-14 119.6c20.5 2.8 37.6-.7 57-6.3c50.7-25.3 74.1-3.8 109.3 45.7l20.5-32.1c-24.6-28.9-48.5-75.1-117.2-57.3c5-27.3 5.6-45.4 8.6-72.6c.6-12 .8-23.9 1.1-35.7c-8.9 6.8-19.9 10.4-31 8.1c-9.5-2-17.3-7.9-22.8-15.7m144.2 7.3c-18.2 17.8-22.2 31-50.2 38.4l-22.5-24c-.4 12.8-.8 25.9-1.9 39.2c9.5 8.7 19.2 15.7 22.7 14.6c31.3-9.4 40.3-20.3 61.4-41.9zM409 215v96h-96v96h-96v78.1c102.3.2 167.8 1.1 270 1.8V215zM140.7 363.9c-13.6 2.5-27.8 3.3-43.44.9c-10.89 37.5-26.76 74.3-48.51 102.5l38.63 15.3c27.02-37.9 36.82-70.6 53.32-118.7" /></svg>
              }
                content="Podio"
              />

            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-red-700">
            <BreadcrumbLink className="text-base" href="/datastructures">
              <HoverCardCustom trigger={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 14 14">
                  <g fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <circle cx="7" cy="2.5" r="1.5" />
                    <circle cx="2" cy="11.5" r="1.5" />
                    <circle cx="7" cy="11.5" r="1.5" />
                    <circle cx="12" cy="11.5" r="1.5" />
                    <path d="M2 10V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2M7 4v6" />
                  </g>
                </svg>
              }
                content="Estructura de Datos"
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-red-700">
            <BreadcrumbLink className="text-base" href="/poo">
              <HoverCardCustom trigger={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 14 14">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.207.478a.5.5 0 0 0-.414 0L4.17 1.672L6.998 2.96l2.83-1.289zM3.7 5.61V2.556l2.8 1.275v3.375L3.991 6.065a.5.5 0 0 1-.293-.455Zm3.8 6.712v-3.34l2.652 1.208v3.375l-2.506-1.141a.5.5 0 0 1-.147-.102Zm3.652 1.245V10.19l2.803-1.276v3.055a.5.5 0 0 1-.293.455zM6.498 8.982v3.344a.5.5 0 0 1-.143.098l-2.51 1.143V10.19zM2.845 10.19v3.375L.34 12.424a.5.5 0 0 1-.293-.455V8.915l2.8 1.275Zm4.653-2.982V3.83l2.803-1.276V5.61a.5.5 0 0 1-.293.455zm2.948-.37a.5.5 0 0 1 .414 0l2.62 1.192l-2.83 1.289L7.825 8.03l2.622-1.194Zm-7.306 0a.5.5 0 0 1 .414 0l2.62 1.192l-2.829 1.29L.518 8.03L3.14 6.837Z"
                    clipRule="evenodd" />
                </svg>
              }
                content="POO"
              />
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}