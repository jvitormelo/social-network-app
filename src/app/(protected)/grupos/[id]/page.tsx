import { BaseHeader } from "@/components/base-header";
import { PostCard } from "@/components/post/card";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { api } from "@/trpc/server";

import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { GroupPosts } from "../_components/group-posts";

function GroupFeed({ params }: { params: { id: string } }) {
  return (
    <>
      <Suspense>
        <Header groupId={params.id} />
      </Suspense>
      <div className="flex justify-center">
        <Tabs defaultValue={"feed"}>
          <TabsList>
            <TabsTrigger value="feed">Feed</TabsTrigger>

            <TabsTrigger value="members">Membros</TabsTrigger>

            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <GroupPosts groupId={params.id} />
    </>
  );
}

async function Header({ groupId: groupId }: { groupId: string }) {
  const group = await api.groups.find.query(groupId);

  return (
    <section className="sticky top-[68px] bg-background">
      <BaseHeader title={group.name}>
        <Link href={`/posts/novo?id=${groupId}`}>
          <Button>Novo Post</Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </BaseHeader>
    </section>
  );
}

export default GroupFeed;
