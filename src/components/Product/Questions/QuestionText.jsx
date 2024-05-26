import Image from "next/image";
import React from "react";

const QuestionText = () => {
  return (
    <div>
      <p className="opacity-60">Hola que talle es ?</p>
      <Image
        className="opacity-15 w-[25px] absolute rotate-[49deg]"
        src={
          "https://www.nicepng.com/png/full/888-8882359_png-file-svg-check-mark-svg-icon.png"
        }
        width={100}
        height={100}
      />
      <p className="ml-8 opacity-40 mt-1">Hola que tal, es talle XL</p>
    </div>
  );
};

export default QuestionText;
