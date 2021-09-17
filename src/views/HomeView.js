import { Button } from "react-bootstrap";
import ReviewsCard from "../components/ReviewsCard";

const reviews = [
  {
    name: "Maria",
    quote: '"OMG this was so delicious Jesus Christ I almost died."',
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Isaura",
    quote:
      '"I pointed a gun at my husband and told him I would shoot if he didn\'t get me one of these desserts"',
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Carlos",
    quote: '"I need this in my life every day of my life"',
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Kelly",
    quote: '"Can someone make sure they serve this at my funeral?"',
    rating: "⭐️⭐️⭐️⭐️⭐️",
  },
];

const HomeView = () => {
  const heroImage =
    "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/St._Pierre.png?itok=HhhYeGBa";

  return (
    <>
      <div className="section1">
        <img
          src={heroImage}
          alt=""
          style={{ filter: "brightness(0.7)", width: "100%" }}
        />
        <div className="hero-text">
          <h1>LETTY'S CAKES</h1>
        </div>
        <div className="hero-subtext">
          <p>Gourmet Sweets & Desserts Custom Made</p>
          <Button href="/sweets" variant="outline-light" size="lg">
            Browse Desserts
          </Button>
        </div>
      </div>
      <div className="section2">
        <h3>~ Customer Reviews ~</h3>
        {reviews &&
          reviews.map((review) => (
            <div key={review} className="col" className="reviews-container">
              <ReviewsCard props={review} />
            </div>
          ))}
      </div>
    </>
  );
};

export default HomeView;
// Gourmet Sweets & Desserts Custom Made
