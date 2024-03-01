const bcrypt = require('bcryptjs');

const saltRounds = 10;

module.exports = hashPassword = async (password)=> {
    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt);
    return await bcrypt.hash(password, salt);
};

module.exports = comparePassword = async (plain, hashed)=>{
    await bcrypt.compare(plain, hashed);
};
