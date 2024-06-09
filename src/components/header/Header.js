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
import { DialogExercise } from "../admin/DialogExercise";
import { DescriptionExercise } from "../admin/DescriptionExercise";
import { DescriptionUser } from "../admin/DescriptionUser";

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

export function HeaderPrivateAdmin() {
  const username = localStorage.getItem('username');

  const removeLocalData = () => {
    localStorage.clear();
    Cookies.remove('token', { path: '/', domain: 'localhost' });

    window.location.href = '/';
  }

  return (
    <header className="flex justify-center pb-4 pt-10 ml-5 mr-5">
      <div className="flex justify-between w-full max-w-screen-xl">
        <div className="flex justify-start">
          <ItemsNavbarAdmin />
        </div>
        <div className="flex justify-end gap-10">
          {username ? (
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

function ItemsNavbarAdmin() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-red-700">
            <DialogExercise
              trigger={<HoverCardCustom
                trigger={
                  <div className="flex justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd">
                      </path>
                    </svg>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd">
                      </path>
                    </svg>
                  </div>

                }
                content={"Agregar ejercicios"}
              />}
              title="Formulario de nuevos ejercicios"
              description={
                <DescriptionExercise />
              }
            />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="text-red-700">
            <DialogExercise
              trigger={<HoverCardCustom
                trigger={
                  <div className="flex justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd">
                      </path>
                    </svg>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd">
                      </path>
                    </svg>
                  </div>

                }
                content={"Agregar nuevo usuario"}
              />}
              title="Formulario de nuevos usuarios"
              description={
                <DescriptionUser />
              }
            />
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
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