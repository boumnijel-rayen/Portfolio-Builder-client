import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataAdminService {

  constructor(private http : HttpClient) { }

  getAllProfiles(token: string){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/user/all/', {headers: headers});
  }

  deleteProfile(id: number, token: string){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8000/portfolio/user/delete/'+id, {headers: headers});
  }

  getAllPortfolios(token: string){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8000/portfolio/portfolio/all/', {headers: headers});
  }

  deletePortfolio(id: number, token: string){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8000/portfolio/portfolio/delete/'+id, {headers: headers});
  }
}
