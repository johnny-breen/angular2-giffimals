import {Component, Input} from '@angular/core';
import {NgbModal}         from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'giphy-modal-iframe',
  templateUrl: './giphy.modal.component.html'
})
export class GiphyModal {
  @Input() public embedUrl: string;
  
  constructor(private modalService: NgbModal) {
  }

  open(content) {
    console.log('content=' + this.embedUrl);
    this.modalService.open(content).result;
  }
}