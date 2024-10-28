
export function cookieParser(req, _res, next) {
    if (typeof req.headers.cookie === 'string') {
        const cookiesStrings = req.headers.cookie
            .split(';')
            .map(s => s.trim().split('=').map(d => d.trim()));
    
        req.cookie = Object.fromEntries(cookiesStrings);
        next();        
    }
}