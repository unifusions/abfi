export default function CategoryIndex({categories}){
    return (
        <div>
            <pre>{JSON.stringify(categories, null, 2)}</pre>
            
        </div>
    )
}