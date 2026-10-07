
import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useAuth();


    useEffect(() => {
        const fetchProject = async () => {

            try {


                // const token = localStorage.getItem("token");


                const response = await api.get("projects",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });


                setProjects(response.data.projects);



            }
            catch (error) {

                console.log("error fetching data", error);


            }
            finally {

                setLoading(false)

            }

        };

        fetchProject();

    }, []);


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm("Are you sure delete this project");
        if (!confirmDelete) return;

        try {
            // const token = localStorage.getItem("token");


            const response = await api.delete(`projects/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

            //remove the deleted fron Ui
            setProjects(projects.filter((project) => project.id !== id));
            toast.success('Project Deleteing Succefully')


        }
        catch (error) {
            console.log("error delete data", error);

            toast.error('Something went wrong with deleting the project')


        }
        finally {

        }
    };


    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h1>

                    <Link to="/projects/add" className="px-2 py-2 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition">
                        Add New
                    </Link>

                </div>


                {loading ? (<p className="text-gray-600">Loading Projects.....</p>) : projects.length === 0 ?
                    (<p className="text-gray-600">No Project Found</p>) : (
                        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            S.No
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Due Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200">
                                    {projects.map((project) => (
                                        <tr key={project.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">{project.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                                                {project.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                                                {project.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                                                {project.due_date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                                <Link to={`/projects/details/${project.id}`} className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                                                    View
                                                </Link>
                                                <Link to={`/projects/edit/${project.id}`} className="px-3 py-1 bg-yellow-400 text-white text-sm rounded hover:bg-yellow-500 transition">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(project.id)} className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )

                                    )}





                                </tbody>
                            </table>
                        </div>

                    )}


            </div>
        </DashboardLayout>
    );
}
