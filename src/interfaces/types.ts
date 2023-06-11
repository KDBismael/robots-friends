export interface T_card{
    id: number;
    name: string;
    email: string;
}

export interface T_card_list extends  T_card{
    username: string;
}