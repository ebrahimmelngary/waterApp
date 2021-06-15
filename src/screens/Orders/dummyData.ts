import { OrderCardItem } from "../../component/molecules/OrderCard";
export type OrdersDataType= {
    currentOrders: Array<OrderCardItem>;
    previousOrders: Array<OrderCardItem>;
}
export const dummyOrdersData: OrdersDataType ={
    currentOrders:[
  
    {
        id:0,
        name: 'IBrahim Elngary',
        amount: 150,
        state: 'confirm Order',
        shipping: '2 days shipping'
    },
    {
        id:1,
        name: 'Mohamed Eisa',
        amount: 300,
        state: 'confirm Order',
        shipping: '2 days shipping',
    },
    {
        id:2,
        name: 'IBrahim Elngary',
        amount: 250,
        state: 'pinding Order',
        shipping: '2 days shipping',
    },
    {
        id:3,
        name: 'Mohamed Eisa',
        amount: 500,
        state: 'pinding Order',
        shipping: '2 days shipping',
    },],
    previousOrders :[
  
        {
            id:0,
            name: 'Mohamed gamal',
            amount: 500,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:1,
            name: 'Ebrahim Eisa',
            amount: 3000,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:2,
            name: 'Mohamed Ebrahim',
            amount: 2500,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:3,
            name: 'Mohamed Elngary',
            amount: 5000,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:4,
            name: 'Mohamed Elngary',
            amount: 5700,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:5,
            name: 'Mohamed Elngary',
            amount: 4000,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:6,
            name: 'Mohamed Elngary',
            amount: 1000,
            time: '2 Jun 2021 . 2:30',
        },
        {
            id:7,
            name: 'Mohamed Elngary',
            amount: 5000,
            time: '2 Jun 2021 . 2:30',
        },
    ],
}