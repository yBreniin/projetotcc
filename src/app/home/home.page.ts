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

  option = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  round = {
    slidesPerView: 4,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
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
