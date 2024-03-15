"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function BackIcon({ fallback }: { fallback?: string }) {
  const route = useRouter();

  function goBack() {
    const hasHistory = window.history.length > 1;

    if (hasHistory) {
      route.back();
    } else {
      route.push(fallback ?? "/");
    }
  }

  return (
    <ChevronLeft onClick={goBack} className="cursor-pointer"></ChevronLeft>
  );
}
