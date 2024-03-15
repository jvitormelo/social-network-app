import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export function SkeletonCard() {
  return (
    <Card className="p-4">
      <Skeleton className="mb-4 h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </Card>
  );
}
