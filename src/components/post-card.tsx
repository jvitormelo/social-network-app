import Image from "next/image";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";

interface PostCardProps {
  name: string;
  username: string;
  postText: string;
  imgSrc: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  name,
  username,
  postText,
  imgSrc,
}) => {
  return (
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
      <div className="flex flex-col items-center">
        <p className="text-base leading-[1.6]">{postText}</p>
        <div>
          <Image
            alt="Post image"
            className="rounded-xl"
            height="200"
            src={imgSrc}
            width="400"
          />
        </div>
      </div>
      <div className="mx-auto flex items-center gap-4">
        <Button size="sm" variant="outline">
          Comment
          <TextIcon className="ml-1 h-4 w-4" />
        </Button>
        <Button size="sm" variant="outline">
          Share
          <ShareIcon className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

type IconProps = React.ComponentProps<"svg">;

function TextIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}

function ShareIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
