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

  if (error) {
    console.error('Login error:', error);
    redirect('/error');
  }
  if (data.length > 0) {
    const matchedPW = await bcrypt.compare(pw, data[0].password);
    if (!matchedPW) {
      console.error('Login error:', 'Invalid password or username');
        return {
          success: false,
          msg: 'Invalid password or username'
        };
      }
    }
    console.log('logged in User: ', data[0]);
    revalidatePath('/', 'layout');

    return {
      username: data[0].name,
      msg: `Welcome ${data[0].name}!`,
      userId: data[0].id,
      success: true,
    };
    // onLoginClick();
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

/*
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, surname, email, password } = req.body;

    if (!name || !surname || !email || !password) {
      return res.status(400).json({ success: false, msg: 'Please fill in all fields' });
    }

    try {
      let supaBaseClient = createClient();
      // Check if user already exists
      const { data: existingUser, error: userError } = await supaBaseClient
          .from('users')
          .select('id')
          .eq('email', email)
          .single();

      if (existingUser) {
        return res.status(400).json({ success: false, msg: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const { data, error } = await supaBaseClient
          .from('users')
          .insert([{ name, surname, email, password: hashedPassword }]);

      if (error) {
           return res.status(400).json({ success: false, msg: 'Error while creating account' });
      }

        return res.status(200).json({ success: true, msg: `Welcome ${data[0].name}! Please sign in!` });
    } catch (error) {
      return res.status(500).json({ success: false, msg: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
 */
