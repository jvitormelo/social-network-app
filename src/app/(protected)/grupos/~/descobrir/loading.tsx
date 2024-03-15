import { SkeletonCard } from "@/components/skeleton-card";

export default function LoadingPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
