const MenuView=(props)=>{

   const{title,itemCards}=props
   console.log(props)
   
  
if(title!=undefined && itemCards!=undefined){
    return (
                <div className="items-overview">
                    <h2>
                      {title+" ("}
                      {itemCards.length+")"}
                    </h2>
                    <button>See inside</button>
                  </div>
            )
}else if(itemCards===undefined && title!=undefined){

    return (
        <div className="items-overview">
            <h2>
              {title}
            </h2>
            <button>See more</button>
          </div>
    )
}

};


export default MenuView;