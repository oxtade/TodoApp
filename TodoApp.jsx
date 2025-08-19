const products = [
    { id: 1 , title: "Yumurta", quantity: 4, completed: true},
    { id: 2 , title: "Zeytin", quantity: 3, completed: true},
    { id: 3 , title: "Peynir", quantity: 1, completed: true},
    { id: 4 , title: "Domates", quantity: 2, completed: true},
    { id: 5 , title: "Salatalık", quantity: 1, completed: true},

    
];

export default function TodoApp ()
{
    return(
        <div className="container">
            <Header />
            <Form/>
            <List/>
            <Summary/>
        </div>     
    )   
}

function Header ()
{
    return <h1>TodoApp</h1>
}


function Form ()
{
    function handleFormSubmit(){
      


        console.log("form submitted");
    }
    return (
        <form>
            <input type="text" placeholder="Eleman ekle"/>
            <select>
               {
                Array.from ({ length: 10 }, (v,i)=> i+1).map((num) =>(
                    <option key = {num} value = {num} >
                        {num}
                    </option>
                )
               )}
            </select>
            <button type="submit" onClick={handleFormSubmit}>Ekle</button>
        </form>
    )
}

function List() {
    return(
        <ul>
             { products.map((p, index) => (<ListItem item={p} key = {index}/>))}
        </ul>
    );
}

  function ListItem({item})
 {
     return (
     <li>
          <span style={item.completed ? {textDecoration: "line-through"} : {}}>{item.title} - {item.quantity}</span>
          <button>X</button>
     </li>
           );
}

function Summary ()
{
    return<div>Sepetinizde 11 ürün bulunmaktadır.</div>
}