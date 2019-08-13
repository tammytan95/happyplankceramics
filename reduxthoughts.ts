interface reduxStore {
  view: {
    page: 'home' | 'shop' | 'about' | 'productDetail' | 'cart'
    currentCategory: string //REFERS TO MENU BAR OPTIONS
    currentProductId: string
  }
  homePage: {
    featureImage: string
    productId: string
  }
  categories: [
    //REFERS TO CATEGORY PICS IN HOME PAGE
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
