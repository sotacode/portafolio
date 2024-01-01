import { FormContact } from "@/types";

export function insertCharAtIndex(originalString: string, charToInsert: string, index: number): string {
  if (index < 0 || index > originalString.length) {
    // Si el índice está fuera de rango, no realizamos cambios
    return originalString;
  }

  const firstPart: string = originalString.slice(0, index); // Parte inicial de la cadena
  const secondPart: string = originalString.slice(index);    // Parte restante de la cadena

  const resultString: string = firstPart + charToInsert + secondPart; // Concatenar las partes

  return resultString;
}

export function validateEmail(email: string): boolean {
  const regex: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const isValid: boolean = regex.test(email);

  return isValid;
}

export function validateForm(form: FormContact): any {
  //quita los espacios en blancos de cada campo
  form.name = form.name.trim();
  form.email = form.email.trim();
  form.subject = form.subject.trim();
  form.description = form.description.trim();

  const {name, email, subject, description} = form;

  return {
    name: name === "" ? false : true,
    email: email === "" || !validateEmail(email) ? false : true,
    subject: subject === "" ? false : true,
    description: description === "" ? false : true,
  };
}