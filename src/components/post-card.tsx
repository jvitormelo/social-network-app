import Image from "next/image";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { type Post } from "@/types";
import { PostInfo } from "./post/content";

interface Props {
  post: Post;
}

export const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <PostInfo.Container className="border-b">
      <PostInfo.Header user={post.user} />
      <PostInfo.Content post={post} />
      <div className="mx-auto flex items-center gap-4">
        <Link href={`/posts/${post.id}`}>
          <Button size="sm" variant="outline">
            Comment
            <TextIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
        <Button size="sm" variant="outline">
          Share
          <ShareIcon className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </PostInfo.Container>
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
