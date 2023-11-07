import Python from "./course/Python";
import Javascript from "./course/Javascript";
import Html from "./course/Html";
import Css from "./course/Css";

const Course = () => {
  return (
    <div className="-mt-5">
    <div className=" bg-[#B4C0D1] flex-row ">
        <div className=" text-center font-extrabold font-poppins text-5xl leading-loose">
            <h1 className="mt-5 pt-16 text-sky-950 -mb-10 "> Featured Course</h1>
        </div>
    <div className=" flex justify-center items-center">
      <div className="-ml-60">
        <Python />
      </div>
      <div className="-ml-40">
        <Javascript />
      </div>
      </div>
      <div className=" flex justify-center  items-center">
      <div className="-ml-60">
        <Html />
      </div>
      <div className="-ml-40">
        <Css />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Course;
