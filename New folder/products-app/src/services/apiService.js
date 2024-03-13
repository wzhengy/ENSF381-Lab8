import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

// Fetches a list of all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Fetches details for a single product by its ID
export const getProductDetails = async (id) => {
<<<<<<< HEAD
    // implement it using similar logic as fetchProducts function
=======
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
>>>>>>> ff339eadd42dbc2e4e439a7dd8e07a28f0695277
};

// Deletes a product by its ID
export const removeProduct = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error; // Rethrow to allow caller to handle
    }
};

// Adds a new product to the database
export const addProduct = (product) => {
    return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

// Edits an existing product by ID
export const editProduct = (id, product) => {
    // implement it using similar logic as addProduct function but use axios.put method
<<<<<<< HEAD
=======
    return axios.put(`${BASE_URL}/${id}`, JSON.stringify(product));
>>>>>>> ff339eadd42dbc2e4e439a7dd8e07a28f0695277
};