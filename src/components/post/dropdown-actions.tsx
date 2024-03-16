import { type Post } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { api } from "@/trpc/react";

export const PostDropdownActions = ({ post }: { post: Post }) => {
  const user = api.user.me.useQuery();
  const isOp = user.data?.id === post.user.id;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-auto">
        <EllipsisVertical className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isOp && (
          <>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Excluir
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuItem onClick={() => alert("Reportado por jogar de Yasuo")}>
          Reportar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
