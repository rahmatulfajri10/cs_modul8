const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async (req, res) => {
    try {

        const urls = await urlServices.getUrls();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByName = async (req, res) => {
    try {
        const { name } = req.params;
        const url = await urlServices.getUrlByName(name);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertUrl = async (req, res) => {
    try {

        const { url, name, description } = req.body;
        const result = await urlServices.insertUrl(url, name, description);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deleteUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const result = await urlServices.deleteUrl(url);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUrl = async (req, res) => {
    try {
        const { url, name, description } = req.body;
        const result = await urlServices.updateUrl(url, name, description);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const createMore = async(req, res) => {
    try {
        const url = await urlServices.createMore(JSON.stringify(req.body));

        if (url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getByEmailPhone = async(req, res) => {
    try {
        const { email, telepon } = req.body;
        const url = await urlServices.getByEmailPhone(email, telepon);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getUrls,
    getUrlByName,
    insertUrl,
    deleteUrl,
    updateUrl,
    createMore,
    getByEmailPhone
}