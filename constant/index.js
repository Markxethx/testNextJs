import { one, two, three, four, five } from "../public"


export const discount = [
    //since there is only one available in the discount
{
    id: "loungeAndBar",
    subHeader: "Hotel room in Tokyo, Japan",
    title: "The Lounge & Bar",
    img: "https://images.pexels.com/photos/1267265/pexels-photo-1267265.jpeg?auto=compress&cs=tinysrgb&w=1600",
    views: "", //this can manipulate in the api
    price: "", //can be change depends on the user country
    rules: [
        {
        id: "ruleOne",
        icon: "guest",
        content: "6 guest"
        },
        {
            id: "ruleTwo",
            icon: "cart",
            content: "3 baths"
        },
        {
            id: "ruleThree",
            icon: "bedrooms",
            content: "3 bedrooms"
        },
        {
            id: "ruleFour",
            icon: "bed",
            content: "3 beds"
        },
        {
            id: "ruleFive",
            icon: "smoke",
            content: "no smoking"
        },
        {
            id: "ruleSix",
            icon: "wifi",
            content: "6 guest"
        },
    ]
}

//if there are more discount to be offer
]

export const orderDetails = [
    {
        id: "The lounge, Bar & Hotel near the Beach",
        img: "https://images.pexels.com/photos/1230397/pexels-photo-1230397.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "The lounge, Bar & Hotel near the Beach",
        subTitle: "Hotel room in Tokyo, Japan",
        date: "24.06.2023",
        status: "active",
        view: {
            contentHere: "Nothing to see here in yet, we are working on it!"
        }
    },
    {
        id: "The lounge & Bar One",
        img: "https://images.pexels.com/photos/4667030/pexels-photo-4667030.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        title: "The lounge & Bar",
        subTitle: "Hotel room in Tokyo, Japan",
        date: "24.06.2023",
        status: "completed",
        view: {
            contentHere: "Nothing to see here in yet, we are working on it!"
        }
    },
    {
        id: "The lounge, Bar & Hotel near the Beach",
        img: "https://images.pexels.com/photos/2387566/pexels-photo-2387566.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "The lounge, Bar & Hotel near the Beach",
        subTitle: "Hotel room in Tokyo, Japan",
        date: "24.06.2023",
        status: "completed",
        view: {
            contentHere: "Nothing to see here in yet, we are working on it!"
        }
    },
    {
        id: "The lounge & Bar",
        img: "https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "The lounge & Bar",
        subTitle: "Hotel room in Tokyo, Japan",
        date: "24.06.2023",
        status: "completed",
        view: {
            contentHere: "Nothing to see here in yet, we are working on it!"
        }
    },

    {
        id: "The Lounge",
        img: "https://images.pexels.com/photos/7265994/pexels-photo-7265994.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "The lounge",
        subTitle: "Hotel room in Tokyo, Japan",
        date: "24.06.2023",
        status: "completed",
        view: {
            contentHere: "Nothing to see here in yet, we are working on it!"
        }
    },

    {
        id: "The Lounge, Bar & Hotel near the beach Res...",
        img: "https://images.pexels.com/photos/1837755/pexels-photo-1837755.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "The Lounge, Bar & Hotel near the beach Res...",
        subTitle: "Hotel room in Tokyo, Japan",
        date: "24.06.2023",
        status: "cancelled",
        view: {
            contentHere: "Nothing to see here in yet, we are working on it!"
        }
    },
]