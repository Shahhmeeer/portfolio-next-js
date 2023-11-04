import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import hamburger from "../public/icons8-hamburger.png";
import { ModeToggle } from "./Toggle";

export default function Drawer() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src={hamburger} width={40} height={40} className="" alt="Hamburger, Litrally" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-8">Menu</SheetTitle>
          <SheetDescription className="space-y-8">
            <span className="block">Projects</span>
            <span className="block">Whimsy</span>
            <span className="block">Connect</span>
            <span className="block">Youtube</span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
