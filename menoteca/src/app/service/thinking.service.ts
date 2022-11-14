import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ThinkingModel } from '../model/thinking.model';

@Injectable({
  providedIn: 'root'
})
export class ThinkingService {

  private readonly backendAPI = environment.urlBackend;

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<ThinkingModel> {
    const url = `${this.backendAPI}/${id}`
    return this.http.get<ThinkingModel>(url)
  }

  delete(id: number): Observable<ThinkingModel> {
    const url = `${this.backendAPI}/${id}`
    return this.http.delete<ThinkingModel>(url)
  }

}
