import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Skill({ skillLogo, skillName, skillProficiency, skillContent, skillFooter }) {
  const skill = skillName.slice(0,2)
  return (
    <Card className="max-w-xl flex flex-col justify-between">
      <CardHeader>
        <Avatar>
          <AvatarImage src={skillLogo} />
          <AvatarFallback>{skill}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{skillName}</CardTitle>
        <CardDescription>{skillProficiency}</CardDescription>
      </CardHeader>
      <CardContent>{skillContent}</CardContent>
      <CardFooter>{skillFooter}</CardFooter>
    </Card>
  );
}
