export function setCookieWithExpireDay(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
  
export function setCookieWithExpireHour(cname, cvalue, exhour) {
    const d = new Date();
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
  
export function setCookieWithExpireSecond(cname, cvalue, exsecs) {
    const d = new Date();
    d.setTime(d.getTime() + (exsecs * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = encodeURIComponent(cname) + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
  
export function deleteCookie(cname) {
    document.cookie = encodeURIComponent(cname) + "= ; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
  
export function getCookie(cname) {
    let name = encodeURIComponent(cname) + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}