import type { UserPermissions } from "@/types/auth.type";

export default defineEventHandler(async (event) => {
  const loginEvent = await readBody(event);

  const config = useRuntimeConfig();

  const loginData = {
    username: loginEvent.username,
    password: loginEvent.password,
    application: "missions",
  };

  try {
    const response = await $fetch<UserPermissions>(config.appshellAuthUrl as string, {
      baseURL: config.appshellAuthBaseUrl as string,
      method: "POST",
      body: loginData,
    });

    if (!response) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid credentials",
      });
    }

    return response;
  } catch (error) {
    // Optional: log error or format it
    throw createError({
      statusCode: 401,
      statusMessage: error instanceof Error ? error.message : "Login failed",
    });
  }
});
