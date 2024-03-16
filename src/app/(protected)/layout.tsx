import { SearchCommand } from "@/components/search-command";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, UserAvatar } from "@/components/ui/avatar";
import { UserGroupColapse } from "@/components/user-groups-collapse";
import { UserInfo } from "@/components/user-info";
import { Compass, Group, LucideHome, UserIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const navLinks = [
  { href: "/", label: "Feed", icon: LucideHome },
  { href: "/grupos/~/descobrir", label: "Descobrir", icon: Compass },
  { href: "/grupos/~/meus-grupos", label: "Meus grupos", icon: Group },
  <UserGroupColapse key={"groups"} />,
  { href: "/perfil", label: "Perfil", icon: UserIcon },
];

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sticky top-0 z-50 border-b bg-background py-2">
        <header className="mx-auto flex max-w-7xl justify-between px-6">
          <div>LOGO</div>

          <SearchCommand />

          <div className="flex gap-4">
            <ModeToggle />
            <UserAvatar />
          </div>
        </header>
      </div>
      <section className="mx-auto grid w-full max-w-7xl items-start gap-6 px-6 py-6 md:grid-cols-12">
        {/* Include shared UI here e.g. a header or sidebar */}
        <aside className="left-0 top-24 hidden gap-4 md:col-span-3 md:grid lg:sticky ">
          <Suspense>
            <UserInfo />
          </Suspense>
          <nav className="grid gap-1.5">
            {navLinks.map((link) =>
              "label" in link ? (
                <Link
                  className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
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
        </aside>
        <main className="grid min-h-[90vh] w-full gap-6 md:col-span-9">
          <div className="space-y-6">{children}</div>
        </main>
      </section>
    </div>
  );
}

export default AppLayout;
