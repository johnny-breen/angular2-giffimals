import { Component, Input } from '@angular/core';
import { NgbModal }         from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-giphy-modal-iframe',
  templateUrl: './giphy.modal.component.html'
})
export class GiphyModalComponent {
  @Input() public embedUrl: string;
  constructor(private modalService: NgbModal) {
  }

  open(content) {
    console.log('content=' + this.embedUrl);
    this.modalService.open(content).result;
  }
}
