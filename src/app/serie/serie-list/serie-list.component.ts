import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { serie } from '../serie';


@Component({
  templateUrl: './serie-list.component.html',
  selector: 'app-serie-list'
})

export class SerieListComponent implements OnInit {

  Series: serie[] = [];
  seasonAverage: number=0;
  constructor(private serieService: SerieService) { }

  seasonAverageValue(series: serie[]): number {
    let suma: number = 0;
    for (let serie of series) {
      suma += serie.seasons;
    }
    return suma / series.length;
  }

  setAvg(series: serie[]) {
    this.Series = series;
    this.seasonAverage = this.seasonAverageValue(series);
  }

  getSeries(): void {
    this.serieService.getSeries().subscribe(series => this.setAvg(series));
  }

  ngOnInit()
  {
    this.getSeries();
  }

}
