import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
  'appointmentsRepository',
  AppointmentRepository,
);

container.registerSingleton<IUsersRepository>(
  'usersRepository',
  UserRepository,
);
