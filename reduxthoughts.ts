interface reduxStore {
  view: {
    page: 'home' | 'shop' | 'about' | 'productDetail' | 'cart'
    currentCategory: string
    currentProductId: string
  }
  homePage: {
    featureImage: string
    productId: string
  }
  categories: [
    {
      id: string //pipes
      categoryImage: string //pipes.jpg
      categoryName: string //Shop Pipes
    }
  ]
  products: [
    {
      id: string
      images: [
        {
          order: number
          imageName: string
        }
      ]
      price: number
      name: string
      description: string
      quantityRemaining: number
    }
  ]
}
