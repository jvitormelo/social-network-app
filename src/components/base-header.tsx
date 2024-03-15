import { type ReactNode, type PropsWithChildren } from "react";
import { BackIcon } from "./back-icon";

export function BaseHeader(
  props: PropsWithChildren & {
    title: ReactNode;
    backFallback?: string;
    hideBack?: boolean;
  },
) {
  return (
    <div className="flex items-center gap-4">
      <h1 className="flex items-center gap-2 text-3xl font-bold">
        {!props.hideBack && <BackIcon fallback={props.backFallback} />}
        {props.title}
      </h1>
      <div className="ml-auto flex items-center gap-2">{props.children}</div>
    </div>
  );
}
