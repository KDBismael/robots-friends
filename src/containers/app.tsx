import CardList from "../components/card-list"
// import {robots} from './data/robot';
import SearchBox from "../components/search-box";
import { FormEvent, useState, useEffect} from "react";
import {T_card_list } from "../interfaces";
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/erroBoundry";

const App=()=>{
    const [robots,setRobots]=useState<T_card_list[]>([]);
    const [searchField,setSearchField]=useState<string>('');
    const onSearchChange=(e:FormEvent<HTMLInputElement>)=> setSearchField(e.currentTarget.value);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then((users)=>setRobots(users));
    },[])

    const filteredRobots=robots.filter(robot=>robot.name.toLowerCase().includes(searchField.toLowerCase()));
    return robots.length?(
        <>
            <h1 className="text-center robot-text mb-5 mt-7">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </>
    ):<h1 className="mt-7">Loading...</h1>}
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