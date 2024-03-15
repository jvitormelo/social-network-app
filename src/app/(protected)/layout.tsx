import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Feed", icon: HomeIcon },
  { href: "/grupos/descobrir", label: "Grupos", icon: UsersIcon },
  { href: "/perfil", label: "Perfil", icon: UserIcon },
  //   { href: "#", label: "Messages", icon: MessageSquareIcon },
  //   { href: "#", label: "Notifications", icon: BellIcon },
];

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="sticky top-0 z-50 border-b bg-white py-3">
        <header className="mx-auto flex max-w-7xl justify-between px-6">
          <div>LOGO</div>
          <div className="flex items-center gap-4">
            <div />
            <input
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              placeholder="Search"
              type="text"
            />
          </div>
          <Avatar />
        </header>
      </div>
      <section className="mx-auto grid w-full max-w-7xl items-start gap-6 px-6 py-6 md:grid-cols-12">
        {/* Include shared UI here e.g. a header or sidebar */}
        <aside className="left-0 top-24 grid gap-4 md:col-span-3 lg:sticky ">
          <div className="flex items-center gap-4">
            <Avatar />
            <div>
              <h1 className="text-2xl font-bold leading-none">Tracy Howard</h1>
              <p className="text-sm text-gray-500">@tracy123</p>
            </div>
          </div>
          <nav className="grid gap-1.5">
            {navLinks.map((link) => (
              <Link
                className="flex items-center gap-2 rounded-md p-3 text-sm font-medium leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
                href={link.href}
                key={link.href}
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="grid min-h-[90vh] w-full gap-6 md:col-span-9">
          {children}
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

function MessageSquareIcon(props: SvgProps) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function BellIcon(props: SvgProps) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
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
