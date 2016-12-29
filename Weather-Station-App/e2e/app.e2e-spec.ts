import { WeatherStationAppPage } from './app.po';

describe('weather-station-app App', function() {
  let page: WeatherStationAppPage;

  beforeEach(() => {
    page = new WeatherStationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
