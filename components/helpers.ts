export const isValidEmail = (email = "") => {
  return (
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) !== null
  );
};

export const getAuthHeader = (
  response: Response,
  authHeaderType: "authorization" | "refresh-token" = "authorization"
) => {
  const headerEntries = new Map(response.headers.entries());

  let auth = "";

  headerEntries.forEach((value, key) => {
    if (key === authHeaderType) {
      auth = value;
    }
  });

  return auth;
};

export function baseName(str: string) {
  let base = new String(str).substring(str.lastIndexOf("/") + 1);
  if (base.lastIndexOf(".") != -1)
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}
