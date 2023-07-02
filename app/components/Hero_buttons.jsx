import {BsArrowRight } from "react-icons/bs";

const Hero_buttons = () => {
  return (
    <div className="d-flex">
      
      <button type="button" class="btn btn-danger">
        Try For Free
      </button>
      
      

      <button type="button" class="btn btn-link">
       Learn More <BsArrowRight className="ms-2"/>
      </button>
    </div>
  );
};

export default Hero_buttons;
