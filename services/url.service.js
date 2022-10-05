const { databaseQuery } = require('../database');

const getUrls = async () => {
    try {
        const query = `SELECT * FROM pratikan_webdev`;
        // Return from SELECT query is an array of objects
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUrlByName = async (name) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM pratikan_webdev WHERE nama='${name}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM pratikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const getUrlByEmail = async (email, no_telp) => {
    try {
        // This is not safe, but it's just an example
        const query = `SELECT * FROM pratikan_webdev WHERE email='${email}' AND no_telp='${no_telp}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `SELECT * FROM pratikan_webdev WHERE name=$1`;
        // const result = await databaseQuery(query, [name]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertUrl = async (nama, jenis_kelamin, angkatan, email, no_telp, deskripsi) => {
    try {
        // This is not safe, but it's just an example
        const query = `INSERT INTO pratikan_webdev (nama, jenis_kelamin, angkatan, email, no_telp, deskripsi) VALUES ('${nama}', '${jenis_kelamin}', ${angkatan}, '${email}','${no_telp}','${deskripsi}')`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `INSERT INTO pratikan_webdev (url, name, description) VALUES ($1, $2, $3)`;
        // const result = await databaseQuery(query, [url, name, description]);

        if (!result) {
            throw new Error('Error inserting email');
        }
        return {
            message: 'email inserted successfully',
        }; 
    } catch (error) {
        return error 
    }
}

const deleteUrl = async (email) => {
    try {
        // This is not safe, but it's just an example
        const query = `DELETE FROM pratikan_webdev WHERE email='${email}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `DELETE FROM pratikan_webdev WHERE url=$1`;
        // const result = await databaseQuery(query, [url]);

        if (!result) {
            throw new Error('Error deleting email');
        }
        if (result.rowCount === 0) {
            throw new Error('email not found');
        }
        return {
            message: 'email deleted successfully',
        }; 
    } catch (error) {
        return error
    }
}

const updateUrl = async (nama, email, jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE pratikan_webdev SET nama='${nama}', jenis_kelamin='${jenis_kelamin}' WHERE email='${email}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE pratikan_webdev SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}

const updateName = async (nama, email, jenis_kelamin) => {
    try {
        // This is not safe, but it's just an example
        const query = `UPDATE pratikan_webdev SET email='${email}', jenis_kelamin='${jenis_kelamin}' WHERE nama='${nama}'`;
        const result = await databaseQuery(query);

        // This is safer. It uses a parameterized query
        // const query = `UPDATE pratikan_webdev SET name=$1, description=$2 WHERE url=$3`;
        // const result = await databaseQuery(query, [name, description, url]);
        if (!result) {
            throw new Error('Error deleting URL');
        }
        if (result.rowCount === 0) {
            throw new Error('URL not found');
        }
        return {
            message: 'URL updated successfully',
        };
    } catch (error) {
        return error
    }
}

const createMore = async(shet) => {
    try {
        let doom = []
        JSON.parse(shet, (a, b) => { doom.push(b) })
        for (let a = 0; a < (doom.length - 1) / 7; a++) {
            const query = `insert into akhtar_webdev values ('${doom[a*7]}','${doom[(a*7)+1]}','${doom[(a*7)+2]}','${doom[(a*7)+3]}','${doom[(a*7)+4]}','${doom[(a*7)+5]}')`;
            const result = await databaseQuery(query);
            if (!result) {
                throw new Error('Error updating URL');
            }
            if (result.rowCount === 0) {
                throw new Error('URL not found');
            }
        }
        return {
            message: 'URL updated successfully',
        };

    } catch (error) {
        return error
    }
}

module.exports =  {
    getUrls,
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl,
    updateName,
    createMore
}