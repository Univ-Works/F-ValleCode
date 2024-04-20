import React from "react";
import { ModeToggle } from "../ButtonToggle";

function Header() {
  return (
    <div className="">
      <div className="flex w-[80%] item-center justify-between m-[auto] py-[10px]">
        <div className="Left">
        </div>
        <div className="Right">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;