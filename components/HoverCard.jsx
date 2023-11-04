import { CalendarDays } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function HoverCardDemo({name, content, date}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="text-xs sm:text-sm md:text-base" variant="link">@{name.toLowerCase()}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">{content}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" /> <span className="text-xs text-muted-foreground">Joined {date}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
