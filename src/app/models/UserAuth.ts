import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class UserAuth {
  private _idToken: string;
  email: string;
  refreshToken: string;
  private _expirationDate: Date;
  localId: string;
  registered: boolean;
  expiresIn: number;
  constructor(
    email: string,
    localId: string,
    idToken: string,
    expirationDate: Date,
    refreshToken: string,
    registered: boolean,
    expiresIn: number
  ) {
    this.email = email;
    this.localId = localId;
    this._idToken = idToken;
    this._expirationDate = expirationDate;
    this.refreshToken = refreshToken;
    this.registered = registered;
    this.expiresIn = expiresIn;
  }
  get idToken() {
    if (!this._expirationDate || new Date() > this._expirationDate) {
      return null;
    }
    return this._idToken;
  }
  get expirationDate() {
    return this._expirationDate;
  }
}
