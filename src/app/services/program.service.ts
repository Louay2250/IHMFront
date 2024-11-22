import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  private apiUrl = 'http://localhost:8080/api/programs';

  constructor(private http: HttpClient) {}

  // Get all programs
  getPrograms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new program
  addProgram(program: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, program);
  }

  // Delete a program by ID
  deleteProgram(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
