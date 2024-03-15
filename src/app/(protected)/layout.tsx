import { SearchCommand } from "@/components/search-command";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar } from "@/components/ui/avatar";
import { UserGroupColapse } from "@/components/user-groups-collapse";
import { Compass, Group } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Feed", icon: HomeIcon },
  { href: "/grupos/~/descobrir", label: "Descobrir", icon: Compass },
  { href: "/grupos/~/seus-grupos", label: "Meus grupos", icon: Group },
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
            <Avatar />
          </div>
        </header>
      </div>
      <section className="mx-auto grid w-full max-w-7xl items-start gap-6 px-6 py-6 md:grid-cols-12">
        {/* Include shared UI here e.g. a header or sidebar */}
        <aside className="left-0 top-24 hidden gap-4 md:col-span-3 md:grid lg:sticky ">
          <div className="flex items-center gap-4">
            <Avatar />
            <div>
              <h1 className="text-2xl font-bold leading-none">Tracy Howard</h1>
              <p className="text-sm text-gray-500">@tracy123</p>
            </div>
          </div>
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

function UserIcon(props: SvgProps) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon(props: SvgProps) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

type SvgProps = React.ComponentProps<"svg">;

function HomeIcon(props: SvgProps) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
