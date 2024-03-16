"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { api } from "@/trpc/react";
import { type Post } from "@/types";
import { EllipsisVertical, Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export const PostDropdownActions = ({ post }: { post: Post }) => {
  const user = api.user.me.useQuery();
  const isOp = user.data?.id === post.user.id;
  const utils = api.useUtils();
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  const deletePostMutation = api.post.delete.useMutation({
    onSuccess: () => {
      toast.success("Post excluído com sucesso.");

      // maybbee fazer custom hook disso
      void utils.post.feed.invalidate();
      void utils.post.list.invalidate({ groupId: post.group.id });
      setIsAlertDialogOpen(false);
    },
  });
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="ml-auto">
          <EllipsisVertical className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {isOp ? (
            <>
              <Link passHref href={`/posts/${post.id}/editar`}>
                <DropdownMenuItem>Editar</DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => setIsAlertDialogOpen(true)}
                className="text-red-500"
              >
                Excluir
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem onClick={() => alert("Bloqueado.")}>
              Reportar
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsAlertDialogOpen(false);
              }}
              disabled={deletePostMutation.isLoading}
            >
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={deletePostMutation.isLoading}
              onClick={() => deletePostMutation.mutate(post.id)}
            >
              {deletePostMutation.isLoading ? (
                <Loader className="animate-spin" />
              ) : (
                "Confirmar"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
