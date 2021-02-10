import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FackHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;
let createUser: CreateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('Should be able to authenticate', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: '12345678',
    });

    const response = await authenticateUser.execute({
      email: 'teste@teste.com',
      password: '12345678',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('Should not be able to authenticate with no existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'teste@teste.com',
        password: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to authenticate with wrong password', async () => {
    createUser.execute({
      name: 'John Doe',
      email: 'teste@teste.com',
      password: '12345678',
    });

    await expect(
      authenticateUser.execute({
        email: 'teste@teste.com',
        password: '12345',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
