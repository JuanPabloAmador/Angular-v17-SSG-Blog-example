import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostPreview } from '../../../../types/post-preview.type';

@Component({
  selector: 'app-post-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-preview.component.html',
  styleUrl: './post-preview.component.scss'
})
export class PostPreviewComponent {
  @Input() post: PostPreview = {
    title: '',
    subtitle: '',
    slug: '',
    author: '',
    publicationDate: ''
  }
}
