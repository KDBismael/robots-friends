import CardList from "../components/card-list"
// import {robots} from './data/robot';
import SearchBox from "../components/search-box";
import { FormEvent, useState, useEffect} from "react";
import {T_card_list } from "../interfaces";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/erroBoundry";
import { useSelector, useDispatch } from 'react-redux';
import { search } from "../redux/features/searchRobotSlice";
import { RootState } from "../redux/store";
import { useGetUserQuery } from "../redux/services/fetchRobots";

const App=()=>{
    const searchField=useSelector((state:RootState)=>state.searchField.searchField)
    // const robot=useSelector((state:RootState)=>state.fetchRobot);
    const dispatch=useDispatch()
    const onSearchChange=(e:FormEvent<HTMLInputElement>)=> dispatch(search(e.currentTarget.value));
    const { data, isSuccess }=useGetUserQuery('');
    const filteredRobots=data?.filter((robot: { name: string; })=>robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return isSuccess?(
        <>
            <h1 className="text-center robot-text mb-5 mt-7">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </>
    ):<h1 className="mt-7 text-center robot-text">Loading...</h1>}
export default App;


// export class App extends Component<T_props,T_state>{
//     constructor(props:T_props){
//         super(props);
//         this.state={
//             robots:[],
//             searchField:''
//         }
//     }
//     componentDidMount(): void {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then((res)=>res.json())
        //     .then((users)=>this.setState({robots:users}))
//     }
//     onSearchChange=(e:FormEvent<HTMLInputElement>)=> {
//         this.setState({searchField:e.currentTarget.value})
//     }
//     render(): ReactNode {
//         const {robots,searchField}=this.state
//         const filteredRobots=robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()))
        // return robots.length?(
        //     <>
        //         <h1 className="text-center robot-text mb-5 mt-7">RoboFriends</h1>
        //         <SearchBox searchChange={this.onSearchChange} />
        //         <Scroll>
        //             <ErrorBoundry>
        //                 <CardList robots={filteredRobots}/>
        //             </ErrorBoundry>
        //         </Scroll>
        //     </>
        // ):<h1 className="mt-7">Loading...</h1>
//     }
// }