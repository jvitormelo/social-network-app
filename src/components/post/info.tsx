import { cn } from "@/lib/utils";
import { type Group, type Post, type User } from "@/types";
import Image from "next/image";
import { DaysAgo } from "../days-ago";
import { Avatar } from "../ui/avatar";
import { PostDropdownActions } from "./dropdown-actions";
import Link from "next/link";
import { Suspense } from "react";

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

function Header({
  user,
  post,
  group,
}: {
  user: User;
  post: Post;
  group?: Group;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Avatar src={user.picture} />
      <div className="flex flex-col justify-start gap-1">
        {group && (
          <Link target="_blank" href={`/grupos/${group.id}`}>
            <p className="text-xs font-semibold leading-tight text-gray-600 hover:text-blue-600 hover:underline dark:text-gray-400">
              {group.name}
            </p>
          </Link>
        )}
        <span className="flex items-center gap-2">
          <h2 className="text-sm font-medium leading-none">{user.name}</h2>
          <DaysAgo time={post.createdAt}></DaysAgo>
        </span>
      </div>

      <Suspense>
        <PostDropdownActions post={post} />
      </Suspense>
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
            className="mx-auto mb-2 mt-4 items-center"
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
