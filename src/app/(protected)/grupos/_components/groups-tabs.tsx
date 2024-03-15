"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GroupsTabs() {
  const pathName = usePathname();

  const isDiscover = pathName.includes("descobrir");
  return (
    <Tabs key={pathName} defaultValue={isDiscover ? "discover" : "your-groups"}>
      <TabsList>
        <Link passHref href={"/grupos/~/descobrir"}>
          <TabsTrigger value="discover">Descobrir</TabsTrigger>
        </Link>
        <Link passHref href={"/grupos/~/seus-grupos"}>
          <TabsTrigger value="your-groups">Seus Grupos</TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  );
}
