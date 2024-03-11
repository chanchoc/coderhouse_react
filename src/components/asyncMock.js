const products = [
    { id: 1, name: "Mochila Areco", price: 18000, category: "mochilas", img: "../src/assets/products/areco.webp", stock: 25, description: "La mejor mochila" },
    { id: 2, name: "Mochila Black", price: 17000, category: "mochilas", img: "../src/assets/products/black.webp", stock: 100, description: "La mejor mochila" },
    { id: 3, name: "Mochila Boedo", price: 19000, category: "mochilas", img: "../src/assets/products/boedo.webp", stock: 80, description: "La mejor mochila" },
    { id: 4, name: "Mochila Chacarita", price: 22000, category: "mochilas", img: "../src/assets/products/chacarita.webp", stock: 3, description: "La mejor mochila" },
    { id: 5, name: "Mochila Liniers", price: 21000, category: "mochilas", img: "../src/assets/products/liniers.webp", stock: 14, description: "La mejor mochila" },
    { id: 6, name: "Mochila Mendoza", price: 21500, category: "mochilas", img: "../src/assets/products/mendoza.webp", stock: 15, description: "La mejor mochila" },
    { id: 7, name: "Riñonera Obelisco", price: 16000, category: "riñoneras", img: "../src/assets/products/obelisco.webp", stock: 90, description: "La mejor riñonera" },
    { id: 8, name: "Riñonera Palermo", price: 13000, category: "riñoneras", img: "../src/assets/products/palermo.webp", stock: 87, description: "La mejor riñonera" },
    { id: 9, name: "Riñonera Pringles", price: 14500, category: "riñoneras", img: "../src/assets/products/pringles.webp", stock: 1, description: "La mejor riñonera" },
    { id: 10, name: "Riñonera Rosario", price: 15000, category: "riñoneras", img: "../src/assets/products/rosario.webp", stock: 60, description: "La mejor riñonera" },
    { id: 11, name: "Riñonera Santa Cruz", price: 11700, category: "riñoneras", img: "../src/assets/products/santa-cruz.webp", stock: 5, description: "La mejor riñonera" },
    { id: 12, name: "Riñonera Viedma", price: 16500, category: "riñoneras", img: "../src/assets/products/viedma.webp", stock: 22, description: "La mejor riñonera" },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === parseInt(productId)));
        }, 500);
    });
};

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === categoryId));
        }, 500);
    });
};
