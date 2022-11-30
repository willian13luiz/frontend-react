import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="itemMenu" to="/">
              Início
            </Link>
          </li>
          <li>
            <Link className="itemMenu" to="/usuarios">
              Usuários
            </Link>
          </li>
          <li>
            <Link className="itemMenu" to="/sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="itemMenu" to="/pessoas">
              CRUD
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
