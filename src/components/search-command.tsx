"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

export function SearchCommand() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center rounded-md border border-b px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <Input
          onFocus={() => setIsOpen(true)}
          placeholder="Procure algo"
          className={
            "flex h-11 w-full rounded-md border-none bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          }
        ></Input>
      </div>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Procure algo" />
        <CommandList>
          <CommandEmpty>Nada encontrado..</CommandEmpty>
          <UserGroups />
          <CommandSeparator />
          <CommandGroup heading="Sugestões">
            <CommandItem>Feed</CommandItem>
            <CommandItem>Descobrir Grupos</CommandItem>
            <CommandItem>Meus Grupos</CommandItem>
            <CommandItem>Perfil</CommandItem>
            <CommandItem>Configuracoes</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

function UserGroups() {
  const userGroupsQuery = api.groups.listUserGroups.useQuery();
  const router = useRouter();
  if (userGroupsQuery.isLoading) {
    return <CommandItem>Carregando...</CommandItem>;
  }
  return (
    <CommandGroup heading="Meus grupos">
      {userGroupsQuery.data?.map((group) => (
        <CommandItem
          onSelect={() => {
            router.push(`/grupos/${group.id}`);
          }}
          key={group.id}
        >
          {group.name}
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
