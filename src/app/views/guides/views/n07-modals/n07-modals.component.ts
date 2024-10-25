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
  constructor(
    private modalSrv: ModalService,
    private translateSrv: TranslateService
  ) {
    super();
  }

  async openConfirm() {
    console.log(`The system open the pop up`);
    const popUpParameter = {
      translateFolder: 'test',
      title: 'popups.custom.title',
      txt: 'popups.custom.text',
      choices: [
        { txt: 'popups.choices.yes_word', val: 'si' },
        { txt: 'popups.choices.no_word', val: 'no' },
      ],
    };
    const modalResponse: any = await this.modalSrv.generic(popUpParameter);
    this.model.generic = modalResponse?.choice;
    console.log(`The user choose ${this.model.generic}`);
  }

  async openAlert() {
    const popUpParameter = {
      translateFolder: 'test',
      title: 'popups.alert.title',
      txt: 'popups.alert.text',
      choices: [
        { txt: 'popups.choices.ok', val: '1' },
      ],
    };
    await this.modalSrv.generic(popUpParameter);
  }
}
