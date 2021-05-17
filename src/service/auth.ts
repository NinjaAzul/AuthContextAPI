interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function SignIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sdadaeqweqweqwqejqwj234243223331',
        user: {
          name: 'Ericl',
          email: 'erickdefg@gmail.com',
        },
      });
    }, 2000);
  });
}
