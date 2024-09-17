'use server';
import { createClient } from '../utils/server.js';

export async function createNewCredentials(formData, user) {
  const superBaseClient = createClient();
  const { data, error } = await superBaseClient
    .from('credentials')
    .insert({
      user_id: user,
      title: formData.title,
      password: formData.password, // PW in cleartext, in a real scenario this would be encrypted
      username: formData.username,
      site: formData.site,
    })
    .select();

  if (error) {
    console.error('Error creating new credentials:', error);
    return {
      success: false,
      msg: 'Error creating new credentials',
    };
  } else {
    console.log('New credentials created');
    return {
      success: true,
      msg: 'New credentials created successfully',
    };
  }
}

export async function getCredentialsByUserId(user_id) {
  const superBaseClient = createClient();
  const { data, error } = await superBaseClient
    .from('credentials')
    .select('*')
    .eq('user_id', user_id);
  if (error) {
    console.error('error fetching data from the database', error);
  }
  return data;
}

export async function deleteCredentialOfUserAction(id) {
  const superBaseClient = createClient();
  const { data, error } = await superBaseClient
    .from('credentials')
    .delete()
    .eq('id', id)
    .select();
  if (error) {
    console.error('error deleting data from the database', error);
    return {
      success: false,
      msg: 'Error deleting credential',
    };
  }
  return {
    success: true,
    msg: `Credential with title ${
      data.length > 0 && data[0].title
    } deleted successfully`,
  };
}

export async function editCredential(formData, credId) {
  const superBaseClient = createClient();
  const { data, error } = await superBaseClient
    .from('credentials')
    .update({
      title: formData.title,
      password: formData.password, // PW in cleartext, in a real scenario this would be encrypted
      username: formData.username,
      site: formData.site,
    })
    .eq('id', credId)
    .select();

  if (error) {
    console.error('Error updating credentials:', error);
    return {
      success: false,
      msg: 'Error updating credentials',
    };
  } else {
    console.log('Credentials updated');
    return {
      success: true,
      msg: 'Credentials updated successfully',
    };
  }
}