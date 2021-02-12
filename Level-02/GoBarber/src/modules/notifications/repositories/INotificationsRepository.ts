import ICreateNotificationDTO from '../dtos/ICreateNotification';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
