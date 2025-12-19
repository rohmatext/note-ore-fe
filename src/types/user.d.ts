import type { Role } from './role';

export type User = {
    id: number;
    name: string;
    username: string;
    role: Role;
};
