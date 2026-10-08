import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { useParams } from "react-router-dom";
import api from "../axios";
import { useAuth } from "../context/AuthContext";
import { getProject } from "../services/projectService";

export default function ProjectDetails() {
    const { id } = useParams();
    const [projectDetail, setProjectDetail] = useState([]);
    const [tasks,setTasks]=useState([]);
    const { token } = useAuth();


    useEffect(() => {

        const fetchProject = async () => {
            try {
                // const token = localStorage.getItem('token');
                const response = await getProject(token , id)

                setProjectDetail(response.data);
                setTasks(response.data.tasks)

            }
            catch (error) {
                console.log("Error:", error);


            }
            finally {

            }
        }
        fetchProject();

    }, [id]);
    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-50 min-h-screen">
                {/* Project Info Card */}
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        {projectDetail.name}
                    </h2>
                    <p className="text-gray-600 mb-4">
                        {projectDetail.description}
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <div>
                            <span className="text-sm text-gray-500">Due Date</span>
                            <p className="text-gray-800 font-medium">{projectDetail?.due_date}</p>
                        </div>

                    </div>
                </div>

                {/* Tasks Table */}
                {tasks.length==0 ? (<div className="text-gray-500">No Task Added</div>) : (
                     <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    S.No
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Task Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Due Date
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {tasks.map((task)=>
                              <tr key={task.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{task.id}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                   {task.title}
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    {task.description}
                                </td>
                                <td className="px-6 py-4 text-yellow-600 font-medium">
                                    {task.status}
                                </td>
                                <td className="px-6 py-4 text-gray-700">{task.due_date}</td>
                            </tr>
                            )}
                          

                        </tbody>
                    </table>
                </div>
                ) }
               
            </div>
        </DashboardLayout>
    );
}
