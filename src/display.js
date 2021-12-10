import image from "./images/image1.svg";
const Display = ({ name, age, images }) => {
  return (
    <article className="article-list">
      <img className="article-img" src={image} alt={name} />
      <div className="article-div">
        <h3 className="article-h3">{name}</h3>
        <p className="article-p">{age} years</p>
      </div>
    </article>
  );
};
export default Display;
