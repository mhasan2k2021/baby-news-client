import React from "react";
import { Button } from "react-bootstrap";
import {
  BsGoogle,
  BsGithub,
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsWhatsapp,
  BsDiscord,
  BsFillShieldLockFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ControlledCarousel from "./Carousels/Carousels";

const RightSide = () => {
  return (
    <div className="">
      <Button className="d-block mb-2 " variant="outline-primary">
        <BsGoogle className="mx-2" />
        Log in via Google
      </Button>
      <Button className="d-block mb-2" variant="outline-primary">
        <BsGithub className="mx-2" /> Log in via Github
      </Button>
      <div>
        <ButtonGroup vertical>
          <h6 className="mt-3 mb-2">Find Us On</h6>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsFacebook className="me-2" /> FaceBook
          </Button>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsYoutube className="me-2" /> YouTube
          </Button>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsTwitter className="me-2" /> Twitter
          </Button>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsWhatsapp className="me-2" /> WhatsApp
          </Button>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsDiscord className="me-2" /> Discord
          </Button>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsFillShieldLockFill className="me-2" /> Privacy Policy
          </Button>
          <Button
            className="mb-2 d-flex align-items-center "
            variant="outline-secondary"
          >
            <BsReverseLayoutTextSidebarReverse className="me-2" /> Terms &
            Condition
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <ControlledCarousel />
      </div>
    </div>
  );
};

export default RightSide;
