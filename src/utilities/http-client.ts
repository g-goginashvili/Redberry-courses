const request = async (
    path: string, accessToken?: string, options?: RequestInit
) => {
    const isFormData = options?.body instanceof FormData;

    const response = await fetch(`https://api.redclass.redberryinternship.ge/api${path}`, {
        headers: {
            ...(!isFormData && { "Content-Type": "application/json" }),
            ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
            ...options?.headers,
        },
        ...options,
    });;
    const responseJson = await response.json();

    if (!response.ok) throw new Error(`Request failed: ${responseJson.error}`);
    return responseJson;
};

export const http = {
    get: (path: string, accessToken?: string, options?: RequestInit) =>
        request(path, accessToken, { ...options, method: "GET" }),
    post: (path: string, body: unknown, accessToken?: string, options?: RequestInit) =>
        request(path, accessToken,
            {
                ...options,
                method: "POST",
                body: body instanceof FormData ? body : JSON.stringify(body)
            }
        ),
    put: (path: string, body: unknown, accessToken?: string, options?: RequestInit) =>
        request(path, accessToken,
            {
                ...options,
                method: "PUT",
                body: body instanceof FormData ? body : JSON.stringify(body)
            }
        ),
    delete: (path: string, accessToken?: string, options?: RequestInit) =>
        request(path, accessToken, { ...options, method: "DELETE" }),
};