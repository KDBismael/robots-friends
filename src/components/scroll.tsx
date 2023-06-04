
interface props{
    // children:React.ReactNode;
    children:React.JSX.Element;
}

const Scroll=({children}:props)=>(
    <div className="overflow-y-scroll border-4 border-black border-solid h-[800px]">
        {children}
    </div>
)

export default Scroll;