import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'channel-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input()
  channelImageUrl: string = "https://i.pinimg.com/736x/34/91/f3/3491f3e50ab6a4d51a348f9cc2419842.jpg";

  @Input()
  channelName: string = "Início";

  ngOnInit(): void {
    this.focusEffect();
    this.tooltip();
    setTimeout(this.tooltips, 500); // Time to load
  }

  tooltips(): void {
    const tooltips = document.querySelectorAll<HTMLElement>('.tooltip');
    tooltips.forEach(tooltip => {
      tooltip.style.right = `${-(tooltip.offsetWidth+6)}px`;
    })
  }

  focusEffect(): void {
    const links = document.querySelectorAll<HTMLElement>('.container .link');
    links.forEach(link => {
      link.addEventListener('focus', (e) => {
        this.clearFocusEffect();
        link.classList.add('link-active');
        link.parentNode!.querySelector<HTMLElement>('.indicator')!.classList.add('active');
      });
    });
  }

  clearFocusEffect(): void {
    const links = document.querySelectorAll('.container .link');
    links.forEach(link => {
      link.classList.remove('link-active');
      link.parentNode!.querySelector('.indicator')!.classList.remove('active');
    });
  }

  tooltip(): void {
    const links = document.querySelectorAll<HTMLElement>('.container .link');
    links.forEach(link => {
      link.addEventListener('mouseover', (e) => {
        link.parentNode!.querySelector<HTMLElement>('.tooltip')!.style.opacity = "1";
      });
      link.addEventListener('mouseout', (e) => {
        link.parentNode!.querySelector<HTMLElement>('.tooltip')!.style.opacity = "0";
      });
    });
  }

}
