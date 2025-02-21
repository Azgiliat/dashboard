import type { CreateWithEmailCredentials, LoginCredentials } from '@/dto/auth';
import { login, logout, registerNewUserWithEmail } from '@/firebase/auth';
import { initiateNewUser } from '@/firebase/backend-actions/initiateNewUser';
import { baseRequest } from '@/http/base';

export function loginRequest(credentials: LoginCredentials) {
  return baseRequest(() => login(credentials));
}

export function logoutRequest() {
  return baseRequest(logout);
}

export async function registerWithEmail(
  credentials: CreateWithEmailCredentials,
) {
  const registeredUser = await baseRequest(() =>
    registerNewUserWithEmail(credentials),
  );
  await baseRequest(() => initiateNewUser(registeredUser.user.uid));

  return registeredUser;
}
