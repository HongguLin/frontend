import { Component, OnInit } from '@angular/core';
import { Blog } from '../entity/blog';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-writer',
  templateUrl: './blog-writer.component.html',
  styleUrls: ['./blog-writer.component.css']
})
export class BlogWriterComponent implements OnInit {
  blog: Blog;
  editorContent: string;
  isSaved = false;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blog = new Blog();
  }

  onSubmit() {
    this.blogService.saveBlog(this.blog).subscribe(
      data => {
        this.isSaved = true;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
