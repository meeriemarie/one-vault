'use server';

import { createClient } from '../utils/server';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';

export async function loginUser(uName, pw) {
  // TODO Input validation
  const superBaseClient = createClient();
  const { data, error } = await superBaseClient
    .from('users')
    .select('id, password, name')
    .eq('email', uName);

  console.log(data);
  console.log(error);
  if (error) {
    console.error('Login error:', error);
    redirect('/error');
  }
  if (data.length > 0) {
    bcrypt.compare(pw, data[0].password, (err, res) => {
      if (err) {
        console.error('Login error:', err);
        return {
          success: false,
        };
      }
      if (res) {
        console.log('Login successful');
      } else {
        console.error('Login error:', 'Invalid password');
        return {
          success: false,
        };
      }
    });
    console.log('logged in User: ', data[0]);
    revalidatePath('/', 'layout');

    return {
      username: data[0].name,
      userId: data[0].id,
      success: true,
    };
    // onLoginClick();
  } else {
    // Credentials have not been found
  }
}

export async function signupUser(formData) {
  try {
    const pw = await hashPassword(formData.password);
    formData.password = pw;
    // TODO Input validation

    const supaBaseClient = createClient();
    const { data, error } = await supaBaseClient
      .from('users')
      .insert(formData)
      .select();

    if (error) {
      console.error('Signup error:', error);
      let msg = error.message;
      if (error.code === '23505') {
        msg = 'Email already in use';
      }
      return { success: false, msg: msg };
    }

    // revalidatePath('/', 'layout');
    return { success: true, msg: `Welcome ${data[0].name}! Please sign in!` };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { success: false, msg: 'Error while creating account' };
  }
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}
