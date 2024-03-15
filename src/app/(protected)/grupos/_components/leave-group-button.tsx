import { Button } from "@/components/ui/button";

export function LeaveGroupButton() {
  return (
    <Button
      variant={"destructive"}
      className="invisible w-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:visible group-hover:opacity-100"
    >
      Sair
    </Button>
  );
}
