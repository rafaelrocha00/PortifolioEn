import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  
  showingImage : boolean = false;
  currentImage : string = "1";

  constructor() { }

  ngOnInit(): void {
  }

  changeMainColor(){

  }

  changeCurrentImage(newImage : string){
    this.showingImage = true;
    this.currentImage = newImage;
  }

  stopShowingImage(){
    //TODO: Degrade até cor principal
  }

}
