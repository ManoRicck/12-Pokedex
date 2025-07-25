import React from "react";
import { useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebaseConfig";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPokemonTab, setToast, setUserStatus } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/constants";

export default function Footer() {
  const location = useLocation();
  const currentPokemonTab = useAppSelector(
    ({ app: { currentPokemonTab } }) => currentPokemonTab
  );
  const dispatch = useAppDispatch();
  const logOutUser = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast("Desconectado com sucesso"));
  };
  const routes = [
    {
      name: pokemonTabs.description,
      value: "Descrição",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolução",
    },
    {
      name: pokemonTabs.locations,
      value: "Localização",
    },
    {
      name: pokemonTabs.moves,
      value: "Habilidades",
    },
  ];
  return (
    <footer>
      <div className="block"></div>
      <div className="data">
        {location.pathname.includes("/pokemon") && (
          <ul>
            {routes.map((route) => (
              <li
                key={route.name}
                className={`${
                  currentPokemonTab === route.name ? "active" : ""
                }`}
                onClick={() => dispatch(setPokemonTab(route.name))}
              >
                {route.value}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="block">
        <FiLogOut onClick={logOutUser} />
      </div>
    </footer>
  );
}
