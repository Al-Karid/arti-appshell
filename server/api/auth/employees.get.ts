import { Employee } from "@/types/auth.type";

export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch<Employee[]>("/api/public/employees", {
      baseURL: useRuntimeConfig().appshellAuthBaseUrl,
    });

    if (!response) {
      throw createError({
        statusCode: 404,
        statusMessage: "Cannot fetch employees",
      });
    }

    const query = getQuery(event);
    if (query.username) {
      return response.filter((user) => user.username === query.username);
    }
    return response.sort((a, b) => a.username.localeCompare(b.username));
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: error instanceof Error ? error.message : "Cannot fetch employees",
    });
  }
});
