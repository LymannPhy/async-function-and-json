"use strict";
import { cardProducds } from "../components/productCard.js";
import { cardUsers } from "../components/userCard.js";
import { data } from "../store/fetchApi.js";
// query for different section
const productQuery = document.querySelector("#products");
const userQery = document.querySelector("#containerUsers");
// fetch api from different end-point
const dataPro = await data("product");
const dataUser = await data("user");
// loop products json
dataPro.map((product) => {
    productQuery.innerHTML += cardProducds(product);
});
// loop users json
dataUser.map((user) => {
    userQery.innerHTML += cardUsers(user);
});
