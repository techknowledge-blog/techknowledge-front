import React from "react";

import { Header } from "./components/header/Header";
import styles from "./App.module.css";

import ImageTecnologies from "./assets/images/technologies.png";
import { CaretRight } from "../node_modules/@phosphor-icons/react/dist/index";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <section className={styles.section_main}>
            <div className={styles.column_left}>
              <p className="text-5xl w-[34rem] font-semibold leading-[3.5rem]">
                Um blog para compartilharmos conhecimento da área da{" "}
                <span className="text-blue-500">tecnologia</span>.
              </p>

              <div className={styles.buttons}>
                <a
                  href="#"
                  className="bg-blue-500 py-3 px-6 flex items-center gap-1
                  justify-center rounded-full font-semibold hover:bg-blue-600"
                >
                  Sobre nós
                  <CaretRight size={16} color="#ffffff" weight="bold" />
                </a>
                <a
                  href="#"
                  className="text-blue-500 py-3 px-6 flex items-center 
                  justify-center gap-1 font-semibold hover:underline"
                >
                  Comunidade
                  <CaretRight size={16} color="#39A0ED" weight="bold" />
                </a>
              </div>
            </div>

            <div>
              <img src={ImageTecnologies} className="h-96" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
