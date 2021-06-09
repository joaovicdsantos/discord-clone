export function getCookie(cookieName: string, cookies: any): string {
  const cookieStruct = cookieName + '=';
  const decodeCookie = decodeURIComponent(cookies);
  console.log(cookies);
  const cookieValue = decodeCookie.substring(
    decodeCookie.indexOf(cookieStruct),
    decodeCookie.indexOf(';')
  );
  return cookieValue;
}
