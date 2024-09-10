'use server';
import {createClient} from '../utils/server.js';

export async function createNewCredentials(title, password, username, site) {
  const superBaseClient = createClient();
  const { data, error } = await superBaseClient
    .from('credentials')
    .insert([{ title, password, username, site }]);
}
