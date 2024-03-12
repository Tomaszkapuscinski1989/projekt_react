import {
  useLoaderData,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { user } from './movies';

export function LoginLoader({ request }) {
  const msg = new URL(request.url).searchParams.get('log');
  if (msg === 'no') {
    return 'Zaloguj się aby uzyskać dostęp';
  }

  return null;
}

export async function action({ request }) {
  const formData = await request.formData();

  const email = formData.get('email');
  const password = formData.get('password');
  const pat = new URL(request.url).searchParams.get('re') || '/';

  if (user.pas === password && user.mail === email) {
    localStorage.setItem('loggedin', true);

    return redirect(pat);
  }

  return 'Błędne dane logowania';
}

const Login = () => {
  const meg = useLoaderData();
  const actionMsg = useActionData();
  const nav = useNavigation();

  return (
    <main className='login'>
      <h2>Logowanie do serwisu</h2>
      {meg && <h3>{meg}</h3>}
      {actionMsg && <h3>{actionMsg}</h3>}
      <Form method='post' replace>
        <input type='email' name='email' placeholder='Adres email' />

        <input type='password' name='password' placeholder='Hasło' />

        {nav.state === 'idle' ? (
          <button className='button'>Zaloguj</button>
        ) : (
          <button className='button' disabled>
            Logowanie ...
          </button>
        )}
      </Form>
    </main>
  );
};
export default Login;
