import { BaseHeader } from "@/components/base-header";
import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EllipsisVertical } from "lucide-react";

function GroupFeed() {
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
              <DropdownMenuItem>Excluir</DropdownMenuItem>
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

      <div className="rounded-lg border border-gray-200">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            name={post.name}
            username={post.username}
            postText={post.postText}
            imgSrc={post.imgSrc}
          />
        ))}
      </div>
    </>
  );
}

const posts = [
  {
    id: "1",
    name: "Tracy Howard",
    username: "tracy123",
    postText:
      "Just finished reading the latest book by @author123. What a journey! Highly recommended for all the book lovers out there. 📚❤️",
    imgSrc: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Kelly Thompson",
    username: "kellyt",
    postText:
      "Just finished reading the latest book by @author123. What a journey! Highly recommended for all the book lovers out there. 📚❤️",
    imgSrc: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Chris Parker",
    username: "thechris",
    postText:
      "Just wanted to share this amazing recipe I tried last night. It's a delicious spaghetti aglio e olio. 😋🍝",
    imgSrc: "/placeholder.svg",
  },
];

export default GroupFeed;
