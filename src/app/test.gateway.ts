import { SubscribeMessage, WebSocketGateway, MessageBody } from '@nestjs/websockets';
@WebSocketGateway()
export class EventsGateway {
  @SubscribeMessage('watch-location')
  public watchLocation(@MessageBody() data: string) {
    return {event: 'watch-position', data};
  }
}
