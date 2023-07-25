import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
//tova izvikvame  v construktora i importvaneto na modula ve4e ozna4ava 4e moje da si fetcnem dannite otdolu
  constructor(private http: HttpClient) { }


  getThemes(){
    const {appUrl} = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }
  getPosts(limit?: number){
    const {appUrl} = environment
    const limitFilter = limit ? `?limit=${limit}` : ''; // ako ima limit, iskam da mi dobavi6 limit koito da e raven na samiq limit
    return this.http.get<Post[]>(`${appUrl}/posts${limitFilter}`);
  }

  //sega trqbva da otidem v komponentite i da gi izpolzvame, suotvetno v posts, i themes
}
