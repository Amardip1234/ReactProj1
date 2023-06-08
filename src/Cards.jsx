import './index.css'
function Cards(props) {
    return(<>
    <div className="cards">
      <div className="card">
        <img src={props.img} alt="img" className="card_img" />
        <div className="card_info">
          <span className="card_category">{props.Title}</span>
          <h3 className="card_title">{props.Sname}</h3>
          <span className='name'>{props.name}</span>
          <a href={props.link}>
            <button className='btn'>Watch Now</button> 
          </a>
        </div>
      </div>
    </div>
  </>)
}
export default Cards;
