"use strict";
const url = "http://127.0.0.1:5501/data/";
export const data = async function fetchData(endpoint) {
    try {
        const response = await fetch(url + endpoint + ".json");
        const resJson = await response.json();
        return resJson;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
