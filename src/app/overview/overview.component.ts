import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DetailComponent} from '../detail/detail.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {
  @ViewChild('detail', {
    static: false,
    // read ViewContainerRef,
  })
  public viewContainer!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  public ngAfterViewInit(): void {}

  public addOne() {
    const componentFactory = this.resolver.resolveComponentFactory(
      DetailComponent,
    );
    const componentRef = this.viewContainer.createComponent(componentFactory);
    componentRef.instance.viewRef = componentRef;
  }
}
