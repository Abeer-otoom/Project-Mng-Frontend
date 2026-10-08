import api from "../axios";

export const getAllTask = async (token) => {

    try {
        const response = await api.get("tasks",
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
export const deleteTask = async (id, token) => {

    try {
        const response = await api.delete(`tasks/${id}`,
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
export const createTask = async (data, token) => {
    try {
        const response = await api.post('/tasks', data,
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

export const getTask = async (token, id) => {
    try {
        const response = await api.get(`/tasks/${id}`, {
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

export const doUpdateTask = async (data, token, id) => {
    try {
        const response = await api.put(`/tasks/${id}`, data,
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

