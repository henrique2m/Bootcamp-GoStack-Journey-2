interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  // techs: string[];
  techs: Array<string | TechObject>;
}

export default function createUser ({ name, email, password} : CreateUserData){
  const User ={
    name,
    email,
    password
  }

  return User;
}