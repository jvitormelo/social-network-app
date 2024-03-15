import { type PropsWithChildren } from "react";

export function BaseHeader(props: PropsWithChildren & { title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-3xl font-bold">{props.title}</h1>
      <div className="ml-auto flex items-center gap-2">{props.children}</div>
    </div>
  );
}
