import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ThinkingModel } from '../../models/thinking.model';

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

  delete(id: number): Observable<ThinkingModel> {
    const url = `${this.backendAPI}/${id}`
    return this.http.delete<ThinkingModel>(url);
  }

}
