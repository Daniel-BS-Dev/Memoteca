import { ThinkingModel } from '../../models/thinking.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThinkingService {

  private readonly backendAPI = environment.urlBackend;

  constructor(private http: HttpClient) { }

  findAll(): Observable<ThinkingModel[]> {
    return this.http.get<ThinkingModel[]>(this.backendAPI);
  }

  create(thinking: ThinkingModel): Observable<ThinkingModel> {
    return this.http.post<ThinkingModel>(this.backendAPI, thinking);
  }

  edit(thinking: ThinkingModel): Observable<ThinkingModel> {
    const url = `${this.backendAPI}/${thinking.id}`
    return this.http.put<ThinkingModel>(url, thinking);
  }

  getById(thinking: ThinkingModel): Observable<ThinkingModel> {
    const url = `${this.backendAPI}/${thinking.id}`
    return this.http.get<ThinkingModel>(url);
  }

  delete(thinking: ThinkingModel): Observable<ThinkingModel> {
    const url = `${this.backendAPI}/${thinking.id}`
    return this.http.delete<ThinkingModel>(url);
  }

}

