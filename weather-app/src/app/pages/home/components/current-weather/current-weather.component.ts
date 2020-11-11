import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

import { CityWeather } from './../../../../shared/models/weather.model';


@Component({
  selector: 'jv-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentWeatherComponent{

  @Input() cityWeather: CityWeather;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string {
    return `${this.cityWeather.city.name} ${this.cityWeather.city.country}`;
  }

  onToggleBookmark(): void {
    this.toggleBookmark.emit();
  }

}
