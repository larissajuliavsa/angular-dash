export interface Product {
    id?: string,
    name: string,
    description: string,
    imageUrl?: string,
    price: string,
    stock: number
}

export interface Products extends Array<Product>{}