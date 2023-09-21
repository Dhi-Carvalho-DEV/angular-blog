import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faTwitter = faTwitter;

  constructor() {}

  ngOnInit(): void {}
}
