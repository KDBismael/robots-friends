import {FC} from "react";
import Card from './card';
import {T_card_list } from '../interfaces';


interface props{
    robots:T_card_list[]
}

const CardList:FC<props> =({robots})=>(
    <div className='flex flex-wrap justify-center'>
        {robots.map(robot=>(
            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>
        ))}
    </div>
)

export default CardList;