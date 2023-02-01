import { Context, Plugin } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import moment from 'jalali-moment'
export class UtilsPlugin {

  public dateToday() {
    const options: any = { year: 'numeric', month: 'long', day: 'numeric', };
    const date = new Date();
    const dayName = date.toLocaleDateString('fa-IR', { weekday: 'long' });
    const hourToday = `${date.getHours()}:${date.getMinutes()}`;
    const today: any = date.toLocaleDateString('fa-IR', options);
    return `${dayName} ${today} | ${hourToday} `
  }


  public convertDateToMiladi(date: string) {
    const time = moment(Number(date)).format("DD MMMM  h:mm");
    return time
  }
}
const plugin: Plugin = function (_ctx: Context, inject: Inject) {
  inject('utils', new UtilsPlugin())
}
export default plugin