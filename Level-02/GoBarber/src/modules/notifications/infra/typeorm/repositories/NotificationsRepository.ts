import { getMongoRepository, MongoRepository } from 'typeorm';

import INotificationRepository from '@modules/notifications/repositories/INotificationsRepository';
import Notification from '../schemas/Notification';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotification';

class NotificationsRepository implements INotificationRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongo');
  }

  public async create({
    content,
    recipient_id,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      content,
      recipient_id,
    });

    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
