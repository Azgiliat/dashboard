import { CreateWithEmailCredentials, LoginCredentials } from '@/dto/auth';
import { login, logout, registerNewUserWithEmail } from '@/firebase/auth';
import { baseRequest } from '@/http/base';

export function loginRequest(credentials: LoginCredentials) {
  return baseRequest(() => login(credentials));
}

export function logoutRequest() {
  return baseRequest(logout);
}

export function registerWithEmailRequest(
  credentials: CreateWithEmailCredentials,
) {
  return baseRequest(() => registerNewUserWithEmail(credentials));
}
