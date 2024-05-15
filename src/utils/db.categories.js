const Categories={

    wishlist_logo:"heart-outline",
    share_logo:"share-social-outline",
    cart_logo:"cart-outline",
    
    "Fruits":{

        lemon:{
            name:"Lemon",
            weight:"1kg",
            isavailable:"In stock",
            price:"INR 220.00",
            img:"src\\images\\lemon.png",
            sub_categories:{},

        },

        apple:{
            name:"Apple",
            weight:"1kg",
            isavailable:"In stock",
            price:"INR 250.00",
            img:"src\\images\\apple.png",
            
            sub_categories:{},
        },

        mango:{
            name:"Mango",
            weight:"1kg",
            isavailable:"In stock",
            price:"INR 180.00",
            img:"src\\images\\mango.png",

            sub_categories:{},
        },

        orange:{
            name:"Orange",
            weight:"1kg",
            isavailable:"In stock",
            price:"INR 80.00",
            img:"src\\images\\orange.png",

            sub_categories:{},
        },

    },

    "Vegetables":{

        carrot:{
            name:"Carrot",
            weight:"1kg",
            isavailable:"In stock",
            price:"INR 80.00",
            img:"src\\images\\carrot.png",

            sub_categories:{},
        },

        tomato:{  
            name:"Tomato",
            weight:"1kg",
            isavailable:"In stock",
            price:"INR 80.00",
            img:"src\\images\\tomato.png",

            sub_categories:{},
        },
    },

    "detergents":{

        harpic:{
            brand:"Harpic",
            sub_categories:{

                harpic_active_fresh:{
                    name:"Harpic PowerPlus Toilet Cleaner Active Fresh",
                    weight:"1 Liter",
                    price:"INR 120.00",
                    isavailable:"In stock",
                    img:"src\\images\\harpic_fresh.png",

                },

                harpic_original:{
                    name:"Harpic PowerPlus Toilet Cleaner Original",
                    weight:"1 Liter",
                    price:"INR 90.00",
                    isavailable:"In stock",
                    img:"src\\images\\harpic_original.png",
                },
            }
        },
    },

}

export default Categories;
