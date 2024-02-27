import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface PhotoModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
@Injectable({
  providedIn: 'root'
})

export default class SampleService {

  constructor(private httpClient : HttpClient) { }

  
  photoData :PhotoModel[] = [
      {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
    ]

    
    fetchPhotosfromJsonPlaceholder1(){
     return this.httpClient.get<PhotoModel[]>("https://jsonplaceholder.typicode.com/albums")
  }
  
}
