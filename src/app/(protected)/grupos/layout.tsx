import { Button } from "@/components/ui/button";
import { type PropsWithChildren } from "react";
import { GroupsTabs } from "./_components/groups-tabs";

function GroupsLayout(props: PropsWithChildren) {
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

      <div className="flex w-full justify-center">
        <GroupsTabs />
      </div>

      {props.children}
    </div>
  );
}

export default GroupsLayout;
