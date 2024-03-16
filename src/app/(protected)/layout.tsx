import { Navlinks } from "@/components/nav-links";
import { SearchCommand } from "@/components/search-command";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, UserAvatar } from "@/components/ui/avatar";
import { UserInfo } from "@/components/user-info";
import { Suspense } from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <section className="mx-auto grid w-full max-w-7xl items-start gap-6 p-2 md:grid-cols-12  lg:p-6">
        <Sidebar />
        <main className="grid min-h-[90vh] w-full gap-6 md:col-span-9">
          <div className="space-y-6">{children}</div>
        </main>
      </section>
    </>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b bg-background py-2">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-2 lg:px-6">
        <Avatar />

        <SearchCommand />

        <div className="flex gap-4">
          <ModeToggle />
          <UserAvatar />
        </div>
      </header>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="left-0 top-24 hidden gap-4 md:col-span-3 md:grid lg:sticky ">
      <Suspense>
        <UserInfo />
      </Suspense>
      <Navlinks></Navlinks>
    </aside>
  );
}

export default AppLayout;
