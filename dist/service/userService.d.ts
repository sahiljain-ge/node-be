export declare const getUser: (email: string) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
export declare const addUserProfile: (user: any) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
export declare const updateUser: (user: any) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
export declare const removeUser: (email: string, password: string) => Promise<{
    name: string | null;
    id: number;
    email: string;
    password: string;
    role: import("@prisma/client").$Enums.ROLE;
    createdAt: Date;
}>;
//# sourceMappingURL=userService.d.ts.map