import {Component, Input, OnInit} from '@angular/core';
import {SearchGifService} from '../search-gif.service';

@Component({
  selector: 'app-gif-table',
  templateUrl: './gif-table.component.html',
  styleUrls: ['./gif-table.component.css']
})
export class GifTableComponent implements OnInit {

  constructor(private searchService: SearchGifService) {
  }

  private static LIKE_GIFS_KEY = 'likedGifs';
  @Input() gifData: any;
  @Input() totalPageCount: any;
  @Input() searchInput: any;
  likedGifs: Array<string> = [];

  ngOnInit() {
    this.handleLikedGifsInLocalStorage();
  }

  private handleLikedGifsInLocalStorage() {
    const likedGifs = localStorage.getItem(GifTableComponent.LIKE_GIFS_KEY);
    if (likedGifs) {
      this.likedGifs = JSON.parse(likedGifs);
    }
  }

  async pageClicked(event) {
    const offset = event.pageIndex * 25 + 1;
    const response = await this.searchService.searchGifs(this.searchInput, offset);
    this.gifData = response['data'];
  }

  addToLikedGifs(gifUrl: string) {
    this.likedGifs.push(gifUrl);
    localStorage.setItem(GifTableComponent.LIKE_GIFS_KEY, JSON.stringify(this.likedGifs));
  }

  deleteFromLikedGifs(index: number) {
    this.likedGifs.splice(index, 1);
    localStorage.setItem(GifTableComponent.LIKE_GIFS_KEY, JSON.stringify(this.likedGifs));
  }
}
