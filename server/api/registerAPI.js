import { IsValid } from '../lib/IsValid.js';
import {connection} from '../db.js';

export async function registerPostAPI(req, res) {
    const requiredFields = [
        {
            field: 'email',
            validation: IsValid.email,
        },
        {
            field: 'password',
            validation: IsValid.password,
        },
    ];

    if (Object.keys(req.body).length !== requiredFields.length) {
        return res.json({
            status: 'error',
            msg: 'Registracijai reikalingi tik email ir password',
        });
    }

    for (const { field, validation } of requiredFields) {
        const value = req.body[field];
        const [isErr, errMessage] = validation(value);

        if (isErr) {
            return res.json({
                status: 'error',
                msg: errMessage,
            });
        }
    }

    const sql = 'SELECT * FROM users;';
    const selectResult = await connection.execute(sql);

    console.log(selectResult[0]);
    

    return res.json({
        status: 'success',
        msg: 'Ok',
    });
}
