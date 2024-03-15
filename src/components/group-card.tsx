import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
  name: string;
  picture: string;
  members: number;
  footer: React.ReactNode;
};

export function GroupCard({ footer }: Props) {
  return (
    <Card className="group">
      <div className="relative" style={{ height: 150 }}>
        <Image
          alt="Group Image"
          className="mx-auto aspect-video"
          fill
          src="/placeholder.svg"
        />
      </div>

      <CardFooter className="flex flex-col items-start px-2 pt-2">
        <CardTitle>
          <h3 title="Group Name" className="truncate text-lg font-bold">
            Group Name
          </h3>
        </CardTitle>
        <p className="font-light"> 200 membros</p>
      </CardFooter>
      <div className="px-2 pb-2">{footer}</div>
    </Card>
  );
}
