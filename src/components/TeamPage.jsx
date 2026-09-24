import { Link } from "react-router-dom";
import Eyebrow from "./Eyebrow";

import gilberto from "../assets/team/Gilberto_camiseta_branca_sorrindo.webp";
import abraao from "../assets/team/Abraão_Nóbrega.webp";
import andre from "../assets/team/André_Victor.webp";
import anthony from "../assets/team/Anthony.webp";
import bruno from "../assets/team/Bruno_Xavier.webp";
import carolinac from "../assets/team/Carolina_Clemens.webp";
import carolinaf from "../assets/team/Carolina_Ferreira.webp";
import carolinag from "../assets/team/Carolina_Galvanese.webp";
import cecilia from "../assets/team/Cecília_Alarsa.webp";
import cicero  from "../assets/team/Cícero_Ramos.webp";
import cinthia from "../assets/team/Cinthia.webp";
import cristiane from "../assets/team/Cristiane-Magalhaes.webp";
import daria from "../assets/team/Dária_Cardoso_2.webp";
import douglas from "../assets/team/Douglas_Schimatto4.webp";
import fabiana from "../assets/team/Fabiana_2.webp";
import fernando from "../assets/team/Fernando_Henrique_Mamédio.webp";
import flavia from "../assets/team/Flavia_Piovani.webp";
import giselly from "../assets/team/Giselly.webp";
import guilherme from "../assets/team/Guilherme_Brito.webp";
import igor from "../assets/team/Igor_Teixeira.webp";
import irineu from "../assets/team/Irineu_dos_Santos.webp";
import isabelac from "../assets/team/Isabela_Cavalcanti_Martins.webp";
import isabelan from "../assets/team/Isabela_Nogueira.webp";
import isabelas from "../assets/team/Isabela_Nogueira_da_Silva.webp";
import jhonnes from "../assets/team/Jhonnes_Alberto_Vaz.webp";
import jose from "../assets/team/José_Luiz_da_Silva_Neto.webp";
import leandro from "../assets/team/Leandro_Viana.webp";
import manoel from "../assets/team/Manoel_Luis.webp";
import mariab from "../assets/team/Maria_Beatriz_Pizzo.webp";
import mariao from "../assets/team/Maria_de_Oliveira.webp";
import mariar from "../assets/team/Maria_Rosane_Ribeiro.webp";
import mariana from "../assets/team/Mariana_Penido.webp";
import mateus from "../assets/team/Mateus_Duarte.webp";
import mateuss from "../assets/team/Mateus_Sampaio.webp";
import matheus from "../assets/team/Matheus_Martins.webp";
import osmane from "../assets/team/Osmane_Ribeiro.webp";
import paulo from "../assets/team/Paulo_Rodrigo.webp";
import pedroh from "../assets/team/Pedro_Henrique_Silva.webp";
import pedroi from "../assets/team/Pedro_Ivo_Valdez.webp";
import sandoval from "../assets/team/Sandoval_Amparo.webp";
import sergio from "../assets/team/Sérgio_Botton.webp";
import uendri from "../assets/team/Uendry_Maia.webp";
import veronica from "../assets/team/Verioní_4.webp";
import vinicius from "../assets/team/Vinnícius_Dionísio.webp";



// Substitua pelos nomes, cargos e fotos reais do time.
// `image` deve apontar para o caminho da foto (ex.: import ou "/team/nome.webp").
// Se `image` ficar vazio/undefined, o card exibe um placeholder.


const TEAM = [
  { name: "Dr. Gilberto Pessanha Ribeiro", role: "Fundador(a) & CEO", image: gilberto },
  { name: "Abraão Nóbrega", role: "", image: abraao },
  { name: "André Victor", role: "", image: andre },
  { name: "Anthony", role: "", image: anthony },
  { name: "Bruno Xavier", role: "", image: bruno },
  { name: "Carolina Clemens", role: "", image: carolinac },
  { name: "Carolina Ferreira", role: "", image: carolinaf },
  { name: "Carolina Galvanese", role: "", image: carolinag },
  { name: "Cecília Alarsa", role: "", image: cecilia },
  { name: "Cícero Ramos", role: "", image: cicero },
  { name: "Cinthia", role: "", image: cinthia },
  { name: "Cristiane Magalhaes", role: "", image: cristiane },
  { name: "Dária Cardoso", role: "", image: daria },
  { name: "Douglas Schimatto", role: "", image: douglas },
  { name: "Fabiana", role: "", image: fabiana },
  { name: "Fernando Henrique Mamédio", role: "", image: fernando },
  { name: "Flavia Piovani", role: "", image: flavia },
  { name: "Giselly", role: "", image: giselly },
  { name: "Guilherme Brito", role: "", image: guilherme },
  { name: "Igor Teixeira", role: "", image: igor },
  { name: "Irineu dos Santos", role: "", image: irineu },
  { name: "Isabela Cavalcanti Martins", role: "", image: isabelac },
  { name: "Isabela Nogueira", role: "", image: isabelan },
  { name: "Isabela Nogueira da Silva", role: "", image: isabelas },
  { name: "Jhonnes Alberto Vaz", role: "", image: jhonnes },
  { name: "José Luiz da Silva Neto", role: "", image: jose },
  { name: "Leandro Viana", role: "", image: leandro },
  { name: "Manoel Luis", role: "", image: manoel },
  { name: "Maria Beatriz Pizzo", role: "", image: mariab },
  { name: "Maria de Oliveira", role: "", image: mariao },
  { name: "Maria Rosane Ribeiro", role: "", image: mariar },
  { name: "Mariana Penido", role: "", image: mariana },
  { name: "Mateus Duarte", role: "", image: mateus },
  { name: "Mateus Sampaio", role: "", image: mateuss },
  { name: "Matheus Martins", role: "", image: matheus },
  { name: "Osmane Ribeiro", role: "", image: osmane },
  { name: "Paulo Rodrigo", role: "", image: paulo },
  { name: "Pedro Henrique Silva", role: "", image: pedroh },
  { name: "Pedro Ivo Valdez", role: "", image: pedroi },
  { name: "Sandoval Amparo", role: "", image: sandoval },
  { name: "Sérgio Botton", role: "", image: sergio },
  { name: "Uendry Maia", role: "", image: uendri },
  { name: "Veronica", role: "", image: veronica },
  { name: "Vinnícius Dionísio", role: "", image: vinicius },
];

export default function TeamPage() {
  return (
    <>
      <section className="container-page pb-20 pt-28 sm:pb-28 sm:pt-32">
        <Eyebrow label="Equipe" code="01" />

        <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          As pessoas por trás de cada mapa que se transforma em decisão.
        </h1>

        <p className="mt-6 max-w-2xl text-slate">
          A cartogeo nasceu para aproximar tecnologia geoespacial de quem toma
          decisão todos os dias. Cada pessoa do time traz uma combinação
          diferente de cartografia, dados e engenharia — e é dessa mistura que
          nascem as soluções que construímos junto com nossos clientes.
        </p>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((person) => (
            <div
              key={`${person.name}-${person.role}`}
              className="flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-6 text-center"
            >
              {person.image ? (
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-20 w-20 flex-none rounded-full object-cover"
                />
              ) : (
                <div
                  className="h-16 w-16 flex-none rounded-full bg-paper"
                  aria-hidden="true"
                />
              )}
              <div>
                <p className="font-semibold text-ink">{person.name}</p>
                <p className="text-sm text-slate">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <div className="rounded-xl border border-line bg-white p-8 sm:p-12">
          <Eyebrow label="Trabalhe com a gente" code="02" />
          <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Um time construído com propósito e visão de futuro
          </h2>
          <p className="mt-4 max-w-xl text-slate">
            Valorizamos responsabilidade, colaboração e aprendizado contínuo.
            Se você se interessa por tecnologia geoespacial e quer construir
            soluções que realmente são usadas, queremos te conhecer.
          </p>
          <a
            href="https://wa.me/5583988016010?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20cartogeo%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-beacon"
          >
            Fale com a gente
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <section className="container-page pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate hover:text-ink"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-180" fill="none" aria-hidden="true">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Voltar para a página inicial
        </Link>
      </section>
    </>
  );
}
