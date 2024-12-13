import React from "react";
import closeModal from "../../assets/icons/close.svg";

interface Founder {
  name: string;
  photo: string;
  link: string;
}

type ModalSocialMediaProps = {
  open: boolean;
  onClose: () => void;
  content?: {
    socialMedia: string;
    founders: Founder[];
  };
};

export function ModalSocialMedia({
  open,
  onClose,
  content,
}: ModalSocialMediaProps) {
  if (!open || !content) return null;

  const { socialMedia, founders } = content;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#374151] p-6 sm:p-8 rounded shadow-lg w-full sm:w-3/4 md:w-1/2 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-bold text-lg md:text-xl">
            Rede Social: {socialMedia}
          </h2>
          <button onClick={onClose} className="p-2">
            <img src={closeModal} alt="Close modal" className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={founder.photo}
                alt={founder.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 border-4 border-blue-500"
              />
              <h2 className="text-sm md:text-lg font-bold text-white">
                {founder.name}
              </h2>
              <a
                href={founder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline mt-2 text-sm md:text-base"
              >
                Visitar perfil
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
