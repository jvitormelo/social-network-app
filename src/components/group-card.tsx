import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function GroupCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          alt="Group Image"
          className="mx-auto aspect-video rounded-xl"
          width={220}
          height={250}
          src="/placeholder.svg"
        ></Image>
      </CardContent>
      <CardFooter>
        <p className="ml-auto font-light"> 200 membros</p>
      </CardFooter>
    </Card>
  );
}
