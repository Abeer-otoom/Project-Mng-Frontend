import api from "../axios";

export const getAllProject = async (token) => {

    try {
        const response = await api.get("projects",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

        return response;

    }
    catch (error) {
        console.log("error fetching data", error);


    }



}
export const deleteProject = async (id, token) => {

    try {
        const response = await api.delete(`projects/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        return response;


    }
    catch (error) {
        console.log("error fetching data", error);


    }

}
export const createProject = async (data, token) => {
    try {
        const response = await api.post('/projects', data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;

    }
    catch (error) {
        console.log("error fetching data", error);


    }
}

export const getProject = async (token, id) => {
    try {
        const response = await api.get(`/projects/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;

    }
    catch (error) {
        console.log("error fetching data", error);


    }
}

export const doUpdateProject = async (data, token, id) => {
    try {
        const response = await api.put(`/projects/${id}`, data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )

        return response;

    }
    catch (error) {
        console.log("error fetching data", error);


    }
}

