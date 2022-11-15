import { AbstractControl } from "@angular/forms";

export const verificarCampoVazio = (control: AbstractControl) => {
  const campo = control.value as string;

  if (campo.trim() === '') {
    return { campoVazio: true };
  } else
    return null;
}





