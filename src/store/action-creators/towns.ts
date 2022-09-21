export const addTown = (townName: string) => {
    return {
        payload: {
            name: townName,
            id: "id" + new Date().getTime(),
        },
    };
};

export const deleteTown = (id: string) => {
    return {
        payload: id,
    };
};
