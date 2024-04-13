// import { useState, useEffect } from "react"
// import Menu from "../components/Menu"

// const Home = () => {
//     const [data, setData] = useState()
//     const [ user, setUser ] = useState({
//         isAuthenticated: true
//     })
//     useEffect (() => {
//         fetch(` https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`)
//         .then(res=>res.json())
//         .then(data => {
//         setData(data.hits)
//         })
//     }, [])
//     return (
//         <div>
//         {
//             user.isAuthenticated && data && data.map((item, idx) => {
//             return <Menu key={idx} label={item.recipe.label} shareAs={item.recipe.shareAs} source={item.recipe.source} />
//             })
//         }
//         <p>{localStorage.getItem('token')}</p>
//         </div>
//     )
// }

// export default Home


import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState();
  const [user, setUser] = useState({
    isAuthenticated: true,
  });
  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${import.meta.env.VITE_APP_ID}&app_key=${import.meta.env.VITE_APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.hits);
        console.log(data.hits);
      });
  }, []);

  return (
    <div className="home-container">
      {user.isAuthenticated && data && (
        <div className="menu-list">
          {data.map((item, idx) => (
            <Menu
              key={idx}
              label={item.recipe.label}
              shareAs={item.recipe.shareAs}
              source={item.recipe.source}
              imageUri={item.recipe.image}
            />
          ))}
        </div>
      )}
      <p className="token-message">Here is your token:{localStorage.getItem("token")}</p>
    </div>
  );
};

export default Home;
