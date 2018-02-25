export const ERROR = {
  code400: {
    code: 400,
    title: 'Invalid Query Parameter',
    detail: 'The resource does not have an `auther` relationship path.'
  },
  code401: {
    code: 401,
    title: 'Unauthorized',
    detail: 'Your authentication is invalid. Need to login the system.'
  },
  code403: {
    code: 403,
    title: 'Forbidden',
    detail: 'You do not have necessary permissions to perform this action.'
  },
  code500: {
    code: 500,
    title: 'Internal Server Error',
    detail: 'An internal error in backend server happened.'
  },

};
