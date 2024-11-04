import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section class="section1">
        <div class="wrap">
          <div class="box">
            <h1>
              С помощью верстки я создам ту жизнь, о которой <span>мечтаю!</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam doloremque dignissimos, architecto accusantium mollitia reprehenderit molestiae accusamus similique! Repudiandae!
            </p>
            <button>Двигаться к мечте!</button>
          </div>
          <img src="https://abbos29.github.io/dream/img/main.png" alt="" className="trip" />
        </div>
      </section>
    </>
  );
};

export default Hero;
