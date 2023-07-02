import { BiSearch } from "react-icons/bi";
import style from "@/app/styles/hero.module.css";
import Hero_buttons from "./Hero_buttons";

const HeroPage = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src="images/joshikigf.png"
            className="img-fluid"
            alt="gf hai meri koi bol mat diyo"
          />
          <div className={style.input_group}>
            <input type="text" placeholder="search music here..." />
            <button>
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 d-flex  flex-column justify-content-center align-items-center">
          <h1 className={style.Title_text}>
            Your <span className="text-success">Everyday</span>
            <br />
            mood booster
          </h1>

          <p className="text-justify mt-2">
           Start your day with your favorite music or explore new
            melodies that can be your today's company
          </p>

          <Hero_buttons/>
        </div>
      </div>
     
    </div>
  );
};

export default HeroPage;
