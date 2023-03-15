import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";
import useGetData from "../../hooks/useGetData";
import Container from "../../layout/Container";

import classes from "./Category.module.scss";

const Category = () => {
  const { type } = useParams();
  const [data] = useGetData(`?category=${type}`);
  return (
    <>
      <Container>
        <Header />
        <Navbar />
        <h1 className={classes["pizza__title"]}>Все пиццы</h1>
        <div className={classes["pizza-content"]}>
          {data &&
            data.map((card) => (
              <Product
                key={card.id}
                data={card}
                className={classes["pizzaItem"]}
              />
            ))}
        </div>
      </Container>
    </>
  );
};

export default Category;
