import { Instagram, Github, Linkedin } from "lucide-react";
import HoverCardDemo from "./HoverCard";

export default function Footer() {
  return (
    <footer className="mt-8 bg-secondary flex-col sm:flex-row flex justify-evenly items-center" style={{ minHeight: "150px" }}>
      <div>&copy;{new Date().getFullYear()} Shahmeer Asim</div>
      <div>
        Built with
        <HoverCardDemo name="Next.js" content="The React Framework - created and maintained by @vercel." date="December 2021" />
        <HoverCardDemo
          name="Tailwind"
          content="A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup."
          date="December 2017"
        />
        <HoverCardDemo
          name="Shadcn"
          content="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
          date="December 2019"
        />
      </div>
      <div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Instagram className="cursor-pointer" />
            </li>
            <li>
              <Github className="cursor-pointer" />
            </li>
            <li>
              <Linkedin className="cursor-pointer" />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
