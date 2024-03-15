import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function GroupsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Groups</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button size="lg" variant="outline">
            Create Group
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
        <GroupCard />
      </div>
    </div>
  );
}

function GroupCard() {
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

export default GroupsPage;
