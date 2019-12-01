import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Blog } from '../entity/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: any[];
  selectedBlog: any;
  errorMessage: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      data => {
        console.log(data);
        this.blogs = data;
      },
      error => {
        console.log(error);
        this.errorMessage = error.message;
      }
    );
  }

  onSelect(blog: Blog) {
    this.selectedBlog = blog;
  }

}
