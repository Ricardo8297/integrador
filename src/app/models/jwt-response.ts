import { Title } from '@angular/platform-browser';

export interface JwtResponseI {
  dataUser: {
    name: string,
    typeUser: number,
    accessToken: string,
    expiresIn: string
  };
}
