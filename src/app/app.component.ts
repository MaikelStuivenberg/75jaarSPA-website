import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = '75jaarspa';

  bgInterval: any;
  currentBackgroundIndex: number = 0;
  currentBackgroundImage: string = '../assets/fotos/2011BRASS.jpeg';

  images: string[] = [
    '../assets/fotos/1947BRASS.jpg',
    '../assets/fotos/2012THEATRE.jpeg',
    '../assets/fotos/2012CHOIR.jpeg',
    '../assets/fotos/2011BRASS.jpeg',
    // '../assets/fotos/2012TIMBRALS.jpeg',
    '../assets/fotos/2015SPABAND.jpeg',
    // '../assets/fotos/2015ZANG.jpeg',
    '../assets/fotos/2018BRASS.jpeg',
    '../assets/fotos/2022MMS.jpg',
  ];


  ngOnInit(): void {
    this.bgInterval = setInterval(() => {
      this.currentBackgroundIndex += 1;
      this.currentBackgroundImage = this.images[this.currentBackgroundIndex];
      if (this.currentBackgroundIndex >= this.images.length - 1) this.currentBackgroundIndex = -1;

      // Load next image in background
      let img = new Image();
      img.src = this.images[this.currentBackgroundIndex + 1];
      img.style.display = 'none';
    }, 4000);
  }

  ngOnDestroy(): void {
    this.bgInterval.clearInterval();
  }
}
