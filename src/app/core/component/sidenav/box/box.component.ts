import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'server-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  @Input()
  serverImageUrl: string = '';

  @Input()
  serverName: string = '';

  ngOnInit(): void {
    this.tooltip();
    setTimeout(this.tooltips, 500); // Time to load
  }

  clickEffect(e: any): void {
    this.clearClickEffect(); // Clear other effects
    const link = e.currentTarget;
    link.classList.add('link-active');
    link.parentNode.querySelector('.indicator').classList.add('active');
  }

  tooltips(): void {
    const tooltips = document.querySelectorAll<HTMLElement>('.tooltip');
    tooltips.forEach((tooltip) => {
      tooltip.style.right = `${-(tooltip.offsetWidth + 6)}px`;
    });
  }

  clearClickEffect(): void {
    const links = document.querySelectorAll('.container .link');
    links.forEach((link) => {
      link.classList.remove('link-active');
      link.parentNode!.querySelector('.indicator')!.classList.remove('active');
    });
  }

  tooltip(): void {
    const links = document.querySelectorAll<HTMLElement>('.container .link');
    links.forEach((link) => {
      link.addEventListener('mouseover', (e) => {
        const tooltip =
          link.parentElement!.querySelector<HTMLElement>('.tooltip')!;
        tooltip.style.zIndex = '1';
        tooltip.style.opacity = '1';
      });
      link.addEventListener('mouseout', (e) => {
        const tooltip =
          link.parentElement!.querySelector<HTMLElement>('.tooltip')!;
        tooltip.style.zIndex = '-1';
        tooltip.style.opacity = '0';
      });
    });
  }
}
