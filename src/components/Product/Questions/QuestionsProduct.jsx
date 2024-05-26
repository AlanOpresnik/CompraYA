import { SearchOutlined } from "@mui/icons-material";
import { Avatar, Button, Rating, TextField } from "@mui/material";
import React from "react";
import QuestionText from "./QuestionText";
import Image from "next/image";

const QuestionsProduct = () => {
  return (
    <div className="flex flex-col-reverse md:grid grid-cols-2">
      <div className="max-w-[32rem] border-b pb-6">
        <div className="mb-12  ">
          <h4 className="text-2xl">Preguntas y respuestas</h4>
        </div>
        <div>
          <p className="text-lg mb-2 font-semibold">
            Preguntale a Alan Opresnik
          </p>
          <form className="md:flex items-center relative">
            <textarea
              rows={2}
              className="w-full md:hidden border-2 resize-none rounded-lg  py-4 px-2"
              placeholder="Escribi una pregunta..."
            />
            <TextField
              fullWidth
              className="w-full hidden md:block"
              placeholder="Hacer una pregunta..."
            />
            <Button className="bg-blue-500 hidden hover:bg-blue-400 absolute h-[58px] w-[58px] md:flex justify-center items-center rounded right-[39px] md:right-[-58px]">
              <SearchOutlined sx={{ color: "white" }} />
            </Button>
            <Button
              className="mt-2  block md:hidden rounded-lg"
              size="large"
              variant="contained"
              fullWidth
            >
              Preguntar
            </Button>
          </form>
        </div>
        <div className="mt-12">
          <p className=" mb-6 font-semibold">Ultimas preguntas realizadas</p>
        </div>
        <div className="relative">
          <QuestionText />
        </div>
      </div>
      <div className=" md:border-l px-0 md:px-6">
        <h4 className="text-2xl">Informacion del vendedor</h4>
        <div className=" flex flex-col-reverse border-b pb-12 md:border rounded-xl shadow-lg px-4 md:px-6 mb-12 mt-6 md:grid grid-cols-2 place-items-center">
          <div>
            <p className="mt-12 text-sm">
              Nombre: <span className="text-blue-500">Alan Opresnik</span>
            </p>
            <p className="mt-2 text-sm">
              Cantidad de Ventas: <span className="main-color-text">54</span>
            </p>
            <div className="flex md:block  items-center gap-2">
              <p className="mt-2 text-sm">Calificacion del vendedor</p>
              <div className="flex items-center gap-1">
                <Rating className="mt-2" readOnly value={4.3} />
                <span className="text-xs mt-3 hidden md:block">4.3</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Avatar
              className="rounded-full w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
              src="https://img.freepik.com/foto-gratis/hombre-feliz-pie-playa_107420-9868.jpg?1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsProduct;
