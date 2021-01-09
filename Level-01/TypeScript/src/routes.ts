import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    email: 'henrique@gmail.com',
    password: "0000000",
    techs: [
      'Nodo.js',
      'ReactJS',
      'React Native',
      {title: 'Javascript', experience: 100}
    ]
  })
  
  return response.json({message: 'Hello World'})
}