const api =
    process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4000';

export { api };
