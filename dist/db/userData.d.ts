import type { User } from "@prisma/client";
export declare const getUserData: (email: string) => Promise<User | null>;
export declare const addUser: (userData: User) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
export declare const editUserDetails: (userData: any) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
export declare const deleteUser: (email: string) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
//# sourceMappingURL=userData.d.ts.map