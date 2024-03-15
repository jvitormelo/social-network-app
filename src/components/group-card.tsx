import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

type Props = {
  name: string;
  picture: string;
  members: number;
  footer: React.ReactNode;
};

export function GroupCard({ footer, members, name }: Props) {
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
        <h3 title="Group Name" className="truncate text-lg font-bold">
          {name}
        </h3>

        <p className="font-light"> {members} membros</p>
      </CardFooter>
      <div className="px-2 pb-2">{footer}</div>
    </Card>
  );
}
