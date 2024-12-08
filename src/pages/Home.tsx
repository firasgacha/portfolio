import { NavLink } from "react-router-dom";
import { HireMe } from "../components/HireMe";
import { Tools } from "../components/Tools";
import {Card} from "../components/Card.tsx";

export function Home() {
    return (
        <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col overflow-hidden">
            <section className="flex flex-col md:flex-row nav-padding w-full items-center justify-center">
                <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
                    <div className="text-start">
                        <h3 className="text-5xl font-bold mb-6">Hey!</h3>
                        <h1 className="text-5xl font-bold">I'm <span className="text-purple-600">Firas</span></h1>
                        <h1 className="text-5xl font-bold text-purple-600">Software engineer</h1>
                        <p className="py-6">
                            I am a talented developer with a strong passion for JavaScript frameworks. <br />

                            I am always eager to learn, continually seeking opportunities for improvement, and ready to embrace new challenges.
                        </p>
                    </div>

                    <h6 className="paragraph-regular pt-6 text-white-600 max-w-lg flex items-center">
                        Find me
                        <span className="inline-flex space-x-4 ml-2">
                            <a href={"https://www.linkedin.com/in/firasgacha/"} target="_blank">
                                <span className="text-twitter hover:text-[#0072b1] text-2xl">
                                    <i className="ri-linkedin-box-fill"></i>
                                </span>
                            </a>
                            <a href={"https://github.com/firasgacha"} target="_blank">
                                <span className="text-github hover:text-gray-400 text-2xl">
                                    <i className="ri-github-fill"></i>
                                </span>
                            </a>
                        </span>
                    </h6>

                    <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 pt-7">
                        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                            <a href={`mailto:firasgacha.inbox@gmail.com`}>
                                <span className="flex items-center space-x-2">
                                    <i className="ri-mail-line"></i>
                                    <span>Email Me</span>
                                </span>
                            </a>
                        </button>

                        <button className="btn btn-neutral btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                            <a
                                href={"https://tr.ee/ueMKvVgXj4"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="flex items-center space-x-2">
                                    <i className="ri-download-cloud-line"></i>
                                    <span>Resume</span>
                                </span>
                            </a>
                        </button>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-full md:w-1/2 p-4">
                    <div className="avatar">
                        <Card image={"src/assets/profile.png"}
                              name={"profile-img"}
                              imageClassName={"w-72 rounded-full"}
                              titleClassName={"font-bold"}
                              descriptionClassName={"card-body"}
                        />
                    </div>
                </div>
            </section>

            <Tools />

            <HireMe />

            <div className="alert flex justify-between p-5 mt-10">
                <h1 className="text-3xl font-bold">Interested in working with me?</h1>
                <div>
                    <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-5">
                        <NavLink to={"/contact"}>
                            <span className="flex items-center space-x-2">
                                <i className="ri-mail-line"></i>
                                <span>Contact Me</span>
                            </span>
                        </NavLink>
                    </button>
                </div>
            </div>
        </main>
    );
}
