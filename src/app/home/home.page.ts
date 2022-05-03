import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, MenuController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('title', { read: ElementRef, static: true }) title: ElementRef;
  anim: Animation;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private menu: MenuController,
    private animationCtrl: AnimationController,
    private modalController: ModalController
  ) {}

  ngAfterViewInit() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Animation = this.animationCtrl
      .create()
      .addElement(this.title.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(-100px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');

    Animation.play();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
