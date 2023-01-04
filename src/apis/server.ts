import { instance } from 'apis';

export const server = {
    getUser: async () => {
        instance.get('/users');
    },
    getUserById: async (id: number) => instance.get(`/users/${id}`),
};
