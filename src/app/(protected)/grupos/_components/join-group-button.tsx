import { Button } from "@/components/ui/button";

export function JoinGroupButton() {
  return (
    <Button className="invisible w-full opacity-0 transition-opacity duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
      Entrar
    </Button>
  );
}
