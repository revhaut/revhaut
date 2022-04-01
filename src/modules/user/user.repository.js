const db = require('../../database');
class UserRepository {
    async create(data) {
        const returnData = ['*'];
       const result = await db('users').insert(data).returning(returnData);
       return result[0];
    }
    async findFirst(requestdData) {
         return await db('users').first(['*']).where(requestdData);
    }
    async findUnique(requestdData) {
        return await db('users').first(['*']).where(requestdData);
    }
}

module.exports = new UserRepository();