import React, { useState, ChangeEvent, FormEvent } from "react";
import { useEffect } from "react";
import Layout from '../../components/ui/layout/layout/Layout'
interface LoginFormState {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email: " + formData.email);
    console.log("Password: " + formData.password);
  };
  const [height, setHeight] = useState("100vh");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 0.8;
    }
    setHeight(`${window.innerHeight}px`);
  }, []);
  return (
    <Layout title="Frankgualada">
      <section
        className="relative mt-0"
        style={{
          height,
        }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          poster="/img/bannerImages/home-video-poster.png"
          className="absolute w-full h-screen mt-0 z-0 object-cover"
          style={{
            height,
          }}
        >
          <source src="/video/sofacado.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center mt-20 pt-20 h-full flex-col">
        <div className="max-w-md mx-auto mt-8">
        <h1>LogIn</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="**********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        </div>
        </div>
      </section>
    </ Layout>
  );
};


export default LoginForm;