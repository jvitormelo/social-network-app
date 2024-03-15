import { BaseHeader } from "@/components/base-header";
import { CreateGroupForm } from "../_components/create-group-form";

function NewGroupPage() {
  return (
    <>
      <BaseHeader title="Novo Grupo" />

      <CreateGroupForm />
    </>
  );
}

export default NewGroupPage;
