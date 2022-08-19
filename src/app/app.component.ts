import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  pass: string = '';
  lengthPass: number = 0;
  validChar: string = '';
  passGenerated: string = '';

  onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(e: any) {
    const parseVal = parseInt(e.target.value);
    if (!isNaN(parseVal)) {
      this.lengthPass = parseVal;
    }
  }

  onBtnClicked(): void {
    const validLetters = 'abcdefghijklmnopqrstuvwxyz';
    const validNumbers = '1234567890';
    const validSymbols = '!@#$%^&*()_+';
    if (this.includeLetters) {
      this.validChar += validLetters;
    }
    if (this.includeNumbers) {
      this.validChar += validNumbers;
    }
    if (this.includeSymbols) {
      this.validChar += validSymbols;
    }

    for (let i = 0; i < this.lengthPass; i++) {
      const index = Math.floor(Math.random() * this.validChar.length)
      this.passGenerated += this.validChar[index];
    }

    this.pass = this.passGenerated;
  }
}
