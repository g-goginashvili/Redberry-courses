const request = async (
    path: string, accessToken?: string, options?: RequestInit
) => {
    const requestSkeleton = async (token?: string) => {
        const isFormData = options?.body instanceof FormData;
        console.log("isFormData:", isFormData, "body:", options?.body);
        return await fetch(`https://api.redclass.redberryinternship.ge/api${path}`, {
            headers: {
                ...(!isFormData && { "Content-Type": "application/json" }),
                ...(token && { Authorization: `Bearer ${token}` }),
                ...options?.headers,
            },
            ...options,
        });
    };
    const response = await requestSkeleton(accessToken);
    const responseJson = await response.json();
    if (!response.ok) throw new Error(`Request failed: ${responseJson.error}`);
    return responseJson;
};

export const http = {
    get: (path: string, accessToken?: string, options?: RequestInit) =>
        request(path, accessToken, { ...options, method: "GET" }),
    post: (path: string, body: unknown, accessToken?: string, options?: RequestInit) => {
        const isFormData = body instanceof FormData;
        return request(path, accessToken, {
            ...options,
            method: "POST",
            body: isFormData ? (body as BodyInit) : JSON.stringify(body),
        });
    },
    put: (path: string, body: unknown, accessToken?: string, options?: RequestInit) => {
        const isFormData = body instanceof FormData;
        return request(path, accessToken, {
            ...options,
            method: "PUT",
            body: isFormData ? (body as BodyInit) : JSON.stringify(body),
        });
    },
    delete: (path: string, accessToken?: string, options?: RequestInit) =>
        request(path, accessToken, { ...options, method: "DELETE" }),
};