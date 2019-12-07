import {Component, ComponentRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public viewRef!: ComponentRef<DetailComponent>;

  constructor() { }

  ngOnInit() {
  }

  public closeOne(): void {
    this.viewRef.destroy();
  }
}
