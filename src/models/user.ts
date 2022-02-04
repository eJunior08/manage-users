export interface User {
  id: string;
  code: string;
  name: string;
  birthdate?: Date | string;
  imageUri: string;
}
