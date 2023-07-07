import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";

import { Form, Loader } from "../componenets";

const PostCreate = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[33px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[15px] max-w-[500px]">
          Use your creative Imagination and create visually stunning images
          through DALL-E AI and share them with your friends.
        </p>
      </div>
    </section>
  );
};

export default PostCreate;
