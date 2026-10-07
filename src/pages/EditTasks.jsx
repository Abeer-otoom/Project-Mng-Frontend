import { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import api from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditTasks() {
    const [title, setTitle] = useState("");
    const [projectId, setProjectId] = useState(null);
    const [status, setStatus] = useState(null);
    const [projects, setProjects] = useState([]);
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
    const {id}=useParams();


        useEffect(() => {
        const featchTaskAndProject = async () => {

            try {


                const token = localStorage.getItem("token");


                //fetch all project
                const projectResponse = await api.get("projects",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                   


                setProjects(projectResponse.data.projects);

                //get task data
                const taskReponse=await api.get(`/tasks/${id}`,
                    {
                          headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }

                );



                setTitle(taskReponse.data.title)
                setDescription(taskReponse.data.description);
                setProjectId(taskReponse.data.project_id);
                setDueDate(taskReponse.data.due_date);
                setStatus(taskReponse.data.status)





            }
            catch (error) {

                console.log("error fetching data", error);


            }
            finally {

                setLoading(false)

            }

        };

        featchTaskAndProject();

    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const response = await api.put(`/tasks/${id}`, {
                title: title,
                description: description,
                due_date: dueDate,
                project_id: projectId,
                status : status



            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            // alert("Task Add successfully");
            toast.success("Task Add successfully")
            navigate('/tasks');

        }
        catch (error) {
            console.log("Error:", error);
            // alert("Error in Adding projects")
            toast.error("Error in Adding projects")
            

        }
        finally {
            setLoading(false);
        }
    }


    




    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="w-full bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                       Edit Task
                    </h2>

                    <form className="space-y-4 w-full" onSubmit={handleSubmit}>

                            {/* Project */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Select Project
                            </label>
                            <select  value={projectId}
                            onChange={(e)=>setProjectId(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2">
                                <option value="">SelectOption</option>
                                { projects.map((project)=>(
                                      <option value={project.id} key={project.id} >{project.name}</option>
                                  
                                ))}

                            </select>
                           
                        </div>
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter project title"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                placeholder="Enter project description"
                                rows="4"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                                required
                            ></textarea>
                        </div>

                        {/* Due Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Due Date
                            </label>
                            <input
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                                required
                            />
                        </div>

                        {/* Staatus */}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Select Staus
                            </label>
                            <select  value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2">
                                <option value="">SelectOption</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress">InProgress</option>
                                <option value="completed">Completed</option>

                               

                            </select>
                           
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md shadow hover:bg-blue-700 transition"
                            >
                                {loading ? 'Submiting...' : 'Submit' }
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
