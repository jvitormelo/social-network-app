"use client";

import { api } from "@/trpc/react";
import { ChevronDown, ChevronUp, UsersIcon } from "lucide-react";

import { useState } from "react";
import { Compass, Group, LucideHome, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Feed", icon: LucideHome },
  { href: "/grupos/~/descobrir", label: "Descobrir", icon: Compass },
  { href: "/grupos/~/meus-grupos", label: "Meus grupos", icon: Group },
  <UserGroupsColapse key={"groups"} />,
  { href: "/perfil", label: "Perfil", icon: UserIcon },
];

export function Navlinks() {
  const pathname = usePathname();
  return (
    <nav className="grid gap-1.5">
      {navLinks.map((link) =>
        "label" in link ? (
          <Link
            className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none transition-all duration-100 ease-linear hover:bg-gray-100 data-[active=true]:bg-primary data-[active=true]:text-white dark:hover:bg-gray-800"
            data-active={pathname === link.href}
            href={link.href}
            key={link.href}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </Link>
        ) : (
          link
        ),
      )}
    </nav>
  );
}

function UserGroupsColapse() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col border-t pt-2">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <UsersIcon className="h-4 w-4" />
        Grupos
        <div className="ml-auto flex">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>

      {isOpen && <ExpandedItems />}
    </div>
  );
}

function ExpandedItems() {
  const groupsQuery = api.groups.listUserGroups.useQuery();
  const pathname = usePathname();

  return (
    <div className="border-b pb-2 pl-6">
      {groupsQuery.data?.map((group) => (
        <Link
          data-active={pathname === `/grupos/${group.id}`}
          className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none transition-all duration-100 ease-linear hover:bg-gray-100 data-[active=true]:bg-primary data-[active=true]:text-white dark:hover:bg-gray-800"
          key={group.id}
          href={`/grupos/${group.id}`}
        >
          {group.name}
        </Link>
      ))}
    </div>
  );
}
