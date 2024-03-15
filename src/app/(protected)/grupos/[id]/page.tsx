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
import { Suspense } from "react";

function GroupFeed({ params }: { params: { id: string } }) {
  return (
    <>
      <section className="sticky top-[68px] bg-background">
        <BaseHeader title="Nome do grupo">
          <Button size={"sm"}>Novo Post</Button>
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

      <div className="flex justify-center">
        <Tabs defaultValue={"feed"}>
          <TabsList>
            <TabsTrigger value="feed">Feed</TabsTrigger>

            <TabsTrigger value="members">Membros</TabsTrigger>

            <TabsTrigger value="about">Sobre</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <Suspense fallback={"Carregando..."}>
        <Posts groupId={params.id} />
      </Suspense>
    </>
  );
}

async function Posts({ groupId }: { groupId: string }) {
  const posts = await api.post.list.query({ groupId });

  return (
    <div className="rounded-lg border border-gray-200">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default GroupFeed;
