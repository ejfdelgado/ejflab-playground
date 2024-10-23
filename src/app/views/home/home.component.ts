import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'ejflab-front-lib';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from 'ejflab-front-lib';
import { ActivatedRoute } from '@angular/router';
import { BackendPageService } from 'ejflab-front-lib';
import { Router } from '@angular/router';
import { HttpService } from 'ejflab-front-lib';
import { TupleService } from 'ejflab-front-lib';
import { FileService } from 'ejflab-front-lib';
import { ModalService } from 'ejflab-front-lib';
import { WebcamService } from 'ejflab-front-lib';
import { Auth } from '@angular/fire/auth';
import { FlowchartService } from 'ejflab-front-lib';
import { CallService } from 'ejflab-front-lib';
import { CardComponentData } from 'ejflab-front-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BaseComponent implements OnInit, OnDestroy {
  topCards: Array<CardComponentData> = [];
  secondCards: Array<CardComponentData> = [];
  constructor(
    public override flowchartSrv: FlowchartService,
    public override callService: CallService,
    public override route: ActivatedRoute,
    public override pageService: BackendPageService,
    public override cdr: ChangeDetectorRef,
    public override authService: AuthService,
    public override dialog: MatDialog,
    private readonly router: Router,
    private readonly httpSrv: HttpService,
    public override tupleService: TupleService,
    public override fileService: FileService,
    public override modalService: ModalService,
    public override webcamService: WebcamService,
    public override auth: Auth
  ) {
    super(
      flowchartSrv,
      callService,
      route,
      pageService,
      cdr,
      authService,
      dialog,
      tupleService,
      fileService,
      modalService,
      webcamService,
      auth
    );
  }

  navegar(ruta: string) {
    this.router.navigate(['/', ruta]);
  }

  bindEvents() {}

  override async ngOnInit() {
    await super.ngOnInit();
    const promesas = [];
    promesas.push(
      this.httpSrv.get<Array<CardComponentData>>('assets/json/topApps.json')
    );
    promesas.push(
      this.httpSrv.get<Array<CardComponentData>>('assets/json/secondApps.json')
    );
    const respuestas = await Promise.all(promesas);
    if (respuestas[0] != null) {
      this.topCards = respuestas[0];
    }
    if (respuestas[1] != null) {
      this.secondCards = respuestas[1];
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
  }
}
