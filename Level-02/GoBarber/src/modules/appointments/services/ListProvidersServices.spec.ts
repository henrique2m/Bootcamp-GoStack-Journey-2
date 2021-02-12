import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersServices';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the providers', async () => {
    const userOne = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe1@exemple.com',
      password: '123456',
    });

    const userTwo = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'johndoe2@exemple.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'John Qua',
      email: 'johndoe3@exemple.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([userOne, userTwo]);
  });
});
