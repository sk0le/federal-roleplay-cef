import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import EventManager from "../../EventManager";
import "./authentication.scss";

export default function Authentication() {
  const [state, setState] = useState(true);

  const [register, setRegister] = useState(false);

  const display = (s: boolean) => setState(s);

  useEffect(() => {
    EventManager.addHandler("cef:authentication:dispaly", display);

    return () => {
      EventManager.removeHandler("cef:authentication:dispaly", display);
    };
  }, []);

  return state ? (
    <div className="authentication">
      <img src={require("../../assets/Character.png")} alt=""></img>
      <form className="authentication__login">
        <h1 className="server-name">
          Federal <span>RolePlay</span>
        </h1>

        <h2>{register ? "Register" : "Login"}</h2>

        <div className="inputs">
          <Input
            placeholder="Username..."
            type="text"
            className="input-login"
          />
          {register ? (
            <Input
              placeholder="Email..."
              type="email"
              className="input-login"
            />
          ) : (
            <></>
          )}
          <Input
            placeholder="Password..."
            type="password"
            className="input-login"
          />

          {register ? (
            <Input
              className="input-login"
              placeholder="Repeat Password..."
              type="password"
            />
          ) : (
            <></>
          )}
          {register ? <Input placeholder="Promo Code..." type="text" /> : <></>}
        </div>

        <div className="buttons">
          <Button
            text="Login"
            primary={true}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              if (register) setRegister(false);
            }}
          />
          <Button
            text="Register"
            primary={false}
            className="button-login-to-register"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              if (!register) setRegister(true);
            }}
          />
        </div>
      </form>
    </div>
  ) : (
    <></>
  );
}
