import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';


// v componenta.ts, koito 6te izpolzva servisa, za da fetchne datite, se izvikava ngOnInit i se importva samiq service
@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit{

  themesList: Theme[]= []// 6tom 6te izpolzvame themeList s *ngFor v themehtml, trqbva da bude definiran, inizializiran tuk
  isLoading : boolean = true;

  constructor(private apiService: ApiService) {}


      ngOnInit(): void {
        //po tozi na4in konsumiram themite, izvikvam gi i gi polzvam
        this.apiService.getThemes().subscribe({
          next: (themes)=>{
            this.themesList = themes; //po tozi na4in gi setvame
            this.isLoading = false;
          },
          error: (err)=>{
            this.isLoading = false;
            console.error(`Error: ${err}`)
          }


        })
      }
}
