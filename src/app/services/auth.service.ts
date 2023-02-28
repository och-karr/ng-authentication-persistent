import {Inject, Injectable} from '@angular/core';
import {STORAGE} from "./storage";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "../models/auth.model";
import {AuthDataModel} from "../models/auth-data.model";

@Injectable()
export class AuthService {
  private _userAccessTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._storage.getItem('accessToken'));
  public userAccessToken$: Observable<string | null> = this._userAccessTokenSubject.asObservable();

  private _userRefreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(this._storage.getItem('refreshToken'));
  public userRefreshToken$: Observable<string | null> = this._userRefreshTokenSubject.asObservable();

  constructor(private _httpClient: HttpClient, @Inject(STORAGE) private _storage: Storage) {
  }

  login(authData: AuthModel<AuthDataModel>): Observable<void> {
    return this._httpClient.post<AuthDataModel>('https://us-central1-courses-auth.cloudfunctions.net/auth/login', authData)
      .pipe(
        tap((data: any) => {
          this._userAccessTokenSubject.next(data.data.accessToken);
          this._storage.setItem('accessToken', data.data.accessToken);
          this._userRefreshTokenSubject.next(data.data.refreshToken);
          this._storage.setItem('refreshToken', data.data.refreshToken);
        })
      )
  }

  logout() {
    this._storage.removeItem('isLoggedIn');
    this._storage.removeItem('accessToken');
    this._storage.removeItem('refreshToken');
  }
}