import React from "react";
import Header from "../../components/Header";
import useGetData from "../../hooks/useGetData";
import Container from "../../layout/Container";
import classes from "./New.module.scss";

const New = () => {
  const [data] = useGetData("/");
  console.log(data);
  return (
    <Container>
      <Header />
      <section>
        <div className={classes["bux"]}>
          {data &&
            data.map((d) => (
              <div className={classes["itemss"]}>
                <img className={classes["imagee"]} src={d.image} alt="" />
                <h1 className="img">{d.name}</h1>
                <p>{d.price}</p>
              </div>
            ))}
        </div>
      </section>
    </Container>
  );
};

export default New;
