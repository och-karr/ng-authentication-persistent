import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent {
  readonly userData$ = this._authService.getLoggedUser().subscribe();

  constructor(private _authService: AuthService) {
  }
}
