export function authorizedAccessOnly(req, res, next) {
    console.log(req.user);
    
    if (!req.user.isLoggedIn) {
        return res.json({
            status: 'error',
            msg: 'API pasiekiamas tik prisijungusiems vartotojams',
            isLoggedIn: false,
            role: 'public',
        });
    }

    next();
}