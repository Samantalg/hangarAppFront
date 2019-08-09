import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
  styleUrls: ['./sidebar-toggle.component.css']
})
export class SidebarToggleComponent {

  @Output() toggle: EventEmitter<null> = new EventEmitter();

  @HostListener('click')
  click() {
    this.toggle.emit();
  }

}
