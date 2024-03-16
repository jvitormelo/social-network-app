"use client";

import { FileUploader } from "@/components/file-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Todo > Create the Group Form, and then create the Edit/Create Group
export function CreateGroupForm() {
  const router = useRouter();
  const { mutate, isLoading } = api.groups.create.useMutation({
    onSuccess(data) {
      toast.success("Grupo criado com sucesso");

      router.push(`/grupos/${data.id}`);
    },
  });
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const picture = formData.get("picture") as File;

        // TODO: Handle picture upload
        mutate({
          name,
          description,
          picture: picture.name,
          theme: "default",
          tags: [],
        });
      }}
    >
      <div>
        <Label htmlFor="name">Nome do Grupo*</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Nome do Grupo"
          type="text"
        />
      </div>

      <ThemeSelect />

      <div>
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Conte-nos mais sobre o grupo..."
        />
      </div>

      <div className="w-full lg:w-1/2">
        <Label>Imagem</Label>
        <FileUploader name="picture" />
      </div>

      <Button isLoading={isLoading} type="submit">
        Criar
      </Button>
    </form>
  );
}

function ThemeSelect() {
  return (
    <div>
      <Label htmlFor="theme">Tema*</Label>
      <Select name="theme" required>
        <SelectTrigger>
          <SelectValue placeholder="Sobre o que?" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme) => (
            <SelectItem key={theme} value={theme}>
              {theme}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const themes = [
  "Estudos de Matemática",
  "Estudos de Física",
  "Estudos de Química",
  "Estudos de Biologia",
  "Cinema",
  "Esportes",
  "Música",
  "Projeto de Pesquisa",
  "Clube de Robótica",
  "Organização de Eventos",
  "Debates Políticos",
  "Conscientização Ambiental",
  "Suporte em Programação",
  "Auxílio em Redação Acadêmica",
];
