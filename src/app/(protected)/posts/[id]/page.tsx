import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import { Suspense } from "react";

function PostPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const id = params.id;
  const post = {
    id: 1,
    name: "Tracy Howard",
    username: "tracy123",
    postText: "This is a post",
    imgSrc: "/placeholder.svg",
  };
  const { name, username, postText, imgSrc } = post;

  return (
    <div>
      <div className="flex flex-col gap-2 border-b p-4">
        <div className="flex items-center gap-2">
          <Avatar />
          <div className="flex items-center gap-1">
            <h2 className="text-sm font-medium leading-none">{name}</h2>
            <h3 className="text-sm font-medium leading-none text-gray-500">
              @{username}
            </h3>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-base leading-[1.6]">{postText}</p>
          <div>
            <Image
              alt="Post image"
              className="mx-auto  items-center"
              height="200"
              src={imgSrc}
              width="400"
            />
          </div>
        </div>
      </div>
      <Suspense>
        <Comments />
      </Suspense>
    </div>
  );
}

function Comments() {
  return <div></div>;
}

export default PostPage;
