import { baseURL } from "./configData";

export const fetchData = async (dispatch,offset) => {
    try {
        const response = await fetch(`${baseURL}/pokemon?limit=16&offset=${offset}`);
        const result = await response.json();
        // dispatch(getPokemonList(result?.results));
    } catch (error) {
        console.log("error", error);
    } 
};