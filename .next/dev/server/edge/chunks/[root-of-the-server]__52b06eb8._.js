(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__52b06eb8._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/lib/api/api.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nextServer",
    ()=>nextServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [middleware-edge] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time truthy", 1) ? (("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000') + "/api" : "TURBOPACK unreachable";
const nextServer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: baseURL,
    withCredentials: true
});
}),
"[project]/lib/api/serverApi.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkServerSession",
    ()=>checkServerSession,
    "fetchServerNoteById",
    ()=>fetchServerNoteById,
    "fetchServerNotes",
    ()=>fetchServerNotes,
    "getServerMe",
    ()=>getServerMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
;
;
const getServerMe = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get("/users/me", {
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return data;
};
const checkServerSession = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get("/auth/session", {
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return response;
};
const fetchServerNotes = async (query, currentPage, tag)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get("/notes", {
        params: {
            search: query,
            page: currentPage,
            perPage: 10,
            tag: tag
        },
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return response.data;
};
const fetchServerNoteById = async (noteId)=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get(`/notes/${noteId}`, {
        headers: {
            Cookie: cookieStore.toString()
        }
    });
    return response.data;
};
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/serverApi.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [middleware-edge] (ecmascript)");
;
;
;
;
const privateRoutes = [
    "/profile",
    "/profile/:path*",
    "/notes",
    "/notes/:path*"
];
const publicRoutes = [
    "/sign-in",
    "/sign-up"
];
const middleware = async (request)=>{
    const { pathname } = request.nextUrl;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const isPrivateRoute = privateRoutes.some((route)=>pathname.startsWith(route));
    const isPublicRoute = publicRoutes.some((route)=>pathname.startsWith(route));
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;
    if (isPrivateRoute) {
        if (accessToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                headers: {
                    Cookie: cookieStore.toString()
                }
            });
        }
        if (refreshToken) {
            try {
                const apiRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkServerSession"])();
                const setCookie = apiRes.headers["set-cookie"];
                if (setCookie) {
                    const cookieArray = Array.isArray(setCookie) ? setCookie : [
                        setCookie
                    ];
                    for (const cookieStr of cookieArray){
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(cookieStr);
                        const options = {
                            expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                            path: parsed.Path,
                            maxAge: Number(parsed["Max-Age"])
                        };
                        if (parsed.accessToken) cookieStore.set("accessToken", parsed.accessToken, options);
                        if (parsed.refreshToken) cookieStore.set("refreshToken", parsed.refreshToken, options);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/sign-in", request.nextUrl.origin));
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/sign-in", request.nextUrl.origin));
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/sign-in", request.nextUrl.origin));
    }
    if (isPublicRoute) {
        if (accessToken) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.nextUrl.origin));
        }
        if (refreshToken) {
            try {
                const apiRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkServerSession"])();
                const setCookie = apiRes.headers["set-cookie"];
                if (setCookie) {
                    const cookieArray = Array.isArray(setCookie) ? setCookie : [
                        setCookie
                    ];
                    for (const cookieStr of cookieArray){
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(cookieStr);
                        const options = {
                            expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                            path: parsed.Path,
                            maxAge: Number(parsed["Max-Age"])
                        };
                        if (parsed.accessToken) cookieStore.set("accessToken", parsed.accessToken, options);
                        if (parsed.refreshToken) cookieStore.set("refreshToken", parsed.refreshToken, options);
                    }
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/", request.nextUrl.origin));
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/sign-in", request.nextUrl.origin));
            } catch  {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/sign-in", request.nextUrl.origin));
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
};
const config = {
    matcher: [
        "/profile/:path*",
        "/notes/:path*",
        "/sign-in",
        "/sign-up"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__52b06eb8._.js.map