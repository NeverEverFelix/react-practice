

function header({title, subtitle}) {
    const cardTitle = prompt("What is your profiles title");
    if(cardTitle){
        const cardsubTitle = prompt("What is your profiles subtitle");
    }
    return(
        cardTitle,cardsubTitle
    );
}

function profileCard(header){
    const job = prompt("what is your job title");
    return(

    );
}
function footer(){
    return(

    );
}




function card({profileCard, footer}) {
  return (
    <div className="card">
      <h2>profileCard.name</h2>
      <p>profileCard.description</p>
      <footer>
    <p>
        ShopSim Training 2024
    </p>
      </footer>
    </div>
  );
}
export default card;