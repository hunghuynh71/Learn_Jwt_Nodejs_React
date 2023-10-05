import connectionDB from "../configs/connectionDB";
import bcrypt from 'bcryptjs';

let salt = bcrypt.genSaltSync(10);

const hashPassword = (pass) => {
    let hashPass = bcrypt.hashSync(pass, salt);

    return hashPass;
}

const createUser = (email, password, username) => {
    let hashPass = hashPassword(password);
    connectionDB.query(
        'insert into users (email, password, username) values (?,?,?)',
        [email, hashPass, username],
        function (err, results) {
            if (err === null) {
                console.log(">>> Them thanh cong");
            }
            else {
                console.log(err);
                console.log(results);
            }
        }
    );
}

module.exports = {
    createUser
}