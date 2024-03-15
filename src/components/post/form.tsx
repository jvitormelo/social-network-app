"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getUserGroups } from "@/server/mock";
import { useQuery } from "@tanstack/react-query";

export function PostForm() {
  const userGroupsQuery = useUserGroups();

  return (
    <form className="flex flex-col gap-4">
      <div>
        <Label htmlFor="group">Grupo*</Label>
        <Select required name="group">
          <SelectTrigger>
            <SelectValue id="group" placeholder="Selecione o Grupo" />
          </SelectTrigger>
          <SelectContent>
            {userGroupsQuery.data?.map((group) => (
              <SelectItem key={group.id} value={group.id}>
                {group.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="content">Conteúdo*</Label>
        <Textarea
          id="content"
          name="content"
          required
          placeholder="O que você está pensando?"
        />
      </div>

      <div>
        <Label htmlFor="img">Imagem</Label>
        <Input id="img" name="img" type="file" accept="image/*" />
      </div>

      <Button type="submit" className="w-full">
        Postar
      </Button>
    </form>
  );
}

const useUserGroups = () => {
  return useQuery({
    queryKey: ["userGroups"],
    queryFn: getUserGroups,
  });
};
