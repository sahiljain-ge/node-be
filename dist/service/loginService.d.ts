export declare const login: (userData: any) => Promise<{
    user: {
        name: string | null;
        id: number;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.ROLE;
        createdAt: Date;
    };
    token: string;
}>;
//# sourceMappingURL=loginService.d.ts.map