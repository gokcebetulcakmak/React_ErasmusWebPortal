import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import background from '../img/background1.jpg'

export default function Kayit() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
   
        e.preventDefault();

        if(password !== passRepeat){
            setError("Sifreler eslesmiyor!");
            return;
        }

        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        setPassRepeat('');
        setSuccess('Kayit Olusturuldu. Giris yapabilirsiniz.');
        setError('');
       
  setTimeout(() => {
   
    navigate('/');
  }, 1000);
    }
  return (
    <div  style={{ backgroundImage:`url(${background})`, height:"100vh", opacity:"0.9", backgroundSize:"cover" }}>
    <div className="form-box mb-3 mt-3">
        <div className="form-value">
            <form onSubmit={handleSubmit}>
                <h2>Hesap Oluşturun</h2>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="email" id="email" value={email} onChange= {(e) => setEmail(e.target.value)}  required/>
                    <label >Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" id="sifre" value={password}  onChange= {(e) => setPassword(e.target.value)}  minLength = "6"  required/>
                    <label >Şifrenizi giriniz :</label>
                </div>
                <div className="inputbox">
                  <ion-icon name="lock-closed-outline"></ion-icon>
                  <input type="password" id="reSifre" value={passRepeat}  onChange= {(e) => setPassRepeat(e.target.value)}  minLength = "6" required/>
                  <label>Şifrenizi tekrar giriniz :</label>
              </div>
              <button className="btn2" type="submit">Kayıt Ol</button>
            </form>
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
            <p className="text-white mt-2">Hesabınız var mı? <Link to={"/"} className="px-2 text-white mt-2">Giriş Yap</Link></p>
         
        </div>
    </div>
    </div>
  )
}
