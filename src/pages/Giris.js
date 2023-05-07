import React, { useState } from "react";
import "./Giris.css";
import background from "../img/background1.jpg";
import { Link, useNavigate } from "react-router-dom";



export default function Giris() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const kullanici_adi = sessionStorage.getItem("email");
    const sifre = sessionStorage.getItem("password");

    if (email === kullanici_adi && password === sifre) {
      setIsLogin(true);
      sessionStorage.setItem("isLogin", true);

      setTimeout(() => {
   
        navigate('/portal');
      });
    
    } else {
      setError("Hatali kullanici adi veya sifre!");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        opacity: "0.9",
        backgroundSize: "cover",
      }}
    >
      <div className="form-box  mb-3 mt-3">
        <div className="form-value">
          <form onSubmit={handleSubmit}>
            <h2>Giriş</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                id="sifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Şifre</label>
            </div>
            <button className="btn2" type="submit">
              {" "}
              Giriş Yap{" "}
            </button>
          </form>
    
          <p className="text-white mt-3 ">
            Hesabınız yok mu?{" "}
            <Link to="/kayit" className="px-2 text-white">
              {" "}
              Kayıt Ol
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
