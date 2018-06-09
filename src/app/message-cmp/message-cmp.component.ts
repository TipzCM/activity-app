import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-cmp',
  templateUrl: './message-cmp.component.html',
  styleUrls: ['./message-cmp.component.css']
})
export class MessageCmpComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
