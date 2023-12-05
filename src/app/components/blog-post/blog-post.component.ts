import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import matter from 'gray-matter-browser';
import MarkdownIt from 'markdown-it';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  private markdownIt = new MarkdownIt();
  content = '';
  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private headerService: HeaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const slug = this.activateRoute.snapshot.paramMap.get('postId');
    this.http.get(`assets/posts/${slug}/post.md`, { responseType: 'text' }).subscribe({
      next: data => this.manageMarkdonwFileData(data),
      error: error => {
        console.error(error);
        if (error?.status === 404) {
          this.router.navigate(['/'])
        }
      }
    })
  }

  manageMarkdonwFileData(markDownFile: string | undefined): void {
    if (!markDownFile) {
      return
    };

    const matterObj = matter(markDownFile);
    const { title = '', subtitle = '', thumbnail = '' } = matterObj.data;
    const headerData: HeaderData = { title, subtitle, thumbnail };
    this.setHeaderData(headerData)
    this.content = this.markdownIt.render(matterObj.content);
  }

  setHeaderData(headerData: HeaderData): void {
    this.headerService.uiData.set(headerData)
  }

}
