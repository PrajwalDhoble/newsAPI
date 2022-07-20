const express = require("express");
const axios = require("axios")


const fetchArticle = express.Router();

fetchArticle.get("/get-data", async (request, response) => {
    try {
        const result = await axios.get('https://gnews.io/api/v4/top-headlines?token=11505ba06fdaa35f37b40912701e3966');
        if (result.data.totalArticles) {
            response.status(200).json({
                status: "SUCCESS",
                message: 'Articles available fetched successfully',
                result: result.data
            });
            return;
        } else {
            response.status(200).json({
                status: "FAILED",
                message: 'Articles not available fetched unsuccessfull',
            });
            return;
        }

    } catch (error) {
        response.status(500).json({
            status: "FAILED",
            message: error.message,
        });
        console.log(error);
        return;
    }

});

module.exports = fetchArticle;