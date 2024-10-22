import { connection } from '../db.js';
import { IsValid } from '../lib/IsValid.js';

export async function registerPostAPI(req, res) {
    const requiredFields = [
        { field: 'email', validation: IsValid.email },
        { field: 'password', validation: IsValid.password },
    ];

    const [isErr, errMessage] = IsValid.requiredFields(req.body, requiredFields);
    if (isErr) {
        return res.json({
            status: 'error',
            msg: errMessage,
        });
    }

    const {email, password} = req.body;

    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const selectResult = await connection.execute(sql, [email]);
        console.log(selectResult[0]);
        
        if (selectResult[0].lenght > 0) {    
            return res.json({
                status: 'error',
                msg: 'Toks Email jau yra panaudotas',
            });
        }
        
    } catch (error) {
        return res.json({
            status: 'error',
            msg: 'Server error',
        });       
    }

    return res.json({
        status: 'success',
        msg: 'Ok',
    });
}