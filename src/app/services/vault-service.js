'use client';

import { deleteCredentialOfUserAction } from '../server/vault-actions';
import { getUser } from './user-service';

export async function deleteCredentialOfUser(id) {
  // check whether the current user is still signed in
  const user = getUser();
  if (!user || user.lodataggedIn === false) {
    return {
      success: false,
      msg: 'User not signed in',
    };
  }
  // if the user is signed in, delete the credential
  const res = await deleteCredentialOfUserAction(id);
  return res;
}
