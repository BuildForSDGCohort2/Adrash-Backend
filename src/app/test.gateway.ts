import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage('watch-location')
  public watchLocation(@MessageBody() data: string) {
    return {event: 'watch-position', data};
  }
}
