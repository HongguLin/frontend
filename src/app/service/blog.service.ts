import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../entity/blog';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogsUrl = 'http://localhost:8080/getBlogs';
  private writeUrl = 'http://localhost:8080/saveBlog';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.blogsUrl);
  }

  saveBlog(blog: Blog): Observable<any> {
    return this.http.post(this.writeUrl, blog, httpOptions);
  }
}
