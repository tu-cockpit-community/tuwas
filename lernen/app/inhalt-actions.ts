"use server";

import { revalidatePath } from "next/cache";
import { installiereUpdate, pruefeUpdate } from "@/lib/inhalt/service";
import type { InhaltStatus } from "@/lib/inhalt/typen";

export async function pruefeInhaltUpdate(): Promise<InhaltStatus> {
  return pruefeUpdate();
}

export async function installiereInhaltUpdate(): Promise<InhaltStatus> {
  const status = await installiereUpdate();
  if (status.meldung && !status.fehler) revalidatePath("/", "layout");
  return status;
}
