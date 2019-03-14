import * as clc from 'cli-color';
import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ICommand, EventObservable } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class UsersSagas {
  userCreated = (events$: EventObservable<any>): Observable<ICommand> => {
    return events$
      .ofType(UserCreatedEvent)
      .pipe(
        delay(1000), // random delay
        map(event => {
          Logger.log('Inside [UsersSagas] Saga', 'UsersSagas');
          // TODO, you would probably trigger a new command here to continue the saga of user creation
          // TODO, remember this is only an example, you may not even need sagas
          return '';
        }),
      );
  }
}
