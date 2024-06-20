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
    .select('password, name')
    .eq('email', uName);

  if (error) {
    console.error('Login error:', error);
    redirect('/error');
  }
  if (data.length > 0) {
    bcrypt.compare(pw, data[0].password, (err, res) => {
      if (err) {
        console.error('Login error:', err);
      }
      if (res) {
        console.log('Login successful');
      } else {
        console.error('Login error:', 'Invalid password');
      }
    });
    console.log('logged in User: ', data[0].name);
    revalidatePath('/', 'layout');
    // onLoginClick();
  } else {
    // Credentials have not been found
  }
}

export async function signupUser(formData) {
  try {
    pw = await hashPassword(pw);

    // TODO Input validation

    const supaBaseClient = createClient();
    const { data, error } = await supaBaseClient
      .from('users')
      .insert(formData)
      .select();

    if (error) {
      console.error('Signup error:', error);
      redirect('/error');
    }

    revalidatePath('/', 'layout');
    onLoginClick();
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}
