import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Todo > Create the Group Form, and then create the Edit/Create Group
export function CreateGroupForm() {
  return (
    <form className="flex flex-col gap-4">
      <label>
        Nome do Grupo
        <Input required placeholder="Nome do Grupo" type="text" />
      </label>

      <label>
        Imagem
        <Input required accept="image/*" type="file" />
      </label>

      <Button type="submit">Criar</Button>
    </form>
  );
}
