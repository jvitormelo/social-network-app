import { cn } from "@/lib/utils";
import { type Post, type User } from "@/types";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { DaysAgo } from "../days-ago";
import { Avatar } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2 p-4 pb-2", className)}>
      {children}
    </div>
  );
}

function Header({ user, post }: { user: User; post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar />
      <div className="flex items-center gap-1">
        <h2 className="text-sm font-medium leading-none">{user.name}</h2>
      </div>

      <DaysAgo time={post.createdAt}></DaysAgo>

      <DropdownMenu>
        <DropdownMenuTrigger className="ml-auto">
          <EllipsisVertical className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button></button>
    </div>
  );
}

function Content({ post: { content, imgSrc } }: { post: Post }) {
  return (
    <div className="flex flex-col">
      <p className="text-base leading-[1.6]">{content}</p>
      {imgSrc && (
        <div>
          <Image
            alt="Post image"
            className="mx-auto  items-center"
            height="200"
            src={imgSrc}
            width="400"
          />
        </div>
      )}
    </div>
  );
}

export const PostInfo = {
  Content,
  Container,
  Header,
};
