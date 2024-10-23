import { Component } from '@angular/core';
import { MenuItemClass } from '../../models/menu';
import { ModalService, TranslateService } from 'ejflab-front-lib';

@Component({
  selector: 'app-n07-modals',
  templateUrl: './n07-modals.component.html',
  styleUrls: ['./n07-modals.component.css', '../../guides.component.css'],
})
export class N07ModalsComponent extends MenuItemClass {
  model: any = {
    confirm: null,
    generic: null,
  };
  constructor(private modalSrv: ModalService, private translateSrv: TranslateService) {
    super();
  }

  openAlert() {
    this.modalSrv.alert({ title: 'Title', txt: 'This is my content' });
  }

  async openConfirm() {
    console.log(`The system open the pop up`);
    this.model.confirm = await this.modalSrv.confirm({
      txt: 'Sure?',
      title: 'Confirm title',
    });
    console.log(`The user choose ${this.model.confirm}`);
  }

  async openCustom() {
    console.log(`The system open the pop up`);

    const yesTranslated = await this.translateSrv.translate('popups.custom.yes_word', ['test']);
    const popupTitle = await this.translateSrv.translate('popups.custom.title', ['test']);

    const modalResponse: any = await this.modalSrv.generic({
      title: 'popups.custom.title',
      txt: 'Your description',
      choices: [
        { txt: yesTranslated, val: '1' },
        { txt: 'No', val: '2' },
      ],
    });
    this.model.generic = modalResponse?.choice;
    console.log(`The user choose ${this.model.generic}`);
  }
}
