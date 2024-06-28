import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const pageFreelancerHandler = () => {
    navigate("/freelancer")
  };
  const pageOwnerHandler = () => {
    navigate("/owner")
  };
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <h1 className="p-4 text-xl text-secondary-700">صفحه اصلی</h1>
        <button className="btn btn--primary" onClick={pageFreelancerHandler}>ورود به عنوان فریلنسر</button>
        <button className="btn btn--primary" onClick={pageOwnerHandler}>ورود به عنوان کارفرما</button>
      </div>
    </div>
  );
}
export default Home;
