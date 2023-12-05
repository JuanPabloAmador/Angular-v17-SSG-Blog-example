import { Post } from "./post.type";

export type PostPreview = Pick<Post, 'title' | 'subtitle' | 'slug' | 'author' | 'publicationDate'>
