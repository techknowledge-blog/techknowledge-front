import React, { useState } from "react";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

import TechknowledgeMiniLogo from "../../assets/images/techKnowledge-mini-logo.svg";
import { ModalSocialMedia } from "../modal/ModalSocialMedia";

import ImageFounder from "../../assets/images/leticia.jpeg";
import ImageCoFounder from "../../assets/images/mikael.jpeg";

type SocialMedia = "Instagram" | "Twitter" | "LinkedIn" | "GitHub";

interface SocialMediaContent {
  socialMedia: string;
  founders: {
    name: string;
    photo: string;
    link: string;
  }[];
}

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<
    SocialMedia | ""
  >("");

  const socialMediaContent: Record<SocialMedia, SocialMediaContent> = {
    Instagram: {
      socialMedia: "Instagram",
      founders: [
        {
          name: "Leticia Dias",
          photo: ImageFounder,
          link: "https://www.instagram.com/leticiadias.dev/",
        },
        {
          name: "Mikael Ribeiro",
          photo: ImageCoFounder,
          link: "https://www.instagram.com/mikkaiser_/",
        },
      ],
    },
    Twitter: {
      socialMedia: "Twitter",
      founders: [
        {
          name: "Leticia Dias",
          photo: ImageFounder,
          link: "https://x.com/leticiadiasdev",
        },
        {
          name: "Mikael Ribeiro",
          photo: ImageCoFounder,
          link: "",
        },
      ],
    },
    LinkedIn: {
      socialMedia: "LinkedIn",
      founders: [
        {
          name: "Leticia Dias",
          photo: ImageFounder,
          link: "https://www.linkedin.com/in/leticia-dia/",
        },
        {
          name: "Mikael Ribeiro",
          photo: ImageCoFounder,
          link: "https://www.linkedin.com/in/mikael-ribeiro/",
        },
      ],
    },
    GitHub: {
      socialMedia: "GitHub",
      founders: [
        {
          name: "Leticia Dias",
          photo: ImageFounder,
          link: "https://github.com/leticiadia",
        },
        {
          name: "Mikael Ribeiro",
          photo: ImageCoFounder,
          link: "https://github.com/Mikkaiser",
        },
      ],
    },
  };

  const handleOpenModal = (socialMedia: SocialMedia) => {
    setSelectedSocialMedia(socialMedia);
    setIsOpen(true);
  };

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-b-4 border-b-[#00C2FF] mt-16 p-4 sm:flex-row sm:py-6 lg:py-8">
      <div className="flex flex-col items-center sm:flex-row sm:gap-4">
        <div className="flex gap-6 mb-4 sm:mb-0">
          <button onClick={() => handleOpenModal("Instagram")}>
            <InstagramLogo size={24} />
          </button>

          <button onClick={() => handleOpenModal("Twitter")}>
            <XLogo size={24} />
          </button>

          <button onClick={() => handleOpenModal("LinkedIn")}>
            <LinkedinLogo size={24} />
          </button>

          <button onClick={() => handleOpenModal("GitHub")}>
            <GithubLogo size={24} />
          </button>

          <ModalSocialMedia
            open={isOpen}
            onClose={() => setIsOpen(false)}
            content={
              selectedSocialMedia
                ? socialMediaContent[selectedSocialMedia]
                : undefined
            }
          />
        </div>

        <div className="hidden sm:block sm:mx-4 sm:h-6 sm:w-1 sm:bg-blue-300"></div>

        <p className="text-center sm:text-left">
          © 2022. Todos os direitos reservados ao TechKnowledge.
        </p>
      </div>

      <div>
        <img
          src={TechknowledgeMiniLogo}
          className="h-6"
          alt="TechKnowledge Logo"
        />
      </div>
    </footer>
  );
}
