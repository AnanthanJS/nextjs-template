import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from '@/config/routes';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Get token from cookies
    const token = request.cookies.get('access_token')?.value;
    const isAuthenticated = !!token;

    // Check if route requires authentication
    const route = routes.find((r: any) => r.path === pathname);

    if (route?.protected && !isAuthenticated) {
        const loginUrl = new URL('/auth/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    if (route?.roles && isAuthenticated) {
        const userRole = 'user';
        if (!route.roles.includes(userRole)) {
            return NextResponse.redirect(new URL('/403', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};