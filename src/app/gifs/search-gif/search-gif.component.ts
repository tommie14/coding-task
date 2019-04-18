import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SearchGifService} from './search-gif.service';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent implements OnInit {
  searchFormGroup: FormGroup;
  gifData: any;
  totalPageCount: any;
  searchInput: string;

  constructor(private searchService: SearchGifService) {
  }

  ngOnInit() {
    this.searchFormGroup = new FormGroup({
      search: new FormControl('', Validators.required)
    });
  }

  async searchGif() {
    if (this.searchFormGroup.valid) {
      this.searchInput = this.searchFormGroup.controls.search.value;
      const response = await this.searchService.searchGifs(this.searchInput);
      this.gifData = response['data'];
      this.totalPageCount = response['pagination']['total_count'];
    }
  }
}
