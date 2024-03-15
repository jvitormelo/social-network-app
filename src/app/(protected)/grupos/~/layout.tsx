import { Button } from "@/components/ui/button";
import { type PropsWithChildren } from "react";
import { GroupsTabs } from "../_components/groups-tabs";
import Link from "next/link";
import { BaseHeader } from "@/components/base-header";

function GroupsLayout(props: PropsWithChildren) {
  return (
    <>
      <BaseHeader title="Grupos">
        <Link href={"/grupos/novo"}>
          <Button size="lg" variant="outline">
            Novo Grupo
          </Button>
        </Link>
      </BaseHeader>

      <div className="flex w-full justify-center">
        <GroupsTabs />
      </div>

      {props.children}
    </>
  );
}

export default GroupsLayout;
