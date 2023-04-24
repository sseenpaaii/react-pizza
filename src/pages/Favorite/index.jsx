import React from "react";
import Header from "../../components/Header";
import useGetData from "../../hooks/useGetData";
import Container from "../../layout/Container";
import classes from "./Favorite.module.scss";

const Favorite = () => {
  const [data] = useGetData("/");
  console.log(data);
  return (
    <Container>
      <Header />
      <section>
        <div className={classes["box"]}>
          {data &&
            data.map((d) => (
              <div className={classes["items"]}>
                <img className={classes["image"]} src={d.image} alt="" />
                <h1 className="img">{d.name}</h1>
                <p>{d.price}</p>
              </div>
            ))}
        </div>
      </section>
    </Container>
  );
};

export default Favorite;
