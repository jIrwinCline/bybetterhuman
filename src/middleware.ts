import { NextRequest, NextResponse } from "next/server";

const VENTURE_SUBDOMAINS: Record<string, string> = {
  rezonance: "/ventures-sites/rezonance",
  marketing: "/ventures-sites/better-marketing",
};

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0]; // strip port for local dev
  const rootDomain = process.env.ROOT_DOMAIN || "bybetterhuman.com";

  // Skip if it's the root domain, www, or localhost
  if (
    hostname === rootDomain ||
    hostname === `www.${rootDomain}` ||
    hostname === "localhost"
  ) {
    return NextResponse.next();
  }

  // Extract subdomain
  const subdomain = hostname.replace(`.${rootDomain}`, "");
  const ventureBasePath = VENTURE_SUBDOMAINS[subdomain];

  if (ventureBasePath) {
    const url = request.nextUrl.clone();
    url.pathname = `${ventureBasePath}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
