import { type Comment } from "@/types";
import { Avatar } from "../ui/avatar";
import { DaysAgo } from "../days-ago";

type Props = { comment: Comment };

export const PostComment = ({ comment }: Props) => {
  return (
    <div className="flex space-x-2">
      <Avatar src={comment.user.picture} />
      <div className="flex-1 rounded-lg border px-3 py-2 leading-relaxed sm:px-6 sm:py-4">
        <strong>{comment.user.name}</strong>{" "}
        <DaysAgo time={comment.createdAt} />
        <p className="mt-2 text-sm">{comment.content}</p>
      </div>
    </div>
  );
};
