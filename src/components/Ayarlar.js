import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const changePassword = (currentPassword, newPassword, newPasswordRepeat) => {
  const storedPassword = sessionStorage.getItem("password");

  if (currentPassword !== storedPassword) {
    return "Mevcut şifre hatalı";
  }

  if (newPassword !== newPasswordRepeat) {
    return "Yeni şifreler uyuşmuyor";
  }

  sessionStorage.setItem("password", newPassword);
  return "Şifreniz başarıyla değiştirildi";
};

export default function Ayarlar() {
  const navigate = useNavigate();
  useEffect(() => {
    var isLogin = sessionStorage.getItem("isLogin");
    if (isLogin !== "true") {
      navigate("/");
    }
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = changePassword(
      currentPassword,
      newPassword,
      newPasswordRepeat
    );
    setMessage(result);
    setCurrentPassword("");
    setNewPassword("");
    setNewPasswordRepeat("");
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="col-md-10 mx-auto home mt-4 ">
        <div className="row">
          <div className="col-md-4 text-white">
            <h3>Şifre Değiştirme</h3>
            <form id="change-password-form" onSubmit={handleSubmit}>
              <div className="form-group mt-2">
                <label htmlFor="current-password">Mevcut Şifre:</label>
                <input
                  type="password"
                  className="form-control"
                  id="current-password"
                  name="current-password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="new-password">Yeni Şifre:</label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password"
                  name="new-password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="new-password-repeat">
                  Yeni Şifre (Tekrar):
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="new-password-repeat"
                  name="new-password-repeat"
                  required
                  value={newPasswordRepeat}
                  onChange={(e) => setNewPasswordRepeat(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Değiştir
              </button>
              <div className="mt-2">{message}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
