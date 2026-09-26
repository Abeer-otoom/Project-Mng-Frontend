import React from "react";

const Home= React.memo(function Home(){
    return (
        <div>
            <header className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white">
                <div className=" container mx-auto px-6 py-24 md:py-32 text-center">
                    <h1 className="text-4xl">Manage Your Projects & Tasks <br />
                        with Ease</h1>
                    <p className="mt-1 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                        A modern task and project management app built with Laravel, React, and
                        MySQL. Stay productive, stay organized, and achieve more every day.
                    </p>
                    <div className="flex justify-center gap-2">
                        <a href="" className="btn bg-white text-indigo-700 rounded-lg shadow-lg border-1 border-white p-2 hover:scale-105 ">Get Started Free</a>
                        <a href="" className="btn bg-white text-indigo-700 rounded-lg shadow-lg border-1 border-white p-2 hover:scale-105  ">Login</a>

                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        className="w-full h-20 text-gray-50"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 320"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="currentColor" d="M0,192L1440,64L1440,320L0,320Z"></path>
                    </svg>
                </div>

            </header>
            <section>
                <div className=" container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 ">
                        Why Choose Our App?
                    </h2>
                    <div className="grid gap-10 md:grid-cols-3">
                        <div className="card rounded-lg shadow-lg border-1 border-white p-2 hover:scale-105">
                            <h1 className="text-xl font-semibold mb-4 text-indigo-600"> 🚀 Easy Task Management</h1>
                            <p className="text-gray-600">
                                Create, update, and track your tasks in a clean, intuitive
                                interface.
                            </p>
                        </div>
                        <div className="card rounded-lg shadow-lg border-1 border-white p-2 hover:scale-105">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                                📂 Organize Projects
                            </h3>
                            <p className="text-gray-600">
                                Group tasks into projects and keep everything structured and
                                efficient.
                            </p>
                        </div>
                        <div className="card rounded-lg shadow-lg border-1 border-white p-2 hover:scale-105">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                                ⏳ Boost Productivity
                            </h3>
                            <p className="text-gray-600">
                                Stay focused with priorities, deadlines, and progress tracking.
                            </p>
                        </div>


                    </div>
                </div>

            </section>
            <section className="pt-20 ">
                <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white">
                    <div className=" container mx-auto px-6 py-24 md:py-32 text-center">
                        <h1 className="text-4xl">Start Managing Your Work Today</h1>
                        <p className="mt-1 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                            Sign up for free and experience a smarter way to organize your tasks and
                            projects.
                        </p>
                        <div className="flex justify-center gap-2">
                            <a href="" className="btn bg-white text-indigo-700 rounded-lg shadow-lg border-1 border-white p-2 hover:scale-105 "> Create an Account</a>

                        </div>
                    </div>

                </div>
            </section>
            <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Task & Project Manager. All rights
                        reserved.
                    </p>
                </div>
            </footer>

        </div>

    );
})

export default Home