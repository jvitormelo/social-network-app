import { type User, type Post } from "@/types";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

function Header({ user }: { user: User }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar />
      <div className="flex items-center gap-1">
        <h2 className="text-sm font-medium leading-none">{user.name}</h2>
      </div>
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
